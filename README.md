#Apto Icons

# Adding A New Icon
- Add the svg to the `src/assets` directory
- Run `yarn svg`
- Add the new icon as an export to the `src/index.ts` file

# Publishing A New Package Version
- increment the version in the package.json file
- check in your code
- Run `yarn build`
- Run `cd dist`
- Run `npm pack`
- Run `npm publish apto-icons-<version number here>.tgz`
