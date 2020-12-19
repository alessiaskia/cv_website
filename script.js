import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';
import { tradMenu } from './src/trad';
import { landingView } from './views/landing';
import { aboutView } from './views/about';

const nav = document.querySelector('.nav-bar');
const langButtons = document.querySelectorAll('.language-button');
const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.closed');
const allRubriques = document.querySelector('.all-rubriques');

// --- changement de langue --- //
// clic sur l'icone de la langue
// change les elements du menu

let menu = document.querySelector('.nav-bar-links');
let currentLanguage = 'en';
let langButton;
for (langButton of langButtons) {
  langButton.addEventListener('click', (e) => {
    console.log(e.currentTarget.id);
    currentLanguage = e.currentTarget.id;
    menu = `<div class="nav-bar-links"><ul class="d-flex"><li><a href="#contact" class="nav-link contact">contact</a></li><li><a href="#background" class="nav-link background">${tradMenu[currentLanguage].background}</a></li><li><a href="#translation" class="nav-link translation">${tradMenu[currentLanguage].translation}</a></li><li><a href="#web-dev" class="nav-link web-dev">${tradMenu[currentLanguage].web}</a></li><li><a href="#about" class="nav-link about">${tradMenu[currentLanguage].about}</a></li></ul></div>`;
    nav.innerHTML = `<div class="close"><i class="fas fa-times"></i></div>${menu}`;

    // go to page "about" if click on landing page
    // if (e.currentTarget.classList.contains('landing')) {
    //   allRubriques.innerHTML += aboutView;
    //   console.log(aboutView);
    // }
  });
}

document.body.addEventListener('click', (e) => {
  // --- cache/montre barre nav --- //
  if (e.target.matches('.fa-times')) {
    console.log('close ok');
    nav.classList.replace('.show', '.hide');
    closeButton.classList.toggle('hide');
    openButton.classList.toggle('hide');
  } else if (e.target.matches('.fa-bars')) {
    console.log('open ok');
    nav.classList.replace('.hide', '.show');
    openButton.classList.toggle('hide');
    closeButton.classList.toggle('hide');
  }
});
