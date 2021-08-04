<!--电量进度条组件-->
<template>
    <div class="pictorialBar" >
        <p class="title">{{data.title}}</p>
        <div class="picBar" id="picBar"></div>
    </div>
</template>

<script>
export default {

  name: "pictorialBar",
  data() {
    return {
     
    }
  },
  props:{
    data:Object
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.data,'---data---')
      
      this.init()
    });
  },
  methods: {
    init() {
        var that = this;
        var myChart = this.$echarts.init(document.querySelector(".picBar"));

        var option = {
          // backgroundColor:"#17326b",
          grid: {
            left: "15",
            top: "10",
            right: "15",
            bottom: "10",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
          },
          yAxis: [
            {
              type: "category",
              axisTick: { show: false },
              axisLine: { show: false },
              axisLabel: {
                color: "black",
                fontSize: this.data.fontSize,
                textStyle: {
                  color: "#fff",
                },
              },
              data: this.data.cols,
              // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
              inverse: true,
            },
            {
              type: "category",
              axisTick: { show: false },
              axisLine: { show: false },
              axisLabel: {
                color: "black",
                fontSize: this.data.fontSize,
                textStyle: {
                  color: "#fff",
                },
              },
              data: this.data.data,
              // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
              inverse: true,
            },
          ],
          series: [
            {
              name: "条",
              type: "pictorialBar",
              symbolRepeat: "fixed",
              symbolMargin: 1,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [6, 8],
              symbolOffset: [5,0],//柱子的位置
              data: this.data.data,
              z: 2,
              // barCategoryGap:0,

              itemStyle: {
                normal: {
                  barBorderRadius: 7,
                  //柱体的颜色
                  //右，下，左，上（1，0，0，0）表示从正右开始向左渐变
                  color: function (params) {
                    //   console.log(params);
                    var colorList = [
                      ["#02f0fe", "#02B8EC"],
                      ["#02f0fe", "#02B8EC"],
                      ["#02f0fe", "#02B8EC"],
                      ["#02f0fe", "#02B8EC"],
                      ["#02f0fe", "#02B8EC"],
                    ];
                    var colorItem = colorList[params.dataIndex];
                    return new that.$echarts.graphic.LinearGradient(
                      1,
                      0,
                      0,
                      0,
                      [
                        {
                          offset: 0,
                          color: colorItem[0],
                        },
                        {
                          offset: 1,
                          color: colorItem[1],
                        },
                      ],
                      false
                    );
                  },
                },
              },
              zlevel: 1,
            },
            {
              name: "进度条背景",
              type: "bar",
              barGap: "-100%",
              barWidth:16,
              symbolOffset: [5, 0],//柱子的位置
              data: [100, 100, 100],
              color: "#2e5384",
              itemStyle: {
                normal: {
                  barBorderRadius:8,
                },
              },
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", () => { myChart.resize();});

      }
  },
}
</script>


<style >
.TableProgress {
  /*margin-top: 20px;*/
  margin: 5px;
  padding:1px;
}

.TableProgress .title {
  height: 22px;
  margin-top: 10px;
  margin-left: 14px;
  text-align: left;
  display: block;
  max-width: 195px;
  color: #02d1f4;
  background: url(../assets/images/title_bg.png) no-repeat;
  background-size:100% 100%;
  font-size: 12px;
  font-weight: 400;
  padding: 0 8px;

}

.TableProgress .el-table td, .el-table th {
  padding: 10px 0;
}
/*.el-table tr:hover {*/
/*   background: transparent;*/
/*}*/
.TableProgress .el-table td, .el-table th.is-leaf {
  border-bottom: 0;
}
.TableProgress .el-table {
  background: transparent;
  width: 98%;
  margin: 10px 0 10px 15px;
}
.TableProgress .el-table__body{
  height: 100%;
}
.TableProgress .el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
  height: auto!important;
}
.TableProgress .el-table th, .el-table tr {
  background-color: transparent;
}
.TableProgress .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: transparent;
}
.TableProgress .el-table td, .el-table th {
  /*padding: 0.7% 0;*/
  text-align: center;
}
.TableProgress .el-table--border::after, .el-table--group::after, .el-table::before {
  background-color: transparent;
}
.TableProgress .el-table .cell{
  /*color: #12abe2;*/
  font-size: 10px;
  padding: 0 2px;
}
.TableProgress .blue {
  color: #55d4f8;
}
.TableProgress .color-white {
  /*color: white;*/
}
.TableProgress .colorDefault .el-progress-bar__inner{
  background-color: #55d4f8;
}
.TableProgress .colorDanger .el-progress-bar__inner{
  background-color: rgba(251, 84, 62, 1);
  /*background-image: -webkit-linear-gradient(bottom,rgba(251, 84, 62, 1), rgba(245, 134, 89, 1));*/
}
.TableProgress .el-progress-bar__outer  {
   /*height: 15px;*/
   border-radius: 75px;
   background-color: #1a3a6b7d;
   overflow: hidden;
   position: relative;
   vertical-align: middle;
 }
</style>