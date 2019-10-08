import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  // normal
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs()
    ],
    output: [{
      file: 'umd/LIBRARY_NAME.js',
      format: 'umd',
      name: 'LIBRARY_NAME'
    }]
  },
  // minified
  {
    input: 'src/index.js',
    plugins: [
      terser(),
      resolve(),
      commonjs()
    ],
    output: [{
      file: 'umd/LIBRARY_NAME.min.js',
      format: 'umd',
      name: 'LIBRARY_NAME'
    }]
  },
  // polyfilled
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs(),
      babel()
    ],
    output: [{
      file: 'umd/LIBRARY_NAME.polyfill.js',
      format: 'umd',
      name: 'LIBRARY_NAME'
    }]
  },
  // polyfilled and minified
  {
    input: 'src/index.js',
    plugins: [
      terser(),
      resolve(),
      commonjs(),
      babel()
    ],
    output: [{
      file: 'umd/LIBRARY_NAME.polyfill.min.js',
      format: 'umd',
      name: 'LIBRARY_NAME'
    }]
  }
]
