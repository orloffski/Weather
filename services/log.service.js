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

export const printWeather = (data) => {
	console.log(
		dedent`
		${chalk.bgYellow.bold(' WEATHER ')} in ${data.name}
		${data.weather[0].description}
		Temp: ${data.main.temp}, feels like: ${data.main.feels_like}
		Pressure: ${data.main.pressure}hPa
		Humidity: ${data.main.humidity}%
		Wind speed: ${data.wind.speed} meter/sec
		`
	);
}