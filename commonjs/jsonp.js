import originJsonp from 'jsonp'

export default function jsonp(url, data, option){
    url += (url.indexOf('?')< 0 ? '?':'&' + param(data) 

    return new Promise(resolve, reject) => {
        originJsonp(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

// 对post参数进行处理
export function param(data){
    let url = ''
    for(var i in data){
        let value = data[i] !== undefined ? data[i]:''
        url += `&${i}=${encodeURIcomponent(value)}`
    }
    return url ? url.substring(1): ''
}