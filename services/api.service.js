import axios from 'axios';
import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

export const getWeather = async () => {
	const token = process.env.token ?? await getKeyValue(TOKEN_DICTIONARY.token);
	const city = process.env.city ?? await getKeyValue(TOKEN_DICTIONARY.city);

	if(!token){
		throw new Error('empty token API, setup with command -t [API_KEY]')
	}

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: 
		{
			q: city,
			appid: token,
			lang: 'ru',
			units: 'metric'
		}
	});

	console.log(data);

	return data;

};