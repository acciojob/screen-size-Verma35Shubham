//your JS code here. If required.
function getWindowSize() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  var windowSizeElement = document.getElementById('sizeInfo').querySelector('h1');
  windowSizeElement.textContent = 'Width: ' + windowWidth + ' and Height: ' + windowHeight;
}

// Attach the event listener to the "resize" event
window.addEventListener('resize', getWindowSize);

// Initial call to get the window size
getWindowSize();