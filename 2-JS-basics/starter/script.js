/*
const firstName = 'John';
console.log(firstName);

const lastName = 'Smith';
const age = 28;

const fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
let e3years = 3;
let johnMark = 'John and Mark';
*/

/***********************
 * Variable mutation and type coercion
 */

/*
const firstName = 'John';
let age = 28;

// Type collection
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried = 'false';

console.log(
  firstName +
  ' is a ' +
  age +
  ' year old ' +
  job +
  '. Is he married? ' +
  isMarried
);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(
  firstName +
  ' is a ' +
  age +
  ' year old ' +
  job +
  '. Is he married? ' +
  isMarried
);

let lastName = prompt('what is his last Name?');
console.log(firstName + ' ' + lastName);

*/


/***********************
 * Basic operators
 */

/*
let year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
let johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older the john');
let x;
console.log(typeof x);
*/


/***********************
 * Operator precedence
 */

/*
const now = 2019;
const yearJohn = 1989;
const fullAge = 18;

const isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
const ageJohn = now - yearJohn;
const ageMark = 35;
const average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);


// More operators
// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);
*/


/***********************
 * If / else statements
 */

/*
const firstName = 'John';
const civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


const isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\' BMI is higher than John\'s.');
} else {
  console.log('John\' BMI is higher than Marks\'s.');
}

// const markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);

*/




/***********************
 * Boolean logic
 */

/*

const firstName = 'John';
const age = 16;

if (age < 13) {
  console.log(firstName + 'is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
  console.log(firstName + ' is a young man.')
} else {
  console.log(firstName + 'is a man.');
}

*/


/***********************
 * The Ternary Operator and Switch Statements
 */

/*
const firstName = 'John';
let age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer. ') :
  console.log(firstName + ' drinks juice. ');


const drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
  let drink = 'beer';
} else {
  let drink = 'juice';
}
*/

// Switch statement
/*
const job = 'teacher';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code. ');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon. ');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites. ')
    break;
  default:
    console.log(firstName + ' does something else.');
}


age = 20;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager. ');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}

*/


/***********************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0 , '', NaN
// truthy values: NOT falsy values


/*
let height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
  console.log(' The == operator does type coercion!');
}


*/

/*

const scoreJohn = (89 + 120 + 103) / 3;
const scoreMike = (116 + 94 + 123) / 3;
const scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\'s team win  with ' + scoreJOhn + ' points ')
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mary\'s team wins with ' + scoreMary + 'points')
} else {
  console.log('There is a draw');
}

// if (scoreJohn > scoreMike) {
//   console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//   console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//   console.log('There is a draw');
// }


*/



/***********************
 * Functions
 */

/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1948);
let ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
  let age = calculateAge(year);
  let retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years. ');
  } else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/***********************
 * Functions Statements and Expressions
 */

// FUnction declaration
// const whatDoYouDo = function (job, firstName) {}

//  Function expression
/*
const whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + 'teaches kids how to code';
    case 'driver':
      return firstName + 'drives a cab in Lisbon';
    case 'designer':
      return firstName + 'designs beautiful websites';
    default:
      return firstName + 'does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('driver', 'Mark'));

*/

/***********************
 * Arrays
 */

// Initialize new array
const names = ['John', 'Mark', 'Jane'];
const years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[3] = 'Mary';
console.log(names);

// Different data types
const john = ['John', 'Smith', 1990, ' teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

const isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
