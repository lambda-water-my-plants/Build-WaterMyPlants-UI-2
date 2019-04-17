const button = document.querySelectorAll('.btn');
button.forEach(function(button) {
    button.style.color = "#FEAC88";
    button.style.backgroundColor = " #233D4D";
    button.style.fontFamily = "Yeseva One";
});

const card = document.querySelectorAll('.card-body');
card.forEach(function(card) {
    card.style.backgroundColor = ' #FCF9F4';
});

const text = document.querySelectorAll('.card-text');
card.forEach(function(text) {
    text.style.fontFamiy = "Lora";
    text.style.color = "#233D4D";
});

const title = document.querySelectorAll('.card-title');
title.forEach(function(title) {
    title.style.fontFamily = "Yeseva One";
    title.style.color = "#233D4D";
    title.style.fontSize = "2rem";
});

const intro = document.querySelector('#top-intro');
intro.style.fontFamily = "Yeseva One";
intro.style.color = "#FCF9F4";
intro.style.fontSize = "2rem";

const introparagraph = document.querySelector('.about-paragraph');
introparagraph.style.fontFamily = "Lora";
introparagraph.style.color = "#FCF9F4";

const bio = document.querySelectorAll('.bio');
bio.forEach(function(bio) {
    bio.style.fontFamily = "Lora";
    bio.style.color = "#233D4D";
});

const name = document.querySelectorAll('.name');
name.forEach(function(name) {
    name.style.fontFamily = "Yeseva One";
    name.style.color = "#233D4D";
});

