
const typeNode = {
  removed: key => `${key} was removed`,
  added: (key, node) => (`${key} was added with ${node.valueA instanceof Object ?
    'complex value' : `value: ${node.valueA}`}`),
  updated: (key, node) => `${key} was updated. From ${node.valueB instanceof Object ?
    'complex value' : node.valueB} to ${node.valueA instanceof Object ? 'complex value' : node.valueA}`,
};

export default (coll) => {
  const createPlain = (collection, parent) => collection.reduce((stringNew, node) => {
    if (node.name !== 'unchanged') {
      if (node.name === 'nested') {
        return `${stringNew}${createPlain(node.children, `${node.key}.`)}`;
      }

      return (`${stringNew}Property ${parent}${typeNode[node.name](node.key, node)}\n`);
    }

    return stringNew;
  }, '');

  return createPlain(coll, '');
};
