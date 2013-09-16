angular.module('app.services.data', [])
  .factory('Data', [function () { 
    return {
      data: [10, 6, 6],
      message: 'hello'
    };
  }]);