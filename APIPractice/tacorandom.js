document.querySelector('button').addEventListener('click', getFetch)
function getFetch(){
    
    fetch("http://taco-randomizer.herokuapp.com")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

getFetch()