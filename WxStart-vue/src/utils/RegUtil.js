export default class RegUtil {

    static isMail (str) {
		return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(str);
    }

    static isMobile (str) {
		return /^1\d{10}$/.test(str);
    }

    static isVerificationCode (str) {
        return /^\d{6}$/.test(str);
    }

}