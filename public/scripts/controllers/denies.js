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
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "#f1c40f",
            pointColor : "rgba(151,187,205,0)",
            pointStrokeColor : "#f1c40f",
            data : $scope.deniesData 
          }
        ]
      };
    }
  })
    $scope.options = Options.deniesOptions;
  }]);