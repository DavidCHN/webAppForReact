import axios from 'axios'

const baseUrl = process.env.API_BASE || ''
/* eslint-disable */
const queryString = (url, params) => {
  const str = Object.keys(params).reduce((result, key) => {
    result += `${key}=${params[key]}&`
    return result
  }, '')
  return `${baseUrl}/api/${url}?${str.substr(0, str.length - 1)}`
}

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(queryString(url, params))
      .then(resp => {
        const { data } = resp
        if(data&&data.success===true){
          resolve(data)
        }else{
          reject(data)
        }
        resolve(resp.data)
      }).catch(reject)
  })
}

export const post = (url, params, datas) => {
  return new Promise((resolve, reject) => {
    axios.post(queryString(url,params), datas)
    .then(resp => {
      const { data } = resp
      if(data&&data.success===true){
        resolve(data)
      }else{
        reject(data)
      }
      resolve(resp.data)
    }).catch(reject)
  })
}

export default {
  get,
}

/* eslint-enable */
