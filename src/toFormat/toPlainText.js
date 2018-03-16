
const typeNode = {
  removed: key => `${key} was removed`,
  added: (key, node) => (`${key} was added with ${node.children.length > 0 ?
    'complex value' : `value: ${node.valueA}`}`),
  updated: (key, node) => `${key} was updated. From ${node.valueB instanceof Object ?
    'complex value' : node.valueB} to ${node.valueA instanceof Object ? 'complex value' : node.valueA}`,
};

export default (coll) => {
  const createPlain = (collection, parent) => collection.reduce((stringNew, node) => {
    if (node.name !== 'unchanged') {
      const children = node.children.length > 0 ? createPlain(node.children, `${node.key}.`) : '';
      return (`${stringNew}Property ${parent}${typeNode[node.name](node.key, node)}\n${children}`);
    }
    return stringNew;
  }, '');

  return createPlain(coll, '');
};
