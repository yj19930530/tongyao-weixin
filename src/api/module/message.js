const { postRequest } = require('../../utils/lib/request');
// 获取消息中心列表
const getMessageCenterList = (data) => postRequest('/busOrder/getPageByYwYHistory', data);
module.exports = {
    getMessageCenterList
}