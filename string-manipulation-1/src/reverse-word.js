/* exported reverseWord */
/* Pseudo Code
  - create storage for reversed word
  - look at each character in word one at a time starting from the last character
    - add character to storage for reversed word
  - return storage for reversed word
*/

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
