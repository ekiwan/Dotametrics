var cs = require('./data/cs.js');
var denies = require('./data/denies.js');
module.exports = {
  countLastHits: function(heroName) {
    var count = 0;
    for (var i = 0; i < cs.length; i++) {
      if (cs[i].hero === heroName) {
        count++;
      }
    }
    return count;
  }
};