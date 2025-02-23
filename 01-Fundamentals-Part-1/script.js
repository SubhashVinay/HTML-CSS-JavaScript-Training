/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Subhash");
console.log(23);

let firstName = "Subhash";
console.log(firstName);
console.log(firstName);
console.log(firstName);


console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Subhash");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = "programmer";
job = "teacher";

let lastNamee = "kumar";
console.log(lastNamee);

//Math Operators
const now = 2025;
const ageSubhash = now - 1994;
console.log(ageSubhash);
const ageAadhya = now - 2024;
console.log(ageSubhash, ageAadhya);

console.log(ageSubhash * 2, ageSubhash / 10, 2 ** 3);

const firstName = "Subhash";
const lastName = "Kumar";

console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x=x+10 =25
x *= 4; // x=x*4;
x++;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageSubhash > ageAadhya);
console.log(ageSubhash >= 18);


const now = 2025;
const ageSubhash = now - 1994;
const ageAbhiram = now - 1999;

console.log(now - 1994 > now - 1999);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageSubhash + ageAbhiram) / 2;
console.log(ageSubhash, ageAbhiram, averageAge);


const firstName = "Subhash";
const job = "coder";
const birthYear = 1994;
const curretyear = 2025;

const subhash =
  "I'm " +
  firstName +
  ",a " +
  (curretyear - birthYear) +
  " years old " +
  job +
  "!";
console.log(subhash);

const subhashNew = `I'm ${firstName}, a ${
  curretyear - birthYear
} years old ${job}!`;
console.log(subhashNew);

console.log(`Just a Regular String...`);

console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(`String 
  multiple
  lines`);
  

const age = 15;

if (age >= 18) {
  console.log(`Sarah Can Apply for driving license 🚔`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young.Wait for another ${yearsLeft} years:)`);
}

const bithYear = 2012;
let century;
if (bithYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Subhash`));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 31 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * 2);
console.log("23" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 Falsy values are 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Subhash"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 10;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a Job!");
}

let height = 0;

if (height) {
  console.log("YAY!Height is defined!");
} else {
  console.log("Height is undefined!");
}


const age = 18;
if (age === 18) console.log(`You just became on adult! (Strict)`);

if (age == 18) console.log(`You just became on adult! (Loosely)`);

const favourite = Number(prompt(`What is your favourite Number!`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an Amazing number!`);
} else if (favourite === 6) {
  console.log(`6 is also an amazing number`);
} else {
  console.log(`Number is neither 23 or 6!`);
}

if (favourite !== 23) {
  console.log(`Why not 23!`);
}


const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive!`);
}
*/

const day = `saturday`;

switch (day) {
  case "monday":
    console.log(`Plan Course Structure`);
    console.log(`Go to Coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos!`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`write Code Examples!`);
    break;
  case "friday":
    console.log(`Record Videos`);
    break;
  case "saturday":
  case "`sunday":
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day!`);
}
