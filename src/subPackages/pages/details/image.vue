<template>
  <view id="pic-container">
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">户口本照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.hkbImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.hkbImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">居住地照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.liveImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.liveImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">工作地照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.workImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.workImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">结婚证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.jhzImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.jhzImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">离婚证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.lhzImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.lhzImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">驾驶证照片（必填）</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.jszImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.jszImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">银行流水照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.yhlsImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.yhlsImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">微信流水照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.weixinLsImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.weixinLsImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">评估照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.assessmentImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.assessmentImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">前车主行驶证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.beforeloginImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.beforeloginImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">前车主登记证照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.beforeCardImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.beforeCardImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">合同照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.dcbcImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.dcbcImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">其他照片</text>
    </view>
    <view class="book-img-content">
      <view class="img-box mr-r-30 mr-b-20" v-for="(item,index) in form.otherImg" :key="index">
        <image class="img-style" mode="aspectFit" :src="item.url" @tap="_previewImage(item.url)" />
      </view>
      <view v-if="form.otherImg.length===0" class="book-img fl-co">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">没有图片</text>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">视频</text>
    </view>
    <video v-for="(item,index) in form.mp4Info" :key="index" class="video-style mr-l-30 mr-t-30" :src="item.url"></video>
    <text class="fz-14 fc-999 mr-l-30">暂无视频</text>
  </view>
</template>
<script>
const { updataImg } = require("../../../utils/lib/common.js");
const { toast } = require("../../../utils/index");
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
        hkbImg: "", // 户口
        jhzImg: "", // 结婚照
        lhzImg: "", // 离婚照
        jszImg: "", // 驾驶证 （必填）
        yhlsImg: "", // 银行流水
        weixinLsImg: "", // 微信流水
        assessmentImg: "", // 评估
        beforeloginImg: "", // 前车主行驶证照片
        beforeCardImg: "", // 前车主登记证照片
        otherImg: "", // 其他照片
      },
      custId: "",
    };
  },
  onLoad(obj) {
    this.custId = obj.custId;
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.$api
        .getOtherImg({
          id:this.custId
        })
        .then((res) => {
          this.form = res.body;
        });
    },
    // 预览图片
    _previewImage(img) {
      uni.previewImage({
        urls: [img],
        current: img,
      });
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
  overflow: hidden;
  padding: 42rpx 30rpx;
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
  z-index: 999;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.filish-btn-text {
  letter-spacing: 10rpx;
}
.video-style {
  width: 690rpx;
  height: 394rpx;
  border-radius: 16rpx;
  border: 2px solid #999;
}
</style>