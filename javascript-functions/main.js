function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}

var minToSecondsResult = convertMinutesToSeconds(20);
console.log('20 minutes to seconds:', minToSecondsResult);

function greet(name) {
  return 'Salutations, ' + name;
}
console.log('Greeting:', greet('Jarvis'));

function getArea(width, height) {
  return width * height;
}
console.log('Area:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log("Person's first name:", getFirstName({ firstName: 'Shinra', lastName: 'Kusakabe' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('Last element:', getLastElement(['propane', 'and', 'propane', 'accessories']));
