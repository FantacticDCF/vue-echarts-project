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
    <div class="shuju">
      <div>11111111111</div>
      <div id="chartLineBox"></div>
      <div>
        <input
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          checked="checked"
          value="邮件营销"
        />邮件营销
        <input
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          checked="checked"
          value="联盟广告"
        />联盟广告
        <input
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          checked="checked"
          value="视频广告"
        />视频广告
        <input
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          checked="checked"
          value="直接访问"
        />直接访问
        <el-button
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          :checked="checked"
          @click="clHandle"
          ref="checked"
          value="搜索引擎"
          >默认按钮</el-button
        >
         <el-button
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          :checked="checked1"
          @click="clHandle1"
          ref="checked"
          value="搜索引擎11"
          >默认按钮1</el-button
        >
        <!-- <input
          type="checkbox"
          class="checkboxchart"
          name="checkboxchart"
          checked="checked"
          value="搜索引擎"
        />搜索引擎 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: {
        邮件营销: true,
        联盟广告: true,
        视频广告: true,
        直接访问: true,
        搜索引擎: true,
        搜索引擎1: true,
      },
      count: 1,
      checked: true,
       checked1: true,
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
            "url(" + require("../../../assets/images/big-border.png") + ")",
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

    this.getLineEcharts1(this.selected);
  },
  methods: {
    clHandle() {
      
      this.count++;
       var checkboxs = document.getElementsByName("checkboxchart");
      if (this.count % 2 == 0) {
        // this.$refs.checked.$attrs.checked = false;
        checkboxs[4].checked = false;
        // console.log("false", this.$refs.checked.$attrs);
      } else {
        // this.$refs.checked.$attrs.checked = true;
                checkboxs[4].checked = true;

        // console.log("true", this.$refs.checked.$attrs);
      }
     
      console.log(checkboxs[4])
    
    },
    clHandle1() {
      
      this.count++;
       var checkboxs = document.getElementsByName("checkboxchart");
       console.log( '1111',checkboxs[5]);
      if (this.count % 2 == 0) {
        // this.$refs.checked.$attrs.checked = false;
        checkboxs[5].checked= false;
        // console.log("false", this.$refs.checked.$attrs);
      } else {
        // this.$refs.checked.$attrs.checked = true;
                checkboxs[5].checked = true;

        // console.log("true", this.$refs.checked.$attrs);
      }
     
      console.log(checkboxs[5])
  
    },
    getLineEcharts1(selected) {
      // 折线图
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "8%",
          right: "0",
          bottom: "1%",
          containLabel: true,
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎","搜索引擎11"],
          orient: "horizontal",
          right: 450,
          top: 0,
          bottom: 0,
          show: true,
          selected,
        },

        calculable: true,
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
              show: true,
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
            splitLine: { show: false },
            type: "value",
            // name: '数量',
            barWidth: "2%",
            barGap: "2%", //柱状间距
            show: true,
            min: 15,
            max: 100,
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                width: 1, // 这里是为了突出显示加上的
              },
            },
          },
          {
            splitLine: { show: false },
            type: "value",
            barWidth: "2%",
            barGap: "2%", //柱状间距
            show: true,
            min: 15,
            max: 100,
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                width: 1, // 这里是为了突出显示加上的
              },
            },
          },
          {
            splitLine: { show: false },
            type: "value",
            name: "",
            // interval: 10,
            // min:0,
            // max:2,
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                // width: 1, //y轴宽度，这里是为了突出显示加上的
              },
            },
          },
          {
            splitLine: { show: false },
            type: "value",
            name: "",
            // interval: 10,
            // min:0,
            // max:2,
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                // width: 1, //y轴宽度，这里是为了突出显示加上的
              },
            },
          },
          {
            splitLine: { show: false },
            type: "value",
            name: "",
            // interval: 10,
            // min:0,
            // max:2,
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                // width: 1, //y轴宽度，这里是为了突出显示加上的
              },
            },
          },
            {
            splitLine: { show: false },
            type: "value",
            name: "",
            // interval: 10,
            // min:0,
            // max:2,
            // 改变y轴颜色
            axisLine: {
              lineStyle: {
                color: "#1f78af",
                // width: 1, //y轴宽度，这里是为了突出显示加上的
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 30, //柱图宽度
            barGap: "1%",
            name: "邮件营销",
            data: [
              78.49, 76.01, 70.55, 70.03, 65.77, 53.2, 51.63, 34.26, 22.64,
              17.76,
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "inside", //数据在中间显示
                  formatter: "{c}", //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                },
                color: "#1f78af", //设置柱子的颜色
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
          {
            type: "bar",
            barWidth: 30, //柱图宽度
            name: "联盟广告",
            barGap: "20%",
            data: [
              78.49, 76.01, 70.55, 70.03, 65.77, 53.2, 51.63, 34.26, 22.64,
              17.76,
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "inside", //数据在中间显示
                  formatter: "{c}", //百分比显示，模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数
                },
                color: "#1f78af", //设置柱子的颜色
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
          {
            type: "line",
            name: "视频广告",
            data: [
              78.49, 76.01, 72.55, 70.03, 31.77, 53.2, 90.63, 34.26, 22.64,
              17.76,
            ],
            yAxisIndex: 1, // 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: "circle", // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
              normal: {
                color: "#e09216", //设置折线颜色
              },
            },
          },
          {
            type: "line",
            name: "直接访问",
            data: [
              78.49, 76.01, 70.55, 23.03, 65.77, 53.2, 43.63, 34.26, 22.64,
              17.76,
            ],
            yAxisIndex: 1, // 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: "circle", // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
              normal: {
                color: "#e09216", //设置折线颜色
              },
            },
          },
          {
            type: "line",
            name: "搜索引擎",
            data: [
              78.49, 76.01, 70.55, 33.03, 65.77, 53.2, 32.63, 34.26, 323.64,
              17.76,
            ],
            yAxisIndex: 1, // 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: "circle", // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
              normal: {
                color: "#e09216", //设置折线颜色
              },
            },
          },
           {
            type: "line",
            name: "搜索引擎11",
            data: [
              78.49, 76.01, 55.55, 33.03, 35.77, 53.2, 32.63, 64.26, 323.64,
              17.76,
            ],
            yAxisIndex: 1, // 这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来
            symbol: "circle", // 折线点设置为实心点
            symbolSize: 10, // 折线点的大小
            itemStyle: {
              normal: {
                color: "#e09216", //设置折线颜色
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
      var selectArr = this.chartLine.getOption().legend[0].data; //legend所有值
      // console.log(selectArr);
      var checkboxs = document.getElementsByName("checkboxchart");
      // console.log(document.getElementsByClassName('checkboxchart')[0]);
      var arr = document.getElementsByClassName("checkboxchart");
      //  var count=0
      for (let i = 0; i < arr.length; i++) {
        arr[i].onclick = function () {
          // console.log(i);
          let obj = {};
          // let count=0
          for (let j = 0; j < checkboxs.length; j++) {
            //  console.log(option);
            // console.log(option.legend.selectedMode);
            // console.log(count+=1);
            if (checkboxs[j].checked) {
              obj[selectArr[j]] = true;
            } else {
              obj[selectArr[j]] = false;
            }
            // obj[selectArr[j]]=!obj[selectArr[j]]
            // checkboxs[j].checked=obj[selectArr[j]]? obj[selectArr[j]]:!obj[selectArr[j]]
          }
          // console.log(option.legend.selected);
          // var op = chartLine2.getOption();
          option.legend.selected = obj;
          // console.log(op,'----');
          chartLine2.setOption(option);
        };
      }
      //   document.getElementsByClassName('checkboxchart').onclick=function(){
      //       console.log(111);
      //         var obj = {};
      //         for(var i=0; i<checkboxs.length; i++){
      //              console.log( checkboxs[i]);
      //             if(checkboxs[i].checked){
      //                 obj[selectArr[i]] = true;

      //             }else{
      //                 obj[selectArr[i]] = false;
      //             }
      //         }
      //         option.legend.selected = obj;
      //         this.chartLine.setOption(option);
      //     };
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
}
#chartLineBox {
  width: 1200px;
  // margin: 0 auto;
  height: 400px;
  //  background: red;
  margin-top: 1%;
}
// #chartLineBox {
//   // margin-top: 2%;
//   width: 579px;
//   margin: 4% auto;
//   height: 209px;
//   // background: red;
// }
</style>