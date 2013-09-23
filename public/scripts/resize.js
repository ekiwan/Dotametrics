window.addEventListener('resize', function() {
  var canvas = document.getElementById('canvas');
  var parent = canvas.parentNode;
  canvas.width = parent.innerWidth;
  canvas.height = parent.innerHeight;
}, false);