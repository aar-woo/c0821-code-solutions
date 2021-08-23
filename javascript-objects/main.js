var student = {
  firstName: 'Aaron',
  lastName: 'Woo',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('lives in Irvine:', student.livesInIrvine);
console.log('previous occupation:', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Mazda',
  model: '3',
  year: 2018
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('vehicle color:', vehicle['color']);
console.log('vehicle is convertible:', vehicle.isConvertible);
console.log(vehicle);

var pet = {
  name: 'Rainier',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('pet object:', pet);
