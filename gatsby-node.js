const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				Components: path.resolve(__dirname, 'src/components'),
				Common: path.resolve(__dirname, 'src/components/common'),
				Static: path.resolve(__dirname, 'static/'),
				Theme: path.resolve(__dirname, 'src/components/theme'),
				Data: path.resolve(__dirname, 'data/config'),
			},
		},
	})
}
