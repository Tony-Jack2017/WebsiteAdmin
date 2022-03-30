import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 600000
})

service.interceptors.request.use(config => {
  return false
}, err => {
  console.log(err)
})

service.interceptors.response.use(res => {
  console.log(res)
}, error => {
  console.log(error)
})

export default service
