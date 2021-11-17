/* exported countValues */
/* global isEmpty */

function countValues(stack) {
  let count = 0;
  while (!isEmpty(stack)) {
    stack.pop();
    count++;
  }
  return count;
}
