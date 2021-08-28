/* exported tail */
/* Pseudo Code
  - create storage for output
  - look at each item in the array starting from the second item
    - add item to storage for output
  - return output
*/

function tail(array) {
  var tail = [];
  for (var i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}
