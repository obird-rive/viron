module.exports = {
  map: false,
  plugins: {
    'postcss-import': {},
    'postcss-apply': {},
    'postcss-custom-properties': {
      "preserve": true
    },
    'postcss-flexbugs-fixes': {},
    'autoprefixer': {
      'browsers': [
        'last 2 Edge versions',
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Safari versions',
        'last 2 Opera versions',
        'last 2 ChromeAndroid versions'
      ]
    },
    'postcss-nesting': {},
    'postcss-overflow-wrap': {},
    'postcss-currentcolor': {},
    'postcss-sorting': {}
  }
};
