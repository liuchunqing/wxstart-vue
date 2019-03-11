import Http from 'utils/Http'

const PATH = '/api/sharedFile/';

export function collection(body) {
    return Http.post(PATH + 'collection', body);
}

export function unCollection(body) {
    return Http.post(PATH + 'unCollection', body);
}

export function like(body) {
    return Http.post(PATH + 'like', body);
}

export function unLike(body) {
    return Http.post(PATH + 'unLike', body);
}



