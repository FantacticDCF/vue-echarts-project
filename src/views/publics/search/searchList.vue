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
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="title">待处理工单</div>
        <div class="col-top" :style="info.setBackgroundBg1">
          <div class="img">
            <img src="../../../assets/images/searchList/search.png" alt="" />
            <!-- <div class="div-img" :style="info.setBackgroundBg2"></div> -->
          </div>
          <div class="titleDesc">
            <div class="numDesc">
              <div class="desc1">
                <span class="desc1-num">29</span>
                <span class="desc1-bi">笔</span>
              </div>
              <div class="desc2">待处理工单</div>
            </div>
          </div>
          <div class="icon">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div class="col-down" :style="info.setBackgroundBg1">
          <div class="left">
            <!-- <div> -->
            <div class="desc1">
              <span class="desc1-num">29</span>
              <span class="desc1-bi">笔</span>
              <div class="left-icon"><i class="el-icon-arrow-right"></i></div>
            </div>
            <div class="desc2">据结案时间12小时内工单</div>
          </div>

          <!-- </div> -->
          <div class="left-dingwei" :style="info.setBackgroundBg2"></div>
          <div class="right">
            <!-- <div>
              <div class="desc1">
                <span class="desc1-num">29</span>
                <span class="desc1-bi">笔</span>
              </div>
              <div class="desc2">待处理工单</div>
            </div>
            <div class="left-icon"><i class="el-icon-arrow-right"></i></div> -->
            <div class="desc1">
              <span class="desc1-num">29</span>
              <span class="desc1-bi">笔</span>
              <div class="left-icon"><i class="el-icon-arrow-right"></i></div>
            </div>
            <div class="desc2">据结案时间12小时内工单</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="title">以处理订单</div>
        <div class="col-top"></div>
        <div class="col-down"></div>
      </el-col>
      <el-col :span="6">
        <div class="title">督办查询</div>
        <div class="col-top"></div>
        <div class="col-down"></div>
      </el-col>
    </el-row>
    <!-- 底部echars -->
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        setBackgroundBg2: {
          backgroundImage:
            "url(" +
            require("../../../assets/images/searchList/xian.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          //   backgroundPosition:"2% 0",
        },
      },
    };
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
    left: 3.85%;
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
.row-bg {
  height: 240px;
  margin-top: 1.5%;
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
          width: 66%;
          height: 74%;
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
</style>