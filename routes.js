var dazzle = require('dazzle');
var http = require('http');

var resolveVanityUrl = function(name, cb) {
  http.get('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' + global.config.APIKEY + '&vanityurl=' + name, function(res) {
    
    // Gather chunks of data
    var response = '';
    res.on('data', function(chunk) {
      response += chunk;
    });

    // When the response is complete
    res.on('end', function() {
      try {
        // Attempt to parse the JSON
        var obj = JSON.parse(response);
      }
      catch(err) {
        // JSON parse failed
        return cb(err, null);
      }

      // Success
      console.log('Fetched Steam ID: ', obj, obj.response.steamid)      

      if (obj.response.success !== 1) {
        return cb(new Error('Failed to fetch Steam ID'), null);
      }

      // Call callback if it is successful
      cb(null, obj.response.steamid);
    });

  }).on('error', function(err) {
    // Failed to fetch Steam ID
    console.log('Error fetching Steam ID: ' + err);
    cb(err, null);
  });
};

module.exports = function(app) {
  var dota2Api = new dazzle(global.config.APIKEY);

  app.get('/api/getMatches/:steamId', function(req, res, next) {
    console.log('Fetching Account ID for '+req.params.steamId);

    // Resolve the account ID from the steam vanity name
    resolveVanityUrl(req.params.steamId, function(err, accountId) {
      // Send error if it failed
      if (err) return res.json({ status: 0, message: err.message });

      console.log('Fetching history for Account ID '+accountId);

      // Get history
      dota2Api.getMatchHistory({ account_id: accountId }, function (err, response) {
        if (err) return res.json({ status: 0, message: err.message });

        // Send response
        console.log(response)
        res.json(response);
      });
    });

  });
};

