angular.module('app', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'FrameController',
          templateUrl: 'views/frame.html'
        })
        .when('/test', {
          controller: 'TestController',
          templateUrl: 'views/test.html'
        });
    }
  ]);