<template>
  <view class="business-lsit-box" @tap="lookDdian2(itemObj)">
    <text class="fz-12 fc999 mr-l-40">{{ itemObj.createTime }}</text>
    <view class="business-box-card">
      <div class="card-content fl-fo">
        <div class="yin-hang-text fl-cen">
          <text class="fz-10 fc-fff">{{ retText() }}</text>
        </div>
        <view class="fl-bt">
          <view class="fz-15 fl-acen">
            <view class="left-text-style">订单号：</view>
            <text>{{ itemObj.orderNum }}</text>
          </view>
          <view class="fl-cen" @tap.native.stop="resetOrders(itemObj)">
            <text class="fz-12 fc-009">刷新订单</text>
            <text class="iconfont icon-shuaxin fz-20 fc-009"></text>
          </view>
        </view>
        <view class="fz-15 mr-t-20 fl-acen">
          <view class="left-text-style">车辆车牌：</view>
          <text>{{ itemObj.carType }}</text>
        </view>
        <view class="fz-15 mr-t-20 fl-acen">
          <view class="left-text-style">客户名称：</view>
          <text>{{ itemObj.name }}</text>
        </view>
        <view class="mr-t-20 fl">
          <view class="fz-15 left-text-style">当前进度：</view>
          <view class="fl item-rifht-look">
            <text class="fz-15 mr-b-10">{{ itemObj.processName }}</text>
            <view
              class="fl-cen item-look-details mr-l-20"
              @tap.native.stop="lookDdian(itemObj.dhId)"
              v-if="itemObj.process === 'sale_sure'"
            >
              <text class="fz-11 fc-fff">查看</text>
            </view>
            <view
              class="fl-cen item-look-details mr-l-20"
              @tap.native.stop="findDian(itemObj)"
              v-if="itemObj.process === 'frist_examine'"
            >
              <text class="fz-11 fc-fff">访查</text>
            </view>
            <view
              class="fl-cen item-look-details3 mr-l-20"
              @tap.native.stop="findContract(itemObj.custId)"
              v-if="itemObj.contractState === 0"
            >
              <text class="fz-11 fc-fff">合同补充</text>
            </view>
          </view>
        </view>
        <view class="fl-end">
          <div
            class="back-dan fl-cen"
            v-if="itemObj.process === 'sale_sure'"
            @tap.native.stop="deleteOrder(itemObj.id)"
          >
            <text class="fz-13 fc-999">退单</text>
          </div>
          <div
            class="back-dan2 fl-cen"
            v-if="itemObj.paymentState === -1"
            @tap.native.stop="senOwnerKuan(itemObj)"
          >
            <text class="fz-13 fc-999">自垫款请返利</text>
          </div>
          <div
            class="back-dan2 fl-cen"
            @tap.native.stop="senCarKuan(itemObj)"
            v-if="itemObj.paymentStateRebate === -1"
          >
            <text class="fz-13 fc-999">自垫款请车款</text>
          </div>
          <div
            class="back-dan2 fl-cen"
            @tap.native.stop="senFanKuan(itemObj)"
            v-if="
              itemObj.paymentStateRebate === -1 && itemObj.paymentState === -1
            "
          >
            <text class="fz-13 fc-999">公司垫款请返利</text>
          </div>
          <div
            class="back-dan fl-cen"
            v-if="itemObj.process === 'wait'"
            @tap.native.stop="editOrderFuc(itemObj.id)"
          >
            <text class="fz-13 fc-999">修改订单</text>
          </div>
          <div
            class="back-dan fl-cen"
            v-if="itemObj.process === 'wait'"
            @tap.native.stop="submitOrder(itemObj)"
          >
            <text class="fz-13 fc-999">提交订单</text>
          </div>
        </view>
      </div>
    </view>
  </view>
