import program from 'commander';
import { version } from '../../package.json';

program
    .version(version)
    .description('Compares two configuration files and shows a difference')
    .option('-h, --help', 'enable some foo')
    .option('-V, --version', 'output the version number');

program.on('--help', function(){
    console.log(program.description);
    console.log('Options:');
    console.log(program.opts());
});

program.parse(process.argv);

program.help();
