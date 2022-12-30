function delay(time){
    return new Promise(resolve => setTimeout(resolve, time))
}
async function setNextPhoto(){
    delay(1000)
}