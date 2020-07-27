<template>
  <view id="people-container">
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">请拍摄并上传你的有效身份证</text>
    </view>
    <view class="sfz-container">
      <view class="fl-bt">
        <view class="fl-fo" @tap="updataImgZheng">
          <image class="sfz-img-style" src="../../static/back.png"></image>
          <view class="fl-cen update-btn">
            <text class="fc-fff fz-14">上传身份证正面</text>
          </view>
        </view>
        <view class="fl-fo">
          <image class="sfz-img-style" src="../../static/back.png"></image>
          <view class="fl-cen update-btn">
            <text class="fc-fff fz-14">上传身份证反面</text>
          </view>
        </view>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">请确认并完善身份信息</text>
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">主贷人姓名</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">主贷人性别</text>
      <view class="fl-acen mr-r-30">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input fz-14 fc-999" v-if="index===-1">请选择</view>
          <view class="uni-input fz-14" v-else>{{array[index]}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">户籍</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">居住地址</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">身份证号码</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        type="idcard"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">签发机关</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">身份证地址</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">银行卡号</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        type="number"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">联系电话</text>
      <input
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        type="number"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">有效期限</text>
      <view class="fl-acen mr-r-30">
        <!-- <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input fz-14 fc-999" v-if="index===-1">请选择</view>
          <view class="uni-input fz-14" v-else>{{array[index]}}</view>
        </picker>-->
        <picker
          mode="date"
          :value="date"
          :start="startDate"
          :end="endDate"
          @change="bindDateChange"
        >
          <view class="uni-input">{{date}}</view>
        </picker>
      </view>
    </view>
    <view class="book-img-content">
      <view class="book-img fl-co mr-l-30" @tap="uploadBook">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">授权书</text>
      </view>
    </view>
    <view class="fl-cen filish-btn">
      <text class="fz-20 filish-btn-text fc-fff">完成</text>
    </view>
  </view>
</template>
<script>
const { updataImg } = require("../../utils/lib/common.js");
export default {
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      array: ["男", "女"],
      index: -1,
      date: currentDate,
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },
  },
  methods: {
    async updataImgZheng() {
      let data = await updataImg();
      console.log(data);
    },
    async uploadBook() {
      let data = await updataImg();
      console.log(data);
    },
    bindPickerChange(data) {
      console.log(data);
      this.index = data.detail.value;
    },
    bindDateChange: function (e) {
      this.date = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
  },
};
</script>
<style scoped>
#people-container {
  padding-bottom: 108rpx;
}
.people-infor {
  width: 100%;
  height: 80rpx;
}
.sfz-container {
  padding: 32rpx 30rpx;
  background-color: #fff;
}
.sfz-img-style {
  width: 324rpx;
  height: 218rpx;
  border-radius: 10rpx 10rpx 0 0;
}
.update-btn {
  width: 324rpx;
  height: 60rpx;
  background-color: #0090d9;
  border-radius: 0 0 10rpx 10rpx;
}
.sfz-form-item {
  width: 100%;
  height: 108rpx;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
}
.for-item-input {
  width: 400rpx;
  text-align: right;
}
.filish-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.filish-btn-text {
  letter-spacing: 20rpx;
}
.book-img {
  width: 224rpx;
  height: 224rpx;
  border-radius: 16rpx;
  border: 2px solid #999999;
}
.book-img-content {
  padding: 62rpx 0;
  background-color: #fff;
}
</style>