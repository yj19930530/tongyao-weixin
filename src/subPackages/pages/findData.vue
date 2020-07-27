<template>
  <view class="resole-data-container">
    <businessItem v-for="item in arr" :key="item" :num="item" />
  </view>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style scoped>
.resole-data-container {
  padding: 0 10rpx;
}
</style>