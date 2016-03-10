# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
$ npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
$ npm start
```
Run in a new Terminal window (in the project root folder)

```
$ gulp server
```

This will automatically open a new window at [http://localhost:3001](http://localhost:3001) and refresh after you changed the CSS (later also with HTML and JS).

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).







# Performance
## Overview page
**After Fork**
* DOM Content Loaded: 1.47s
* First Paint: 1.73s
* Load Event: 2.42s

**Styling Nav With Flexbox & BAM**
* DOM Content Loaded: 1.51s
* First Paint: 1.67s
* Load Event: 1.87s

**Compiling header images with Gulp**
* DOM Content Loaded: 1.51s
* First Paint: 1.67s
* Load Event: 1.87s

**Resized Header Image + Picture Element**
* First Paint: 1.07s
* DOM Content Loaded: 1.36s
* Load Event: 1.95s

## Detail page
**After Fork**
* DOM Content Loaded: 1.22s
* First Paint: 1.34s
* Load Event: 1.69s

**With Flexbox**
* First Paint: 1.02s
* DOM Content Loaded: 1.12s
* Load Event: 1.18s

**After Positions Relative Fix**
* First Paint: 0.856ss
* DOM Content Loaded: 0.977s
* Load Event: 1.05s

**Script with jQuery**
* app.js: time = 80ms
* jQuery.js: time = 78ms

**Script with Vanilla JS**
* app.js: time = 70ms
* jQuery.js: time = 0ms

# Make a One Page Application
## Explenation
If JS is running -> change the window.location.hash from '/' to '/#feed'. At this point JS is taking over.