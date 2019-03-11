export default class NumberUtil {

    static genNumber(count){
        let num = "";
        for(let i = 0; i < count; i++){
            num += Math.floor( Math.random() * 10 );
        }
        return num;
    }

}