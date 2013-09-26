angular.module('dotametrics')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/denies', {
          controller: 'DeniesController',
          templateUrl: 'templates/denies.html'
        })
        .when('/kda', {
          controller: 'KdaController',
          templateUrl: 'templates/kda.html'
        })
        .when('/lasthits', {
          controller: 'LastHitsController',
          templateUrl: 'templates/lasthits.html'
        });
    }
  ]);