const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel');


/*** say hello test task ***/
/*gulp.task('say_hello', () => {
    console.log('Hello!');
});*/

/*** sass build .css tasks ***/
gulp.task('sass', () => {
    gulp.src('./sass/style.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'));

    console.log('[SASS] TASK COMPLETE');
});

/*** browserSync task ***/
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// or...
/*gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "yourlocal.dev"
    });
});*/

/*** js build tasks ***/
//gulp.task('js',['lint'], function(){
gulp.task('js', () => {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build/js'));

    console.log('[JS] TASK COMPLETE');
});

/*** gulp-eslint ***/
gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['js/*.js','!node_modules/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

/*** gulp notify ***/
var plumberErrorHandler = {
    errorHandler: notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>'

    })
};

/*** gulp babel ***/
const jsInput = 'js/index.js'; //add const for other js inputs
const jsOutput = './build/js'; //add const for other js outputs

gulp.task('babel', () => {
    return gulp.src(jsInput)
        .pipe(babel())
        .pipe(gulp.dest(jsOutput));
});

/*** watch task for tasks to watch ***/
gulp.task('watch', function() {
    //gulp.watch( 'js/*.js', ['js','lint'] );
    gulp.watch( 'js/*.js', ['js'] );
    gulp.watch( 'sass/*.scss', ['sass'] );
});

/*** initialisation of tasks ***/
gulp.task('default', ['watch','babel','lint', 'browser-sync']); //'browser-sync',


//work on source folder for sass and js
