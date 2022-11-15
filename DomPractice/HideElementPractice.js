//hiding an element on https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

document.querySelector('#siteSub').addEventListener('click', hideThis)

function hideThis(){
    document.querySelector('#firstHeading').style.display = 'none'
}


// 1) Check if a class is included from an array of html elements containing a separate class
// 2) On Click, perform a function that hides the element based on if the class is included
// 3) If the element clicked doesn't include that separate class, alert "wrong!"

Array.from(document.querySelectorAll('.firstClass')).forEach(element => element.addEventListener('click', doThis))

function doThis(click){
    if(click.target.classList.contains('classInQuestion')){
        document.querySelector('#elementContainingSepClass').classList.toggle('hidden')
    }
    else{
        alert('wrong!')
    }
}


document.querySelector('#ID').addEventListener('click', doThis)

function doThis(){
    document.querySelector('.class').classList.toggle('hidden')
}


//first time getting this right!! LETS GOOOO
Array.from(document.querySelectorAll('.class1')).forEach(element => element.addEventListener('click', hideThis1))

function hideThis1(click){
    if(click.target.classList.contains('class2')){
        document.querySelector('#elementID').style.display = 'none'
    }
    else{
        alert('wrong!')
    }
}