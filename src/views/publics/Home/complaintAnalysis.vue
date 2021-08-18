<template>
  <div>
    <!-- 头部 -->
    <fuzzyTable/>
    <!-- <div class="bus-bread">查询</div> -->
    <el-row style="margin: 2px 0 5px">
      <el-col :span="5" class="titleList"
        ><div class="bus-bread">投诉管理</div>
        <div class="bus-bread1">投诉分析</div></el-col
      >
      <el-col :span="18">
        <div class="top-select">
          <div class="select">
            <span class="selectTitle">时间</span>
            <el-select
              v-model="value1"
              placeholder="半年"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in daysShow"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="select">
            <span class="selectTitle">投诉来源</span>
            <el-select
              v-model="value"
              placeholder="95558投诉"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>  
        </div>
      </el-col>
    </el-row>

    <div class="center-content">
        <div class='content-title'>投诉分析</div>
        <!-- 头部信息 -->
        <div class="box">
            <ul class="box-ul">
                <li class="box-li" v-for="item,index in centerTab" :key="index">
                    {{item.title}}
                    <span class="box-li-detail">{{item.detail}}</span>
                </li>
            </ul>
        </div>
        <!-- 中间信息 -->
        <div class="tableboxp">
            <div class="tablebox">
                <tableCommon 
                :tableData="tableData"
                :listLabel="listLabel"
                :detailFlag="detailFlag"/>
            </div>
            <div class="tablebox"><tableCommon :tableData="tableData"
                :listLabel="listLabel"
                :detailFlag="detailFlag"/></div>
            <div class="tablebox"><tableCommon :tableData="tableData"
                :listLabel="listLabel"
                :detailFlag="detailFlag"/></div>
        </div>
      <!-- 底部echars -->

      <el-row class="row-echarts">
        <el-col :span="11">
          <div class="echarstitle">
            <div class="title">销户规定问题导致</div>
          </div>
          <div class="echartsDesc" id="chartLineBox"></div>
        </el-col>
        <el-col :span="11">
          <div class="echarstitle">
            <div class="title">销户规定问题导致</div>
          </div>
          <div class="echartsDesc" id="chartLineBox1"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import fuzzyTable from "../../../components/fuzzySearch.vue";
