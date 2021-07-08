<template>
  <div>
    <commonTitle/>
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>全行投诉指标一览</h2>

          <div class="ts-index">
            <div class="ts-bg"><h3>40%</h3></div>
            <p>总投诉发生率</p>
          </div>
          <div class="ts-index">
            <div class="ts-bg"><h3>40%</h3></div>
            <p>对公客户投诉发生率</p>
          </div>
          <div class="ts-index">
            <div class="ts-bg"><h3>40%</h3></div>
            <p>月度投诉发生率</p>
          </div>
          <div class="ts-index">
            <div class="ts-bg"><h3>40%</h3></div>
            <p>零售客户投诉发生率</p>
          </div>
           <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar2">
          <h2>全行实时投诉排名</h2>
<!--          <div class="chart"></div>-->
          <TableProcess></TableProcess>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>{{orgName}}</li>
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
          <h2>各维度投诉数据表</h2>
          <h2 class="sub1">客群投诉排名</h2>
          <div class="chart" id="chart"></div>
          <div class="panel-footer"></div>
          <h2 class="sub2">全行实时投诉排名</h2>
          <div class="chart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar1">
          <h2>投诉预警</h2>
          <h2 class="sub1">区域预警</h2>
          <div class="chart3"></div>
          <div class="panel-footer"></div>
          <h2 class="sub2"> 产品预警</h2>
          <div class="chart4"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import commonTitle from "../components/commonTitle.vue";
  import TableProcess from "./TableProcess.vue";
  import '@/assets/utils/china';
  export default {
    data() {
      return {
        orgName:"北京分行",
        dnAll:550,
        jgAll:137,
        hnAll:32

      };
    },
    components:{
        commonTitle,
        TableProcess
    },
    mounted() {

      this.getData();
      this.tousu();
      this.quyuyujing();
      // this.tousupm();
      this.tousuyujing();
      this.chinamap()
    },
    methods: {

      getData() {
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
              symbolMargin: 2,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [6, 8],
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
              barWidth: 16,
              data: [100, 100, 100],
              color: "#2e5384",
              itemStyle: {
                normal: {
                  barBorderRadius:4,
                },
              },
            },
          ],
        };
        this.myChart.setOption(option);
      },

      tousu() {
        var that = this;
        var myChart = this.$echarts.init(document.querySelector(".bar1 .chart2"));

        var data = [66, 59, 57];
        var titlename = ["信用卡", "个贷", "手机银行"];

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
              symbolMargin: 2,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [6, 8],
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
              barWidth: 16,
              data: [100, 100, 100],
              color: "#2e5384",
              itemStyle: {
                normal: {
                  barBorderRadius:4,
                },
              },
            },
          ],
        };
        myChart.setOption(option);
      },

      quyuyujing() {
          var that = this;
        var myChart = that.$echarts.init(document.querySelector(".bar1 .chart3"));

        var data = [66, 59, 57];
        var titlename = ["福州分行", "南昌分行", "贵阳分行"];

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
              symbolMargin: 2,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [6, 8],
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
              barWidth: 16,
              data: [100, 100, 100],
              color: "#2e5384",
              itemStyle: {
                normal: {
                  barBorderRadius:4,
                },
              },
            },
          ],
        };
        myChart.setOption(option);
      },

      tousuyujing() {
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
              symbolMargin: 2,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [6, 8],
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
              barWidth: 16,
              data: [100, 100, 100],
              color: "#2e5384",
              itemStyle: {
                normal: {
                  barBorderRadius:4,
                },
              },
            },
          ],
        };
        myChart.setOption(option);
      },
      tousupm(){
          var that = this;
          var myChart = that.$echarts.init(document.querySelector(".bar2 .chart"));

    var data = [66,59,57,48,42,35,29];
    var titlename = ["北京分行", "上海分行", "广州分行", "深圳分行", "郑州分行", "成都分行", "武汉分行"];


    var option = {
      // backgroundColor:"#17326b",
      grid:{
        left:"10",
        top:"10",
        right:"10",
        bottom:"10",
        containLabel:true
      },
      xAxis: {
        type: 'value',
        splitLine:{show:false},
        axisLabel:{show:false},
        axisTick:{show:false},
        axisLine:{show:false}
      },
      yAxis:[
        {
          type: 'category',
          axisTick:{show:false},
          axisLine:{show:false},
          axisLabel:{
            color:"black",
            fontSize:12,
            textStyle: {
              color: '#fff'
            }
          },
          data:titlename,
          // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
          inverse:true
        },
        {
          type: 'category',
          axisTick:{show:false},
          axisLine:{show:false},
          axisLabel:{
            color:"black",
            fontSize:12,
            textStyle: {
              color: '#fff'
            }
          },
          data:data,
          // max:10, // 关键：设置y刻度最大值，相当于设置总体行高
          inverse:true
        }
      ],
      series: [
        {
          name:"条",
          type:"bar",
          barWidth:10,
          data:[80,40,60,10,80,50,70],
          barCategoryGap:60,
          itemStyle:{
            normal:{
              barBorderRadius:10,
              color: new that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#22b6ed'
              }, {
                offset: 1,
                color: '#3fE279'
              }]),
            }
          },
          zlevel:1

        },{
          name:"进度条背景",
          type:"bar",
          barGap:"-100%",
          barWidth:10,
          data:[100,100,100,100,100,100,100],
          color:"#2e5384",
          itemStyle:{
            normal:{
              barBorderRadius:10,

            }
          },
        }
      ]
    };




    myChart.setOption(option);
      },

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
      return Math.round(Math.random()*500);
    }


    var option = {
      //左侧小导航图标
      visualMap: {
        show : true,
        title : "各地区销量排名",
        x: 'left',
        y: 'bottom',
        textStyle: {
          fontSize: 10,
          fontWeight: 'normal',
          color: 'white'
        },
        pieces: [      // 自定义每一段的范围，以及每一段的文字
          { gte: 10000, label: 'top25%'}, // 不指定 max，表示 max 为无限大（Infinity）。
          { gte: 1000, lte: 9999, label: '25%-50%'},
          { gte: 500, lte: 999, label: '50%-75%'},
          { gte: 100, lte: 499, label: '100-499人'},
          { gte: 10, lte: 99, label: '75%-100%'},
        ],
        inRange: {
          // 渐变颜色，从小到大
          color: ['#d1d4da', '#bacae8', '#96b5ef', '#6797ef', '#3375e4', '#035cf5']
        }
        // color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
      },

      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        roam: false,
        //   放大我们的地图
        // zoom: 1,
        itemStyle: {
          normal: {
            areaColor: "rgba(43, 196, 243, 0.42)",
            borderColor: "rgba(43, 196, 243, 1)",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
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
        // zoom: 1,
        itemStyle: {
          normal: {
            areaColor: "rgba(43, 196, 243, 0.42)",
            borderColor: "rgba(43, 196, 243, 1)",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data:mydata  //数据
      }]
    };
    myChart.setOption(option);
    myChart.on('click',  (params) =>{
          console.log(params.data.name);
          // params.data
          this.orgName = params.data.name + '分行';
          this.dnAll = params.data.dnAll;
          this.jgAll = params.data.jgAll;
          this.hnAll = params.data.hnAll;


    });

    }

    },
  };
