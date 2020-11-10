const userService = require('../services/user-service');

// 회원가입 할 때 Nick Name 중복이 되는지 체크.
exports.validName = async function(request,response) {
    const flag = await userService.validName();
    if(flag) {
        response.send(true);
    }else{
        response.send(false);
    }
}

// Email 중복 체크
exports.validEmail = async function(request,response) {

    const flag = await userService.validEmail();
    if(flag) {
        response.send(true);
    }else{
        response.send(false);
    }
}