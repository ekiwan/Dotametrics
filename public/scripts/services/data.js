angular.module('app.services.data', [])
  .factory('Data', [function () { 
    return {
      data: {
        barData:
          [
            [10, 6, 6],
            [5, 0, 5]
          ],
        kdaData: [12, 4, 9]
      }
    };
  }]);