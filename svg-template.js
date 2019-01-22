function formatComponentName(string) {
  string = string.replace('Svg', '');
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import React from 'react';
    export const ${formatComponentName(componentName.name)} = (props) => { return ${jsx} };
  `;
}
module.exports = template;