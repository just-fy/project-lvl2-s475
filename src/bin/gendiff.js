#!/usr/bin/env node
import program from 'commander';
import { version } from '../../package.json';
import _ from 'lodash';
import fs from 'fs';


const getDataFromFile = (path) => {
	const file1 = fs.readFileSync(__dirname + path, 'utf-8');
	const data = JSON.parse(file1);

	return data
};

const compareConfigs = (path1, path2) => {
	const firstConfig = getDataFromFile(path1);
	const secondConfig = getDataFromFile(path2);

	const final = {};

	for (let key in firstConfig) {
		if (key in secondConfig) {
			if (secondConfig[key] === firstConfig[key]) {
				final[key] = firstConfig[key];
			} else if (secondConfig[key] !== firstConfig[key]) {
				final['-' + key] = firstConfig[key];
				final['+' + key] = secondConfig[key];
			}
		} else {
			final['-' + key] = firstConfig[key];
		}
	}
	return final;
};
console.log(compareConfigs('/beforecopy.json', '/aftercopy.json'));

program
	.version(version, '-v, --version')
	.arguments('<firstConfig> <secondConfig>')
	.description('This utility compares two configuration files and shows a difference.')
	.option('-f, --format [type]', 'Output format')
	.action((firstConfig, secondConfig) => {
		console.log(compareConfigs(firstConfig, secondConfig));
	});

program.on('--help', function(){
	console.log(program.opts());
});

program.parse(process.argv);

program.help();
