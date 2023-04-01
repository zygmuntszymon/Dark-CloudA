let bgColor = '#191A30'
let contentColor = '#141425'
let secondaryColor = '#3E4074'
let textColor = '#b1b1b1'
console.log(1)

console.log(2)
let layoutBody = document.querySelector('#layoutBody')
let navWrapper = document.querySelector('.nav-wrapper')
let materialIcons = document.querySelectorAll('.material-icons')
let cards = document.querySelectorAll('.tablicaZawartosc')

//STYLING
layoutBody.style.backgroundColor = bgColor;
navWrapper.style.backgroundColor = bgColor;

materialIcons.forEach((icon) => {
    icon.style.color = 'grey'
})

cards.forEach((card) => {
    card.style.background = contentColor;
    card.style.color = textColor;
})











