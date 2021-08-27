/* exported getLastChar */
/* Pseudo Code
  - create storage for output
  - look at each character in string one by one
    - if character is in the last position in the string
      - add character to output
  - return output
*/

function getLastChar(string) {
  var lastChar = '';
  for (var i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
      lastChar += string[i];
    }
  }
  return lastChar;
}
