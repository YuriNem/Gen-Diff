#!/usr/bin/env node

const commander = require('commander');

commander
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .version('0.0.5', '-V, --version')
  .parse(process.argv);
