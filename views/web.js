import { tradWeb } from '../src/trad';
import { skills } from '../src/skills';

/* eslint-disable import/prefer-default-export */
function container(array) {
  let skillContainer = '<div class="skill-container">';
  for (let i = 0; i < array.length; i++) {
    let skillCard = `<div class="card">
      <h3 class="skill-group">${array[i].group}</h3>
      <ul>`;
    for (let j = 0; j < array.name.length; j++) {
      skillCard += `<li class="skill-name">${array.name[j]}</li>`;
    }
    skillCard += '</ul></div>';
    skillContainer += skillCard;
  }
  skillContainer += '</div>';
  return skillContainer;
}

export const webView = (lang) => `
<section class="rubrique web-dev">
    <div class="section-top">
        <a name="web-dev"></a>
        <h1><span class="accent">${tradWeb[lang].web}</span> ${tradWeb[lang].development}</h1>
    </div>
    <div class="section-content">
        <div class="photo-box programming"></div>
        <div class="it-skills">
              <h2>${tradWeb[lang].it}</h2> 
        </div>
    </div>
</section>`;
