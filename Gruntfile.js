module.exports = function(grunt) {

  grunt.initConfig({
		connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: 'app',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);

};