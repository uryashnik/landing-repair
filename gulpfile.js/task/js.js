const {src, dest} = require("gulp");

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");

// Обработка Javascript
const js = () => {
    return src(path.js.src, {sourcemaps: app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                name: error.message
            }))
        }))
        .pipe(babel())
        // webpack для поддержки модульности js
        .pipe(webpack(app.webpack))
        // с исп. webpack плагин uglify не нужен
        // для минимфикации js поменять в webpack на {mode: production}
        // .pipe(uglify())
        .pipe(dest(path.js.dest, {sourcemaps: app.isDev}));
};

module.exports = js;