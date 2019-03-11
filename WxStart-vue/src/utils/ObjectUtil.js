export default class ObjectUtil {

    static clone(obj){
        var str, newobj = obj.constructor === Array ? [] : {};
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? Utils.clone(obj[i]) : obj[i]; 
        }
        return newobj;
    }

    static qs(data) {
		let ret = '';
		for (let it in data) {
			ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
		}
		return ret;
	}

}