const {src, dest} = require("gulp");

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

// Обработка Fonts
const font = () => {
    return src(path.font.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Font",
                name: error.message
            }))
        }))
        // это фильтр который пропускает сквозь себя измененные или только добавленные файлы
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest));
};

module.exports = font;