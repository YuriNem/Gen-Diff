import _ from 'lodash';

const findObjectsKeyType = (key, before, after) => {
  const mapKeyValue = new Map([
    [!before[key], { [`+ ${key}`]: after[key] }],
    [!after[key], { [`- ${key}`]: before[key] }],
    [before[key] === after[key], { [`  ${key}`]: before[key] }],
    [(before[key]) && (after[key]) && (before[key] !== after[key]), { [`+ ${key}`]: after[key], [`- ${key}`]: before[key] }],
  ]);
  const newKeyValue = mapKeyValue.get(true);
  return newKeyValue;
};

export default (objectBefore, objectAfter) => {
  const objectsKeys = _.union(Object.keys(objectBefore), Object.keys(objectAfter));
  const objectsDiff = objectsKeys.reduce((objectNew, objectsKey) => {
    const objectNewKeyValue = findObjectsKeyType(objectsKey, objectBefore, objectAfter);
    return { ...objectNew, ...objectNewKeyValue };
  }, {});
  return objectsDiff;
};
