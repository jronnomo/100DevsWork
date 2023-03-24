//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
        })
        .catch(err => {
            console.log(`error is ${err}`)
        });
}

document.querySelector('button').addEventListener('click', fetchDrink)

async function fetchDrink(){
    try{
        let drink = document.querySelector('input').value
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        const data = await response.json()
        document.querySelector('#h2').value = data[0].strDrink
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
    }
    catch(err){
        console.log(`error is ${err}`)
    }
}