//import Person from '/person'
const Person = require('./person')
const person1 = new Person('John Doe', 2)
console.log(person1)
person1.greetings()
console.log('Hello from Node.js...');
