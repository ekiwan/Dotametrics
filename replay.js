var cs = require('./data/cs.js');
var denies = require('./data/denies.js');

var convertSeconds = function(number) {
  var realTime = number / 30;
  var mins = Math.floor( realTime / 60 );
  var secs = Math.floor( realTime % 60 );
  return mins + ":" + secs;
}
module.exports = {
  countLastHits: function(heroName) {
    var lastHits = [];
    var times = [];
    for (var i = 0; i < cs.length; i++) {
      if (cs[i].hero === heroName) {
        var seconds = cs[i].time / 30;
        var time = moment
      }
    }
    return count;
  }
};