/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const frontVal = queue.dequeue();
  queue.enqueue(frontVal);
}
