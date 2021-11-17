/* exported getLength */

function getLength(list) {
  let count = 0;
  let head = list;

  while (head) {
    count++;
    head = head.next;
  }
  return count;
}
