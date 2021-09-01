/* exported dropRight */
/*
  - create storage for output
  - create storage for used length
  - if passed count is greater than array's length
    - return array
  - set used length equal to array's length subtracted by passed count
  - look at each item one by one up to used length (non-inclusive)
    - add item to output
  - return output
*/

function dropRight(array, count) {
  var droppedArr = [];
  var usedLength;
  if (count > array.length) {
    return array;
  }
  usedLength = array.length - count;
  for (var i = 0; i < usedLength; i++) {
    droppedArr.push(array[i]);
  }
  return droppedArr;
}
