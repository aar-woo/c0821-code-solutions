/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }

  const head = list;
  const second = list.next;
  const third = list.next.next;
  head.next = third;
  second.next = head;
  list = second;

  return list;
}
