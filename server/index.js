const express = require('express')
const apicache = require('apicache')

const app = express()
const cache = apicache.middleware
const { proxyReq, proxyDelay } = require('./proxy')

app.use('/api', cache('5 minutes'), proxyDelay, proxyReq)
app.use(express.json())
app.listen(8000)
