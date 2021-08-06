<template>
  <div>
    <fuzzyTable/>
    <el-row style="margin: 2px 0">
      <el-col :span="12"><div class="bus-bread">监管报送</div></el-col>
    </el-row>
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
    <component :is="componentsShow"></component>
  </div>
</template>
<script>
import realTime from "./components/realTIme.vue";
import dayTime from "./components/dayTime.vue";
import weekTime from "./components/weekTime.vue";
import monthTime from "./components/weekTime.vue";
import threeTime from "./components/threeTime.vue";
import halfyearTime from "./components/halfyearTime.vue";
import yearsTime from "./components/yearsTime.vue";
import fuzzyTable from '../../../components/fuzzySearch.vue'
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
          component: "weekTime",
          id: 3,
        },
        {
          name: "月",
          component: "monthTime",
          id: 4,
        },
        {
          name: "季度",
          component: "threeTime",
          id: 5,
        },
        {
          name: "半年",
          component: "halfyearTime",
          id: 6,
        },
        {
          name: "年",
          component: "yearsTime",
          id: 7,
        },
      ],
      componentsShow: "realTime",
    };
  },
  components: {
    realTime,
    dayTime,
    weekTime,
    monthTime,
    threeTime,
    halfyearTime,
    yearsTime,
    fuzzyTable
  },
  mounted() {},
  methods: {
    changeCenterTab(item, e) {
      console.log(item, e);
      let domselect = document.querySelector(".centertabselected");
      if (domselect) {
        domselect.classList.toggle("centertabselected");
      }
      e.target.classList.toggle("centertabselected");
      this.componentsShow = item.component;
    },
  },
};
</script>
<style lang='less' scoped>
.el-col-12 {
  height: 30px;
  margin-bottom: 0.3%;
  .bus-bread {
    height: 30px;
    line-height: 40px;
    position: relative;
    text-indent: 16px;
    color: #58dbff;

    // margin-bottom: 1%;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 10px;
      border-bottom: 7px solid #1a83c0;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 13%;
      top: 10px;
      border-bottom: 7px solid #58dbff;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
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
  // font-weight: 500;
  color: #5487B7;
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
</style>