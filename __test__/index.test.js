import fs from 'fs';

import getDiffFile from '../src';

describe('Compares two configuration files and shows a difference in nested text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/nestedDiff.txt', 'utf-8');

  test('json to nested text', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.json';
    const pathToFileAfter = '__test__/__fixtures__/after.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'nested');
    expect(actual).toBe(expected);
  });

  test('yml to nested text', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.yml';
    const pathToFileAfter = '__test__/__fixtures__/after.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'nested');
    expect(actual).toBe(expected);
  });

  test('ini to nested text', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.ini';
    const pathToFileAfter = '__test__/__fixtures__/after.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'nested');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files with trees and shows a difference in nested text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/nestedDiffTree.txt', 'utf-8');

  test('json tree to nested text', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.json';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'nested');
    expect(actual).toBe(expected);
  });

  test('yml tree to nested text', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.yml';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'nested');
    expect(actual).toBe(expected);
  });

  test('ini tree to nested text', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.ini';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'nested');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files and shows a difference in plain text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/plainDiff.txt', 'utf-8');
  test('json to plain text', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.json';
    const pathToFileAfter = '__test__/__fixtures__/after.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('yml to plain text', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.yml';
    const pathToFileAfter = '__test__/__fixtures__/after.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('ini to plain text', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.ini';
    const pathToFileAfter = '__test__/__fixtures__/after.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files with trees and shows a difference in plain text.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/plainDiffTree.txt', 'utf-8');

  test('json tree to plain text', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.json';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('yml tree to plain text', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.yml';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });

  test('ini tree to plain text', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.ini';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'plain');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files and shows a difference in JSON.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/jsonDiff.txt', 'utf-8');
  test('json to json', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.json';
    const pathToFileAfter = '__test__/__fixtures__/after.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'json');
    expect(actual).toBe(expected);
  });

  test('yml to json', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.yml';
    const pathToFileAfter = '__test__/__fixtures__/after.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'json');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration .ini files and shows a difference in JSON.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/jsonDiffIni.txt', 'utf-8');

  test('ini to json', () => {
    const pathToFileBefore = '__test__/__fixtures__/before.ini';
    const pathToFileAfter = '__test__/__fixtures__/after.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'json');
    expect(actual).toBe(expected);
  });
});

describe('Compares two configuration files with trees and shows a difference in JSON.', () => {
  const expected = fs.readFileSync('__test__/__fixtures__/jsonDiffTree.txt', 'utf-8');

  test('json tree to json', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.json';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.json';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'json');
    expect(actual).toBe(expected);
  });

  test('yml tree to json', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.yml';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.yml';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'json');
    expect(actual).toBe(expected);
  });

  test('ini tree to json', () => {
    const pathToFileBefore = '__test__/__fixtures__/beforeTree.ini';
    const pathToFileAfter = '__test__/__fixtures__/afterTree.ini';
    const actual = getDiffFile(pathToFileBefore, pathToFileAfter, 'json');
    expect(actual).toBe(expected);
  });
});
