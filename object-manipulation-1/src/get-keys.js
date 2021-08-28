/* exported getKeys */
/* Pseudo Code
  - create storage for output
  - create storage for current property, look at each property in object one at a time,
    - add each property's key to output
  - return output
*/

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
