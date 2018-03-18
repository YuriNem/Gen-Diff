
const checkComplexValue = (value) => {
  if (value instanceof Object) {
    return 'complex value';
  }
  return value;
};

export default (coll) => {
  const createPlain = (collection, parent) => collection.map(({
    name, key, valueB, valueA, children,
  }) => {
    const oldValue = checkComplexValue(valueB);
    const newValue = checkComplexValue(valueA);
    switch (name) {
      case 'nested':
        return createPlain(children, `${parent}${key}.`);
      case 'updated':
        return `Property ${parent}${key} was updated. From ${oldValue} to ${newValue}`;
      case 'removed':
        return `Property ${parent}${key} was removed`;
      case 'added':
        return `Property ${parent}${key} was added with ${newValue === 'complex value' ? 'complex value' : `value: ${newValue}`}`;
      case 'unchanged':
        return '';
      default:
        return '';
    }
  }).filter(string => string).join('\n');

  return createPlain(coll, '');
};
