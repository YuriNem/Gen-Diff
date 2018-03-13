import fs from 'fs';
import getDiff from './getDiff';

export default (pathToFile1, pathToFile2) => {
  const file1 = JSON.parse(fs.readFileSync(pathToFile1));
  const file2 = JSON.parse(fs.readFileSync(pathToFile2));
  const diff = getDiff(file1, file2);
  const newFile = JSON.stringify(diff, null, '\n');
  return newFile;
};
