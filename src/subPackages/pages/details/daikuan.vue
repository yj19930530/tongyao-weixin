<template>
  <view class="detail-content">
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">业务品种:</view>
      <view class="mr-r-30 fz-14 item-right">{{loanName}}</view>
    </view>
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">车辆品牌:</view>
      <view class="mr-r-30 fz-14 item-right">{{form.carType||'-'}}</view>
    </view>
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">业务类型:</view>
      <view class="mr-r-30 fz-14 item-right">{{busName}}</view>
    </view>
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">意向金额:</view>
      <view class="mr-r-30 fz-14 item-right">{{form.intentionAmount||'-'}}</view>
    </view>
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">意向贷款期限:</view>
      <view class="mr-r-30 fz-14 item-right">{{intenName}}</view>
    </view>
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">意向贷款金额:</view>
      <view class="mr-r-30 fz-14 item-right">{{form.loanAmount||'-'}}</view>
    </view>
  </view>
</template>
<script>
const { common } = require("../../../utils/index");
export default {
  data() {
    return {
      lsId: "",
      form: {
        carType: "", // 车辆品牌
        businessType: "", // 业务类型
        intentionAmount: "", // 意向金额
        intentionTerm: "", // 意向期限
        loanAmount: "", // 意向贷款金额
        loanType: "", // 品种
      },
      loanList: [],
      businessList: [],
      intentionList: [],
      loanName: "",
      busName:'',
      intenName:'',
    };
  },
  async onLoad(data) {
    this.lsId = data.id;
    await this.getDetails();
    await this.getDicList();
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
    // 获取数据字典
    async getDicList() {
      this.loanList = await this.getDicData(8);
      this.businessList = await this.getDicData(10);
      this.intentionList = await this.getDicData(11);
      this.loanName = this.getDicRe(this.loanList, this.form.loanType);
      this.busName = this.getDicRe(this.businessList, this.form.businessType);
      this.intenName = this.getDicRe(this.intentionList, this.form.intentionTerm);
    },
    async getDicData(id) {
      const { body } = await this.$api.getDic({
        catalogId: id,
      });
      return body.list;
    },
    getDetails() {
      this.$api
        .getOrderDetails({
          id: this.lsId,
        })
        .then((res) => {
          const data = res.body.applyInfo;
          this.form = common.objAss(this.form, res.body.applyInfo);
        });
    },
  },
};
</script>
<style scoped>
.detail-item-content {
  height: 108rpx;
  background-color: #ffffff;
}
.item-left {
  width: 50%;
}
.item-right {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}
</style>