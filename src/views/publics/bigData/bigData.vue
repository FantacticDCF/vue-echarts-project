<style>

body {
    background-repeat: no-repeat;
    background-color: #06164A;
    background-size: cover;
}

.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  padding: 0.125rem 0.125rem 0;
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
  /*height: 3.875rem;*/
  height: 48%;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url("../../../assets/images/line.png");
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  border-radius: 20%;
}
.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
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
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  border-radius: 20%;
}
.panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
  border-radius: 20%;
}
.panel h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: left;
  color: #02d1f4;
  font-size: 0.25rem;
  font-weight: 400;
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
.bar1 .chart,.bar1 .chart2 ,.bar1 .chart3,.bar1 .chart4 {
  height:120px
}
.bar2 .chart{
  height:240px
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
}
.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  text-align: center;
}
.no .no-hd {
  width: 23%;
  display: inline-block;
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.no .no-hd::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
  top: 0;
  left: 0;
}
.no .no-hd::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
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
}
.no .no-hd ul li {
  position: relative;
  flex: 1;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  font-size: 32px;
  color: #ffeb7b;
  padding: 0.05rem 0;
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
.no .no-bd ul {
  display: flex;
}
.no .no-bd ul li {
  flex: 1;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.225rem;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.125rem;
}
.map {
  position: relative;
  height: 10.125rem;
}
.map .chart {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 10.125rem;
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
@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>    
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
          <!-- <div class="chart"></div> -->
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar2">
          <h2>全行实时投诉排名</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
            </ul>
            <p>机构名称</p>
          </div>
          <div class="no-hd">
            <ul>
              <li>125811</li>
            </ul>
            <p>当年投诉总量</p>
          </div>
          <div class="no-hd">
            <ul>
              <li>125811</li>
            </ul>
            <p>监管投诉数量</p>
          </div>
          <div class="no-hd">
            <ul>
              <li>125811</li>
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
          <!--                <div class="map1"></div>-->
          <!--                <div class="map2"></div>-->
          <!--                <div class="map3"></div>-->
        </div>
      </div>
      <div class="column">
        <div class="panel bar1">
          <h2>各维度投诉数据表</h2>
          <h2>客群投诉排名</h2>
          <div class="chart" id="chart"></div>
          <div class="panel-footer"></div>
          <h2>全行实时投诉排名</h2>
          <div class="chart2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel bar1">
          <h2>投诉预警</h2>
          <h2>区域预警</h2>
          <div class="chart3"></div>
          <div class="panel-footer"></div>
          <h2>产品预警</h2>
          <div class="chart4"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import commonTitle from "../components/commonTitle.vue"
import '@/assets/utils/china'
export default {
  data() {
    return {};
  },
  components:{
      commonTitle
  },
  mounted() {
    this.getData();
    this.tousu();
    this.quyuyujing();
    this.tousupm();
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
              fontSize: 14,
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
              fontSize: 14,
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
            symbolSize: [10, 12],
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
                // barBorderRadius:10,
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
              fontSize: 14,
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
              fontSize: 14,
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
            symbolSize: [10, 12],
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
                // barBorderRadius:10,
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
              fontSize: 14,
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
              fontSize: 14,
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
            symbolSize: [10, 12],
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
                // barBorderRadius:10,
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
      right:"0",
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
          fontSize:14,
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
          fontSize:14,
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
        barWidth:15,
        data:[80,40,60,10,80,50,70],
        barCategoryGap:40,
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
        barWidth:15,
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
  // 2. 指定配置和数据
  // 2. 指定配置和数据
//   var geoCoordMap = {
//     上海: [121.4648, 31.2891],
//     东莞: [113.8953, 22.901],
//     东营: [118.7073, 37.5513],
//     中山: [113.4229, 22.478],
//     临汾: [111.4783, 36.1615],
//     临沂: [118.3118, 35.2936],
//     丹东: [124.541, 40.4242],
//     丽水: [119.5642, 28.1854],
//     乌鲁木齐: [87.9236, 43.5883],
//     佛山: [112.8955, 23.1097],
//     保定: [115.0488, 39.0948],
//     兰州: [103.5901, 36.3043],
//     包头: [110.3467, 41.4899],
//     北京: [116.4551, 40.2539],
//     北海: [109.314, 21.6211],
//     南京: [118.8062, 31.9208],
//     南宁: [108.479, 23.1152],
//     南昌: [116.0046, 28.6633],
//     南通: [121.1023, 32.1625],
//     厦门: [118.1689, 24.6478],
//     台州: [121.1353, 28.6688],
//     合肥: [117.29, 32.0581],
//     呼和浩特: [111.4124, 40.4901],
//     咸阳: [108.4131, 34.8706],
//     哈尔滨: [127.9688, 45.368],
//     唐山: [118.4766, 39.6826],
//     嘉兴: [120.9155, 30.6354],
//     大同: [113.7854, 39.8035],
//     大连: [122.2229, 39.4409],
//     天津: [117.4219, 39.4189],
//     太原: [112.3352, 37.9413],
//     威海: [121.9482, 37.1393],
//     宁波: [121.5967, 29.6466],
//     宝鸡: [107.1826, 34.3433],
//     宿迁: [118.5535, 33.7775],
//     常州: [119.4543, 31.5582],
//     广州: [113.5107, 23.2196],
//     廊坊: [116.521, 39.0509],
//     延安: [109.1052, 36.4252],
//     张家口: [115.1477, 40.8527],
//     徐州: [117.5208, 34.3268],
//     德州: [116.6858, 37.2107],
//     惠州: [114.6204, 23.1647],
//     成都: [103.9526, 30.7617],
//     扬州: [119.4653, 32.8162],
//     承德: [117.5757, 41.4075],
//     拉萨: [91.1865, 30.1465],
//     无锡: [120.3442, 31.5527],
//     日照: [119.2786, 35.5023],
//     昆明: [102.9199, 25.4663],
//     杭州: [119.5313, 29.8773],
//     枣庄: [117.323, 34.8926],
//     柳州: [109.3799, 24.9774],
//     株洲: [113.5327, 27.0319],
//     武汉: [114.3896, 30.6628],
//     汕头: [117.1692, 23.3405],
//     江门: [112.6318, 22.1484],
//     沈阳: [123.1238, 42.1216],
//     沧州: [116.8286, 38.2104],
//     河源: [114.917, 23.9722],
//     泉州: [118.3228, 25.1147],
//     泰安: [117.0264, 36.0516],
//     泰州: [120.0586, 32.5525],
//     济南: [117.1582, 36.8701],
//     济宁: [116.8286, 35.3375],
//     海口: [110.3893, 19.8516],
//     淄博: [118.0371, 36.6064],
//     淮安: [118.927, 33.4039],
//     深圳: [114.5435, 22.5439],
//     清远: [112.9175, 24.3292],
//     温州: [120.498, 27.8119],
//     渭南: [109.7864, 35.0299],
//     湖州: [119.8608, 30.7782],
//     湘潭: [112.5439, 27.7075],
//     滨州: [117.8174, 37.4963],
//     潍坊: [119.0918, 36.524],
//     烟台: [120.7397, 37.5128],
//     玉溪: [101.9312, 23.8898],
//     珠海: [113.7305, 22.1155],
//     盐城: [120.2234, 33.5577],
//     盘锦: [121.9482, 41.0449],
//     石家庄: [114.4995, 38.1006],
//     福州: [119.4543, 25.9222],
//     秦皇岛: [119.2126, 40.0232],
//     绍兴: [120.564, 29.7565],
//     聊城: [115.9167, 36.4032],
//     肇庆: [112.1265, 23.5822],
//     舟山: [122.2559, 30.2234],
//     苏州: [120.6519, 31.3989],
//     莱芜: [117.6526, 36.2714],
//     菏泽: [115.6201, 35.2057],
//     营口: [122.4316, 40.4297],
//     葫芦岛: [120.1575, 40.578],
//     衡水: [115.8838, 37.7161],
//     衢州: [118.6853, 28.8666],
//     西宁: [101.4038, 36.8207],
//     西安: [109.1162, 34.2004],
//     贵阳: [106.6992, 26.7682],
//     连云港: [119.1248, 34.552],
//     邢台: [114.8071, 37.2821],
//     邯郸: [114.4775, 36.535],
//     郑州: [113.4668, 34.6234],
//     鄂尔多斯: [108.9734, 39.2487],
//     重庆: [107.7539, 30.1904],
//     金华: [120.0037, 29.1028],
//     铜川: [109.0393, 35.1947],
//     银川: [106.3586, 38.1775],
//     镇江: [119.4763, 31.9702],
//     长春: [125.8154, 44.2584],
//     长沙: [113.0823, 28.2568],
//     长治: [112.8625, 36.4746],
//     阳泉: [113.4778, 38.0951],
//     青岛: [120.4651, 36.3373],
//     韶关: [113.7964, 24.7028]
//   };
  var mydata = [
    {name: '北京',value: '100' },{name: '天津',value: randomData() },
    {name: '上海',value: randomData() },{name: '重庆',value: randomData() },
    {name: '河北',value: randomData() },{name: '河南',value: randomData() },
    {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
    {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
    {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
    {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
    {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
    {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
    {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
    {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
    {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
    {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
    {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
    {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
    {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
    {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
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
    }
  },
};
</script>