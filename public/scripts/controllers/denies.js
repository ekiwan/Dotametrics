angular.module('app.controllers.denies', ['app.services.data', 'app.services.options'])
  .controller('DeniesController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log('denies chart controller', $scope)
    Data.data.getDeniesData($scope);
  $scope.$watch('deniesData + deniesTimestamps', function() {
    if($scope.deniesData && $scope.deniesTimestamps) {
      $scope.chart = {
        labels : $scope.deniesTimestamps,
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
    }
  })
    $scope.options = Options.deniesOptions;
  }]);