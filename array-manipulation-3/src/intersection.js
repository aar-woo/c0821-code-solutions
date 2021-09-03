/* exported intersection */
/*
  - create storage for output
  - create storage for
  - look at each item in first one by one
    - look at each item in second
      - if the item in first matches the item in second
        - add item to output
  - return output
*/

function intersection(first, second) {
  var interArr = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        interArr.push(first[i]);
      }
    }
  }
  return interArr;
}
