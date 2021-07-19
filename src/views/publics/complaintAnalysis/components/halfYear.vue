<template>
  <div id="divId">
    <div
      :style="{width: '100%', height: (screenHeight - 100) + 'px'}"
      class="content"
    >
      <div
        v-for="(item, index) in menus" :key="index"
        :style="{width: '100%', height: (screenHeight - 250) + 'px'}"
        :class="activeClass == index?'selected':''"
      >
        <div @click="IsActive(index)">
          <img :src="item.image" alt="">
          <div style="text-align: center;">{{item.name}}</div>
        </div>
      </div>
      <div class="btn1">报告模版 下载/保存</div>
      <div class="btn2">报告模版 上传/邮件</div>
    </div>
  </div>
</template>

<script>
import { getheight } from '../../../../plugin/getheight.js'
export default {
  name: 'month',
  data () {
    return {
      screenHeight: document.documentElement.clientHeight - 60 - 15 - 32 - 10 - 30 - 20 - 20,
      menus: [
        {
          name: ' 优秀报告案例展示',
          image: require('../../../../assets/images/complaintAnalysis/good.png')
        },
        {
          image: require('../../../../assets/images/complaintAnalysis/jiantou.png')
        },
        {
          name: '数据展示',
          image: require('../../../../assets/images/complaintAnalysis/showdata.png')
        },
        {
          image: require('../../../../assets/images/complaintAnalysis/jiantou.png')
        },
        {
          name: '自主数据设计',
          image: require('../../../../assets/images/complaintAnalysis/setdata.png')
        }
      ],
      activeClass: -1
    }
  },
  mounted() {
    let _this = this
    window.onresize = function () {
      _this.screenHeight = getheight('divId') - 60 - 15 - 32 - 10 - 30 - 20 - 20
      console.log(624-250)
    }
  },
  methods: {
    IsActive (k) {
      if (k == 0 || k == 2 || k == 4) {
        this.activeClass = k
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    background: url(../../../../assets/images/complaintAnalysis/bg.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    position: relative;
    &>div:nth-child(1){
      background: url(../../../../assets/images/complaintAnalysis/boxBg.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &>img{
        width: 70%;
      }
      &>div{
        font-weight: 500;
        font-size: 16px;
        padding-top: 20px;
      }
    }
    &>div:nth-child(2){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
    }
    &>div:nth-child(3){
      background: url(../../../../assets/images/complaintAnalysis/boxBg.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &>img{
        width: 70%;
      }
      &>div{
        font-weight: 500;
        font-size: 16px;
        padding-top: 20px;
      }
    }
    &>div:nth-child(4){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
    }
    &>div:nth-child(5){
      background: url(../../../../assets/images/complaintAnalysis/boxBg.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &>img{
        width: 70%;
      }
      &>div{
        font-weight: 500;
        font-size: 16px;
        padding-top: 20px;
      }
    }
  }
  .selected{
    background: url(../../../../assets/images/complaintAnalysis/box.png) no-repeat !important;
    background-size: 100% 100% !important;
    color: #00FBFF;
  }
  .btn1{
    position: absolute;
    bottom: 2.2%;
    left: 33.5%;
    color: #000047;
    font-size: 15px;
    font-weight: 500;
  }
  .btn2{
    position: absolute;
    bottom: 2.2%;
    right: 33.5%;
    color: #000047;
    font-size: 15px;
    font-weight: 500;
  }
</style>