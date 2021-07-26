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
          <div class='title'>待处理工单</div>
          <div class="col-top"></div>
          <div class="col-down"></div>
      </el-col>
      <el-col :span="6">
          <div class='title'>以处理订单</div>
          <div class="col-top"></div>
          <div class="col-down"></div>
      </el-col>
      <el-col :span="6">
          <div class='title'>督办查询</div>
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
          backgroundImage:
            "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        // setBackgroundBg1: {
        //   backgroundImage:
        //     "url(" +
        //     require("../../../assets/images/commonTitle/searchbg.png") +
        //     ")",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "100% 100%",
        //   backgroundPosition: "center",
        // },
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
  // background: red;
  margin-top: 1.5%;
  .el-col-6 {
    width: 32.8%;
    background: blue;
    // background-image: url("../../../assets/images/businessborder.png");
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    // background-position: center;
    .title{
     margin-left: 3%;
      margin-top: 1.8%;
      color: #55d4f8;
      font-size: 14px;
    }
    .col-top{
        // margin-top: 10%;
        width: 94%;
        margin: 2% auto;
        height: 40%;
        background-color: red;
    }
    .col-down{
        width: 94%;
        margin: 2% auto;
        height: 40%;
        background-color: red;
    }
  }
}
</style>