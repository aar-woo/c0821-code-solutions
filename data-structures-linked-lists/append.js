/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const node = new LinkedList(value);
  let head = list;
  while (head) {
    if (head.next === null) {
      head.next = node;
      return;
    }
    head = head.next;
  }
}
