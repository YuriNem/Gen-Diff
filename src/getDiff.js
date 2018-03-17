import _ from 'lodash';

const typesKeys = [
  {
    name: 'nested',
    check: (valueB, valueA) => valueB instanceof Object && valueA instanceof Object,
    process: (valueB, valueA, f) => ({ children: f(valueB, valueA) }),
  },
  {
    name: 'added',
    check: valueB => !valueB,
    process: (valueB, valueA) => ({ valueA }),
  },
  {
    name: 'removed',
    check: (valueB, valueA) => !valueA,
    process: valueB => ({ valueB }),
  },
  {
    name: 'unchanged',
    check: (valueB, valueA) => valueB === valueA,
    process: valueB => ({ valueB }),
  },
  {
    name: 'updated',
    check: (valueB, valueA) => valueB !== valueA,
    process: (valueB, valueA) => ({ valueB, valueA }),
  },
];

const getTypeKey = (valueB, valueA) => _.find(typesKeys, ({ check }) => check(valueB, valueA));

const getDiff = (objectBefore, objectAfter) => {
  const objectsKeys = _.union(Object.keys(objectBefore), Object.keys(objectAfter));
  const collDiff = objectsKeys.map((key) => {
    const valueB = objectBefore[key];
    const valueA = objectAfter[key];
    const { name, process } = getTypeKey(valueB, valueA);
    return { name, key, ...process(valueB, valueA, getDiff) };
  });
  return collDiff;
};

export default getDiff;
