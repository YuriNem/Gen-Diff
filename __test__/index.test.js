import fs from 'fs';

import getDiffFile from '../src';

describe('Compares two configuration files and shows a difference in default text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/defaultDiff.txt', 'utf-8');

  test('default text json', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.json';
    const pathToFileAfter = '__test__/__fixtures__/after.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'default');
    expect(actual).toBe(expected);
  });

  test('default text yml', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.yml';
    const pathToFileAfter = '__test__/__fixtures__/after.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'default');
    expect(actual).toBe(expected);
  });

  test('default text ini', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.ini';
    const pathToFileAfter = '__test__/__fixtures__/after.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'default');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files with trees and shows a difference in default text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/defaultDiffTree.txt', 'utf-8');

  test('default text json tree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.json';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'default');
    expect(actual).toBe(expected);
  });

  test('default text yml tree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.yml';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'default');
    expect(actual).toBe(expected);
  });

  test('default text ini tree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.ini';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'default');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files and shows a difference in plain text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/plainDiff.txt', 'utf-8');
  test('plain text json', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.json';
    const pathToFileAfter = '__test__/__fixtures__/after.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('plain text yml', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.yml';
    const pathToFileAfter = '__test__/__fixtures__/after.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('plain text ini', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.ini';
    const pathToFileAfter = '__test__/__fixtures__/after.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files with trees and shows a difference in plain text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/plainDiffTree.txt', 'utf-8');

  test('plain text json tree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.json';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('plain text yml tree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.yml';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('plain text ini tree', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.ini';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });
});
