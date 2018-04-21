var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// Testando se funciona
/*gulp.task('default', function(){
	console.log('Gulp funcionando...');
});*/

// Compilando sass
// Caminho do arquivo Sass
var scssFiles = './src/scss/*';

// Caminho do css compilado
var cssDest = './css';

// Opções para desenvolvimento
var SassDevOptions = {
	outputStyle: 'expanded'
}

// Opções de produção
var SassProdOptions = {
	outputStyle: 'compressed'
}

// Sass para desenvolvimento - Run with command 'gulp sassdev'
gulp.task('sassdev', function(){
	return gulp.src(scssFiles)
		.pipe(sass(SassDevOptions).on('error', sass.logError))
		.pipe(gulp.dest(cssDest))
		.pipe(browserSync.stream());
});

// Sass para produção - Run with command 'gulp sassprod'
gulp.task('sassprod', function(){
	return gulp.src(scssFiles)
		.pipe(sass(SassProdOptions).on('error', sass.logError))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(cssDest))
		.pipe(browserSync.stream());
});

// Criando task para 'gulp watch'
gulp.task('watch', function(){
	browserSync.init({
        server: "./"
    });

	gulp.watch(scssFiles, ['sassdev', 'sassprod']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);