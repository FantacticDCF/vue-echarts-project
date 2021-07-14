<template>
  <div>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>全行投诉指标一览<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>

          <div class="ts-index">
            <div class="ts-bg"><h3>40%</h3></div>
            <p>总投诉发生率</p>
          </div>
          <div class="ts-index">
            <div class="ts-bg"><h3>30%</h3></div>
            <p>对公客户投诉发生率</p>
          </div>
          <div class="ts-index">
            <div class="ts-bg"><h3>20%</h3></div>
            <p>月度投诉发生率</p>
          </div>
          <div class="ts-index">
            <div class="ts-bg"><h3>10%</h3></div>
            <p>零售客户投诉发生率</p>
          </div>
           <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar2">
          <h2>全行实时投诉排名<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
<!--          <div class="chart"></div>-->
          <TableProcess></TableProcess>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>{{orgName}}<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></li>
            </ul>
            <p>机构名称</p>
          </div>
          <div class="no-hd">
            <ul>
              <li>{{dnAll}}</li>
            </ul>
            <p>当年投诉总量</p>
          </div>
          <div class="no-hd">
            <ul>
              <li>{{jgAll}}</li>
            </ul>
            <p>监管投诉数量</p>
          </div>
          <div class="no-hd">
            <ul>
              <li>{{hnAll}}</li>
            </ul>
            <p>行内投诉数量</p>
          </div>
          <div class="no-bd">
            <ul>
              <li>全国</li>
              <li>21,283</li>
              <li>129.6</li>
              <li>166.8</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="chart"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar1">
          <h2>各维度投诉数据表<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
          <h2 class="sub1">客群投诉排名<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
          <div class="chart" id="chart"></div>
          <div class="panel-footer"></div>
          <h2 class="sub2">全行实时投诉排名<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
          <div class="chart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar1">
          <h2 class="bg-s">投诉预警<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
          <h2 class="sub1">区域预警<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"><img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
          <div class="chart3"></div>
          <div class="panel-footer"></div>
          <h2 class="sub2"> 产品预警<img class="cockp_arrow" v-show="isShow" src="../../../assets/images/cockp_arrow.png"></h2>
          <div class="chart4"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import TableProcess from "./TableProcess.vue";
  import '@/assets/utils/china';
  import axios from 'axios';
  export default {
    name : "bigData",
    data() {
      return {
        // isShow:false,
        orgName:"北京分行",
        loading: false,
        dnAll:550,
        jgAll:137,
        hnAll:32
      };
    },
    components:{
        TableProcess
    },
    props: {
      isShow:Boolean
    },
    mounted() {

      this.getData();
      // this.tousupm();//全行实时投诉排名
      this.kqtousu();//客群投诉排名
      this.beitousu();//被投诉业务排名
      this.quyuyujing();//区域预警
      this.chanpinyujing();//产品预警
      this.chinamap()//中国地图
    },
    methods: {

      //获取数据
      getData(url) {
        axios
            .get(url)
            .then(response => {
              this.info = response;
              console.log('response',response)
            })
            .catch(error => {
              console.log(error)
            })
            .finally(() => this.loading = false)
      },

      //右1
      kqtousu() {
        var that = this;
        this.myChart = this.$echarts.init(document.getElementById("chart"));
        var data = [66, 59, 57];
        var titlename = ["普通客户", "贵宾客户", "私行客户"];

        var option = {
          // backgroundColor:"#17326b",
          grid: {
            left: "10",
            top: "10",
            right: "0",
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
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: titlename,
              // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
              inverse: true,
            },
            {
              type: "category",
              axisTick: { show: false },
              axisLine: { show: false },
              axisLabel: {
                color: "black",
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: data,
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
              data: data,
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
        this.myChart.setOption(option);
        window.addEventListener("resize", () => { this.myChart.resize();});

      },

      //右2
      beitousu() {
        var that = this;
        var myChart = this.$echarts.init(document.querySelector(".bar1 .chart2"));

        var data = [66, 59, 57];
        var titlename = ["信用卡", "个贷", "手机银行"];

        var option = {
          // backgroundColor:"#17326b",
          grid: {
            left: "10",
            top: "10",
            right: "0",
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
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: titlename,
              // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
              inverse: true,
            },
            {
              type: "category",
              axisTick: { show: false },
              axisLine: { show: false },
              axisLabel: {
                color: "black",
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: data,
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
              data: data,
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

      },

      //右3
      quyuyujing() {
          var that = this;
        var myChart = that.$echarts.init(document.querySelector(".bar1 .chart3"));

        var data = [66, 59, 57];
        var titlename = ["福州分行", "南昌分行", "贵阳分行"];

        var option = {
          // backgroundColor:"#17326b",
          grid: {
            left: "10",
            top: "10",
            right: "0",
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
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: titlename,
              // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
              inverse: true,
            },
            {
              type: "category",
              axisTick: { show: false },
              axisLine: { show: false },
              axisLabel: {
                color: "black",
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: data,
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
              data: data,
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

      },

      //右4
      chanpinyujing() {
          var that = this;
        var myChart = that.$echarts.init(document.querySelector(".bar1 .chart4"));

        var data = [66, 59, 57];
        var titlename = ["个人开户", "场景贷", "中信安全险"];

        var option = {
          // backgroundColor:"#17326b",
          grid: {
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
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
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: titlename,
              // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
              inverse: true,
            },
            {
              type: "category",
              axisTick: { show: false },
              axisLine: { show: false },
              axisLabel: {
                color: "black",
                fontSize: 12,
                textStyle: {
                  color: "#fff",
                },
              },
              data: data,
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
              data: data,
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

      },

      //地图
      chinamap(){
          var that = this;
          var myChart = that.$echarts.init(document.querySelector(".map .chart"));

          var mydata = [
            {name: '北京',value: '100',dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },
            {name: '天津',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },
            {name: '上海',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },{name: '重庆',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },
            {name: '河北',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },{name: '河南',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },
            {name: '云南',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },{name: '辽宁',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },
            {name: '黑龙江',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },{name: '湖南',value: randomData() ,dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '安徽',value: randomData() ,dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '山东',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '新疆',value: randomData() ,dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '江苏',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '浙江',value: randomData() ,dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '江西',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '湖北',value: randomData() ,dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '广西',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '甘肃',value: randomData() ,dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '山西',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '内蒙古',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },{name: '陕西',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData() },
            {name: '吉林',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '福建',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '贵州',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '广东',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '青海',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '西藏',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '四川',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '宁夏',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '海南',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '台湾',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},
            {name: '香港',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()},{name: '澳门',value: randomData(),dnAll:randomData(),jgAll:randomData(),hnAll:randomData()}
          ];

          function randomData() {
            return Math.round(Math.random()*150);
          }

          var option = {
            // backgroundColor: '',
            title: {
              text: '',
              left: 'center',
              textStyle: {
                color: '#fff',
                fontSize:25
              }
            },
            //左侧小导航图标
            visualMap: {
              show : true,
              // title : "各地区销量排名",

              // 组件上的文本
              // text: ['各地区销量排名'],
              x: 'left',
              y: 'bottom',
              textStyle: {
                fontSize: 10,
                fontWeight: 'normal',
                color: 'white',
                textAlign:'left'
              },
              left: "5%", //组件离容器左侧的距离,‘left’, ‘center’, ‘right’,‘20%’
              // top: "40% ", //组件离容器上侧的距离,‘top’, ‘middle’, ‘bottom’,‘20%’
              right: "auto", //组件离容器右侧的距离,‘20%’
              bottom: "2%", //组件离容器下侧的距离,‘20%’

              pieces: [      // 自定义每一段的范围，以及每一段的文字
                { gte: 15000, label: 'top25%'}, // 不指定 max，表示 max 为无限大（Infinity）。
                { gte: 9000, lte: 14999, label: '25%-50%'},
                { gte: 500, lte: 8999, label: '50%-75%'},
                { gte: 0, lte: 99, label: '75%-100%'},
              ],
              inRange: {
                // 渐变颜色，从小到大
                color: [ '#9ac8e5', '#68a9de', '#378ad6', '#0253a2']
              }
            },

            geo: {
              map: "china",
              label: {
                emphasis: {
                  show: true,
                  color: "#fff"
                }
              },
              zoom: 1.1,
              roam : false, //是否可移动
              hoverable : false, //是否有鼠标滑过效果,
              itemStyle: {
                normal: {
                  areaColor: "rgba(43, 196, 243, 0.42)",
                  borderColor: "rgba(43, 196, 243, 1)",
                  borderWidth: 1
                },
                emphasis: {
                  areaColor: "#68A8DE"
                }
              }
            },
            series: [{
              name: '数据',
              type: 'map',
              mapType: 'china',
              // roam: true,
              label: {
                normal: {
                  show: true , //省份名称
                  textStyle: {
                    fontSize: 10,
                    fontWeight: 'normal',
                    color: 'white'
                  }
                },
                emphasis: {
                  show: false
                }
              },
              roam: false,
              //   放大我们的地图
              zoom: 1.1,
              itemStyle: {
                normal: {
                  areaColor: "rgba(43, 196, 243, 0.42)",
                  borderColor: "rgba(43, 196, 243, 1)",
                  borderWidth: 1
                },
                emphasis: {
                  areaColor: "#68A8DE"
                }
              },
              data:mydata  //数据
            }]
          };
          myChart.setOption(option);
          myChart.on('click',  (params) =>{
                this.orgName = params.data.name + '分行';
                this.dnAll = params.data.dnAll;
                this.jgAll = params.data.jgAll;
                this.hnAll = params.data.hnAll;
          });
          window.addEventListener("resize", () => { myChart.resize();});
    }

    },
  };
</script>
<style>

body {
  background-repeat: no-repeat;
  background-color: #131B35;
  background-size: cover;
}

.mainbox {
  /*min-width: 1024px;*/
  /*max-width: 1920px;*/
  height: 680px;
  padding: 5px;
  display: flex;
}
.mainbox .column {
  /*flex: 3;*/
  width:30%
}
.mainbox .column:nth-child(2) {
  /*flex: 5;*/
  width: 40%;
  margin: 0 4px;
  overflow: hidden;
}
.cockp_arrow {
  width: 12px;
  height: 11px;
  margin-left: 2px;
  /*top: 7px;*/
  margin-top: 5px;
  position: absolute;
}
.no-hd .cockp_arrow{
  width: 15px;
  height: 16px;
  margin-left: 2px;
  /* top: 7px; */
  margin-top: 3px;
  position: absolute;
}
.panel {
  position: relative;
  height: 340px;
  /* border: 1px solid rgba(25, 186, 139, 0.17); */
  background: rgba(255, 255, 255, 0.04) url(../../../assets/images/line.png) no-repeat;
  padding: 21px 10px;
  background-size: 100% 100%;
  margin-bottom: 5px;
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  /* border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5; */
  border-radius: 20%;
}
.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  /* border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5; */
  border-radius: 20%;
}
.panel .panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  /* border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5; */
  border-radius: 20%;
}
.panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  /* border-bottom: 2px solid #02a6b5; */
  /* border-right: 2px solid #02a6b5; */
  border-radius: 20%;
}
.panel h2 {
  height: 20px;
  margin-top: -8px;
  line-height: 20px;
  text-align: left;
  display: block;
  max-width: 170px;
  color: #02d1f4;
  background: url(../../../assets/images/title_bg.png) no-repeat;
  background-size:100% 100%;
  font-size: 12px;
  font-weight: 400;
  padding: 0 5px;

}
.panel h2 a {
  color: #fff;
  text-decoration: underline;
}
/*.panel .chart {*/
/*  height: 3rem;*/
/*}*/
/*.panel .chart2 {*/
/*  height: 3rem;*/
/*}*/
.panel .sub1 {
  margin-top: 20px;
  background: none;
}
.panel .sub2 {
  margin-top: 6px;
  background: none;
}
.panel .bg-m {
  max-width: 130px;
}
.panel .bg-s {
  max-width: 105px;
}
.bar1 .chart,.bar1 .chart2 ,.bar1 .chart3,.bar1 .chart4 {
  height:120px
}
.bar2 .chart{
  height:300px;
  padding:10px;
  margin: 10px -10px;

}
.ts-index {
  width: 49%;
  height: 40%;
  display: inline-block;
  position: relative;
}
.ts-bg {
  width:100%;
  height: 100%;
  display: inline-block;
  position: relative;
  background: url("../../../assets/images/ts-bg.png") no-repeat center center;
  background-size: 60%;
}
.ts-index h3{
  position: absolute;
  top: 30%;
  color: white;
  /* line-height: 50%; */
  font-size: 25px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.ts-index p{
  color: white;
  text-align: center;
  font-size: 12px;
}
.no {
  background: rgba(101, 132, 226, 0.1);
  text-align: center;
}
.no .no-hd {
  width: 25%;
  height: 79px;
  display: inline-block;
  position: relative;
  /* border: 1px solid rgba(25, 186, 139, 0.17); */
  background: url(../../../assets/images/bg-info.png) no-repeat center;
  /*background-size: cover;*/
  background-size: 100% 99.9%;
}
.no .no-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  /* border-top: 2px solid #02a6b5; */
  /* border-left: 2px solid #02a6b5; */
  top: 0;
  left: 0;
}
.no .no-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  /* border-bottom: 2px solid #02a6b5; */
  /* border-right: 2px solid #02a6b5; */
  right: 0;
  bottom: 0;
}
.no .no-hd ul {
  display: flex;
}
.no .no-hd p {
  text-align: center;
  color: white;
  margin: 10px;
  font-size: 12px;
}
.no .no-hd ul li {
  position: relative;
  flex: 1;
  text-align: center;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  color: #02ade3;
  padding: 20px;
  font-family: electronicFont;
  font-weight: bold;
}
/*.no .no-hd ul li:first-child::after {*/
/*  content: "";*/
/*  position: absolute;*/
/*  height: 50%;*/
/*  width: 1px;*/
/*  background: rgba(255, 255, 255, 0.2);*/
/*  right: 0;*/
/*  top: 25%;*/
/*}*/
.no .no-bd  {
  height:45px;
  background: url(../../../assets/images/bg-info2.png) no-repeat center;
  /*background-size: cover;*/
  background-size: 100% 99.9%;
}
.no .no-bd ul {
  display: flex;
}
.no .no-bd ul li {
  flex: 1;
  height: 20px;
  line-height:20px;
  text-align: center;
  font-size: 20px;
  color: rgb(1, 179, 233);
  padding-top: 14px;
  font-weight:bold;
}
.map {
  position: relative;
  background: url(../../../assets/images/map_bg.png);
  background-size: 100% 100%;
  height: 530px;
}
.map .chart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 500px;
  width: 100%;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

</style>