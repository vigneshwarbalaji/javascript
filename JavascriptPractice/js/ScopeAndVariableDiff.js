var a = 2;

var a = 3;

function fun() {
    var a = 5;
}

console.log(a);

let b = 3;

//let b = 2;
//1st diff var allows a variable to be redeclared with a same name 
//even if it is in the same scope 

//whereas let wont allow such redeclaration in the same scope and it would give
//identifier has already been declared error
//bth for var and let the function scope finishes at the end of the function


function fun1() {
    let b = 5;
}

console.log(b);

const c = 2;

//const c = 3;
//let wont allow redeclaration 
//const also wont allow redeclaration in the same scope
let d = 2;

d = d + 2;
//let value can be changed after processing whereas
// const value cannot be changed
//c = c + 2; this cannot be done
//console.log(c);

console.log(d);

function fun2() {
    const c = 5;
}
// for all let,const and var the value ends within a function scope
console.log(c);

var str = "hello world"
var int = 3;

if (int == 3) {
    var str = "good morning world"
}

//in loops if we unknowingly use the same variable name var may cause major bugs
//cause its scope does not end within a loop scope
console.log(str);


let strings = "New world order begins";
let k = 2;

//whereas for let the scope ends within  a loop scope it wont 
//comes around to outside.
//let can be updated but cannot be redclared 
if (k == 2) {
    let strings = "tech powers the world";
}


//var declarations are globally scoped or function scoped while 
//let and const are block scoped.

//var variables can be updated and re-declared within its scope; 
//let variables can be updated but not re-declared; 
//const variables can neither be updated nor re-declared.

//They are all hoisted to the top of their scope 
//but while varvariables are initialized with undefined, 
//let and const variables are not initialized.

//While var and let can be declared without being initialized, 
//const must be initialized during declaration.

console.log(strings)