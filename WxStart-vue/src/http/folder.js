import Http from 'utils/Http'

const PATH = '/api/folder/';

export function list(body) {
    return Http.post(PATH + 'list', body);
}

export function tree(body) {
    return Http.post(PATH + 'tree', body);
}

export function remove(body) {
    return Http.post(PATH + 'remove', body);
}

export function trash(body) {
    return Http.post(PATH + 'trash', body);
}

export function recover(body) {
    return Http.post(PATH + 'recover', body);
}

export function add(body) {
    return Http.post(PATH + 'add', body);
}

export function listSubFiles(body) {
    return Http.post(PATH + 'listSubFiles', body);
}

