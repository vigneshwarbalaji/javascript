class Person {
    constructor(name) {
        this.pername = name;
    }

    //Person = new Person("viki");

}

per = new Person("viki");
document.getElementById("demo").innerHTML = per.pername;