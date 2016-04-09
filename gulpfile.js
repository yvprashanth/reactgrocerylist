var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browsersync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})

gulp.task('serve', ['bundle', 'live-server'], function(){
    browsersync.init(null, {
        proxy : "http://localhost:7777",
        port : 9001
    })
});

// browserify will grab app/main.jsx file.
// This section converts main.jsx file into app.js file
gulp.task('bundle', ['copy'], function(){
      return browserify({
          entries : 'app/main.jsx',
          debug: true,
      }).transform(reactify)
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./.tmp'));
});

gulp.task('copy', function(){
    gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.tmp'));
});
