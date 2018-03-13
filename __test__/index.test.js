import fs from 'fs';
import getDiffFile from '../src';

describe('Compares two configuration files and shows a difference.', () => {
  const pathToFileBefore = '__test__/__fixtures__/before.json';
  const pathToFileAfter = '__test__/__fixtures__/after.json';
  const expected = fs.readFileSync('__test__/__fixtures__/diff.txt', 'utf-8');

  test('json', () => {
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });
});
