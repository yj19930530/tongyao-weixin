const { postRequest } = require('../../utils/lib/request');
// 登录
const userLogin = (data) => postRequest('/login', data);
// 首页
const getOrderList = (data) => postRequest('/busOrder/getPage', data);

module.exports = {
    getOrderList,
    userLogin
}
