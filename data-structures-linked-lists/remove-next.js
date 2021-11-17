/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }

  const head = list;
  const third = list.next.next;

  head.next = third;
}
