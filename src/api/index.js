const { common } = require('../utils/index');
const homeApi = require('./module/home');
const apiObj = {};
apiObj.extend = function (copy) {
    return common.extend(this, copy)
}
apiObj.extend(homeApi);
module.exports = apiObj;