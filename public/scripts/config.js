angular.module('dotametrics')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/denies', {
          controller: 'DeniesController',
          templateUrl: 'templates/denies.html'
        })
        .when('/cs', {
          controller: 'csController',
          templateUrl: 'templates/cs.html'
        })
        .when('/lasthits', {
          controller: 'LastHitsController',
          templateUrl: 'templates/lasthits.html'
        })
        .when('/kda', {
          controller: 'KdaController',
          templateUrl: 'templates/kda.html'
        })
        .when('/runes', {
          controller: 'RuneController',
          templateUrl: 'templates/runes.html'
        })
    }
  ]);