//hiding an element on https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

document.querySelector('#siteSub').addEventListener('click', hideThis)

function hideThis(){
    document.querySelector('#firstHeading').style.display = 'none'
}