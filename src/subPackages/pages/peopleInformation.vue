<template>
  <view id="people-container">
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">请拍摄并上传你的有效身份证</text>
    </view>
    <view class="sfz-container">
      <view class="fl-bt">
        <view class="fl-fo">
          <image class="sfz-img-style" @tap="updataImgZheng('front')" v-if="faceImg===''" src="../../static/face.png"></image>
          <image class="sfz-img-style" v-else :src="faceImg"></image>
          <view class="fl-cen update-btn" @tap="updataImgZheng('front')" v-if="faceImg===''">
            <text class="fc-fff fz-14">上传身份证正面</text>
          </view>
          <view class="fl-cen update-btn" v-else @tap="deleteImg('front')">
            <text class="fc-fff fz-14">刪除</text>
          </view>
        </view>
        <view class="fl-fo">
          <image class="sfz-img-style" @tap="updataImgZheng('back')" v-if="backImg===''" src="../../static/blck.png"></image>
          <image class="sfz-img-style" v-else :src="backImg"></image>
          <view class="fl-cen update-btn" @tap="updataImgZheng('back')" v-if="backImg===''">
            <text class="fc-fff fz-14">上传身份证反面</text>
          </view>
          <view class="fl-cen update-btn" v-else @tap="deleteImg('back')">
            <text class="fc-fff fz-14">刪除</text>
          </view>
        </view>
      </view>
    </view>
    <view class="people-infor fl-acen">
      <text class="fz-14 mr-l-30 fc-999">请确认并完善身份信息</text>
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">主贷人姓名</text>
      <input
        v-model="form.name"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <picker @change="bindPickerChange" :value="form.sex" :range="array">
      <view class="sfz-form-item fl-bt">
        <text class="fz-15 fz-14 mr-l-30">主贷人性别</text>
        <view class="fl-acen mr-r-30">
          <view class="uni-input fz-14 fc-999" v-if="form.sex===''">请选择</view>
          <view class="uni-input fz-14" v-else>{{form.sex}}</view>
          <text class="iconfont icon-youjiantou fc-999"></text>
        </view>
      </view>
    </picker>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">户籍</text>
      <input
        v-model="form.registerAddress"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">居住地址</text>
      <input
        v-model="form.liveAddress"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">身份证号码</text>
      <input
        v-model="form.idNo"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        type="idcard"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">签发机关</text>
      <input
        v-model="form.idOffice"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">身份证地址</text>
      <input
        v-model="form.idAddress"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">银行卡号</text>
      <input
        v-model="form.bankNo"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        type="number"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">联系电话</text>
      <input
        v-model="form.mblNo"
        class="uni-input for-item-input fz-14 mr-r-30"
        placeholder="请输入"
        type="number"
        placeholder-class="fc-999"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">有效期限</text>
      <view class="fl-acen mr-r-30">
        <picker
          mode="date"
          :value="form.idStartTime"
          :start="startDate"
          :end="endDate"
          @change="bindDateChangeStart"
        >
          <view class="uni-input fz-15">{{form.idStartTime}}</view>
        </picker>
        <text class="mr-l-10 mr-r-10">-</text>
        <picker
          :disabled="isLang"
          mode="date"
          :value="form.idEndTime"
          :start="startDate"
          :end="endDate"
          @change="bindDateChangeEnd"
        >
          <view class="uni-input fz-15">{{form.idEndTime}}</view>
        </picker>
        <checkbox-group @change="checkboxChange">
          <label>
            <checkbox style="transform:scale(0.7)" color="#0090D9" value="yse" />
            <text class="fz-11 fc-999">长期</text>
          </label>
        </checkbox-group>
      </view>
    </view>
    <view class="book-img-content">
      <view class="book-img fl-co mr-l-30" @tap="uploadBook" v-if="shouImg===''">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">授权书</text>
      </view>
      <view class="img-box-shou mr-l-30" v-else>
        <image class="book-img" :src="shouImg" />
        <view class="fl-cen mr-t-10 delete-img">
          <text class="fz-11 fc-999" @tap="deleteImg">删除</text>
        </view>
      </view>
    </view>
    <view class="fl-cen filish-btn" @tap="savePage">
      <text class="fz-20 filish-btn-text fc-fff">完成</text>
    </view>
  </view>
