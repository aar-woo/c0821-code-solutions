/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newList = new LinkedList(value);
  let current = list;
  let currList = newList;

  while (current) {
    currList.next = new LinkedList(current.data);
    current = current.next;
    currList = currList.next;
  }

  return newList;
}
