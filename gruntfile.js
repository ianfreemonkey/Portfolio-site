module.exports = function(grunt) {

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		imagemin:
		{
			target:
			{
				options:
				{
					progressive:true
				},
				files:[{
					expand:true,
					cwd:'img/',
					src:['**/*.{png,jpg}'],
					dest:'img/build/'}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default',['imagemin']);
};