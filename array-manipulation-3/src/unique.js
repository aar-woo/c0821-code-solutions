/* exported unique */
/*
  - create storage for output
  - create storage for items used output
  - look at each item in array one by one
    - create storage for boolean in unique array set to false
    - look at each item in used
      - if item in array equals item in used
        - set boolean in unique array to true
    - if boolean in unique array is false
      - add item to output
      - add item to used
  - return output
*/

function unique(array) {
  var uniqueArr = [];
  var used = [];
  for (var i = 0; i < array.length; i++) {
    var inArr = false;
    for (var j = 0; j < used.length; j++) {
      if (array[i] === used[j]) {
        inArr = true;
      }
    }
    if (inArr === false) {
      uniqueArr.push(array[i]);
      used.push(array[i]);
    }
  }
  return uniqueArr;
}
