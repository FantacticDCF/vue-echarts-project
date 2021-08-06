<template>
  <div class="check">
    <div class="bus-bread" @click="goBack">查询</div>
    <div class="bus-bread1">考核</div>
    <el-row>
      <el-col :span="16">
        <div class="panel">
          <h2 class="title color-blue" >年度目标完成情况</h2>
          <div class="subPanel" v-for="(item,index) in annualObjectives" :key="index">
              <p class="color-blue">{{item.title}}</p>
              <div>
                <label class="color-blue">年度目标</label>
                <el-progress class="pr1 " :percentage="item.rate" :show-text='false'
                             :width="12" :stroke-width="12">
                </el-progress>
                <label class="font22 color-blue">{{item.year}}</label>
                <label class="font18 color-blue mgl-12">{{format(item.name)}}</label>
                <img class="arrow-right" src="../../../assets/images/searchList/you.png">
              </div>
              <div>
                <label class="color-white">完成程度</label>
                <el-progress class="pr2 " :percentage="item.rate2" :show-text='false'
                             :width="12" :stroke-width="12">
                </el-progress>
                <label class="font22 color-orange">{{item.year}}</label>
                <label class="font18 color-orange mgl-12">{{format(item.name)}}</label>
                <img class="arrow-right" src="../../../assets/images/searchList/you.png">
              </div>

          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <h2 class="title" >本月考核</h2>

        </div>
      </el-col>
    </el-row>
   
  </div>
</template>

<script>
export default {
  name: "check",
  data(){
    return {
      // color1:'#00CDFF',
      // color2:'orange',
      annualObjectives : [//年度目标
         {//投诉发生率
          'name':'complaintRate',
          'title':'投诉发生率',
           'rate':90,//百分比
           'rate2':95,//百分比
          'year':0.005,
          'finish':0.007
        },
        {//投诉数量
           'name':'complaintNums',
          'title':'投诉数量',
          'rate':80,//百分比
          'rate2':90,//百分比
          'year':1000,
          'finish':700
        },
        {//处理时效
          'name':'aging',
          'title':'处理时效',
          'rate':70,//百分比
          'rate2':80,//百分比
          'year':48,
          'finish':50
        },
        {//监督投诉量
          'name':'MonitoComplaints',
          'title':'监督投诉量',
          'rate':60,//百分比
          'rate2':70,//百分比
          'year':100,
          'finish':60
        },
      ]

    }
  },
  mounted(){

  },
  methods :{
    format(type){
      // console.log(type,'--')
      switch(type) {
        case 'complaintRate': return '%';
        case 'complaintNums': return '笔';
        case 'aging': return '小时';
        case 'MonitoComplaints': return '笔';
      }
    },
    goBack(){
      this.$router.push({
        path: '/Home/searchList'
      })
    },
  }
}
</script>

<style lang='less' scoped>
.bus-bread1 {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  top: -20px;
  left: 4.5%;

&:after {
   position: absolute;
   content: "";
   left: 4.5%;
   top: 0;
   border-bottom: 7px solid #1a83c0;
   border-left: 9px solid transparent;
   border-top: 9px solid transparent;
   /*border-left和border-right换成透明色 不然是长方形*/
 }
}
.bus-bread {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
&:before {
   position: absolute;
   content: "";
   left: 0;
   top: 0;
   border-bottom: 7px solid #1a83c0;
   border-left: 9px solid transparent;
   border-top: 9px solid transparent;
   /*border-left和border-right换成透明色 不然是长方形*/
 }
&:after {
   position: absolute;
   content: "";
   left: 4.2%;
   top: 0;
   border-bottom: 7px solid #1a83c0;
   border-left: 9px solid transparent;
   border-top: 9px solid transparent;
   /*border-left和border-right换成透明色 不然是长方形*/
 }
}

.check .panel {
    position: relative;
    background: rgba(255, 255, 255, 0.04) url(../../../assets/images/line.png) no-repeat;
    padding: 20px 25px;
    background-size: 100% 100%;
    margin-top: 20px;
  }
  .check .panel h2 {
    height: 22px;
    margin-top: -8px;
    line-height: 23px;
    text-align: left;
    display: block;
    max-width: 195px;
    color: #02d1f4;
    background: url(../../../assets/images/title_bg.png) no-repeat;
    background-size:100% 100%;
    font-size: 12px;
    font-weight: 400;
    padding: 0 8px;
  
  }
  .panel .el-progress {
    width: 38%;
    display: inline-block;
    margin-top: -3px;
    vertical-align: middle;
  }
  .panel label {
    display: inline-block;
    /*line-height: 25px;*/
    /*height: 30px;*/
    margin: 0 15px;
    font-size: 12px;
  }
  .subPanel {
    width: 50%;
    height: 120px;
    display: inline-block;
    background: url("../../../assets/images/searchList/topListdesc.png") no-repeat;
    background-size: 100% 100%;
    margin-left: -5px;
    margin-top: 8px;
    padding-left: 5px;
  }
  .subPanel p{
    margin: 12px 10px;
  }
  .color-white {
    color: #fff;
  }
  .color-blue {
    color: #00CDFF;
  }
  .color-orange {
    color: orange;
  }
  .font18 {
    font-size: 18px!important;
  }
  .font22 {
    font-size: 22px!important;
  }
  .mgl-12 {
    margin-left: -12px!important;
  }

  .el-progress-bar__inner{
    background-image: -webkit-linear-gradient( left, #ed4014, #f90 );
  }
  .el-progress-bar__outer{
    background-color:transparent;
  }
  .arrow-right {
    width: 20px;
    cursor: pointer;
    float: right;
    margin-right: 15px;
    margin-top: 7px;
  }
</style>