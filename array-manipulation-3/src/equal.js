/* exported equal */
/*
  - if the length of each array are not equal
    - return false
  - look at each item in first array
    - if item at first array is not equal to item at second array
    - return false
  - return true
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
