#!/usr/local/bin/env node
import program from 'commander';
import { version } from '../../package.json';

console.log('hello');

program
	.version(version)
	.arguments('<firstConfig> <secondConfig>')
	.description('Compares two configuration files and shows a difference.')
	.option('-f, --format [type]', 'Output format');

program.on('--help', function(){
	console.log(program.opts());
});

program.parse(process.argv);

program.help();

