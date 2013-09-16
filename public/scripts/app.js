//app
angular.module('dotametrics', [
  //dependencies
  'ngRoute',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services'
]);

//Controllers
angular.module('app.controllers', [
  'app.controllers.graph',
  'app.controllers.nav'
]);

//Directives
angular.module('app.directives', [
]);

//Filters
angular.module('app.filters', [
]);

//Services
angular.module('app.services', [
  'app.services.data'
]);