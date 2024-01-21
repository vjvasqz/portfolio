// Simple zooming effect using JavaScript
window.addEventListener('scroll', function(){
  console.log('Scrolling...');
  var scrollPosition = window.scrollY;
  var zoomFactor = 1 + scrollPosition * 0.001; // Adjust the multiplier for the desired zoom speed

  document.getElementById('section1').style.transform = 'scale(' + zoomFactor + ')';
  document.getElementById('section2').style.transform = 'scale(' + zoomFactor + ')';
  // Adjust the IDs for additional sections
});