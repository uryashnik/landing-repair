// Обработка Pug
const {src, dest} = require("gulp");

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQuery = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");

const css = () => {
    return src(path.css.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS",
                name: error.message
            }))
        }))
        .pipe(concat('main.css'))
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQuery())
        .pipe(size({ title: 'main.css' }))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: '.min'}))
        .pipe(csso())
        .pipe(size({ title: 'main.min.css' }))
        .pipe(dest(path.css.dest, {sourcemaps: app.isDev}));
};

module.exports = css;