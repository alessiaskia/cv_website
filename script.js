import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';
import { tradMenu } from './trad';

// --- changement de langue --- //
// clic sur l'icone de la langue
// change les elements du menu

let menu = document.querySelector('.nav-bar-links');
const nav = document.querySelector('.nav-bar');
const langButtons = document.querySelectorAll('.language-button');

let currentLanguage = 'en';
let langButton;
for (langButton of langButtons) {
  langButton.addEventListener('click', (e) => {
    console.log(e.currentTarget.id);
    currentLanguage = e.currentTarget.id;
    // console.log(tradMenu[currentLanguage].about);
    menu = `<div class="nav-bar-links"><ul class="d-flex"><li><a href="#contact" class="nav-link contact">contact</a></li><li><a href="#background" class="nav-link background">${tradMenu[currentLanguage].background}</a></li><li><a href="#translation" class="nav-link translation">${tradMenu[currentLanguage].translation}</a></li><li><a href="#web-dev" class="nav-link web-dev">${tradMenu[currentLanguage].web}</a></li><li><a href="#about" class="nav-link about">${tradMenu[currentLanguage].about}</a></li></ul></div>
        <div class="close"><i class="fas fa-window-close"></i></div>`;
    nav.innerHTML = menu;
  });
}

// --- cache/montre barre nav --- //

const closeButton = document.querySelector('.close');
const openButton = document.querySelector('.open');

const navBar = document.querySelector('.nav-bar');
closeButton.addEventListener('click', () => {
  console.log('close ok');
  navBar.classList.add('cache');
  openButton.classList.remove('cache');
});

openButton.addEventListener('click', () => {
  console.log('open ok');
  navBar.classList.remove('cache');
  openButton.classList.add('cache');
});
