angular.module('dotametrics')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'GraphController',
          template: ''
        })
        .when('/', {
          controller: 'NavController',
          templateUrl: 'templates/nav.html'
        });
    }
  ]);