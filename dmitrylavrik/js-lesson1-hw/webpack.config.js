let path = require('path');
let conf = {
    entry: './es6/index.js',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            // exclude: '/node_modules/'
        }]
    }
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ?
        false :
        "cheap-module-eval-source-map";
    return conf;
};

//npm init -y
//npm i webpack webpack-cli webpack-dev-server