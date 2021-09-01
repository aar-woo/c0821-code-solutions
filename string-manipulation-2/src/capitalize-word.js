/* exported capitalizeWord */
/*
  - create storage for output
  - create storage for javascript comparison string, all lowercase
  - create storage for all lowercase word
  - lowercase the word and add to all lowercase word storage
  - if all lowercase word storage matches javascript comparison storage
    - return JavaScript
  - otherwise
    - capitalize first character in all lowercase word and add to output
    - look at each character in string starting from second character
    - add each character to output
  - return output
*/

function capitalizeWord(word) {
  var capitalWord = '';
  var javascript = 'javascript';
  var lowercaseWord = '';
  lowercaseWord += word.toLowerCase();
  if (lowercaseWord === javascript) {
    return 'JavaScript';
  } else {
    capitalWord += lowercaseWord[0].toUpperCase();
    for (var i = 1; i < lowercaseWord.length; i++) {
      capitalWord += lowercaseWord[i];
    }
  }
  return capitalWord;
}
