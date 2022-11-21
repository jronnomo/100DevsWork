let dogBreed = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('select')

    fetch(dogBreed)
        .then(res => res.json())
        .then(data => {
            const breedsObject = data.message
            const breedsArray = Object.keys(breedsObject)
            console.log(breedsArray)
            breedsArray.forEach(element => {
                const option = document.createElement('option')
                option.value = element
                option.innerText = element
                select.appendChild(option)
            });
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

