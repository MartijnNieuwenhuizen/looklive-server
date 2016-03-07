'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = {

    build: '',
    dist: './dist/',
    base: '',
    taskPath: './gulp/tasks/',
    
    // html: {
    //     watch: ['src/html/**/*.html'],
    //     src: ['./src/html/**/*.html', '!./src/html/includes/**']
    // },
    
    sass: {
        watch: ['./public/styles/**/*.scss'],
        src: ['./public/styles/**/*.scss'],
        folder: './public/styles/',
        destFile: 'style.min.css'
    },

    js: {
        watch: ['./public/js/app.js'],
        src: ['./public/js/app.js'],
        folder: './public/js/',
        destFile: 'app.min.js'
    },
    
    images: {
        watch: ['./public/images/**'],
        src: ['./public/images/**'],
        srcFolder: './public/images/',
        folder: './public/img/'
    },
    icons: {
        watch: ['./public/icons/**'],
        src: ['./public/icons/**'],
        srcFolder: './public/icons/',
        folder: './public/icon/'
    },
    
    misc: {
        src: [
            
        ],
    },

    error: function(error) {

        $.notify.onError({
            title: 'Gulp',
            message: 'Error: <%= error.message %>'
        })(error);
        this.emit('end');

    }
};

module.exports = config;