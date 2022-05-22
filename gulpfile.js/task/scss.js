// Обработка Pug
const {src, dest} = require("gulp");

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQuery = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");

const scss = () => {
    return src(path.scss.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS",
                name: error.message
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQuery())
        .pipe(size({ title: 'main.css' }))
        .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: '.min'}))
        .pipe(csso())
        .pipe(size({ title: 'main.min.css' }))
        .pipe(dest(path.scss.dest));
};

module.exports = scss;