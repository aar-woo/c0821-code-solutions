/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();

  if (queue.peek() === undefined) {
    return first;
  } else if (first <= queue.peek()) {
    return first;
  }
  queue.enqueue(first);

  let isFound = false;
  while (isFound === false) {
    const val = queue.dequeue();
    if (val <= queue.peek()) {
      isFound = true;
      return val;
    }
    queue.enqueue(val);
  }
}
