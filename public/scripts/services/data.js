angular.module('app.services.data', [])
  .factory('Data', ['$http', '$q', function ($http, $q) { 
    return {
        getDeniesData: function() {
          var d = $q.defer();
          $http.get('/api/denies/npc_dota_hero_furion')
            .success(function(data) {
              var newData = {};
              newData.deniesData = data[1];
              newData.deniesTimestamps = data[0];
              console.log("data->", newData);
              d.resolve(newData);
            })
            .error(function(data, status) {
              console.log('ya blew it')
            });
          return d.promise;
        },
        getKdaData: function() {
          $http.get('/api/kda/npc_dota_hero_furion')
            .success(function(data) {
              scope.kills = data.kills;
              scope.deaths = data.deaths;
              scope.assists = data.assists;
            })
            .error(function(data, status) {
              console.log('ya blew it')
            });
        },
        getLastHitData: function(scope) {
          //console.log("making the request")
          $http.get('/api/cs/npc_dota_hero_furion')
            .success(function(data) {
              scope.lastHitData = data[1];
              scope.lastHitTimestamps = data[0];
            })
            .error(function(data, status) {
              console.log('ya blew it')
            });
        },
        getRunesData: function(scope) {
          $http.get('/api/runes')
            .success(function(data) {
              scope.runesDataRadiant = [[data.npc_dota_hero_mirana, data.npc_dota_hero_pudge].reduce(function(a, b) {return a + b})];
              scope.runesDataDire = [[data.npc_dota_hero_tinker, data.npc_dota_hero_furion, data.npc_dota_hero_slardar].reduce(function(a, b) {return a + b})];
              scope.runesHeroes = ['Rune Control'];
            })
            .error(function(data, status) {
              console.log('ya blew it')
            });
        }
    };
  }]);