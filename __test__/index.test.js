import getDiffFile from '../src';

describe('Compares two configuration files and shows a difference.', () => {
  const expected = '{\n\t  host: hexlet.io\n\t+ timeout: 20\n\t- timeout: 50\n\t- proxy: 123.234.53.22\n\t+ verbose: true\n}';
  const path1 = '__test__/__fixtures__/before.json';
  const path2 = '__test__/__fixtures__/after.json';

  test('json', () => {
    const actual = getDiffFile(path1, path2);
    expect(actual).toBe(expected);
  });
});
