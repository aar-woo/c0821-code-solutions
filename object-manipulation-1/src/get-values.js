/* exported getValues */
/* Pseudo Code
  - create storage for output
  - create storage for current property, look at each property in object one at a time
    - add current property's value to output
  - return output
*/

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
