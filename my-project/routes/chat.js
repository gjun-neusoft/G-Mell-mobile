const router = require('koa-router')()
const chat = require('../chat.js')
router.prefix('/api')
chat()

module.exports = router