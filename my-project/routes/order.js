const router = require('koa-router')()

router.prefix('/api')

router.get('/getOrderGoods',async (ctx, next)=>{
    let carts = [], goodsById = [], ret = [], orderid='', user={}
    orderid = ctx.query.orderid;
    if(orderid){
        //请求带有orderid，从order列表过来的
    }else{
        await ctx.util.mysql('select', 'select * from mart.cart').then(res=>{
            ctx.util.mysql('delete', 'truncate table mart.cart')
            carts=res
        })
        //到goods表里查到对就商品并取出
        const getGoodsById = async ()=>{
            let result = []
            for(let i=0; i<carts.length; i++){
                await ctx.util.mysql('select', `select * from mart.goods where id = '${carts[i].id}'`).then(res=>{
                    result.push({...carts[i], ...res[0]})
                })
            }
            return result
        }
        goodsById = await getGoodsById()
        //生成订单ID
        const orderId = (new Date()).valueOf()
        for(let i = 0; i<goodsById.length; i++){
            let image = JSON.parse(goodsById[i].images)[0]
            await ctx.util.mysql('insert', `insert into mart.orderlist values("${orderId}", "${goodsById[i].id}", "${goodsById[i].title}", "${goodsById[i].desc}", "${goodsById[i].price}", "${goodsById[i].num}", "${image.img}", "1")`).then(res=>{
                ret.push({orderid: orderId, id: goodsById[i].id, title: goodsById[i].title, desc: goodsById[i].desc, price: goodsById[i].price, num: goodsById[i].num, img: image.img, state: goodsById[i].state})
            })
        }
        //订单用户信息，包括地址、电话等
        let userdata
        await ctx.util.mysql('select', 'select * from mart.user').then(res=>{
            userdata = res[0]
           
        })
        await ctx.util.mysql('insert', `insert into mart.orderuserinfo values("${userdata.name}","${userdata.phone}","${userdata.address}","${orderId}")`).then(res=>{
            user = {
                name: userdata.name,
                address: userdata.address,
                phone: userdata.phone,
                orderid
            }
        })
    }
    await next()
    ctx.body = {code: 0, data: {data: ret, user}}
})
router.post('/cancelOrder', async (ctx, next)=>{
    const orderid = ctx.request.body.orderid
    let ret
    await ctx.util.mysql('delete', `delete from mart.orderlist where orderid = "${orderid}"`).then(res=>{
        ret = '删除成功'
    })
    await ctx.util.mysql('delete', `delete from mart.orderuserinfo where orderid = "${orderid}"`).then(res=>{
        ret = '删除成功'
    })
    await next()
    ctx.body = {code: 0, message: ret}
})
router.post('/setPayState', async (ctx, next)=>{
    const {state, orderid} = ctx.request.body
    let ret
    await ctx.util.mysql('mod', `update mart.orderlist set state = '${state}' where orderid = '${orderid}'`).then(res=>{
        if(state == 0) {
            ret = {code: 0, msg: '支付成功'}
        }else{
            ret = {code: 1, msg: '取消支付'}
        }
    })
    await next()
    ctx.body = ret
})
router.post('/setOrderAddress', async (ctx, next)=>{
    const {address, orderid} = ctx.request.body
    let ret
    await ctx.util.mysql('mod', `update mart.orderuserinfo set address = "${address}" where orderid = "${orderid}"`).then(res=>{
        ret = {
            code: 0,
            message: '修改成功'
        }
    })
    await next()
    ctx.body = ret

})
module.exports = router