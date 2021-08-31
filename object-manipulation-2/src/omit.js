/* exported omit */
/*
  - create storage for copy of source object (output)
  - look at each property in source
    - add property to copy object
  - look at each property in copy source object
    - look at each item in keys one by one
      - if property matches item in keys
        - delete propety from copy object
  - return copy object
*/

function omit(source, keys) {
  var copyObject = {};
  for (var key in source) {
    copyObject[key] = source[key];
  }
  for (var copyKey in copyObject) {
    for (var i = 0; i < keys.length; i++) {
      if (copyKey === keys[i]) {
        delete copyObject[copyKey];
      }
    }
  }
  return copyObject;
}
