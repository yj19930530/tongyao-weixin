<template>
  <view id="pic-container">
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">户口本照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="huImg!==''">
        <image class="img-style" mode="aspectFit" :src="huImg" @tap="_previewImage(huImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('hu')">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('hu')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">结婚证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="jhImg!==''">
        <image class="img-style" mode="aspectFit" :src="jhImg" @tap="_previewImage(jhImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('jh')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('jh')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">离婚证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="lhImg!==''">
        <image class="img-style" mode="aspectFit" :src="lhImg" @tap="_previewImage(lhImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('lh')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('lh')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">驾驶证照片（必填）</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="jsImg!==''">
        <image class="img-style" mode="aspectFit" :src="jsImg" @tap="_previewImage(jsImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('jsz')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('jsz')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">银行流水照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="yhlsImg!==''">
        <image class="img-style" mode="aspectFit" :src="yhlsImg" @tap="_previewImage(yhlsImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('yhls')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('yhls')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">微信流水照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="wxlsImg!==''">
        <image class="img-style" mode="aspectFit" :src="wxlsImg" @tap="_previewImage(wxlsImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('wxls')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('wxls')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">评估照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="pgImg!==''">
        <image class="img-style" mode="aspectFit" :src="pgImg" @tap="_previewImage(pgImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('pg')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('pg')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">前车主行驶证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="qxszImg!==''">
        <image class="img-style" mode="aspectFit" :src="qxszImg" @tap="_previewImage(qxszImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('qxsz')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('qxsz')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">前车主登记证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="qdjzImg!==''">
        <image class="img-style" mode="aspectFit" :src="qdjzImg" @tap="_previewImage(qdjzImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('qdjz')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('qdjz')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">其他照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="otherImg!==''">
        <image class="img-style" mode="aspectFit" :src="otherImg" @tap="_previewImage(otherImg)" />
        <view class="delete-img fl-cen" @tap="deleteImage('other')">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook('other')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="fl-cen filish-btn" @tap="savePage">
      <text class="fz-20 filish-btn-text fc-fff">保存</text>
    </view>
  </view>
</template>
<script>
const { updataImg } = require("../../utils/lib/common.js");
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      huImg: "", // 户口照片
      jhImg: "", // 结婚
      lhImg: "", // 离婚
      jsImg: "", // 驾驶证
      yhlsImg: "", // 银行流水
      wxlsImg: "", // 微信流水
      pgImg: "", // 评估
      qxszImg: "", // 前车主行驶证
      qdjzImg: "", // 前车主登记证
      otherImg: "", // 其他
      form: {
        hkbImg: {}, // 户口
        jhzImg: {}, // 结婚照
        lhzImg: {}, // 离婚照
        jszImg: {}, // 驾驶证 （必填）
        yhlsImg: {}, // 银行流水
        weixinLsImg: {}, // 微信流水
        assessmentImg: {}, // 评估
        beforeloginImg: {}, // 前车主行驶证照片
        beforeCardImg: {}, // 前车主登记证照片
        otherImg: {}, // 其他照片
      },
    };
  },
  onLoad() {
    const data = uni.getStorageSync("other");
    if (data) {
      this.huImg = data.hkbImg.path;
      this.jhImg = data.jhzImg.path;
      this.lhImg = data.lhzImg.path;
      this.jsImg = data.jszImg.path;
      this.yhlsImg = data.yhlsImg.path;
      this.wxlsImg = data.weixinLsImg.path;
      this.pgImg = data.assessmentImg.path;
      this.qxszImg = data.beforeloginImg.path;
      this.qdjzImg = data.beforeCardImg.path;
      this.otherImg = data.otherImg.path;
      this.form = data;
    }
  },
  methods: {
    // 预览图片
    _previewImage(img) {
      uni.previewImage({
        urls: [img],
        current: img,
      });
    },
    savePage() {
      if (this.jsImg === "") return toast.showToast("请上传驾驶证");
      uni.setStorageSync("other", this.form);
      uni.showModal({
        title: "提示",
        content: "保存成功",
        showCancel: false,
        confirmText: "返回",
        success: function (res) {
          uni.navigateBack();
        },
      });
    },
    deleteImage(name) {
      switch (name) {
        case "hu": {
          this.huImg = "";
          this.form.hkbImg = {};
          break;
        }
        case "jh": {
          this.jhImg = "";
          this.form.jhzImg = {};
          break;
        }
        case "lh": {
          this.lhImg = "";
          this.form.lhzImg = {};
          break;
        }
        case "jsz": {
          this.jsImg = "";
          this.form.jszImg = {};
          break;
        }
        case "yhls": {
          this.yhlsImg = "";
          this.form.yhlsImg = {};
          break;
        }
        case "wxls": {
          this.wxlsImg = "";
          this.form.weixinLsImg = {};
          break;
        }
        case "pg": {
          this.pgImg = "";
          this.form.assessmentImg = {};
          break;
        }
        case "qxsz": {
          this.qxszImg = "";
          this.form.beforeloginImg = "";
          break;
        }
        case "qdjz": {
          this.qdjzImg = "";
          this.form.beforeCardImg = {};
          break;
        }
        case "other": {
          this.otherImg = "";
          this.form.otherImg = {};
          break;
        }
        default: {
          break;
        }
      }
    },
    async uploadBook(name) {
      const data = await updataImg();
      switch (name) {
        case "hu": {
          this.huImg = data.imgPath;
          this.form.hkbImg = data.imgObj;
          break;
        }
        case "jh": {
          this.jhImg = data.imgPath;
          this.form.jhzImg = data.imgObj;
          break;
        }
        case "lh": {
          this.lhImg = data.imgPath;
          this.form.lhzImg = data.imgObj;
          break;
        }
        case "jsz": {
          this.jsImg = data.imgPath;
          this.form.jszImg = data.imgObj;
          break;
        }
        case "yhls": {
          this.yhlsImg = data.imgPath;
          this.form.yhlsImg = data.imgObj;
          break;
        }
        case "wxls": {
          this.wxlsImg = data.imgPath;
          this.form.weixinLsImg = data.imgObj;
          break;
        }
        case "pg": {
          this.pgImg = data.imgPath;
          this.form.assessmentImg = data.imgObj;
          break;
        }
        case "qxsz": {
          this.qxszImg = data.imgPath;
          this.form.beforeloginImg = data.imgObj;
          break;
        }
        case "qdjz": {
          this.qdjzImg = data.imgPath;
          this.form.beforeCardImg = data.imgObj;
          break;
        }
        case "other": {
          this.otherImg = data.imgPath;
          this.form.otherImg = data.imgObj;
          break;
        }
        default: {
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
#pic-container {
  padding-bottom: 108rpx;
}
.img-box {
  width: 224rpx;
  height: 224rpx;
  border: 2px solid #ffffff;
  position: relative;
  background-color: #333;
}
.people-infor {
  width: 100%;
  height: 80rpx;
}
.book-img {
  width: 224rpx;
  height: 224rpx;
  border-radius: 16rpx;
  border: 2px solid #999999;
}
.book-img-content {
  padding: 42rpx 0;
  background-color: #fff;
}
.img-style {
  width: 224rpx;
  height: 224rpx;
  border-radius: 16rpx;
}
.delete-img {
  position: absolute;
  right: -10rpx;
  top: -10rpx;
  width: 40rpx;
  height: 40rpx;
  background-color: red;
  z-index: 99;
  border-radius: 50%;
}
.filish-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.filish-btn-text {
  letter-spacing: 20rpx;
}
</style>