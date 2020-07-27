<template>
  <view id="find-container">
    <view class="top-search-box fl-acen">
      <view class="fl-acen left-search mr-l-30">
        <text class="iconfont icon-sousuo fz-18 mr-l-30"></text>
        <input
          class="uni-input fz-15 input-width-1 mr-l-20"
          placeholder="订单号、姓名、身份证、手机号"
          placeholder-class="fc-666"
        />
      </view>
      <text class="fz-14 fc-999 mr-l-10">清除</text>
    </view>
    <view class="saixuan-top-title fl-acen">
      <text class="fz-14 fc-999 mr-l-30">筛选</text>
      <text class="iconfont icon-shaixuan fc-999 mr-l-10"></text>
    </view>
    <view class="search-item fl-bt">
      <text class="mr-l-30">开始时间</text>
      <view class="fl-acen mr-r-30">
        <picker
          mode="date"
          :value="date"
          :start="startDate"
          :end="endDate"
          @change="bindDateChange"
        >
          <view class="uni-input fz-15">{{date}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="search-item fl-bt">
      <text class="mr-l-30">结束日期</text>
      <view class="fl-acen mr-r-30">
        <picker
          mode="date"
          :value="date"
          :start="startDate"
          :end="endDate"
          @change="bindDateChange"
        >
          <view class="uni-input fz-15">{{date}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="search-item fl-bt">
      <text class="mr-l-30">当前进度</text>
      <view class="fl-acen mr-r-30">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input fc-999 fz-14" v-if="index===-1">请选择</view>
          <view class="uni-input fz-14" v-else>{{array[index]}}</view>
        </picker>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="cofim-btn fl-cen" @tap="searchData">
      <text class="fz-20 fc-fff le-sping">确定</text>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      date: currentDate,
      array: [1, 2, 3, 4, 5],
      index: -1,
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
    searchData() {
      uni.navigateTo({
        url: "/subPackages/pages/findData",
      });
    },
    bindPickerChange: function (e) {
      this.index = e.target.value;
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
.top-search-box {
  width: 100%;
  height: 82rpx;
  background-color: #ffffff;
}
.left-search {
  width: 622rpx;
  height: 64rpx;
  background-color: #f2f2f2;
  border-radius: 64rpx;
}
.input-width-1 {
  width: 430rpx;
}
.saixuan-top-title {
  width: 100%;
  height: 82rpx;
}
.search-item {
  width: 100%;
  height: 108rpx;
  background-color: #ffffff;
  border-bottom: 1px solid #f8f8f8;
}
.cofim-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.le-sping {
  letter-spacing: 14rpx;
}
</style>