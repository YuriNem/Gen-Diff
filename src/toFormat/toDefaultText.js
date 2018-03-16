
const symbols = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  updated: ' ',
};

const objectToString = (object, objectTab) =>
  `{\n${Object.keys(object).map(key => `${objectTab}      ${key}: ${object[key]}`).join('\n')}\n${objectTab}  }`;

export default (coll) => {
  const createDefault = (collection, tab) => collection.map((node) => {
    if (node.name === 'updated') {
      if (node.children.length > 0) {
        return `${tab}${symbols[node.name]} ${node.key}: ${`{\n${createDefault(node.children, `${tab}    `)}\n${tab}  }`}`;
      }

      const removedDefault = `${tab}${symbols.removed} ${node.key}: ${node.valueB instanceof Object ?
        objectToString(node.valueB, tab) : node.valueB}`;
      const addedDefault = `${tab}${symbols.added} ${node.key}: ${node.valueA instanceof Object ?
        objectToString(node.valueA, tab) : node.valueA}`;
      return `${removedDefault}\n${addedDefault}`;
    }

    const value = node.valueB ? node.valueB : node.valueA;
    return `${tab}${symbols[node.name]} ${node.key}: ${value instanceof Object ? objectToString(value, tab) : value}`;
  }).join('\n');

  return `\n{\n${createDefault(coll, '  ')}\n}\n`;
};
