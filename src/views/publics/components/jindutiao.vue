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
    progress: Array,
    name: String,
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
          show: false, //不显示x轴相关信息
        },

        yAxis: [
          {
            type: "category", 
            // axisTick: { show: false }, //不显示刻度线
            axisTick: {
              show: false,  
            },
            axisLine: {
              show: false,
            },
            inverse: true,
          },
          {
            type: "category",
            axisTick: { show: false }, //不显示刻度线
            axisLabel: {
              color: "#32B7E3",
            },

            axisLine: {
              show: false,
            },
            inverse: true,
          },
        ],
        series: [
          {
            name: this.name,
            yAxisIndex: 0,
            type: "bar",
            data: this.progress, //控制里面的长度
            // 修改第一条柱子的圆角
            backgroundStyle: true,
            itemStyle: {
              normal: {
                barBorderRadius: 20, 
                color: function (params) {
                  // console.log(params,'111');
                  // console.log(this);
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
            barCategoryGap: 1,
            // 柱子之间的宽度
            barWidth: 19,
            // 显示柱子内的文字
          },

          {
            name: "框",
            yAxisIndex: 1,
            type: "bar",
            data: [100],

            // 柱子之间的间距
            barCategoryGap: 1,
            // 柱子之间的宽度
            barWidth: 19,
            z: 0,
            itemStyle: {
              color: "#142E5C", //填充色
              borderColor: "#142E5C",
              borderWidth: 0,
              barBorderRadius: 40,
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