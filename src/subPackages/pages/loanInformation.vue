<template>
  <view id="loan-container">
    <view class="loan-form-item fl-bt mr-t-20">
      <text class="mr-l-30 fz-15">业务品种</text>
      <view class="fl-acen mr-r-30">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input fz-14 fc-999" v-if="index===-1">请选择</view>
          <view class="uni-input fz-14" v-else>{{array[index]}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">车辆品牌</text>
      <input
        class="uni-input fz-14 mr-r-30 input-width-250"
        placeholder="请输入您的车辆品牌"
        placeholder-class="fc-999"
      />
    </view>
    <view class="loan-form-item fl-bt mr-t-20">
      <text class="mr-l-30 fz-15">业务类型</text>
      <view class="fl-acen mr-r-30">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input fz-14 fc-999" v-if="index===-1">请选择</view>
          <view class="uni-input fz-14" v-else>{{array[index]}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">意向金额</text>
      <view class="fl-acen">
        <input
          class="uni-input fz-14 input-width-250 fl-cen"
          placeholder="请输入金额"
          type="digit"
          placeholder-class="fc-999"
        />
        <text class="fz-14 mr-r-30">元</text>
      </view>
    </view>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">意向贷款期限</text>
      <view class="fl-acen mr-r-30">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input fz-14 fc-999" v-if="index===-1">请选择</view>
          <view class="uni-input fz-14" v-else>{{array[index]}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">意向贷款金额</text>
      <view class="fl-acen">
        <input
          class="uni-input fz-14 input-width-250 fl-cen"
          placeholder="请输入金额"
          type="digit"
          placeholder-class="fc-999"
        />
        <text class="fz-14 mr-r-30">元</text>
      </view>
    </view>
    <view class="save-btn fl-cen mr-t-60">
      <text class="fz-20 fc-fff le-spc">保存</text>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      array: ["中国", "美国", "巴西", "日本"],
      index: -1,
    };
  },
  methods: {
    bindPickerChange(data) {
      console.log(data);
      this.index = data.detail.value;
    },
  },
};
</script>
<style scoped>
.loan-form-item {
  height: 108rpx;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
}
.input-width-250 {
  width: 282rpx;
  text-align: right;
}
.save-btn {
  width: 100%;
  height: 108rpx;
  background-color: #0090D9;
}
.le-spc{
  letter-spacing:20rpx;
}
</style>