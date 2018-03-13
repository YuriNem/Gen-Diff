import fs from 'fs';
import getDiffFile from '../src';

describe('Compares two configuration files and shows a difference.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/diff.txt', 'utf-8');

  test('json', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.json';
    const pathToFileAfter = '__test__/__fixtures__/after.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });

  test('yml', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.yml';
    const pathToFileAfter = '__test__/__fixtures__/after.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });
});
