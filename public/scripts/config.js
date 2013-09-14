angular.module('app')
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'FrameController',
          template: ''
        })
        .when('/test', {
          controller: 'TestController',
          templateUrl: 'templates/test.html'
        });
    }
  ]);