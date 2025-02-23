let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");

console.log(23);

let firstName = "Subhash";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable Name Conventions
let myFirstJob = "Programmer";
let mySecondJob = "Investor";

console.log(myFirstJob);
console.log(mySecondJob);

let person = "Subhash";
let PI = 3.14;

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

year = 1991;

console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = "Programmer";
job = "teacher;";

const now = 2025;
const ageSubhash = now - 1994;
const ageAadhya = now - 2022;

console.log(ageSubhash, ageAadhya);

console.log(ageSubhash * 2, ageSubhash / 10, 2 ** 3);

const firstName = "Subhash";
const lastName = "Kumar";

console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x=x+10;
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operators
console.log(ageSubhash > ageAadhya);

console.log(ageAadhya > 18);

const now = 2025;
const ageSubhash = now - 1994;
const ageAadhya = now - 2022;
console.log(now - 1994 > now - 2022);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x=y=10

console.log(x, y);

const averageAge = (ageSubhash + ageAadhya) / 2;
console.log(ageSubhash, ageAadhya, averageAge);

const firstName = "Subhash";
const job = "Programmer";
const birthYear = 1994;
const currentYear = 2025;
const subhash =
  "I'm " + firstName + ",a " + (currentYear - birthYear) + " years old " + job;
console.log(subhash);

const subhashNew = `I'm ${firstName},a ${
  currentYear - birthYear
} years old ${job}`;
console.log(subhashNew);

console.log(`Just a regular string ...`);

console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(`String with 
  multilple
  lines`);

const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah Can start driving license 🚔");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young.Wait another ${yearLeft} years 😊`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Subhash"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "3" - 10);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

//5 falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Subhash"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY!Height is defined!");
} else {
  console.log("Height is undfined!");
}

const age = "18";
if (age === 18) console.log("You just became an adult (Strict)!");

if (age == 18) console.log("You just became an adult (loose)!");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

console.log(typeof favourite);

if (favourite === 24) {
  console.log("Cool!24 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number !");
} else {
  console.log("Number is neither 24 nor 7 nor 9!");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive!");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive!");
}

const day = "saturday";

switch (day) {
  case "monday":
    console.log("Plan Course Structure");
    console.log("Go to Coding Meet Up!");
    break;
  case "tuesday":
    console.log("Prepare Theory Videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write Code Examples!");
    break;
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a Valid Day!");
}

const age = 19;
age >= 18
  ? console.log(
      "I like to drink wine 🍷                                                                                                     "
    )
  : console.log("I Like to drink water 💧");

const drink = age >= 18 ? "drink wine 🍷" : "drink water 💧";
console.log(drink);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
