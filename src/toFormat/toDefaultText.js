
const objectToString = (object, objectTab) =>
  `{\n${Object.keys(object).map(key => `${objectTab}      ${key}: ${object[key]}`).join('\n')}\n${objectTab}  }`;

export default (coll) => {
  const createDefault = (collection, tab) => collection.map((node) => {
    const valueB = node.valueB instanceof Object ? objectToString(node.valueB, tab) : node.valueB;
    const valueA = node.valueA instanceof Object ? objectToString(node.valueA, tab) : node.valueA;
    switch (node.name) {
      case 'nested':
        return `${tab}  ${node.key}: ${`{\n${createDefault(node.children, `${tab}    `)}\n${tab}  }`}`;
      case 'updated':
        return `${tab}- ${node.key}: ${valueB}\n${tab}+ ${node.key}: ${valueA}`;
      case 'removed':
        return `${tab}- ${node.key}: ${valueB}`;
      case 'added':
        return `${tab}+ ${node.key}: ${valueA}`;
      case 'unchanged':
        return `${tab}  ${node.key}: ${valueB}`;
      default:
        return '';
    }
  }).join('\n');

  return `{\n${createDefault(coll, '  ')}\n}`;
};
