const router = require('koa-router')()

router.prefix('/api')

router.post('/order', async (ctx, next)=>{
    const datas = ctx.request.body
    let insertData = ()=>{
        let ret = {}
        datas.cart.map(data=>{
            ctx.util.mysql('select', `select * from mart.cart where id = '${data.id}'`).then((result)=>{
                ctx.util.mysql('mod', `update mart.cart set num = ${result[0].num + data.cartCount} where id = '${data.id}'`).then((res)=>{
                    ret.code = 0
                })
            }).catch(err=>{
                if(err.status === 405){
                    ctx.util.mysql('insert', `insert into mart.cart (id, num) values('${data.id}','${data.cartCount}')`).then((res)=>{
                        ret.code = 0
                    })
                }
            })
        })
        return ret
    }
    let ret = await insertData()
    await next()
    ctx.body = ret
})
module.exports = router