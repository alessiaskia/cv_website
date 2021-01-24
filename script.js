/* eslint-disable no-restricted-globals */
import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';
import { tradHeader, tradMenu } from './src/trad';
import { aboutView } from './views/about';
import { webView } from './views/web';
import { translationView } from './views/translation';
import { backgroundView } from './views/background';
import { contactView } from './views/contact';

const nav = document.querySelector('.nav-bar');
const allSections = document.querySelector('.all-sections');
const footer = document.querySelector('footer');
let menu = document.querySelector('.nav-bar-links');
let headerContent = document.querySelector('.header-content');
const header = document.querySelector('.landing-page');
let footerContent = document.querySelector('.row');
let currentLanguage = 'en';
const textArea = document.querySelector('textarea');

function render() {
  headerContent = `
      <i class="fas fa-bars open"></i>
      <div class="slogan">
        <h1 class="my-name">Alessia Scaccia</h1>
        <p class="my-title-web">${tradHeader[currentLanguage].web}</p>
        <p class="my-title-trad">${tradHeader[currentLanguage].trad}</p>
      </div>`;
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
    <ul class="d-flex flex-row">
      <li><a class="language-button" id="en">en</a></li>
      <li><a class="language-button" id="fr">fr</a></li>
      <li><a class="language-button" id="nl">nl</a></li>
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
  footer.innerHTML = footerContent;
  allSections.innerHTML = aboutView(currentLanguage);
  allSections.innerHTML += webView(currentLanguage);
  allSections.innerHTML += translationView(currentLanguage);
  allSections.innerHTML += backgroundView(currentLanguage);
  allSections.innerHTML += contactView(currentLanguage);
}

render();
const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.language-button')) {
    currentLanguage = e.target.id;
    // console.log(currentLanguage);
    e.preventDefault();
    render();
  } else if (e.target.matches('.close')) {
    // --- cache/montre barre nav --- //
    // open -- fa-bars
    // close -- fa-times
    console.log('close ok');
    nav.classList.replace('show', 'hide');
    closeButton.classList.add('hide');
    openButton.classList.remove('hide');
  } else if (e.target.matches('.open')) {
    console.log('open ok');
    nav.classList.replace('hide', 'show');
    openButton.classList.add('hide');
    closeButton.classList.remove('hide');
  } else if (e.target.matches('.nav-link')) {
    nav.classList.replace('show', 'hide');
    closeButton.classList.toggle('hide');
    openButton.classList.toggle('hide');
  } else if (e.target.matches('#btn-formulaiure')) {
    // clean textarea form
    textArea.innerHTML = '';
  }
});
