var dodger = document.getElementById('dodger');
      
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
        
  if ( left > 0 ) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if ( left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
      
document.addEventListener('keydown', function(e) {
  if ( e.key === 37 ) {
    moveDodgerLeft();
  }
  if ( e.key === 39 ) {
    moveDodgerRight();
  }
});