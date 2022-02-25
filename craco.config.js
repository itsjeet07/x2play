const path = require('path');

module.exports = {
	style: {
		sass: {
			loaderOptions: (sassLoaderOptions, { env, paths }) => {
				return sassLoaderOptions;
			},
		},
		postcss: {
			mode: 'extends' /* (default value) */ || 'file',
			plugins: [],
			env: {
				autoprefixer: {
					/* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
				},
				stage: 3 /* Any valid stages: https://cssdb.org/#staging-process. */,
				features: {
					/* Any CSS features: https://preset-env.cssdb.org/features. */
				},
			},
			loaderOptions: (postcssLoaderOptions, { env, paths }) => {
				return postcssLoaderOptions;
			},
		},
	},
	webpack: {
		resolve: {
			alias: {
				configs: path.resolve(__dirname, 'src/config'),
				pages: path.resolve(__dirname, 'src/pages'),
				error: path.resolve(__dirname, 'src/error'),
				app: path.resolve(__dirname, 'src/app'),
				hoc: path.resolve(__dirname, 'src/hoc'),
				services: path.resolve(__dirname, 'src/services'),
				templates: path.resolve(__dirname, 'src/templates'),
				widgets: path.resolve(__dirname, 'src/widgets'),
				modal: path.resolve(__dirname, 'src/modal'),
				styles: path.resolve(__dirname, 'src/styles'),
			},
		},
	},
};
