import Global from './Global'

const FileActionMixin = {

    methods: {
        isGrant: function(fun) {
        	let funs = Global.getData('funs') || [];
            return funs.indexOf(fun) != -1;
        }
    }
    
}

export default FileActionMixin;
