angular.module('dotametrics')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/bar', {
          controller: 'BarController',
          templateUrl: 'templates/bar.html'
        })
        .when('/kda', {
          controller: 'KdaController',
          templateUrl: 'templates/kda.html'
        })
        .when('/winrate', {
          controller: 'WinrateController',
          templateUrl: 'templates/winrate.html'
        });
    }
  ]);