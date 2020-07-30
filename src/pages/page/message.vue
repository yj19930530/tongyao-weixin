<template>
  <view id="message-container">
    <view class="message-top-box fl-cen">
      <!-- <text class="fz-14 fc-999 mr-r-50 mr-l-30">未读消息2条</text>
      <text class="iconfont icon-qingchugeshi fz-15"></text>
      <text class="fc-999">全部已读</text>-->
      <view class="search-box-style fl-acen mr-t-30" @tap="toSearch">
        <text class="iconfont icon-sousuo fz-17 fc-ac mr-l-30"></text>
        <text class="fz-15 fc-ac mr-l-30">搜索</text>
      </view>
    </view>
    <view class="fl-co mr-t-20">
      <messageItem v-for="item in 5" :key="item" :num="item" />
    </view>
  </view>
</template>
<script>
const api = require("../../api/module/home.js");
const { toast } = require("../../utils/index.js");
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      isMore: true,
      tableList: [],
      total: 0,
    };
  },
  onLoad() {
    this.getOrdersData();
  },
  async onPullDownRefresh() {
    this.pageNo = 1;
    this.pageSize = 10;
    toast.showLoading("加载中");
    await this.getOrdersData();
    uni.hideLoading();
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    toast.showLoading("加载中");
    // console.log("in");
    uni.hideLoading();
  },
  methods: {
    // 获取订单列表
    getOrdersData() {
      this.$api
        .getOrderList({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        })
        .then((res) => {
          console.log(res);
          this.tableList = res.body.list;
          this.total = res.body.total;
        });
    },
    toSearch() {
      uni.navigateTo({
        url: "/subPackages/pages/findPage",
      });
    },
  },
};
</script>
<style  scoped>
.message-top-box {
  width: 100%;
  height: 80rpx;
  background-color: #f8f8f8;
}
.search-box-style {
  height: 64rpx;
  width: 690rpx;
  border-radius: 64rpx;
  background-color: #fff;
}
</style>