/* exported take */
/*
  - create storage for output
  - if passed count is greater than array length
    - return array
  - look at each item in the array one by one up to the passed count
    - add item to output
  - return output
*/

function take(array, count) {
  var takeArr = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    takeArr.push(array[i]);
  }
  return takeArr;
}
