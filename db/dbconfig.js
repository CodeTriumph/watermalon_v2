// MySQL数据库连接配置模块
module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'Umph2014',
        database: 'test',
        port: 3306
    }
};

/**
 数据库建库建表语句
 CREATE TABLE customers
 (
 userid INT AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(10) NOT NULL,
 email VARCHAR(20) NOT NULL,
 mobile VARCHAR(11) NOT NULL
 );
 */