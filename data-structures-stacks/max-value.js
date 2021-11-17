/* exported maxValue */
/* global isEmpty */

function maxValue(stack) {
  if (isEmpty(stack)) {
    return -Infinity;
  }
  let maxValue = stack.pop();
  while (!isEmpty(stack)) {
    const val = stack.pop();
    if (val > maxValue) {
      maxValue = val;
    }
  }
  return maxValue;
}
