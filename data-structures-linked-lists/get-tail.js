/* exported getTail */

function getTail(list) {
  let head = list;
  while (head) {
    if (head.next == null) {
      return head.data;
    }
    head = head.next;
  }
}