import tableCommon from "../../../components/tableCommon.vue";
export default {
  components: {
    fuzzyTable,
    tableCommon
  },
  data() {
    return {
      daysShow: [
        {
          value: "选项1",
          label: "天",
        },
        {
          value: "选项2",
          label: "周",
        },
        {
          value: "选项3",
          label: "月",
        },
        {
          value: "选项4",
          label: "季度",
        },
        {
          value: "选项5",
          label: "半年",
        },
        {
          value: "选项6",
          label: "年度",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "95558投诉",
        },
        {
          value: "选项2",
          label: "人行投诉",
        },
        {
          value: "选项3",
          label: "银保监投诉",
        },
        {
          value: "选项4",
          label: "信访投诉",
        },
      ],
      value: "",
      value1: "",
      centerTab:[
          {
              title: '新异常投诉',
              id: 1,
              detail: '新异常投诉提示是指上月与上上月投诉数量的增加量的排名前5，增长比例'
          },
          {
              title: '连续性异常投诉',
              id: 2,
              detail: '连续性异常投诉提示是指连续三个月投诉数量持续增加的业务、机构和投诉点'
          },
          {
              title: '多发性投诉',
              id: 3,
              detail: '多发性投诉指连续月均（6个月平均数量）投诉量排名前20的业务、机构和投诉点'
          },
          {
              title: '高占比投诉',
              id: 4,
              detail: '高占比投诉按各分行投诉数量与客户数比值的排名前20，按业务、机构和投诉点制表'
          },
          {
              title: '高机构投诉',
              id: 5,
              detail: '高投诉机构指本月投诉量排名前20的机构，连续6个月的投诉列表'
          },
          {
              title: '高投诉产品',
              id: 6,
              detail: '高投诉产品指本月投诉量排名前20的产品，连续6个月的投诉列表'
          },
          {
              title: '高发投诉点',
              id: 7,
              detail: '高投诉点本月投诉量排名前20的投诉点，连续6个月的投诉列表'
          },
      ],
      echarsAvg: [11, 7, 10, 9, 7, 22],
      echarsSum: [11, 7, 10, 9, 7, 22],
      info: {
        setBackgroundBg: {
          //上方搜索
          backgroundImage:
            "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        setBackgroundBg1: {
          //中间背景图
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/topListdesc.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        // 线
        setBackgroundBg2: {
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/xian.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          //   backgroundPosition:"2% 0",
        },
        // 下方背景图
        setBackgroundBg3: {
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/topList1.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          //   backgroundPosition:"2% 0",
        },
      },
      detailFlag: false,
      listLabel: [
        { label: "被投诉",  prop: "data" },
        { label: "被投诉量", width: "90", prop: "bank" },
        { label: "投诉增加率",width: "90", prop: "netaddress" },
        { label: "投诉增加量", width: "90", prop: "remark" }
      ],
      tableData:[
        {
            data: "柜面人员",
            bank: "599",
            netaddress: "20.94",
            remark: "102",
        },
        {
            data: "大堂经理",
            bank: "534",
            netaddress: "15.58",
            remark: "72",
        },
        {
            data: "理财经理",
            bank: "534",
            netaddress: "15.58",
            remark: "72",
        },
        {
            data: "个贷客户经理",
            bank: "534",
            netaddress: "15.58",
            remark: "72",
        },
        {
            data: "95558客服人员",
            bank: "534",
            netaddress: "15.58",
            remark: "72",
        }
      ]
    };
  },
  mounted() {
    this.chartLine = this.$echarts.init(
      document.getElementById("chartLineBox")
    );
    this.chartLine1 = this.$echarts.init(
      document.getElementById("chartLineBox1")
    );

    this.getLineEcharts(this.echarsAvg); // 折线图
    this.getLineEcharts1(this.echarsSum);
  },
  methods: {
    gotocus() {
      this.$router.push({ path: "/Home/customerReview" });
    },
    echartsAvg(arr) {
      let avg = 0;
      //  var sun=0
      for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
      }
      // console.log(avg);
      return Math.ceil(avg / arr.length);
    },
    echartsSum(arr) {
      let sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },
    getLineEcharts(data) {
      // 折线图
      // 指定图表的配置项和数据
      var option = {
        grid: {
          x: "12%", //x 偏移量

          y: "13%", // y 偏移量

          width: "80%", // 宽度

          height: "75%", // 高度
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          //						minInterval: 1, //x轴间距
          axisTick: {
            show: false,
          }, //隐藏刻度标记
          axisLine: {
            //x轴刻度线
            show: false, //这里的show用于设置是否显示x轴那一条线 默认为true
            //							lineStyle: { //lineStyle里面写y轴那一条线的样式
            //								color: '#6FC6F3',
            //								width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            //							}
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#598FC1",
            },
          },
          splitLine: {
            //网格样式
            show: true,
            lineStyle: {
              color: ["#151F5A"],
              width: 1,
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            //隐藏刻度标记
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#598FC1",
            },
          },
          axisLine: {
            //x轴刻度线
            show: false, //这里的show用于设置是否显示x轴那一条线 默认为true
            //							lineStyle: { //lineStyle里面写y轴那一条线的样式
            //								color: '#6FC6F3',
            //								width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            //							}
          },
          splitLine: {
            //网格样式
            show: true,
            lineStyle: {
              color: ["#151F3A"],
              width: 1,
              // heigh
              type: "solid",
            },
          },
        },
        series: [
          {
            data,
            type: "line",
            smooth: true, //折点是圆弧状的
            showSymbol: true,
            symbol: "circle", //折点设定为实心点
            symbolSize: 10, //设定实心点的大小
            //                      hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: "#fff", //折点颜色
                color: function(params){
                  if(params.value > 20){
                    return '#c33'
                  }else{
                    return '#58DBFF'
                  }
                },
                borderWidth: 2.5,
                label: {
                  show: true,
                  color: function(params){
                    if(params.value > 20){
                      return '#c33'
                    }else{
                      return '#58DBFF'
                    }
                  },
                }, // 折点位置显示数值
                areaStyle: {
                  type: "default",
                  //渐变色实现===
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#23627F",
                      },
                      {
                        offset: 1,
                        color: "#132040",
                      },
                    ]
                  ),
                },
                lineStyle: {
                  //线的颜色
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#6184F7",
                    },
                    {
                      offset: 1,
                      color: "#66D8E6",
                    },
                  ]), //线条渐变色
                  width: 4,
                },
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    },
    getLineEcharts1(data) {
      // 折线图
      // 指定图表的配置项和数据
      var option = {
        grid: {
          x: "12%", //x 偏移量

          y: "13%", // y 偏移量

          width: "80%", // 宽度

          height: "75%", // 高度
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          //						minInterval: 1, //x轴间距
          axisTick: {
            show: false,
          }, //隐藏刻度标记
          axisLine: {
            //x轴刻度线
            show: false, //这里的show用于设置是否显示x轴那一条线 默认为true
            //							lineStyle: { //lineStyle里面写y轴那一条线的样式
            //								color: '#6FC6F3',
            //								width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            //							}
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#598FC1",
            },
          },
          splitLine: {
            //网格样式
            show: true,
            lineStyle: {
              color: ["#151F5A"],
              width: 1,
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            //隐藏刻度标记
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#598FC1",
            },
          },
          axisLine: {
            //x轴刻度线
            show: false, //这里的show用于设置是否显示x轴那一条线 默认为true
            //							lineStyle: { //lineStyle里面写y轴那一条线的样式
            //								color: '#6FC6F3',
            //								width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            //							}
          },
          splitLine: {
            //网格样式
            show: true,
            lineStyle: {
              color: ["#151F3A"],
              width: 1,
              // heigh
              type: "solid",
            },
          },
        },
        series: [
          {
            data,
            type: "line",
            smooth: true, //折点是圆弧状的
            showSymbol: true,
            symbol: "circle", //折点设定为实心点
            symbolSize: 10, //设定实心点的大小
            //                      hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: "#fff", //折点颜色
                color: function(params){
                  if(params.value > 20){
                    return '#c33'
                  }else{
                    return '#58DBFF'
                  }
                },
                borderWidth: 2.5,
                label: {
                  show: true,
                  color: function(params){
                    if(params.value > 20){
                      return '#c33'
                    }else{
                      return '#58DBFF'
                    }
                  },
                }, // 折点位置显示数值
                areaStyle: {
                  type: "default",
                  //渐变色实现===
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#23627F",
                      },
                      {
                        offset: 1,
                        color: "#132040",
                      },
                    ]
                  ),
                },
                lineStyle: {
                  //线的颜色
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#6184F7",
                    },
                    {
                      offset: 1,
                      color: "#66D8E6",
                    },
                  ]), //线条渐变色
                  width: 4,
                },
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine1.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
// 顶部css
.titleList {
  display: flex;
  cursor: pointer;
}
.el-col {
  height: 42px;

  .bus-bread {
    height: 42px;
    line-height: 50px;
    position: relative;
    text-indent: 16px;
    color: #176CA3;

    // margin-bottom: 1%;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 14px;
      border-bottom: 7px solid #176CA3;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 104%;
      top: 14px;
      border-bottom: 7px solid #176CA3;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .bus-bread1 {
    height: 42px;
    line-height: 50px;
    position: relative;
    text-indent: 16px;
    color: #58dbff;

    // margin-bottom: 1%;

    &:after {
      position: absolute;
      content: "";
      left: 107%;
      top: 13px;
      border-bottom: 7px solid #58dbff;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .top-select {
    display: flex;
    .select:nth-child(2) {
      width: 320px !important;
    }
    .select:nth-child(1) {
      flex-grow: 1;
    }
    .select {
      margin-left: 7%;
      margin-top: 10px;
      width: 400px;
      text-align: right;

      .selectTitle {
        color: #58dbff;
        margin-right: 3%;
      }
      /deep/.el-input__inner {
        height: 28px;
        border-radius: 20px;
        background-image: url(../../../assets/images/searchList/inputSelect.png);
        background-size: 105% 114%;
        background-repeat: no-repeat;
        background-position: center;
        //  background-color: #11172F;
        border: 1px solid #1a83c0;
        text-indent: 8px;
        font-weight: 700;
        // border:1px solid red;
        // line-height: 28px;
        color: #58dbff;
      }
      /deep/.el-input__icon {
        line-height: 16px;
        color: #58dbff;
      }
    }
  }
  /deep/ .popper__arrow,
  /deep/ .el-popper .popper__arrow::after {
    display: none !important;
  }
  /deep/.el-input--suffix {
    z-index: 9999;
  }
  /deep/.el-popper {
    top: 3px !important;
    text-align: left;
    background-color: rgba(17, 24, 48, 0.9);
    color: #ffff;
    text-indent: 16px;
    border: 1px solid #1a83c0;
    // background-color: red;
  }
  /deep/.el-select-dropdown__item {
    color: #ffff !important;
    background-color: rgba(17, 24, 48, 0.9);
    margin-top: 6px;
  }
  /deep/.el-select-dropdown__item:hover {
    background-color: #58dbff;
    color: #121f35 !important;
    border-radius: 20px;
  }
}
.center-content{
    background-image: url('../../../assets/images/commonTitle/tsglbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    padding: 3%;
}
.content-title{
    position: absolute;
    left: 40px;
    top: 10px;
    color: #59dfff;
    font-size: 17px;
}
.box-li-detail{
  line-height: 20px;
}
.box{
    width: 100%;
    margin-top: 10px;
    z-index: 9999;
    .box-ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .box-li{
            background: #0E2351;
            color: #58DCF5;
            width: 140px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            text-align: center;
            border: 1px solid #1A7A9F;
            border-radius: 15px;
            span{
                display: none;
            }
        }
        .box-li:hover{
            background: #45F8F8;
            color: #131B35;
            z-index: 9999;
            span{
                width: 200px;
                background: #ECF5F9;
                display: block;
                color: black;
            }
        }
    }
}
.tableboxp{
    width: 100%;
    display: flex;
    justify-content: space-around;
    z-index: 100;
}
.tablebox{
    border: 1px solid #1EA1DA;
    width: 100%;
    overflow: auto;
    margin: 10px 2px;
}
/deep/.table-wrapper .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #29597c;
}
/deep/.el-table td,/deep/ .el-table th{
    padding: 8px 0;
}
/deep/.el-table thead {
    background-color: #193F80;
 }



