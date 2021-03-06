angular.module('app.services.options', [])
  .factory('Options', [function () { 
    return {
      csOptions:
        {
          //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke : false,

          //Number - The width of each segment stroke
          segmentStrokeWidth : 3,

          //The percentage of the chart that we cut out of the middle.
          percentageInnerCutout : 25,
          
          //Boolean - Whether we should animate the chart   
          animation : true,
          
          //Number - Amount of animation steps
          animationSteps : 100,
          
          //String - Animation easing effect
          animationEasing : "easeInOutElastic",
          
          //Boolean - Whether we animate the rotation of the Doughnut
          animateRotate : true,

          //Boolean - Whether we animate scaling the Doughnut from the centre
          animateScale : false,
          
          //Function - Will fire on animation completion.
          onAnimationComplete : null
        },
      deniesOptions:
        {
          //Boolean - If we show the scale above the chart data     
          scaleOverlay : false,
          
          //Boolean - If we want to override with a hard coded scale
          scaleOverride : true,
          
          //** Required if scaleOverride is true **
          //Number - The number of steps in a hard coded scale
          scaleSteps : 2,
          //Number - The value jump in the hard coded scale
          scaleStepWidth : 1,
          //Number - The scale starting value
          scaleStartValue : 0,

          //String - Colour of the scale line 
          scaleLineColor : "rgba(0,0,0,1)",
          
          //Number - Pixel width of the scale line  
          scaleLineWidth : 1,

          //Boolean - Whether to show labels on the scale 
          scaleShowLabels : true,
          
          //Interpolated JS string - can access value
          scaleLabel : "<%=value%>",
          
          //String - Scale label font declaration for the scale label
          scaleFontFamily : "'Arial'",
          
          //Number - Scale label font size in pixels  
          scaleFontSize : 16,
          
          //String - Scale label font weight style  
          scaleFontStyle : "normal",
          
          //String - Scale label font colour  
          scaleFontColor : "#000",  
          
          ///Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : true,
          
          //String - Colour of the grid lines
          scaleGridLineColor : "rgba(0,0,0,.6)",
          
          //Number - Width of the grid lines
          scaleGridLineWidth : 1, 
          
          //Boolean - Whether the line is curved between points
          bezierCurve : false,
          
          //Boolean - Whether to show a dot for each point
          pointDot : true,
          
          //Number - Radius of each point dot in pixels
          pointDotRadius : 3,
          
          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth : 1,
          
          //Boolean - Whether to show a stroke for datasets
          datasetStroke : true,
          
          //Number - Pixel width of dataset stroke
          datasetStrokeWidth : 3,
          
          //Boolean - Whether to fill the dataset with a colour
          datasetFill : true,
          
          //Boolean - Whether to animate the chart
          animation : true,

          //Number - Number of animation steps
          animationSteps : 60,
          
          //String - Animation easing effect
          animationEasing : "easeInOutElastic",

          //Function - Fires when the animation is complete
          onAnimationComplete : null
        },

      kdaOptions:
        {
          //Boolean - Whether we should show a stroke on each segment
          segmentShowStroke : true,

          //String - The colour of each segment stroke
          segmentStrokeColor : "gray",

          //Number - The width of each segment stroke
          segmentStrokeWidth : 2,

          //Boolean - Whether we should animate the chart
          animation : true,

          //Number - Amount of animation steps
          animationSteps : 100,

          //String - Animation easing effect
          animationEasing : "easeOutBounce",

          //Boolean - Whether we animate the rotation of the Pie
          animateRotate : true,

          //Boolean - Whether we animate scaling the Pie from the centre
          animateScale : true
        },

      lastHitOptions:
        {
          //Boolean - If we show the scale above the chart data     
          scaleOverlay : false,
          
          //Boolean - If we want to override with a hard coded scale
          scaleOverride : false,
          
          //** Required if scaleOverride is true **
          //Number - The number of steps in a hard coded scale
          scaleSteps : null,
          //Number - The value jump in the hard coded scale
          scaleStepWidth : null,
          //Number - The scale starting value
          scaleStartValue : null,

          //String - Colour of the scale line 
          scaleLineColor : "rgba(0,0,0,1)",
          
          //Number - Pixel width of the scale line  
          scaleLineWidth : 1,

          //Boolean - Whether to show labels on the scale 
          scaleShowLabels : true,
          
          //Interpolated JS string - can access value
          scaleLabel : "<%=value%>",
          
          //String - Scale label font declaration for the scale label
          scaleFontFamily : "'Arial'",
          
          //Number - Scale label font size in pixels  
          scaleFontSize : 14,
          
          //String - Scale label font weight style  
          scaleFontStyle : "normal",
          
          //String - Scale label font colour  
          scaleFontColor : "#000",  
          
          ///Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : true,
          
          //String - Colour of the grid lines
          scaleGridLineColor : "rgba(0,0,0,.6)",
          
          //Number - Width of the grid lines
          scaleGridLineWidth : 1, 
          
          //Boolean - Whether the line is curved between points
          bezierCurve : false,
          
          //Boolean - Whether to show a dot for each point
          pointDot : true,
          
          //Number - Radius of each point dot in pixels
          pointDotRadius : 3,
          
          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth : 1,
          
          //Boolean - Whether to show a stroke for datasets
          datasetStroke : true,
          
          //Number - Pixel width of dataset stroke
          datasetStrokeWidth : 3,
          
          //Boolean - Whether to fill the dataset with a colour
          datasetFill : true,
          
          //Boolean - Whether to animate the chart
          animation : true,

          //Number - Number of animation steps
          animationSteps : 60,
          
          //String - Animation easing effect
          animationEasing : "easeInOutElastic",

          //Function - Fires when the animation is complete
          onAnimationComplete : null
        },
      runesOptions:
        {
          //Boolean - If we show the scale above the chart data            
          scaleOverlay : false,
          
          //Boolean - If we want to override with a hard coded scale
          scaleOverride : true,
          
          //** Required if scaleOverride is true **
          //Number - The number of steps in a hard coded scale
          scaleSteps : 6,
          //Number - The value jump in the hard coded scale
          scaleStepWidth : 1,
          //Number - The scale starting value
          scaleStartValue : 0,

          //String - Colour of the scale line     
          scaleLineColor : "rgba(0,0,0,1)",
          
          //Number - Pixel width of the scale line     
          scaleLineWidth : 1,

          //Boolean - Whether to show labels on the scale   
          scaleShowLabels : true,
          
          //Interpolated JS string - can access value
          scaleLabel : "<%=value%>",
          
          //String - Scale label font declaration for the scale label
          scaleFontFamily : "'Arial'",
          
          //Number - Scale label font size in pixels   
          scaleFontSize : 12,
          
          //String - Scale label font weight style     
          scaleFontStyle : "normal",
          
          //String - Scale label font colour 
          scaleFontColor : "#000", 
          
          ///Boolean - Whether grid lines are shown across the chart
          scaleShowGridLines : true,
          
          //String - Colour of the grid lines
          scaleGridLineColor : "rgba(0,0,0,.6)",
          
          //Number - Width of the grid lines
          scaleGridLineWidth : 1,  

          //Boolean - If there is a stroke on each bar 
          barShowStroke : false,
          
          //Number - Pixel width of the bar stroke     
          barStrokeWidth : 2,
          
          //Number - Spacing between each of the X value sets
          barValueSpacing : 5,
          
          //Number - Spacing between data sets within X values
          barDatasetSpacing : 1,
          
          //Boolean - Whether to animate the chart
          animation : true,

          //Number - Number of animation steps
          animationSteps : 60,
          
          //String - Animation easing effect
          animationEasing : "easeInOutElastic",

          //Function - Fires when the animation is complete
          onAnimationComplete : null
       }  
    };
  }]);