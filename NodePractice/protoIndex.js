//import Person from '/person'
const Person = require('./person')
const person1 = new Person('John Doe', 2)
console.log(person1)
person1.greetings()
console.log('Hello from Node.js...');

const Logger = require('./logger')

const logger = new Logger();

//the data argument passed here is an Object. This was literally declared in the logger log(msg) method
logger.on('message', (data) => console.log('Called Listener', data))

logger.log('Hello World')

//For homework, output logs to a new file!