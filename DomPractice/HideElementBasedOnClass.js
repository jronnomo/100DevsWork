Array.from(document.querySelectorAll('.class1')).forEach(element => element.addEventListener('click', hideThis));

function hideThis(click){
    if(click.target.classList.contains('.class2')){
        document.querySelector('#elementContainingSepClass').classList.toggle('hidden')
    }
    else{
        alert('wrong!')
    }
}

//struggle notes

// click.target.classList.contains

// even when click is on the element in question we still have to querySelector the element ID and add the hidden class to it













Array.from(document.querySelectorAll('class1')).forEach(element => element.addEventListener('click', hideThis ))

function hideThis(click){
    click.target.classList.contains('class2') ? document.querySelector('#element').display.style = "none" : alert('wrong!')
}