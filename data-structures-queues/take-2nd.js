/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstVal = queue.dequeue();
  const secondVal = queue.dequeue();
  if (secondVal === undefined) {
    return firstVal;
  }
  queue.enqueue(firstVal);
  return secondVal;
}
