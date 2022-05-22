const {src, dest} = require("gulp");

// Конфигурация
const path = require('../config/path');
const app = require('../config/app');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

// Обработка Images
const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Image",
                name: error.message
            }))
        }))
        // это фильтр который пропускает сквозь себя измененные или только добавленные файлы
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest));
};

module.exports = img;