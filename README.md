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
I'm testing the perfromance of this site, the testresults are below.

**Settings:**
* Throtteling: 4G
* Cache: Disabled
* Browser: Chrome
* Window: Private Mode

### Changed HTML & CSS
**Before:**
* Css: 62ms

**After:**
* Css: 61ms

### CSS to Critical CSS
**Before:**
* Css: 61ms

**After:**
* Css: 28ms

### JS load from Head to Body
**Before:**
* JS: 39ms
* jQuery: 1.29s

**After:**
* JS: 57ms
* jQuery: 7.5s

### Remove jQuery & rewrote to Vanilla JS
**Before:**
* JS: 39ms
* jQuery: 1.29s

**After:**
* JS: 37ms
* jQuery: 0s

### Added Picture Element for Header
**Before:**
* Header Image: 14.56s
* Size: 1.9mb

**After:**
* Header Image: 4.15s
* Size: 262kb

### Removed fronts sizes from request
**Before:**
* Raleway: 33ms

**After:**
* Raleway: 31ms

### Added One Page App
**Before:**
* Routie: 0ms;
* JS: 37ms

**After:**
* Routie: 61ms;
* JS: 54ms

### Rendering
**Serverside Rendering**
!["serverside Rendering piechart"](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/serverside.png "serverside Rendering piechart")

**Clientside Rendering**
![clientside Rendering piechart](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/clientside.png "slientside Rendering piechart")

### Icons
**Load SVG's**
![load svg extern](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/extern.png "load svg extern")

**Inline SVG**
![load svg inline](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/inline.png "load svg inline")

# Make a One Page Application
## Explenation
If JS is running -> change the window.location.hash form '' to '/#feed' and JS is taking over.

## Paging / Load More
**without paging**
* Loading time: 12.1s
* Amount of requests: 171
* Size: 5.6MB

![piechart without pagin](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/without-paging.png "piechart without pagin")

**with paging**
* Loading time: 1.97s
* Amount of requests: 33
* Size: 930kb
<<<<<<< HEAD

![piechart with pagin](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/with-paging.png "piechart with pagin")