export default class UrlUtil {

    static getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null; 
    }

    static getServerPath() {
        const { protocol, host } = window.document.location;
        return protocol + '//' + host; 
    }

}