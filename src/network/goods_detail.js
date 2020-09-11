import {request} from "./request"

export function getGoodsDetailData(data) {
  let param = new URLSearchParams()
  param.append('param', data)
  return request({
    url: '/data/goods_detail/',
    method: 'post',
    data: param,
  })
}
