var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

/*
    --Top LEVEL FUNCTIONS
    gulp.task - DEFINE TASKS
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watech -Watch files and folders for change
*/
// copy all html files
gulp.task("copyHTML", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});


// optomize and minify images
gulp.task('optImages', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// gulp default tusk
gulp.task("default", function (done) {
    done();
    return console.log("Gulp is running");
});