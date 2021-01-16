const person = {
    firstName: "Adam",
    lastName: "Nowak",
    sayHello: function () {
        console.log("Witaj, jestem " + this.firstName + " " + this.lastName);
    }
};

console.log(person.firstName);
console.log(person["firstName"]);

console.log(person.age);
person.age = 34;
console.log(person.age);
person.sayHello();

const otherVariable = person;
otherVariable.firstName = "Piotr";
console.log(person.firstName);

function add(a, b) {
    return a + b;
}
