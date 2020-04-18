/*
In javascript the function activates even if the function was called before it
creation

z = multiplication(x, y);

function multiplication(x, y) {
    return x * y;
}
*/
var a = 2,
    b = 3,
    c;

c = a + b;

var txt1 = "Its a ";
txt1 += "very nice day"

console.log(txt1);

console.log(c);

var fruits = ["Orange", "Mango", "kiwi"];

for (var index = 0; index < fruits.length; index++) {
    var element = fruits[index];

    console.log(element);

}

console.log(typeof(fruits));
console.log(typeof(10));
console.log(typeof(1.0));
console.log(typeof(null));

var x = 2,
    y = 3,
    z;

z = multiplication(x, y);

function multiplication(x, y) {
    return x * y;
}

var name = "viki";
var name;
Name = "vigneshwar";
console.log(Name);

console.log(z);

var contact = {
    name: "viki",
    number: 9176309643,
    profession: "developer",
    1: "viki",
    var: "vigneshwar",
    contact: ["viki", "gj"],
    undefined: { hike: "reeb" }
};

//doubt
console.log(contact.undefined, "undefined");

console.log(contact.contact)

console.log(contact);

console.log("number key " + contact[1]);

console.log("var key " + contact["var"]);
var particle = "electron is a particle which has negative charge";

var l = particle.length;

console.log("the length of the string is " + l);

console.log(particle.indexOf("negative"));

var quark = "  elementary particles";

console.log(quark.trim());

console.log(quark.substring(12));

console.log(quark.search("particle"))

var num = 9.56;



console.log(num.toExponential(4))

console.log(num.toPrecision(5));

console.log(num.toFixed(6))

console.log(Number.MAX_VALUE)

console.log(Number.MIN_VALUE);

console.log(fruits.toString());



console.log(fruits.sort());

console.log(fruits.join("/"));

fruits.pop();

console.log(fruits)

fruits.push('kiwi')

console.log(fruits);

console.log(fruits.shift());

console.log(fruits)

var veggies = ["tomato", "onion", ""]


var x = 2;

function abc() {
    var x = 5;

    console.log(x);
}

abc();
console.log("differ ", x);