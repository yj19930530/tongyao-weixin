<template>
  <view id="message-container">
    <view class="message-top-box fl-acen">
      <text class="fz-14 fc-999 mr-r-50 mr-l-30">未读消息2条</text>
      <text class="iconfont icon-qingchugeshi fz-15"></text>
      <text class="fc-999">全部已读</text>
    </view>
    <view>
     <messageItem v-for="item in 5" :key="item" :num="item" />
    </view>
  </view>
</template>
<style  scoped>
.message-top-box {
  width: 100%;
  height: 80rpx;
  background-color: #f8f8f8;
}
</style>