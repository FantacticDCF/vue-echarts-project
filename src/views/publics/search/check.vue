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
                <label class="font35 color-blue">{{item.year}}</label>
                <label class="font16 color-blue mgl-12">{{format(item.name)}}</label>
                <img class="arrow-right" src="../../../assets/images/searchList/you.png">
              </div>
              <div>
                <label class="color-white">完成程度</label>
                <el-progress class="pr2 " :percentage="item.rate2" :show-text='false'
                             :width="12" :stroke-width="12">
                </el-progress>
                <label class="font35 color-orange">{{item.year}}</label>
                <label class="font16 color-orange mgl-12">{{format(item.name)}}</label>
                <img class="arrow-right" src="../../../assets/images/searchList/you.png">
              </div>

          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="panel">
          <h2 class="title" >本月考核</h2>
          <div class="check-index" v-for="(item,index) in yearCheckData" :key="index">
            <div class="check-bg">
              <h3 class="color-blue">{{item.data}}<label>{{format(item.name)}}</label></h3>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="panel">
          <h2 class="title" >投诉赔付</h2>
          <div class="claims_box" v-for="(item,index) in claims" :key="index">
<!--            <img :src="require('../../../assets/images/searchList/'+item.name+'.png')">-->
            <img :src="require('../../../assets/images/searchList/year.png')">
            <div class="data">
              <h3 class="color-blue">{{item.data}}<label>{{format(item.name)}}</label></h3>
              <p>{{item.title}}</p>
            </div>

          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h2 class="title" >投诉压降</h2>
          <el-table :data="tableData" width="100%" height="100%" :row-class-name="tableRowClassName">
            <el-table-column v-for="item in colData" :key="item.id" stripe
                             :prop="item.colNameEn" :label="item.colName"

                             >
            </el-table-column>
          </el-table>
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
      //年度目标
      annualObjectives: [
        {//投诉发生率
          'name': 'complaintRate',
          'title': '投诉发生率',
          'rate': 90,//百分比
          'rate2': 95,//百分比
          'year': 0.005,
          'finish': 0.007
        },
        {//投诉数量
          'name': 'complaintNums',
          'title': '投诉数量',
          'rate': 80,//百分比
          'rate2': 90,//百分比
          'year': 1000,
          'finish': 700
        },
        {//处理时效
          'name': 'aging',
          'title': '处理时效',
          'rate': 70,//百分比
          'rate2': 80,//百分比
          'year': 48,
          'finish': 50
        },
        {//监督投诉量
          'name': 'MonitoComplaints',
          'title': '监督投诉量',
          'rate': 60,//百分比
          'rate2': 70,//百分比
          'year': 100,
          'finish': 60
        },
      ],
      //本月考核
      yearCheckData: [
        {//投诉发生率
          'name': 'complaintRate',
          'title': '投诉发生率',
          'data': 0.003,
        },
        {//投诉数量
          'name': 'complaintNums',
          'title': '投诉数量',
          'data': 80,
        },
        {//处理时效
          'name': 'aging',
          'title': '处理时效',
          'data': 40,
        },
        {//监督投诉量
          'name': 'MonitoComplaints',
          'title': '监督投诉量',
          'data': 10,
        }
      ],
      //投诉赔付
      claims: [
        {//投诉发生率
          'name': 'year',
          'title': '年累计赔付',
          'data': 1000,
        },
        {//投诉数量
          'name': 'season',
          'title': '季度平均赔付',
          'data': 1100,
        },
        {//处理时效
          'name': 'month',
          'title': '本月平均赔付',
          'data': 870,
        },
        {//监督投诉量
          'name': 'average',
          'title': '比均赔付',
          'data':1152,
        }
      ],
      colData: [],
      tableData:[]

    }
  },
  mounted(){
    this.colData= [
      {
        id:1,
        colName: '业务',
        colNameEn: 'col1',
        colColor: 'blue',
      },
      {
        id:2,
        colName: '目标',
        colNameEn: 'col2',
        colColor: 'blue',
      },
      {
        id:3,
        colName: '实际发生',
        colNameEn: 'col3',
        colColor: 'blue',
      }
    ],
    this.tableData= [
      {
        id: '1',
        col1:"个人住房贷款",
        col2:"<100笔",
        col3:87,
      },
      {
        id: '2',
        col1:"开户业务",
        col2:"<100笔",
        col3:67,
      },
      {
        id: '3',
        col1:"保险",
        col2:"<100笔",
        col3:30,
      },
      {
        id: '4',
        col1:"短信",
        col2:"<100笔",
        col3:27,
      },
      {
        id: '5',
        col1:"转账支付",
        col2:"<100笔",
        col3:15,
      },
    ]
  },
  methods :{
    format(type){
      // console.log(type,'--')
      switch(type) {
        case 'complaintRate': return '%';
        case 'complaintNums': return '笔';
        case 'aging': return '小时';
        case 'MonitoComplaints': return '笔';
        case 'year' : return '万';
        case 'season': return '万';
        case 'month' : return '元';
        case 'average': return '元';
      }
    },
    goBack(){
      this.$router.push({
        path: '/Home/searchList'
      })
    },
    tableRowClassName({row, rowIndex}) {
      console.log(row,rowIndex)
      if (rowIndex % 2 === 1)
      {
        return 'stripe';
      }
      else {
        return 'transparent'
      }
    }
  }
}
</script>

