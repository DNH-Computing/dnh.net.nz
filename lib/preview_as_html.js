// Wintersmith serves up files with no extension as application/octet-stream by default. This plugin
// changes the default for text/html in preview mode to allow viewing pages without extensions in the
// browser.
module.exports = function(env, callback) {
	if (env.mode == 'preview') {
		env.logger.info('enabling extensionless files to be previewed as HTML');

		require('wintersmith/node_modules/mime').default_type = 'text/html';
	} else {
		env.logger.verbose('not modifying mime types in mode "%s"', env.mode)
	}
	callback();
}
