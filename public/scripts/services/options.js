angular.module('app.services.options', [])
  .factory('Options', [function () { 
    return {
      options: {
        //Boolean - If we show the scale above the chart data     
        scaleOverlay : true,
        //Boolean - If we want to override with a hard coded scale
        scaleOverride : true,
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps : 10,
        //Number - The value jump in the hard coded scale
        scaleStepWidth : 1,
        //Number - The scale starting value
        scaleStartValue : 0,
      }
    };
  }]);