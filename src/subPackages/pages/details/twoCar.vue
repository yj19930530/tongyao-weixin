<template>
  <view class="detail-content">
      <view class="fl-bt detail-item-content" v-for="item in 12" :key="item">
          <view class="mr-l-30 fz-15 item-left">GPS安装</view>
          <view class="mr-r-30 fz-14 item-right">有线</view>
      </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>
<style scoped>
.detail-item-content {
    padding: 30rpx 0;
    background-color: #ffffff;
}
.item-left {
    width: 50%;
}
.item-right {
    width: 30%;
}
</style>