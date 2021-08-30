/* exported drop */
/*
  - create storage for output
  - look at each item one by one starting from the passed count
    - add item to output
  - return output
*/

function drop(array, count) {
  var newArr = [];
  for (var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
