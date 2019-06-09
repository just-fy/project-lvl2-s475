import program from 'commander';
import { version } from '../../package.json';

program
	.version(version)
	.arguments('<firstConfig> <secondConfig>')
	.description('Compares two configuration files and shows a difference.')
	.option('-f, --format [type]', 'Output format');

program.on('--help', function(){
	console.log('Hello');
});

program.parse(process.argv);

program.help();

