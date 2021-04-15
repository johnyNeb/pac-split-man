function PacManConfig() {
    var Pacman = {
        FPS: 30,
        WALL: 0,
        BISCUIT: 1,
        EMPTY: 2,
        BLOCK: 3,
        PILL: 4
    };

    function getPacManConfig() {
        return Pacman;
    }

    return {
        getPacManConfig: getPacManConfig
    }
}

export { PacManConfig };