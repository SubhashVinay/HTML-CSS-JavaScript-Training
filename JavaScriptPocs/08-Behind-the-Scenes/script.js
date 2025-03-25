'use strict';

/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = ` ${firstName},You are ${age},born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Abhiram';
      const str = `Oh,and you're a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Subhash';
calcAge(1994);


console.log(me);
// console.log(job);
// console.log(year);

var me = 'Subhash';
let job = 'Coder';
const year = 1994;

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

//finctions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('ALL Products Deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge(1994);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAgeArrow(1994);

const jonas = {
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


//var firstName = 'Kumar';

const subhash = {
  firstName: 'Subhash',
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // isMillenial();

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

subhash.greet();
subhash.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 3);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedjessica = marryPerson(jessica, 'Davis');

//marriedjessica.lastName = 'Davis';

console.log('Before: ', jessica);
console.log('After: ', jessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//Shallow Copy
const jesiccaCopy = { ...jessica2 };
jesiccaCopy.lastName = 'Dunk';

console.log(jessica2, jesiccaCopy);
jesiccaCopy.family.push('John', 'Charlie');
console.log(jessica2, jesiccaCopy);

//Deep Copy
const jesiccaclone = structuredClone(jessica2);
jesiccaclone.family.push('Mary');
jesiccaclone.family.push('John');

console.log('Before Clone :', jessica2);
console.log('After clone :', jesiccaclone);
