<template>
  <view id="login-container" class="fl-co">
    <image class="login-back-img" src="../../static/loginback.png"></image>
    <view class="login-form-box fl-co">
      <text class="fz-20 fw-bold">通耀汽车业务管理系统</text>
      <view class="form-content mr-t-40">
        <view class="form-input-item fl-acen">
          <text class="iconfont icon-shouji fc-009 mr-l-30 fz-17"></text>
          <input
            v-model="form.userName"
            class="item-input-style fl-acen"
            placeholder="请输入登录账号"
            placeholder-class="fc-999"
          />
        </view>
        <view class="form-input-item fl-acen">
          <text class="iconfont icon-mian-mima fc-009 mr-l-30 fz-17"></text>
          <input
            type="password"
            v-model="form.password"
            class="item-input-style fl-acen"
            placeholder="请输入登录密码"
            placeholder-class="fc-999"
          />
        </view>
      </view>
      <button class="login-btn-style fl-cen fz-18" @tap="loginSubmit" type="primary">登 录</button>
    </view>
  </view>
</template>
<script>
const { common, toast } = require("../../utils/index");
export default {
  data() {
    return {
      form: {
        // userName: "ywytest",
        // password: "111111",
        userName: "",
        password: "",
      },
      loginLoading: false,
    };
  },
  onLoad() {},
  methods: {
    loginSubmit() {
      toast.showLoading('登录中')
      this.loginLoading = true;
      this.$api
        .userLogin({
          userName: this.form.userName,
          password: this.form.password,
        })
        .then((res) => {
          common.saveData("token", res.body.token);
          toast.showToast('登录成功')
          uni.hideLoading()
          uni.reLaunch({
            url: "/pages/page/home",
          });
        }).catch(()=>{
          uni.hideLoading()
        })
    },
  },
};
</script>
<style scoped>
#login-container {
  flex-direction: column;
}
.login-back-img {
  width: 100%;
  height: 568rpx;
}
.login-form-box {
  position: relative;
  top: -214rpx;
  width: 612rpx;
  height: 728rpx;
  box-shadow: 0 0 10px #b8b3b3;
  background-color: #fff;
  border-radius: 8rpx;
}
.form-input-item {
  padding: 30rpx 0;
  width: 514rpx;
  border-bottom: 1px solid #e7e7e7;
}
.item-input-style {
  padding-left: 30rpx;
}
.login-btn-style {
  margin-top: 98rpx;
  width: 436rpx;
  height: 80rpx;
  background-color: #0090d9;
  border-radius: 80rpx;
}
</style>