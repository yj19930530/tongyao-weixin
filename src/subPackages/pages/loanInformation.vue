<template>
  <view id="loan-container">
    <picker
      name="loanType"
      @change="bindPickerLoan"
      :value="form.loanType"
      :range="loanList"
      range-key="name"
    >
      <view class="loan-form-item mr-t-20 fl-bt">
        <text class="mr-l-30 fz-15">业务品种</text>
        <view class="fl-acen mr-r-30">
          <view class="fl-acen">
            <view class="uni-input fz-14 fc-999" v-if="form.loanType===''">请选择</view>
            <view class="uni-input fz-14" v-else>{{loanName}}</view>
          </view>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </picker>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">车辆品牌</text>
      <input
        class="uni-input fz-14 mr-r-30 input-width-250"
        placeholder="请输入您的车辆品牌"
        placeholder-class="fc-999"
        name="carType"
        v-model="form.carType"
      />
    </view>
    <picker
      name="businessType"
      @change="bindPickerBus"
      :value="form.businessType"
      :range="businessList"
      range-key="name"
    >
      <view class="loan-form-item mr-t-20 fl-bt">
        <text class="mr-l-30 fz-15">业务类型</text>
        <view class="fl-acen mr-r-30">
          <view class="fl-acen">
            <view class="uni-input fz-14 fc-999" v-if="form.businessType===''">请选择</view>
            <view class="uni-input fz-14" v-else>{{businessName}}</view>
          </view>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </picker>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">意向金额</text>
      <view class="fl-acen">
        <input
          name="intentionAmount"
          v-model="form.intentionAmount"
          class="uni-input fz-14 input-width-250 fl-cen"
          placeholder="请输入金额"
          type="digit"
          placeholder-class="fc-999"
        />
        <text class="fz-14 mr-r-30">元</text>
      </view>
    </view>
    <picker
      name="intentionTerm"
      @change="bindPickerInten"
      :value="form.intentionTerm"
      :range="intentionList"
      range-key="name"
    >
      <view class="loan-form-item mr-t-20 fl-bt">
        <text class="mr-l-30 fz-15">意向贷款期限</text>
        <view class="fl-acen mr-r-30">
          <view class="fl-acen">
            <view class="uni-input fz-14 fc-999" v-if="form.intentionTerm===''">请选择</view>
            <view class="uni-input fz-14" v-else>{{intentionName}}</view>
          </view>
          <text class="iconfont icon-youjiantou"></text>
        </view>
      </view>
    </picker>
    <view class="loan-form-item fl-bt">
      <text class="mr-l-30 fz-15">意向贷款金额</text>
      <view class="fl-acen">
        <input
          name="loanAmount"
          v-model="form.loanAmount"
          class="uni-input fz-14 input-width-250 fl-cen"
          placeholder="请输入金额"
          type="digit"
          placeholder-class="fc-999"
        />
        <text class="fz-14 mr-r-30">元</text>
      </view>
    </view>
    <view class="save-btn fl-cen mr-t-60" @tap="editForm" v-if="editType">
      <text class="fz-20 fc-fff le-spc">修改</text>
    </view>
    <view class="save-btn fl-cen mr-t-60" @tap="saveForm" v-else>
      <text class="fz-20 fc-fff le-spc">保存</text>
    </view>
  </view>
