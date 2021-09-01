function handleFocus(event) {
  console.log("'focus' event was fired.");
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log("'blur' event fired.");
  console.log('event.targe.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

var $inputFirst = document.querySelector('#user-name');
var $inputSecond = document.querySelector('#user-email');
var $textarea = document.querySelector('#user-message');

$inputFirst.addEventListener('focus', handleFocus);
$inputFirst.addEventListener('blur', handleBlur);
$inputFirst.addEventListener('input', handleInput);

$inputSecond.addEventListener('focus', handleFocus);
$inputSecond.addEventListener('blur', handleBlur);
$inputSecond.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
