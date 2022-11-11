import axios from 'axios';
import qs from 'qs';

// const BASE_URL = 'https://mock.apifox.cn/m1/1887182-0-default';
const BASE_URL = 'http://healthcode.natapp1.cc';

// reqRes = { type, message, content };

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

export async function request(options) {
	await console.log('request.options', options);
	let reqRes;
	await axios({
		url: BASE_URL + options.url,
		method: options.method,
		data: qs.stringify(options.data)
	})
	.then(async res => {
		await console.log('request.res', res);
		reqRes = res.data;
	})
	.catch(async err => {
		await console.log(err);
	});
	await console.log('request.reqRes', reqRes);
	return reqRes.data;
}
