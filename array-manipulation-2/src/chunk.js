/* exported chunk */
/*
  - create storage for output
  - ceate storage for current array
  - if size is greater than array's length
    - return array
  - look at each item one by one
    - if current array's length is greater than or equal to passed size
      - add current array to output
      - clear current array
      - add item to current array
    - otherwise
      - add item to current array
  - add last value for current array to output
  - return output
*/

function chunk(array, size) {
  var chunkedArr = [];
  var currentArr = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (currentArr.length === size) {
      chunkedArr.push(currentArr);
      currentArr = [];
      currentArr.push(array[i]);
    } else {
      currentArr.push(array[i]);
    }
  }
  chunkedArr.push(currentArr);
  return chunkedArr;
}
