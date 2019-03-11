const FILE_ICON_SHX = require('../assets/imgs/file/shx.png');
const FILE_ICON_TTF = require('../assets/imgs/file/ttf.png');
const FILE_ICON_TTC = require('../assets/imgs/file/ttc.png');

export default class FileUtil {

    static getExt(fileName){
		var extStart = fileName.lastIndexOf('.');
		var ext = fileName.substring(extStart+1,fileName.length).toLowerCase();
		return ext;
    }

    static getSizeStr(size, precision = 2){
        if(!size){
            return '';
        }
		if(size > 1024 * 1024 * 1024){
			return (size / (1024 * 1024 * 1024)).toFixed(precision) + 'G';
		}else if(size > 1024 * 1024){
			return (size / (1024 * 1024)).toFixed(precision) + 'M';
		}else if(size > 1024){
			return (size / 1024).toFixed(precision) + 'KB';
		}else{
			return size + 'B';;
		}
    }

    static formatM(size = 0, precision = 0) {
        if( size >= 1024 ){
            return (size / 1024).toFixed(0) + 'G';
        }else{
            return size + 'M';
        }
    }

    static isDwg(type){
        return [ 'ocf', 'dwg', 'dxf', 'dws', 'dwt' ].some(ext => type.toLowerCase() === ext.toLowerCase());
    }

    static isImage(type){
        return [ 'jpg', 'gif', 'bmp', 'png' ].some(ext => type.toLowerCase() === ext.toLowerCase());
    }

    static isDoc(type){
        return [ 'doc', 'docx' ].some(ext => type.toLowerCase() === ext.toLowerCase());
    }

    static isXls(type){
        return [ 'xls', 'xlsx' ].some(ext => type.toLowerCase() === ext.toLowerCase());
    }

    static isPpt(type){
        return [ 'ppt', 'pptx' ].some(ext => type.toLowerCase() === ext.toLowerCase());
    }

    static isPdf(type){
        return 'pdf'.toLowerCase() === type.toLowerCase();
    }

    static isTxt(type){
        return 'txt'.toLowerCase() === type.toLowerCase();
    }

    static isOther(type){
        return FileUtil.isDwg(type) || FileUtil.isImage(type) || FileUtil.isDoc(type) || FileUtil.isXls(type) 
                || FileUtil.isPpt(type) || FileUtil.isPdf(type) || FileUtil.isTxt(type);
    }

    static isFolder(type){
        return 'folder'.toLowerCase() === type.toLowerCase();
    }

    static isFont(type){
        return ('font'.toLowerCase() === type.toLowerCase()) || FileUtil.isShx(type) || FileUtil.isTtf(type) || FileUtil.isTtc(type);
    }

    static isShx(type){
        return 'shx'.toLowerCase() === type.toLowerCase();
    }

    static isTtf(type){
        return 'ttf'.toLowerCase() === type.toLowerCase();
    }

    static isTtc(type){
        return 'ttc'.toLowerCase() === type.toLowerCase();
    }

    static getIds(checks){
        let fileIds = [], folderIds = [], fontIds = [];
        checks.forEach(item => {
            const { id, type } = item;
            if ( FileUtil.isFolder(type) ) {
                folderIds.push(id);
            } else if ( FileUtil.isFont(type) ) {
                fontIds.push(id);
            } else {
                fileIds.push(id);
            }
        });
        return { fileIds: fileIds.join(','), folderIds: folderIds.join(','), fontIds: fontIds.join(',') };
    }

    static getNames(checks){
        if (checks && checks.length > 0) {
            return checks[0].name + ( checks.length > 1 ? ' 等' : '' );
        } else {
            return '';
        } 
    }

    static getIcon(type){
        if (FileUtil.isShx(type)) {
            return FILE_ICON_SHX;
        } else if (FileUtil.isTtf(type)) {
            return FILE_ICON_TTF;
        } else if (FileUtil.isTtc(type)) {
            return FILE_ICON_TTC;
        }
    }

    static getDownloadName(fileNames, includeFolder = false) {
        const length = fileNames.length;
        let firstFileName = fileNames[0];
        if(includeFolder){
            const arr = firstFileName.split('/');
            firstFileName = arr[arr.length - 1];
        }
        if (length == 1) {
            return firstFileName;
        } else if ( length > 1 ) {
            return `【批量下载】${firstFileName}等${fileNames.length}文件.zip`;
        } else {
            return '';
        }
    }

    static getIdNames(checks){
        let fileIds = [], fileNames = [];
        checks.forEach(item => {
            const { id, name } = item;
            fileIds.push(id);
            fileNames.push(name);
        });
        return { fileIds, fileNames };
    }

    static getClass(type){
        if(type == "muti"){
            return 'fa fa-files-o';
        }else if (FileUtil.isFolder(type)) {
            return 'fa fa-folder';
        } else if (FileUtil.isFont(type)) {
            return 'fa fa-font';
        } else if (FileUtil.isDoc(type)) {
            return 'fa fa-file-word-o';
        } else if (FileUtil.isXls(type)) {
            return 'fa fa-file-excel-o';
        } else if (FileUtil.isPpt(type)) {
            return 'fa fa-file-powerpoint-o';
        } else if (FileUtil.isPdf(type)) {
            return 'fa fa-file-pdf-o';
        } else if (FileUtil.isTxt(type)) {
            return 'fa fa-file-text-o';
        } else {
            return 'fa fa-file-o';
        }
    }


}