# Pure JS Pac-Man

![Pac Split Man](split_screen.gif)

Table of Contents:
* [Set up](#set-up)
* [Run Locally](#run-locally)
* [Deploy](#deploy)
    * [Deploy to Heroku](#deploy-to-heroku)
    * [Deploy to CodeSandbox](#deploy-to-codesandbox)
* [Basic Demonstration](#basic-demonstration)
* [Advanced Demonstration](#advanced-demonstration)

Check out the blog post that uses this repo [here](https://www.split.io/blog/feature-flag-benefits-pacman/).

This is based on the excellent work from [https://github.com/daleharvey/pacman](https://github.com/daleharvey/pacman)

The only major differences are breaking up the monolothic [pacman.js](https://github.com/daleharvey/pacman/blob/master/pacman.js) 
file into [modules](modules).

## Set Up

You need a split account to see the different play modes in action.

Go to [https://www.split.io/signup/](https://www.split.io/signup/) to create a free account.

1. Navigate to: `Split > Create Split`
2. Name the Split: `PacMan_RadarGhost`, select `user` for **traffic type**, click `Create Split`.
3. Click `Add Rules`.
4. Leave the defaults and click `Save changes`. Scroll down and click `Confirm`.
5. Click the upper left square icon (usually `DE` for default). Click `Admin settings`.
6. Click `API keys`.
7. Copy the `Client-side` key for the `Prod-Default` environment.

To learn more, go to: [https://www.split.io/product/feature-flags/](https://www.split.io/product/feature-flags/).

## Run Locally

The requirements for running locally or in a deployed environment are minimal.

* [node.js](https://nodejs.org)

To run locally do the following:

```
npm install
SPLIT_AUTH_KEY=<your split client auth key> npm start
```

Continue on to the [Basic Demonstration](#basic-demonstration).

## DEPLOY

Since this is such a lightweight, vanilla JavaScript app, it is easy to run in a number of deployment environments. Below are instructions for [Heroku](https://heroku.com) and for [CodeSandbox](https://codesandbox.io).

Heroku is a good choice to deploy the app for an individual to see it in action.

CodeSandbox is a good choice to demo the app for others.

In either case, you'll need to have already [set up your Split account](#set-up).

### Deploy to Heroku

You can easily deploy to Heroku using the purple button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/splitio-examples/pac-split-man)

**NOTE:** You'll need your Split API key

After you click the purple button above and follow the prompts, you will have a unique heroku url, such as: [https://pac-split-man.herokuapp.com](https://pac-split-man.herokuapp.com).

Continue on to the [Basic Demonstration](#basic-demonstration).

### Deploy to CodeSandbox

You will need a free [CodeSandbox](https://codesandbox.io) account to deploy this app.

Below are instructions for importing an app from a GitHub repo. CodeSandbox will keep the app you deploy to it in sync with its source GitHub repo. As such, you may want to fork this project so that you can make changes to it.

After creating an account, follow these instructions:

1. Click **Create Sandbox** in the upper right.
2. Click **Import Project** on the left of the dialog.
3. Paste the URL to the GitHub repo and click **Import and Fork**.
    * **Note:** You should see an embedded browser on the right hand side with the pac-man game loaded. There's a icon (![new window](new_window.png)) on the upper right to open in a new window. Doing this will give you more screen real estate to interact with the game while still keeping it in sync with CodeSandbox.
4. Click the Server Control Panel icon (![server control panel](server_control_panel.png)) on the far left.
5. In the _Secret Keys_ section section, enter: `SPLIT_AUTH_KEY` for _Name_ and paste your Split API Key for _Value_.
6. Click **Add Secret**.

The app will automatically restart at this point.

Continue on to the [Basic Demonstration](#basic-demonstration).

## Basic Demonstration

## Advanced Demonstration