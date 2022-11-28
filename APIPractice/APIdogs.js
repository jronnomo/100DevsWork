const select = document.querySelector('select')

fetch(`https://dog.ceo/api/breeds/list/all`)
.then(res = res.json())
.then(data => {
    const breedArr = Array.from(Object.keys(data.message))
    breedArr.forEach(breed => {
        const option = document.createElement('option')
        option.textContent = breed
        option.value = breed
        select.appendChild(option)   
    })
})
.catch(err => {
    console.log(`error ${err}`)
})