// 引入axios
import axios from 'axios'
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000

export const getAllData = params => {
    return axios.get(`/vue-project/datasystem-client/labelManage/getLabelFeature?id=10991`,{ params: params });
};

export function getArticleList (id) {
    return request({
        url: '/vue-project/datasystem-client/labelManage/getLabelFeature',
        method: 'GET',
        id
    })
}
