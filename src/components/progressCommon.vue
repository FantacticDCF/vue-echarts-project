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
    showxAxis: Boolean,
    showaxisTick: Boolean,
    showaxisLine: Boolean,
    inverseyAxis: Boolean,
    typeshow: Boolean,
    coloraxisLabel: String,
    typeaxisLine: Boolean,
    typeyAxis: Boolean,
    name: String,
    yAxisIndexseries: Number,
    serisetype: String,
    progress: Array,
    backgroundStyleseries: Boolean,
    barBorderRadiusnormal: Number,
    colornormal: String,
    colornormal1: String,
    colornormal2: String,
    colornormal3: String,
    colornormal4: String,
    colornormal5: String,
    colornormal6: String,
    colornormal7: String,
    barCategoryGapseries: Number,
    barWidthseries: Number,
    nameseries: String,
    yAxisIndexseries1: Number,
    typeseries: String,
    dataseries: Array,
    barCategoryGap: Number,
    barWidth: Number,
    zseries: Number,
    coloritemStyle: String,
    borderColoritemStyle: String,
    borderWidthitemStyle: Number,
    barBorderRadiusitemStyle: Number,
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
          show: this.showxAxis, //不显示x轴相关信息
        },

        yAxis: [
          {
            type: "category", //Y轴是category类型
            // axisTick: { show: false }, //不显示刻度线
            axisTick: {
              show: this.showaxisTick, //Y轴去掉刻度线false为不显示
            },
            axisLine: {
              show: this.showaxisLine, //Y轴坐标轴显示 false为不现实
            },
            inverse: this.inverseyAxis, //数值倒置
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
            name: this.name, //填写蓝色或者红色  为了配合下面的color函数来判断进度条颜色
            yAxisIndex: this.yAxisIndexseries, //使用的 y 轴 的 index，在单个图表实例中存在多个 y轴的时候有用。
            type: this.serisetype, //显示echarts的类型 bar为柱状图
            data: this.progress, //控制里面的长度 是一个数字 控制进度条内部的长度
            // 修改第一条柱子的圆角
            backgroundStyle: this.backgroundStyleseries,
            itemStyle: {
              normal: {
                barBorderRadius: this.barBorderRadiusnormal, //进度条圆角程度
                // color:this.colornormal
                //判断进度条的颜色  配合上面的this。name使用  //顔色漸變
                color: function (params) {
                  // console.log(params);
                  if (params.seriesName == "蓝色") {
                    return new that.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        { offset: 0, color: that.colornormal },
                        { offset: 0.4, color: that.colornormal1 },
                        { offset: 0.7, color: that.colornormal2 },
                        { offset: 1, color: that.colornormal3 },
                      ]
                    );
                  } else {
                    return new that.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        { offset: 0, color: that.colornormal4 },
                        { offset: 0.4, color: that.colornormal5 },
                        { offset: 0.7, color: that.colornormal6 },
                        { offset: 1, color: that.colornormal7 },
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
            data: this.dataseries, //这个是进度条的总长度 配合 上面大括号的data使用 这个是总长度上面那个是进度条长度两者按比例显示

            // 柱子之间的间距
            barCategoryGap: this.barCategoryGap,
            // 柱子之间的宽度
            barWidth: this.barWidth,
            z: this.zseries,
            itemStyle: {
              color: this.coloritemStyle, //填充色
              borderColor: this.borderColoritemStyle, //边框颜色
              borderWidth: this.borderWidthitemStyle, //边框长度
              barBorderRadius: this.barBorderRadiusitemStyle, //边框圆角程度
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