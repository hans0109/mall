import {request} from "./request"
import axios from 'axios'
export function getHomeData() {
  return request({
    url: '/home/data/',
  })
}

export function getUser() {
  var jsonTest = {
    "appId":"1013",
    "ts":"1590047914",
    "md5":"506a7a80015ac9c2877c82cdf2da0220",
  }
  axios({
    url: 'https://p.cztv.com/api/uc/getCztvUserInfo',
    method: 'post',
    data: JSON.stringify(jsonTest),
    headers: {'Content-Type': 'application/json', 'sessionid': 'cef35910ba674102915062a08dd036b1'},
    dataType: "json",
  }).then(res => {
    console.log(res);
  })
}
