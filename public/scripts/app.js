//app
angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services'
]);

//Controllers
angular.module('app.controllers', [
  'app.controllers.frame',
  'app.controllers.test'
]);

//Directives
angular.module('app.directives', [
]);

//Filters
angular.module('app.filters', [
]);

//Services
angular.module('app.services', [
]);