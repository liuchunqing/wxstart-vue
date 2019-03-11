import Http from 'utils/Http'

const PATH = '/api/share/';

export function shareLink(body) {
    return Http.post(PATH + 'shareLink', body);
}

export function shareGroup(body) {
    return Http.post(PATH + 'shareGroup', body);
}

export function shareEmail(body) {
    return Http.post(PATH + 'shareEmail', body);
}

export function list(body) {
    return Http.post(PATH + 'list', body);
}

export function deleteShare(body) {
    return Http.post(PATH + 'deleteShare', body);
}

export function setPassword(body) {
    return Http.post(PATH + 'setPassword', body);
}

export function getInfoByRand(body) {
    return Http.post('/share/' + 'getInfoByRand', body);
}

export function getShareDetail(body) {
    return Http.post('/share/' + 'getShareDetail', body);
}



