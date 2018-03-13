import _ from 'lodash';

const findKey = (key, object1, object2) => {
  const findObject = {
    infile2: object1[key] === undefined,
    infile1: object2[key] === undefined,
    Equal: object1[key] === object2[key],
    Changed: (object1[key] !== undefined) && (object2[key] !== undefined)
    && (object1[key] !== object2[key]),
  };
  return findObject;
};

const addKey = (key, object1, object2) => {
  const addObject = {
    infile2: { [`+ ${key}`]: object2[key] },
    infile1: { [`- ${key}`]: object1[key] },
    Equal: { [`  ${key}`]: object1[key] },
    Changed: { [`+ ${key}`]: object2[key], [`- ${key}`]: object1[key] },
  };
  return addObject;
};

export default (fileObject1, fileObject2) => {
  const filesKeys = [...Object.keys(fileObject1), ...Object.keys(fileObject2)];
  const diffObject = filesKeys.reduce((newObject, key) => {
    const { true: foundKey } = _.invert(findKey(key, fileObject1, fileObject2));
    return { ...newObject, ...(addKey(key, fileObject1, fileObject2)[foundKey]) };
  }, {});
  return diffObject;
};
