# Pure JS Pac-Man

![Pac Split Man](readme_images/split_screen.gif)

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
    * **Note:** You should see an embedded browser on the right hand side with the pac-man game loaded. There's a icon (![new window](readme_images/new_window.png)) on the upper right to open in a new window. Doing this will give you more screen real estate to interact with the game while still keeping it in sync with CodeSandbox.
4. Click the Server Control Panel icon (![server control panel](readme_images/server_control_panel.png)) on the far left.
5. In the _Secret Keys_ section section, enter: `SPLIT_AUTH_KEY` for _Name_ and paste your Split API Key for _Value_.
6. Click **Add Secret**.
7. Click **Restart Server** in the `Control Container` section on the left.
8. Click the refresh button in the browser where pac-man is running.
    
    **NOTE**: This is the only time you need to refresh the browser. From this point on, changes in the Split configuration will be reflected in the browser in near-realtime.

Continue on to the [Basic Demonstration](#basic-demonstration).

## Basic Demonstration

When you first load the pac-man game, notice that it's in `CHILL` mode (![chill mode](readme_images/chill.png)).

**NOTE**: You can click **s** on your keyboard at any time to toggle the sound.

Start playing, and notice that the ghosts are moving completely randomly. While the game is still active, click **p** on your keyboard to pause the game.

Back in your Split admin console, click **Splits** and click **PacMan_RadarGhost**. Scroll down on the right and change the value for `serve` in the `Set the default rule` section to **on**. Click **Save changes** and click **Confirm**.

Notice that the mode has changed to `RADAR` mode (![radar mode](readme_images/radar.png)).

Click **p** on your keyboard to un-pause the game. And now, you better run! The ghosts are now very aware of your position and they are all heading for it.

Feel free to switch back to `CHILL` mode by setting the default rule to **off**. You should notice that the ghost mode in the game switched in near-realtime as you make changes in Split.

### Basic Demonstration Summary

Key takeaways from this demonstration are:

* Configuring your app to communicate with Split requires an API Key.
* Treatment state can be managed easily from your Split Admin Console.
* Changes to treatments in Split are reflected in your apps in near-realtime thanks to Split's streaming capabilities.

## Advanced Demonstration

In the [Basic Demonstration](#basic-demonstration), you experienced some of the power of live state change with Split. So far, it's been a global setting: either everyone always gets the `CHILL` ghost mode or everyone always gets the `RADAR` ghost mode.

Split has a lot more power through fine grained control on how and when users see different treatments.

A `segment` is a grouping of users along some common dimension. Let's set up pac-man to `RADAR` mode for select users.

From your Split admin console click **Segments**. 

### Advanced Demonstration Summary