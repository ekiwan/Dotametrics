//app
angular.module('dotametrics', [
  //dependencies
  'angles',
  'ngRoute',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services'
]);

//Controllers
angular.module('app.controllers', [
  'app.controllers.bar',
  'app.controllers.kda',
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
  'app.services.data',
  'app.services.options'
]);