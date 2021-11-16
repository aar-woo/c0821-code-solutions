/* exported get2ndFromTop */
/* global isEmpty */

function get2ndFromTop(stack) {
  if (isEmpty(stack)) {
    return undefined;
  }
  const top = stack.pop();
  const secondFromTop = stack.peek();
  stack.push(top);
  return secondFromTop;
}
