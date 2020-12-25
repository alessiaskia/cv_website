/* eslint-disable import/prefer-default-export */
import { tradTranslation } from '../src/trad';

document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn-more')) {
    const fieldsSpecialisation = e.target.nextElementSibling;
    fieldsSpecialisation.classList.toggle('hide');
  }
});
export const translationView = (lang) => `
<section class="rubrique translation">
    <div class="section-top">
        <a name="translation"></a>
        <h1>${tradTranslation[lang].services1}<span class="accent"> ${tradTranslation[lang].services2}</span></h1>
    </div>
    <div class="section-content">
        <div class="photo-box conference"></div>
        <div class="services-box black-box d-flex justify-around flex-wrap">
            <div class="card">
                <h3 class="title-cards">${tradTranslation[lang].trad}</h3>
                <i class="fas fa-language"></i>
                <h4>${tradTranslation[lang].tradLangs}</h4>
                <button class="btn-more">${tradTranslation[lang].knowMore}</button>
                <p class="hide show">${tradTranslation[lang].tradSpecialisations}</p>
            </div>
            <div class="card">
                <h3 class="title-cards">${tradTranslation[lang].int}</h3>
                <i class="fas fa-headphones-alt"></i>
                <h4>${tradTranslation[lang].intLangs}</h4>
                <ul>
                    <li>${tradTranslation[lang].sim}</li>
                    <button class="btn-more">${tradTranslation[lang].knowMore}</button>
                    <p class="hide show">${tradTranslation[lang].knowMoreSim}</p>
                    <li>${tradTranslation[lang].cons}</li>
                    <button class="btn-more">${tradTranslation[lang].knowMore}</button>
                     <p class="hide show">${tradTranslation[lang].knowMoreCons}</p>
                    <li>${tradTranslation[lang].whisp}</li>
                    <button class="btn-more">${tradTranslation[lang].knowMore}</button>
                     <p class="hide show">${tradTranslation[lang].knowMoreWhisp}</p>
                </ul>
            </div>
            <a href="https://www.proz.com/profile/1718389 target="_blank">${tradTranslation[lang].proz}</a>
            </div>
        <button class="btn-quote btn-orange">
            <a href="#contact">${tradTranslation[lang].quote}</a>
        </button>
    </div>
`;
