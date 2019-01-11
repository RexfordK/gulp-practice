var gulp = require("gulp");

/*
    --Top LEVEL FUNCTIONS
    gulp.task - DEFINE TASKS
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watech -Watch files and folders for change
*/

// Logs Message
//for gulp version 4.0 and up, I must:
//https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async


// copy all html files
gulp.task("copyHTML", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

// gulp default tusk
gulp.task("default", function (done) {
    done();
    return console.log("Gulp is running");
})