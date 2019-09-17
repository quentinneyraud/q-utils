import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    plugins: [resolve(), babel({
      exclude: 'node_modules/**'
    }), terser()],
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
