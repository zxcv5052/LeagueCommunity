const conn = require('../database/conn')
const userQuery = require('../queries/user-query');

/**
 * 회원 가입
 * @param user
 * @returns TRUE : 생성 성공 / false : 생성 실패
 */
exports.saveUser = async (user)=> {
    try{
        const {email, password, name} = user;
        const format = [email, password, name];
        await conn.execute(userQuery.saveUser, format);

        return true;
    }catch (e) {
        console.log(e)
        return false;
    }
};

/**
 * Login User
 * @param user
 * @returns
 */
exports.login = async (user) => {
    try{
        const { email, password } = user;
        const format = [email, password];
        const u = await conn.execute(userQuery.getLoginUser, format);
        return u[0].length !== 0;
    }catch (e) {
        return false;
    }
}