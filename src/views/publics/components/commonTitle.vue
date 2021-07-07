<template>
<div style="height: 60px">
    <Header class="header" style="height:60px">
        <div class="commonTitle">
            <div class="commonLogo">
                <img src="../../../assets/images/commonTitle/logo.png"/>
                <span class="commonTitleres commonTitleres_one">{{commonTitleres}}</span>
            </div>
            <div class="commonTitleS">
                <span class="commonTitles commonTitleS_one">数字化投诉分析管理系统</span>
            </div>
            <div class="commonTime">
                <span class="times timed">{{nowDates}}</span>
                <span class="names">王一博</span>
            </div>
        </div>
    </Header>
</div>
</template>

<script>
export default {
    data(){
        return {
            commonTitleres: '我的工作',
            nowDates: ''
        }
    },
    created() {
        this.getDates()
    },
    methods: {
      // 获取当前的日期
      getDates(){
        var day2 = new Date();
        day2.setTime(day2.getTime());
        var s2 = day2.getFullYear()+"年" + (day2.getMonth()+1) + "月" + day2.getDate() + '日';
        this.nowDates = s2;
      },
    }
}
</script>

<style scoped>
.header{
    background: none;
    padding: 0rem;
    height: 3.75rem;
    line-height: 3.75rem;
    position: fixed;
    width: 100%;
    z-index: 999;
}
.commonTitle{
  width: 100%;
  height: 60px;
  background: #11172F;
  text-align: center;
  overflow: hidden;
  background-image: url("../../../assets/images/commonTitle/bg04.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.commonLogo{
  width: 30%;
  height: 60px;
  float: left;
   /* background-image: url("../../assets/images/commonTitle/bg01.png");
   background-size: 100% 100%;
   background-repeat: no-repeat; */
  display: flex;
  justify-content: space-around;
}
.commonLogo img{
  display: inline-block;
  width: 140px;
  height: 45px;
  margin-top: 5px;
}
.commonLogo .commonTitleres{
  display: inline-block;
  font-size: 12px;
  line-height: 60px;
  position: relative;
  margin-left: 50px;
}
.commonLogo .commonTitleres_one{ 
  background-image:-webkit-linear-gradient(bottom,#51aefe,#89f5fc);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.commonTitleS{
  width: 40%;
  height: 60px;
  /* margin-left: -20px; */
  float: left;
}
.commonTitleS .commonTitles{
  font-size: 22px;
  line-height: 66px;
  font-weight: 500;
  position: relative;
}
.commonTitleS .commonTitleS_one{ 
  background-image:-webkit-linear-gradient(bottom,#51aefe,#89f5fc);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.commonTime{
  width: 30%;
  float: left;
  margin-left: -25px;
   /* background-image: url("../../assets/images/commonTitle/bg03.png");
   background-size: 100% 100%;
   background-repeat: no-repeat; */
  justify-content: space-around;
  position: relative;
}
.commonTime .times{
  display: inline-block;
  font-size: 12px;
  margin-left: 53px;
  line-height: 50px;
  color: #6bf6fd;
  position: absolute;
    left: 33%;
    top: 2px;
}
/* .commonTime .timed{ 
  background-image:-webkit-linear-gradient(bottom,#4392d6,#57c9d5);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
} */

.commonTime .names{
  font-size: 10px;
  color: #6bf6fd;
  position: absolute;
  left: 76%;
  top: -6px;
}
</style>
    