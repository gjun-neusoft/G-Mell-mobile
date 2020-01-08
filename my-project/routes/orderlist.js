const router = require('koa-router')()

router.prefix('/api')

router.get('/getOrderList', async (ctx, next)=>{
    let ret
    await ctx.util.mysql('select', `select * from mart.orderlist`).then(res=>{
        let arr_res = [], end_res = {}
        for(let i=0; i<res.length; i++){
            const first = res[i]
            for(let j=0; j<res.length; j++){
                if(first.orderid === res[j].orderid){
                    arr_res.push(res[j])
                }
            }
            end_res[arr_res[0].orderid]=[...arr_res]
            arr_res = []
        }
        ret = {
            code: 0,
            data: end_res
        }
    })
    await next()
    ctx.body = ret
})
module.exports = router

