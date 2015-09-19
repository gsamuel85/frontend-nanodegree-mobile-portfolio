'use strict';

module.exports = function(grunt) {
    
    // Load tasks from Grunt dependencies
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        cssmin: {
            build: {
                files: {
                    'css/print.min.css': 'css/print.css',
                    'css/style.min.css': 'css/style.css'
                }
            }
        },
        
        uglify: {
            build: {
                files: {
                    'js/perfmatters.min.js': 'js/perfmatters.js'
                }
            }
        }
    });
    
    
    // Run tasks
    grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin']);
};