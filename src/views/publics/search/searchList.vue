<template>
  <div>
    <!-- 头部 -->
    <div class="aborder" :style="info.setBackgroundBg">
      <span>工单查询</span>
      <input
        type="text"
        class="input-border"
        placeholder="输入关键词查询"
        :style="info.setBackgroundBg"
      />
      <i class="el-icon-search iconSearch"></i>
    </div>

    <!-- <div class="bus-bread">查询</div> -->
    <el-row>
      <el-col :span="12"><div class="bus-bread">查询</div></el-col>
      <el-col :span="12">
        <div class="select">
          <span class="selectTitle">查询范围</span>
          <el-select
            v-model="value"
            placeholder="全行"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select></div
      ></el-col>
    </el-row>

    <!-- 中间信息 -->
    <el-row type="flex" class="row-bg1" justify="space-between">
      <el-col :span="6" v-for="(item, index) in topSearch" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="col-top" :style="info.setBackgroundBg1">
          <div class="img">
            <img :src="item.topImages" alt="" />
            <!-- <div class="div-img" :style="info.setBackgroundBg2"></div> -->
          </div>
          <div class="titleDesc">
            <div class="numDesc">
              <div class="desc1" @click="gotoHandle">
                <span class="desc1-num">{{ item.topTitle }}</span>
                <span class="desc1-bi">{{ item.topTilteDescribe }}</span>
              </div>
              <div class="desc2">{{ item.topWrithDesc }}</div>
            </div>
          </div>
          <div class="icon" @click="gotoHandle">
            <i :class="item.icon"></i>
          </div>
        </div>
        <div class="col-down" :style="info.setBackgroundBg1">
          <div class="left">
            <div class="desc1" @click="gotoHandle">
              <span class="desc1-num">{{ item.downTitle1 }}</span>
              <span class="desc1-bi">{{ item.topTilteDescribe }}</span>
              <div class="left-icon"><i :class="item.icon"></i></div>
            </div>
            <div class="desc2">{{ item.downTitle1DEsc }}</div>
          </div>
          <div class="left-dingwei" :style="info.setBackgroundBg2"></div>
          <div class="right">
            <div class="desc1" @click="gotoHandle">
              <span class="desc1-num">{{ item.downTitle2 }}</span>
              <span class="desc1-bi">{{ item.topTilteDescribe }}</span>
              <div class="left-icon"><i :class="item.icon"></i></div>
            </div>
            <div class="desc2">{{ item.downTitle1DEsc }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 底部echars -->

    <el-row class="row-echarts">
      <el-col :span="11" :style="info.setBackgroundBg3">
        <div class="echarstitle">
          <div class="title">已结案投诉客户评价</div>
          <div class="titleImage">
            <img src="../../../assets/images/searchList/pingfeng.png" alt="" />
            <div class="titleImage-span">{{ echartsAvg(this.echarsAvg) }}</div>
          </div>
        </div>
        <div class="echartsDesc" id="chartLineBox"></div>
      </el-col>
      <el-col :span="11" :style="info.setBackgroundBg3">
        <div class="echarstitle">
          <div class="title">已结案工单</div>
          <div class="titleImage">
            <img
              src="../../../assets/images/searchList/wanjiegongdan.png"
              alt=""
            />
            <div class="titleImage-span">{{ echartsSum(this.echarsSum) }}</div>
          </div>
        </div>
        <div class="echartsDesc" id="chartLineBox1"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import search from "../../../assets/images/searchList/search.png";
import search1 from "../../../assets/images/searchList/search1.png";
import search2 from "../../../assets/images/searchList/search2.png";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "我的板块",
        },
        {
          value: "选项2",
          label: "我的部门",
        },
        {
          value: "选项3",
          label: "我的处室",
        },
        {
          value: "选项4",
          label: "我的岗位",
        },
      ],
      value: "",
      echarsAvg: [56, 76, 98, 99, 98, 100],
      echarsSum: [12, 13, 16, 21, 18, 14],
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
      topSearch: [
        {
          title: "待处理订单",
          topImages: search,
          topTitle: "29",
          topTilteDescribe: "笔",
          topWrithDesc: "待处理工单",
          downTitle1: "12",
          downTitle1DEsc: "据结案时间12小时工单",
          downTitle2: "17",
          downTitle1DEsc: "据结案时间24小时工单",
          icon: "el-icon-arrow-right",
        },
        {
          title: "已处理订单",
          topImages: search2,
          topTitle: "15",
          topTilteDescribe: "笔",
          topWrithDesc: "本月以处理",
          downTitle1: "6",
          downTitle1DEsc: "流转工单",
          downTitle2: "9",
          downTitle1DEsc: "流转工单",
          icon: "el-icon-arrow-right",
        },
        {
          title: "督办查询",
          topImages: search1,
          topTitle: "27",
          topTilteDescribe: "笔",
          topWrithDesc: "监管督办",
          downTitle1: "14",
          downTitle1DEsc: "总行督办",
          downTitle2: "13",
          downTitle1DEsc: "本级督办",
          icon: "el-icon-arrow-right",
        },
      ],
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
    gotoHandle(){
     this.$router.push({ path: "/Home/serch" });
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
            symbolSize: 8, //设定实心点的大小
            //                      hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: "#ffffff", //折点颜色
                color: "#639FD6",
                borderWidth: 2.5,
                label: {
                  show: true,
                  color: "#639FD6",
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
            symbolSize: 8, //设定实心点的大小
            //                      hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: "#ffffff", //折点颜色
                color: "#639FD6",
                borderWidth: 2.5,
                label: {
                  show: true,
                  color: "#639FD6",
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
.el-col-12 {
  height: 42px;
  .bus-bread {
    height: 42px;
    line-height: 50px;
    position: relative;
    text-indent: 16px;
    color: #58dbff;

    // margin-bottom: 1%;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 12px;
      border-bottom: 7px solid #1a83c0;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 8%;
      top: 12px;
      border-bottom: 7px solid #58dbff;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .select {
    float: right;
    margin-right: 5%;
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

// 中部css
.row-bg1 {
  height: 240px;
  margin-top: 0.2%;
  .el-col-6 {
    width: 32.8%;
    background-image: url(../../../assets/images/searchList/topList.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    .title {
      margin-left: 3%;
      margin-top: 2.5%;
      color: #55d4f8;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
    .col-top {
      width: 94%;
      margin: 2% auto;
      height: 37%;
      display: flex;
      .img {
        width: 40%;
        height: 100%;

        img {
          width: 52%;
          height: 82%;
          margin: 5% 29%;
        }
      }
      .titleDesc {
        width: 40%;
        height: 100%;
        text-align: center;
        .numDesc {
          width: 100%;
          height: 100%;
          .desc1 {
            width: 100%;
            height: 65%;
            text-align: center;
            line-height: 452%;
            .desc1-num {
              font-size: 250%;
              color: #55d4f8;
            }
            .desc1-bi {
              font-size: 130%;
              color: #55d4f8;
            }
          }
          .desc2 {
            width: 100%;
            height: 35%;
            text-align: center;
            color: #fff;
            font-size: 100%;
          }
        }
      }
      .icon {
        flex-grow: 1;
        font-size: 400%;
        text-align: center;
        line-height: 1.7;
        color: #55d4f8;
      }
    }
    .col-down {
      width: 94%;
      margin: 2% auto;
      height: 38%;
      display: flex;
      .left {
        width: 50%;
        height: 100%;
        .desc1 {
          width: 100%;
          height: 65%;
          text-align: center;
          line-height: 452%;
          position: relative;
          .desc1-num {
            font-size: 250%;
            color: #55d4f8;
          }
          .desc1-bi {
            font-size: 130%;
            color: #55d4f8;
          }
          .left-icon {
            font-size: 130%;
            position: absolute;
            bottom: -11px;
            right: 29px;
            color: #55d4f8;
          }
        }
        .desc2 {
          width: 100%;
          height: 35%;
          text-align: center;
          color: #fff;
          font-size: 80%;
        }
      }
      .left-dingwei {
        width: 1px;
        height: 100%;
      }
      .right {
        width: 50%;
        height: 100%;
        .desc1 {
          width: 100%;
          height: 65%;
          text-align: center;
          line-height: 452%;
          position: relative;
          .desc1-num {
            font-size: 250%;
            color: #55d4f8;
          }
          .desc1-bi {
            font-size: 130%;
            color: #55d4f8;
          }
          .left-icon {
            font-size: 130%;
            position: absolute;
            bottom: -16%;
            right: 16%;
            color: #55d4f8;
          }
        }
        .desc2 {
          width: 100%;
          height: 35%;
          text-align: center;
          color: #fff;
          font-size: 80%;
        }
      }
    }
  }
}

//底部echars css
.row-echarts {
  margin-top: 1%;
  height: 279px;
  // background: red;
  .el-col-11:nth-child(1) {
    width: 49.5%;
    height: 100%;
    position: relative;
    .echarstitle {
      width: 100%;

      .title {
        margin-left: 3%;
        margin-top: 2.5%;
        color: #55d4f8;
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
    margin-left: 1%;
    position: relative;
    .echarstitle {
      width: 100%;

      .title {
        margin-left: 3%;
        margin-top: 2.5%;
        color: #55d4f8;
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