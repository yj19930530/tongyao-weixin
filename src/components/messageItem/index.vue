<template>
  <view class="order-list fl-fo" @tap="toDetails">
    <view class="order-item-box">
      <view class="fl-bt">
        <view class="fl-acen order-has-no">
          <view class="dian-has" v-if="num===3||num===4"></view>
          <text class="iconfont icon-dingdan fc-009 fz-20"></text>
          <text class="mr-l-10">订单号{{num}}：12345678</text>
        </view>
        <text class="fc-999">2020-7-19 19：27</text>
      </view>
      <view class="mr-t-14">
        <text class="iconfont icon-dingdan text-vi-hiden"></text>
        <text class="mr-l-10">订单已流转到跟单、抄单</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    toDetails() {
      uni.navigateTo({
        url: "/subPackages/pages/messageDetails",
      });
    },
  },
};
</script>
<style  scoped>
.order-list {
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
}
.order-item-box {
  padding: 36rpx 44rpx 46rpx 36rpx;
}
.text-vi-hiden {
  visibility: hidden;
}
.mr-t-14 {
  margin-top: 14rpx;
}
.order-has-no {
  position: relative;
}
.dian-has {
  position: absolute;
  left: 20rpx;
  top: 0;
  width: 18rpx;
  height: 18rpx;
  border-radius: 50%;
  background-color: #ff0000;
}
</style>