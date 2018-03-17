
export default (coll) => {
  const createJSON = collection => collection.reduce((objectNew, node) => {
    if (node.name !== 'unchanged') {
      if (node.name === 'nested') {
        return { ...objectNew, [node.key]: createJSON(node.children) };
      }

      if (node.name === 'updated') {
        return {
          ...objectNew,
          [node.key]: { diff: node.name, from: node.valueB, to: node.valueA },
        };
      }

      return {
        ...objectNew,
        [node.key]: { diff: node.name, value: (node.valueB ? node.valueB : node.valueA) },
      };
    }

    return objectNew;
  }, {});

  return JSON.stringify(createJSON(coll), null, ' ');
};
