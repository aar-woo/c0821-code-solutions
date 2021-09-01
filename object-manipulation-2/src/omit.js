/* exported omit */
/*
  - create storage for copy of source object (output)
  - look at each property in source
    - add property to copy object
  - look at each item in keys one by one
    - delete properties in copyObject for each of the properties in keys
  - return copy object
*/

function omit(source, keys) {
  var copyObject = {};
  for (var key in source) {
    copyObject[key] = source[key];
  }
  for (var i = 0; i < keys.length; i++) {
    delete copyObject[keys[i]];
  }
  return copyObject;
}
