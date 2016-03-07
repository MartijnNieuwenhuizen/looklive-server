'use strict';

var gulp = require('gulp');
var config = require('./gulp/config');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyhtml = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');
var plumber = require('gulp-plumber');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var browserify = require('gulp-browserify');

// Test run for gulp
// gulp.task('clean', function() {

// 	return gulp.src('config.base', {read: false})
// 	.pipe(clean())

// });

// Compress all images
gulp.task('images', function() {

	return gulp.src(config.images.src)
		.pipe(plumber({
		    errorHandler: config.error
		}))
		.pipe(imagemin())
		.pipe(gulp.dest(config.images.folder));

});
gulp.task('icons', function() {

	return gulp.src(config.icons.src)
		.pipe(plumber({
		    errorHandler: config.error
		}))
		.pipe(imagemin())
		.pipe(gulp.dest(config.icons.folder));

});

gulp.task('misc:copy', function() {

    return gulp.src(config.misc.src)
        .pipe(plumber({
            errorHandler: config.error
        }))
        .pipe(gulp.dest('./'));

});


// Compress and combine JS files
gulp.task('js', function() {

	return gulp.src(config.js.src)
		.pipe(plumber({
		    errorHandler: config.error
		}))
		.pipe(uglify())
		.pipe(rename(config.js.destFile))
		.pipe(gulp.dest(config.js.folder))

});

// gulp.task('browserify', function() {
    	
//    	return gulp.src(config.js.src)
//    		.pipe(plumber({
//              errorHandler: config.error
//         }))
//     	.pipe(browserify({
//       	insertGlobals : false
//     	}))
//         .pipe(uglify())
//         .pipe(rename(config.js.destFile))
//         .pipe(gulp.dest(config.js.folder));

// });

// Add the HTML MINIFY AFTER THE TEMPLATES ARE RENDERED
// gulp.task('html', function() {
	
// 	// Fileinclude
// 	return gulp.src(config.html.src)
// 		.pipe(plumber({
// 		    errorHandler: config.error
// 		}))
// 	    .pipe(minifyhtml())
// 	    .pipe(gulp.dest(config.base))

// });

// Compress Css
gulp.task('sass', function() {

	return gulp.src(config.sass.src)
		.pipe(plumber({
		    errorHandler: config.error
		}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer({

			browsers: ['> 1%', 'last 2 versions'],
			cascade: false

		}))
		.pipe(rename(config.sass.destFile))
		.pipe(gulp.dest(config.sass.folder))

});

// Static server
gulp.task('browser-sync', function() {
   
    browserSync.init({
    	proxy: 'localhost:3000'
    });

});

// Watch task
gulp.task('watch', function() {

	// gulp.watch([config.html.watch], ['html', reload]);
	gulp.watch([config.sass.watch], ['sass', reload]);
	// gulp.watch(config.js.watch, ['browserify', reload]);
	gulp.watch(config.misc.src, ['misc:copy', reload]);

});

// Server task
gulp.task('server', function() {

	return runSequence(
		['sass', 'images', 'icons', 'misc:copy'],
		// 'browserify',
		'browser-sync',
		'watch'
	);

});