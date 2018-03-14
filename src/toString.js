export default (objectDiff) => {
  const stringDiff = `\n{${Object.keys(objectDiff).reduce((stringNew, keyDiff) =>
    `${stringNew}  ${keyDiff}: ${objectDiff[keyDiff]}\n`, '\n')}}\n`;
  return stringDiff;
};
