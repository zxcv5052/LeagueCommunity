const validationService = require('../services/validation-service');

// 회원가입 할 때 Nick Name 중복이 되는지 체크.
exports.validName = async function(request,response) {
    const { name } = request.body;
    const flag = await validationService.validName(name);
    if(flag) {
        response.send(true);
    }else{
        response.send(false);
    }
}

// Email 중복 체크
exports.validEmail = async function(request,response) {
    const email = request.body;
    const flag = await validationService.validEmail(email);
    if(flag) {
        response.send(true);
    }else{
        response.send(false);
    }
}
