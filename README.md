# Pure JS Pac-Man

This is based on the excellent work from [https://github.com/daleharvey/pacman](https://github.com/daleharvey/pacman)

The only major differences are breaking up the monolothic [pacman.js](https://github.com/daleharvey/pacman/blob/master/pacman.js) 
file into [modules](modules).

## Running

You'll need to create a split account to see the different play modes in action.

Go to [https://www.split.io/signup/](https://www.split.io/signup/) to create a free account.

You'll need to create a Split Treatment named: `PacMan_RadarGhost` with `on` and `off` default rule.

To learn more, go to: [https://www.split.io/product/feature-flags/](https://www.split.io/product/feature-flags/).

The requirements for running locally or in a deployed environment are minimal.

* node.js
* express


To run locally do the following:

```
npm install
SPLIT_AUTH_KEY=<your split client auth key> npm start
```

## DEPLOYING

You can easily deploy to Heroku using the purple button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)