</template>
<script>
import { toast } from "../../utils";
const { updataImg } = require("../../utils/lib/common.js");
export default {
  data() {
    return {
      array: ["男", "女"],
      form: {
        liveAddress: "", // 居住地址
        name: "", // 姓名
        mblNo: "", // 电话
        registerAddress: "", // 户籍
        idAddress: "", // 身份证地址
        sex: "", // 性別
        idNo: "", // 身份證號碼
        idOffice: "", // 签发机关
        bankNo: "", // 银行卡号
        idStartTime: "起始日期", // 证件有限期起始日
        idEndTime: "截止日期", // 证件有限期截止日
        idBack: {}, // 身份背面证照
        idPostive: {}, // 身份正面证照
        sqFile: {}, //授权证照
      },
      faceImg: "",
      backImg: "",
      isLang: false,
      shouImg: "",
      endTime: "截止日期",
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },
  },
  onLoad() {
    const data = uni.getStorageSync("people");
    if (data) {
      this.form = data;
      this.faceImg = data.idPostive.path;
      this.backImg = data.idBack.path;
      this.shouImg = data.sqFile.path;
    }
  },
  methods: {
    // 保存
    savePage() {
      if (this.faceImg === "") return toast.showToast("请上传身份证正面");
      if (this.backImg === "") return toast.showToast("请上传身份证反面");
      uni.setStorageSync("people", this.form);
      uni.showModal({
        title: "提示",
        content: "保存成功",
        showCancel: false,
        confirmText: "返回",
        success: function (res) {
          uni.navigateBack();
        },
      });
    },
    // 刪除
    deleteImg(type) {
      if (type === "front") {
        this.faceImg = "";
      } else {
        this.backImg = "";
      }
    },
    async updataImgZheng(type) {
      const data = await updataImg();
      let sfzType = "";
      // const sfzType = type;
      if (type === "front") {
        // this.faceImg = data.imgPath;
        sfzType = `{"side":"face"}`;
      } else {
        // this.backImg = data.imgPath;
        sfzType = `{"side":"back"}`;
      }
      uni.getFileSystemManager().readFile({
        encoding: "base64",
        filePath: data.imgPath,
        success: (res) => {
          uni.request({
            method: "POST",
            // url: "http://yixi.market.alicloudapi.com/ocr/idcardocr",
            url: "http://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json",
            data: {
              image: res.data,
              configure: sfzType,
              // side: sfzType,
            },
            header: {
              // Authorization: "APPCODE dcc12e102b9443008946ffd30e69a84c",
              // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
              Authorization: "APPCODE 8a2c3244c30b431db3b8e6e398f37670",
            },
            // dataType: "json",
            // responseType: "text",
            success: (res) => {
              const objData = res.data;
              if (res.statusCode === 200) {
                if (type === "front") {
                  this.faceImg = data.imgPath;
                  this.form.idPostive = data.imgObj;
                  this.form.name = objData.name;
                  this.form.idNo = objData.num;
                  this.form.sex = objData.sex;
                  this.form.idAddress = objData.address;
                } else {
                  this.backImg = data.imgPath;
                  this.form.idBack = data.imgObj;
                  this.form.idStartTime = this.timeText(objData.start_date);
                  this.form.idEndTime = this.timeText(objData.end_date);
                  this.endTime = this.timeText(objData.end_date);
                  this.form.idOffice = objData.issue;
                }
              } else {
                toast.showToast("请上传正确的身份证照片");
              }
            },
            error: (err) => {
              toast.showToast("err");
            },
          });
        },
      });
      // console.log(data);
    },
    timeText(time) {
      let y = time.slice(0, 4);
      let m = time.slice(4, 6);
      let d = time.slice(6, 8);
      return y + "-" + m + "-" + d;
    },
    async uploadBook() {
      let data = await updataImg();
      this.form.sqFile = data.imgObj;
      this.shouImg = data.imgPath;
    },
    bindPickerChange(data) {
      this.form.sex = this.array[data.detail.value];
    },
    bindDateChangeStart: function (e) {
      this.form.idStartTime = e.target.value;
    },
    bindDateChangeEnd: function (e) {
      this.endTime = e.target.value;
      this.form.idEndTime = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    // 时间期限 长期
    checkboxChange(e) {
      if (e.detail.value[0] === "yse") {
        this.isLang = true;
        this.form.idEndTime = "";
      } else {
        this.isLang = false;
        this.form.idEndTime = this.endTime;
      }
    },
    deleteImg() {
      this.shouImg = "";
      this.form.sqFile = {};
    },
  },
};
</script>
<style scoped>
#people-container {
  padding-bottom: 108rpx;
}
.people-infor {
  width: 100%;
  height: 80rpx;
}
.sfz-container {
  padding: 32rpx 30rpx;
  background-color: #fff;
}
.sfz-img-style {
  width: 324rpx;
  height: 218rpx;
  border-radius: 10rpx 10rpx 0 0;
}
.update-btn {
  width: 324rpx;
  height: 60rpx;
  background-color: #0090d9;
  border-radius: 0 0 10rpx 10rpx;
}
.sfz-form-item {
  width: 100%;
  height: 108rpx;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
}
.for-item-input {
  width: 400rpx;
  text-align: right;
}
.filish-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 108rpx;
  background-color: #0090d9;
}
.filish-btn-text {
  letter-spacing: 20rpx;
}
.book-img {
  width: 224rpx;
  height: 224rpx;
  border-radius: 16rpx;
  border: 2px solid #999999;
}
.book-img-content {
  padding: 62rpx 0;
  background-color: #fff;
}
.label-style {
  width: 20rpx;
  height: 20rpx;
}
.delete-img {
  width: 224rpx;
}
</style>