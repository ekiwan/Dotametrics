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
        kdaData: [12, 4, 9],
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