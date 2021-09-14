/* exported union */
/*
  - create storage for output
  - create storgae for common items
  - look at each item in first
    - look at each item in second
      - if item in first matches item in second
        - add item to common items
    - add item to output
  - look at each item in second
    - create storage for boolean in common set to false
    - look at each item in common items
       - if item in second does not match item in common
        - set in common to true
    - if in common is false
      - add item to output
  - return output

*/
function union(first, second) {
  var union = [];
  for (var i = 0; i < first.length; i++) {
    union.push(first[i]);
  }
  for (var x = 0; x < second.length; x++) {
    var inCommon = false;
    for (var y = 0; y < union.length; y++) {
      if (second[x] === union[y]) {
        inCommon = true;

      }
    }
    if (inCommon === false) {
      union.push(second[x]);
    }
  }
  return union;
}
