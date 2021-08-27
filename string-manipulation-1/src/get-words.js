/* exported getWords */
/* Pseudo Code
  - create storage for output
  - create storage for current word
  - if string is empty
    - return storage for output
  - look at each character in string one at a time
    - if the character is a space
      - add the current word to output
      - clear current word
    - otherwise
      - add character to current word
  - add the last value of current word to output
  - return output
*/

function getWords(string) {
  var words = [];
  var currentWord = '';
  if (string === '') {
    return words;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      words.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  words.push(currentWord);
  return words;
}
