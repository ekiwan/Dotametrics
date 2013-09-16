angular.module('app.services.data', [])
  .factory('Data', [function () { 
    return {
      data: {
        kills: 10,
        deaths: 3,
        assists: 5,
        message: 'hello'
      }
    };
  }]);