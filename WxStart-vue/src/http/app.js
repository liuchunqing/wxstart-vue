import Http from 'utils/Http'

const PATH = '/';

export function getServerConfig(body) {
    return Http.post(PATH + 'getServerConfig', body);
}

export function getToken(body) {
    return Http.post('/api/' + 'getToken', body);
}



