<template>
  <div>
    <!-- 显示图表容器 -->
    <div class="main" ref="main"></div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {
      value: [],
    };
  },
  props: {
    // id: String,
    showxAxis:Boolean,
    showaxisTick:Boolean,
    showaxisLine:Boolean,
    inverseyAxis:Boolean,
    typeshow:Boolean,
    coloraxisLabel:String,
    typeaxisLine:Boolean,
    typeyAxis:Boolean,
     name: String,
     yAxisIndexseries:Number,
     serisetype:String,
      progress: Array,
      backgroundStyleseries:Boolean,
      barBorderRadiusnormal:Number,
    //   colornormal:Function,
      barCategoryGapseries:Number,
     barWidthseries:Number,
     nameseries:String,
     yAxisIndexseries1:Number,
       typeseries:String,
      dataseries:Array,
     barCategoryGap:Number,
     barWidth:Number,
     zseries:Number,
     coloritemStyle:String,
    borderColoritemStyle:String,
    borderWidthitemStyle:Number,
    barBorderRadiusitemStyle:Number,
    conversion: {
      default: false,
    },
  },
  //echarts
  mounted() {
    this.$nextTick(function () {
      this.draw();
    });
  },
  methods: {
    draw() {
      var that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.main);
      // this.charts = echarts.init(this.$refs.echarts);
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          show:this.showxAxis , //不显示x轴相关信息
        },

        yAxis: [
          {
            type: "category",
            // axisTick: { show: false }, //不显示刻度线
            axisTick: {
              show: this.showaxisTick,
            },
            axisLine: {
              show: this.showaxisLine,
            },
            inverse:this.inverseyAxis,
          },
          {
            type: "category",
            axisTick: { show: this.typeshow }, //不显示刻度线
            axisLabel: {
              color: this.coloraxisLabel,
            },

            axisLine: {
              show: this.typeaxisLine,
            },
            inverse: this.typeyAxis,
          },
        ],
        series: [
          {
            name: this.name,
            yAxisIndex: this.yAxisIndexseries,
            type: this.serisetype,
            data: this.progress, //控制里面的长度
            // 修改第一条柱子的圆角
            backgroundStyle: this.backgroundStyleseries,
            itemStyle: {
              normal: {
                barBorderRadius: this.barBorderRadiusnormal,
                // color:this.colornormal
                color: function (params) {
                  // console.log(params);
                  if (params.seriesName == "蓝色") {
                    return new that.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        { offset: 0, color: "#0499D4" },
                        { offset: 0.4, color: "#1AA5DB" },
                        { offset: 0.7, color: "#39BBE5" },
                        { offset: 1, color: "#4FC8EC" },
                      ]
                    );
                  } else {
                    return new that.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        { offset: 0, color: "#E53232" },
                        { offset: 0.4, color: "#E84040" },
                        { offset: 0.7, color: "#F06363" },
                        { offset: 1, color: "#F57B7B" },
                      ]
                    );
                  }
                },
              },
            },
            // 柱子之间的间距
            barCategoryGap: this.barCategoryGapseries,
            // 柱子之间的宽度
            barWidth: this.barWidthseries,
            // 显示柱子内的文字
          },

          {
            name: this.nameseries,
            yAxisIndex: this.yAxisIndexseries1,
            type: this.typeseries,
            data: this.dataseries,

            // 柱子之间的间距
            barCategoryGap: this.barCategoryGap,
            // 柱子之间的宽度
            barWidth: this.barWidth,
            z: this.zseries,
            itemStyle: {
              color: this.coloritemStyle, //填充色
              borderColor: this.borderColoritemStyle,
              borderWidth: this.borderWidthitemStyle,
              barBorderRadius: this.barBorderRadiusitemStyle,
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option, true);
    },
  },
};
</script>

<style>
.main {
  height: 15px;
  width: 150px;
  /* margin-left: 10px; */
}
</style>