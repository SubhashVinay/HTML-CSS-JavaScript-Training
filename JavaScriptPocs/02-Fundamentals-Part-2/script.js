"use strict";
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}

if (hasDriverLicense) {
  console.log("I Can Drive 😊");
}


function logger() {
  console.log("My nams is Subhash!");
}

//Calling Running or Invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appluJuice = fruitProcessor(5, 0);
console.log(appluJuice);

const appleOrangeMixJuice = fruitProcessor(2, 4);
console.log(appleOrangeMixJuice);

const num = Number("23");


const age1 = calcAge1(1994);

function calcAge1(birthYear) {
  return 2025 - birthYear;
}

//function expressions
const calcAge2 = function (birthYeah) {
  return 2025 - birthYeah;
};

const age2 = calcAge2(1999);
console.log(age1, age2);


//function expressions
const calcAge2 = function (birthYeah) {
  return 2025 - birthYeah;
};

//Arrow Function
const calcAge3 = (birthYeah) => 2025 - birthYeah;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2025 - birthYeah;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1994, "Subhash"));
console.log(yearsUntilRetirement(1999, "Abhiram"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

const juiceProcessing = fruitProcessor(2, 3);
console.log(juiceProcessing);


const calcAge = function (birthYeah) {
  return 2025 - birthYeah;
};

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  return retirement;
  // return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1994, "Subhash"));
console.log(yearsUntilRetirement(1950, "Subhash"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Subhash";
const subhash = [firstName, "Kumar", 2025 - 1994, "Programmer", friends];
console.log(subhash);

const caclAge = function (birthYeah) {
  return 2025 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = caclAge(years[0]);
const age2 = caclAge(years[1]);
const age3 = caclAge(years[years.length - 1]);

console.log(age3);


const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove ELements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven!");
}

const subhashArray = [
  "Subhash",
  "Kumar",
  2025 - 1994,
  "Coder",
  ["Ram", "Shyam", "Gita"],
];

const subhash = {
  firstName: "Subhash",
  lastName: "Kumar",
  age: 2025 - 1994,
  job: "Coder",
  friends: ["Ram", "Shyam", "Gita"],
};

console.log(subhash);

console.log(subhash.lastName);
console.log(subhash["lastName"]);

const nameKey = "Name";
console.log(subhash["first" + nameKey]);
console.log(subhash["last" + nameKey]);

//console.log(subhash.'last'+nameKey)

const interestedIn = prompt(
  "What do you want about subhash? Choose between firstName,lastName,age,job,and friends"
);

if (subhash[interestedIn]) {
  console.log(subhash[interestedIn]);
} else {
  console.log(
    "Wrong Request!Choose between firstName,lastName,age,job,and friends"
  );
}

subhash.location = "Noida";
subhash["twitter"] = "@subhashview";
console.log(subhash);

//Challenge
const subhashDetails = `${subhash.firstName} has ${subhash.friends.length} friends, and his best friend is called ${subhash.friends[0]}`;
console.log(subhashDetails);

const subhash = {
  firstName: "Subhash",
  lastName: "Kumar",
  birthYeah: 1994,
  job: "Coder",
  friends: ["Ram", "Shyam", "Gita"],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2025 - birthYeah;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2025 - this.birthYeah;
  // },
  calcAge: function () {
    // console.log(this);
    this.age = 2025 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(subhash.calcAge());

console.log(subhash.age);
console.log(subhash.age);
console.log(subhash.age);

//challenge
console.log(subhash.getSummary());


//for loops keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

const subhashArray = [
  "Subhash",
  "Kumar",
  2025 - 1994,
  "Coder",
  ["Ram", "Shyam", "Gita"],
  true,
];
const types = [];
for (let i = 0; i < subhashArray.length; i++) {
  //Readin from Array
  console.log(subhashArray[i], typeof subhashArray[i]);
  //Filling Array
  // types[i] = typeof subhashArray[i];
  types.push(typeof subhashArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log(ages);

//continue and break statements
for (let i = 0; i < subhashArray.length; i++) {
  if (typeof subhashArray[i] !== "string") continue;
  console.log(subhashArray[i], typeof subhashArray[i]);
}

for (let i = 0; i < subhashArray.length; i++) {
  if (typeof subhashArray[i] === "number") break;
  console.log(subhashArray[i], typeof subhashArray[i]);
}


const subhashArray = [
  "Subhash",
  "Kumar",
  2025 - 1994,
  "Coder",
  ["Ram", "Shyam", "Gita"],
];

for (let i = subhashArray.length - 1; i >= 0; i--) {
  console.log(i, subhashArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(
      `Exercise set ${exercise} Lifting weights repetition ${rep} 🏋️‍♀️`
    );
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE : Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rollesd a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/
