/* exported reverseWords */
/*
  - create storage for output
  - look at each character one by one from the back
    - create storage for the current word
    - if the character is a space
      - add the current word to output
      - clear current word
      - add character to current word
    - otherwise
      - add character to current word
  - add last value for current word to output
  - look at each character one by one from the back
    -if the character is a space
      - add the current word to output
      - clear current word
      - add character to current word
    - otherwise
      - add character to current word
    - add last value for current word to output
  - return output
*/

/*
  - create storage for output
  - create storage for current word
  - look at each character one by one
    - if character is a space
      - look at each character in current word one by one from the back
        - add character to output
      - add character (space)
      - clear current word storage
    -otherwise
      - add character to current word
  - look at each character in last current word one by one from the back
    - add character to output
  - return output
*/
function reverseWords(string) {
  var newStr = '';
  var currWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      for (var j = currWord.length - 1; j >= 0; j--) {
        newStr += currWord[j];
      }
      newStr += string[i];
      currWord = '';
    } else {
      currWord += string[i];
    }
  }
  for (var k = currWord.length - 1; k >= 0; k--) {
    newStr += currWord[k];
  }
  return newStr;
}
