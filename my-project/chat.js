const koa = require('koa')
const app = new koa()
const server = require('http').Server(app.callback())
const io = require('socket.io')(server)
const port = 8081
const serverListen = ()=>{
    server.listen(process.env.PORT || port, ()=>{
        console.log('app run at : http://localhost:' + port);
    })
}
let Map = {}
//查找其他 用户
const findUser = (uid)=>{
    let ret = []
    Object.keys(Map).forEach((key)=>{
        if(key !== uid){
            ret.push(Map[key])
        }
    })
    return ret
}
let receiveId = '',//接收id
    sendId = '';//发送id
const connection = ()=>{
    io.on('connection', (socket)=>{
        socket.emit('connect')
        socket.on('sendUser', data=>{
            if(!Map[data.uid]){
                Map[data.uid] = {
                    sid: socket.id,
                    ...data
                }
            }
            sendId = socket.id
            socket.emit('reply', {...Map[data.uid], txt: '已上线',state: 1})
            const reUser = findUser(data.uid)
            if(reUser.length<=0){
                return
            }else{
                receiveId = reUser[0].sid
                io.to(receiveId).emit('reply', {...Map[data.uid], txt: '已上线',state: 0})
            }

        })
        
    })
}
const chat = ()=>{
    serverListen()
    connection()
}
module.exports = chat