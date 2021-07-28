<template>
  <div>
    <div class="center_num">
      <ul class="center_num_content">
        <li
          v-for="(item, index) in centernumlist"
          :key="index"
          :style="{
            backgroundImage: 'url(' + item.img + ')',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }"
        >
          <span>{{ item.num }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="footer_ech">
      <div class="footer_ech_content">
        <div id="footer_ech_content_fir"></div>
        <div id="footer_ech_content_sec"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centernumlist: [
        {
          id: 1,
          img: require("../../../../assets/images/commonTitle/jgbs02.png"),
          num: "11009",
          name: "实时全行投诉发生量",
        },
        {
          id: 2,
          img: require("../../../../assets/images/commonTitle/jgbs02.png"),
          num: "76%",
          name: "实时全行投诉发生率",
        },
        {
          id: 3,
          img: require("../../../../assets/images/commonTitle/jgbs02.png"),
          num: "10088",
          name: "全行监管投诉数量",
        },
        {
          id: 4,
          img: require("../../../../assets/images/commonTitle/jgbs02.png"),
          num: "5124",
          name: "今日全行投诉发生量",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.firstEcharts();
      this.secondEcharts();
    });
  },
  methods: {
    firstEcharts() {
      let that = this;
      let firecharts = document.getElementById("footer_ech_content_fir");
      let mydom = this.$echarts.init(firecharts);
      var option = {
        // backgroundColor: "#034380",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "12%",
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: [
              "北京",
              "上海",
              "深圳",
              "大连",
              "南京",
              "杭州",
              "广州",
              "成都",
              "郑州",
              "重庆",
              "福州",
              "沈阳",
              "武汉",
              "天津",
              "长沙",
              "昆明",
              "石家庄",
              "西安",
            ],
            axisLine: {
              lineStyle: {
                color: "#4f81af",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#4f81af",
              textStyle: {
                // fontSize: 14,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#4f81af",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "#183151",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: [
              200, 190, 180, 170, 160, 150, 140, 130, 120, 115, 110, 105, 100,
              100, 100, 100, 100, 100,
            ],
            barWidth: "15px",
            // barCategoryGap: 10,
            barGap: 15,
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0.4,
                  0.7,
                  1,
                  [
                    { offset: 0, color: "#07E2F4" },
                    { offset: 0.4, color: "#08B8F6" },
                    { offset: 0.7, color: "#0985F7" },
                    { offset: 1, color: "#0970F8" },
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 0, 0],
                // shadowColor :"rgba(0,160,221,1)",
                // shadowBlur :4
              },
            },
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 60,
                height: 30,
                // backgroundColor: "rgba(0,160,221,0.1)",
                color: "#588EC1",
                borderRadius: 100,
                position: ["0", "-25"],
              },
            },
          },
        ],
      };
      mydom.setOption(option);
      window.addEventListener("resize", () => {
        mydom.resize();
      });
    },
    secondEcharts() {
      let that = this;
      let firecharts = document.getElementById("footer_ech_content_sec");
      let mydom = this.$echarts.init(firecharts);
      var option = {
        // backgroundColor: "#034380",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "12%",
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: [
              "苏州",
              "济南",
              "合肥",
              "宁波",
              "厦门",
              "太原",
              "呼和浩特",
              "南宁",
              "哈尔滨",
              "长春",
              "乌鲁木齐",
              "贵阳",
              "兰州",
              "海口",
              "西宁",
              "银川",
              "拉萨",
            ],
            axisLine: {
              lineStyle: {
                color: "#4f81af",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#4f81af",
              textStyle: {
                // fontSize: 14,
              },
              //坐标轴刻度标签的相关设置。
              formatter: function (params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = 4; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = ""; // 表示每一次截取的字符串
                    var start = p * provideNumber; // 开始截取的位置
                    var end = start + provideNumber; // 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr; // 最终拼成的字符串
                  }
                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName;
              },
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#4f81af",
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "#183151",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            data: [
              100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 20, 10, 10, 10, 10,
              10,
            ],
            barWidth: "15px",
            // barCategoryGap: 10,
            barGap: 15,
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0.4,
                  0.7,
                  1,
                  [
                    { offset: 0, color: "#07E2F4" },
                    { offset: 0.4, color: "#08B8F6" },
                    { offset: 0.7, color: "#0985F7" },
                    { offset: 1, color: "#0970F8" },
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 0, 0],
                // shadowColor :"rgba(0,160,221,1)",
                // shadowBlur :4
              },
            },
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 60,
                height: 30,
                // backgroundColor: "rgba(0,160,221,0.1)",
                color: "#588EC1",
                borderRadius: 100,
                position: ["0", "-25"],
              },
            },
          },
        ],
      };
      mydom.setOption(option);
      window.addEventListener("resize", () => {
        mydom.resize();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.center_num {
  width: 100%;
  height: 110px;
  margin: 15px 0;
}
.center_num .center_num_content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  & > li {
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0 0.1%;
    text-align: center;
    & > span:nth-child(1) {
      display: block;
      height: 60px;
      line-height: 74px;
      font-size: 26px;
      color: #02ade3;
      font-family: electronicFont;
      font-weight: bold;
    }
    & > span:nth-child(2) {
      color: #fff;
    }
  }
}
.footer_ech {
  width: 100%;
  background-image: url("../../../../assets/images/commonTitle/jgbs01.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  & > .footer_ech_content {
    width: 100%;
    padding: 50px 0 30px;
    & > div {
      width: 98%;
      height: 200px;
      margin: 1% 0;
    }
  }
}
</style>