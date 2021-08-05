<template>
  <div>
    <div class="bus-bread" @click="goBack">查询</div>
    <div class="bus-bread1">客户评价</div>
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
    <!--    <theme></theme>-->
    <div class="customerReview">
      <h2 class="title" >分行总体评价 Top10</h2>
      <label class="moreBarInfo" @click="showAll"> {{moreBarInfo}} > </label>
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
// import theme from "../../../components/theme";

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
      data: {},//客户资产等级维度
      data2: {},//客户年龄维度
      barAllData: {},//分行总体评价  完整数据
      barData: {},//分行总体评价 Top10数据
      colsAll: [],
      numbersAll: [],
      cols: [],
      numbers: [],
      // moreBarInfo: "显示全部",
      status : true,  //是否显示Top10，默认显示

    }
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
    this.barAllData = [
        {name:'北京',value:200},
        {name:'天津',value:190},
        {name:'上海',value:180},
        {name:'重庆',value:170},
        {name:'江苏',value:160},
        {name:'青海',value:150},
        {name:'四川',value:140},
        {name:'海南',value:140},
        {name:'陕西',value:130},
        {name:'甘肃',value:120},
        {name:'云南',value:110},
        {name:'湖南',value:100},
        {name:'湖北',value:100},
        {name:'黑龙',value:100},
        {name:'贵州',value:100},
        {name:'山东',value:100},
        {name:'江西',value:100},
        {name:'河南',value:100},
        {name:'河北',value:100},
        {name:'山西',value:100},
        {name:'安徽',value:100},
        {name:'福建',value:100},
        {name:'浙江',value:100},
        {name:'广东',value:100},
        {name:'吉林',value:100},
        {name:'辽宁',value:100},
        {name:'北京2',value:80},
        {name:'天津2',value:80},
        {name:'上海2',value:80},
        {name:'重庆2',value:80},
        {name:'江苏2',value:80},
        {name:'青海2',value:80},
        {name:'四川2',value:80},
        {name:'海南2',value:80},
        {name:'陕西2',value:80},
        {name:'甘肃2',value:80},
        {name:'云南2',value:80},
        {name:'湖南2',value:80},
        {name:'湖北2',value:80},
        {name:'黑龙2',value:80},
        {name:'贵州2',value:80},
        {name:'山东2',value:80},
        {name:'江西2',value:80},
        {name:'河南2',value:80},
        {name:'河北2',value:80},
        {name:'山西2',value:80},
        {name:'安徽2',value:80},
        {name:'福建2',value:80},
        {name:'浙江2',value:80},
        {name:'广东2',value:80},
        {name:'吉林2',value:80},
        {name:'辽宁2',value:80}
    ]

    this.barAllData.forEach((item)=>{
      this.colsAll.push(item.name)
      this.numbersAll.push(item.value)
    })

    this.cols = this.colsAll.slice(0,10)
    this.numbers = this.numbersAll.slice(0,10)

    setTimeout(()=>{
      this.init()
    },500)
  },
  computed:{
    moreBarInfo(){
      return this.status?"显示全部":"返回"
    }
  },
  methods: {

    init() {
      // var that = this;
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
            data: this.cols,
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
        dataZoom: [//滑动条
          {
            show: false,//是否显示滑动条
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            // zoomLock:true,
            // start: 0,                               //数据窗口范围的起始百分比
            end: null,                                 //数据窗口范围的结束百分比
            startValue:0,                           //数据窗口范围的起始数值
            endValue:10,                            //数据窗口范围的结束数值。
            height:'5%',

            bottom:'2%',

            borderColor:'#8FDFFE',

            backgroundColor:'#8fdffe99',


            handleColor:'#8FDFFE',

            handleSize:20,

            handleStyle:{

              borderColor:'#8FDFFE',

              shadowBlur:4,

              shadowOffsetX:1,

              shadowOffsetY:1,

              shadowColor:'#e5e5e5'

            },
          }
        ],
        series: [
          {
            type: "bar",
            data: this.numbers,
            barWidth: "15px",
            // barCategoryGap: 10,
            barGap: 15,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
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

    },
    //显示全部信息
    showAll() {
        this.status = !this.status;
        if( this.status) {
          //Top10
          this.cols = this.colsAll.slice(0,10)
          this.numbers = this.numbersAll.slice(0,10)
        }else {
          this.cols = this.colsAll
          this.numbers = this.numbersAll
        }
        console.log(this.cols,'this.cols')
        console.log(this.numbers,'this.numbers')
        this.refreshData()
    },
    //更新数据
    refreshData(){
      //刷新数据
      var myChart = this.$echarts.init(document.querySelector(".bar"));
      var option = myChart.getOption();
      option.series[0].data = this.numbers;
      option.xAxis[0].data = this.cols;
      option.dataZoom[0].show = !option.dataZoom[0].show;
      if(!this.status) {//设置滚动条
        option.dataZoom[0].end = 30
      }else {
        option.dataZoom[0].end = null
      }
      myChart.setOption(option);
    },
    goBack(){
      this.$router.push({
        path: '/Home/searchList'
      })
    },
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
      left: 6.5%;
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
  .moreBarInfo {
    color: #02d1f4;
    float: right;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 35px;
  }
</style>