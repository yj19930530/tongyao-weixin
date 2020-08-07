<template>
  <view id="people-container">
    <view class="sfz-container">
      <view class="fl-bt">
        <view class="fl-fo">
          <image class="sfz-img-style" v-if="faceImg===''" src="../../../static/face.png"></image>
          <image class="sfz-img-style" v-else :src="faceImg" @tap="_previewImage(faceImg)"></image>
          <view class="fl-cen update-btn" v-if="faceImg===''">
            <text class="fc-fff fz-14">没有图片</text>
          </view>
          <view class="fl-cen update-btn" v-else @tap="_previewImage(faceImg)">
            <text class="fc-fff fz-14">查看</text>
          </view>
        </view>
        <view class="fl-fo">
          <image class="sfz-img-style" v-if="backImg===''" src="../../../static/blck.png"></image>
          <image class="sfz-img-style" v-else :src="backImg" @tap="_previewImage(backImg)"></image>
          <view class="fl-cen update-btn" v-if="backImg===''">
            <text class="fc-fff fz-14">没有图片</text>
          </view>
          <view class="fl-cen update-btn" v-else @tap="_previewImage(backImg)">
            <text class="fc-fff fz-14">查看</text>
          </view>
        </view>
      </view>
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">主贷人姓名</text>
      <input
        v-model="form.name"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
      />
    </view>
    <picker name="sex" disabled :value="form.sex" :range="array">
      <view class="sfz-form-item fl-bt">
        <text class="fz-15 fz-14 mr-l-30">主贷人性别</text>
        <view class="fl-acen mr-r-30">
          <view class="uni-input fz-14">{{form.sex==='1'?'男':'女'}}</view>
        </view>
      </view>
    </picker>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">户籍</text>
      <input
        v-model="form.registerAddress"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">居住地址</text>
      <input
        v-model="form.liveAddress"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">身份证号码</text>
      <input
        v-model="form.idNo"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
        type="idcard"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">签发机关</text>
      <input
        v-model="form.idOffice"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">身份证地址</text>
      <input
        v-model="form.idAddress"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">银行卡号</text>
      <input
        v-model="form.bankNo"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
        type="number"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">联系电话</text>
      <input
        v-model="form.mblNo"
        disabled
        class="uni-input for-item-input fz-14 mr-r-30"
        type="number"
      />
    </view>
    <view class="sfz-form-item fl-bt">
      <text class="fz-15 fz-14 mr-l-30">有效期限</text>
      <view class="fl-acen mr-r-30">
        <picker disabled :value="form.idStartTime" :start="startDate" :end="endDate">
          <view class="uni-input fz-15">{{form.idStartTime}}</view>
        </picker>
        <text class="mr-l-10 mr-r-10">-</text>
        <picker disabled :value="form.idEndTime" :start="startDate" :end="endDate">
          <view class="uni-input fz-15">{{form.idEndTime}}</view>
        </picker>
        <checkbox-group @change="checkboxChange">
          <label>
            <checkbox
              style="transform:scale(0.7)"
              disabled
              :checked="isck"
              color="#0090D9"
              value="yse"
            />
            <text class="fz-11 fc-999">长期</text>
          </label>
        </checkbox-group>
      </view>
    </view>
    <view class="heng-box-style"></view>
    <picker
      disabled
      name="relationType"
      @change="bindPickerRela"
      :value="form.relationType"
      :range="relaList"
      range-key="name"
    >
      <view class="sfz-form-item fl-bt">
        <text class="fz-15 fz-14 mr-l-30">与主贷人关系</text>
        <view class="fl-acen mr-r-30">
          <view class="uni-input fz-14">{{relationName}}</view>
        </view>
      </view>
    </picker>
    <picker
      name="loanType"
      disabled
      @change="bindPickerLoan"
      :value="form.loanType"
      :range="loanList"
      range-key="name"
    >
      <view class="sfz-form-item fl-bt">
        <text class="fz-15 fz-14 mr-l-30">偿还关系</text>
        <view class="fl-acen mr-r-30">
          <view class="uni-input fz-14">{{loanName}}</view>
        </view>
      </view>
    </picker>
    <view class="book-img-content">
      <view class="book-img fl-co mr-l-30" v-if="shouImg===''">
        <text class="iconfont icon-changyongicon- fz-60 fc-999"></text>
        <text class="fz-14 fc-999">授权书</text>
      </view>
      <view class="img-box-shou mr-l-30" v-else>
        <image class="book-img" :src="shouImg" @tap="_previewImage(shouImg)" />
      </view>
    </view>
  </view>
</template>
<script>
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
        idBack: '', // 身份背面证照
        idPostive: '', // 身份正面证照
        sqFile: '', //授权证照
      },
      faceImg: "",
      backImg: "",
      isLang: false,
      isck:false,
      shouImg: "",
      endTime: "截止日期",
      lsId:'',
      itemIndexd:0,
      relaList:[],
      loanList:[],
      relationName:'',
      loanName:'',
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
  async onLoad(data) {
    this.lsId = data.id;
    this.itemIndexd = data.index;
    await this.getDicList();
    this.getDetails();
  },
  methods: {
    async getDicList() {
      this.relaList = await this.getDicData(1);
      this.loanList = await this.getDicData(9);
    },
    async getDicData(id) {
        const { body } = await this.$api.getDic({
            catalogId: id,
        });
        return body.list;
    },
      // 预览图片
    _previewImage(img) {
      uni.previewImage({
        urls: [img],
        current: img,
      });
    },
    getDetails() {
      this.$api
        .getOrderDetails({
          id: this.lsId,
        })
        .then((res) => {
        const data = res.body.applyInfo;
        this.form = data.relationCust[this.itemIndexd];
        try{
          this.faceImg = this.form.idPostive[0].url;
          this.backImg = this.form.idBack[0].url;
          this.shouImg = this.form.sqFile[0].url;
        }catch{
          
        }
        if(this.form.idEndTime===''||this.form.idEndTime===null){
            this.isck = true;
        }
        this.relationName = this.getDicRe(this.relaList,this.form.relationType);
        this.loanName = this.getDicRe(this.loanList,this.form.loanType);
        this.form.idEndTime = this.form.idEndTime.split(' ')[0];
        this.form.idStartTime = this.form.idStartTime.split(' ')[0];
        });
    },
    getDicRe(list,type){
       let text = '';
       list.forEach(item=>{
        if(item.value === type){
          text = item.name;
        }
      })
      return text;
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
.heng-box-style {
  width: 100%;
  height: 20rpx;
  background-color: #f8f8f8;
}
</style>