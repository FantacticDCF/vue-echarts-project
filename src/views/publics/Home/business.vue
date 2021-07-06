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
        <div class="title">投诉管理目标分解表</div>
        <div class="desc">
          <div class="descTitle">
            <div>机构</div>
            <div>达标值</div>
            <div>已发生</div>
          </div>
        </div>
      </div>
      <div class="box1">
        <div class="title">监管投诉管理目标</div>
        <div class="desc">
          <div class="descTitle">
            <div>机构</div>
            <div>达标值</div>
            <div>已发生</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moduleName from '../../../assets/images/d6b5454bf1812dfb2692d8a62299809.png'
export default {
  data() {
    return {
      ruleForm: {
        name: "",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.info {
  width: 500px;
  height: 45px;
  border: 1px solid #4c8ed3;
  border-radius: 10px;
  // display: flex;
  .work {
    width: 100px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    color: #59dfff;
    display: inline-block;
    margin-left: 10px;
    font-weight: 700;
  }
  .inp {
    background-color: #131c36;
    width: 300px;
    height: 27px;
    text-align: left;
    line-height: 27px;
    color: #59dfff;
    display: inline-block;
    border: 1px solid #5097d3;
    margin-left: 10px;
    border-radius: 6px;
    background: linear-gradient(#ffff);
  }
  .iconSearch {
    font-size: 17px;
    position: relative;
    left: 9px;
    top: 2px;
    font-weight: 700;
  }
}
.formInfo {
  width: 100%;
  display: flex;
  margin-top: 20px;
  .box {
    flex-grow: 1;
    border: 1px solid black;
    width: 50%;
    // height: 430px;
    margin-right: 10px;
    background-image: url(../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png);
    // background-size:100% 100%;
    background-repeat: repeat;
    position: relative;
    .title {
      position: absolute;
      top: 16px;
      left: 17px;
      color: #55d4f8;
      font-size: 20px;
    }
    .desc {
       width: 100%;
       height: 30px;
       margin-top: 62px;
      .descTitle {
        display: flex;
        div{
          font-size: 12px;
          flex-grow: 1;
          text-align: center;
          line-height: 30px;
           color: #55d4f8;
        }
      }
    }
  }
  .box1 {
    flex-grow: 1;
    border: 1px solid black;
    width: 50%;
    height: 430px;
    background-image: url(../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png);
    // background-size:100% 100%;
    background-repeat: repeat;
    position: relative;
    .title {
      position: absolute;
      top: 16px;
      left: 17px;
      color: #55d4f8;
      font-size: 20px;
    }
    .desc {
       width: 100%;
       height: 30px;
       margin-top: 62px;
      .descTitle {
        display: flex;
        div{
          font-size: 12px;
          flex-grow: 1;
          text-align: center;
          line-height: 30px;
           color: #55d4f8;
        }
      }
    }
  }
}
</style>