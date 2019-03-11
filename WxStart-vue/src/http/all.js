import Http from 'utils/Http'

const PATH = '/api/all/';

export function list(body) {
    return Http.post(PATH + 'list', body);
}

export function listTrash(body) {
    return Http.post(PATH + 'listTrash', body);
}

export function rename(body) {
    return Http.post(PATH + 'rename', body);
}

export function trash(body) {
    return Http.post(PATH + 'trash', body);
}

export function recover(body) {
    return Http.post(PATH + 'recover', body);
}

export function remove(body) {
    return Http.post(PATH + 'remove', body);
}

export function empty(body) {
    return Http.post(PATH + 'empty', body);
}

export function move(body) {
    return Http.post(PATH + 'move', body);
}

