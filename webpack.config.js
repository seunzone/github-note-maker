var webpack = require('webpack');

module.exports = {
    entry: "./app/App.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
          Main: 'app/components/Main.jsx',
          Home: 'app/components/Home.jsx',
          Place: 'app/config/routes.jsx',
          Profile: 'app/components/Profile.jsx',
          Test: 'app/components/Test.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
          }
        ]
      }
};