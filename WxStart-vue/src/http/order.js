import Http from 'utils/Http'

const PATH = '/api/order/';

export function createOrder(body) {
    return Http.post(PATH + 'createOrder', body);
}

export function submitOrder(body) {
    return Http.post(PATH + 'submitOrder', body);
}

export function getUserOrderList(body) {
    return Http.post(PATH + 'getUserOrderList', body);
}

export function getOrderStatus(body) {
    return Http.post(PATH + 'getOrderStatus', body);
}

export function getOrderDetail(body) {
    return Http.post(PATH + 'getOrderDetail', body);
}

export function synProductOrder(body) {
    return Http.post(PATH + 'synProductOrder', body);
}

export function cancelOrder(body) {
    return Http.post(PATH + 'cancelOrder', body);
}

export function alipayDirectHtml(body) {
    return Http.post(PATH + 'alipayDirectHtml', body);
}


