<template>
  <div>
    <!-- 头部 -->
    <div class="bus-bread">查询</div>
    <div class="aborder" :style="info.setBackgroundBg">
      <span>工单查询</span>
      <input
        type="text"
        class="input-border"
        placeholder="输入关键词查询"
        :style="info.setBackgroundBg"
      />
      <i class="el-icon-search iconSearch"></i>
    </div>
    <!-- 中间信息 -->
    <el-row type="flex" class="row-bg1" justify="space-between">
      <el-col :span="6" v-for="(item, index) in topSearch" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="col-top" :style="info.setBackgroundBg1">
          <div class="img">
            <img :src="item.topImages" alt="" />
            <!-- <div class="div-img" :style="info.setBackgroundBg2"></div> -->
          </div>
          <div class="titleDesc">
            <div class="numDesc">
              <div class="desc1">
                <span class="desc1-num">{{ item.topTitle }}</span>
                <span class="desc1-bi">{{ item.topTilteDescribe }}</span>
              </div>
              <div class="desc2">{{ item.topWrithDesc }}</div>
            </div>
          </div>
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
        </div>
        <div class="col-down" :style="info.setBackgroundBg1">
          <div class="left">
            <div class="desc1">
              <span class="desc1-num">{{ item.downTitle1 }}</span>
              <span class="desc1-bi">{{ item.topTilteDescribe }}</span>
              <div class="left-icon"><i :class="item.icon"></i></div>
            </div>
            <div class="desc2">{{ item.downTitle1DEsc }}</div>
          </div>
          <div class="left-dingwei" :style="info.setBackgroundBg2"></div>
          <div class="right">
            <div class="desc1">
              <span class="desc1-num">{{ item.downTitle2 }}</span>
              <span class="desc1-bi">{{ item.topTilteDescribe }}</span>
              <div class="left-icon"><i :class="item.icon"></i></div>
            </div>
            <div class="desc2">{{ item.downTitle1DEsc }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 底部echars -->

    <el-row class="row-echarts">
      <el-col :span="11" :style="info.setBackgroundBg3">
        <div class="echarstitle">
          <div class="title">已结案投诉客户评价</div>
          <div class="titleImage"><img src="../../../assets/images/searchList/pingfeng.png" alt="">
          <div class="titleImage-span">{{echartsAvg(this.echarsAvg)}}</div></div>
        </div>
        <div class="echartsDesc"></div>
      </el-col>
      <el-col :span="11" :style="info.setBackgroundBg3">
         <div class="echarstitle">
          <div class="title">已结案工单</div>
          <div class="titleImage"><img src="../../../assets/images/searchList/wanjiegongdan.png" alt="">
          <div class="titleImage-span">{{echartsSum(this.echarsSum)}}</div></div>
        </div>
        <div class="echartsDesc"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import search from "../../../assets/images/searchList/search.png";
import search1 from "../../../assets/images/searchList/search1.png";
import search2 from "../../../assets/images/searchList/search2.png";
export default {
  data() {
    return {
      echarsAvg:[56,76,98,99,98,100],
      echarsSum:[12,13,16,21,18,14],
      info: {
        setBackgroundBg: {
          //上方搜索
          backgroundImage:
            "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        setBackgroundBg1: {
          //中间背景图
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/topListdesc.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        // 线
        setBackgroundBg2: {
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/xian.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          //   backgroundPosition:"2% 0",
        },
        // 下方背景图
        setBackgroundBg3: {
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/topList1.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          //   backgroundPosition:"2% 0",
        },
      },
      topSearch: [
        {
          title: "待处理订单",
          topImages: search,
          topTitle: "29",
          topTilteDescribe: "笔",
          topWrithDesc: "待处理工单",
          downTitle1: "12",
          downTitle1DEsc: "据结案时间12小时工单",
          downTitle2: "17",
          downTitle1DEsc: "据结案时间24小时工单",
          icon: "el-icon-arrow-right",
        },
        {
          title: "已处理订单",
          topImages: search2,
          topTitle: "15",
          topTilteDescribe: "笔",
          topWrithDesc: "本月以处理",
          downTitle1: "6",
          downTitle1DEsc: "流转工单",
          downTitle2: "9",
          downTitle1DEsc: "流转工单",
          icon: "el-icon-arrow-right",
        },
        {
          title: "督办查询",
          topImages: search1,
          topTitle: "27",
          topTilteDescribe: "笔",
          topWrithDesc: "监管督办",
          downTitle1: "14",
          downTitle1DEsc: "总行督办",
          downTitle2: "13",
          downTitle1DEsc: "本级督办",
          icon: "el-icon-arrow-right",
        },
      ],
    
    };
  },
  created(){
    // this.
  },
  methods:{
    echartsAvg(arr){
       let avg=0;
      //  var sun=0
      for(let i=0;i<arr.length;i++){
          avg+=arr[i]
      }
          // console.log(avg);
     return Math.ceil(avg/arr.length)
     
    } ,
    echartsSum(arr){
      let sum=0
      for(var i=0; i<arr.length;i++){
        sum+=arr[i]
      }
      return sum
    }
  },
  
};
</script>

<style lang="less" scoped>
// 顶部css
.bus-bread {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  margin-bottom: 1%;
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
    left: 4%;
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

// 中部css
.row-bg1 {
  height: 240px;
  margin-top: 1%;
  .el-col-6 {
    width: 32.8%;
    background-image: url(../../../assets/images/searchList/topList.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    .title {
      margin-left: 3%;
      margin-top: 2.5%;
      color: #55d4f8;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
    .col-top {
      width: 94%;
      margin: 2% auto;
      height: 37%;
      display: flex;
      .img {
        width: 40%;
        height: 100%;

        img {
          width: 52%;
          height: 82%;
          margin: 5% 29%;
        }
      }
      .titleDesc {
        width: 40%;
        height: 100%;
        text-align: center;
        .numDesc {
          width: 100%;
          height: 100%;
          .desc1 {
            width: 100%;
            height: 65%;
            text-align: center;
            line-height: 452%;
            .desc1-num {
              font-size: 250%;
              color: #55d4f8;
            }
            .desc1-bi {
              font-size: 130%;
              color: #55d4f8;
            }
          }
          .desc2 {
            width: 100%;
            height: 35%;
            text-align: center;
            color: #fff;
            font-size: 100%;
          }
        }
      }
      .icon {
        flex-grow: 1;
        font-size: 400%;
        text-align: center;
        line-height: 1.7;
        color: #55d4f8;
      }
    }
    .col-down {
      width: 94%;
      margin: 2% auto;
      height: 38%;
      display: flex;
      .left {
        width: 50%;
        height: 100%;
        .desc1 {
          width: 100%;
          height: 65%;
          text-align: center;
          line-height: 452%;
          position: relative;
          .desc1-num {
            font-size: 250%;
            color: #55d4f8;
          }
          .desc1-bi {
            font-size: 130%;
            color: #55d4f8;
          }
          .left-icon {
            font-size: 130%;
            position: absolute;
            bottom: -11px;
            right: 29px;
            color: #55d4f8;
          }
        }
        .desc2 {
          width: 100%;
          height: 35%;
          text-align: center;
          color: #fff;
          font-size: 80%;
        }
      }
      .left-dingwei {
        width: 1px;
        height: 100%;
      }
      .right {
        width: 50%;
        height: 100%;
        .desc1 {
          width: 100%;
          height: 65%;
          text-align: center;
          line-height: 452%;
          position: relative;
          .desc1-num {
            font-size: 250%;
            color: #55d4f8;
          }
          .desc1-bi {
            font-size: 130%;
            color: #55d4f8;
          }
          .left-icon {
            font-size: 130%;
            position: absolute;
            bottom: -16%;
            right: 16%;
            color: #55d4f8;
          }
        }
        .desc2 {
          width: 100%;
          height: 35%;
          text-align: center;
          color: #fff;
          font-size: 80%;
        }
      }
    }
  }
}

//底部echars css
.row-echarts {
  margin-top: 1%;
  height: 279px;
  // background: red;
  .el-col-11:nth-child(1) {
    width: 49.5%;
    height: 100%;
    position: relative;
    .echarstitle {
      width: 100%;
      
      .title {
        margin-left: 3%;
        margin-top: 2.5%;
        color: #55d4f8;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1.5px;
      }
      .titleImage{
        height:17%;
        width:17%; 
        position: absolute;
        top: 1%;
        right: 3%;
        img{
          height: 100%;
          width: 100%; 
        }
        .titleImage-span{
          position: absolute;
          top: 25%;
          right: 23%;;
          font-size: 130%;
          font-weight: 700;
          color: #55d4f8;
        }
      }
    }
    .echartsDesc{
      // margin-top: 2%;
      width: 579px;
      margin: 4% auto;
      height: 209px;
      background: red;
    }
  }

   .el-col-11:nth-child(2) {
    width: 49.5%;
    height: 100%;
    margin-left: 1%;
    position: relative;
    .echarstitle {
      width: 100%;
      
      .title {
        margin-left: 3%;
        margin-top: 2.5%;
        color: #55d4f8;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1.5px;
      }
      .titleImage{
        height:17%;
        width:17%; 
        position: absolute;
        top: 1%;
        right: 3%;
        img{
          height: 100%;
          width: 100%; 
        }
        .titleImage-span{
          position: absolute;
          top: 25%;
          right: 23%;;
          font-size: 130%;
          font-weight: 700;
          color: #55d4f8;
        }
      }
    }
    .echartsDesc{
      // margin-top: 2%;
      width: 96%;
      margin: 4% auto;
      height: 75%;
      background: red;
    }
  }
 
}
</style>