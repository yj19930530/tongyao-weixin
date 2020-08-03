<template>
  <view id="order-container">
    <view class="order-item-box fl-bt" @tap="toLoan" v-if="!ifDetails">
      <text class="mr-l-30 fz-15">按贷款信息</text>
      <view class="fl-acen mr-r-30" v-if="loanType">
        <span class="fz-14 fc-333">已填写</span>
        <span class="iconfont icon-youjiantou fc-333"></span>
      </view>
      <view class="fl-acen mr-r-30" v-else>
        <span class="fz-14 fc-999">未填写</span>
        <span class="iconfont icon-youjiantou fc-999"></span>
      </view>
    </view>
    <view class="order-item-box fl-bt" @tap="toDetailsPath('dkxx')" v-else>
      <text class="mr-l-30 fz-15">贷款信息</text>
      <view class="fl-acen mr-r-30">
        <span class="iconfont icon-youjiantou fc-333"></span>
      </view>
    </view>
    <view class="order-item-box fl-bt" @tap="toPeople" v-if="!ifDetails">
      <text class="mr-l-30 fz-15">贷款人信息</text>
      <view class="fl-acen mr-r-30" v-if="peoType">
        <span class="fz-14 fc-333">已填写</span>
        <span class="iconfont icon-youjiantou fc-333"></span>
      </view>
      <view class="fl-acen mr-r-30" v-else>
        <span class="fz-14 fc-999">未填写</span>
        <span class="iconfont icon-youjiantou fc-999"></span>
      </view>
    </view>
    <view class="order-item-box fl-bt" @tap="toDetailsPath('dkr')" v-else>
      <text class="mr-l-30 fz-15">贷款人信息</text>
      <view class="fl-acen mr-r-30">
        <span class="iconfont icon-youjiantou fc-333"></span>
      </view>
    </view>
    <view class="order-item-box2 fl-foc" v-if="!ifDetails">
      <view class="fl-bt lin-hei">
        <text class="mr-l-30 fz-15">共贷人信息</text>
        <view class="fl-acen mr-r-30" @tap="addPeople">
          <span class="iconfont icon-jiahao- fc-999"></span>
        </view>
      </view>
      <view
        class="fl-bt lin-hei2"
        v-for="(item,index) in lederList"
        :key="index"
        @tap="lederItem(item.n)"
      >
        <text class="mr-l-30 fz-13">第{{item.n}}共贷人</text>
        <view class="fl-acen mr-r-30">
          <span class="fz-13 fc-333" v-if="item.ifWrite">已填写</span>
          <span class="fz-13 fc-999" v-else>未填写</span>
          <span class="iconfont icon-youjiantou fz-13 fc-999"></span>
        </view>
      </view>
    </view>
    <view class="order-item-box2 fl-foc" v-else>
      <view class="fl-bt lin-hei">
        <text class="mr-l-30 fz-15">共贷人信息</text>
      </view>
      <view
        class="fl-bt lin-hei2"
        v-for="(item,index) in lederList"
        :key="index"
        @tap="toDetailsPath('gdr',item.n)"
      >
        <text class="mr-l-30 fz-13">第{{item.n}}共贷人</text>
        <view class="fl-acen mr-r-30">
          <span class="iconfont icon-youjiantou fz-13 fc-999"></span>
        </view>
      </view>
    </view>
    <!-- <view class="order-item-box fl-bt" @tap="toGong" v-else>
      <text class="mr-l-30 fz-15">共贷人信息</text>
      <view class="fl-acen mr-r-30" v-if="lederType">
        <span class="iconfont icon-youjiantou fc-333"></span>
      </view>
    </view>-->
    <view class="order-item-box fl-bt" v-if="ifDetails" @tap="toDetailsPath('img')">
      <text class="mr-l-30 fz-15">相关图片</text>
      <view class="fl-acen mr-r-30">
        <span class="iconfont icon-youjiantou fc-333"></span>
      </view>
    </view>
    <view class="fl btn-box" v-if="!ifDetails">
      <view class="order-btn fl-cen left-btn-back" @tap="closeOrder">取消订单</view>
      <view class="order-btn fl-cen right-btn-back" v-if="peoType&&loanType" @tap="submitOrder">提交订单</view>
      <view class="order-btn fl-cen right-btn-back2" v-else>提交订单</view>
    </view>
  </view>
