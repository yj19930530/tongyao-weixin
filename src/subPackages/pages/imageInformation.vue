<template>
  <view id="pic-container">
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">户口本照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">结婚证照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">离婚证照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">驾驶证照片（必填）</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">银行流水照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">微信流水照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">评估照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">前车主行驶证照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">前车主登记证照片</text>
    </view>
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
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">其他照片</text>
    </view>
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
    <!-- <view class="fl-cen filish-btn">
      <text class="fz-20 filish-btn-text fc-fff">完成</text>
    </view>-->
  </view>
</template>
<script>
const { updataImg } = require("../../utils/lib/common.js");
export default {
  data() {
    return {
      img: "",
    };
  },
  onLoad() {},
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
#pic-container {
  /* padding-bottom: 108rpx; */
}
.img-box {
  width: 224rpx;
  height: 224rpx;
  border: 2px solid #ffffff;
  position: relative;
  background-color: #f8f8f8;
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
  right: 0;
  top: 0;
  width: 30rpx;
  height: 30rpx;
  background-color: red;
  z-index: 99;
  border-radius: 50%;
}
</style>