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

  test('ini', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.ini';
    const pathToFileAfter = '__test__/__fixtures__/after.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files with trees and shows a difference.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/diffTree.txt', 'utf-8');

  test('jsonTree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.json';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });

  test('ymlTree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.yml';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });

  test('iniTree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.ini';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter);
    expect(actual).toBe(expected);
  });
});
