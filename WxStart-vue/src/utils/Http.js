import axios from 'axios'
import EventBus from 'common/EventBus'
import { SERVER_URL } from 'common/config'
import ObjectUtil from './ObjectUtil'
import CookieUtil from './CookieUtil'

// axios.defaults.headers = {
// 	"Content-Type": "application/x-www-form-urlencoded"
// }

// axios.defaults.transformRequest = [data=> {
// 	let ret = ''
// 	for (let it in data) {
// 		ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
// 	}
// 	return ret
// }]

const RESULT_SUCCESS = 0;
const TOKEN_INVALID = 101;

axios.defaults.timeout = 600000;

export default class Http{

	static post(url, data = {}){
        const ticket = CookieUtil.getCookie('gstarsso_ticket');
        data.ticket = ticket;
        data.clientType = data.clientType || 'Web_PC';
		return new Promise((resolve, reject) => {
			axios.post(
				SERVER_URL + url,
				ObjectUtil.qs(data),
				{
					headers: {
					    'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			).then(res => {
				const { data } = res;
				const { code, msg } = data;
				if(code == TOKEN_INVALID){
					EventBus.$emit('App.TokenInvalid');
				}else{
					resolve(data);
				}
			}, err => {
				reject({ code: 100, msg: '服务无法访问，可能是网络原因' });
			});
		});
    }
    
	static postFile(url, file, params = {}) {
        var formData = new FormData();
        formData.append("filedata", file);
        for(let key in params){
            formData.append(key, params[key]);
        }
		return new Promise((resolve, reject) => {
			axios.post(
				url,
				formData,
				{
					headers: {
					    'Content-Type': 'multipart/form-data'
					}
				}
			).then(res => {
				const { data } = res;
				const { code, msg } = data;
				if(code == TOKEN_INVALID){
					EventBus.$emit('App.TokenInvalid');
				}else{
					resolve(data);
				}
			}, err => {
				reject({ code: 100, msg: '服务无法访问，可能是网络原因' });
			});
		});
	}
    
    static download(data = {}, url = '/download') {
		data.clientType = 'Web_PC';
        const qs = ObjectUtil.qs(data);
        window.open( SERVER_URL + url + '?' + qs, "myIframe" );
    }

}