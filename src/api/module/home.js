const { postRequest } = require('../../utils/lib/request');
// 登录
const userLogin = (data) => postRequest('/login', data, 'login');
// 个人业务分页
const getOrderList = (data) => postRequest('/busOrder/getPageByYwY', data);
// 获取数据字典
const getDic = (data) => postRequest('/sysDicInfo/getPage', data);
// 新增订单
const addOrder = (data) => postRequest('/busApply/saveBatch', data);
// 获取订单详情
const getOrderDetails = (data) => postRequest('/busOrder/getAllInfo', data);
// 新增图片资料
const addImgData = (data) => postRequest('/busCustomer/uploadOtherImgByWechat', data);
// 获取去详细图片详情
const getOtherImg = (data) => postRequest('/busCustomer/getOtherImg', data);
// 删除订单
const deleteOrder = (data) => postRequest('/busOrder/delete', data);
// 修改订单
const editOrder = (data) => postRequest('/busApply/update', data);
// 查看电核
const getDhDetails = (data) => postRequest('/busDh/get', data);
// 确认电核
const comfimDh = (data) => postRequest('/busProcess/nextProcess', data);
// 查访
const visitSet = (data) => postRequest('/busDh/changeDhState', data);
// 提交订单
const confimOrderItem = (data) => postRequest('/busOrder/confirm', data);
// 垫款
const sendPayment = (data) => postRequest('/busPayment/sendPayment', data);
module.exports = {
    getOrderList,
    userLogin,
    getDic,
    addImgData,
    addOrder,
    deleteOrder,
    getOrderDetails,
    editOrder,
    getDhDetails,
    comfimDh,
    visitSet,
    getOtherImg,
    confimOrderItem,
    sendPayment
}
