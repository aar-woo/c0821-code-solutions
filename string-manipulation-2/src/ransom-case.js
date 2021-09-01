/* exported ransomCase */
/*
  - create storage for output
  - look at each character one by one
    - if the remainder of the character's index is 1
      - uppercase the character and add it to output
    - otherwise
      - lowercase the character and add it to output
  - return output
*/
function ransomCase(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 1) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
  }
  return newStr;
}
