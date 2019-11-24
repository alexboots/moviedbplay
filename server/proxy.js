const httpProxy = require('http-proxy-middleware')
const { BASE_URL, TOKEN } = require('./constants')

const proxyReq = httpProxy({
  target: 'http://api.themoviedb.org/3',
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: function (path, req) {
    // append every request with the api key
    return `${path.replace('/api/', '')}?api_key=${TOKEN}`
  },
  onError: function (error, req, res){
    res.status(500).json({ message: 'Something went wrong', error })
  },
})

let lastReqTime = null
let timeout = null
const proxyDelay = function(req, res, next) {
  const delay = 256;
  const lastReqTimePlusDelay = lastReqTime + delay
  const currentTime = Date.now()
  clearTimeout(timeout)

  // Delay API request if one has happened within last 256 millisecons
  if(lastReqTime && (lastReqTimePlusDelay > currentTime)) {
    timeout = setTimeout(() => {
      lastReqTime = Date.now()
      next()
    }, delay)
  } else {
    lastReqTime = Date.now()
    next()
  }
}

module.exports = {
  proxyReq,
  proxyDelay
}
