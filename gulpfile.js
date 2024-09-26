const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

// Используем динамический import для autoprefixer
let autoprefixer;

gulp.task('load-autoprefixer', async function() {
    autoprefixer = (await import('gulp-autoprefixer')).default;
});

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', gulp.series('load-autoprefixer', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
        prefix: "",
        suffix: ".min",
      }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}));

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));

