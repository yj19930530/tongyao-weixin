<template>
  <view id="home-page-container">
    <view class="home-top-content">
      <image
        class="homg-back-img"
        mode="aspectFit"
        src="../../static/home.png"
      ></image>
      <view class="top-search-box">
        <text class="fz-18 fc-fff fw-bold">成都通耀汽车业务管理系统</text>
      </view>
    </view>
    <view class="home-business-lsit fl-co" v-if="chiType">
      <businessItem
        v-for="(item, index) in tableList"
        :key="index"
        @tableList="getOrdersData"
        @retOrders="retOrders"
        :itemObj="item"
        :loanData ="loanList"
      />
    </view>
    <view class="fl-cen mr-t-30" v-if="total === 0">
      <text class="fz-14 fc-999">没有更多</text>
    </view>
    <div
      class="iconfont icon-tianjia fz-50 add-order-btn fc-009"
      @tap="addOrders"
    ></div>
  </view>
</template>
<script>
const api = require("../../api/module/home.js");
const { toast, common } = require("../../utils/index.js");
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      isMore: true,
      tableList: [],
      total: 0,
      chiType: false,
      loanList: [],
    };
  },
  onLoad() {
    wx.showShareMenu({
      withShareTicket: true,
      title: "分享",
    });
  },
  async onShow() {
    this.pageNo = 1;
    this.pageSize = 10;
    this.chiType = false;
    this.isMore = false;
    toast.showLoading("加载中");
    await this.getOrdersData();
    await this.getDicList();
    uni.hideLoading();
  },
  async onPullDownRefresh() {
    this.pageNo = 1;
    this.chiType = false;
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
    retOrders(row, id) {
      this.tableList.forEach((item, index) => {
        if (item.id === id) {
          for (let key in row) {
            this.tableList[index][key] = row[key];
          }
        }
      });
    },
    // 获取订单列表
    getOrdersData() {
      let regex = /\（(.+?)\）/;
      this.$api
        .getOrderList({
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
          this.chiType = true;
        });
    },
    addOrders() {
      uni.navigateTo({
        url: "/subPackages/pages/addOrders",
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
<style scoped>
.homg-back-img {
  width: 100%;
  height: 100%;
}
.home-top-content {
  position: relative;
  width: 100%;
  height: 334rpx;
}
.top-search-box {
  position: absolute;
  right: 0;
  bottom: 130rpx;
  left: 30rpx;
}
.search-box-style {
  height: 64rpx;
  width: 690rpx;
  border-radius: 64rpx;
  background-color: #fff;
}
.home-business-lsit {
  z-index: 9;
  position: relative;
  top: -108rpx;
}
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
.add-order-btn {
  position: fixed;
  right: 52rpx;
  bottom: 136rpx;
  z-index: 9;
  background-color: #fff;
  border-radius: 50%;
}
</style>