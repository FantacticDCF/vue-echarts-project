<template>
  <div>
    <div class="bus-bread">查询</div>
    <div class="bus-bread1">待处理工单</div>
    <div class="aborder" :style="setBackgroundBg">
      <span>工单查询</span>
      <input
        type="text"
        class="input-border"
        placeholder="输入关键词查询"
        :style="setBackgroundBg"
      />
      <!-- <div class="iconSearch"> -->
      <i class="el-icon-search iconSearch"></i>
    </div>
    <div class="customerReview">
      <h2 class="title">分行总体评价 Top10</h2>
      <div class="bar"></div>
    </div>
    <el-row>
      <table-progress :data="data"></table-progress>
      <table-progress :data="data2"></table-progress>
    </el-row>
  </div>
</template>
<script>
import TableProgress from "../../../components/TableProgress";

export default {
  name: "customerReview",
  components: {TableProgress},
  data() {
    return {
      setBackgroundBg: {
        backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      },
      data:{},
      data2:{},
      data3: {
        title: "",
        cols : ["信用卡", "个贷", "手机银行"],
        data: [66, 59, 57],
        fontSize:12,
        color: '#fff',
        left: "15",
        top: "10",
        right: "15",
        bottom: "10",
      }
    };
  },
  mounted() {
    this.data = {
      title:"客户资产等级维度",
      colspan: 12,
      // bgUrl: "../assets/images/components/border.png",
      bgImg: "border",//背景图片名称
      colData: [
        {
          id:1,
          colName: '排名',
          colNameEn: 'col1',
          colColor: 'blue',
          colWidth: 35,
          isProgress:false
        },
        {
          id:2,
          colName: '客户资产',
          colNameEn: 'col2',
          colColor: 'blue',
          colWidth: 90,
          isProgress:false
        },
        {
          id:3,
          colName: '客户评价',
          colNameEn: 'progressData',
          colColor: 'blue',
          colWidth: '',
          isProgress:true
        },
        {
          id:4,
          colName: '',
          colNameEn: 'col4',
          colColor: 'blue',
          colWidth: 80,
          isProgress:false
        }
      ],
      tableData: [
        {
          id: '1',
          col1:"1",
          col2:"0-1万",
          progressData:88,
          progressStatus:1,//蓝色1 红色0
          col4:88,
        },
        {
          id: '2',
          col1:"2",
          col2:"1-50万",
          progressData:80,
          progressStatus:1,//蓝色1 红色0
          col4:80,
        },
        {
          id: '3',
          col1:"3",
          col2:"50-300万",
          progressData:70,
          progressStatus:1,//蓝色1 红色0
          col4:70,
        },
        {
          id: '4',
          col1:"4",
          col2:"300-500万",
          progressData:68,
          progressStatus:1,//蓝色1 红色0
          col4:68,
        },
        {
          id: '5',
          col1:"5",
          col2:"600万以上",
          progressData:60,
          progressStatus:1,//蓝色1 红色0
          col4:60,
        },
      ]
    }
    this.data2 = {
      title:"客户年龄维度",
      colspan: 12,
      // bgUrl: "../assets/images/components/border.png",
      bgImg: "border",//背景图片名称
      colData: [
        {
          id:1,
          colName: '排名',
          colNameEn: 'col1',
          colColor: 'blue',
          colWidth: 35,
          isProgress:false
        },
        {
          id:2,
          colName: '客户年龄',
          colNameEn: 'col2',
          colColor: 'blue',
          colWidth: 90,
          isProgress:false
        },
        {
          id:3,
          colName: '客户评价',
          colNameEn: 'progressData',
          colColor: 'blue',
          colWidth: '',
          isProgress:true
        },
        {
          id:4,
          colName: '',
          colNameEn: 'col4',
          colColor: 'blue',
          colWidth: 80,
          isProgress:false
        }
      ],
      tableData: [
        {
          id: '1',
          col1:"1",
          col2:"15岁以下",
          progressData:88,
          progressStatus:1,//蓝色1 红色0
          col4:88,
        },
        {
          id: '2',
          col1:"2",
          col2:"15-25岁",
          progressData:80,
          progressStatus:1,//蓝色1 红色0
          col4:80,
        },
        {
          id: '3',
          col1:"3",
          col2:"25-45岁",
          progressData:70,
          progressStatus:1,//蓝色1 红色0
          col4:70,
        },
        {
          id: '4',
          col1:"4",
          col2:"45-60岁",
          progressData:68,
          progressStatus:1,//蓝色1 红色0
          col4:68,
        },
        {
          id: '5',
          col1:"5",
          col2:"60岁以上",
          progressData:60,
          progressStatus:1,//蓝色1 红色0
          col4:60,
        },
      ]
    }

    this.init()
  },
  methods: {
    init() {
      var that = this;
      var myChart = this.$echarts.init(document.querySelector(".bar"));

      var option = {
        // backgroundColor: "#034380",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "12%",
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: [
              "北京",
              "上海",
              "深圳",
              "大连",
              "南京",
              "杭州",
              "广州",
              "成都",
              "郑州",
              "重庆"
            ],
            axisLine: {
              lineStyle: {
                color: "#4f81af",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#4f81af",
              textStyle: {
                // fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#4f81af",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "#183151",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: [
              200, 190, 180, 170, 160, 150, 140, 130, 120, 115
            ],
            barWidth: "15px",
            // barCategoryGap: 10,
            barGap: 15,
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                    0,
                    0.4,
                    0.7,
                    1,
                    [
                      { offset: 0, color: "#07E2F4" },
                      { offset: 0.4, color: "#08B8F6" },
                      { offset: 0.7, color: "#0985F7" },
                      { offset: 1, color: "#0970F8" },
                    ],
                    false
                ),
                barBorderRadius: [30, 30, 0, 0],
                // shadowColor :"rgba(0,160,221,1)",
                // shadowBlur :4
              },
            },
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 60,
                height: 30,
                // backgroundColor: "rgba(0,160,221,0.1)",
                color: "#588EC1",
                borderRadius: 100,
                position: ["0", "-25"],
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => { myChart.resize();});

    }
  },
};
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
      left: 7.8%;
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
      left: 6.2%;
      top: 0;
      border-bottom: 7px solid #1a83c0;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .aborder {
    text-indent: 30px;
    color: #1a83c0;
    // margin-top: 10px;
    width: 55%;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
  }
  .input-border {
    margin-left: 30px;
    border: none;
    color: #1a83c0;
    width: 70%;
    height: 70%;
    text-indent: 15px;
    font-size: 10px;
  }
  input::-webkit-input-placeholder {
    color: #59dfff;
  }

  .customerReview {
    position: relative;
    background: rgba(255, 255, 255, 0.04) url(../../../assets/images/line.png) no-repeat;
    padding: 20px 25px;
    background-size: 100% 100%;
    margin-top: 20px;
  }
  .customerReview h2 {
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
  .customerReview h2 a {
    color: #fff;
    text-decoration: underline;
  }
  .customerReview .bar{
    height:250px;
    padding:10px;
    margin: 10px -10px;

  }
</style>