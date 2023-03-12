const bgColor = "#212121";
const textColor = "#616161";
const bgColor2 = "#000"
let tablicaZawartosc = document.getElementsByClassName('tablicaZawartosc');
let nav = document.getElementsByClassName('nav-wrapper');
let card = document.getElementsByClassName('card');
let btn = document.querySelectorAll('.btn-flat, .btn');
let links = document.getElementsByTagName('a')
let cardTitle = document.getElementsByClassName('card-title')
let widget = document.getElementsByClassName('widgetClouda')
for (let i = 0; i < tablicaZawartosc.length; i++) {
    tablicaZawartosc[i].style.backgroundColor = bgColor;
    tablicaZawartosc[i].style.color = textColor;
}
for (let i = 0; i < nav.length; i++) {
    nav[i].style.backgroundColor = bgColor;
    nav[i].style.color = textColor;
}
for (let i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = bgColor;
    card[i].style.color = textColor;
}
for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = bgColor;
    links[i].style.color = textColor;
}
for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = bgColor;
    btn[i].style.color = textColor;
    btn[i].style.border = "1px solid white";
}
for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].style.backgroundColor = bgColor;
    cardTitle[i].style.color = textColor;
}
for (let i = 0; i < widget.length; i++) {
    widget[i].style.backgroundColor = bgColor;
    widget[i].style.color = textColor;
}
document.getElementsByClassName('collapsible-header')[0].style.backgroundColor = bgColor;
document.getElementsByClassName('collapsible-header')[0].style.color = textColor;
document.getElementById('layoutBody').style.backgroundColor = bgColor2;
document.getElementById('slideOutBody').style.backgroundColor = bgColor2;
document.getElementById('slideOutBody').style.color = textColor;
document.getElementsByClassName('side-nav')[0].style.backgroundColor = bgColor2;
document.getElementByClassName('side-nav')[0].style.color = textColor;