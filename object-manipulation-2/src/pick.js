/* exported pick */
/*
  - create storage for output
  - look at each item in keys
    - if the property of source at keys at index is not equal to undefined
      - add the property to output with name as the keys at index and the value of source at that property name
  - return output
*/

function pick(source, keys) {
  var picked = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      picked[[keys[i]]] = source[keys[i]];
    }
  }
  return picked;
}
