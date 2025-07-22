module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: ">0.25%, not dead, ie 11",
      useBuiltIns: 'usage',
      corejs: 3
    }],
    'minify'
  ]
};