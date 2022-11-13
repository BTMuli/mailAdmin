import axios from 'axios';
import qs from 'qs';

// Base URL
// export const baseURL = 'http://localhost:3000';
export const BASE_URL = 'http://healthcode.natapp1.cc';

/**
 * @description: Request by axios
 * @param options method, url, data
 * @return {Promise<*>} response
 */
export async function request(options) {
	await console.log('request.options', options);
	if (options.method === 'get') {
		return reqGet(options);
	} else if (options.method === 'post') {
		return reqPost(options);
	} else if (options.method === 'delete') {
		return reqDel(options);
	}

	/**
	 * @description: Get request
	 * @param options url, data
	 * @return {Promise<*>} response
	 */
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

	/**
	 * @description: Post request
	 * @param options url, data
	 * @return {Promise<*>} response
	 */
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

	/**
	 * @description: Delete request
	 * @param options url, data
	 * @return {Promise<*>} response
	 */
	async function reqDel(options) {
		let delRes;
		await axios({
			url: BASE_URL + options.url,
			method: 'delete',
			params: options.data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
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
