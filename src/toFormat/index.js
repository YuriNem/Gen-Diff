import toDefaultText from './toDefaultText';
import toPlainText from './toPlainText';

const typeToFormat = {
  default: toDefaultText,
  plain: toPlainText,
};

export default (collDiff, format = 'default') => typeToFormat[format](collDiff);
