module.exports = function(app) {

  var dazzle = require('dazzle');
  var dota2Api = new dazzle(global.config.APIKEY);

  app.get('/api/getMatches', function(req, res, next) {
    req.params.matches_requested = 2;
    console.log(req.params)
    dota2Api.getMatchHistory(req.params, function (err, response) {
      if(err) {
        return next(err);
      }
      res.json(response);
    });
  });
};

