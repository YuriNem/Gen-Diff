
const stringify = (value, string = '') => {
  if (value instanceof Object) {
    return 'complex value';
  }
  return `${string}${value}`;
};

export default (coll) => {
  const createPlain = (collection, parent) => collection.filter(({ name }) => name !== 'unchanged').map(({
    name, key, valueB, valueA, children,
  }) => {
    const oldValue = valueB;
    const newValue = valueA;
    switch (name) {
      case 'nested':
        return createPlain(children, `${parent}${key}.`);
      case 'updated':
        return `Property ${parent}${key} was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
      case 'removed':
        return `Property ${parent}${key} was removed`;
      case 'added':
        return `Property ${parent}${key} was added with ${stringify(newValue, 'value: ')}`;
      default:
        return '';
    }
  }).join('\n');

  return createPlain(coll, '');
};
