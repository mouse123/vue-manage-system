import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const getUserLists = () => {
    return request({
        url: '/user/list',
        method: 'get',
    });
};

export const getUser = (name) => {
    return request({
        url: `/user/${name}`,
        method: 'get',
    });
};
