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


