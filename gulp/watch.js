'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function isOnlyChange(file) {
    return file.event === 'change';
}

gulp.task('watch', ['inject'], function () {

    $.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

    $.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss')
    ], function(file) {
        if (isOnlyChange(file)) {
            gulp.start('styles');
        } else {
            gulp.start('inject');
        }
    })

    $.watch(path.join(conf.paths.src, '/app/**/*.js'), function(file) {
        if (isOnlyChange(file)) {
            gulp.start('scripts');
        } else {
            gulp.start('inject');
        }
    });

    $.watch(path.join(conf.paths.src, '/**/*.html'), function(file) {
        browserSync.reload(file.path);
    });

});
