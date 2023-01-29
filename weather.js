#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

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

const initCLI = () => {
	const args = getArgs(process.argv);

	if(args.h){
		printHelp();
	}

	if(args.s){
		getWeather(args.s);
	}

	if(args.t){
		saveToken(args.t)
	}
};

initCLI();