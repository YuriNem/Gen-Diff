
export default (coll) => {
  const createJSON = collection => collection.reduce((objectNew, node) => {
    if (node.name !== 'unchanged') {
      if (node.name === 'updated') {
        if (node.children.length > 0) {
          return { ...objectNew, [node.key]: createJSON(node.children) };
        }

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
