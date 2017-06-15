var gulp 	= require("gulp"),
minifyCSS 	= require("gulp-minify-css"), 		
notify 		= require("gulp-notify");

gulp.task("minCss", function () {
	gulp.src("app/css/styles.css")
		.pipe(minifyCSS())
		.pipe(gulp.dest("app/css"))
		.pipe(notify("Task ConcatCss complete."));
});