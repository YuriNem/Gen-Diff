
export default (coll) => {
  const createPlain = (collection, parent) => collection.map((node) => {
    const valueB = node.valueB instanceof Object ? 'complex value' : node.valueB;
    const valueA = node.valueA instanceof Object ? 'complex value' : node.valueA;
    switch (node.name) {
      case 'nested':
        return createPlain(node.children, `${parent}${node.key}.`);
      case 'updated':
        return `Property ${parent}${node.key} was updated. From ${valueB} to ${valueA}`;
      case 'removed':
        return `Property ${parent}${node.key} was removed`;
      case 'added':
        return `Property ${parent}${node.key} was added with ${valueA === 'complex value' ? 'complex value' : `value: ${valueA}`}`;
      case 'unchanged':
        return '';
      default:
        return '';
    }
  }).filter(string => string).join('\n');

  return createPlain(coll, '');
};
