// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => 2025 - birthYear;

console.log(calcAge(1994));
*/
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //C)Fix
    value: Number(prompt('Degree Celsius:')),
  };
  console.log(measurement);
  //B)find
  console.table(measurement);
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify the Bug
console.log(measureKelvin());
