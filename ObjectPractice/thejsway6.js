// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// // TODO: create the character object here
const aurora = {
    name: 'Aurora',
    health: 250,
    strength: 150,
    xp: 14,
    describe(){
        return `${this.name} has ${this.health} health, ${this.strength} strength, ${this.xp} experience points`
    }
}
aurora.describe()
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
// Execution result

// Modeling a dog
// Complete the following program to add the dog object definition.

// // TODO: create the dog object here

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
// Execution result

// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference(){
        return Math.PI*r*2
    },
    area(){
        return Math.PI*r*r
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

const account = {
    name: 'Alex',
    balance: 100,
    credit(transaction){
        if(typeof(transaction) !== 'number'){
            return 'Not a valid transaction'
        }
        else{
            this.balance += transaction
        }
    },
    describe(){
        return `The account for ${this.name} has a current balance of ${this.balance}`
    }
}

account.describe()
account.credit(250)
account.credit(-80)
account.credit('hi')
account.describe()

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

// Execution result


class Paper{
    constructor(shape, size){
        this._size = size,
        this._shape = shape
    }
    get size(){
        return this._size
    }
    get shape(){
        return this._size
    }
    tear(){
        this._size /= 2
        console.log(`paper torn in half. size now ${this._size}`)
    }
}

class Construction extends Paper{
    constructor(shape, size, color){
        super(shape, size)
        this._color = color
    }
    get color(){
        return this._color
    }
    tear(){
        this._size /= 2
        console.log(`paper torn in half. size now ${this._size}`)
        console.log('satisfying construction paper tearrrr')
    }
}

class Paper{
    constructor(shape, size){
        this._shape = shape,
        this._size = size
    }
    get shape(){
        return this._shape
    }
    get size(){
        return this._size
    }
    cut(){
        console.log(`snip snip ${size} in half`)
    }
}

class Construction extends Paper{
    constructor(shape, size, color){
        super(shape, size)
        this._color = color
    }
    get color(){
        return this._color
    }
    cut(){
        console.log('whateverrrr')
    }
}