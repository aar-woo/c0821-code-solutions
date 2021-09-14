function ExampleConstructor() {

}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);
var example = new ExampleConstructor();

console.log('new ExampleConstructor', example);
var isInstanceOf = example instanceof ExampleConstructor;
console.log('is Instance of ExampleConstructor', isInstanceOf);
