"use strict"

const userService = require('../services/user-service');

// 회원가입
exports.saveUser = async function(request,response) {
    const user = request.body;
    const flag = await userService.saveUser(user);
    if(flag) {
        response.send(true);
    }else{
        response.send(false);
    }
}

// Login 확인
exports.loginUser = async function(request,response) {
    const user = request.body;
    const flag = await userService.login(user);
    if(flag) {
        response.send(true);
    }else{
        response.send(false);
    }
}

// 경고를 많이 먹은 사람 Restrict
exports.restrictUser = async function(request,response) {

}