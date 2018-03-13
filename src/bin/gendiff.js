#!/usr/bin/env node

import program from 'commander';
import getDiffFile from '../';

program
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.2.1')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => {
    const diffConfig = getDiffFile(firstConfig, secondConfig);
    console.log(diffConfig);
  })
  .parse(process.argv);
