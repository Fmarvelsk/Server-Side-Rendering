module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
          
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]},
        {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use : {loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    }
      ],
    },
  };