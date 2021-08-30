/* exported toObject */
/* Pseudo Code
  - create storage for output
  - create storage for property name
  - create storage for value
  - add the first item in the array to the storage for property name
  - add the second item in the array to the storage for value
  - add property and value to output
  - return output
*/

function toObject(keyValuePair) {
  var object = {};
  var propertyName = '';
  var value;
  propertyName += keyValuePair[0];
  value = keyValuePair[1];
  object[propertyName] = value;
  return object;
}
