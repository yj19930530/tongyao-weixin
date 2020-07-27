<template>
  <view id="order-container">
    <view class="order-item-box fl-bt" @tap="toLoan">
      <text class="mr-l-30 fz-15">贷款信息</text>
      <span class="iconfont icon-youjiantou fc-999 mr-r-30"></span>
    </view>
    <view class="order-item-box fl-bt" @tap="toPeople">
      <text class="mr-l-30 fz-15">贷款人信息</text>
      <span class="iconfont icon-youjiantou fc-999 mr-r-30"></span>
    </view>
    <view class="order-item-box fl-bt" @tap="toGong">
      <text class="mr-l-30 fz-15">共贷人信息</text>
      <span class="iconfont icon-youjiantou fc-999 mr-r-30"></span>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitOrder() {},
    toLoan() {
      uni.navigateTo({
        url: "/subPackages/pages/loanInformation",
      });
    },
    toPeople() {
      uni.navigateTo({
        url: "/subPackages/pages/peopleInformation",
      });
    },
    toGong() {
      uni.navigateTo({
        url: "/subPackages/pages/lederInformation",
      });
    },
  },
};
</script>
<style scoped>
#order-container {
  margin-top: 24rpx;
}
.order-item-box {
  height: 108rpx;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
}
.order-btn {
  width: 50%;
  height: 104rpx;
  color: #fff;
  font-size: 40rpx;
}
.btn-box {
  z-index: 99;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
.left-btn-back {
  background-color: #d8d8d8;
}
.right-btn-back {
  background-color: #0090d9;
}
</style>