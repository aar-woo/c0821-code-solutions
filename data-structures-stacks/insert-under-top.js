/* exported insertUnderTop */
/* global isEmpty */

function insertUnderTop(stack, value) {
  if (isEmpty(stack)) {
    return;
  }
  const top = stack.pop();
  stack.push(value);
  stack.push(top);
}
