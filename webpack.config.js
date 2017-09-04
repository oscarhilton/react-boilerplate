module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
      root: __dirname,
      alias: {
        Button:         'app/components/Button.jsx',
        Checker:        'app/components/Checker.jsx',
        CheckerCamera:  'app/components/CheckerCamera.jsx',
        CheckerFridjItem:   'app/components/CheckerFridjItem.jsx',
        CheckerFridj:   'app/components/CheckerFridj.jsx',
        CheckerForm:    'app/components/CheckerForm.jsx',
        CheckerList:    'app/components/CheckerList.jsx',
        CheckerListItem:    'app/components/CheckerListItem.jsx',
        CheckerMessage: 'app/components/CheckerMessage.jsx',
        CheckerResults:    'app/components/CheckerResults.jsx',
        CheckerResultsItem:    'app/components/CheckerResultsItem.jsx',
        CheckerTotal:    'app/components/CheckerTotal.jsx',
        live_w_locator: 'app/libraries/live_w_locator.js',
        Main:           'app/components/Main.jsx',
        Nav:            'app/components/Nav.jsx',
        TescoApi:       'app/api/TescoApi.jsx'
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
          exclude: /(node_modules|bower_componets)/
        }
    ] 
  }
};