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
    var lastHitsOverTime = [[],[]];
    var heroLastHits = _.filter(cs, function(entry) {return entry.hero === heroName});
    for (var i = 0; i < heroLastHits.length; i++) {
      count++;
      if (count >= Math.round(heroLastHits.length / 10) || i === heroLastHits.length - 1) {
        total += count;
        lastHitsOverTime[1].push(total);
        lastHitsOverTime[0].push(convertSeconds(heroLastHits[i].time));
        count = 0;
      }
    }
    return lastHitsOverTime;
  },
  countDenies: function(heroName) {
    var count = 0;
    var total = 0;
    var deniesOverTime = [[],[]];
    var heroDenies = _.filter(denies, function(entry) {return entry.hero === heroName});
    for (var i = 0; i < heroDenies.length; i++) {
      count++;
      if (count >= Math.round(heroDenies.length / 10) || i === heroDenies.length - 1) {
        total += count;
        deniesOverTime[1].push(total);
        deniesOverTime[0].push(convertSeconds(heroDenies[i].time));
        count = 0;
      }
    }
    return deniesOverTime;
  }
};