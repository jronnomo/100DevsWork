document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    
    fetch(url)
        .then(res => res.json)
        .then(data => {
            document.querySelector(h2).innerText = data.drinks[0].strDrink
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
        })
        .catch(err => {
            console.log(`error is ${err}`)
        })
}