</template>
<script>
const { toast } = require("../../utils/index");
export default {
  data() {
    return {
      peoType: false,
      loanType: false,
      lederType: false,
      otherType: false,
      peo: {},
      loan: {},
      leder: {},
      other: {},
      ifDetails: false,
      lederList: [],
      lederObjList: [],
      editType: false,
      lsId: "",
    };
  },
  onLoad(obj) {
    if (obj.type === "details") {
      this.ifDetails = true;
      this.lsId = obj.lsId;
      this.custId = obj.custId;
      this.getDetails();
      uni.setNavigationBarTitle({
        title: "订单查看",
      });
    }
  },
  onShow() {
    this.lederObjList = [];
    if (!this.ifDetails) {
      this.getIsInput();
    }
  },
  methods: {
    // 获取详情
    getDetails() {
      this.$api
        .getOrderDetails({
          id: this.lsId,
        })
        .then((res) => {
          res.body.applyInfo.relationCust.splice(0, 1);
          const data = res.body.applyInfo.relationCust;
          let num = 0;
          data.forEach((item) => {
            num++;
            this.lederList.push({
              n: num,
              ifWrite: true,
            });
          });
        });
    },
    toDetailsPath(path, n) {
      switch (path) {
        case "img": {
          uni.navigateTo({
            url: `/subPackages/pages/details/image?custId=${this.custId}`,
          });
          break;
        }
        case "dkxx": {
          uni.navigateTo({
            url: `/subPackages/pages/details/daikuan?id=${this.lsId}`,
          });
          break;
        }
        case "dkr": {
          uni.navigateTo({
            url: `/subPackages/pages/details/daikuanPeo?id=${this.lsId}`,
          });
          break;
        }
        case "gdr": {
          uni.navigateTo({
            url: `/subPackages/pages/details/gongdai?id=${this.lsId}&index=${n}`,
          });
          break;
        }
        default: {
          break;
        }
      }
    },
    lederItem(n) {
      uni.navigateTo({
        url: `/subPackages/pages/lederInformation?index=${n}`,
      });
    },
    addPeople() {
      this.lederList.push({
        n: this.lederList.length + 1,
        ifWrite: false,
      });
      uni.setStorageSync("lederList", this.lederList);
    },
    getLederItem(n) {
      let data = uni.getStorageSync(`leder${n}`);
      if (data) {
        this.lederList[n - 1].ifWrite = true;
        this.lederObjList.push(data.form);
      }
    },
    getIsInput() {
      const list = uni.getStorageSync("lederList");
      this.peo = uni.getStorageSync("people");
      this.loan = uni.getStorageSync("loan");
      if (list) {
        this.lederList = list;
        this.lederList.forEach((item) => {
          this.getLederItem(item.n);
        });
      }
      if (this.peo) {
        this.peoType = true;
      } else {
        this.peoType = false;
      }
      if (this.loan) {
        this.loanType = true;
      } else {
        this.loanType = false;
      }
    },
    closeOrder() {
      let that = this;
      uni.showModal({
        title: "提示",
        content: "您确定要取消此订单吗？",
        confirmText: "不取消",
        confirmColor: "#0090D9",
        success: function (res) {
          if (res.confirm) {
            return true;
          } else if (res.cancel) {
            uni.removeStorageSync("lederList");
            uni.removeStorageSync("people");
            uni.removeStorageSync("loan");
            that.lederList.forEach((item) => {
              uni.removeStorageSync(`leder${item.n}`);
            });
            uni.navigateBack();
          }
        },
      });
    },
    submitOrder() {
      let newObj = Object.assign(this.loan, this.peo.form);
      newObj.relationInfo = JSON.stringify(this.lederObjList);
      toast.showLoading("提交中");
      this.$api
        .addOrder(newObj)
        .then((res) => {
          if (res.code === 0) {
            toast.showToast("提交成功");
            uni.removeStorageSync("lederList");
            uni.removeStorageSync("people");
            uni.removeStorageSync("loan");
            this.lederList.forEach((item) => {
              uni.removeStorageSync(`leder${item.n}`);
            });
            uni.navigateBack();
          } else {
            toast.showToast("提交失败");
          }
          uni.hideLoading();
        })
        .catch(() => {
          uni.hideLoading();
        });
    },
    toLoan() {
      uni.navigateTo({
        url: "/subPackages/pages/loanInformation",
      });
    },
    toPeople() {
      uni.navigateTo({
        url: "/subPackages/pages/peopleInformation",
      });
    },
    toImg() {
      uni.navigateTo({
        url: "/subPackages/pages/imageInformation",
      });
    },
    toGong() {
      uni.navigateTo({
        url: "/subPackages/pages/lederInformation",
      });
    },
  },
};
</script>
<style scoped>
#order-container {
  margin-top: 24rpx;
}
.order-item-box {
  height: 108rpx;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
}
.order-item-box2 {
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
}
.order-btn {
  width: 50%;
  height: 104rpx;
  color: #fff;
  font-size: 40rpx;
}
.btn-box {
  z-index: 99;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
.left-btn-back {
  background-color: #d8d8d8;
}
.right-btn-back {
  background-color: #0090d9;
}
.right-btn-back2 {
  background-color: #999;
}
.lin-hei {
  height: 108rpx;
}
.lin-hei2 {
  height: 70rpx;
}
</style>