angular.module('app.services.data', [])
  .factory('Data', ['$http', function ($http) { 
    return {
      data: {
        barData:
          [
            [10, 6, 6],
            [5, 0, 5]
          ],
        kdaData: [12, 4, 9],
        getLastHitData: function(scope) {
          console.log("making the request")
          $http.get('/api/cs/npc_dota_hero_furion')
            .success(function(data) {
              scope.lastHitData = data[1];

            })
            .error(function(data, status) {
              console.log('ya blew it')
            });
        }
      }
    };
  }]);