class Person{
    constructor(name, age){
        this._name = name,
        this._age = age
    }
    greetings(){
        console.log(`Hello, I'm ${this._name} and I'm ${this._age} years old`)
    }
}

console.log(__dirname, __filename)

module.exports = Person;