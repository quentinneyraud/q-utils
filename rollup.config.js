import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/index.js',
    plugins: [
      terser(),
      resolve(),
      commonjs(),
      babel()
    ],
    output: [{
      file: 'umd/q-utils.min.js',
      format: 'umd',
      name: 'q-utils'
    }]
  }
]
