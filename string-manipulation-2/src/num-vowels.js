/* exported numVowels */
/*
  - create storage for count
  - create storage for all lowercase vowels
  - lowercase the string
  - look at each character in the string one by one
    - look at each character in vowels one by one
      - if character in string matches character in vowels
        - add one to count
  - return count
*/

function numVowels(string) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
