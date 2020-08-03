<template>
  <view id="find-container">
    <view class="top-search-box fl-acen">
      <view class="fl-acen left-search mr-l-30">
        <text class="iconfont icon-sousuo fz-18 mr-l-30"></text>
        <input
          v-model="searchInfo"
          class="uni-input fz-15 input-width-1 mr-l-20"
          placeholder="订单号、姓名、身份证、手机号"
          placeholder-class="fc-666"
        />
      </view>
      <text class="fz-14 fc-999 mr-l-10" @tap="deleteText">清除</text>
    </view>
    <view class="saixuan-top-title fl-acen">
      <text class="fz-14 fc-999 mr-l-30">筛选</text>
      <text class="iconfont icon-shaixuan fc-999 mr-l-10"></text>
    </view>
    <picker
      mode="date"
      :value="startTime"
      :start="startDate"
      :end="endDate"
      @change="bindDateChange"
    >
      <view class="loan-form-item fl-bt">
        <text class="mr-l-30 fz-15">开始日期</text>
        <view class="fl-acen mr-r-30">
          <view class="fl-acen">
            <view class="uni-input fz-14 fc-999" v-if="startTime===''">请选择</view>
            <view class="uni-input fz-14" v-else>{{startTime}}</view>
          </view>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </picker>
    <picker
      mode="date"
      :value="endTime"
      :start="startDate"
      :end="endDate"
      @change="bindDateChange2"
    >
      <view class="loan-form-item fl-bt">
        <text class="mr-l-30 fz-15">结束日期</text>
        <view class="fl-acen mr-r-30">
          <view class="fl-acen">
            <view class="uni-input fz-14 fc-999" v-if="endTime===''">请选择</view>
            <view class="uni-input fz-14" v-else>{{endTime}}</view>
          </view>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </picker>
    <picker name="businessType" @change="bindPickerChange" range-key="label" :value="process" :range="array">
      <view class="loan-form-item fl-bt">
        <text class="mr-l-30 fz-15">当前进度</text>
        <view class="fl-acen mr-r-30">
          <view class="fl-acen">
            <view class="uni-input fz-14 fc-999" v-if="process===''">请选择</view>
            <view class="uni-input fz-14" v-else>{{processName}}</view>
          </view>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </picker>
    <view class="cofim-btn fl-cen" @tap="searchData">
      <text class="fz-20 fc-fff le-sping">确定</text>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      array: [
        {
          label: "创建订单",
          value: "create",
        },
        {
          label: "订单待提交",
          value: "wait",
        },
        {
          label: "待创建电核信息",
          value: "wait_create_dh",
        },
        {
          label: "填写电核申请表",
          value: "wait_dh",
        },
        {
          label: "电核初审",
          value: "frist_examine",
        },
        {
          label: "总经理审核",
          value: "general_examine",
        },
        {
          label: "业务员待确认",
          value: "sale_sure",
        },
        {
          label: "资料审核",
          value: "info_examine",
        },
        {
          label: "跟单、抄单",
          value: "order_accompany",
        },
        {
          label: "复核",
          value: "review_examine",
        },
        {
          label: "待支行审批",
          value: "bank_examine",
        },
        {
          label: "待提交卡部",
          value: "bank_wait_card",
        },
        {
          label: "待银行放款",
          value: "bank_release",
        },
        {
          label: "财务待确认",
          value: "finance_sure",
        },
        {
          label: "权证交付银行",
          value: "order_end",
        },
        {
          label: "退单申请",
          value: "order_examine_reback",
        },
        {
          label: "退单",
          value: "order_reback",
        },
      ],
      startTime: "",
      endTime: "",
      process: "",
      searchInfo: "",
      processName:''
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
    deleteText() {
      this.searchInfo = "";
    },
    searchData() {
      let obj = {
        startTime: this.startTime,
        endTime: this.endTime,
        process: this.process,
        searchInfo: this.searchInfo,
      };
      obj = JSON.stringify(obj);
      uni.navigateTo({
        url: `/subPackages/pages/findData?searData=${obj}`,
      });
    },
    bindPickerChange: function (e) {
      this.process = this.array[e.target.value].value;
      this.processName = this.array[e.target.value].label;
    },
    bindDateChange: function (e) {
      this.startTime = e.target.value;
    },
    bindDateChange2: function (e) {
      this.endTime = e.target.value;
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
.loan-form-item {
  height: 108rpx;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
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