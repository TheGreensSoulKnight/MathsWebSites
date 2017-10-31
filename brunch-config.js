module.exports = {
	npm: {
		enabled: true,
		styles: {
			flexboxgrid: ['css/flexboxgrid.min.css']
		}
	},
	files: {
		javascripts: {
			joinTo: {
				'js/vendor.js': /^(?!app)/,
				'js/app.js': /^app/
			}
		},
		stylesheets: {
			joinTo: {
				"css/vendor.css": /^(?!css)/
			}
		},
		templates: {
			joinTo: 'js/app.js'
		}
	},
	plugins: {
		babel: {
			presets: ['env']
		},
		vue: {
			extractCSS: true,
			out: './public/css/style.css'
		}
	}
}