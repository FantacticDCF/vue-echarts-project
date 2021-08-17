<template>
  <div>
    <!-- 头部 -->
    <div class="aborder" :style="info.setBackgroundBg">
      <span>投诉案例查询</span>
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
      <el-col :span="5" class="titleList"
        ><div class="bus-bread">投诉管理</div>
        <div class="bus-bread1">总体情况</div></el-col
      >
      <el-col :span="18">
        <div class="select">
          <span class="selectTitle">维度选择</span>
          <el-select
            v-model="value"
            placeholder="机构维度"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in select"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="select">
          <span class="selectTitle">时间</span>
          <el-select
            v-model="value1"
            placeholder="半年"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in timer"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>

    <!-- 下面echats -->
    <div class="shuju" :style="info.setBackgroundBg1">
      <div class="title">总体情况</div>
      <div id="chartLineBox"></div>
      <div class="kongzhi">
        <div class="input-yangshi">
          <input
            type="checkbox"
            class="checkboxchart"
            @click="fontColor($event)"
            name="checkboxchart"
            
            value="联盟广告"
          />&nbsp;&nbsp;95558投诉
        </div>
        <div class="input-yangshi">
          <input
            type="checkbox"
            class="checkboxchart"
            @click="fontColor($event)"
            name="checkboxchart"
            :checked="checked"
            value="联盟广告"
          />&nbsp;&nbsp;人行投诉
        </div>
        <div class="input-yangshi">
          <input
            type="checkbox"
            class="checkboxchart"
            @click="fontColor($event)"
            name="checkboxchart"
            value="视频广告"
          />&nbsp;&nbsp;银保监投诉
        </div>
        <div class="input-yangshi">
          <input
            type="checkbox"
            class="checkboxchart"
            @click="fontColor($event)"
            name="checkboxchart"
            :checked="checked"
            value="直接访问"
          />&nbsp;&nbsp;信访
        </div>
        <div>
          <button
            type="checkbox"
            class="checkboxchart"
            :class="checked2 == true ? 'color11' : 'color1'"
            name="checkboxchart"
            :checked="checked2"
            @click="clHandle($event)"
            ref="checked"
            value="搜索引擎"
          >
            &nbsp;&nbsp;同比
          </button>
        </div>
        <div>
          <button
            type="checkbox"
            class="checkboxchart"
            name="checkboxchart"
            :class="checked1 == true ? 'color11' : 'color1'"
            :checked="checked1"
            @click="clHandle1($event)"
            ref="checked1"
            value="搜索引擎11"
          >
            &nbsp;&nbsp;环比上期
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import green from "../../../assets/images/complaint/green.png";
import red from "../../../assets/images/complaint/red.png";
export default {
  data() {
    return {
      checked: true,
      checked2: false,
      checked1: true, //环比上期
      selected: {
            '\u0039\u0035\u0035\u0035\u0038\u6295\u8bc9': false,
            人行投诉: true,
            银保监投诉: false,
            信访: true,
            同比: false,
            环比上期: true,
          },
      select: [
        {
          value: "选项1",
          label: "机构维度",
        },
        {
          value: "选项2",
          label: "产品维度",
        },
        {
          value: "选项3",
          label: "客群维度",
        },
        {
          value: "选项4",
          label: "流程维度",
        },
        {
          value: "选项5",
          label: "投诉点维度",
        },
        {
          value: "选项6",
          label: "渠道维度",
        },
        {
          value: "选项7",
          label: "岗位维度",
        },
      ],
      timer: [
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
      value: "",
      value1: "",
      info: {
        setBackgroundBg: {
          //上方搜索
          backgroundImage:
            // "url(" + require("../../../assets/images/complaint/green.png") + ")",
            "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
         setBackgroundBg1: {
        //上方搜索
        backgroundImage:
          "url(" + require("../../../assets/images/complaint/shitu.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      },
      },
    };
  },
  mounted() {
    this.chartLine = this.$echarts.init(
      document.getElementById("chartLineBox")
    );
    this.$nextTick(() => {
      this.getLineEcharts1(this.selected);
      this.initialize();
    });
  },
  methods: {
    //初始化 颜色
    initialize() {
      // var sele=
      var checkboxs = document.getElementsByName("checkboxchart");
      var dom = document.getElementsByClassName("input-yangshi");
      for (var i = 0; i < dom.length; i++) {
        // console.log(dom[i].style);
        if (checkboxs[i].checked === true) {
          dom[i].style.color = "#45f8f8";
        } else {
          dom[i].style.color = "#ffff";
        }
      }
    },
    //点击更改颜色
    fontColor() {
      var checkboxs = document.getElementsByName("checkboxchart");
      var dom = document.getElementsByClassName("input-yangshi");
      // console.log(e);
      // console.log(dom);
      // console.log(checkboxs);
      for (var i = 0; i < dom.length; i++) {
        console.log(dom[i].style);
        if (checkboxs[i].checked == true) {
          dom[i].style.color = "#45f8f8";
        } else {
          dom[i].style.color = "#ffff";
        }
      }
    },
    //点击事件
    clHandle(e) {
      this.$nextTick(() => {
        // var s1 = this.chartLine.getOption();
        // console.log(s1.legend[0].selected);
        this.checked2 = !this.checked2;
        if (this.checked2 == true) {
          e.target.style.backgroundColor = "#45F8F8";
          e.target.style.color = "#205669";
          e.target.style.borderColor = "#45F8F8";
        } else {
          e.target.style.backgroundColor = "#0e2351";
          e.target.style.color = "#41a4c9";
          e.target.style.borderColor = "#41a4c9";
        }
      });
    },
    clHandle1(e) {
      this.checked1 = !this.checked1;
      if (this.checked1 == true) {
        e.target.style.backgroundColor = "#45F8F8";
        e.target.style.color = "#205669";
        e.target.style.borderColor = "#45F8F8";
      } else {
        e.target.style.backgroundColor = "#0e2351";
        e.target.style.color = "#41a4c9";
        e.target.style.borderColor = "#41a4c9";
      }
    },
    getLineEcharts1(selected) {
      // 折线图
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: "8%",
          right: "0",
          bottom: "1%",
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ",
        },
        legend: {
          data: [
            {
              name: "95558投诉",
              textStyle: {
                fontSize: 12,
                fontWeight: "bolder",
                color: "#91939D",
                
              },
              icon: "circle",
              // inactiveColor:"#91939D"
            },
            {
              name: "人行投诉",
              textStyle: {
                fontSize: 12,
                fontWeight: "bolder",
                color: "#91939D",
              },
              icon: "circle",
            },
            {
              name: "银保监投诉",
              textStyle: {
                fontSize: 12,
                fontWeight: "bolder",
                color: "#91939D",
              },
              icon: "circle",
            },
            {
              name: "信访",
              textStyle: {
                fontSize: 12,
                fontWeight: "bolder",
                color: "#91939D",
              },
              icon: "circle",
            },
            {
              name: "同比",
              textStyle: {
                fontSize: 12,
                fontWeight: "bolder",
                color: "#91939D",
              },
              //  icon:'image//./images/icon1.png'
              icon: `image://${green}`,
            },
            {
              name: "环比",
              textStyle: {
                fontSize: 12,
                fontWeight: "bolder",
                color: "#91939D",
              },
              icon: `image://${red}`,
            },
          ],
          selectedMode: "multiple",
          orient: "horizontal",
          right: 350,
          top: 0,
          bottom: 0,
          show: true,
          selected,
        },
        // calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: [
              "广州",
              "郑州",
              "南京",
              "武汉",
              "北京",
              "上海",
              "青岛",
              "深圳",
              "石家庄",
              "成都",
            ],
            axisTick: {
              show: true,
            },
            axisLine: {
              //x轴刻度线
              show: false, //这里的show用于设置是否显示x轴那一条线 默认为true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#598FC1",
              },
            },
            splitLine: {
              //网格样式
              show: false,
              axisLine: {
                //x轴刻度线
                show: false, //这里的show用于设置是否显示x轴那一条线 默认为true
              },
              lineStyle: {
                color: ["#151F3A"],
                width: 1,
                type: "solid",
              },
            },
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: true,
              lineStyle: {
                color: "#141F3B",
              },
            },
            type: "value",
            // name: '数量',
            barWidth: "10%",
            barGap: "20%", //柱状间距
            show: true,
            min: 0,
            max: 1400,
            splitNumber: 8,
            axisTick: {
              //隐藏刻度标记
              show: false,
            },
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                width: 1, // 这里是为了突出显示加上的
              },
              show: false,
            },
          },
          {
            splitLine: { show: false },
            type: "value",
            barWidth: "2%",
            barGap: "2%", //柱状间距
            show: true,
            min: 0,
            max: 140,
            splitNumber: 8,
            axisTick: {
              //隐藏刻度标记
              show: false,
            },
            axisLabel: {
              show: true,
              interval: "auto", //居中显示
              formatter: "{value} %", //以百分比显示
            },

            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                width: 1, // 这里是为了突出显示加上的
              },
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 15, //柱图宽度
            // barGap: "1%",

            name: "95558投诉",
            //渐变色实现===
            color: new this.$echarts.graphic.LinearGradient(
              1,
              1,
              0,
              0,
              //三种由深及浅的颜色
              [
                {
                  offset: 0,
                  color: "#3AB590",
                },

                {
                  offset: 1,
                  color: "#64DFBB",
                },
              ]
            ),
            data: [1352, 713, 703, 698, 622, 607, 556, 552, 474, 470],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "#18936e",
                  position: "top", //数据在中间显示
                  distance: 2,
                  formatter: "{c}", //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                },
                textStyle: {
                  fontSize: 10,
                },
                // color: "#18936e", //设置柱子的颜色
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
          {
            type: "bar",
            barWidth: 15, //柱图宽度
            name: "人行投诉",
            // barGap: "20%",
            color: new this.$echarts.graphic.LinearGradient(
              1,
              1,
              0,
              0,
              //三种由深及浅的颜色
              [
                {
                  offset: 0,
                  color: "#0B6EF6",
                },

                {
                  offset: 1,
                  color: "#64E9F5",
                },
              ]
            ),
            data: [1057, 456, 789, 323, 865, 1024, 148, 1048, 732, 659],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "0a69f8",
                  distance: 5,
                  //  fontSize: 12,
                  position: "top", //数据在中间显示
                  formatter: "{c}", //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                },
                // color: "#0a69f8", //设置柱子的颜色
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
          {
            type: "bar",
            barWidth: 15, //柱图宽度
            name: "银保监投诉",
            // barGap: "20%",
            color: new this.$echarts.graphic.LinearGradient(
              1,
              1,
              0,
              0,
              //三种由深及浅的颜色
              [
                {
                  offset: 0,
                  color: "#D6BC4E",
                },

                {
                  offset: 1,
                  color: "#C9CD49",
                },
              ]
            ),
            data: [1214, 256, 512, 748, 369, 1089, 1300, 1256, 876, 991],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top", //数据在中间显示
                  color: "#C9CD49",
                  distance: 8,
                  formatter: "{c}", //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                },
                // color: "#aea38d", //设置柱子的颜色
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
          {
            type: "bar",
            barWidth: 15, //柱图宽度
            name: "信访",
            // barGap: "20%",
            color: new this.$echarts.graphic.LinearGradient(
              1,
              1,
              0,
              0,
              //三种由深及浅的颜色
              [
                {
                  offset: 0,
                  color: "#FF654B",
                },

                {
                  offset: 1,
                  color: "#FCC22B",
                },
              ]
            ),
            data: [552, 763, 1056, 1093, 453, 789, 456, 133, 423, 753],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  distance: 11,
                  position: "top", //数据在中间显示
                  color: "#FCC22B",
                  formatter: "{c}", //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                },
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
          {
            type: "line",
            name: "同比",
            data: [
              78.49, 76.01, 70.55, 33.03, 65.77, 53.2, 32.63, 34.26, 32.64,
              17.76,
            ],
            yAxisIndex: 1, // 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: "", // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
              // color: "#55945F", //设置柱子的颜色
              normal: {
                borderColor: "#56955F", //折点颜色
                color: "#ffffff",
                borderWidth: 2.5,
                label: {
                  show: false,
                  color: "#56955F",
                }, // 折点位置显示数值

                lineStyle: {
                  //线的颜色
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#56955F",
                    },
                    {
                      offset: 1,
                      color: "#87D086",
                    },
                  ]), //线条渐变色
                  width: 4,
                },
              },
            },
          },
          {
            type: "line",
            name: "环比",
            showSymbol: true,
            symbol: "circle", //折点设定为实心点
            symbolSize: 8, //设定实心点的大小
            data: [
              86.49, 62.01, 64.55, 25.03, 58.77, 72.2, 64.63, 28.26, 80.64,
              50.76,
            ],
            yAxisIndex: 1, // 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: "circle", // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
              normal: {
                borderColor: "#FF5D7B", //折点颜色
                color: "#ffffff",
                borderWidth: 2.5,
                label: {
                  show: false,
                  color: "#639FD6",
                }, // 折点位置显示数值

                lineStyle: {
                  color: "#FF5D7B",
                  width: 4,
                },
              },
            },
          },
        ],
      };
      var chartLine2 = this.$echarts.init(
        document.getElementById("chartLineBox")
      );
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);

      // 使用刚指定的选择项数据显示图表。
      var s = this.chartLine.getOption().legend[0].data; //legend所有值
      var names = [];
      for (let i = 0; i < s.length; i++) {
        names.push(s[i].name);
      }
      // console.log(names);
      this.$nextTick(() => {
        var checkboxs = document.getElementsByName("checkboxchart");

        var arr = document.getElementsByClassName("checkboxchart");
        for (let i = 0; i < arr.length; i++) {
          arr[i].onclick = function () {
            // console.log(checkboxs[i].checked);
            if (checkboxs[i].checked) {
              
              option.legend.selected[names[i]] = true;
            } else if (checkboxs[i].getAttribute("checked")) {
              option.legend.selected[names[i]] = true;
            } else {
              option.legend.selected[names[i]] = false;
            }

            chartLine2.setOption(option);
          };
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
// 顶部css
.titleList {
  display: flex;
}
.el-col {
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
      top: 14px;
      border-bottom: 7px solid #1a83c0;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 104%;
      top: 14px;
      border-bottom: 7px solid #58dbff;
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
  .select {
    float: right;
    margin-right: -5%;
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
  color: #58dbff;
  // margin-top: 10px;
  font-weight: 700;
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
//底部echars css
.shuju {
  width: 100%;
  height: 520px;
  //  background: red;
  margin-top: 1%;
  .title {
    // margin-left: 3%;
    // margin-top: 2.5%;
    position: relative;
    top: 1.8%;
    left: 3%;
    color: #55d4f8;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  #chartLineBox {
    width: 1200px;
    // margin: 2.5% auto 0;
    height: 300px;
    //  background: red;
    margin-top: 3.5%;
    margin-left: -3%;
  }
  .kongzhi {
    width: 50%;
    margin: 40px auto;
    display: flex;
    justify-content: space-around;

    .input-yangshi {
      padding-top: 2px;
      color: #ffff;
      font-size: 12px;
      // .checkboxchart{
      //     background-color:#0e2351;
      // }
      input[type="checkbox"] {
        width: 12.22px;
        height: 12.22px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        line-height: 18px;
        position: relative;
        -webkit-appearance: none; //去掉原有样式
      }

      input[type="checkbox"]::before {
        content: "";
        position: absolute;
        top: -2px;
        left: 0;
        background: #131b35;
        width: 100%;
        height: 100%;
        border: 1px solid #305484;
      }

      input[type="checkbox"]:checked::before {
        content: "\2713";
        background-color: #45f8f8;
        position: absolute;
        top: -2px;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #45f8f8;
        color: #121c34;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        line-height: 94%;
        // text-emphasis-color: #45f8f8;
      }
    }

    div {
      margin-right: 20px;
      /deep/ .el-button.is-round {
        border-radius: 20px;
        padding: 0 6px 0 0 !important;
        height: 25px;
        width: 90px;

        font-weight: 500;
      }
      .color1 {
        color: #41a4c9;
        border: 1px solid #41a4c9;
        background-color: #0e2351;
        height: 25px;
        width: 90px;
        border-radius: 20px;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
      }
      .color11 {
        color: #205669;
        border: 1px solid #45f8f8;
        background-color: #45f8f8;
        height: 25px;
        width: 90px;
        border-radius: 20px;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
      }
    }
  }
}
</style>