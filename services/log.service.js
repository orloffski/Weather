import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
	console.log(chalk.bgRed.bold(' ERROR ') + ' ' + error);
}

export const printSuccess = (success) => {
	console.log(chalk.bgGreen.bold(' SUCCESS ') + ' ' + success);
}

export const printHelp = () => {
	console.log(
		dedent
			`${chalk.bgBlackBright.bold(' HELP ')}
			Without parameters - return weather
			-s [CITY] for setup city
			-h for help
			-t [API_KEY] for token save
			`);
}