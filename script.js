import './style.scss';
// import $ from 'jquery';
// import axios from 'axios';
import { tradMenu } from './src/trad';
import { aboutView } from './views/about';
import { webView } from './views/web';
import { translationView } from './views/translation';

const nav = document.querySelector('.nav-bar');
const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.closed');
const allSections = document.querySelector('.all-sections');
const footer = document.querySelector('footer');
let menu = document.querySelector('.nav-bar-links');
let footerContent = document.querySelector('.row');
let currentLanguage = 'en';

function render() {
  menu = `
    <div class="nav-bar-links">
      <ul class="d-flex">
        <li>
          <a href="#contact" class="nav-link contact">contact</a>
        </li>
        <li>
          <a href="#background" class="nav-link background">${tradMenu[currentLanguage].background}</a>
        </li>
        <li>
        <a href="#translation" class="nav-link translation">${tradMenu[currentLanguage].translation}</a>
        </li>
        <li>
        <a href="#web-dev" class="nav-link web-dev">${tradMenu[currentLanguage].web}</a>
        </li>
        <li>
        <a href="#about" class="nav-link about">${tradMenu[currentLanguage].about}</a>
        </li>
      </ul>
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
          </div>
      </div>`;
  nav.innerHTML = `<div class="close"><i class="fas fa-times"></i></div>${menu}`;
  footer.innerHTML = footerContent;
  allSections.innerHTML = aboutView(currentLanguage);
  allSections.innerHTML += webView(currentLanguage);
  allSections.innerHTML += translationView(currentLanguage);
}

render();

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.language-button')) {
    currentLanguage = e.target.id;
    console.log(currentLanguage);
    console.log(footer.innerHTML);
    e.preventDefault();
    render();
    // --- cache/montre barre nav --- //
  } else if (e.target.matches('.fa-times')) {
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
