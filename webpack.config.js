module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
      root: __dirname,
      alias: {
        Main:           'app/components/Main.jsx',
        Nav:            'app/components/Nav.jsx',
        Checker:        'app/components/Checker.jsx',
        CheckerCamera:  'app/components/CheckerCamera.jsx',
        CheckerMessage: 'app/components/CheckerMessage.jsx',
        CheckerForm:    'app/components/CheckerForm.jsx',
        CheckerResults:    'app/components/CheckerResults.jsx',
        CheckerResultsItem:    'app/components/CheckerResultsItem.jsx',
        CheckerList:    'app/components/CheckerList.jsx',
        CheckerListItem:    'app/components/CheckerListItem.jsx',
        CheckerFridjItem:   'app/components/CheckerFridjItem.jsx',
        CheckerFridj:   'app/components/CheckerFridj.jsx',
        CheckerAdd:     'app/components/CheckerAdd.jsx',
        Button:         'app/components/Button.jsx',
        TescoApi:       'app/api/TescoApi.jsx',
        live_w_locator: 'app/libraries/live_w_locator.js'
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