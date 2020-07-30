<template>
  <view class="business-lsit-box">
    <text class="fz-12 fc999 mr-l-40">2020-07-19 19：27</text>
    <view class="business-box-card" @tap="lookDdian">
      <div class="card-content fl-fo">
        <view class="fl-bt">
          <view class="fz-15 fl-acen">
            <view class="left-text-style">订单号：</view>
            <text>12345678</text>
          </view>
        </view>
        <view class="fz-15 mr-t-20 fl-acen">
          <view class="left-text-style">车辆车牌：</view>
          <text>桑塔纳</text>
        </view>
        <view class="fz-15 mr-t-20 fl-acen">
          <view class="left-text-style">客户名称：</view>
          <text>张三{{num}}</text>
        </view>
        <view class="mr-t-20 fl">
          <view class="fz-15 left-text-style">当前进度：</view>
          <view class="fl item-rifht-look">
            <text class="fz-15 mr-b-10">业务员待确认</text>
          </view>
        </view>
      </div>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    objItem: {
      type: Object,
      default: {},
    },
    num: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    console.log(this.num);
  },
  methods: {
    lookDdian() {
      uni.navigateTo({
        url: "/subPackages/pages/addOrders?type=details",
      });
    },
  },
};
</script>
<style scoped>
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
</style>