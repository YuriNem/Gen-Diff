import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';
import getDiff from './getDiff';

const objectParseTypeFile = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};

const parseFile = (pathToFile) => {
  const readFile = fs.readFileSync(pathToFile, 'utf-8');
  const typeFile = path.extname(pathToFile);
  const objectFile = objectParseTypeFile[typeFile](readFile);
  return objectFile;
};

export default (pathToFileBefore, pathToFileAfter) => {
  const objectFileBefore = parseFile(pathToFileBefore);
  const objectFileAfter = parseFile(pathToFileAfter);
  const objectFilesDiff = getDiff(objectFileBefore, objectFileAfter);
  const stringFilesDiff = `\n{${Object.keys(objectFilesDiff).reduce((stringNew, filesKeyDiff) =>
    `${stringNew}  ${filesKeyDiff}: ${objectFilesDiff[filesKeyDiff]}\n`, '\n')}}\n`;
  return stringFilesDiff;
};
