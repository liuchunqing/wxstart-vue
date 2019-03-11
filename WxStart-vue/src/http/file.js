import Http from 'utils/Http'

const PATH = '/api/file/';

export function list(body) {
    return Http.post(PATH + 'list', body);
}

export function upload(body) {
    return Http.post(PATH + 'upload', body);
}

export function listRecent(body) {
    return Http.post(PATH + 'listRecent', body);
}

export function listDrawing(body) {
    return Http.post(PATH + 'listDrawing', body);
}

export function listPicture(body) {
    return Http.post(PATH + 'listPicture', body);
}

export function listOther(body) {
    return Http.post(PATH + 'listOther', body);
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

export function open(body) {
    return Http.post(PATH + 'open', body);
}

export function cancelOpen(body) {
    return Http.post(PATH + 'cancelOpen', body);
}

export function listMyPublic(body) {
    return Http.post(PATH + 'listMyPublic', body);
}

export function listMyLike(body) {
    return Http.post(PATH + 'listMyLike', body);
}

export function listMyCollection(body) {
    return Http.post(PATH + 'listMyCollection', body);
}

export function edit(body) {
    return Http.post(PATH + 'edit', body);
}

export function move(body) {
    return Http.post(PATH + 'move', body);
}

export function listFilesByFolders(body) {
    return Http.post(PATH + 'listFilesByFolders', body);
}

export function download(body) {
    Http.download(body);
}