/deep/.el-input__inner::-webkit-input-placeholder {
  color: #58dbff;
  line-height: 28px;
  font-weight: 700;
  margin-top: 2px;
  font-size: 14px;
  // line-height:28px;
}
input::-webkit-input-placeholder {
  color: #59dfff;
}
//底部echars css
.row-echarts {
  margin-top: 1%;
  height: 279px;
  // background: red;
  .el-col-11:nth-child(1) {
    width: 49.5%;
    height: 100%;
    background-image: url('../../../assets/images/commonTitle/redbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .echarstitle {
      width: 100%;
      .title {
        margin-left: 3%;
        margin-top: 2.5%;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1.5px;
      }
      .titleImage {
        height: 17%;
        width: 17%;
        position: absolute;
        top: 1%;
        right: 3%;
        img {
          height: 100%;
          width: 100%;
        }
        .titleImage-span {
          position: absolute;
          top: 25%;
          right: 23%;
          font-size: 130%;
          font-weight: 700;
          color: #55d4f8;
        }
      }
    }
    #chartLineBox {
      // margin-top: 2%;
      width: 579px;
      margin: 4% auto;
      height: 209px;
      // background: red;
    }
  }

  .el-col-11:nth-child(2) {
    width: 49.5%;
    height: 100%;
    background-image: url('../../../assets/images/commonTitle/redbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 1%;
    position: relative;
    .echarstitle {
      width: 100%;
      .title {
        margin-left: 3%;
        margin-top: 2.5%;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1.5px;
      }
      .titleImage {
        height: 17%;
        width: 17%;
        position: absolute;
        top: 1%;
        right: 3%;
        img {
          height: 100%;
          width: 100%;
        }
        .titleImage-span {
          position: absolute;
          top: 25%;
          right: 23%;
          font-size: 130%;
          font-weight: 700;
          color: #55d4f8;
        }
      }
    }
    #chartLineBox1 {
      // margin-top: 2%;
      width: 579px;
      margin: 4% auto;
      height: 209px;
      // background: red;
    }
  }
}
</style>