/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const node = new LinkedList(value);
  let head = list;
  let previous = null;

  previous = head;
  head = head.next;

  node.next = head;
  previous.next = node;

}
