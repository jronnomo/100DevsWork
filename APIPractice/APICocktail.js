let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
let drink = document.querySelector('input').value

document.querySelector('button').addEventListener('click', addDrink)


function addDrink(){
    fetch(url)
    .then(res => res.json)
    .then(data => {
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
    document.querySelector('img').innerText = data.drinks[0].strThumb
})
    .catch(err => {
        console.log(`error is ${err}`)
    })
}