<template>
  <view class="detail-content">
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">GPS安装:</view>
      <view class="mr-r-30 fz-14 item-right">{{gpsData(dataDet.gps_info)}}</view>
    </view>
    <view class="fl-bt detail-item-content">
      <view class="mr-l-30 fz-15 item-left">类型:</view>
      <view
        class="mr-r-30 fz-14 item-right"
      >{{dataDet.isOldCar===1?'二手车':dataDet.isOldCar===0?'新车':'-'}}</view>
    </view>
    <view v-if="isOldCar===1">
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">真是车型品牌:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.old_car_type||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">原公里数:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.old_car_distance||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">原车年限:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.old_car_years||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">执行利率:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.execution_rate||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">线上评估价:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.home_assessment||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">客户申请贷款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.apply_loan||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">融资金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.financing_amount||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">最终贷款金额(不含利息):</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.end_loan||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">车辆价格(送行评估价):</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.send_car_value||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">首月还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.first_repayment||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">以后每月还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.next_repayment||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">本息合计金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.loan_total||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">总和附加服务费贷款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.comprehensive_total||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">附加费首月还款:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.comprehensive_first||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">附加费每月还款:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.other_not||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">附加费本息合计:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.other_odd||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">真实评估价贷款成数:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.generation_real||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">调查费:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.Investigation_fee||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">新车价:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.new_value||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">成新率:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.regeneration_rate||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">首月总还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.first_all||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">以后每月总还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.next_all||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">贷款金额(送行):</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.send_loan_value||'-'}}</view>
      </view>
    </view>
    <view v-else>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">车型品牌:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.car_type||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">发票价格:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.car_value||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">贷款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.car_loan||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">执行利率:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.execution_rate||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">客户申请贷款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.apply_loan||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">融资金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.financing_amount||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">最终贷款金额(不含利息):</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.end_loan||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">首月还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.first_repayment||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">以后每月还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.next_repayment||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">本息合计金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.loan_total||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">综合附加服务费贷款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.comprehensive_total||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">附加费首月还款:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.comprehensive_first||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">附加费每月还款:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.comprehensive_next||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">附加费本息合计:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.all_total||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">调查费:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.Investigation_fee||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">首月总还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.first_all||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">以后每月总还款金额:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.next_all||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">其他费用:</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.other_price||'-'}}</view>
      </view>
      <view class="fl-bt detail-item-content">
        <view class="mr-l-30 fz-15 item-left">贷款金额(送行):</view>
        <view class="mr-r-30 fz-14 item-right">{{dataDet.send_loan_value||'-'}}</view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      dataDet: {},
    };
  },
  onLoad(data) {
    this.dataDet = JSON.parse(data.det);
  },
  methods: {
    gpsData(text) {
      let textArr = text.split("");
      let textStr = "";
      textArr.forEach((item) => {
        if (item === "1") {
          textStr += "有线,";
        }
        if (item === "2") {
          textStr += "无线";
        }
      });
      return textStr;
    },
  },
};
</script>
<style scoped>
.detail-item-content {
  padding: 20rpx 0;
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