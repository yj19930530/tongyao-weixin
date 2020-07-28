<template>
  <view id="contract-container">
    <text class="fc-999 fz-14 mr-l-30">视频上传</text>
    <view class="video-box mr-l-30 fl-cen mr-t-30" v-if="video===''">
      <text class="iconfont icon-bofang fz-60"></text>
    </view>
    <video class="video-style mr-l-30 mr-t-30" v-else :src="video"></video>
    <view class="book-img-content">
      <view class="img-box mr-l-30" v-if="img!==''">
        <image class="img-style" mode="aspectFit" :src="img" />
        <view class="delete-img fl-cen" @tap="deleteImage">
          <text class="fz-10 fc-fff">X</text>
        </view>
      </view>
      <view v-else class="book-img fl-co mr-l-30" @tap="uploadBook">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">上传照片</text>
      </view>
    </view>
    <view class="cofim-btn fl-cen">
      <text class="fz-20 fc-fff le-sping">提交</text>
    </view>
  </view>
</template>
<script>
const { updataImg } = require("../../utils/lib/common.js");
export default {
  data() {
    return {
      img: "",
      video: "",
    };
  },
  methods: {
    deleteImage() {
      this.img = "";
    },
    async uploadBook() {
      let data = await updataImg();
      console.log(data);
      this.img = data.imgPath;
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
  padding: 42rpx 0;
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
  right: 0;
  top: 0;
  width: 30rpx;
  height: 30rpx;
  background-color: red;
  z-index: 99;
  border-radius: 50%;
}
.img-box {
  width: 224rpx;
  height: 224rpx;
  border: 2px solid #ffffff;
  position: relative;
  background-color: #f8f8f8;
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