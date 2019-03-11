import Http from 'utils/Http'

const PATH = '/user/';

export function grouplist(body) {
    return Http.post('/api' + PATH + 'grouplist', body);
}

export function getUserInfo(body) {
    return Http.post('/api' + PATH + 'userInfo', body);
}

export function getProductList(body) {
    return Http.post(PATH + 'getProductList', body);
}

export function getProductItem(body) {
    return Http.post(PATH + 'getProductItem', body);
}

export function sendExchangeCodeLink(body) {
    return Http.post('/api' + PATH + 'sendExchangeCodeLink', body);
}

export function getUserStorage(body) {
    return Http.post('/api' + PATH + 'getUserStorage', body);
}


