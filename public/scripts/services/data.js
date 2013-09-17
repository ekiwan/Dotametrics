angular.module('app.services.data', [])
  .factory('Data', [function () { 
    return {
      data: {
        barData:
          [
            [10, 6, 6],
            [5, 0, 5]
          ],
        kdaData: [12, 4, 9],
        winrateData:
          [
            [14.2,22.5,35,44.7,47,49.3,50,50.4,52.6],
            [28,39,40,44,47.6,49.6,53,56.4,58.8]
          ]
      }
    };
  }]);