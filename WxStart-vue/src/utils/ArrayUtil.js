export default class ArrayUtil {

    static getNameById(arr, id, nameField = "name", idField = "id"){
        let name = '';
        for(let item of arr){
            if(item[idField] == id){
                name = item[nameField];
                break;
            }
        }
        return name;
    }

    static getItemById(arr, id, idField = "id"){
        let data;
        for(let item of arr){
            if(item[idField] == id){
                data = item;
                break;
            }
        }
        return data;
    }

    static getNodeById(arr, id, idField = "id"){
        for(let node of arr){
            if(node[idField] == id){
                return node;
            }
            const { children } = node;
            if(children){
                const node = Utils.getNodeById(children, id, idField);
                if(node){
                    return node;
                }  
            }                          
        }
    }

}