</script>
<style>

body {
  background-repeat: no-repeat;
  background-color: #06164A;
  background-size: cover;
}

.mainbox {
  /*min-width: 1024px;*/
  /*max-width: 1920px;*/
  height: 90vh;
  padding: 5px;
  display: flex;
}
.mainbox .column {
  flex: 3;
}
.mainbox .column:nth-child(2) {
  flex: 5;
  margin: 0 0.125rem 0.1875rem;
  overflow: hidden;
}
.panel {
  position: relative;
  /* height: 3.875rem; */
  height: 330px;
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
  height: 4px;
  margin-top: -10px;
  line-height: 3px;
  text-align: left;
  color: #02d1f4;
  font-size: 12px;
  font-weight: 400;
  padding: 0 5px;
}
.panel h2 a {
  margin: 0 0.1875rem;
  color: #fff;
  text-decoration: underline;
}
.panel .chart {
  height: 3rem;
}
.panel .chart2 {
  height: 3rem;
}
.panel .sub1 {
  margin-top: 32px;
}
.panel .sub2 {
  margin-top: 16px;
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
  padding: 0.1875rem;
  text-align: center;
}
.no .no-hd {
  width: 25%;
  height: 79px;
  display: inline-block;
  position: relative;
  /* border: 1px solid rgba(25, 186, 139, 0.17); */
  background: url(../../../assets/images/bg-info.png) no-repeat 0/cover;
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
  height:50px;
  background: url(../../../assets/images/bg-info2.png) no-repeat 0/cover;

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
  padding-top: 20px;
  font-weight:bold;
}
.map {
  position: relative;
  height: 800px;
}
.map .chart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 500px;
  width: 100%;
}
.map .map1,
.map .map2,
.map .map3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6.475rem;
  height: 6.475rem;
  /* background: url(../image/map.png) no-repeat; */
  background-size: 100% 100%;
  opacity: 0.3;
}
.map .map2 {
  width: 8.0375rem;
  height: 8.0375rem;
  /* background-image: url(../image/lbx.png); */
  opacity: 0.6;
  animation: rotate 15s linear infinite;
  z-index: 2;
}
.map .map3 {
  width: 7.075rem;
  height: 7.075rem;
  /* background-image: url(../image/jt.png); */
  animation: rotate1 10s linear infinite;
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