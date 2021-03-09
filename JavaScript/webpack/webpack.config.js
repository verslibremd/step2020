const path = require('path');
const fs = require('fs');
//const sass = require('sass');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './scripts/app.js',
            './styles/app.sccs'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js',
    },
    devServer: {
        port: 8082,
    }
}