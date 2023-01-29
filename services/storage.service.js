import { homedir } from 'os';
import { join } from 'path';
import { readFile, stat, writeFile } from 'fs/promises';

const FILE_NAME = 'weather-data.json';
const filePath = join(homedir(), FILE_NAME);
export const TOKEN_DICTIONARY = {
	token: 'token',
	city: 'city'
}

export const saveKeyValue = async (objKeyValue) => {
	let data = {};

	if(await isExist(filePath)){
		const file = await readFile(filePath);
		data = JSON.parse(file);
	}

	data[objKeyValue.key] = objKeyValue.value;

	await writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key) => {
	if(await isExist(filePath)){
		const file = await readFile(filePath);
		const data = JSON.parse(file);

		return data[key];
	}

	return undefined;
}

const isExist = async (path) => {
	return stat(path)
		.then(() => true)
		.catch(() => false);
}