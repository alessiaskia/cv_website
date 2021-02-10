import { tradAbout, tradMenu } from '../src/trad';

/* eslint-disable import/prefer-default-export */

export const aboutView = (lang) => `
<section class="rubrique about">
    <div class="section-top">
    <a name="about"></a>
    <h1>${tradAbout[lang].about} <span class="accent"> ${tradAbout[lang].me}</span></h1>
    </div>
    <div class="section-content">
    <div class="presentation">
        <blockquote>
        ${tradAbout[lang].p1}
        </blockquote>
        <div class="photo-box my-photo"></div>
    </div>
    <div class="description black-box">
        <p>
        ${tradAbout[lang].p2}
        </p>
        <p>
        ${tradAbout[lang].p3}
        </p>
        <p>
        ${tradAbout[lang].p4}
        </p>
        <div class="button-box d-flex justify-around">
            <button class="btn-contact btn-orange">
                <a href="#contact">${tradAbout[lang].contact}</a>
            </button>
            <button class="btn-contact btn-orange">
                <a href="src/${tradMenu[lang].cv}" target="_blank"> CV </a>
            </button>
        </div>
    </div>
    </div>
</section>`;
