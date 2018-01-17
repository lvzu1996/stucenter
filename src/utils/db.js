import DBF from './dbFactory'

export default DBF.context

var prefix = ''

// if (process.env.NODE_ENV === 'development') {
//   prefix = 'http://127.0.0.1:8000'
// }
// if (process.env.NODE_ENV === 'production') {
//   prefix = 'https://world-elite.site'
// }
prefix = 'http://127.0.0.1:8080/api'
// prefix = 'https://world-elite.site'

DBF.create('LOGIN', {
    // 登录api
  login: {
    url: prefix + '/login',
    method: 'POST'
  }
})
DBF.create('STUDENT', {
  get: {
    url: prefix + '/getStuInfo',
    method: 'GET'
  },
  // 修改学员信息
  revice: {
    url: prefix + '/revStuInfo',
    method: 'POST'
  }
})

DBF.create('OPERATION', {
  get: {
    url: prefix + '/operation',
    method: 'GET'
  },
  getUploadInfo: {
    url: prefix + '/uploadinfo',
    method: 'GET'
  },
  uploadReport: {
    url: prefix + '/uploadreport',
    method: 'POST'
  }
})
DBF.create('SYSTEM', {
  get: {
    url: prefix + '/push',
    method: 'GET'
  }
})