</template>
<script>
const graceChecker = require("../../utils/graceChecker");
const { toast, common } = require("../../utils/index");
export default {
  data() {
    return {
      loanList: [], // 业务品种 8
      businessList: [], // 业务类型 10
      intentionList: [], // 意向贷款期限 11
      form: {
        carType: "", // 车辆品牌
        businessType: "", // 业务类型
        intentionAmount: "", // 意向金额
        intentionTerm: "", // 意向期限
        loanAmount: "", // 意向贷款金额
        loanType: "", // 品种
      },
      editType: false,
      editId: 0,
      loanName: "",
      businessName: "",
      intentionName: "",
      rules: [
        {
          name: "loanType",
          checkType: "notnull",
          errorMsg: "请选择业务品种",
        },
        {
          name: "carType",
          checkType: "notnull",
          errorMsg: "请输入车辆品牌",
        },
        {
          name: "businessType",
          checkType: "notnull",
          errorMsg: "请选择业务类型",
        },
        {
          name: "intentionAmount",
          checkType: "int",
          checkRule: "1,20",
          errorMsg: "请输入意向金额",
        },
        {
          name: "intentionTerm",
          checkType: "notnull",
          errorMsg: "请选择意向贷款期限",
        },
        {
          name: "loanAmount",
          checkType: "int",
          errorMsg: "请输入意向贷款金额",
          checkRule: "1,20",
        },
      ],
    };
  },
  async onLoad(obj) {
    await this.getDicList();
    if (obj.id) {
      this.editType = true;
      this.editId = obj.id;
      this.getDetaisl();
    } else {
      const formData = uni.getStorageSync("loan");
      if (formData) {
        this.form = formData;
        this.loanName = this.getDicRe(this.loanList, this.form.loanType);
        this.businessName = this.getDicRe(
          this.businessList,
          this.form.businessType
        );
        this.intentionName = this.getDicRe(
          this.intentionList,
          this.form.intentionTerm
        );
      }
    }
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
    // 获取详情
    getDetaisl() {
      this.$api
        .getOrderDetails({
          id: this.editId,
        })
        .then((res) => {
          const data = res.body.applyInfo;
          this.form = common.objAss(this.form, res.body.applyInfo);
          this.loanName = this.getDicRe(this.loanList, this.form.loanType);
          this.businessName = this.getDicRe(
            this.businessList,
            this.form.businessType
          );
          this.intentionName = this.getDicRe(
            this.intentionList,
            this.form.intentionTerm
          );
        });
    },
    // 获取数据字典
    async getDicList() {
      this.loanList = await this.getDicData(8);
      this.businessList = await this.getDicData(10);
      this.intentionList = await this.getDicData(11);
    },
    async getDicData(id) {
      const { body } = await this.$api.getDic({
        catalogId: id,
      });
      return body.list;
    },
    // 保存
    saveForm() {
      const val = graceChecker.check(this.form, this.rules);
      if (val) {
        uni.setStorageSync("loan", this.form);
        uni.showModal({
          title: "提示",
          content: "保存成功",
          showCancel: false,
          confirmText: "返回",
          success: function (res) {
            uni.navigateBack();
          },
        });
      } else {
        toast.showToast(graceChecker.error);
      }
    },
    // 修改
    editForm() {
      const val = graceChecker.check(this.form, this.rules);
      if (val) {
        toast.showLoading("修改中");
        this.$api
          .editOrder(this.form)
          .then((res) => {
            uni.hideLoading();
            if (res.code === 0) {
              uni.showModal({
                title: "提示",
                content: "修改成功",
                showCancel: false,
                confirmText: "返回",
                success: function (res) {
                  uni.navigateBack();
                },
              });
            } else {
              toast.showToast("修改失败");
            }
          })
          .catch(() => {
            uni.hideLoading();
          });
      } else {
        toast.showToast(graceChecker.error);
      }
    },
    bindPickerLoan(data) {
      this.loanList.forEach((item, index) => {
        if (index == data.detail.value) {
          this.loanName = item.name;
          this.form.loanType = item.value;
        }
      });
    },
    bindPickerBus(data) {
      this.form.businessType = this.businessList[data.detail.value].value;
      this.businessName = this.businessList[data.detail.value].name;
    },
    bindPickerInten(data) {
      this.form.intentionTerm = this.intentionList[data.detail.value].value;
      this.intentionName = this.intentionList[data.detail.value].name;
    },
  },
};
</script>
<style scoped>
.loan-form-item {
  height: 108rpx;
  border-bottom: 1px solid #f8f8f8;
  background-color: #fff;
}

.input-width-250 {
  width: 282rpx;
  text-align: right;
}

.save-btn {
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}

.le-spc {
  letter-spacing: 20rpx;
}

.in-width-100 {
  width: 100%;
}
</style>
