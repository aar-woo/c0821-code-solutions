/* exported compact */
/* Pseudo Code - function omits all falsy values and maintains order of truthy values
  - create storage for output
  - look at each item one by one in the array
    - if item is true
      - add item to output
    - return output
*/

function compact(array) {
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}
