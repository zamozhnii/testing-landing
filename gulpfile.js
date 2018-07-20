const gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  less = require('gulp-less'),
  browserSync = require('browser-sync'), 
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant');

gulp.task('less', () => { 
  return gulp.src('src/less/*.less') 
      .pipe(less()) 
      .pipe(autoprefixer({
          browsers: 'last 20 versions', cascade: true }))
      .pipe(gulp.dest('public/css/')) 
      .pipe(browserSync.reload({stream: true}))
  });

gulp.task('scripts', function() {
return gulp.src('src/js/main.js')
    // .pipe(uglify()) 
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({stream: true})); 
});

gulp.task('browser-sync', () => { 
    browserSync({ 
        server: { 
            baseDir: 'public' 
        },
        notify: false 
    });
});

gulp.task('watch', gulp.parallel('browser-sync', 'less', 'scripts', () => {
    gulp.watch('src/less/**/*.less', gulp.series('less'));
    gulp.watch('public/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', gulp.series('scripts')); 
}));

gulp.task('img', () => {
  return gulp.src('public/img/**/*')
      .pipe(imagemin({ 
          interlaced: true,
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest('dist/img'));
});

gulp.task('build', gulp.parallel('less', 'scripts', 'img', () => {

    const buildCss = gulp.src('public/css/*.css')
    .pipe(gulp.dest('dist/css'))

    const buildFonts = gulp.src('public/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    const buildJs = gulp.src('public/js/*.js')
    .pipe(gulp.dest('dist/js'))

    const buildHtml = gulp.src('public/*.html')
    .pipe(gulp.dest('dist'));

    const buildVideo = gulp.src('public/video/*.mp4')
    .pipe(gulp.dest('dist/video'))

}));

gulp.task('default', gulp.series('watch'));