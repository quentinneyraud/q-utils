import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
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