</template>
<script>
import { toast } from "../../utils/index";
export default {
  data() {
    return {};
  },
  props: {
    itemObj: {
      type: Object,
      default: {},
    },
    loanData: {
      type: Array,
      default: [],
    },
  },
  mounted() {},
  methods: {
    retText() {
      let text = "",
        regex = /\（(.+?)\）/;
      this.loanData.forEach((item) => {
        if (item.value == this.itemObj.loanType) {
          text = item.name.match(regex)[1];
        }
      });
      return text;
    },
    lookDdian2(row) {
      uni.navigateTo({
        url: `/subPackages/pages/addOrders?type=details&lsId=${row.id}&custId=${row.custId}`,
      });
    },
    resetOrders(row) {
      toast.showLoading("刷新中");
      this.$api
        .getOrderDetails({
          id: row.id,
        })
        .then((res) => {
          uni.hideLoading();
          this.$emit("retOrders", res.body.order, row.id);
        })
        .catch(() => {
          uni.hideLoading();
        });
    },
    editOrderFuc(id) {
      uni.navigateTo({
        url: `/subPackages/pages/loanInformation?id=${id}`,
      });
    },
    // 提交订单
    submitOrder(row) {
      uni.navigateTo({
        url: `/subPackages/pages/imageInformation?id=${row.custId}&orderId=${row.id}`,
      });
    },
    deleteOrder(id) {
      let that = this;
      uni.showModal({
        title: "提示",
        content: "是否删除该订单",
        confirmText: "删除",
        confirmColor: "#0090D9",
        success: function (res) {
          if (res.confirm) {
            that.$api
              .deleteOrder({
                id: id,
              })
              .then((res) => {
                if (res.code === 0) {
                  toast.showToast("删除成功");
                  that.$emit("tableList");
                } else {
                  toast.showToast("删除失败");
                }
              });
          }
        },
      });
    },
    lookDdian(id) {
      uni.navigateTo({
        url: `/subPackages/pages/confirmOrder?dhId=${id}`,
      });
    },
    findContract(id) {
      uni.navigateTo({
        url: `/subPackages/pages/contract?id=${id}`,
      });
    },
    findDian(row) {
      uni.navigateTo({
        url: `/subPackages/pages/visit?custCode=${row.custCode}&id=${row.custId}`,
      });
    },
    // 自垫款
    senOwnerKuan(row) {
      let that = this;
      uni.showModal({
        title: "提示",
        content: "是否确认自垫款",
        confirmText: "确认",
        confirmColor: "#0090D9",
        success: function (res) {
          if (res.confirm) {
            that.$api
              .sendPayment({
                advancesType: 2,
                custCode: row.custCode,
                state: 0,
              })
              .then((res) => {
                if (res.code === 0) {
                  toast.showToast("确定成功");
                  that.$emit("tableList");
                } else {
                  toast.showToast("确定失败");
                }
              });
          }
        },
      });
    },
    senCarKuan(row) {
      let that = this;
      uni.showModal({
        title: "提示",
        content: "是否确认请车款",
        confirmText: "确认",
        confirmColor: "#0090D9",
        success: function (res) {
          if (res.confirm) {
            that.$api
              .sendPayment({
                advancesType: 2,
                stateRebate: 0,
                custCode: row.custCode,
              })
              .then((res) => {
                if (res.code === 0) {
                  toast.showToast("确定成功");
                  that.$emit("tableList");
                } else {
                  toast.showToast("确定失败");
                }
              });
          }
        },
      });
    },
    senFanKuan(row) {
      let that = this;
      uni.showModal({
        title: "提示",
        content: "是否确认自返利",
        confirmText: "确认",
        confirmColor: "#0090D9",
        success: function (res) {
          if (res.confirm) {
            that.$api
              .sendPayment({
                advancesType: 1,
                stateRebate: 0,
                custCode: row.custCode,
              })
              .then((res) => {
                if (res.code === 0) {
                  toast.showToast("确定成功");
                  that.$emit("tableList");
                } else {
                  toast.showToast("确定失败");
                }
              });
          }
        },
      });
    },
  },
};
</script>
<style scoped>
business-lsit-box {
  width: 714rpx;
}
.business-box-card {
  position: relative;
  margin-bottom: 10rpx;
  width: 100%;
  margin-top: 10rpx;
  box-shadow: 0 0 8px #999;
  border-radius: 16rpx;
  background-color: #fff;
}
.card-content {
  position: relative;
  padding: 32rpx 28rpx 36rpx 40rpx;
}
.yin-hang-text {
  position: absolute;
  left: 0;
  top: 0;
  width: 28px;
  height: 16px;
  border-radius: 8rpx 8rpx;
  background-color: #0090d9;
}
.left-text-style {
  /* text-align: right; */
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
  margin-top: 20rpx;
  margin-left: 14rpx;
  width: 146rpx;
  height: 60rpx;
  border: 1px solid #999999;
  border-radius: 60rpx;
}
.back-dan2 {
  margin-top: 20rpx;
  margin-left: 14rpx;
  width: 186rpx;
  height: 60rpx;
  border: 1px solid #999999;
  border-radius: 60rpx;
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 