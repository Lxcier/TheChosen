// pacotes
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// funções
function styles () {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/style'));
}

function images () {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

// tarefas 
exports.default = gulp.parallel(styles, images);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}