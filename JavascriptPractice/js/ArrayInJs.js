"use strict"

//var name = ["viki", 9176309643];
/*
When we tried to use variable name as name in browser console 
it had returned us the error of 
".push() not a function type error : undefined is not a function" because
each Global JavaScript objects, functions, 
and variables become part of the window 
object automatically. All global variables are window object properties,
 and all global functions are its methods.

 window.name is also generic existing inside window object which is 
 of type string so when we try to change that by pushing a value 
 it gives us an error
 hence name variable name cannot be used in browser console
*/
//name.push(22653596);

//console.log(name);


var person = [];

var totalLength = 10

function addElement(x) {


    let len = person.length;

    if (len <= totalLength) {
        person[len] = x;
    } else {
        console.log("You cannot add more element than the total length")
    }

}

function deleteElement() {
    try {
        person.length = person.length - 1;
    } catch {
        console.log("No element exist");
        //console.log(person.length);
        //person.length = -1;
    }


    //if (person.length <= 0) {
    //  console.log("No element exist");
    //} else {
    //  delete(person[person.length]);
    //}
}

function deleteElementBasedOnIndex(index) {
    if (typeof(index) == "number") {
        if (index < totalLength) {
            for (let i = index; i < person.length - 1; i++) {
                person[i] = person[i + 1];
            }

            try {
                person.length = person.length - 1;
            } catch {
                console.log("No element exist")
            }

        } else if (index >= person.length && index >= totalLength) {
            console.log("You are exceeding the array length");
        } else if (index < 0) {
            console.log("Invalid index value");
        }
    } else {
        console.log("Invalid type")
    }
}

function addElementBasedOnIndex(element, index) {


    if (typeof(index) == "number") {
        if (index < totalLength) {
            person[index] = element;
        } else if (index >= totalLength) {
            console.log("Total length exceeded");
        } else if (index < 0) {
            console.log("Invalid index value")
        }
    } else {
        console.log("Invalid index type");
    }
}

addElement("viki");
addElement(9176309643);
addElement(22653596);
addElement(true);
addElement();
addElement(null);

console.log(person);

deleteElement();
console.log(person);

deleteElement();
console.log(person);
deleteElement();
console.log(person);
deleteElement();
console.log(person);
deleteElement();
console.log(person);
deleteElement();
console.log(person);
deleteElement();
//console.log(person);

addElementBasedOnIndex("viki", 2);
addElementBasedOnIndex(9176309643, 0);
addElementBasedOnIndex("nick", "viki");
addElementBasedOnIndex(true, 1);
console.log(person);

deleteElementBasedOnIndex(1);
console.log(person);
deleteElementBasedOnIndex(0);

console.log(person);
deleteElementBasedOnIndex(0);
console.log(person);

deleteElementBasedOnIndex(0);
console.log(person);