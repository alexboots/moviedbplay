const express = require('express')
const apicache = require('apicache')

const app = express()
const cache = apicache.middleware
const { proxyReq, proxyDelay } = require('./proxy')

app.use('/api', cache('5 minutes'), proxyDelay, proxyReq)
app.use(express.json())
app.listen(8000)

/***/

// This also works fine but is pretty inflexible
// const proxyReq = proxy({
//   target: 'http://api.themoviedb.org/3',
//   changeOrigin: true,
//   logLevel: 'debug',
//   pathRewrite: function (path, req) {
//     // append every request with the api key
//     return `${path.replace('/api/', '')}?api_key=${TOKEN}`
//   },
//   onError: function (error, req, res){
//     res.status(500).json({ message: 'Something went wrong', error })
//   },
// })
// 
// app.use(
//   '/api',
//   proxyReq
// )
// 
// app.listen(8000)

/***/
// app.get('/api/search/movie', async (req, res) => {
//   const slug = req.params.slug
//   try {
//     const response = await axios.get(`${BASE_URL}/search/movie?api_key=${TOKEN}`)
//     res.json(response.data)
//   } catch(error) {
//     res.status(500).json({ message: 'Something went wrong', error })
//   }
// })

// app.get('/api/movie/:slug', async (req, res) => {
//   const slug = req.params.slug
//   try {
//     const response = await axios.get(`${BASE_URL}movie/${slug}?api_key=${TOKEN}`)
//     res.json(response.data)
//   } catch(error) {
//     res.status(500).json({ message: 'Something went wrong', error })
//   }
// })