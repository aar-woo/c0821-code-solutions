/* exported isLowerCased */
/* Pseudo Code
  - create storage for all lowercase version of word
  - look at each character one at a time
    - lowercase the character and add that character to the storage for all lowercase version of word
  - if word and all lowercase version are the same
    - return true
  - otherwise
    - return false
*/

function isLowerCased(word) {
  var lowerCasedWord = '';
  for (var i = 0; i < word.length; i++) {
    lowerCasedWord += word[i].toLowerCase();
  }
  if (word === lowerCasedWord) {
    return true;
  } else {
    return false;
  }
}
