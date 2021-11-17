/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstVal = queue.dequeue();
  const secondVal = queue.dequeue();
  if (secondVal === undefined) {
    return firstVal;
  }
  if (firstVal < secondVal || firstVal === secondVal) {
    queue.enqueue(secondVal);
    return firstVal;
  }
  if (firstVal > secondVal) {
    queue.enqueue(firstVal);
    return secondVal;
  }
}
