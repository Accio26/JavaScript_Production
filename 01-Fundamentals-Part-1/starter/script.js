/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = 'Jonas';
let first = 'Matilda';
let firstNamePerson;

console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;
let PI = 3.1415;

// better
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// not_pattern
let job1 = 'programmer';
let job2 = 'teacher';

// test
let country = 'Japan';
let continent = 'Eurasia';
let population = '750,000';

console.log(country, continent, population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // boolean
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
console.log(typeof 'jonas');

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // object 歴史的経緯のあるバグ 本来は当然nullになる

// test
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 30;
age = 31;

const birthYear = 1991; // 再代入も出来ないよ
// birthYear = 1190;

// const job; 初期化式がないからエラーが走る

var job = 'programmer';
job = 'teacher';


// test
const language = 'Japanese';
*/

/*
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);


// Comparison operators
console.log(ageJonas > ageSarah); // 46 > 19
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


// test
let population = 750000 / 2;
population++;
console.log(population);
console.log(6000000 < population);
console.log(33000000 > population);
*/


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991  > now - 2018);


/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
*/

// 文字列は飛ばした
/*
//const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗'); // true
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}
*/

// 途中いくつか飛ばしている
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
