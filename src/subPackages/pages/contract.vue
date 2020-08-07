<template>
  <view id="contract-container">
    <text class="fc-999 fz-14 mr-l-30">视频上传</text>
    <view class="video-box mr-l-30 fl-cen mr-t-30" v-if="mp4Info===''" @tap="uploadBook('vi')">
      <text class="iconfont icon-bofang fz-60"></text>
    </view>
    <video class="video-style mr-l-30 mr-t-30" v-else :src="mp4Info"></video>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in dcbcImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item" @tap="_previewImage(item)" />
        <view class="delete-img fl-cen" @tap="deleteImage('he',index)">
          <text class="fz-14 fc-fff">X</text>
        </view>
      </view>
      <view v-if="dcbcImg.length<5" class="book-img fl-co" @tap="uploadBook('he')">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="cofim-btn fl-cen" @tap="submitForm">
      <text class="fz-20 fc-fff le-sping">提交</text>
    </view>
  </view>
</template>
<script>
const { updataImg, updataVideo } = require("../../utils/lib/common.js");
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      mp4Info: "",
      dcbcImg: [],
      form: {
        mp4Info: "",
        dcbcImg: [],
      },
    };
  },
  onLoad(obj) {
    this.custId = obj.id;
  },
  methods: {
    // 预览图片
    _previewImage(img) {
      uni.previewImage({
        urls: [img],
        current: img,
      });
    },
    submitForm() {
      if (this.mp4Info === "") return toast.showToast("请上传视频");
      if (this.dcbcImg === "") return toast.showToast("请上传合同资料");
      this.form.custId = this.custId;
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
    deleteImage(type, index) {
      switch (type) {
        case "he": {
          this.dcbcImg.splice(index, 1);
          this.form.dcbcImg.splice(index, 1);
          break;
        }
        case "vi": {
          this.mp4Info = "";
          this.form.mp4Info = "";
          break;
        }
        default: {
          break;
        }
      }
    },
    async uploadBook(type) {
      switch (type) {
        case "he": {
          let data = await updataImg();
          data.forEach((item) => {
            this.dcbcImg.push(item.imgPath);
            this.form.dcbcImg.push(item.imgObj);
          });
          break;
        }
        case "vi": {
          let data = await updataVideo();
          this.mp4Info = data.imgPath;
          this.form.mp4Info = data.imgObj;
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
#contract-container {
  height: 100%;
  padding-top: 30rpx;
  background-color: #ffffff;
}
.video-box {
  width: 690rpx;
  height: 394rpx;
  border-radius: 16rpx;
  background-color: #f8f8f8;
  border: 2px solid #999;
}
.book-img-content {
  overflow: hidden;
  padding: 42rpx 30rpx;
  background-color: #fff;
}
.book-img {
  width: 224rpx;
  height: 224rpx;
  border-radius: 16rpx;
  border: 2px solid #999999;
}
.video-style {
  width: 690rpx;
  height: 394rpx;
  border-radius: 16rpx;
  border: 2px solid #999;
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
  width: 30rpx;
  height: 30rpx;
  background-color: red;
  z-index: 99;
  border-radius: 50%;
}
.img-box {
  float: left;
  width: 224rpx;
  height: 224rpx;
  border: 2px solid #ffffff;
  position: relative;
  background-color: #333333;
}
.cofim-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.le-sping {
  letter-spacing: 14rpx;
}
</style>