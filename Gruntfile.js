module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        serve: {
            options: {
                port: 8181
            }
        }
    });

    grunt.registerTask('default', ['serve']);
};
