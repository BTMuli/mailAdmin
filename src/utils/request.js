import axios from 'axios';

const BASE_URL = 'https://mock.apifox.cn/m1/1887182-0-default';

export async function request(options) {
	return new Promise((resolve, reject) => {
		if (options.data) {
			axios
				.request({
					url: BASE_URL + options.url,
					method: options.method,
					data: options.data,
				})
				.then(res => {
					if (res.data.statusCode === 0) {
						resolve(res.data);
					}
				})
				.catch(err => {
					reject(err.message);
				});
		} else {
			axios
				.request({
					url: BASE_URL + options.url,
					method: options.method,
				})
				.then(res => {
					if (res.data.statusCode === 0) {
						resolve(res.data);
					}
				})
				.catch(err => {
					reject(err.message);
				});
		}
	});
}
