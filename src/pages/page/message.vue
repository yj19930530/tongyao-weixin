<template>
  <view id="message-container">
    <view class="message-top-box fl-cen">
      <view class="search-box-style fl-acen mr-t-30" @tap="toSearch">
        <text class="iconfont icon-sousuo fz-17 fc-ac mr-l-30"></text>
        <text class="fz-15 fc-ac mr-l-30">搜索</text>
      </view>
    </view>
    <view class="fl-co mr-t-20">
      <messageItem
        v-for="(item, index) in tableList"
        :key="index"
        :objItem="item"
        :loanData ="loanList"
      />
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
      loanList:[]
    };
  },
  onLoad() {
    this.getOrdersData();
    this.getDicList();
  },
  async onPullDownRefresh() {
    this.pageNo = 1;
    this.pageSize = 10;
    this.isMore = true;
    toast.showLoading("加载中");
    await this.getOrdersData();
    uni.hideLoading();
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    if (!this.isMore) return;
    toast.showLoading("加载中");
    if (this.pageNo * this.pageSize > this.total) {
      toast.showToast("没有更多");
      this.isMore = false;
    } else {
      this.pageNo++;
      this.getOrdersData();
    }
    uni.hideLoading();
  },
  methods: {
    // 获取数据字典
    async getDicList() {
      this.loanList = await this.getDicData(8);
    },
    async getDicData(id) {
      const { body } = await this.$api.getDic({
        catalogId: id,
      });
      return body.list;
    },
    // 获取订单列表
    getOrdersData() {
      this.$api
        .getMessageCenterList({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        })
        .then((res) => {
          if (this.pageNo > 1) {
            this.tableList = [...this.tableList, ...res.body.list];
          } else {
            this.tableList = res.body.list;
          }
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