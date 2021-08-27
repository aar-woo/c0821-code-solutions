/* exported initial */
/* Pseudo Code
  - create storage for output
  - look at each item in the array up until the last item (non-inclusive)
    - add item to storage for output
  - return output
*/

function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}
