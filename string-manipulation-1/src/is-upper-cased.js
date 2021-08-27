/* exported isUpperCased */
/* Pseudo Code
  - create storage for all uppercase version of word
  - look at each character one at a time
    - capitalize the character and add the character to storage for uppercase version of word
  - if the word and storage for uppercase version of word are the same
    - return true
  - otherwise
    - return false
*/

function isUpperCased(word) {
  var upperCasedWord = '';
  for (var i = 0; i < word.length; i++) {
    upperCasedWord += (word[i].toUpperCase());
  }
  if (word === upperCasedWord) {
    return true;
  } else {
    return false;
  }
}
