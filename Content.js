
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
let newsCard = document.querySelector('.collection .collection-item.avatar ')
let recentNews = document.querySelectorAll('.recent-news .card')

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
newsCard.style.background = bgColor;
newsCard.style.color = textColor;

recentNews.forEach((card) => {
    card.style.background = contentColor;
    card.style.color = textColor;
})







