import axios from 'axios';
import qs from 'qs';

// const BASE_URL = 'https://mock.apifox.cn/m1/1887182-0-default';
const BASE_URL = 'http://healthcode.natapp1.cc';

// reqRes = { type, message, content };

export async function request(options) {
	await console.log('request.options', options);
	if (options.method === 'get') {
		return reqGet(options);
	} else if (options.method === 'post') {
		return reqPost(options);
	} else if (options.method === 'delete') {
		return reqDel(options);
	}

	async function reqGet(options) {
		let getRes;
		await axios(
			{
				url: BASE_URL + options.url,
				method: 'get',
				params: options.data,
			},
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		)
			.then(async res => {
				await console.log('request.reqGet.res', res);
				getRes = res.data;
			})
			.catch(async err => {
				await console.log(err);
			});
		await console.log('request.reqGet.getRes', getRes);
		return getRes.data;
	}

	async function reqPost(options) {
		let postRes;
		await axios(
			{
				url: BASE_URL + options.url,
				method: 'post',
				data: qs.stringify(options.data),
			},
			{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		)
			.then(async res => {
				await console.log('request.reqPost.res', res);
				postRes = res.data;
			})
			.catch(async err => {
				await console.log(err);
			});
		await console.log('request.reqPost.postRes', postRes);
		return postRes.data;
	}

	async function reqDel(options) {
		let delRes;
		await axios(
			{
				url: BASE_URL + options.url,
				method: 'delete',
				params: options.data,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		)
			.then(async res => {
				await console.log('request.reqDel.res', res);
				delRes = res.data;
			})
			.catch(async err => {
				await console.log(err);
			});
		await console.log('request.reqDel.delRes', delRes);
		return delRes.data;
	}
}
