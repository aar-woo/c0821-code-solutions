/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  let i = 0;
  while (i < index) {
    let temp = queue.dequeue();
    queue.enqueue(temp);
    temp = null;
    i++;
  }
  const front = queue.dequeue();

  return front;
}
