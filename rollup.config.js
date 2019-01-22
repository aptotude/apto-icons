import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import packageJson from 'rollup-plugin-generate-package-json';

export default [
  {
    input: 'src/index.js',
    output: [
      { name: 'aptoicons', file: `./dist/${pkg.browser}`, format: 'umd' },
      { name: 'aptoicons', file: `./dist/${pkg.main}`, format: 'cjs' },
      { name: 'aptoicons', file: `./dist/${pkg.module}`, format: 'es' }
    ],
    external: [
      'react',
      'react-proptypes'
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      packageJson({
        baseContents: {
          "name": pkg.name,
          "version": pkg.version,
          "description": pkg.description,
          "author": pkg.author,
          "homepage": pkg.homepage,
          "private": false,
          "license": pkg.license,
          "repository": pkg.repository,
          "bugs": pkg.bugs,
          "main": pkg.main,
          "module": pkg.module,
          "browser": pkg.browser
        }
      }),
    ]
  }
];