
export default (coll) => {
  const createJSON = collection => collection.reduce((objectNew, node) => {
    switch (node.name) {
      case 'nested':
        return { ...objectNew, [node.key]: createJSON(node.children) };
      case 'updated':
        return {
          ...objectNew,
          [node.key]: { diff: node.name, from: node.valueB, to: node.valueA },
        };
      case 'removed':
        return { ...objectNew, [node.key]: { diff: node.name, value: node.valueB } };
      case 'added':
        return { ...objectNew, [node.key]: { diff: node.name, value: node.valueA } };
      case 'unchanged':
        return objectNew;
      default:
        return objectNew;
    }
  }, {});

  return JSON.stringify(createJSON(coll));
};
