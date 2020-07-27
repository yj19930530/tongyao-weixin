<template>
  <view id="home-page-container">
    <view class="home-top-content">
      <image class="homg-back-img" src="../../static/back.png"></image>
      <view class="top-search-box">
        <text class="fz-18 fc-fff fw-bold">成都通耀汽车业务管理系统</text>
        <view class="search-box-style fl-acen mr-t-30" @tap="toSearch">
          <text class="iconfont icon-sousuo fz-17 fc-ac mr-l-30"></text>
          <text class="fz-15 fc-ac mr-l-30">搜索</text>
        </view>
      </view>
    </view>
    <div class="home-business-lsit fl-co">
      <businessItem v-for="item in 5" :key="item" :num="item" />
    </div>
    <div class="iconfont icon-tianjia fz-50 add-order-btn fc-009" @tap="addOrders"></div>
  </view>
</template>
<script>
const api = require("../../api/module/home.js");
const data = require("../../utils/index.js");
export default {
  data() {
    return {};
  },
  onLoad() {
    this.$api
      .home({
        id: 1,
      })
      .then((res) => {
        // console.log(res);
      });
  },
  methods: {
    addOrders() {
      uni.navigateTo({
        url: "/subPackages/pages/addOrders",
      });
    },
    toSearch() {
      uni.navigateTo({
        url: "/subPackages/pages/findPage",
      });
    },
  },
};
</script>
<style scoped>
.homg-back-img {
  width: 100%;
  height: 100%;
}
.home-top-content {
  position: relative;
  width: 100%;
  height: 404rpx;
}
.top-search-box {
  position: absolute;
  right: 0;
  bottom: 120rpx;
  left: 30rpx;
}
.search-box-style {
  height: 64rpx;
  width: 690rpx;
  border-radius: 64rpx;
  background-color: #fff;
}
.home-business-lsit {
  z-index: 9;
  position: relative;
  top: -108rpx;
}
.business-lsit-box {
  width: 714rpx;
}
.business-box-card {
  margin-bottom: 10rpx;
  width: 100%;
  margin-top: 10rpx;
  box-shadow: 0 0 8px #999;
  border-radius: 16rpx;
  background-color: #fff;
}
.card-content {
  padding: 32rpx 28rpx 36rpx 40rpx;
}
.left-text-style {
  width: 160rpx;
}
.item-look-details {
  width: 86rpx;
  height: 40rpx;
  border-radius: 8rpx;
  background-color: #0090d9;
}
.item-look-details2 {
  width: 176rpx;
  height: 40rpx;
  border-radius: 8rpx;
  background-color: #0090d9;
}
.item-look-details3 {
  width: 126rpx;
  height: 40rpx;
  border-radius: 8rpx;
  background-color: #0090d9;
}
.item-rifht-look {
  /* line-height: 2; */
  width: 500rpx;
  flex-wrap: wrap;
}
.back-dan {
  margin-left: 14rpx;
  width: 146rpx;
  height: 60rpx;
  border: 1px solid #999999;
  border-radius: 60rpx;
}
.add-order-btn {
  position: fixed;
  right: 52rpx;
  bottom: 136rpx;
  z-index: 9;
  background-color: #fff;
  border-radius: 50%;
}
</style>