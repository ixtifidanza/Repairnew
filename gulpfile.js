const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function minifyCss() {
    return src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(dest('dist/css/'));
}

function moveJs() {
    return src('js/*.js')
      .pipe(dest('dist/js/'));
}

function minifyHtml() {
    return src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('dist/'));
}

function fonts() {
    return src('fonts/**/*')
      .pipe(dest('dist/fonts/'));
}

function minifyPhotos() {
    return src('img/*.{png,jpg,jpeg}')
      .pipe(tinypng({
            key: 'CP3LmfVk9JSssT4q7hLy9k4tHXGcQlTg',
            sigFile: 'images/.tinypng-sigs',
            log: true
       }))
      .pipe(dest('dist/img/'));
}


exports.minifyCss = minifyCss
exports.moveJs = moveJs 
exports.minifyHtml = minifyHtml
exports.fonts = fonts
exports.minifyPhotos = minifyPhotos
exports.default = defaultTask