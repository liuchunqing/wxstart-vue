let globalData = new Map();

export default class Global{

	static initData(){
		const token = sessionStorage.getItem('token');
		Global.setData('token', token);
		const profile = JSON.parse(sessionStorage.getItem('profile'));
		Global.setData('profile', profile);
		const breadcrumbs = JSON.parse(sessionStorage.getItem('breadcrumbs'));
		Global.setData('breadcrumbs', breadcrumbs);
	}

	static storeData(data){
		const { profile, token } = data;
		sessionStorage.setItem('token', token);
		sessionStorage.setItem('profile', JSON.stringify(profile));
	}

	static clearData(){
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('profile');
	}

	static setData(key, value){
		globalData.set(key, value);
	}

	static getData(key){
		return globalData.get(key);
	}

}