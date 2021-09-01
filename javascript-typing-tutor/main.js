/*
- create storage for list of all span elements, select all span elements and store
- create storage for accessing HTML span element
- create storage for index count, set to 0
- create function for keydown event
    - if keydown key is equal to the text content of the span at the index
      - set HTML span element class name at index to green text
      - increment count
      - set the span element at index, class name to underline
    - otherwise
      - set HTML span element class name at index to red text and underline
  - add event listener to this storage of span elements listening for keydown and with function for that event

*/

var $spans = document.querySelectorAll('span');
var index = 0;
var $accuracy = document.querySelector('.accuracy');
var $playAgain = document.querySelector('.play-again');
var $yesButton = document.querySelector('.yes-button');
var $noButton = document.querySelector('.no-button');
var $overlay = document.querySelector('.overlay');
var totalKeyClicks = 0;
var incorrectClicks = 0;
var accuracy;

function keydown(event) {
  if (event.key === $spans[index].textContent) {
    totalKeyClicks++;
    $spans[index].className = 'green-text';
    index++;
    $spans[index].className = 'underline';
  } else {
    $spans[index].className = 'red-text underline';
    incorrectClicks++;
    totalKeyClicks++;
  }
}

document.addEventListener('keydown', keydown);

// Optional enhancements
function endOfPhrase(event) {
  if (index >= $spans.length) {
    $accuracy.className = 'accuracy';
    accuracy = Math.floor(((totalKeyClicks - incorrectClicks) / totalKeyClicks) * 100);
    $accuracy.textContent = 'Accuracy: ' + accuracy + '%';
    $overlay.className = 'overlay';
    $playAgain.className = 'play-again';
  }
}

function playAgain(event) {
  index = 0;
  $spans[0].className = 'underline';
  for (var i = 1; i < $spans.length; i++) {
    $spans[i].className = '';
  }
  $accuracy.className = 'accuracy hide';
  $playAgain.className = 'play-again hide';
  $overlay.className = 'overlay hide';
  totalKeyClicks = 0;
  incorrectClicks = 0;
}

function noPlayAgain(event) {
  $playAgain.className = 'play-again hide';
  $overlay.className = 'overlay hide';
}

document.addEventListener('keydown', endOfPhrase);
$yesButton.addEventListener('click', playAgain);
$noButton.addEventListener('click', noPlayAgain);
