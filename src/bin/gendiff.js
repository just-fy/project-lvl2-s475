import program from 'commander';
import { version } from '../../package.json';

program
    .version(version)
	.arguments('<firstConfig> <secondConfig>')
    .description('Compares two configuration files and shows a difference.')
    // .option('-h, --help', 'output usage information')
    // .option('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'Output format')
	.parse(process.argv);

// program.on('--help', function(){
//     console.log(program.description);
//     console.log('Options:');
//     console.log(program.opts());
// });
//

if (!program.args.length) program.help();
