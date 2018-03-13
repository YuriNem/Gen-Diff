import fs from 'fs';
import getDiff from './getDiff';

const parse = pathToFile => JSON.parse(fs.readFileSync(pathToFile));

export default (pathToFileBefore, pathToFileAfter) => {
  const objectFileBefore = parse(pathToFileBefore);
  const objectFileAfter = parse(pathToFileAfter);
  const objectFilesDiff = getDiff(objectFileBefore, objectFileAfter);
  const stringFilesDiff = `\n{${Object.keys(objectFilesDiff).reduce((stringNew, filesKeyDiff) => `${stringNew}  ${filesKeyDiff}: ${objectFilesDiff[filesKeyDiff]}\n`, '\n')}}\n`;
  return stringFilesDiff;
};
