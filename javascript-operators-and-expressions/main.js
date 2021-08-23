var width = 20;
var height = 30;
var area = width * height;
console.log('area:', area);
console.log('typeof area:', typeof area);

var bill = 100;
var payment = 200;
var change = payment - bill;
console.log('change:', change);
console.log('typeof change:', typeof change);

var quizzes = 97;
var midterm = 86;
var final = 80;
var grade = (quizzes + midterm + final) / 3;
console.log('grade;', grade);
console.log('typeof grade:', typeof grade);

var firstName = 'Aaron';
var lastName = 'Woo';
var fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

var pH = 7;
var isAcidic = (pH < 7);
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headCount = 18;
var isSparta = (headCount === 300);
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
motto += ' is the Goat';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
