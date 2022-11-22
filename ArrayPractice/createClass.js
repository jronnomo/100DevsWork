class MakeJeans{
    constructor(length, width, color){
        this.length = length,
        this.width = width,
        this.color =  color
    }
    fit(){
        console.log(`the fit is ${this.length}L x ${this.width}W`)
    }
}

let myJeans = new MakeJeans(30, 32, 'blue')

console.log(myJeans.color)
myJeans.fit()