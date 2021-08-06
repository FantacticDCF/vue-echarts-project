<template>
  <div>
    <div :class="{ popContainer: isActive }">
      <div v-for="(item, index) in show" :key="index">
        <div v-if="item" :style="style[index]" class="asd">
          <div class="closeit" @click="closeIt(index)">x</div>
          <!-- <p class="line-text">月度投诉趋势图</p> -->
          <div
            :id="'chartLine' + index"
            ref="chartLine"
            style="width: 97%; height: calc(100vh - 400px)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: [true, false, false, false, false],
      isActive: true,
      index: 0,
      oldIndex: null,
      style: [],
    };
  },
  props: ["showT"],
  created() {
    this.show[0] = this.showT;
  },
  methods: {
    asd(index) {
 // 折线图
      this.oldIndex = index
      this.index = index
      let indexo = index + 1;
      let zIndex = 30000 + indexo;
      let right = 5 + 5 * indexo + "%";
      let top = 10 + 5 * indexo + "%";
      if (indexo < 6) {
        console.log(4)
        this.getLineEcharts()
        this.show[index + 2] = true;
        this.style.push({
          width: "50%",
          height: "400px",
          background: "#fff",
          position: "absolute",
          right: right,
          top: top,
          zIndex: zIndex,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "10px 10px 5px #888888",
        });
      } else {
        return;
      }
    },
    getLineEcharts() {
      this.chartLine = this.$echarts.init(
        document.getElementById('chartLine' + (this.index + 1)), 'macarons'
      );
      this.chartLine.setOption({
        tooltip: {
          //---鼠标焦点放在图形上，产生的提示框
          show: true,
          trigger: "item", //---触发类型
          textStyle: {
            color: "#fff",
          },
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
            interval: 0,
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
            data: [59, 53, 84, 80, 94, 83],
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
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#6184F7",
                      },
                      {
                        offset: 1,
                        color: "#66D8E6",
                      },
                    ]
                  ), //线条渐变色
                  width: 4,
                },
              },
            },
          },
        ],
      });
      //点击折点的方法
      let slef = this
      this.oldIndex += 1
      this.index += 1
      this.chartLine.on("click", function (param) {
        if(param.data) {
          if(slef.oldIndex == -1) {
            slef.asd(slef.index)
            slef.index += 1
          } else {
            slef.asd(slef.index)
          }
        }
      });
      let chartBox = this.$refs.chartLine;
      chartBox.oncontextmenu = function () {
        return false;
      };
      this.chartLine.on("contextmenu", () => {
        this.$router.push("/Home/plan");
      });
    },
    closeIt(index) {
      this.show.splice(index);
      if (this.show.length == 0) {
        this.isActive = false;
        this.$emit("litenContent", false);
      }
    },
  },
};
</script>

<style lang='less' scoped>
div.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.asd {
  animation: mymove 1s infinite;
  animation-iteration-count: 1;
  box-shadow: 10px;
}
@keyframes mymove {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.closeit {
  width: 100%;
  text-align: right;
  padding-top: 5px;
  padding-right: 10px;
  font-size: 20px;
  font-weight: bold;
}
button {
  margin-top: 150px;
}
#chartLineBox {
  margin: 15px 0 0 0;
  background: url(../assets/images/analysis/line-bg.png) no-repeat center;
  background-size: 100% 100%;
}
</style>
