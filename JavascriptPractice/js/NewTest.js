//Note: need to learn fisher yates for schuffling process

var arr = [100, 25, 1, 7, 64, 24, 77, 14, 2];

//if we use sort method without comparision function it would sort the integers as strings
//which will result in wrong sorting process 
//arr.sort();

//Note : Hoisting is a feature in javascript 
//which will collect all the declaration to the top 
//as a result a function r variable can be used 
// before it is declared in javascript
//in hoisting initialized tokens r not considered

/*
if we use strict mode by declaring

"use strict";

it is a string if declared it wont allow us to use undeclared variables r functions
before declaring it

it would cause error
*/

arr.sort(function(a, b) { return a - b });

console.log(arr);

//ascending
arr.sort(function(a, b) {
    return b - a;
})

//descending
console.log(arr);


var d = Date();

console.log(d);

arr.forEach(myFunction);

function myFunction(arr) {
    console.log(arr);
}


console.log(Math.PI);


console.log(Math.pow(4, 2));

console.log(Math.round(2.5));

console.log(Math.sqrt(22));

console.log(Math.random());


var cars = { carName: "nano", type: "economical" };

for (x in cars) {
    console.log(cars[x])

}

/**In javascript five different data types
 * 
 * string 
 * boolean
 * number
 * object 
 * function
 */

var man = {
    name: "viki",
    designation: "developer",
    undefined: { age: 1 }
};

console.log(man.undefined);

a = 2;
b = 2;

c = a * b;


var a, b, c;
console.log(c);

//"use  strict"

//Difference between var and let

// if we declare a variable with same name inside a block it redeclares itself
//and changes its values
var a = 2;

{
    var a = 5;
}

console.log(a);

/*
whereas incase of let a variable declared inside a block will only have a block scope
its value wont be changes outside the block
*/

var a = 1;

{
    let a = 5;
}

console.log("let variable :" + a);

let i = 5;

for (let i = 0; i < arr.length; i++) {
    //const element = array[i]//;

}

//let exhibits a value declared only outside the loop 
console.log(i);


//variables with let keyword are not hoisted to the top
// using a let variable before it is declared will result in reference error

//const 
// variables declared with const are similar to let except they cannot be reassigned

const PI = 3.14;

//This cannot be done
//PI = PI + 5;

console.log("pi" + PI);

const human = {
    name: "neon",
    age: 25,
    qualification: "Tester"
};

human.name = "radium";
human.age = 45;
human.qualification = "data scientist"
console.log(human.name);


//This cannot be done cause we can change the property of the object
//but we cannot reassign the object itself
/*

const human = {
    name: "helium",
    age: 14,
    qualification: "Tester"
};*/


/*In similar way we can change the value of array
add value in an array but we cannot reassign an array
*/


//filter

const ages = [10, 1, 5, 55, 24, 3, 12, 11, 22, 85, 42, 17, 7, 8, 5, 1, 35, 5];

/*const adults = ages.filter(function(age) {
    if (age >= 21) {
        return true;

    }
});
*/
//console.log(adults);

//filter using arrow function
const adults = ages.filter(age => age >= 21);

console.log(adults);


var companies = [{ companyName: "company one", type: "finance", start: 1982, end: 1994 },
    { companyName: "company two", type: "retail", start: 1982, end: 2020 },
    { companyName: "company three", type: "medicine", start: 1953, end: 1957 },
    { companyName: "company four", type: "civil", start: 1995, end: 1998 },
    { companyName: "company five", type: "finance", start: 2004, end: 2012 },
    { companyName: "company six", type: "manufacturing", start: 2007, end: 2019 },
    { companyName: "company seven", type: "retail", start: 1975, end: 2020 },
];

const financeCompanies = companies.filter(company => company.type === "finance");

console.log(financeCompanies);

// 2000's companies 

const twentiesCompanies = companies.filter(company => (company.start >= 2000));

console.log(twentiesCompanies);


const companyNames = companies.map(function(company) {
    return company.companyName;
});

console.log(companyNames);

//using arrow function
/*
const companyNamesInMap = companies.map(function(company) {
    return company.companyName;
});
*/

//console.log(companyNamesInMap);

var test = 2 + 3 + "2";



console.log(2 + "1" + 2);


var stuName = ["viki", 9176309643];

console.log(stuName);

stuName.push(22653596);

console.log(stuName);