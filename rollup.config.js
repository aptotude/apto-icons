import pkg from './package.json';
import packageJson from 'rollup-plugin-generate-package-json';
import typescript from 'rollup-plugin-typescript2';

const globalLibs = {
  'react': 'React'
};
const externalLibs = [
  'react'
];

export default [
  {
    input: 'src/index.ts',
    output: [
      { name: 'aptoicons', globals: globalLibs, file: `./dist/${pkg.browser}`, format: 'umd' },
      { name: 'aptoicons', globals: globalLibs, file: `./dist/${pkg.main}`, format: 'cjs' },
      { name: 'aptoicons', globals: globalLibs, file: `./dist/${pkg.module}`, format: 'es' }
    ],
    external: externalLibs,
    plugins: [
      typescript({
        declaration: true
      }),
      packageJson({
        baseContents: {
          "name": pkg.name,
          "version": pkg.version,
          "description": pkg.description,
          "types": pkg.types,
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