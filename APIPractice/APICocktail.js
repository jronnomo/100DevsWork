const button = document.querySelector('#button').addEventListener('click', grabInput)

function grabInput(){
    let drink = document.querySelector('#input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        data[0].strDrink
        data[0].strInstructions
        data[0].strDrinkThumb
    })
    .catch(err => {
        console.log(err)
    })
}