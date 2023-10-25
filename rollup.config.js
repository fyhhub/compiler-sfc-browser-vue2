const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const nodePolyfill = require('rollup-plugin-polyfill-node')
module.exports =  {
  input: './compiler-sfc',
  output: [
    {
      format: 'es',
      file: 'dist/index.esm.js'
    },
    {
      format: 'umd',
      name: 'VueCompiler',
      file: 'dist/index.umd.js'
    }
  ],
  plugins: [
    commonjs(),
    resolve(),
    nodePolyfill()
  ]
}