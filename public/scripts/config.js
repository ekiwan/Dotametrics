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
        .when('/cs', {
          controller: 'CsController',
          templateUrl: 'templates/cs.html'
        });
    }
  ]);