/* eslint-disable no-useless-concat */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import { tradContact } from '../src/trad';

export const contactView = (lang) => `
<section class="rubrique contact">
    <div class="section-top">
        <a name="contact"></a>
        <h1>${tradContact[lang].contact} <span class="accent">${tradContact[lang].me}</span></h1>
    </div>
    <div class="section-content black-box">
        <form id="formaction"
        action="https://formspree.io/f/xjvpppen"
        method="POST"
        class="main-container"
        >
        <div class="contact-box">
            <label class="field">
                <input class="field-input"
                    maxlenght="60"
                    placeholder="${tradContact[lang].placeholderName}"
                    name="name"
                    autocomplete="off"
                    required
                />
            </label>

            <label class="field">
                <input
                    class="field-input"
                    maxlenght="40"
                    placeholder="${tradContact[lang].placeholderEmail}"
                    name="email"
                    autocomplete="off"
                    required
                />
            </label>

            <textarea name="message" maxlenght="500" placeholder="${tradContact[lang].placeholderMsg}" id="msg" cols="20" rows="10" required></textarea>

            <button type="submit" 
                value="send"
                id="btn-formulaire"
                class="contact btn-orange"
                target="_blank">
                ${tradContact[lang].send}
            </button>
        </div>
        </form>
    </div>
</section>
`;
