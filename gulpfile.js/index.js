global.$ = {
    // Пакеты
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require('browser-sync').create(),

    // Конфигурация
    path: require('./config/path'),
    app: require('./config/app')
};

// Задачи
const clear = require('./task/clear');
const html = require('./task/html');
const pug = require('./task/pug');
const css = require('./task/css');
const scss = require('./task/scss');
const js = require('./task/js');
const img = require('./task/img');
const font = require('./task/font');
const server = require('./task/server');

// Наблюдение
const watcher = () => {
    $.gulp.watch($.path.pug.watch, pug).on('all', $.browserSync.reload);
    // $.gulp.watch($.path.html.watch, html).on('all', $.browserSync.reload);
    // // $.gulp.watch(path.css.watch, css).on('all', $.browserSync.reload);
    $.gulp.watch($.path.scss.watch, scss).on('all', $.browserSync.reload);
    $.gulp.watch($.path.js.watch, js).on('all', $.browserSync.reload);
    $.gulp.watch($.path.img.watch, img).on('all', $.browserSync.reload);
    $.gulp.watch($.path.font.watch, font).on('all', $.browserSync.reload);
}

const build = $.gulp.series(
    clear,
    $.gulp.parallel(
        // pug,
        html,
        scss,
        js,
        img,
        font
    )
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(
        watcher,
        server
    )
);

// Задачи
module.exports.clear = clear;
module.exports.pug = pug;
module.exports.css = css;
module.exports.scss = scss;
module.exports.js = js;
module.exports.img = img;
module.exports.font = font;

// Сборка
module.exports.default = $.app.isProd ? build : dev;

console.log(process.argv)
