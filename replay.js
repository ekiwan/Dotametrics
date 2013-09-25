var cs = require('./data/cs.js');
var denies = require('./data/denies.js');
var _ = require('underscore');
var convertSeconds = function(number) {
  var realTime = number / 30;
  var mins = Math.floor( realTime / 60 );
  var secs = Math.floor( realTime % 60 );
  return mins + ":" + secs;
}
module.exports = {
  countLastHits: function(heroName) {
    var count = 0;
    var total = 0;
    var lastHits = [[],[]];
    for (var i = 0; i < cs.length; i++) {
      if (cs[i].hero === heroName) {
        count++;
        if (count >= 10 || i === cs.length - 1) {
          console.log(i)
          total += count;
          lastHits[1].push(total);
          lastHits[0].push(convertSeconds(cs[i].time));
          count = 0;
        }
      }
    }
    return lastHits;
  }
};