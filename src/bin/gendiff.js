#!/usr/bin/env node

import program from 'commander';

import getDiffFile from '../';

program
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.3.4')
  .option('-f, --format [type]', 'Output format: default, plain, json', 'default')
  .action((firstConfig, secondConfig) => {
    const diffConfig = getDiffFile(firstConfig, secondConfig, program.format);
    console.log(diffConfig);
  })
  .parse(process.argv);
