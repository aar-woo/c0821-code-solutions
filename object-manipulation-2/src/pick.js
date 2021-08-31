/* exported pick */
/*
  - create storage for output
  - look at each property in source object
    - look at each item in keys array
      - if property matches item in keys array and is defined in source
        - add to property to output
  - return output
*/

function pick(source, keys) {
  var picked = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        picked[key] = source[key];
      }
    }
  }
  return picked;
}
