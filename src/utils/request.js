import axios from 'axios';

// const BASE_URL = 'https://mock.apifox.cn/m1/1887182-0-default';
const BASE_URL = 'http://healthcode.natapp1.cc';

export async function request(options) {
	let reqRes;
	if (options.data) {
		await axios
			.request({
				url: BASE_URL + options.url,
				method: options.method,
				data: options.data,
			})
			.then(async res => {
				reqRes = res.data;
			})
			.catch(err => {
				console.log(err);
			});
	} else {
		await axios
			.request({
				url: BASE_URL + options.url,
				method: options.method,
			})
			.then(async res => {
				reqRes = res.data;
			})
			.catch(err => {
				console.log(err);
			});
	}
	return reqRes;
}
