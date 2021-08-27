/* exported reverse */
/*
  - create storage for output
  - look at each item one by one starting from the last item
    - add each item to output
  - return output
*/

function reverse(array) {
  var reversedArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
