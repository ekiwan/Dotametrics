angular.module('app.controllers.cs', ['app.services.data', 'app.services.options'])
  .controller('CsController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log('cs chart controller', $scope)
    $scope.lastHitData = [];
    Data.data.getLastHitData($scope);
    $scope.$watch('lastHitData', function() {
      $scope.chart = {
        labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept"],
        datasets : [
          {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "#f1c40f",
            pointColor : "rgba(151,187,205,0)",
            pointStrokeColor : "#f1c40f",
            data : $scope.lastHitData 
          }
        ],
      };
    })
    $scope.options = Options.lastHitOptions;
  }]);