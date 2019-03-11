export default class DateUtil {

    static convertDateToString(date) {
        let str = "";
        if(date){
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            str = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
        }
        return str;
    }

    static convertTimeToString(date) {
        let str = "";
        if(date){
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            str = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        }
        return str;
    }

    static convertDateTimeToString(date) {
        let str = "";
        if(date){
            str = DateUtil.convertDateToString(date) + " " + DateUtil.convertTimeToString(date);
        }
        return str;
    }

    static postDateParam(data, field) {
        let date = data[field];
        if(date instanceof Date){
            data[field] = DateUtil.convertDateToString(date);
        }
    }

    static postTimeParam(data, field) {
        let date = data[field];
        if(date instanceof Date){
            data[field] = DateUtil.convertTimeToString(date);
        }
    }

    static postDateTimeParam(data, field) {
        let date = data[field];
        if(date instanceof Date){
            data[field] = DateUtil.convertDateTimeToString(date);
        }
    }

    static postDateTimeRangeParam(range, data, startField = 'start', endField = 'end') {
        if(!range || range.length == 0){
            data[startField] = "";
            data[endField] = "";
        }else{
            data[startField] = DateUtil.convertDateTimeToString(range[0]);
            data[endField] = DateUtil.convertDateTimeToString(range[1]);
        }
    }

    static getAfterDateStr(num) {
        const ts = Date.now() + num * 24 * 60 * 60 * 1000;
        const date = new Date(ts);
        return DateUtil.convertDateTimeToString(date);
    }

}