module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		babel:{
			options: {
				sourceMap: false
			},
			dist: {
				files: [ {
					expand: true,
					cwd: 'app/scripts',
					src: '**/*.js',
					dest: '.tmp/scripts',
					ext: '.js'
				}]
			}
		},
		jshint: {
			all: ['Gruntfile.js','app/scripts']
		},
		connect: {
			sever: {
				options : {
					port: 3000,
					base: 'dist'
				}
			}
		},
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'app',
					src: '*.jade',
					dest: 'dist',
					ext: '.html'
				}]
			}
		},
		stylus : {
			compile: {
				files: [{
					expand: true,
					cwd: 'app/styl',
					src: 'style.styl',
					dest: 'dist/css',
					ext: '.css'
				}]
			}
		},
		browserify: {
			app: {
				files: {
					'dist/scripts/code.js' : ['.tmp/scripts/*.js','.tmp/scripts/**/*.js']
				},
				options : {
					transform : ['debowerify']
				}
			}
		},
		clean: {
			tmp: {
				build: ['./.tmp']
			},
			dist: {
				build: ['./dist']
			}
		},
		copy: {
			images: {
				expand: true,
				cwd: 'app/img',
				src: '*',
				dest: 'dist/img'
			},
			media: {
				expand: true,
				cwd: 'app/media',
				src: '*',
				dest: 'dist/media'
			},
			font: {
				expand: true,
				cwd: 'app/fonts',
				src: '*',
				dest: 'dist/fonts'
			}
		},
		watch: {
			js: {
				files: ['app/scripts/*.js', 'app/scripts/**/*.js'],
				tasks: ['babel', 'browserify']
			},
			css: {
				files: 'app/styl/*.styl',
				tasks: 'stylus'
			},
			html: {
				files: 'app/*.jade',
				tasks: 'jade'
			},
			assets: {
				files: 'app/img/*.*',
				tasks: 'copy'
			},
			allFiles : {
				files: ['dist/scripts/*.js', 'dist/css/*.css','dist/*.html'],
				options: {
					livereload: true
				}
			}
		},
		open: {
			dev : {
		      path: 'http://0.0.0.0:3000',
		      app: 'Google Chrome'
		    }
		}
	});


	grunt.registerTask('default', [ 'clean:dist','babel', 'browserify','clean:tmp', 'copy', 'jade', 'stylus', 'connect','open:dev','watch']);


};
