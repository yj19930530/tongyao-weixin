<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    uni.showTabBarRedDot({index:1})
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
@import "./styles/common.css";
@import "./styles/iconfont/iconfont.css";
page {
  color: #333333;
}
</style>
