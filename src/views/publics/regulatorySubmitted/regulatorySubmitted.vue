<template>
  <div>
    <div class="bus-bread">监管报送</div>
    <div class="bus-bread1" style="visibility: hidden">待处理工单</div>
    <div class="aborder" :style="setBackgroundBg">
      <span>工单查询</span>
      <input
        type="text"
        class="input-border"
        placeholder="输入关键词查询"
        :style="setBackgroundBg"
      />
      <!-- <div class="iconSearch"> -->
      <i class="el-icon-search iconSearch"></i>
    </div>
    <div class="center_tab">
      <ul class="center_tab_ul">
        <li
          class="center_tab_ul_list"
          v-for="(item, index) in centertablist"
          :key="index"
          :class="item.centerselected"
          @click="changeCenterTab(item, $event)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
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
        ></li>
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
      setBackgroundBg: {
        backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      },
      centertablist: [
        {
          name: "实时",
          component: "realTime",
          id: 1,
          centerselected: "centertabselected",
        },
        {
          name: "日",
          component: "dayTime",
          id: 2,
        },
        {
          name: "周",
          component: "dayTime",
          id: 3,
        },
        {
          name: "月",
          component: "dayTime",
          id: 4,
        },
        {
          name: "季度",
          component: "dayTime",
          id: 5,
        },
        {
          name: "半年",
          component: "dayTime",
          id: 6,
        },
        {
          name: "年",
          component: "dayTime",
          id: 7,
        },
      ],
      centernumlist: [
        {
          id: 1,
          img: require("../../../assets/images/commonTitle/bg04.png"),
        },
        {
          id: 2,
          img: require("../../../assets/images/commonTitle/logo.png"),
        },
        {
          id: 3,
          img: require("../../../assets/images/commonTitle/logo.png"),
        },
        {
          id: 4,
          img: require("../../../assets/images/commonTitle/logo.png"),
        },
      ],
    };
  },
  components: {},
  mounted() {
    this.firstEcharts();
  },
  methods: {
    changeCenterTab(item, e) {
      console.log(item, e);
      let domselect = document.querySelector(".centertabselected");
      if (domselect) {
        domselect.classList.toggle("centertabselected");
      }
      e.target.classList.toggle("centertabselected");
    },
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
                show: false
            },
            data: [
              "南京市",
              "淮安市",
              "常州市",
              "徐州市",
              "南通市",
              "宿迁市",
              "无锡市",
              "扬州市",
              "盐城市",
              "苏州市",
              "泰州市",
              "镇江市",
              "连云港市",
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
                fontSize: 14,
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
              300, 450, 770, 203, 255, 188, 156, 300, 450, 770, 203, 255, 188,
            ],
            barWidth: "15px",
            // barCategoryGap: 10,
            barGap: 15,
            itemStyle: {
              normal: {
                color:new that.$echarts.graphic.LinearGradient(
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
                    barBorderRadius : [30, 30, 0, 0],
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
                borderRadius: 200,
                position: ["0", "-25"],
                // distance: 1,
                // formatter: ["    {d|●}", " {a|{c}}     \n", "    {b|}"].join(
                //   ","
                // ),
                // rich: {
                //   d: {
                //     color: "#3CDDCF",
                //   },
                //   a: {
                //     color: "#4f81af",
                //     align: "center",
                //   },
                //   b: {
                //     width: 1,
                //     height: 30,
                //     borderWidth: 1,
                //     borderColor: "#234e6c",
                //     align: "left",
                //   },
                // },
              },
            },
          },
        ],
      };
      mydom.setOption(option);
      window.addEventListener("resize", () => { mydom.resize();});
    },
    secondEcharts() {},
  },
};
</script>
<style lang='less' scoped>
.bus-bread1 {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  top: -20px;
  left: 4.5%;

  &:after {
    position: absolute;
    content: "";
    left: 7.8%;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
}
.bus-bread {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
  &:after {
    position: absolute;
    content: "";
    left: 6.2%;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
}
.aborder {
  text-indent: 30px;
  color: #1a83c0;
  // margin-top: 10px;
  width: 55%;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
}
.input-border {
  margin-left: 30px;
  border: none;
  color: #1a83c0;
  width: 70%;
  height: 70%;
  text-indent: 15px;
  font-size: 10px;
}
input::-webkit-input-placeholder {
  color: #59dfff;
}
.center_tab {
  padding-left: 0px;
  margin-top: 20px;
  width: 58%;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #61728e;
  border-radius: 30px;
  cursor: pointer;
}
.center_tab .center_tab_ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center_tab .center_tab_ul .center_tab_ul_list {
  width: 20%;
  text-align: center;
  height: auto;
  font-weight: 500;
}
.centertabselected {
  background: url(../../../assets/images/complaintAnalysis/tabBg.png) no-repeat;
  background-size: 109% 138%;
  background-position-y: -5px;
  background-position-x: -4px;
  height: auto;
  height: 100%;
  color: #65d0ea;
}
.center_num {
  width: 100%;
  height: 110px;
  margin-top: 15px;
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
    border: 1px solid #ccc;
  }
}
.footer_ech {
  width: 100%;
  & > .footer_ech_content {
    width: 100%;
    & > div {
      width: 100%;
      height: 300px;
      margin: 1% 0;
    }
  }
}
</style>