// Обработка HTML
const {src, dest} = require("gulp");

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const size = require("gulp-size");
const htmlMin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html");

const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                name: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({ title: 'до сжатия' }))
        .pipe(htmlMin(app.htmlMin))
        .pipe(size({ title: 'после сжатия' }))
        .pipe(dest(path.html.dest));
};

module.exports = html;