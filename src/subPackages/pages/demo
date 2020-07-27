<template>
    <view>
        <text>新增订单</text>
        <button @tap="updataVideo">上传视频</button>
        <button @tap="updataImg">上传图片</button>
        <video :src="video"></video>
        <image :src="img" />
    </view>
</template>
<script>
const {common} = require('../../utils/index.js');
export default {
  data() {
      return{
          img:'',
          video:''
      }
  },
  onLoad() {},
  methods: {
   async updataVideo() {
        // const data = await common.updataVideo();
            uni.chooseVideo({
            count: 1,
            success: res => {
                console.log(res.tempFilePath)
                this.video = res.tempFilePath
            },
            fail: () => {
                reject(false)
            }
        })
        // console.log('in')
    },
   async updataImg() {
       const data = await common.updataImg();
       console.log(data)
    
    }
  }
};
</script>
<style scoped>
</style>

