let dogBreed = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('select')

fetch(dogBreed)
.then(res => res.json())
.then(data => {
    const dogObj = data.message
    const dogList = Object.keys(dogObj)
    console.log(dogList)
    dogList.forEach(element => {
        const option = document.createElement('option')
        option.value = element
        option.innerText = element
        select.appendChild(option)
    })
})
.catch(err => {
    console.log(`error is ${err}`)
})