// Function construction

/*
let john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

john = new Person('john', 1990, 'teacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create

/*
let personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  }
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


let jane = Object.create(personProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1969
  },
  job: {
    value: 'designer'
  }
});
*/


// Primitives vs objects

/*
let a = 23;
let b = a;
a = 46;

console.log(a);
console.log(b);


// Objects
let obj1 = {
  name: 'John',
  age: 26
};
let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
let age = 27;
let obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/



//////////////////////////////////
// Lecture: Passing functions as arguments

/*

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }

}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/


//////////////////////////////////
// Lecture: Functions returning functions

/*

function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', an you pleas explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you tech,' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello' + name + ', what do you do?');
    }
  }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/





//////////////////////////////////
// Lecture: IIFE

// function game() {
//   let score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

/*

(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/



//////////////////////////////////
// Lecture: Closures

/*
function retirement(retirementAge) {
  let a = ' years left until retirement. ';
  return function (yearOfBirth) {
    let age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

let retirementUS = retirement(66);
retirementUS(1990);

let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


// retirement(66)(1990);


// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log(name + ', an you pleas explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log('What subject do you tech,' + name + '?');
//     }
//   } else {
//     return function (name) {
//       console.log('Hello' + name + ', what do you do?');
//     }
//   }
// }


function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?')
    } else if (job === 'teacher') {
      console.log('what subject do you teach,' + name + '?');
    } else {
      console.log('Hello' + name + ', what do yo udo?');
    }
  }
}

interviewQuestion('teacher')('John');
*/




//////////////////////////////////
// Lecture: Bind, call and apply

let john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' +
        this.job + 'and I\'m a' + this.age + 'years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m' + this.name + ', I\'m a ' + this.job +
        'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
}

let emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal', 'morning');


john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
