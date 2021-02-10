/* eslint-disable no-restricted-globals */
import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { tradHeader, tradMenu } from './src/trad';
import { aboutView } from './views/about';
import { webView } from './views/web';
import { translationView } from './views/translation';
import { backgroundView } from './views/background';
import { contactView } from './views/contact';

// Aos
window.addEventListener('load', AOS.refresh);
AOS.init({
  duration: 1000,
  disable: 'mobile',
});

// query selectors for DOM Interaction
const nav = document.querySelector('.nav-bar');
const allSections = document.querySelector('.all-sections');
const footer = document.querySelector('footer');
let menu = document.querySelector('.nav-bar-links');
let headerContent = document.querySelector('.header-content');
const header = document.querySelector('.landing-page');
let footerContent = document.querySelector('.row');
let currentLanguage = 'en';
const textArea = document.querySelector('textarea');

// rendering the content every time language is changed
function render() {
  headerContent = `
      <i class="fas fa-bars menu-button show"></i>
      <div class="slogan">
        <h1 class="my-name">Alessia Scaccia</h1>
        <p class="my-title-web">${tradHeader[currentLanguage].web}</p>
        <p class="my-title-trad">${tradHeader[currentLanguage].trad}</p>
        <div class="choice-language">
        <ul class="d-flex flex-row">
          <li class="choose">${tradHeader[currentLanguage].choose}</li>
          <li><a class="language-button" id="en">en</a></li>
          <li><a class="language-button" id="fr">fr</a></li>
          <li><a class="language-button" id="nl">nl</a></li>
        </ul>
      </div>
      <a href="#about"><i class="fas fa-angle-down"></i></a>`;
  menu = `
  <div class="nav-bar-links">
    <i class="fas fa-times close"></i>
    <ul class="list-rubriques">
    <li>
      <a href="#about" class="nav-link about">${tradMenu[currentLanguage].about}</a>
    </li>
    <li>
      <a href="#web-dev" class="nav-link web-dev">${tradMenu[currentLanguage].web}</a>
    </li>
    <li>
      <a href="#translation" class="nav-link translation">${tradMenu[currentLanguage].translation}</a>
    </li>
    <li>
      <a href="#background" class="nav-link background">${tradMenu[currentLanguage].background}</a>
    </li>
    <li>
      <a href="#contact" class="nav-link contact">${tradMenu[currentLanguage].contact}</a>
    </li>
  </ul>
  <div class="choice-language">
    <ul>
      <li><a class="language-button cursor-pointer" id="en">en</a></li>
      <li><a class="language-button cursor-pointer" id="fr">fr</a></li>
      <li><a class="language-button cursor-pointer" id="nl">nl</a></li>
    </ul>
  </div>
</div>`;

  footerContent = `
        <div class="row d-flex">
          <div class="link-languages">
              <ul class="d-flex">
                  <li class="language-button cursor-pointer" id="en">en</li>
                  <li class="language-button cursor-pointer" id="fr">fr</li>
                  <li class="language-button cursor-pointer" id="nl">nl</li>
              </ul>
          </div>
          <div class="copyright">&copy; Alessia Scaccia 2021</div>
          <div class="link-icons">
              <ul class="d-flex">
                  <li title="CV">
                      <a href="src/${tradMenu[currentLanguage].cv}" target="_blank">
                          <i class="fas fa-file-download"></i>
                      </a>
                  </li>
                  <li title="LinkedIn">
                      <a href="https://www.linkedin.com/in/alessia-scaccia/" target="_blank">
                          <i class="fab fa-linkedin"></i>
                      </a>
                  </li>
                  <li title="GitHub">
                      <a href="https://github.com/alessiaskia" target="_blank">
                          <i class="fab fa-github"></i>
                      </a>
                  </li>
              </ul>
            </div>`;
  nav.innerHTML = menu;
  header.innerHTML = headerContent;
  allSections.innerHTML = aboutView(currentLanguage);
  allSections.innerHTML += webView(currentLanguage);
  allSections.innerHTML += translationView(currentLanguage);
  allSections.innerHTML += backgroundView(currentLanguage);
  allSections.innerHTML += contactView(currentLanguage);
  footer.innerHTML = footerContent;
}

render();
const menuButton = document.querySelector('.menu-button');

// event delegation
// 1: change language
// 2: open/close burger menu in mobile version
// 3: clean up text in message box

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.language-button')) {
    currentLanguage = e.target.id;
    // console.log(currentLanguage);
    e.preventDefault();
    render();
    console.log(menuButton.className);
    menuButton.classList.replace('fa-bars', 'fa-times');
    console.log(menuButton.className);
  } else if (e.target.matches('.enter')) {
    render();
  } else if (e.target.matches('.fa-bars')) {
    console.log('open ok');
    nav.classList.replace('hide', 'show');
    menuButton.classList.replace('fa-bars', 'fa-times');
  } else if (e.target.matches('.fa-times')) {
    console.log('close ok');
    nav.classList.replace('show', 'hide');
    menuButton.classList.replace('fa-times', 'fa-bars');
  } else if (e.target.matches('.nav-link')) {
    nav.classList.replace('show', 'hide');
    menuButton.classList.replace('fa-times', 'fa-bars');
  } else if (e.target.matches('#btn-formulaiure')) {
    // clean textarea form
    textArea.innerHTML = '';
  }
});
