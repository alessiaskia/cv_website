import { tradWeb } from '../src/trad';
import { skills } from '../src/skills';

/* eslint-disable import/prefer-default-export */
let container = '<div class="skill-container d-flex flex-row">';

// create cards
// objective : obtain variable "container" to integrate in view
for (const skill of skills) {
  let skillCard = `<div class="card">
    ${skill.icon}
    <h3 class="skill-group show-more">${skill.group}</h3>
  <ul class="hide">`;
  for (let i = 0; i < skill.name.length; i++) {
    skillCard += `<li class="skill-name">${skill.name[i]}</li>`;
  }
  skillCard += '</ul></div>';
  container += skillCard;
}
container += '</div>';

// show or hide list of skills
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.show-more')) {
    const competences = e.target.parentNode.children[2];
    // console.log(competences);
    competences.classList.toggle('hide');
  }
});

export const webView = (lang) => `
<section class="rubrique web-dev">
    <div class="section-top">
        <a name="web-dev"></a>
        <h1>${tradWeb[lang].web} <span class="accent">${tradWeb[lang].development}</span> </h1>
    </div>
    <div class="section-content skills">
        <div class="photo-box programming"></div>
        <div class="it-skills">
              <h2>${tradWeb[lang].it}</h2>
              ${container}
        </div>
    </div>
</section>`;
