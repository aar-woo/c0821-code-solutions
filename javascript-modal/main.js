/*
  - create storage for HTML element open modal button
  - create storage for HTML element no button
  - create storage for HTML overlay element
  - create function for open modal button click
    - set overlay class name to overlay
  - create function for no button click
    - set overlay class name to overlay hide
  - add listener to open modal button executing function for modal button on click event
  - add listener to no button executing function for no button on click event
*/

var $openButton = document.querySelector('.open-button');
var $noButton = document.querySelector('.no-button');
var $overlay = document.querySelector('.overlay');

function openModalClick(event) {
  $overlay.className = 'overlay';
}

function noButtonClick(even) {
  $overlay.className = 'overlay hide';
}

$openButton.addEventListener('click', openModalClick);
$noButton.addEventListener('click', noButtonClick);
