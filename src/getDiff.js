import _ from 'lodash';

export default (objectBefore, objectAfter) => {
  const typesKeys = [
    {
      value: key => ({ [`+ ${key}`]: objectAfter[key] }),
      check: key => !objectBefore[key],
    },
    {
      value: key => ({ [`- ${key}`]: objectBefore[key] }),
      check: key => !objectAfter[key],
    },
    {
      value: key => ({ [`  ${key}`]: objectBefore[key] }),
      check: key => objectBefore[key] === objectAfter[key],
    },
    {
      value: key => ({ [`+ ${key}`]: objectAfter[key], [`- ${key}`]: objectBefore[key] }),
      check: key =>
        (objectBefore[key]) && (objectAfter[key]) && (objectBefore[key] !== objectAfter[key]),
    },
  ];

  const getTypeKey = key => _.find(typesKeys, ({ check }) => check(key));

  const objectsKeys = _.union(Object.keys(objectBefore), Object.keys(objectAfter));
  const objectsDiff = objectsKeys.reduce((objectNew, objectsKey) => {
    const { value: objectNewKeyValue } = getTypeKey(objectsKey);
    return { ...objectNew, ...(objectNewKeyValue(objectsKey)) };
  }, {});
  return objectsDiff;
};
