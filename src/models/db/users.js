const conn = require('./conn');
const AUTH, { encryptPassword, }

const USER = {
    create: (userInfo) => {
        let { password } = userInfo
        AUTH.encryptPassword(password).then(result => {
            userInfo.hashword = result
            userInfo.password = null
            return conn.query(`INSERT INTO USERS (email, username, hashword) VALUES (email, username, hashword)`, userInfo)            
        })
    }

};

module.exports {
    create: USER.create
}