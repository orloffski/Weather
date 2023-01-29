#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try{
		await saveKeyValue({key: 'token', value: token});
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
		
	}

	if(args.t){
		saveToken(args.t)
	}
};

initCLI();