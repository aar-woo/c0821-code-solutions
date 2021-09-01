/* exported isAnagram */

/*
  - create objects for each string
  - loop through strings and create a property for each letter
    - if property exists, add one to the value
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
/*
  - create storage for first string as an object
  - create storage for second string as an object
  - look at each character in first string one by one
    - create boolean for if the character is in first object and set to false
    - look at each key in first string object
      - if character in first string is equal to key in object
        - make boolean true for character in object
    - if boolean for character in object is true
      - add one to the value for the property in object at the first string at index
    - otherwise
      - create a new property in object with the name as the first string at index and set equal to one
  -Repeat for second string and second object
  -
*/
function isAnagram(firstString, secondString) {
  var firstStringObj = {};
  var secondStringObj = {};
  for (var i = 0; i < firstString.length; i++) {
    var inObj = false;
    for (var key in firstStringObj) {
      if (firstString[i] === key) {
        inObj = true;
      }
    }
    if (inObj === true) {
      firstStringObj[firstString[i]] += 1;
    } else {
      firstStringObj[firstString[i]] = 1;
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    var inSecondObj = false;
    for (var secondKey in secondStringObj) {
      if (secondString[j] === secondKey) {
        inSecondObj = true;
      }
    }
    if (inSecondObj === true) {
      secondStringObj[secondString[j]] += 1;
    } else {
      secondStringObj[secondString[j]] = 1;
    }
  }
  for (var letterFirst in firstStringObj) {
    var letterInBoth = false;
    var letterAndValueEqual = false;
    for (var letterSecond in secondStringObj) {
      if (letterFirst === letterSecond) {
        letterInBoth = true;
        if (firstStringObj[letterFirst] === secondStringObj[letterSecond]) {
          letterAndValueEqual = true;
        }
      }
    }
    if (letterInBoth === false || letterAndValueEqual === false) {
      return false;
    }
  }
  return true;
}

/*
 - look at each key in the first object
  - create boolean for if the property names match, set to false
  - create boolean for if the property and value are the same, set to false
  - look at each key in the second object
    - if the property name in the first object matces the property name in the second object
      - set boolean for the letter in both to true
      - if the value at these propertyies match
        - set boolean for letter and value to true
  - if either boolean letter in both or letter and value is false
    - return false
- return true
*/

// - compare objects to each other with for in loops
//   - letter and value boolean set to false
//     - if the property name is the same
//       - check if property value is the same
//         - set letter and value boolean to true
//           - if letter and value boolean is false
//             - return false
//               - return true;
// and the property value(num count) is the same
