import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/index.js',
    plugins: [babel({
      exclude: 'node_modules/**'
    }), resolve(), commonjs(), terser()],
    output: {
      file: 'umd/q-utils.js',
      format: 'umd',
      name: 'QUtils',
      esModule: false
    }
  },
  {
    input: 'src/index.js',
    output: [
      {
        dir: 'esm',
        format: 'esm'
      },
      {
        dir: 'cjs',
        format: 'cjs'
      }
    ]
  }
]
