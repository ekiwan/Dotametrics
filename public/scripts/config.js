angular.module('dotametrics')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'GraphController',
          template: ''
        })
        .when('/', {
          controller: 'GraphController',
          templateUrl: 'templates/test.html'
        });
    }
  ]);