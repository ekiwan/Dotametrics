angular.module('app.controllers.runes', ['app.services.data', 'app.services.options'])
  .controller('RunesController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) {
    console.log('runes chart controller', $scope)
    Data.data.getRunesData($scope);
    $scope.$watch('runesDataDire + runesDataRadiant + runesHeroes', function() {
      if($scope.runesDataDire && $scope.runesDataRadiant && $scope.runesHeroes) {
        $scope.chart = {
          labels : $scope.runesHeroes,
          datasets : [
            {
              fillColor : "rgba(151,187,205,1)",
              strokeColor : "rgba(151,187,205,1)",
              data : $scope.runesDataRadiant
            },
            {
              fillColor : "rgba(151,187,205,1)",
              strokeColor : "rgba(151,187,205,1)",
              data : $scope.runesDataDire
            }
          ]
        };
      }
    })
    $scope.options = Options.runesOptions
  }])