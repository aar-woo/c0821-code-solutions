/* exported isVowel */
/* Pseudo Code
  - create storage containing all lowercase vowels
  - create storage for lowercase string
  - lowercase string and add to storage for lowercase string
  - look at each character in storage for all lowercase vowels one at a time
    - if the lowercase string matches this character in all vowels storage
      - return true;
  - after looking at each character in storage for vowels, return false
*/

function isVowel(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lowercaseChar = '';
  lowercaseChar += string.toLowerCase();
  for (var i = 0; i < vowels.length; i++) {
    if (lowercaseChar === vowels[i]) {
      return true;
    }
  }
  return false;
}
