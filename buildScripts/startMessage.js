//the below is the old JavaScript way...
//var chalk = require('chalk');
//but now, since using Babel we can use the
//new ES6/ES2015 syntax
import chalk from 'chalk'; //module syntax
//in order for the above to work though, can no longer
//use just "node"... have to use "babel-code"

console.log(chalk.green('starting app  in dev mode...'));
