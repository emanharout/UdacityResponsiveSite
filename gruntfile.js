module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            target_one: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: '100%',
                        name: '2x',
                        quality: 80
                    },
                    {
                        width: '50%',
                        name: '1x',
                        quality: 70
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
    grunt.registerTask('one', ['responsive_images:target_one']);
};