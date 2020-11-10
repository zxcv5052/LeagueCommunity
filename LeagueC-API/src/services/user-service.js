const conn = require('../database/conn')
const userQuery = require('../queries/user-query');

/**
 * 회원 가입 할 때 Email 존재 여부
 * @param email
 * @returns TRUE : 새로 만든 계정 / FALSE : 이미 Email 존재.
 */
exports.validEmail = async (email) =>{
    try{
        const flag = conn.execute(userQuery.getUserByEmail, [email]);

        return flag[0].length === 0;

    }catch (e) {
        return false;
    }
}
/**
 * 회원 가입 할 때 NickName 존재 여부
 * @param name
 * @returns TRUE : 새로 만드는 NickName / FALSE : 이미 존재 하는 NickName
 */
exports.validName = async (name) =>{
    try{
        const flag = conn.execute(userQuery.getUserByName, [name]);

        return flag[0].length === 0;
    }catch (e) {
        return false;
    }
}

/**
 * 회원 가입
 * @param user
 * @returns TRUE : 생성 성공 / false : 생성 실패
 */
exports.saveUser = async (user)=> {
    try{
        await conn.execute(userQuery.saveUser, user);

        return true;
    }catch (e) {
        return false;
    }
};