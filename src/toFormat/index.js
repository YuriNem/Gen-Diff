import toDefaultText from './toDefaultText';
import toPlainText from './toPlainText';
import toJSON from './toJSON';

const typeToFormat = {
  default: toDefaultText,
  plain: toPlainText,
  json: toJSON,
};

export default (collDiff, format = 'default') => typeToFormat[format](collDiff);
