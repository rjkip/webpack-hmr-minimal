module.exports = {
    devtool: '#source-map',
    entry: {
        'app': './src/app.js',
    },
    output: {
        path: 'build/',
        filename: '[name].js'
    },
};
