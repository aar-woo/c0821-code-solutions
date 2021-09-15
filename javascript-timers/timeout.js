var $header = document.querySelector('h1');
function updateHeading() {
  $header.textContent = 'Hello There';
}
setTimeout(updateHeading, 2000);
