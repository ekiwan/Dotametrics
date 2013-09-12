angular.module('app', ['ngRoute'])
.config([
  '$routeProvider',
  function($routeProvider) {
  $routeProvider.when('/',{
    controller: 'FrameController',
    templateUrl: 'views/frame.html'
  });
  }
]);