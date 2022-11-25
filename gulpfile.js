const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
livereload = require("gulp-livereload");
const CONFIG = require("./constants");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

const fileChangedSync = (event) => {
  console.log("File changed:", event);
  browserSync.reload();
};

gulp.task("minify-css", function () {
  return gulp
    .src(CONFIG.CSS_FILES)
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest(`${CONFIG.SRC}/dist`))
    .pipe(reload({ stream: true }));
});

gulp.task("serve", function () {
  browserSync({
    server: {
      baseDir: CONFIG.SRC,
    },
  });
  gulp
    .watch(`${CONFIG.STYLE_DIR}/*.css`, gulp.series("minify-css"))
    .on("change", fileChangedSync);

  gulp.watch(`${CONFIG.SRC}/*.html`).on("change", fileChangedSync);
});
