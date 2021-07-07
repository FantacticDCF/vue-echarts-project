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

        <div class="title">投诉管理目标分解表</div>
        <div class="desc">
          <div class="descTitle">
            <div>机构</div>
            <div>达标值</div>
            <div>已发生</div>
          </div>
          <div class="descTitle1" v-for="(item, index) in info" :key="index">
            <div :class="item.classname">{{ item.name }}</div>
            <div class="jindu">
              <Jindutiao
                :progress="item.jindu"
                :name="item.namecolor"
                class="jindutiao"
              ></Jindutiao>
              <div class="num">{{ item.num1 }}</div>
            </div>
            <div class="jindu">
              <Jindutiao
                :progress="item.jindu"
                :name="item.colorid < 1 ? item.namecolor : item.namecolor1"
                class="jindutiao"
              ></Jindutiao>
              <!-- <div class="num">{{ item.num2 }}</div> -->
              <div
                :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
              >
                <i :class="item.colorid < 1 ? '' : item.icon"></i>
                {{ item.num2 }}
              </div>
            </div>
          </div>

          <div class="descTitle"></div>
        </div>
      </div>
      <div class="box1">
        <img
          src="../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png"
          alt=""
          class="image"
        />
        <div class="title">监管投诉管理目标</div>
        <div class="desc">
          <div class="descTitle">
            <div>机构</div>
            <div>达标值</div>
            <div>已发生</div>
          </div>
          <div class="descTitle1" v-for="(item, index) in info1" :key="index">
            <div :class="item.classname">{{ item.name }}</div>
            <div class="jindu">
              <Jindutiao
                :progress="item.jindu"
                :name="item.namecolor"
                class="jindutiao"
              ></Jindutiao>
              <div class="num">{{ item.num1 }}</div>
            </div>
            <div class="jindu">
              <Jindutiao
                :progress="item.jindu"
                :name="item.colorid < 1 ? item.namecolor : item.namecolor1"
                class="jindutiao"
              ></Jindutiao>
              <div
                :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
              >
                <i :class="item.colorid < 1 ? '' : item.icon"></i>
                {{ item.num2 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jindutiao from "../components/jindutiao.vue";
export default {
  data() {
    return {
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
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url("../../../assets/less/business.less");
// .info {
//   width: 500px;
//   height: 45px;
//   border: 1px solid #4c8ed3;
//   border-radius: 10px;
//   .work {
//     width: 100px;
//     height: 45px;
//     text-align: center;
//     line-height: 45px;
//     color: #59dfff;
//     display: inline-block;
//     margin-left: 10px;
//     font-weight: 700;
//   }
//   .inp {
//     background-color: #131c36;
//     width: 300px;
//     height: 27px;
//     text-align: left;
//     text-indent: 8px;
//     line-height: 27px;
//     display: inline-block;
//     border: 1px solid #5097d3;
//     margin-left: 10px;
//     border-radius: 6px;
//     background: linear-gradient(#ffff);
//   }
//   input::-webkit-input-placeholder {
//     color: #59dfff;
//   }
//   .iconSearch {
//     font-size: 17px;
//     position: relative;
//     left: 9px;
//     top: 2px;
//     font-weight: 700;
//     color: #59dfff;
//   }
// }
// .formInfo {
//   width: 100%;
//   display: flex;
//   margin-top: 20px;
//   overflow: hidden;
//   .box {
//     flex-grow: 1;

//     width: 50%;
//     height: 460px;

//     overflow: hidden;
//     margin-right: 10px;

//     position: relative;
//     .image {
//       height: 100%;
//       width: 100%;
//       opacity: 0.5;
//       position: absolute;
//     }
//     .title {
//       position: absolute;
//       top: 7px;
//       left: 17px;
//       color: #55d4f8;
//       font-size: 14px;
//     }
//     .desc {
//       width: 100%;
//       height: 30px;
//       margin-top: 33px;
//       .descTitle {
//         display: flex;
//         div {
//           font-size: 12px;
//           flex-grow: 1;
//           text-align: center;
//           line-height: 30px;
//           color: #55d4f8;
//         }
//       }
//       .descTitle1 {
//         width: 100%;
//         height: 30px;
//         // margin-top: 62px;
//         display: flex;
//         margin-top: 3.5px;
//         .blue {
//           font-size: 12px;
//           // flex-grow: 1;
//           height: 30px;
//           width: 100px;
//           text-align: center;
//           line-height: 30px;
//           color: #55d4f8;
//           margin-left: 10px;
//         }
//         .write {
//           font-size: 12px;
//           // flex-grow: 1;
//           height: 30px;
//           width: 100px;
//           text-align: center;
//           line-height: 30px;
//           color: #fff;
//           margin-left: 10px;
//         }
//         .jindu {
//           flex-grow: 1;
//           margin-top: 7.5px;
//           position: relative;
//           .num {
//             position: absolute;
//             top: -2px;
//             right: 27px;
//             color: #55d4f8;
//             font-size: 12px;
//           }
//           .numRed {
//             position: absolute;
//             top: -2px;
//             right: 19px;
//             color: rgba(251, 84, 62, 1);
//             // 字体渐变
//             background-image: -webkit-linear-gradient(
//               bottom,
//               rgba(251, 84, 62, 1),
//               rgba(245, 134, 89, 1)
//             );
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             font-size: 12px;
//           }
//         }
//       }
//     }
//   }
//   .box1 {
//     flex-grow: 1;

//     width: 50%;
//     height: 460px;
//     position: relative;
//     overflow: hidden;
//     margin-right: 10px;

//     .image {
//       height: 100%;
//       width: 100%;
//       opacity: 0.5;
//       position: absolute;
//     }
//     .title {
//       position: absolute;
//       top: 7px;
//       left: 17px;
//       color: #55d4f8;
//       font-size: 14px;
//     }
//     .desc {
//       width: 100%;
//       height: 30px;
//       margin-top: 62px;
//       .descTitle {
//         display: flex;
//         div {
//           font-size: 12px;
//           flex-grow: 1;
//           text-align: center;
//           line-height: 30px;
//           color: #55d4f8;
//         }
//       }
//       .descTitle1 {
//         width: 100%;
//         height: 30px;
//         // margin-top: 62px;
//         display: flex;
//         margin-top: 3.5px;
//         .blue {
//           font-size: 12px;
//           // flex-grow: 1;
//           height: 30px;
//           width: 100px;
//           text-align: center;
//           line-height: 30px;
//           color: #55d4f8;
//           margin-left: 10px;
//         }
//         .write {
//           font-size: 12px;
//           // flex-grow: 1;
//           height: 30px;
//           width: 100px;
//           text-align: center;
//           line-height: 30px;
//           color: #fff;
//           margin-left: 10px;
//         }
//         .jindu {
//           flex-grow: 1;
//           margin-top: 7.5px;
//           position: relative;
//           .num {
//             position: absolute;
//             top: -2px;
//             right: 27px;
//             color: #55d4f8;
//             font-size: 12px;
//           }
//           .numRed {
//             position: absolute;
//             top: -2px;
//             right: 27px;
//             color: rgba(251, 84, 62, 1);
//             // 字体渐变
//             background-image: -webkit-linear-gradient(
//               bottom,
//               rgba(251, 84, 62, 1),
//               rgba(245, 134, 89, 1)
//             );
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             font-size: 12px;
//           }
//         }
//       }
//     }
//   }
// }
</style>