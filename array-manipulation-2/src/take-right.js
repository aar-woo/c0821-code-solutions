/* exported takeRight */
/*
  - create storage for output
  - create storage for used length
  - if passed count is greater than array's length
    - return array
  - otherwise
    - used length is equal to array's length subtracted by count
  - look at each item one by one starting from used length
      - add item to output
  - return output
*/

function takeRight(array, count) {
  var rightArr = [];
  var usedLength;
  if (count > array.length) {
    return array;
  } else {
    usedLength = array.length - count;
  }
  for (var i = usedLength; i < array.length; i++) {
    rightArr.push(array[i]);
  }
  return rightArr;
}
