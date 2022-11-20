let dogBreed = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('select')

fetch(dogBreed)
    .then(res => res.json())
    .then(data => {
        const breedsObject = data.message //Turn message into an object
        const breedsArray = Object.keys(breedsObject) //Turn object keys into an array
        console.log(breedsArray)
        breedsArray.forEach(element => {
            const option = document.createElement('option') //<option></option>
            option.value = element //<option value='element'></option>
            option.innerText = element //<option value='element'>element</option>
            select.appendChild(option) //adds elements in the array to dropdown
        });
    })
    .catch(err => {
        console.log(`error ${err}`)
})
        
const img = document.querySelector('.dog-img')

const getDoggoImg = url => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            img.src = data.message
        })
    }

select.addEventListener('change', event => {
    const breed = event.target.value
    let url = `https://dog.ceo/api/breed/${breed}/images/random`
    getDoggoImg(url)
})