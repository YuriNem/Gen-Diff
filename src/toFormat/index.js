import toNestedText from './toNestedText';
import toPlainText from './toPlainText';
import toJSON from './toJSON';

const typeToFormat = {
  nested: toNestedText,
  plain: toPlainText,
  json: toJSON,
};

export default (collDiff, format) => typeToFormat[format](collDiff);
