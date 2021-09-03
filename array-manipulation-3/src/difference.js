/* exported difference */
/*
  - look at each item in first array
    - create storage for boolen is Unique to true
    - look at each item in second array
      - if item in first matches item in second set boolean is unique to false
    - if boolean is unique is true
      - add item to output
  - repeat for each item in second array
  - return output
*/

function difference(first, second) {
  var diffArr = [];
  for (var i = 0; i < first.length; i++) {
    var isUnique = true;
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        isUnique = false;
      }
    }
    if (isUnique === true) {
      diffArr.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    var isUniqueSecond = true;
    for (var y = 0; y < first.length; y++) {
      if (second[k] === first[y]) {
        isUniqueSecond = false;
      }
    }
    if (isUniqueSecond === true) {
      diffArr.push(second[k]);
    }
  }
  return diffArr;
}
