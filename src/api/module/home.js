const { postRequest } = require('../../utils/lib/request');
// 登录
const userLogin = (data) => postRequest('/login', data);
// 首页
const home = (data) => postRequest('/sysDept/get', data);
module.exports = {
    home,
    userLogin
}
