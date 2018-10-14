var gulp = require('gulp');
var clean = require('gulp-clean-css'); // 引入clean-css模块

gulp.task('csscompress', function() {
    return gulp.src(['./css/css-zx/car2.css', './css/css-zx/game.css', './css/css-zx/global.css', './css/css-zx/special.css']) // 压缩common、index
        .pipe(clean()) // 压缩css方法
        // .pipe(rename({ suffix: '.min' })) // 同js一样，加上.min后缀
        .pipe(gulp.dest('../dist/css/css-zx')) // 输出的文件夹
})