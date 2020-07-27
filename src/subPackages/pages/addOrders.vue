<template>
  <view id="order-container">
    <view class="order-item-box fl-bt" @tap="toLoan">
      <text class="mr-l-30 fz-15">按贷款信息</text>
      <view class="fl-acen mr-r-30">
        <span class="fz-14 fc-999">未填写</span>
        <span class="iconfont icon-youjiantou fc-999"></span>
      </view>
    </view>
    <view class="order-item-box fl-bt" @tap="toPeople">
      <text class="mr-l-30 fz-15">贷款人信息</text>
      <view class="fl-acen mr-r-30">
        <span class="fz-14 fc-999">未填写</span>
        <span class="iconfont icon-youjiantou fc-999"></span>
      </view>
    </view>
    <view class="order-item-box fl-bt" @tap="toGong">
      <text class="mr-l-30 fz-15">共贷人信息</text>
      <view class="fl-acen mr-r-30">
        <span class="fz-14 fc-999">未填写</span>
        <span class="iconfont icon-youjiantou fc-999"></span>
      </view>
    </view>
    <view class="order-item-box fl-bt" @tap="toImg">
      <text class="mr-l-30 fz-15">相关图片</text>
      <view class="fl-acen mr-r-30">
        <span class="fz-14 fc-999">未填写</span>
        <span class="iconfont icon-youjiantou fc-999"></span>
      </view>
    </view>
    <view class="fl btn-box">
      <view class="order-btn fl-cen left-btn-back" @tap="closeOrder">取消订单</view>
      <view class="order-btn fl-cen right-btn-back" @tap="submitOrder">提交订单</view>
    </view>
  </view>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {};
  },
  methods: {
    closeOrder() {
      uni.showModal({
        title: "提示",
        content: "您确定要取消此订单吗？",
        confirmText: "再想想",
        confirmColor: "#0090D9",
        success: function (res) {
          if (res.confirm) {
            return true;
          } else if (res.cancel) {
            uni.navigateBack();
          }
        },
      });
    },
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
    toImg() {
      uni.navigateTo({
        url: "/subPackages/pages/imageInformation",
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