var gulp 	= require("gulp"),
config 		= require("./config.json"),
jshint 		= require("gulp-jshint"), 
stylish 	= require("jshint-stylish"), 		
notify 		= require("gulp-notify");

gulp.task("jsHint", function() {
  return gulp.src(config.jsHint)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
	.pipe(notify("Task jsHint complete."));
});
