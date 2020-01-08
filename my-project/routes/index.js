const router = require('koa-router')()
const crypto = require('crypto')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })
//路由前缀
router.prefix('/api')

// router.get('/', async (ctx, next) => {
  // ctx.util.mysql('SELECT name, password FROM mart.user',function(err, results){
  //   console.log(results)
  // })
  // await next()
// })
//获取路由数据
router.get('/getroutes', async (ctx, next) => {
  let ret;
  await ctx.util.mysql('select','SELECT * FROM mart.routes').then((results)=>{
    ret = {code: 0, data:results}
  }).catch(()=>{
    ret = {code: 1, msg: '没有查到路由信息'}
  })
  await next()
  ctx.body = ret
})
//获取单个产品信息
router.get('/getgood', async (ctx, next) => {
  let state = false;
  let ret = {}
  await ctx.util.mysql('select',`select * from mart.goods where id = "${ctx.query.id}"`).then((results) => {
    results[0].images = JSON.parse(results[0].images)
    ret = {
      code: 0,
      data: results
    }
  }).catch(err=>{
    if(err.status === 405){
      ret = {
        code: 1,
        msg: '未找到您要的商品'
      }
    }
  })
  await next()
  ctx.body = ret
})
router.get('/login', async (ctx, next) => {
  const {username, passwd} = ctx.query;
  let ret = {code: 3,token: '', data: null}
  await ctx.util.mysql('select',`select * from mart.user where name = "${username}" and password = "${passwd}"`).then((results) => {
      if(results.length > 0){
        const md5 = crypto.createHash('md5')
        md5.update(username)
        ret.token = md5.digest('hex')
        ctx.util.mysql(`update mart.user token = "${ret.token}" where name = "${username}" and password = "${passwd}"`)
        ret.code = 0
        ret.data = results[0]
      }else{
        ret.code = 1;
        ret.data = {msg: '服务端用户信息不正确'}
      }
    }
  )
  await next()
  ctx.body = ret
})
//获取商品列表
router.get('/goods', async (ctx, next) => {
  let keys=[], columns, goods={}, slider=[];
  await ctx.util.mysql('select', 'select * from mart.column').then((results)=>{
    columns = [...results]
  })
  
  for(let i = 0; i<columns.length; i++){
    await ctx.util.mysql('select', `select * from mart.${columns[i].name}`).then((results)=>{
      goods[columns[i].name] = results
    })
    keys = [...keys, columns[i].name]
  }

  await ctx.util.mysql('select', `select * from mart.slider`).then((results)=>{
    slider = [...results]
  })
  ctx.body = {code: '0', keys, data: goods, slider}
})
//检测用户名
router.get('/check', async(ctx, next)=>{
  let ret;
  await ctx.util.mysql('select', `select * from mart.user where name = "${ctx.query.username}"`).then((results)=>{
    ret = {code: '0', data: results[0]}
  }).catch((results) => {
    ret = {code: '1', data: {message: '未找到用户'}}
  })
  await next()
  ctx.body = ret
})

// router.get('/delete', async(ctx, next) => {
//   let ret;
//   await ctx.util.mysql('delete', `delete from  mart.user where name='g.jun'`).then((results)=>{
//     ret = {code: '0'}
//   }).catch(()=>{
//     ret = {code: '1'}
//   })
//   await next()
//   ctx.body = ret
// })
module.exports = router
