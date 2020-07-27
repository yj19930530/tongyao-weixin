<template>
  <view id="dian-order-container">
    <view class="dian-form-item fl-bt mr-t-20">
      <text class="mr-l-30 fz-15">部门</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">业务员</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">地区</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">审核时间</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">上户地址</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt mr-t-20">
      <text class="mr-l-30 fz-15">客户姓名</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">性别</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">身份证号码</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">联系电话</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">客户婚姻</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">签约方式</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">拆单原因</text>
      <text class="mr-r-30 fz-14">二部</text>
    </view>
    <view class="dian-form-item2 fl-bt mr-t-20">
      <text class="mr-l-30 fz-15 fw-bold">贷款详情</text>
      <view class="mr-r-30">
        <text class="fz-14 mr-r-10 fc-009">查看</text>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="dian-form-item2 fl-bt">
      <text class="mr-l-30 fz-15 fw-bold">联系人详情</text>
      <view class="mr-r-30">
        <text class="fz-14 mr-r-10 fc-009">查看</text>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="form-input-eart">
      <text class="fz-15 mr-l-30">征信情况</text>
      <textarea maxlength="300" class="textarea-style fz-14" placeholder-color="#999" placeholder="请输入征信情况" />
    </view>
    <view class="form-input-eart mr-t-20">
      <text class="fz-15 mr-l-30">电核补充说明</text>
      <textarea maxlength="300" class="textarea-style fz-14" placeholder-color="#999" placeholder="请输入电核补充说明" />
    </view>
    <view class="cofim-btn fl-cen">
        <text class="fz-20 fc-fff">确认通过</text>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#dian-order-container {
  padding-bottom: 170rpx;
}
.dian-form-item {
  width: 100%;
  height: 108rpx;
  border-bottom: 1px solid #f8f8f8;
  background-color: #ffffff;
}
.dian-form-item2 {
  width: 100%;
  height: 108rpx;
  border-bottom: 1px solid #ffffff;
  background-color: #ffffff;
}
.form-input-eart {
  background-color: #ffffff;
}
.textarea-style {
  margin-top: 20rpx;
  margin-left: 30rpx;
  padding: 20rpx 30rpx;
  width: 630rpx;
  height: 304rpx;
  border: 2px solid #999999;
  border-radius: 16rpx;
}
.cofim-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 108rpx;
    background-color: #0090D9;
}
</style>