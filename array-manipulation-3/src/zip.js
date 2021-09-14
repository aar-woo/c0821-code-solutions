/* exported zip */
/*
  - create storage for output
  - create storage for length
  - create storage for current array
  - if first's length is less than or equal to second's length
    - set length equal to first's length
  - otherwise
    - set length equal to second's length
  - look at each item in first array up to length one by one
    - add item in first array to current array
    - add item in second array to current array
    - add current array to output
    - clear current array
  - return output
*/

function zip(first, second) {
  var zippedArr = [];
  var length;
  var currentArr = [];
  if (first.length <= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var i = 0; i < length; i++) {
    currentArr.push(first[i]);
    currentArr.push(second[i]);
    zippedArr.push(currentArr);
    currentArr = [];
  }
  return zippedArr;
}
