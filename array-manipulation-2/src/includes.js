/* exported includes */
/*
  - look at each item one by one
    - if the item in the array matches the passed value
      - return true
  - after looking at each item in the array return false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
