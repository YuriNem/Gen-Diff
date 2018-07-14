import _ from 'lodash';

const stringify = (value, valueTab) => {
  if (value instanceof Object) {
    return `{\n${Object.keys(value).map(key => `${valueTab}      ${key}: ${value[key]}`).join('\n')}\n${valueTab}  }`;
  }
  return value;
};

export default (coll) => {
  const createNested = (collection, tab) => _.flatten(collection.map(({
    name, key, valueB, valueA, children,
  }) => {
    const oldValue = stringify(valueB, tab);
    const newValue = stringify(valueA, tab);
    switch (name) {
      case 'nested':
        return `${tab}  ${key}: ${`{\n${createNested(children, `${tab}    `)}\n${tab}  }`}`;
      case 'updated':
        return [`${tab}- ${key}: ${oldValue}`, `${tab}+ ${key}: ${newValue}`];
      case 'removed':
        return `${tab}- ${key}: ${oldValue}`;
      case 'added':
        return `${tab}+ ${key}: ${newValue}`;
      case 'unchanged':
        return `${tab}  ${key}: ${oldValue}`;
      default:
        return '';
    }
  })).join('\n');
  return `{\n${createNested(coll, '  ')}\n}`;
};
