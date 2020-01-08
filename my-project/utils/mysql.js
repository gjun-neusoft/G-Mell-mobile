const mysql = require('mysql')
const _host = '127.0.0.1'
const mysqlConfig = mysql.createPool(
    {
        host: _host,
        port: '3306',
        user: 'root',
        password: '123456'
    }          
)

let query = (type, sql, callback, host = _host) => {
    return new Promise((resolve, reject)=>{
        switch(type){
            //  查
            case 'select':
                mysqlConfig.getConnection((err, connection) => {
                    connection.query(sql, (err, results, fields) => {
                        // results && callback(err, results)
                        if(err){
                            throw(err)
                        }else{
                            results.length > 0? resolve(results): reject({status: 405})
                        }
                        //请求成功后数据流关闭
                        connection.release()
                    })
                })
            break;
            // 增
            case 'insert':
                mysqlConfig.getConnection((err, connection) => {
                    connection.query(sql, (err, results, fields) => {
                        if(err){
                            throw(err)
                        }else{
                            results ? resolve(results): reject()
                        }
                        connection.release()
                    })

                })
            break;
            //  改
            case 'mod':
                mysqlConfig.getConnection((err, connection) => {
                    connection.query(sql, (err, results, fields) => {
                        if(err){
                            throw(err)
                        }else{
                            results ? resolve(results): reject()
                        }
                        connection.release()
                    })
                })
            break;
            //  删除
            case 'delete': 
                mysqlConfig.getConnection((err, connection) => {
                    connection.query(sql, (err, results, fields) => {
                        if(err){
                            throw(err)
                        }else{
                            results ? resolve(results) : reject()
                        }
                    })
                })
            break;
        }
    })
}
module.exports = query