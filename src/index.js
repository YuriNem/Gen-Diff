import fs from 'fs';
import path from 'path';

import getParser from './getParser';
import getDiff from './getDiff';
import toFormat from './toFormat/indexToFormat';

const parseFile = (pathToFile) => {
  const readFile = fs.readFileSync(pathToFile, 'utf-8');
  const typeFile = path.extname(pathToFile);
  const objectFile = getParser(typeFile)(readFile);
  return objectFile;
};

export default (pathToFileBefore, pathToFileAfter, format) => {
  const objectFileBefore = parseFile(pathToFileBefore);
  const objectFileAfter = parseFile(pathToFileAfter);
  const collFilesDiff = getDiff(objectFileBefore, objectFileAfter);
  const formatFilesDiff = toFormat(collFilesDiff, format);
  return formatFilesDiff;
};
