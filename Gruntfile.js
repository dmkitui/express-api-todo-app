module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', './express-api-todo-app/**/*.js']
        },
        watch: {
            files: ['./express-api-todo-app/**/*.js'],
            tasks: ['jshint']
        }
    });
};