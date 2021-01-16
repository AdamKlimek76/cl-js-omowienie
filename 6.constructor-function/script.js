function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.getFullName = function () {
    //     return this.firstName + " " + this.lastName;
    // }
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
console.dir(Person);

const person1 = new Person("Adam", "Nowak", 12);
console.log(person1);
const person2 = new Person("Adam", "Nowak", 12);
console.log(person1 === person2);

console.log(person1.getFullName());

const person3 = new Person("Jan", "Kowalski", 33);
console.log(person3.getFullName());

Person.prototype.sayHello = function () {
    console.log("Hello");
}
person3.sayHello();
