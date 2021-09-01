/* exported swapChars */
/*
  - create storage for output
  - look at each character one by one
    - if the index of the character is equal to firstIndex
      - add the character at second index to output
    - else if character is at second index
      - add character at first index to output
    - otherwise
      - add character to output
  - return output
*/

function swapChars(firstIndex, secondIndex, string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newStr += string[secondIndex];
    } else if (i === secondIndex) {
      newStr += string[firstIndex];
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
