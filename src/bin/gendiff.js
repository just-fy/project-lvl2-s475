import program from 'commander';
import { version } from '../../package.json';

// program
// 	.arguments('<firstConfig> <secondConfig>')
// 	.description('Compares two configuration files and shows a difference.')
// 	.version(version)
// 	.option('-f, --format [type]', 'Output format')
// 	.action(function (firstConfig, secondConfig) {
// 		console.log('hey');
// 	})
// 	.parse(process.argv);

program
    .version(version)
	.arguments('<firstConfig>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
	.action((firstConfig) => {
		firstConfigValue = firstConfig;
	});

	program.parse(process.argv);
if (typeof firstConfigValue === 'undefined') {
	console.error('no command given!');
	process.exit(1);
}
console.log('command: ', firstConfigValue);
