// 请求
// const token = 
const { http } = require('../../config/develop');
const { extend } = require('../lib/common');
const { toast, common } = require('../index');
function uniRequest() { };
uniRequest._extend = function (copy) {
    return extend(this, copy)
}
uniRequest._extend({
    postRequest(url, data = {}, type) {
        let header = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        const token = common.getData('token')
        switch (type) {
            case 'login': {
                break;
            }
            default: {
                Object.assign(header, {
                    'token': token,
                    // 'content-type': 'application/json;charset=UTF-8'
                })
                break;
            }
        }
        return new Promise((resolve, reject) => {
            uni.request({
                url: http + url,
                data: data,
                method: 'post',
                header: header,
                success: (res) => {
                    switch (res.data.code) {
                        case 0: {
                            resolve(res.data);
                            break
                        }
                        case -100: {
                            uni.showModal({
                                title: '提示',
                                content: res.data.msg,
                                showCancel: false,
                                confirmText: '返回登录',
                                success: function () {
                                    uni.reLaunch({
                                        url: "/pages/page/login"
                                    })
                                }
                            });
                            uni.hideLoading();
                            break
                        }
                        default: {
                            toast.showToast(res.data.msg)
                            resolve(res.data);
                            break
                        }
                    }
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }
})
module.exports = uniRequest;