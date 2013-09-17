angular.module('dotametrics')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/bar', {
          controller: 'BarController',
          templateUrl: 'templates/bar.html'
        })
        // .when('/', {
        //   controller: 'NavController',
        //   templateUrl: 'templates/nav.html'
        // });
    }
  ]);