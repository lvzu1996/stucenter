// import os from 'object-serialize'
import param from 'object-param'

export default new class {
  constructor () {
      this.map = new Map()
    }
  create (name, methods) {
      return this.context[name] = this.DB(methods)
    }
  set (key, value) {
      this.map.set(key, value)
    }
  get (key) {
      return this.map.get(key)
    }
  context () {
      this.link = data => this.context.Data = data
    }
  DB (methods) {
      for (let method in methods) {
          const config = methods[method]
            this[method] = query => new Request(config, query, method)
        }
      return this
    }
}()

function Request (config, body) {
  let {url, method = ''} = config
    const option = {
      credentials: 'same-origin'
    }
    if (method.toUpperCase() === 'POST') {
      Object.assign(option, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json ;charset=UTF-8'
          },
        method: 'post',
        // credentials: "include",
        body: JSON.stringify(body)
      })
    }else if (method.toUpperCase() === 'GET'){
      url += `?${param(body)}`
    }else if(method.toUpperCase() === 'DELETE'){
      url += ('/'+body['parameter'])
      Object.assign(option, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json ;charset=UTF-8'
        },
        method: 'DELETE',
      })
    }else if(method.toUpperCase() === 'PATCH'){
      Object.assign(option, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json ;charset=UTF-8'
        },
        method: 'PATCH',
        body: JSON.stringify(body)
      })
    }

  return new Promise((resolve, reject) => {
      fetch(url, option)
        .then(re => re.json())
        .then(({msg, data, error_num}) => {
          if (msg == 'success') {
              resolve(data)
            } else {
              reject({
                  msg, error_num
                })
            }
        })
    })
}
