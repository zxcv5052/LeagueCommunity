const conn = require('../database/conn');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userQuery = require('../queries/user-query');

/**
 * 회원 가입
 * @param user
 * @returns TRUE : 생성 성공 / false : 생성 실패
 */
exports.saveUser = async (user)=> {
    try{
        const {email, password, name} = user;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const format = [email, hash, name];
        await conn.query(userQuery.saveUser, format);

        return true;
    }catch (e) {
        return false;
    }
};

/**
 * Login User
 * @param user
 * @returns
 */
exports.login = async (user, secret) => {
    try{
        const { email, password } = user;
        const u = await conn.query(userQuery.getUserByEmail, [email]);

        if(u[0].length === 0){
            return null;
        }else{
            const encryption = u[0][0].password;
            const isMatch = await bcrypt.compare(password, encryption);
            if(isMatch) {
                  const p = async function f() {
                    const jwtToken = await jwt.sign(
                        {
                            _id: u[0][0].email,
                            username: u[0][0].name,
                            admin: u[0][0].role
                        },
                        secret,
                        {
                            expiresIn: '7d',
                            issuer: 'league-community',
                            subject: 'userInfo'
                        });
                    return jwtToken;
                }();
                  return p;
            } else {
                return null;
            }
        }
    }catch (e) {
        return null;
    }
}