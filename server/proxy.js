const httpProxy = require('http-proxy-middleware')
const { MOVIE_DB_API_URL, TOKEN } = require('./constants')

let lastReqTime = null
let timeout = null

// This probably isn't bulletproof
const proxyDelay = function(req, res, next) {
  const delay = 256;
  const lastReqTimePlusDelay = lastReqTime + delay
  const currentTime = Date.now()
  const delayNeeded = lastReqTimePlusDelay - currentTime;
  clearTimeout(timeout)

  // Delay API request if one has happened within last 256 millisecons
  if(lastReqTime && (lastReqTimePlusDelay > currentTime)) {
    timeout = setTimeout(() => {
      lastReqTime = Date.now()
      next()
    }, delayNeeded)
  } else {
    lastReqTime = Date.now()
    next()
  }
}

const proxyReq = httpProxy({
  target: MOVIE_DB_API_URL,
  changeOrigin: true,
  logLevel: 'debug',
  pathRewrite: function (path, req) {
    // append every request with the api key
    const appendTokenChar = path.includes('?') ? '&' : '?'
    return `${path.replace('/api/', '')}${appendTokenChar}api_key=${TOKEN}`
  },
  onError: function (error, req, res){
    res.status(500).json({ message: 'Something went wrong', error })
  },
})

module.exports = {
  proxyDelay,
  proxyReq,
}
