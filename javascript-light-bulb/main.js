/*
  - create storage to access HTML element with bulb class
  - create storage to access HTML element with container class
  - create a function for when the bulb is clicked
    - if bulb class is equal to bulb bulb-dark
      - set bulb class name to bulb bulb-light
      - set container class name to container container-light
    - otherwise
      - set bulb class name to bulb bulb-dark
      - set container class name to container container-dark
  - add an event listener to bulb listening for click event and executing on click function
*/

var $bulb = document.querySelector('.bulb');
var $container = document.querySelector('.container');

function onClick(event) {
  if ($bulb.className === 'bulb bulb-dark') {
    $bulb.className = 'bulb bulb-light';
    $container.className = 'container container-light';
  } else {
    $bulb.className = 'bulb bulb-dark';
    $container.className = 'container container-dark';
  }
}

$bulb.addEventListener('click', onClick);
