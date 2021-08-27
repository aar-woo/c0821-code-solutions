/* exported getFirstChar */
/* Pseudo Code
  - create storage for output
  - look at each character in string one at a time
    - if character is at the first position in the string
      - add character to output
  - return output
*/

function getFirstChar(string) {
  var firstChar = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      firstChar += string[i];
    }
  }
  return firstChar;
}
