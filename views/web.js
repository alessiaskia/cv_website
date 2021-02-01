import { tradWeb } from '../src/trad';
import { skills } from '../src/skills';
import { projects } from '../src/projects';

/* eslint-disable import/prefer-default-export */
let skillContainer = '<div class="skill-container black-box d-flex flex-wrap justify-center">';
let projectBox = '<div class="project-box d-flex flex-wrap justify-center black-box">';
let projectID = 0;
let popup = '';

// create cards
// objective : obtain variable "container" to integrate in view
for (const skill of skills) {
  let skillCard = `
    <div class="card">
    ${skill.icon}
    <h3 class="skill-group show-more cursor-pointer title-cards">${skill.group}</h3>
    <ul class="hide show">`;
  for (let i = 0; i < skill.name.length; i++) {
    skillCard += `<li class="skill-name">${skill.name[i]}</li>`;
  }
  skillCard += '</ul></div>';
  skillContainer += skillCard;
}
skillContainer += '</div>';

// create portfolio cards
for (const project of projects) {
  const projectCard = `
  <div class="card project cursor-pointer" id="${projectID}">
    <h3 class="project-title cursor-pointer">${project.title}</h3>
  </div>`;
  projectID++;
  projectBox += projectCard;
}
projectBox += '</div>';

// show or hide list of skills
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.show-more')) {
    const competences = e.target.parentNode.children[2];
    competences.classList.toggle('hide');
  } else if (e.target.matches('.project-title')) {
    const selectedProject = e.target.parentNode;
    const projectToShow = projects[selectedProject.id];
    popup = `
            <div class="popup show">
                <ul>
                  <li class="project-li language">Written mainly in <strong>${projectToShow.language}</strong></li>
                  <li class="project-li">${projectToShow.description}</li>
                  <li class="project-li git">
                    <a href="${projectToShow.github}" target="_blank">Link to Github</a>
                  </li>
                </ul>
              <div class="button-box">
                <button class="close btn-orange">X</button>
              </div>
            </div>`;
    const spaceForPopup = document.querySelector('.project-box');
    spaceForPopup.innerHTML += popup;
  } else if (e.target.matches('.close')) {
    e.preventDefault();
    const popups = document.querySelectorAll('.popup');
    for (popup of popups) {
      const popupContainer = e.target.parentNode.parentNode.parentNode;
      popupContainer.removeChild(popup);
    }
  }
});

export const webView = (lang) => `
<section class="rubrique web-dev">
  <div class="section-top">
        <a name="web-dev" class="anchor"></a>
        <h1>${tradWeb[lang].web}<br /><span class="accent">${tradWeb[lang].development}</span> </h1>
  </div>
  <div class="section-content skills">
    <div class="photo-box programming"></div>
      <div class="it-skills">
        <h2>${tradWeb[lang].it}</h2>
        ${skillContainer}
      </div>
  </div>
  <div class="section-content portfolio">
    <div class="portfolio">
      <h2>portfolio</h2>
      ${projectBox}
    </div>
  </div>
</section>`;
