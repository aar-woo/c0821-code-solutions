/* exported flatten */
/*
  - create storage for output
  - look at each item one by one
    - if the item's type is an object
      - look at each item in that object
        - add item to output
    - otherwise
      - add item to output
*/

function flatten(array) {
  var flatArr = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var j = 0; j < array[i].length; j++) {
        flatArr.push(array[i][j]);
      }
    } else {
      flatArr.push(array[i]);
    }
  }
  return flatArr;
}
