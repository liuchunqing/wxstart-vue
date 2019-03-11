import Http from 'utils/Http'

const PATH = '/api/font/';

export function list(body) {
    return Http.post(PATH + 'list', body);
}

export function open(body) {
    return Http.post(PATH + 'open', body);
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

export function rename(body) {
    return Http.post(PATH + 'rename', body);
}

export function edit(body) {
    return Http.post(PATH + 'edit', body);
}

export function download(body) {
    Http.download(body, '/downloadFont');
}


