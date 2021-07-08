<template>
  <div>
    <div class="info">
      <span class="work">工单查询</span>
      <input type="text" class="inp" placeholder="输入关键词查询" />
      <!-- <div class="iconSearch"> -->
      <i class="el-icon-search iconSearch"></i>
      <!-- </div> -->
    </div>
    <div class="formInfo">
      <div class="box">
        <img
          src="../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png"
          alt=""
          class="image"
        />

        <div class="title">{{ titleName }}</div>
        <div class="desc">
          <div class="descTitle">
            <div class="descTitleName">指标</div>
            <div class="jinduValueNum">达标值</div>
          </div>
          <div class="descTitle1" v-for="(item, index) in info" :key="index">
            <div
              :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
            >
              {{ item.name }}
            </div>
            <div class="jinduValue">
              <CircleProgressBar
                :progress="item.jindu"
                :name="item.namecolor"
              />
            </div>
            <div class="titleNum">{{ item.num1 }}%</div>
          </div>
        </div>
      </div>
      <div class="box1">
        <img
          src="../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png"
          alt=""
          class="image"
        />
        <div class="title">{{ titleName1 }}</div>
        <div class="desc">
          <div class="descTitle">
            <div class="descTitleName">指标</div>
            <div class="jinduValueNum">达标值</div>
          </div>
          <div class="descTitle1" v-for="(item, index) in info1" :key="index">
            <div
              :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
            >
              {{ item.name }}
            </div>
            <div class="jinduValue">
              <CircleProgressBar
                :progress="item.jindu"
                :name="item.namecolor"
              />
            </div>
            <div class="titleNum">{{ item.num1 }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgressBar from "../components/CircleProgressBar.vue";
export default {
  data() {
    return {
      arr: [50],
      titleName: "年度机构目标分解",
      titleName1: "年度业务目标分解",
      info: [
        {
          id: 1001,
          colorid: 0,
          name: "全辖投诉数量控制",
          num1: 0.005,
          jindu: [100],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "blue",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1002,
          colorid: 1,
          name: "静安支行",
          num1: 0.001,
          jindu: [50],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1003,
          name: "浦东支行",
          num1: 0.002,
          jindu: [60],
          colorid: 1,
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",

          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1004,
          colorid: 1,
          namecolor1: "红色",
          name: "上海火车支行",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1005,
          name: "虹桥支行",
          num1: 0.001,
          jindu: [60],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1006,
          name: "迪士尼支行",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1007,
          name: "市府支行",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1008,
          name: "西藏路支行",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "titleNum",
          icon: "el-icon-warning",
        },
        {
          id: 1009,
          name: "北京路支行",
          num1: 0.002,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1010,
          name: "解放路支行",
          num1: 0.001,
          jindu: [30],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1, //改变颜色的id
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
      ],
      info1: [
        {
          id: 1001,
          colorid: 0,
          name: "全辖投诉数量控制",
          num1: 0.005,
          jindu: [100],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "blue",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1002,
          colorid: 1,
          name: "零售银行部",
          num1: 0.001,
          jindu: [50],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1003,
          name: "个人信贷部",
          num1: 0.002,
          jindu: [60],
          colorid: 1,
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",

          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1004,
          colorid: 1,
          namecolor1: "红色",
          name: "数字金融部",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1005,
          name: "电子渠道部",
          num1: 0.001,
          jindu: [60],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1006,
          name: "运营部",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1007,
          name: "普惠金融",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1008,
          name: "小企业金融",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "titleNum",
          icon: "el-icon-warning",
        },
        {
          id: 1009,
          name: "交易银行部",
          num1: 0.002,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1010,
          name: "公司银行部",
          num1: 0.001,
          jindu: [30],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1, //改变颜色的id
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
      ],
    };
  },
  components: {
    CircleProgressBar,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url("../../../assets/less/losspressure.less");
</style>