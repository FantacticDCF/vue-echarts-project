<template>
  <div>
    <div :class="{'popContainer': isActive}">
      <div v-for='(item, index) in show' :key="index">
        <div v-if="item" :style="style[index]" class="asd">
          <div class="closeit" @click="closeIt(index)">x</div>
          <!-- <button @click="asd(index)">asdasd</button> -->
           <!--图表1和2-->
    <el-row>
      <el-col :span="12" class="line-box">
        <p class="line-text">月度投诉趋势图</p>
        <div
          ref="chartLine"
          id="chartLineBox"
          style="width: 97%; height: calc(100vh - 400px)"
        ></div>
      </el-col>
      <el-col :span="12" class="line-box">
        <p class="line-text">产品投诉数据</p>
        <div
          id="chartColumnBox"
          style="width: 97%; height: calc(100vh - 400px)"
        ></div>
      </el-col>
    </el-row>
    <!--图表3和4-->
    <el-row>
      <el-col :span="12" class="line-box">
        <p class="line-text">客群投诉数据</p>
        <div
          id="chartBreadBox"
          style="width: 97%; height: calc(100vh - 400px)"
        ></div>
      </el-col>
      <el-col :span="12" class="line-box">
        <p class="line-text">客群投诉数据</p>
        <div id="chartRoundBox" style="width: 97%; height: calc(100vh - 400px)">
          <div class="chartRoundBoxContent">
            <div v-for="(item, index) in percentage" :key="index">
              <el-progress
                type="circle"
                class="circle2"
                :stroke-width="11"
                :width="115"
                :percentage="item.percentage"
              >
              </el-progress>
              <span class="typeDerection">{{ item.title }}</span>
            </div>
          </div>
          <!--<div id="chartRoundBox1" style="width: 97%;height:500px;"></div> -->
        </div>
        <!--<el-row>
					<el-col :span="8">
						
					</el-col>
					<el-col :span="8"></el-col>
					<el-col :span="8"></el-col>
				</el-row>
				<el-row>
					<el-col :span="8"></el-col>
					<el-col :span="8"></el-col>
					<el-col :span="8"></el-col>
				</el-row>-->
      </el-col>
    </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'], 
  data () {
    return {
      show: [true, false, false, false, false],
      isActive: true,
      style: [
        {
          width: '50%',
          height: '400px',
          background: '#fff',
          position: 'absolute',
          right: '5%',
          top: '10%',
          zIndex: 30000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // boxShadow: '5px 5px 1px #888888'
        }
      ]
    }
  },
  props: ['showT'],
  created () {
    this.show[0] = this.showT
  },
  mounted() {
    this.chartLine = this.$echarts.init(
      document.getElementById("chartLineBox")
    );
    this.chartColum = this.$echarts.init(
      document.getElementById("chartColumnBox")
    );
    this.chartBread = this.$echarts.init(
      document.getElementById("chartBreadBox")
    );
    // this.chartRound = this.$echarts.init(document.getElementById('chartRoundBox'));
    window.addEventListener("resize", this.chartLine.resize);
    this.getLineEcharts(); // 折线图
    this.getColumEcharts(); // 柱状图
    this.getBreadEcharts(); // 饼图
    // this.getRoundEcharts() // 环形进度条
  },
  methods: {
    asd (index) {
      let indexo = index + 1
      let zIndex = 30000 + indexo
      let right =  5 + (5 * indexo) + '%'
      let top = 10 + (5 * indexo) + '%'
      if(indexo < 6) {
        this.show[index + 1] = true
        this.style.push({
          width: '50%',
          height: '400px',
          background: '#fff',
          position: 'absolute',
          right: right,
          top: top,
          zIndex: zIndex,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // boxShadow: '10px 10px 5px #888888'
        })
      } else {
        return
      }
    },
    closeIt (index) {
      this.show.splice(index)
      if(this.show.length == 0) {
        this.isActive = false
        this.$emit('litenContent', false)
      }
    },
    getLineEcharts() {
      // 折线图
      // 指定图表的配置项和数据
      var option = {
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
      this.chartLine.resize();
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option, true)
      //点击折点的方法
      this.show1 = false
      let self = this
      this.chartLine.on("click", function (param) {
        if(param.data) {
          self.showk = true
        }
      })
      let chartBox = this.$refs.chartLine
      chartBox.oncontextmenu = function () { return false }
      this.chartLine.on('contextmenu',()=>{
        this.$router.push('/Home/plan')
      })
    },
    getColumEcharts() {
      // 柱状图
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["类别1", "类别2", "类别3", "类别4", "类别5", "类别6"],
            axisTick: {
              show: false,
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
            type: "value",
            axisTick: {
              show: false,
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
              lineStyle: {
                color: ["#151F3A"],
                width: 1,
                type: "solid",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: "20%",
            barGap: "5%", //柱状间距
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
                  color: "#0B6EF6",
                },
                {
                  offset: 1,
                  color: "#64E9F5",
                },
              ]
            ),
            data: [40, 52, 30, 70, 90, 50],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [20, 20, 0, 0],
              },
            },
          },
        ],
      };
      this.chartColum.setOption(option);
    },
    getBreadEcharts() {
      // 饼图
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          left: "60%",
          top: "29%",
          right: "100%",
          bottom: "85%",
          orient: "vertical",
          align: "left",
          padding: [0, 2, 0, 0],
          itemGap: 11.5,
          //						formatter: data,
          itemWidth: 14,
          itemHeight: 14,
          icon: "circle", //左侧图形形状 类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none  也可以自定义图片'image://img/1主页.png' ,
          formatter: function (name) {
            return name + "  " + "36%" + "    " + "4,544";
          },
          //						formatter: "{a} <br/>{b} : {c} ({d}%)"
          //						formatter: function(params) {
          //						            return (
          //						              params.name +
          //						              "<br/>" +
          //						              "签收率:" +
          //						              params.value +
          //						              "%"
          //						            );
          textStyle: {
            color: "#598FC1",
          },
        },
        graphic: {
          //环形中间的字
          elements: [
            {
              type: "text",
              left: "31%",
              top: "50%",
              style: {
                text: "总投诉量",
                textAlign: "center",
                fill: "#558ABB",
                fontSize: 12,
              },
            },
            {
              type: "text",
              left: "27%",
              top: "56%",
              style: {
                text: "123,224",
                textAlign: "center",
                fill: "#E2E2E4",
                fontSize: 26,
              },
            },
          ],
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"], // 第一个参数是内圆半径，第二个参数是外圆半径，相对饼图的宿主div大小
            center: ["35%", "58%"], //饼图位置 x y
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 4544,
                name: "类型1",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#F18478",
                      },
                      {
                        offset: 1,
                        color: "#F3996B",
                      },
                    ]
                  ), //自定义显示格式(b:name, c:value, d:百分比)
                },
              },
              {
                value: 2232,
                name: "类型2",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#3DA9F8",
                      },
                      {
                        offset: 1,
                        color: "#2D8DF7",
                      },
                    ]
                  ),
                },
              },
              {
                value: 1568,
                name: "类型3",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#57C6AC",
                      },
                      {
                        offset: 1,
                        color: "#5ACCB7",
                      },
                    ]
                  ),
                },
              },
              {
                value: 7569,
                name: "类型4",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#EC5499",
                      },
                      {
                        offset: 1,
                        color: "#EB4A9D",
                      },
                    ]
                  ),
                },
              },
              {
                value: 3258,
                name: "类型5",
                itemStyle: {
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
                        color: "#653ED2",
                      },
                      {
                        offset: 1,
                        color: "#3460F2",
                      },
                    ]
                  ),
                },
              },
              {
                value: 6789,
                name: "类型6",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    //三种由深及浅的颜色
                    [
                      {
                        offset: 0,
                        color: "#EF6C41",
                      },
                      {
                        offset: 1,
                        color: "#F2873B",
                      },
                    ]
                  ),
                },
              },
            ],
          },
        ],
      };
      this.chartBread.setOption(option);
    },
    getRoundEcharts() {
      // 环形进度条组图
      var e = 80;
      var option = {
        title: {
          show: true,
          text: e + "%",
          x: "15%", //中心字体调整
          y: "27%", // 通过x,y将标题(进度)定位在圆环中心
          textStyle: {
            fontSize: "15",
            color: "#55CEEE",
            fontWeight: "400",
            fontFamily: "DINPro, DINPro-Regular",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{d}%",
          show: false,
        },
        legend: {
          orient: "vertical",
          x: "left",
          show: false,
        },
        series: {
          name: "",
          type: "pie",
          radius: ["25%", "35%"], //圆环大小
          center: ["18%", "33%"], //进度条位置调整
          avoidLabelOverlap: true,
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: e,
              name: "",
              itemStyle: {
                color: "#3DA9F4",
              },
            },
            {
              value: 100 - e,
              name: "",
              itemStyle: {
                color: "#39415A",
              },
            },
          ],
        },
      };
      this.chartRound.setOption(option);
    }
  }
}
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
  .asd{
    animation: mymove 1s infinite;
    animation-iteration-count: 1;
    box-shadow: 10px;
  }
  @keyframes mymove {
    0%{
      transform: scale(0);
    }
    100%{
      transform: scale(1);
    }
  }
  .closeit{
    width: 100%;
    text-align: right;
    padding-top: 5px;
    padding-right: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  button{
    margin-top: 150px;
  }
</style>
