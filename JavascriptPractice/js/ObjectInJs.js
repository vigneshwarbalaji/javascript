//object handling in javascript

"use strict"

//ways of creating an object
//1st way
//object literals
var person = {
    name: "viki",
    phoneno: 9176309643
};


//2nd way
//using the javascript keyword new

var man = new Object();

man.name = "nick";
man.age = 15;

//3rd way
//using constructor keyword

class human {
    constructor(name, designation) {
        this.huname = name;
        this.hudesignation = designation;
    }

}
var h = new human("kit", "tester");

console.log(h);


/*
function addProperty(keys, value) {
    person.keys = value;
}

addProperty(1, "developer");

console.log(person);

*/


var particles = { nameOfTheParticle: "proton", charge: "positive", size: 2 };
/*
var objTotalLength = 10;

function addObj(names, charge, size) {
    let len = particles.length;

    if (len < objTotalLength) {
        particles[len].nameOfTheParticle = names;
        particles[len].charge = charge;
        particles[len].size = size;
    } else {
        console.log("There is no space in the array");
    }
}
*/
/* 
function retrieveByValue(value) {
    if (particles.nameOfTheParticle == value || particles.charge == value || particles.size == value) {
        console.log(particles);
    } else {
        console.log("No such value exist");
    }
} */

function retrieveByValue(object, value) {

    let bool = false;
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value) {
                console.log("The key of the given value ", value, "is", prop);

                bool = true;
            }

        }
    }

    if (bool == false) {
        console.log("No such value exist");
    }
}

retrieveByValue(person, "vi");

/*
function retrieveByKey(k) {
    var obj = String(Object.keys(particles));

    if (obj[0] == k) {
        console.log(particles.keys)
    } else {
        console.log("No such key exist");
    }
}

retrieveByKey('nameOfTheParticle');

*/

function retrieveByKey(object, k) {
    if (k in person) {
        console.log("The property", k, "is present in the object person")
            //console.log(person.k);
        console.log(object[k])
    } else {
        console.log("No such key exist");
    }
}


retrieveByKey(person, "designation");

//console.log(ans)

console.log(Object.values(particles));
console.log(Object.keys(particles));