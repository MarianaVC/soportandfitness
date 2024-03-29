var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch = require('gulp-watch');
var shell = require('gulp-shell');

var sass = require('gulp-ruby-sass');
var gulpConfig = require('./gulpConfig');

var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}
};

// gulp lint
gulp.task('lint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// gulp watcher for lint
gulp.task('watch:lint', function () {
	gulp.watch(paths.src, ['lint']);
});


gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function () {
	return sass(gulpConfig.sassSrcInitFile, gulpConfig.sassConfig)
	.on('error', function (e) {
		console.log(e);
	})
	.pipe(gulp.dest(gulpConfig.sassBuildDir));
});

gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

  'watch:sass'
  
]);

gulp.task('live', ['watch', 'runKeystone']);
