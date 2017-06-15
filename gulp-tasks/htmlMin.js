var gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'),
notify 	= require("gulp-notify");

gulp.task('htmlMin', function() {
  return gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
	.pipe(notify("Task htmlMin complete."));
});