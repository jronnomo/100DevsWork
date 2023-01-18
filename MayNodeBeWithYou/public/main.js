// main.js
const update = document.querySelector('#update-button')
const deletebutton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

deletebutton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Darth Vader'
        })
    })
    .then(data => {
        if(data.ok) return data.json()
    })
    .then(data => {
        if(data === 'No quote to delete'){
            messageDiv.textContent = 'No Darth Vader quote to delete'
        }
        else{
            window.location.reload(true)
        }
    })
})

update.addEventListener('click', _ => {
  // Send PUT Request here
  fetch('/quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: 'Darth Vader',
        quote: 'I find your lack of faith disturbing.'
    })
  })
  .then(data => {
    if(data.ok) return data.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})

