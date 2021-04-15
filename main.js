import { Map } from './modules/map.js';
import { User } from './modules/user.js';
import { Ghost } from './modules/ghost.js';
import { Audio } from './modules/audio.js';
import { Game } from './modules/game.js';
import { Key } from './modules/key.js'

var Pacman = {
    FPS: 30,
    WALL: 0,
    BISCUIT: 1,
    EMPTY: 2,
    BLOCK: 3,
    PILL: 4,
    keys: new Key().getKeys(),
    Map: Map,
    User: User,
    Ghost: Ghost,
    Audio: Audio
};

var PACMAN = new Game(Pacman);

Object.prototype.clone = function () {
    var i, newObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i === 'clone') {
            continue;
        }
        if (this[i] && typeof this[i] === "object") {
            newObj[i] = this[i].clone();
        } else {
            newObj[i] = this[i];
        }
    }
    return newObj;
};

var el = document.getElementById("pacman");
window.setTimeout(function () { PACMAN.init(el, "./"); }, 0);