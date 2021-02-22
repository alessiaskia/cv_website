/* eslint-disable import/prefer-default-export */
import { tradWeb } from '../src/trad';
import { skills } from '../src/skills';
import { projects } from '../src/projects';
import { getSelectedLanguage } from '../staticVarLanguage';

export const skillContainerLang = () => {
  const currentLanguage = getSelectedLanguage();
  let skillContainer = '<div class="skill-container black-box d-flex flex-wrap justify-center">';

  // create cards for skills and projects
  // objective : obtain variable "container" to integrate in view with the current language
  for (const skill of skills) {
    let skillCard = `
    <div class="card">
    ${skill.icon}
    <h3 class="skill-group show-more cursor-pointer title-cards">${skill.group[currentLanguage]}</h3>
    <ul class="hide show">`;
    for (let i = 0; i < skill.name.length; i++) {
      skillCard += `<li class="skill-name">${skill.name[i]}</li>`;
    }
    skillCard += '</ul></div>';
    skillContainer += skillCard;
  }
  skillContainer += '</div>';

  return skillContainer;
};

let projectBox = '<div class="project-box d-flex flex-wrap justify-center black-box">';
let projectID = 0;
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

// let popup = '';
// export const popupDescription = (lang) => {
//   const currentLanguage = lang;
//   let projectDescription = '';
//   for (const project of projects) {
//     projectDescription = project.description[currentLanguage];
//   }
//   return projectDescription;
// };

// show or hide list of skills
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.show-more')) {
    const competences = e.target.parentNode.children[2];
    competences.classList.toggle('hide');
  } else if (e.target.matches('.project-title')) {
    const selectedProject = e.target.parentNode;
    const projectToShow = projects[selectedProject.id];
    const popupDescription = (popupDesclang) => {
      const currentLanguage = popupDesclang;
      const projectDescription = projectToShow.description[currentLanguage];
      return projectDescription;
    };
    const popupLang = (popuplang) => {
      const popupContent = `<div class="popup show" style="background-image: url(${projectToShow.img})">
            <div class="description-block">
              <ul>
                <li class="project-li language"><strong>${projectToShow.language}</strong></li>
                <li class="project-li">${popupDescription(popuplang)}</li>
                <li class="project-li git">
                  <a href="${projectToShow.github}" target="_blank">Github</a>
                </li>
              </ul>
              <div class="button-box">
                <button class="close btn-orange">X</button>
              </div>
            </div>
          </div>`;
      return popupContent;
    };
    const spaceForPopup = document.querySelector('.project-box');
    const currentLanguage = getSelectedLanguage();
    spaceForPopup.innerHTML += popupLang(currentLanguage);
  } else if (e.target.matches('.close')) {
    e.preventDefault();
    let popup = '';
    const popups = document.querySelectorAll('.popup');
    for (popup of popups) {
      const popupContainer = e.target.parentNode.parentNode.parentNode.parentNode;
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
        ${skillContainerLang()}
      </div>
  </div>
  <div class="section-content portfolio">
    <div class="portfolio">
      <h2>portfolio</h2>
      ${projectBox}
    </div>
  </div>
</section>`;
