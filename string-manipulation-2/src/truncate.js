/* exported truncate */
/*
  - create storage for output
  - create storage for length to be used
  - if passed length is greater than strings length
    - add string's length to length used storage
  - otherwise
    -  add pased length to length used storage
  - look at each character one by one up to used length value
    - add each character to output
  - add ellipsis to output
  return output
*/

function truncate(length, string) {
  var truncated = '';
  var lengthUsed = 0;
  if (length > string.length) {
    lengthUsed = string.length;
  } else {
    lengthUsed = length;
  }
  for (var i = 0; i < lengthUsed; i++) {
    truncated += string[i];
  }
  truncated += '...';
  return truncated;
}
