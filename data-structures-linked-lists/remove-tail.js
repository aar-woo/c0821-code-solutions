/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  }
  let head = list;
  while (head) {
    if (head.next.next === null) {
      head.next = null;
      return;
    }
    head = head.next;
  }

}
