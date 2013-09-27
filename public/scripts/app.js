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
  'app.controllers.denies',
  'app.controllers.cs',
  'app.controllers.nav',
  'app.controllers.lasthits'
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