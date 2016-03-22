# Task Managers
About 6 months ago I started using Task managers. After a month working with Gulp and Grunt I chose for Gulp because of the speed. If I saved the homepage a site, Grunt was taking 12s to compile where Gulp was taking 1.32s to compile. In this case, Gulp was also handling more than Grunt. 

## Performance 
Because I already build my own [Gulp flow](https://github.com/MartijnNieuwenhuizen/cobalt), I won't be talking about why, but I will research wich plugins I use/can use to enhance the performance.
The plugins I use at the moment are:

* Gulp
* Clean
* Imagemin
* Uglify
* Rename
* Minifyhtml
* Autoprefixer
* Sass
* BrowserSync
* Plumber
* Reload
* Notify
* Browserify

The plugins *Imagemin*, *Uglify*, *Browserify* and *Minifyhtml* already enhance the performance because the combine, minify and reduce the files/filesize. 
Here are some (for me) new plugins and a little conclusion

**gulp-svgmin**
Reduces the code of a SVG, but if you optimize every SVG by hand (which you should) it's not necessary

**gulp-sprite**
Generates a spreadsheet. If you use that, it's a good tool, but with the new HTTP2, it's outdated.

**gulp-webp**
Convert your images to a WebP file. This, as Google say's makes an image 26% smaller and with that, saves 30% of your bandwidth use. 
I think this is a good plugin and will install it in my own pipeline. 
The downside could be that you will need a <picture> for every image, but I think it's worth it.

**gulp-concat**
Combines all the js files into one file. This means fewer HTTP requests, so yes! But if you use *Browserify* (I do), this isn't necessary because Browserify combines all the modules in one single file. 

**Critical CSS & Gzip**
Critical CSS works! I implemented this in the [LookLive server](https://github.com/MartijnNieuwenhuizen/looklive-server/tree/student/martijn) and the CSS went from *61ms* to *28ms*. And this is a relative small site!
You could use the Gulp Plugin *grunt-critical* or set your Sass output to two files (this means more code and is less maintainable). I will also Install this Plugin to my pipeline

Gzipping is handled on the server. The server Gzips your CSS and the sends it across the web as a zip. Your browser will unzip it and server the CSS. 
So what about performance? [css-trics](https://css-tricks.com/the-difference-between-minification-and-gzipping/) has this numbers:

* Original CSS file: 147kb
* Minified: 123kb
* Gzipped: 22kb
* Both: 20kb

You could also use **gulp-gzip**, with this you can gzip your own files, but why not change the settings on your server!?

So YES!, you should use Critical CSS and Gzip your CSS on the server.

# Optimize HTTP Request
In the first stage of the LookLive app there are 175 requests, now there are 35. This is done by limiting the requests from 100 to 10 items in the feed. 

This are the calls:
* 1 stylesheets
* 1 font
* 2 script (one of them is routie)
* 1 logo
* 1 API call
* 21 images
* 7 Browserify requests (Gulp Plugin that's not running on the server)

### improvements
**without paging**
* Loading time: 12.1s
* Amount of requests: 171
* Size: 5.6MB

![piechart without pagin](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/without-paging.png "piechart without pagin")

**with paging**
* Loading time: 1.97s
* Amount of requests: 33
* Size: 930kb

![piechart with pagin](https://github.com/MartijnNieuwenhuizen/looklive-server/blob/student/martijn/public/images/with-paging.png "piechart with pagin")

### More possible improvements
* Concatenate the 2 scripts
* Change the logo to an SVG
* load less feed items but that will screw up the app itself


# Optimize Images
The only image we can access is the header Image. As described before the size can bu cut from 2mb to 262kb (on a 1280px screen). After that, Gulp Imagemin also removed a little bit. This is an automatical Gulp task which removes unnecessary data from every Image

**Before:**
* Header Image: 14.56s
* Size: 1.9mb

**After:**
* Header Image: 4.15s
* Size: 262kb

# Optimize WebFonts

### The Smashing Magazine Case
Smashing Magazine did a case study about the improvements of there own website which went from *super bad* to *insanely good*! One of the improvements was to handle the WebFonts. 
They use the *Proxima Nova Regular* font and didn't want anyone to see the FOUT or load the font every time they loaded the page. They say that HTTP cache is quite unreliable and didn't want to get a blocking request for the font.

**Solution - Local Storage**
They grabbed the WOFF files off the fonts and set them in local storage. Then they set a Cookie to check if the font is in local storage. If the cookie is there, get the font from local storage.

### Implementation
**NOTE:** I used [this tutorial](http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage) as inspiration for this implementation.
So what did I do?

* 1 Use the [Node Dependency](https://www.npmjs.com/package/font-store) to get the woff file as json.
* 2 Get the font from your filesystem with an API Call and set in local storage

```
    var key = 'fonts';
        
        var request = new XMLHttpRequest();
    var    response;
    
    request.open('GET', '../font/fonts.e76d5d86b650cf0dc199b94edba280e0.woff.json', true);
    request.onload = function() {

            response = JSON.parse(this.response);
            font.insertFont(response.value);
            window.localStorage.setItem(key, this.response);

    };

    request.send();
```

* 3 Get font from local storage

```
var cache = window.localStorage.getItem(key);
```

* 4 Insert font into head

```
var style = document.createElement('style');
style.innerHTML = value;
document.head.appendChild(style);
```
### Improvement
On a 50kb/s connection loading the font takes *1.26s* and contains *823b*.
If you get the font from local storage, it loads almost instantly, you don't even see the FOUT.

### Hassle
There are a view things you need to consider: 

* Ethics, you just stole a font from someone, and they don't know how ofter there font is used. 
* Support, every browser accepts Local Storage, accept Opera Mini. If it's oke that a user of Opera doesn't see the web font, you're clear.