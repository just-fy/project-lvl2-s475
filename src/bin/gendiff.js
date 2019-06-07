import program from 'commander';
import { version } from '../../package.json';

program
	.arguments('<firstConfig> <secondConfig>')
	.description('Compares two configuration files and shows a difference.')
	.version(version)
	.option('-f, --format [type]', 'Output format')
	.action(function (firstConfig, secondConfig) {
		console.log('hey');
	})
	.parse(process.argv);

// program
//     .version(version)
// 	.arguments('<firstConfig> <secondConfig>')
//     .description('Compares two configuration files and shows a difference.')
//     .option('-f, --format [type]', 'Output format')
// 	.parse(process.argv);
//
// if (!program.args.length) program.help();
//
// program.on('--help', function(){
//     console.log('hello');
// });
