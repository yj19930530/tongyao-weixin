// 常用方法
const _ = require('underscore');
const { http } = require('../../config/develop');
const token = getData('token');
/**
 * 对象合并
 * @param target object 继承目标
 * @param copy object 复制对象
 * @param deep boolean 是否深拷贝
 * @returns {*}
 */
function extend(target, copy, deep) {
    if (deep) {
        return _.extend({}, target, copy)
    } else {
        for (let key in copy) {
            target[key] = copy[key];
        }
        return target;
    }
}
// 浅克隆
function objCopy(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}
// 深克隆多层
function cloneData(data) {
    const type = Object.prototype.toString.call(data)
    if (type === "[object Object]") {
        const newObj = {}
        Object.keys(data).forEach(key => newObj[key] = cloneData(data[key]))
        return newObj;
    } else if (type === "[object Array]") {
        return data.map(item => cloneData(item))
    }
    return data;
}
// 缓存数据
function saveData(key, data) {
    uni.setStorageSync(key, data);
}
// 获取缓存数据
function getData(key) {
    return uni.getStorageSync(key)
}
// 上传图片
function updataImg() {
    return new Promise((resolve, reject) => {
        uni.chooseImage({
            count: 1,
            sizeType: 'compressed',
            success: res => {
                uni.uploadFile({
                    url: http + '/wechatUpload/picture',
                    name: 'file',
                    filePath: res.tempFilePaths[0],
                    header: { 'token': token },
                    success: (r) => {
                        let imgObj = JSON.parse(r.data).body;
                        resolve({
                            imgPath: res.tempFilePaths[0],
                            imgObj: imgObj[0].url
                        })
                    }
                });
            },
            fail: () => {
                reject(false)
            }
        })
    })

}
// 上传视频
function updataVideo() {
    return new Promise((resolve, reject) => {
        uni.chooseVideo({
            count: 1,
            success: res => {
                resolve(res)
            },
            fail: () => {
                reject(false)
            }
        })
    })

}
module.exports = {
    objCopy,
    cloneData,
    extend,
    saveData,
    getData,
    updataImg,
    updataVideo,
    _,
}