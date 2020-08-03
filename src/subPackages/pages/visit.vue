<template>
  <view id="pic-container">
    <view class="form-input-eart mr-t-20">
      <text class="fz-15 mr-l-30">访查报告</text>
      <textarea
        v-model="text"
        maxlength="300"
        class="textarea-style fz-14"
        placeholder-color="#999"
        placeholder="请输入访查报告"
      />
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">居住地照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in liveImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('jzd',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="liveImg.length<5" class="book-img fl-co" @tap="uploadBook('jzd')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">工作地照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in workImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('gzd',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="workImg.length<5" class="book-img fl-co" @tap="uploadBook('gzd')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">户口本照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in huImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('hu',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="huImg.length<5" class="book-img fl-co" @tap="uploadBook('hu')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">结婚证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in jhImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('jh',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="jhImg.length<5" class="book-img fl-co" @tap="uploadBook('jh')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">离婚证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in lhImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('lh',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="lhImg.length<5" class="book-img fl-co" @tap="uploadBook('lh')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">驾驶证照片（必填）</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in jsImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('jsz',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="jsImg.length<5" class="book-img fl-co" @tap="uploadBook('jsz')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">银行流水照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in yhlsImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('yhls',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="yhlsImg.length<5" class="book-img fl-co" @tap="uploadBook('yhls')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">微信流水照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in wxlsImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('wxls',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="wxlsImg.length<5" class="book-img fl-co" @tap="uploadBook('wxls')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">评估照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in pgImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('pg',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="pgImg.length<5" class="book-img fl-co" @tap="uploadBook('pg')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">其他照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in otherImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('other',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="otherImg.length<5" class="book-img fl-co" @tap="uploadBook('other')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="fl-cen filish-btn" @tap="savePage">
      <text class="fz-20 filish-btn-text fc-fff">提交</text>
    </view>
  </view>
</template>
<script>
const { updataImg } = require("../../utils/lib/common.js");
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      huImg: [], // 户口照片
      jhImg: [], // 结婚
      lhImg: [], // 离婚
      jsImg: [], // 驾驶证
      yhlsImg: [], // 银行流水
      wxlsImg: [], // 微信流水
      pgImg: [], // 评估
      qxszImg: [], // 前车主行驶证
      qdjzImg: [], // 前车主登记证
      otherImg: [], // 其他
      workImg: [], // 工作地
      liveImg: [], // 居住地
      form: {
        liveImg: [], // 居住地
        workImg: [], // 工作地
        hkbImg: [], // 户口本
        jhzImg: [], // 结婚证
        lhzImg: [], // 离婚证
        jszImg: [], // 驾驶证
        yhlsImg: [], // 银行流水
        weixinLsImg: [], // 微信流水
        assessmentImg: [], // 评估
        otherImg: [], // 其他
      },
      custId: "",
      text: "",
      custCode: "",
    };
  },
  onLoad(obj) {
    this.custId = obj.id;
    this.custCode = obj.custCode;
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
      this.form.custId = this.custId;
      this.$api.visitSet({
        businessAudit: this.text,
        state: 1,
        custCode: this.custCode,
      });

      this.$api.addImgData(this.form).then((res) => {
        if (res.code === 0) {
          uni.showModal({
            title: "提示",
            content: "提交成功",
            showCancel: false,
            confirmText: "返回",
            success: function (res) {
              uni.navigateBack();
            },
          });
        } else {
          toast.showToast("提交失败");
        }
      });
    },
    deleteImage(name, index) {
      switch (name) {
        case "hu": {
          this.huImg.splice(index, 1);
          this.form.hkbImg.splice(index, 1);
          break;
        }
        case "jh": {
          this.jhImg.splice(index, 1);
          this.form.jhzImg.splice(index, 1);
          break;
        }
        case "lh": {
          this.lhImg.splice(index, 1);
          this.form.lhzImg.splice(index, 1);
          break;
        }
        case "jsz": {
          this.jsImg.splice(index, 1);
          this.form.jszImg.splice(index, 1);
          break;
        }
        case "yhls": {
          this.yhlsImg.splice(index, 1);
          this.form.yhlsImg.splice(index, 1);
          break;
        }
        case "wxls": {
          this.wxlsImg.splice(index, 1);
          this.form.weixinLsImg.splice(index, 1);
          break;
        }
        case "pg": {
          this.pgImg.splice(index, 1);
          this.form.assessmentImg.splice(index, 1);
          break;
        }
        case "qxsz": {
          this.qxszImg.splice(index, 1);
          this.form.beforeloginImg.splice(index, 1);
          break;
        }
        case "qdjz": {
          this.qdjzImg.splice(index, 1);
          this.form.beforeCardImg.splice(index, 1);
          break;
        }
        case "other": {
          this.otherImg.splice(index, 1);
          this.form.otherImg.splice(index, 1);
          break;
        }
        case "gzd": {
          this.workImg.splice(index, 1);
          this.form.workImg.splice(index, 1);
          break;
        }
        case "jzd": {
          this.liveImg.splice(index, 1);
          this.form.liveImg.splice(index, 1);
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
          data.forEach((item) => {
            this.huImg.push(item.imgPath);
            this.form.hkbImg.push(item.imgObj);
          });
          break;
        }
        case "jh": {
          data.forEach((item) => {
            this.jhImg.push(item.imgPath);
            this.form.jhzImg.push(item.imgObj);
          });
          break;
        }
        case "lh": {
          data.forEach((item) => {
            this.lhImg.push(item.imgPath);
            this.form.lhzImg.push(item.imgObj);
          });
          break;
        }
        case "jsz": {
          data.forEach((item) => {
            this.jsImg.push(item.imgPath);
            this.form.jszImg.push(item.imgObj);
          });
          break;
        }
        case "yhls": {
          data.forEach((item) => {
            this.yhlsImg.push(item.imgPath);
            this.form.yhlsImg.push(item.imgObj);
          });
          break;
        }
        case "wxls": {
          data.forEach((item) => {
            this.wxlsImg.push(item.imgPath);
            this.form.weixinLsImg.push(item.imgObj);
          });
          break;
        }
        case "pg": {
          data.forEach((item) => {
            this.pgImg.push(item.imgPath);
            this.form.assessmentImg.push(item.imgObj);
          });
          break;
        }
        case "qxsz": {
          data.forEach((item) => {
            this.qxszImg.push(item.imgPath);
            this.form.beforeloginImg.push(item.imgObj);
          });
          break;
        }
        case "qdjz": {
          data.forEach((item) => {
            this.qdjzImg.push(item.imgPath);
            this.form.beforeCardImg.push(item.imgObj);
          });
          break;
        }
        case "other": {
          data.forEach((item) => {
            this.otherImg.push(item.imgPath);
            this.form.otherImg.push(item.imgObj);
          });
          break;
        }
        case "gzd": {
          data.forEach((item) => {
            this.workImg.push(item.imgPath);
            this.form.workImg.push(item.imgObj);
          });
          break;
        }
        case "jzd": {
          data.forEach((item) => {
            this.liveImg.push(item.imgPath);
            this.form.liveImg.push(item.imgObj);
          });
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
  float: left;
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
  padding: 42rpx 30rpx;
  background-color: #fff;
  overflow: hidden;
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
  z-index: 999;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.filish-btn-text {
  letter-spacing: 10rpx;
}
.form-input-eart {
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  background-color: #ffffff;
}
.textarea-style {
  margin-top: 20rpx;
  margin-left: 30rpx;
  padding: 20rpx 30rpx;
  width: 630rpx;
  height: 304rpx;
  border: 2px solid #999999;
  border-radius: 16rpx;
}
</style>