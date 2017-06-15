var gulp = require("gulp"),
config 		= require("./gulp-tasks/config.json"),
requireDir  = require("require-dir"),
gutil 		= require("gulp-util"),
concat 		= require("gulp-concat"),
uglify 		= require("gulp-uglify"),				
stylus 		= require("gulp-stylus"),		
minifyCSS 	= require("gulp-minify-css"), 			
htmlmin 	= require("gulp-htmlmin"),			
concat 		= require("gulp-concat"), 			
imagemin 	= require("gulp-imagemin"), 			
jshint 		= require("gulp-jshint"), 				
stylish 	= require("jshint-stylish"), 		
notify 		= require("gulp-notify"),		
rename 		= require("gulp-rename"),
chalk 		= require("chalk"); 
requireDir("./gulp-tasks", {recurse: true});



gulp.task("default", ["jsHint","joinJs"], function(){});