<style lang='less' >
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
    padding: 23px 25px;
    background-size: 100% 100%;
    margin-top: 20px;
    height:300px
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
.check .panel .el-progress {
    width: 38%;
    display: inline-block;
    margin-top: -3px;
    vertical-align: middle;
  }
.check .subPanel label {
    display: inline-block;
    margin: -20px 12px 0 8px;
    font-family: electronicFont;
  }
.check .subPanel {
    width: 50%;
    height: 120px;
    display: inline-block;
    background: url("../../../assets/images/searchList/topListdesc.png") no-repeat;
    background-size: 100% 100%;
    margin-left: -5px;
    margin-top: 8px;
    padding-left: 5px;
  }
  .check .subPanel p{
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

  .mgl-12 {
    margin-left: -12px!important;
  }

  .pr1 .el-progress-bar__inner{
    background-image: -webkit-linear-gradient( left, #3A9ACF, #6BC7E8 );
  }
  .pr2 .el-progress-bar__inner{
    background-image: -webkit-linear-gradient( left,#EE665B,#F4C550);
  }
  .el-progress-bar__outer{
    background-color:#171f38;
  }
  .arrow-right {
    width: 20px;
    cursor: pointer;
    float: right;
    margin-right: 15px;
    margin-top: 0px;
  }

.check-index {
  width: 49%;
  height: 40%;
  display: inline-block;
  position: relative;
}

.check-bg {
  width:100%;
  height: 100%;
  display: inline-block;
  position: relative;
  background: url("../../../assets/images/ts-bg.png") no-repeat center center;
  background-size: 60%;
}
.check-index h3{
  font-size: 40px;
  font-family: electronicFont;
  text-align: center;
  width: 100%;
  margin: 22px auto 0 auto;

}
.check-index p{
  color: white;
  text-align: center;
  font-size: 12px;
}


.claims_box {
  width: 49%;
  height: 40%;
  display: inline-block;
  position: relative;
}
.claims_box .data{
  display: inline-block;
  position: absolute;
  top: 30px;
  width: 50%;
  margin-left: 20px;
}
.claims_box img{
  width: 49%;
  display: inline-block;
}
.claims_box h3{
  font-size: 40px;
  font-family: electronicFont;
}
.claims_box p{
  color: white;
  font-size: 12px;
  margin-left: 3px;
}
.check-index label,.claims_box label{
  font-size: 16px!important;
}

.check .el-table td, .el-table th {
  padding: 5px 0;
}
/*.el-table tr:hover {*/
/*   background: transparent;*/
/*}*/
.check .el-table thead th.is-leaf {
  border-bottom: 0;
  background: #223e94;
}
.el-table td, .el-table th.is-leaf {
  border-bottom: 0;
}
.check .el-table {
  background: transparent;
  width: 98%;
  margin: 10px 0 10px 15px;
}
.check .el-table__body{
  height: 100%;
}
.check .el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
  height: auto!important;
}
.check .el-table th, .el-table tr {
  background-color: transparent;
}
.check .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: transparent;
}
.check .el-table td, .el-table th {
  /*padding: 0.7% 0;*/
  text-align: center;
}
.check .el-table--border::after, .el-table--group::after, .el-table::before {
  background-color: transparent;
}
.check .el-table .cell{
  color: white;
  font-size: 10px;
  padding: 0 2px;
  text-align: center;
}
.check .el-table thead .cell{
  color: #00cdff
}
.stripe{
  background-color:#16274c!important; /*隔行变色*/
 }
.transparent{
  background-color: transparent!important;
}

</style>