<template>
  <div id="chartLineBox" :style="style"> 
</template>

<script>
export default {
  data() {
    return {
      style: {},
      showAxisTick: '',
      showAxisLine: '',
      dataxAxis: '',
      showAxisLabel: '',
      axisLabelColor: '',
      showSplitLine: '',
      splitLineColor: [],
      splitLineWidth: '',
      splitLineType: '',
      yAxisAxisTick: '',
      showYaxisLabel: '',
      yAxisColor: '',
      showyAxisLine: '',
      splitLineShow: '',
      lineStyleColor: '',
      lineStyleWidth: '',
      lineStyleType: '',
      data: [],
      smooth: '',
      showSymbol: '',
      symbol: '',
      symbolSize: '',
      itemStyleborderColor: '',
      itemStyleColor: '',
      itemStyleborderWidth: '',
      labelshow: '',
      labelcolor: '',
      areaStyleType: '',
      areaStylColor: '',
      lineStyleColorr: '',
      lineStyleWidthh: ''
    }
  },
  mounted() {
    this.chartLine = this.$echarts.init(
      document.getElementById("chartLineBox")
    )
    this.getLineEcharts()
  },
  methods: {
    getLineEcharts() {
      // 折线图
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: "category",
          data: this.dataxAxis,
          //						minInterval: 1, //x轴间距
          axisTick: {
            show: this.showAxisTick
          }, //隐藏刻度标记
          axisLine: {
            //x轴刻度线
            show: this.showAxisLine, //这里的show用于设置是否显示x轴那一条线 默认为true
            //							lineStyle: { //lineStyle里面写y轴那一条线的样式
            //								color: '#6FC6F3',
            //								width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            //							}
          },
          axisLabel: {
            show: this.showAxisLabel,
            textStyle: {
              color: this.axisLabelColor,
            }
          },
          splitLine: {
            //网格样式
            show: this.showSplitLine,
            lineStyle: {
              color: this.splitLineColor,
              width: this.splitLineWidth,
              type: this.splitLineType
            }
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            //隐藏刻度标记
            show: this.yAxisAxisTick,
          },
          axisLabel: {
            show: this.showYaxisLabel,
            textStyle: {
              color: this.yAxisColor,
            },
          },
          axisLine: {
            //x轴刻度线
            show: this.showyAxisLine, //这里的show用于设置是否显示x轴那一条线 默认为true
            //							lineStyle: { //lineStyle里面写y轴那一条线的样式
            //								color: '#6FC6F3',
            //								width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
            //							}
          },
          splitLine: {
            //网格样式
            show: this.splitLineShow,
            lineStyle: {
              color: this.lineStyleColor,
              width: this.lineStyleWidth,
              type: this.lineStyleType,
            },
          },
        },
        series: [
          {
            data: this.data,
            type: "line",
            smooth: this.smooth, //折点是圆弧状的
            showSymbol: this.showSymbol,
            symbol: this.symbol, //折点设定为实心点
            symbolSize: this.symbolSize, //设定实心点的大小
            //                      hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: this.itemStyleborderColor, //折点颜色
                color: this.itemStyleColor,
                borderWidth: this.itemStyleborderWidth,
                label: {
                  show: this.labelshow,
                  color: this.labelcolor,
                }, // 折点位置显示数值
                areaStyle: {
                  type: this.areaStyleType,
                  //渐变色实现===
                  color: this.areaStylColor
                },
                lineStyle: {
                  //线的颜色
                  color: this.lineStyleColorr, //线条渐变色
                  width: this.lineStyleWidthh,
                },
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    },
  },
};
</script>

<style>
</style>