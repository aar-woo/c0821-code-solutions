var $header = document.querySelector('h1');
function updateHeading() {
  var headerValue = parseInt($header.textContent);
  if (headerValue === 1) {
    $header.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  } else {
    headerValue--;
    $header.textContent = headerValue;
  }
}

var intervalID = setInterval(updateHeading, 1000);
