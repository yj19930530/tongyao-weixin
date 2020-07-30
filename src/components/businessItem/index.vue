<template>
  <view class="business-lsit-box">
    <text class="fz-12 fc999 mr-l-40">2020-07-19 19：27</text>
    <view class="business-box-card">
      <div class="card-content fl-fo">
        <view class="fl-bt">
          <view class="fz-15 fl-acen">
            <view class="left-text-style">订单号：</view>
            <text>{{tableList.orderNum}}</text>
          </view>
          <view class="fl-cen">
            <text class="fz-12 fc-009">刷新订单</text>
            <text class="iconfont icon-shuaxin fz-20 fc-009"></text>
          </view>
        </view>
        <view class="fz-15 mr-t-20 fl-acen">
          <view class="left-text-style">车辆车牌：</view>
          <text>{{tableList.carType}}</text>
        </view>
        <view class="fz-15 mr-t-20 fl-acen">
          <view class="left-text-style">客户名称：</view>
          <text>{{tableList.name}}</text>
        </view>
        <view class="mr-t-20 fl">
          <view class="fz-15 left-text-style">当前进度：</view>
          <view class="fl item-rifht-look">
            <text class="fz-15 mr-b-10">{{tableList.processName}}</text>
            <view
              class="fl-cen item-look-details mr-l-20"
              @tap="lookDdian"
              v-if="tableList.process==='sale_sure'"
            >
              <text class="fz-11 fc-fff">查看</text>
            </view>
            <view
              class="fl-cen item-look-details mr-l-20"
              @tap="findDian"
              v-if="tableList.process==='frist_examine'"
            >
              <text class="fz-11 fc-fff">访查</text>
            </view>
            <view
              class="fl-cen item-look-details3 mr-l-20"
              @tap="findContract"
              v-if="tableList.contractState===0"
            >
              <text class="fz-11 fc-fff">合同补充</text>
            </view>
          </view>
        </view>
        <view class="fl-end">
          <div
            class="back-dan fl-cen"
            v-if="tableList.process==='sale_sure'"
            @tap="deleteOrder(tableList.id)"
          >
            <text class="fz-13 fc-999">退单</text>
          </div>
          <div class="back-dan fl-cen" v-if="tableList.paymentState===0">
            <text class="fz-13 fc-999">自垫款</text>
          </div>
          <div class="back-dan fl-cen" v-if="tableList.paymentStateRebate===0">
            <text class="fz-13 fc-999">请返利</text>
          </div>
          <div class="back-dan fl-cen" v-if="tableList.process==='wait'">
            <text class="fz-13 fc-999">提交订单</text>
          </div>
          <div class="back-dan fl-cen" v-if="tableList.process!=='wait'" @tap="editOrderFuc(tableList.id)">
            <text class="fz-13 fc-999">修改订单</text>
          </div>
        </view>
      </div>
    </view>
  </view>
</template>
<script>
import { toast } from "../../utils";
export default {
  data() {
    return {};
  },
  props: {
    itemObj: {
      type: Object,
      default: {},
    },
  },
  mounted() {},
  computed: {
    tableList() {
      return this.itemObj;
    },
  },
  methods: {
    editOrderFuc(id){
      uni.navigateTo({
        url: `/subPackages/pages/details/editOrder?id=${id}`,
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
    lookDdian() {
      uni.navigateTo({
        url: "/subPackages/pages/confirmOrder",
      });
    },
    findContract() {
      uni.navigateTo({
        url: "/subPackages/pages/contract",
      });
    },
    findDian() {
      uni.navigateTo({
        url: "/subPackages/pages/visit",
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
</style>