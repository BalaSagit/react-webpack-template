const path = require("path");

module.exports= {
    entry:'./src/App.jsx',

    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'public')
    },

    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.jsx?$/,
                exclude:/(node_modules)/
            },
            {
                test:/\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true
    }
}