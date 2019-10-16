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

/*
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


*/

/*
function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

let finalValues = [bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log(tips, finalValues);

// console.log(tipCalculator(100));

*/

/***********************
 * Objects and properties
 */

/*
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/***********************
 * Objects and methods
 */


/*
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  }
};

// console.log(john.calcAge());
john.calcAge();
console.log(john);


*/

/*
let john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

let mark = {
  fullName: 'Mark Miller',
  mass: 55,
  height: 1.78,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + 'has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + 'has a higher BMI of ' + mark.bmi);
} else {
  console.log('THey have tha same BMI');
}

*/

/***********************
 * Loops and iteration
 */

/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}


let john = ['John', 'Smith', 1990, 'designer', false];
for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
}

let i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/


/*
// continue and break statements
let john = ['John', 'Smith', 1990, 'designer', false];
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}


for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}


// Looping backwards
for (let i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

let john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];

      if (this.bills[i] < 50) {
        percentage = .2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}


let mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];

      if (this.bills[i] < 50) {
        percentage = .2;
      } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

function calcAverage(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }

  return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(john.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
