<template>
  <view id="dian-order-container">
    <view class="dian-form-item fl-bt mr-t-20">
      <text class="mr-l-30 fz-15">部门</text>
      <text class="mr-r-30 fz-14">{{detailsObj.dept||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">业务员</text>
      <text class="mr-r-30 fz-14">{{detailsObj.busName||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">地区</text>
      <text class="mr-r-30 fz-14">{{detailsObj.area||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">审核时间</text>
      <text class="mr-r-30 fz-14">{{detailsObj.examineTime||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">上户地址</text>
      <text class="mr-r-30 fz-14">{{detailsObj.registeredPlace||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt mr-t-20">
      <text class="mr-l-30 fz-15">客户姓名</text>
      <text class="mr-r-30 fz-14">{{detailsObj.custName||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">性别</text>
      <text class="mr-r-30 fz-14">{{getDicRe(array,detailsObj.custSex)}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">身份证号码</text>
      <text class="mr-r-30 fz-14">{{detailsObj.idCard||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">联系电话</text>
      <text class="mr-r-30 fz-14">{{detailsObj.custPhone||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">客户婚姻</text>
      <text class="mr-r-30 fz-14">{{detailsObj.isMarry===1?'已婚':'未婚'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">签约方式</text>
      <text class="mr-r-30 fz-14">{{detailsObj.signingType||'-'}}</text>
    </view>
    <view class="dian-form-item fl-bt">
      <text class="mr-l-30 fz-15">拆单原因</text>
      <text class="mr-r-30 fz-14">{{cancellation_reasons||'-'}}</text>
    </view>
    <view class="dian-form-item2 fl-bt mr-t-20" @tap="todkFunc">
      <text class="mr-l-30 fz-15 fw-bold">贷款详情</text>
      <view class="mr-r-30">
        <text class="fz-14 mr-r-10 fc-009">查看</text>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="dian-form-item2 fl-bt" @tap="tolxrFunc">
      <text class="mr-l-30 fz-15 fw-bold">联系人详情</text>
      <view class="mr-r-30">
        <text class="fz-14 mr-r-10 fc-009">查看</text>
        <text class="iconfont icon-youjiantou"></text>
      </view>
    </view>
    <view class="form-input-eart">
      <text class="fz-15 mr-l-30">征信情况</text>
      <textarea maxlength="300" v-model="zxText" disabled class="textarea-style fz-14" />
    </view>
    <view class="form-input-eart mr-t-20">
      <text class="fz-15 mr-l-30">电核补充说明</text>
      <textarea v-model="detailsObj.remark" maxlength="300" disabled class="textarea-style fz-14" />
    </view>
    <view class="cofim-btn fl-cen" @tap="dhconfimFunc">
      <text class="fz-20 fc-fff">确认通过</text>
    </view>
  </view>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      dhId: 0,
      detailsObj: {},
      zxText: "",
      cancellation_reasons: "",
      array: [
        {
          name: "男",
          value: "1",
        },
        {
          name: "女",
          value: "0",
        },
      ],
    };
  },
  onLoad(data) {
    this.dhId = data.dhId;
    this.getDetails();
  },
  methods: {
    getDicRe(list, type) {
      let text = "";
      list.forEach((item) => {
        if (item.value === type) {
          text = item.name;
        }
      });
      return text;
    },
    dhconfimFunc() {
      this.$api
        .comfimDh({
          orderId: this.detailsObj.orderId,
        })
        .then((res) => {
          if (res.code === 0) {
            uni.showModal({
              title: "提示",
              content: "确认成功",
              showCancel: false,
              confirmText: "返回",
              success: function (res) {
                uni.navigateBack();
              },
            });
          } else {
            toast.showToast("确认失败");
          }
        });
    },
    getDetails() {
      this.$api
        .getDhDetails({
          id: this.dhId,
        })
        .then((res) => {
          this.zxText = JSON.parse(res.body.dhInfo).credit_info;
          this.cancellation_reasons = JSON.parse(
            res.body.dhInfo
          ).cancellation_reasons;
          this.detailsObj = res.body;
        });
    },
    todkFunc() {
      uni.navigateTo({
        url: `/subPackages/pages/details/newCar?det=${this.detailsObj.dhInfo}`,
      });
    },
    tolxrFunc() {
      uni.navigateTo({
        url: `/subPackages/pages/details/people?det=${this.detailsObj.dhInfo}`,
      });
    },
  },
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
  padding-bottom: 30rpx;
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
  background-color: #0090d9;
}
</style>