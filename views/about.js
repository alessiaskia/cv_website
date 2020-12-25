import { tradAbout } from '../src/trad';

/* eslint-disable import/prefer-default-export */

export const aboutView = (lang) => `
<section class="rubrique about">
    <div class="section-top">
    <a name="about"></a>
    <h1>${tradAbout[lang].about}<span class="accent"> ${tradAbout[lang].me}</span></h1>
    </div>
    <div class="section-content">
    <div class="photo-box my-photo"></div>
    <div class="description black-box">
        <p>
        ${tradAbout[lang].p1}
        </p>
        <p>
        ${tradAbout[lang].p2}
        </p>
        <p>
        ${tradAbout[lang].p3}
        </p>
        <p>
        ${tradAbout[lang].p4}
        </p>
    </div>
    <button class="btn-contact btn-orange">
        <a href="#contact">${tradAbout[lang].contact}</a>
    </button>
    </div>
</section>`;
