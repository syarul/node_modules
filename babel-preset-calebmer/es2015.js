module.exports = function preset (context, opts = {}) {
  const modules = Boolean(opts.modules)
  const production = Boolean(opts.production || process.env.NODE_ENV === 'production')
  const loose = production

  return {
    plugins: [
      // [es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
      [require('babel-plugin-transform-es2015-template-literals'), { loose }],
      require('babel-plugin-transform-es2015-literals'),
      require('babel-plugin-transform-es2015-function-name'),
      [require('babel-plugin-transform-es2015-arrow-functions')],
      require('babel-plugin-transform-es2015-block-scoped-functions'),
      [require('babel-plugin-transform-es2015-classes'), { loose }],
      require('babel-plugin-transform-es2015-object-super'),
      require('babel-plugin-transform-es2015-shorthand-properties'),
      require('babel-plugin-transform-es2015-duplicate-keys'),
      [require('babel-plugin-transform-es2015-computed-properties'), { loose }],
      [require('babel-plugin-transform-es2015-for-of'), { loose }],
      require('babel-plugin-transform-es2015-sticky-regex'),
      require('babel-plugin-transform-es2015-unicode-regex'),
      require('babel-plugin-check-es2015-constants'),
      [require('babel-plugin-transform-es2015-spread'), { loose }],
      require('babel-plugin-transform-es2015-parameters'),
      [require('babel-plugin-transform-es2015-destructuring'), { loose }],
      require('babel-plugin-transform-es2015-block-scoping'),
      require('babel-plugin-transform-es2015-typeof-symbol'),
      [require('babel-plugin-transform-regenerator'), { async: false, asyncGenerators: false }],

      // import foo from './bar'
      !modules && [require('babel-plugin-transform-es2015-modules-commonjs'), { loose }],
    ].filter(Boolean)
  }
}