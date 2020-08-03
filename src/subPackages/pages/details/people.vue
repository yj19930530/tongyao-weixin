<template>
  <view class="detail-content">
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">第一联系人:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.one_contacts||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">第二联系人:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.two_contacts||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">第三联系人:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.three_contacts||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">客户户籍:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.register||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">配偶户籍:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.spouse_register||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">客户工作单位:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.unit||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">配偶工作单位:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.spouse_unit||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
          <view class="mr-l-30 fz-15 item-left">实际居住地:</view>
          <view class="mr-r-30 fz-14 item-right">{{dataDet.home_place||'-'}}</view>
      </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
        dataDet:{}
    };
  },
  onLoad(data) {
      this.dataDet = JSON.parse(data.det);
  },
  methods: {},
};
</script>
<style scoped>
.detail-item-content {
    padding: 20rpx 0;
    background-color: #ffffff;
}
.item-left {
    width: 50%;
}
.item-right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
}
</style>