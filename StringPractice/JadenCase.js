function jadenThis(str){
    const itsJaden = str.split(' ').str.map(word => {
        return word.slice(0,1).toUpperCase()+word.slice(1)
    }).split(' ')
    console.log(itsJaden(str))
}

String.prototype.toJadenCase = function() {
    return this.split(" ").map(function(item){
      return item.charAt(0).toUpperCase() + item.slice(1)}).join(" ")
  };