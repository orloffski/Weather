import { homedir } from 'os';
import { join } from 'path';

const FILE_NAME = 'weather-data.json';
const filePath = join(homedir(), FILE_NAME);

export const saveKeyValue = (objKeyValue) => {
	console.log(filePath);
}