/* exported invert */
/*
  - create storage for output
  - look at each property in source object
    - add property to output with property's name as value and value as property name
  - return output
*/

function invert(source) {
  var invertedObj = {};
  for (var key in source) {
    invertedObj[source[key]] = key;
  }
  return invertedObj;
}
