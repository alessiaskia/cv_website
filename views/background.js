/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import { tradBackground } from '../src/trad';

export const backgroundView = (lang) => `
<section class="rubrique background">
    <div class="section-top">
        <a name="background"></a>
        <h1>${tradBackground[lang].my} <span class="accent">${tradBackground[lang].background}</span></h1>
    </div>
    <div class="section-content">
    <div class="card-box d-flex flex-row justify-center">
        <div class="card content">
        <h3>2009</h3>
        <ul>
            <li>${tradBackground[lang].school}</li>
            <li>${tradBackground[lang].startUniv}</li>
        </ul>
        </div>
        <div class="card postcard trieste"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2011</h3>
        <ul>
            <li>${tradBackground[lang].zagrebOne}</li>
            <li>${tradBackground[lang].holland}</li>
        </ul>
        </div>
        <div class="card postcard zagreb"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2012</h3>
        <ul>
            <li>${tradBackground[lang].erasmus}</li>
            <li>${tradBackground[lang].startTrad}</li>
        </ul>
        </div>
        <div class="card postcard mons"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2013</h3>
        <ul>
            <li>${tradBackground[lang].laureaT}</li>
            <li>${tradBackground[lang].toBcn}</li>
            <li>${tradBackground[lang].eugin}</li>
            <li>${tradBackground[lang].officialTrad}</li>
        </ul>
        </div>
        <div class="card postcard barcelona"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2014</h3>
        <ul>
            <li>${tradBackground[lang].master}</li>
        </ul>
        </div>
        <div class="card postcard trieste"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2016</h3>
        <ul>
            <li>${tradBackground[lang].zagrebTwo}</li>
            <li>${tradBackground[lang].agape}</li>
        </ul>
        </div>
        <div class="card postcard zagreb"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2017</h3>
        <ul>
            <li>${tradBackground[lang].laureaM}</li>
            <li>${tradBackground[lang].toBxl}</li>
            <li>${tradBackground[lang].capstan}</li>
            <li>${tradBackground[lang].lv}</li>
        </ul>
        </div>
        <div class="card postcard bruxelles1"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2018</h3>
        <ul>
            <li>${tradBackground[lang].cigna}</li>
        </ul>
        </div>
        <div class="card postcard bruxelles2"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2019</h3>
        <ul>
            <li>${tradBackground[lang].pm}</li>
        </ul>
        </div>
        <div class="card postcard bruxelles3"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2020</h3>
        <ul>
            <li>${tradBackground[lang].omi}</li>
            <li>${tradBackground[lang].wad}</li>
        </ul>
        </div>
        <div class="card postcard bruxelles4"></div>
    </div>
    <div class="card-box d-flex flex-row justify-center">
        <div class="card">
        <h3>2021</h3>
        <ul>
            <li>${tradBackground[lang].endWad}</li>
            <li>${tradBackground[lang].job}</li>
        </ul>
        </div>
        <div class="card postcard bruxelles5"></div>
    </div>
    </div>
</section>
`;
