import program from 'commander';
import { version } from '../../package.json';

program
    .version(version)
	.arguments('<firstConfig> <secondConfig>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
	.parse(process.argv);

if (!program.args.length) program.help();

program.on('--help', function(){
    console.log('hello');
});
