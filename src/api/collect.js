import { request } from '../utils/request'

// 添加商品到购物车
export function addOrderToCollect(params) {
    return request({
        method: 'post',
        url: 'collect/add/' + params.order_id,
        headers: {
            'Authorization': window.localStorage.token,
        },
    })
}

// 购物车删除商品
export function CollectDeleteOrder(params) {
    return request({
        method: 'delete',
        url: 'collect/delete/' + params.order_id,
        headers: {
            'Authorization': window.localStorage.token,
        },
    })
}

// 展示购物车列表
export function CollectShow(params) {
    return request({
        method: 'get',
        url: 'collect/show',
        headers: {
            'Authorization': window.localStorage.token,
        },
    })
}

// 更新商品数量  /cart/update/{id}/{count}
export function updateGoodsCount(params) {
    return request({
        method: 'put',
        url: `/collect/update/${params.id}/${params.count}`,
        headers: {
            'Authorization': window.localStorage.token,
        },
    })
}