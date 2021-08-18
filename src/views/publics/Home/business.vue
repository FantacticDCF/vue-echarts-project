<template>
  <div>
    <fuzzySearch/>
      <el-row class="el-row-input" style="margin: 2px 0 5px">
      <el-col :span="24" class="titleList"
        ><div class="bus-bread">投诉管理</div>
        </el-col
      >
    </el-row>
    <!-- <div class="aborder" :style="setBackgroundBg">
      <span>工单查询</span>
      <input
        type="text"
        class="input-border"
        placeholder="输入关键词查询"
        :style="setBackgroundBg"
      />
      <i class="el-icon-search iconSearch"></i>
    </div> -->

    <el-row>
      <el-col :span="11">
        <div class="title">投诉管理目标分解表</div>
        <div class="descTitle">
          <div class="left-div">机构</div>
          <div class="middle-div">达标值</div>
          <div class="right-div">已发生</div>
        </div>
        <div class="fromContent" v-for="(item, index) in info" :key="index">
          <div :class="item.classname">{{ item.name }}</div>
          <div class="jindu">
            <progressCommon
              :showxAxis="false"
              :showaxisTick="false"
              :showaxisLine="false"
              :inverseyAxis="true"
              :typeshow="false"
              :coloraxisLabel="coloraxisLabel"
              :typeaxisLine="false"
              :typeyAxis="true"
              :name="item.namecolor"
              :yAxisIndexseries="yAxisIndexseries"
              :serisetype="serisetype"
              :progress="item.jindu"
              :backgroundStyleseries="true"
              :barBorderRadiusnormal="barBorderRadiusnormal"
              :colornormal="colornormal"
              :colornormal1="colornormal1"
              :colornormal2="colornormal2"
              :colornormal3="colornormal3"
              :colornormal4="colornormal4"
              :colornormal5="colornormal5"
              :colornormal6="colornormal6"
              :colornormal7="colornormal7"
              :barCategoryGapseries="barCategoryGapseries"
              :barWidthseries="barWidthseries"
              :nameseries="nameseries"
              :yAxisIndexseries1="yAxisIndexseries1"
              :typeseries="typeseries"
              :dataseries="dataseries"
              :barCategoryGap="barCategoryGap"
              :barWidth="barWidth"
              :zseries="zseries"
              :coloritemStyle="coloritemStyle"
              :borderColoritemStyle="borderColoritemStyle"
              :borderWidthitemStyle="borderWidthitemStyle"
              :barBorderRadiusitemStyle="barBorderRadiusitemStyle"
            />
            <div class="num" @click="numPushHandle">{{ item.num1 }}</div>
          </div>
          <div class="jindu">
            <Jindutiao
              :progress="item.jindu"
              :name="item.colorid < 1 ? item.namecolor : item.namecolor1"
            />
            <div
              :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
              @click="numPushHandle"
            >
              <i :class="item.colorid < 1 ? '' : item.icon"></i>
              {{ item.num2 }}
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="11">
        <div class="title">监管投诉管理目标</div>
        <div class="descTitle">
          <div class="left-div">机构</div>
          <div class="middle-div">达标值</div>
          <div class="right-div">已发生</div>
        </div>
        <div class="fromContent" v-for="(item, index) in info1" :key="index">
          <div :class="item.classname" id="el-progress">{{ item.name }}</div>
          <div class="jindu">
            <Jindutiao
              :progress="item.jindu"
              :name="item.namecolor"
              class="jindutiao"
            />
            <div class="num" @click="numPushHandle">{{ item.num1 }}</div>
          </div>
          <div class="jindu">
            <Jindutiao
              :progress="item.jindu"
              :name="item.colorid < 1 ? item.namecolor : item.namecolor1"
            />
            <div
              :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
              @click="numPushHandle"
            >
              <i :class="item.colorid < 1 ? '' : item.icon"></i>
              {{ item.num2 }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Jindutiao from "../components/jindutiao.vue";
import progressCommon from "../../../components/progressCommon.vue";
import fuzzySearch from '../../../components/fuzzySearch.vue'
export default {
  data() {
    return {
      yAxisIndexseries: 0,
      serisetype: "bar",
      barBorderRadiusnormal: 20,
      barCategoryGapseries: 1,
      barWidthseries: 19,
      nameseries: "框",
      yAxisIndexseries1: 1,
      typeseries: "bar",
      dataseries: [100],
      barCategoryGap: 1,
      barWidth: 19,
      zseries: 0,
      borderWidthitemStyle: 0,
      barBorderRadiusitemStyle: 40,
      borderColoritemStyle: "#142E5C",
      coloritemStyle: "#142E5C",
      coloraxisLabel: "#32B7E3",
      // colornormal:"#0499D4",
      colornormal: "#0499D4",
      colornormal1: "#1AA5DB",
      colornormal2: "#39BBE5",
      colornormal3: "#4FC8EC",
      colornormal4: "#E53232",
      colornormal5: "#E84040",
      colornormal6: "#F06363",
      colornormal7: "#F57B7B",
      arr: [50],
      titleName: "投诉管理目标分解表",
      titleName1: "监管投诉管理目标",
      setBackgroundBg: {
        backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      },
      info: [
        {
          id: 1001,

          colorid: 0,
          name: "全辖投诉数量控制",
          num1: 4160,
          num2: 3820,
          jindu: [90],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "blue",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1002,
          colorid: 0,
          name: "静安支行",
          num1: 700,
          num2: 660,
          jindu: [60],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1003,
          name: "浦东支行",
          num1: 600,
          num2: 610,
          jindu: [50],
          colorid: 1,
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",
          titleColor: "numred",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1004,
          colorid: 0,
          namecolor1: "红色",
          name: "上海火车支行",
          num1: 550,
          num2: 490,
          jindu: [40],
          namecolor: "蓝色",
          classname: "write",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1005,
          name: "虹桥支行",
          num1: 500,
          num2: 450,
          jindu: [35],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1006,
          name: "迪士尼支行",
          num1: 450,
          num2: 400,
          jindu: [30],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1007,
          name: "市府支行",
          num1: 400,
          num2: 360,
          jindu: [26],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1008,
          name: "西藏路支行",
          num1: 380,
          num2: 320,
          jindu: [21],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1009,
          name: "北京路支行",
          num1: 300,
          num2: 260,
          jindu: [18],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1010,
          name: "解放路支行",
          num1: 280,
          num2: 270,
          jindu: [15],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0, //改变颜色的id
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
      ],
      info1: [
        {
          id: 1001,
          name: "全辖投诉数量控制",
          num1: 280,
          num2: 192,
          jindu: [90],
          namecolor: "蓝色",
          classname: "blue",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1002,
          name: "静安支行",
          num1: 35,
          num2: 33,
          jindu: [60],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor12: "红色",
          titleColor: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1003,
          name: "浦东支行",
          num1: 30,
          num2: 28,
          jindu: [50],
          titleColor2: "numRed",
          titleColor1: "num",
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
        {
          id: 1004,
          name: "上海火车支行",
          num1: 28,
          num2: 25,
          jindu: [40],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1005,
          name: "虹桥支行",
          num1: 25,
          num2: 23,
          jindu: [35],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          titleColor2: "numRed",
          titleColor1: "num",
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
        {
          id: 1006,
          name: "迪士尼支行",
          num1: 23,
          num2: 20,
          jindu: [30],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1007,
          name: "市府支行",
          num1: 20,
          num2: 22,
          jindu: [26],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1008,
          name: "西藏路支行",
          num1: 19,
          num2: 16,
          jindu: [21],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1009,
          name: "北京路支行",
          num1: 15,
          num2: 13,
          jindu: [18],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
        {
          id: 1010,
          name: "解放路支行",
          num1: 14,
          num2: 14,
          jindu: [15],
          namecolor: "蓝色",
          classname: "write",
          colorid: 0,
          namecolor1: "红色",
          titleColor2: "numRed",
          titleColor1: "num",
          icon: "el-icon-warning",
        },
      ],
    };
  },
  components: {
    Jindutiao,
    progressCommon,
    fuzzySearch
  },
  methods: {
    numPushHandle() {
      this.$router.push({ path: "/Home/analysis" });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url("../../../assets/less/business.less");
</style>