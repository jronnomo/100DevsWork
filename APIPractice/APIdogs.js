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


//const select = document.querySelector('select')

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data =>{
    dogBreeds = Array.from(Object.keys(data.message))
    dogBreeds.forEach(breed => {
        const option = document.createElement('option')
        option.value = breed
        option.textContent = breed
        select.appendChild(option)
    })
})
.catch(err =>{
    alert(`error ${err}`)
})



const url = 'https://dog.ceo/api/breeds/list/all'
//const select = document.querySelector('select')

fetch(url)
.then(res => res.json())
.then(data => {
    let dogArray = Array.from(Object.keys(data.message))
    dogArray.forEach(element => {
        const option = document.createElement('option')
        option.value = element
        option.textContent = element
        select.appendChild(option)
    })
})
.catch(err => {
    console.log(`error ${err}`)
})


//const select = document.querySelector('select')

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(data => {
    const dogArr = Array.from(Object.keys(data.message))
    dogArr.forEach(dogBreed => {
        const option = document.createElement('option') //creates a <option></option>
        option.value = dogBreed
        option.textContent = dogBreed
        select.appendChild(option)
    })
})
.catch(err => {
    console.log(`Error is ${err}`)
})

