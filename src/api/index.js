const { common } = require('../utils/index');
const homeApi = require('./module/home');
const messageApi = require('./module/message');
const apiObj = {};
apiObj.extend = function (copy) {
    return common.extend(this, copy)
}
apiObj.extend(homeApi);
apiObj.extend(messageApi);
module.exports = apiObj;