#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
	if(!token.length){
		printError('token is empty')
		return;
	}

	try{
		await saveKeyValue({key: TOKEN_DICTIONARY.token, value: token});
		printSuccess('Token saved');
	} catch (e){
		printError(e.message);
	}
}

const saveCity= async (city) => {
	if(!city.length){
		printError('city is empty')
		return;
	}

	try{
		await saveKeyValue({key: TOKEN_DICTIONARY.city, value: city});
		printSuccess('City saved');
	} catch (e){
		printError(e.message);
	}
}

const getForecast = async () => {
	try{
		const data = await getWeather();

		console.log(data);
	} catch(e){
		if(e?.response?.status == 404){
			printError('empty city, setup with command -s [CITY]')
		} else if(e?.response?.status == 401){
			printError('empty token API, setup with command -t [API_KEY]')
		} else{
			printError(e.message);
		}

	}
}

const initCLI = () => {
	const args = getArgs(process.argv);

	if(args.h){
		printHelp();
		return;
	}

	if(args.s){
		saveCity(args.s);
		return;
	}

	if(args.t){
		saveToken(args.t);
		return;
	}

	getForecast();
};

initCLI();