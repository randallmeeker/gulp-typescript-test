
var gulp = require('gulp'),
	ts = require('gulp-typescript');

var pubPath = ".tmp/public";

var paths = {
  ts : ['client/**/*.ts']
};


// TypeScript
var tsProject = ts.createProject({
   noExternalResolve: true,
   target : 'ES5',
   typescript: require('typescript')
});
gulp.task('build-ts', function(){

	var tsResult = gulp.src(paths.ts)
		.pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(pubPath));

});