// Ping widget — measures round-trip to google.com via Image trick
// Colors: green < 80ms, blue 80-200ms, red > 200ms
(function(){
  var el = document.getElementById('ping-widget');
  if(!el) return;

  function setColor(ms){
    var c = ms < 80 ? '#4ade80' : ms < 200 ? '#60a5fa' : '#f87171';
    document.getElementById('ping-dot').style.setProperty('--ping-color', c);
    document.getElementById('ping-dot').style.background = c;
    document.getElementById('ping-dot').style.boxShadow = '0 0 0 0 ' + c;
    document.getElementById('ping-val').style.color = c;
  }

  function doPing(){
    var start = performance.now();
    var img = new Image();
    img.onload = img.onerror = function(){
      var ms = Math.round(performance.now() - start);
      document.getElementById('ping-val').textContent = ms + 'ms';
      setColor(ms);
    };
    // Cache-bust so browser actually fetches
    img.src = 'https://www.google.com/favicon.ico?' + Date.now();
  }

  doPing();
  setInterval(doPing, 5000);
})();
