angular.module('app.controllers.denies', ['app.services.data', 'app.services.options'])
  .controller('DeniesController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log('denies chart controller', $scope)

    $scope.deniesData = Data.getDeniesData();

    $scope.$watch('deniesData', function(n) {
      if (!n) return;

      $scope.chart = {
        labels : n.deniesTimestamps,
        datasets : [
          {
            fillColor : "rgba(79,143,73,0.2)",
            strokeColor : "rgba(22,79,16,1)",
            pointColor : "rgba(79,143,73,0)",
            pointStrokeColor : "rgba(79,143,73,1)",
            data : $scope.deniesData 
          }
        ]
      };
    });
  
    $scope.options = Options.deniesOptions;
  }]);