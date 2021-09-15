var $imagesList = document.querySelectorAll('.img');
var $dotsDiv = document.querySelector('.dots');
var $dotList = document.querySelectorAll('.fa-circle');
var $leftArr = document.querySelector('.fa-chevron-left');
var $rightArr = document.querySelector('.fa-chevron-right');

function changeImg() {
  var currIndex;
  for (var i = 0; i < $imagesList.length; i++) {
    if ($imagesList[i].matches('.view')) {
      currIndex = i;
    }
    $imagesList[i].className = 'hidden img';
    $dotList[i].className = 'far fa-circle';
  }
  currIndex++;
  if (currIndex >= $imagesList.length) {
    currIndex = 0;
  }
  $imagesList[currIndex].className = 'view img';
  $dotList[currIndex].className = 'fas fa-circle';
}

function startCarousel() {
  clearInterval(onLoadIntervalId);
  var newIntervalId;
  newIntervalId = setInterval(changeImg, 3000);
  clearInterval(newIntervalId - 1);
}

function leftArrowClick() {
  for (var j = 0; j < $imagesList.length; j++) {
    if ($imagesList[j].matches('.view')) {
      var currIndex = j;
    }
    $imagesList[j].className = 'hidden img';
    $dotList[j].className = 'far fa-circle';
  }
  currIndex--;
  if (currIndex < 0) {
    currIndex = $imagesList.length - 1;
  }
  $imagesList[currIndex].className = 'view img';
  $dotList[currIndex].className = 'fas fa-circle';
  startCarousel();
}

function rightArrowClick() {
  changeImg();
  startCarousel();
}

$leftArr.addEventListener('click', leftArrowClick);
$rightArr.addEventListener('click', rightArrowClick);

function jumpToImg(event) {
  var targetDataView = event.target.getAttribute('data-view');
  var currIndex;
  for (var i = 0; i < $dotList.length; i++) {
    if ($dotList[i].getAttribute('data-view') === targetDataView) {
      currIndex = i;
    }
    $imagesList[i].className = 'hidden img';
    $dotList[i].className = 'far fa-circle';
  }
  $imagesList[currIndex].className = 'view img';
  $dotList[currIndex].className = 'fas fa-circle';
  startCarousel();
}

$dotsDiv.addEventListener('click', jumpToImg);

var onLoadIntervalId = setInterval(changeImg, 3000);
