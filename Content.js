
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
let sidebarElements = document.querySelectorAll('#menuOsobisteClouda .side-nav #slideOutBody ul li a')
let sidebar = document.querySelector('#slide-out')
let sitemapa = document.querySelector('#siteMapa')
let btns = document.querySelectorAll('.btn-flat')
let tabs = document.querySelectorAll('.tab')
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

sidebarElements.forEach((element) => {
    element.style.background = contentColor;
    element.addEventListener('mouseover', () => {
        // this.fromElement.style.background = secondaryColor
    })
    element.addEventListener('mouseleave', () => {
        // this.fromElement.style.background = contentColor
    })
})

sidebar.style.background = bgColor;
sitemapa.style.background = bgColor;
console.log(btns)
btns.forEach(btn => {
    btn.style.color = 'white';
    btn.style.border = '1px solid white'
})
document.querySelector('.cardPozycjaTresc').style.background = contentColor;
document.querySelector('.cardPozycjaTresc').style.color = color;
document.querySelector('.cardPozycjaTresc').style.border = '1px solid white'

tabs.forEach(tab => {
    tab.style.color = contentColor;
    tab.style.border = textColor
})



