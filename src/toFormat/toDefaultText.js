
const symbols = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  updated: ' ',
};

const updatedUnchangedChildrenToString = (object, objectTab) =>
  `{\n${Object.keys(object).map(key => `${objectTab}      ${key}: ${object[key]}`).join('\n')}\n${objectTab}  }`;

export default (coll) => {
  const createString = (collection, tab) => collection.map((node) => {
    if ((node.name === 'updated') && (node.children.length === 0)) {
      const removedString = `${tab}${symbols.removed} ${node.key}: ${node.valueB instanceof Object ?
        updatedUnchangedChildrenToString(node.valueB, tab) : node.valueB}`;
      const addedString = `${tab}${symbols.added} ${node.key}: ${node.valueA instanceof Object ?
        updatedUnchangedChildrenToString(node.valueA, tab) : node.valueA}`;
      return `${removedString}\n${addedString}`;
    }

    return `${tab}${symbols[node.name]} ${node.key}: ${node.children.length > 0 ?
      `{\n${createString(node.children, `${tab}    `)}\n${tab}  }` : `${node.valueB ?
        node.valueB : node.valueA}`}`;
  }).join('\n');

  return `\n{\n${createString(coll, '  ')}\n}\n`;
};
