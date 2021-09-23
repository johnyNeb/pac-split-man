import { SplitConfig } from './split_config.js';
import { Game } from './modules/game.js';

var el = document.getElementById("pacman");
var PACMAN = new Game(el);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var treatments = [];
var attributes = {};
for (const [paramName, paramValue] of urlParams) {
    if (paramName === 'key') {
        SplitConfig.core.key = paramValue;
    } else if (paramName === 'treatments') {
        paramValue.split(',').forEach(function (treatment) {
            treatments.push(treatment);
        })
    } else if (paramName === 'fireEvents') {
        fireEvents();
    } else {
        attributes[paramName] = paramValue;
    }
}

// If no key specified, default to ANONYMOUS
if (!SplitConfig.core.key) {
    SplitConfig.core.key = 'ANONYMOUS';
}

// If no treatments specified, default to PacMan_RadarGhost
if (!treatments.length) {
    treatments.push('PacMan_RadarGhost');
}

var splitClient = splitio(SplitConfig).client();

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function fireEvents() {
    var origKey = SplitConfig.core.key;
    var clients = [];
    for (let i=0;i<10;i++) {
        SplitConfig.core.key = `user_${(i+1)}`
        clients.push({ 
            user: SplitConfig.core.key, client: splitio(SplitConfig).client() 
        });
    }
    const interval = setInterval(() => {
        var clientInfo = clients[randomIntFromInterval(0, 9)];
        clientInfo.client.ready().then(() => {
            var treatmentResult = clientInfo.client.getTreatment(
                'PacMan_RadarGhost', attributes
            );
            var ttl = (treatmentResult === 'on') ? 
                randomIntFromInterval(3000, 10000) :
                randomIntFromInterval(30000, 100000);
            console.log(`ttl for user: ${clientInfo.user} is ${ttl} ` + 
                `with treatment: ${treatmentResult}`);
            localClient.track('user', 'PacMan_TTL', ttl);
        });
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
        SplitConfig.core.key = origKey;
    }, 20000);
}

function handleTreatments() {
    var treatmentsResult = splitClient.getTreatments(treatments, attributes);
    el.dispatchEvent(
        new CustomEvent('splitChange', { detail: treatmentsResult })
    );
}

splitClient.ready().then(() => {
    console.log('Split is ready!');
    handleTreatments();
});

splitClient.on(splitClient.Event.SDK_UPDATE, () => {
    console.log('An streaming update has been received!');
    handleTreatments();
});

el.addEventListener('lifeLost', (e) => {
    splitClient.track('user', 'PacMan_TTL', e.detail.pacman.ttl);
    console.log(`track PacMan_TTL with: ${e.detail.pacman.ttl}`);
});

if (Modernizr.canvas && Modernizr.localstorage &&
    Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {
    window.setTimeout(() => { PACMAN.init("./"); }, 0);
} else {
    el.innerHTML = "Sorry, needs a decent browser<br /><small>" +
        "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";
}