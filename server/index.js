const express = require('express')
const proxy = require('http-proxy-middleware')
const axios = require('axios');
const app = express()

// https://api.themoviedb.org/3/movie/550?api_key=82adb6e5537d84d0315b81569c3089ca
// for non demo code this token would be in a super secure .env file
const baseUrl = 'https://api.themoviedb.org/3/'
const token = '82adb6e5537d84d0315b81569c3089ca'
app.use(express.json())

app.get('/api/search', async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}movie/${slug}?api_key=${token}`)
    res.json(response.data)
  } catch(error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
})

app.get('/api/movie/:slug', async (req, res) => {
  const slug = req.params.slug
  try {
    const response = await axios.get(`${baseUrl}movie/${slug}?api_key=${token}`)
    res.json(response.data)
  } catch(error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
})

app.get('/api/movie/popular', async (req, res) => {
  if(false) {
    // check cache
  }
  try {
    const response = await axios.get(`${baseUrl}movie/popular?api_key=${token}`)
    res.json(response.data)
  } catch(error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
})

// This also works fine but is pretty inflexible
// app.use(
//   '/api',
//   proxy({
//     target: 'http://api.themoviedb.org/3',
//     changeOrigin: true,
//     logLevel: 'debug',
//     pathRewrite: function (path, req) {
//       // append every request with the api key
//       return `${path.replace('/api/', '')}?api_key=${token}`
//     },
//     onError: function (error, req, res){
//       res.status(500).json({ message: 'Something went wrong', error })
//     },
//   }),
// )

app.listen(8000)
