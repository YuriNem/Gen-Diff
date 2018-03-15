import yaml from 'js-yaml';
import ini from 'ini';

const objectParseType = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};

export default type => objectParseType[type];
