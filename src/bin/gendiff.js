#!/usr/bin/env node

import program from 'commander';
import getDiffFile from '../';

program
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.7')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => {
    const diffFile = getDiffFile(firstConfig, secondConfig);
    console.log(diffFile);
  })
  .parse(process.argv);
