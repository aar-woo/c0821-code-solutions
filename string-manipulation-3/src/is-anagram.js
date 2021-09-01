/* exported isAnagram */
/*
  - create storage for output, set equal to true
  - create storage for first string without spaces
  - create storage for second string without spaces
  - look at each character in first string
    - if character is not a space
      - add character to storage for first string without spaces
  - look at each character in second string
    - if character is not a space
      - add character to storage for second string without spaces
  - create storage for booleans if characters are in first string
  - look at each character in second string no space
    - create storage for boolean if character in second string matches first, set equal to false
    - look at each character in first string
      - if character in second string matches character in first string
        - make the value for the boolean true and add to storage for booleans
      - add to storage for booleans
*/

// function isAnagram(firstString, secondString) {
//   var firstStringNoSpace = '';
//   var secondStringNoSpace = '';
//   var isIn = [];
//   for (var i = 0; i < firstString.length; i++) {
//     if (firstString[i] !== ' ') {
//       firstStringNoSpace += firstString[i];
//     }
//   }
//   for (var i = 0; i < secondString.length; i++) {
//     if (secondString[i] !== ' ') {
//       secondStringNoSpace += secondString[i];
//     }
//   }
//   for (var i = 0; i < secondStringNoSpace.length; i++) {
//     var inFirst = false;
//     for (var j = 0; j < firstStringNoSpace.length; j++) {
//       if (secondStringNoSpace[i] === firstStringNoSpace[j]) {
//         inFirst = true;
//       }
//     }
//     isIn.push(inFirst);
//   }
//   console.log(isIn);
// }

/*
  - check if each letter in second string is in first string
    - and if letter is in first string, the same number of that letter is in first string (2 a's in both)

*/
/*
  - put the letters of first string in an array
  - look at each letter in second string one by one
    - look at each item in array one by one
      - if the letter in string matches the item in array
        - remove item from array
      - otherwise
        - return false
    - return true
*/
function isAnagram(firstString, secondString) {
  var firstStringNoSpace = [];
  var secondStringNoSpace = '';

  for (var a = 0; a < firstString.length; a++) {
    if (firstString[a] !== ' ') {
      firstStringNoSpace.push(firstString[a]);
    }
  }
  for (var b = 0; b < secondString.length; b++) {
    if (secondString[b] !== ' ') {
      secondStringNoSpace += secondString[b];
    }
  }
  for (var i = 0; i < secondStringNoSpace.length; i++) {
    if (i === secondStringNoSpace.length - 1 && firstStringNoSpace.length === 0) {
      return true;
    }
    for (var j = 0; j < firstStringNoSpace.length; j++) {
      if (secondStringNoSpace[i] === firstStringNoSpace[j]) {
        firstStringNoSpace.splice(j, 1);
      } else {
        return false;
      }
    }
  }
  return true;
}

/*
  - create objects for each string
  - loop through strings and create a property for each letter
  - value as the count of how many of that letter are in the string
  - compare objects to each other with for in loops
    - letter and value boolean set to false
    - if the property name is the same
      - check if property value is the same
        - set letter and value boolean to true
    - if letter and value boolean is false
      - return false
  - return true;
    and the property value (num count) is the same

*/
