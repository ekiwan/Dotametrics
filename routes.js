module.exports = function(app) {

  var dazzle = require('dazzle');
  var dota2Api = new dazzle(global.config.APIKEY);

  var http = require('http');
  var apiKey = global.config.APIKEY;

  var resolveVanityUrl = function(name) {
    http.get('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' + apiKey + '&vanityurl=' + name, function(res) {
      res.on('data', function(chunk) {
        var response = JSON.parse(chunk.toString());
        console.log(response.response.steamid)
        return response.response.steamid;
      })
    }).on('error', function(err) {
      console.log("error: " + err.message);
    })
  };
  var account_id = resolveVanityUrl('gbks');
  console.log(account_id);

  app.get('/api/getMatches', function(req, res, next) {
    req.params.account_id = '76561197969394835';
    console.log(res.body)
    dota2Api.getMatchHistory(req.params, function (err, response) {
      if(err) {
        return next(err);
      }
      res.json(response);
    });
  });
};

