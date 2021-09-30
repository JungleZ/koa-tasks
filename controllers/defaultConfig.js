//defaultConfig.js
const config = {
    // 数据库配置
    database: {
        DATABASE: 'test', //数据库名称
        USERNAME: 'root', //mysql用户名
        PASSWORD: 'root', //mysql密码
        PORT: '3306', //mysql端口号
       // HOST: '192.168.1.5' //服务器ip
	    HOST: 'localhost' //服务器ip
    }
}

module.exports = config