// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcTempAmplitude([3, 7, 4]);
