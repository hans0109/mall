import {request} from "./request"
import axios from "axios";

export function getCategoryData() {
  return request({
    url: '/data/category/',
  })
}
