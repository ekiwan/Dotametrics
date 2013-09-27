angular.module('app.services.data', [])
  .factory('Data', ['$http', function ($http) { 
    return {
      data: {
        getDeniesData: function(scope) {
          $http.get('/api/denies/npc_dota_hero_furion')
            .success(function(data) {
              scope.deniesData = data[1];
              scope.deniesTimestamps = data[0];
            })
            .error(function(data, status) {
              console.log('ya blew it')
            });
        },
        getKdaData: function(scope) {
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
        }
      }
    };
  }]);