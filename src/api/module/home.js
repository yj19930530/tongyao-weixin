const { postRequest } = require('../../utils/lib/request');
// 登录
const userLogin = (data) => postRequest('/login', data, 'login');
// 首页
const getOrderList = (data) => postRequest('/busOrder/getPage', data);
// 获取数据字典
const getDic = (data) => postRequest('/sysDicInfo/getPage', data);
// 新增订单
const addOrder = (data) => postRequest('/busApply/saveBatch', data);
// 获取订单详情
const getOrderDetails = (data) => postRequest('/busApply/get', data);
// 新增图片资料
const addImgData = (data) => postRequest('/busCustomer/uploadOtherImg', data);
// 删除订单
const deleteOrder = (data) => postRequest('/busOrder/delete', data);
module.exports = {
    getOrderList,
    userLogin,
    getDic,
    addImgData,
    addOrder,
    deleteOrder,
    getOrderDetails
}
