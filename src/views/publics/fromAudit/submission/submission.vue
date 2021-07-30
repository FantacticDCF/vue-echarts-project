<template>
   <div class="submission">
      <div class="bus-bread">
        <span class="empty-box"></span>
        <span class="first-content color-black" @click="goBack" >&nbsp;消保审核&nbsp;&nbsp;</span>
        <span class="second-content">&nbsp;报送&nbsp;</span>
      </div>
  
		<div class="aborder" :style="setBackgroundBg">
			<span>投诉案例查询</span>
			<input type="text" class="input-border"  placeholder="输入关键词查询" :style="setBackgroundBg"/>
			<i class="el-icon-search iconSearch"></i>
		</div>
    <div class="contain">
      <div class="box">
        <el-row class="margin">
          <el-col :span="8">
            <div class="item icon-1" :class="fininshed[0]?'active':'deflt'">
<!--              <img src="../../../../assets/images/submission/item1.png">-->
              <p>产品设计说明</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item icon-2" :class="fininshed[1]?'active':'deflt'">
<!--              <img src="../../../../assets/images/submission/item2.png">-->
              <p>投诉点匹配</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item icon-3" :class="fininshed[2]?'active':'deflt'">
<!--              <img src="../../../../assets/images/submission/item3.png">-->
              <p>产品审核结果</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="arrow">&nbsp; </el-col>
          <el-col :span="4" class="arrow"><img src="../../../../assets/images/submission/down.png"></el-col>
          <el-col :span="4" class="arrow"><img src="../../../../assets/images/submission/up.png"></el-col>
          <el-col :span="4" class="arrow"><img src="../../../../assets/images/submission/down.png"></el-col>
          <el-col :span="4" class="arrow"><img src="../../../../assets/images/submission/up.png"></el-col>
          <el-col :span="4" class="arrow">&nbsp; </el-col>
        </el-row>
        <el-row class="margin">
          <el-col :span="4" class="arrow">&nbsp; </el-col>
          <el-col :span="8">
            <div class="item2 icon-4" :class="fininshed[3]?'active':'deflt'" @click="jumpdirect">
<!--              <img src="../../../../assets/images/submission/item4.png">-->
              <p>手工标签匹配</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item2 icon-5" :class="fininshed[4]?'active':'deflt'">
<!--              <img src="../../../../assets/images/submission/item5.png">-->
              <p>产品修正/文件下载</p>
            </div>
          </el-col>

          <el-col :span="4" class="arrow">&nbsp; </el-col>
        </el-row>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      setBackgroundBg: {
				backgroundImage: "url(" + require("../../../../assets/images/big-border.png") + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
				backgroundPosition: "center"
			},
      fininshed: []

    };
  },
  methods: {
    goBack(){
      this.$router.push({
        path: '/Home/fromAudit'
      })
    },
    jumpdirect(){
      this.$router.push({
        path: '/Home/manualLabelMatching'
      })
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    let status = [1,0,0,0,0];//是否完成，显示高亮状态
    this.fininshed = status;
    // console.log(fininshed)
  },
};
</script>

<style lang="less" scoped>
  .bus-bread {
    /*position: relative;*/
    text-indent: 16px;
    color: #69a8e1;
    .empty-box {
      position: relative;
      &:before {
        position: absolute;
        content: "";
        right: 0;
        top: -6%;
        border-bottom: 7px solid #1A83C0;
        border-left: 9px solid transparent;
        border-top: 9px solid transparent;
        /*border-left和border-right换成透明色 不然是长方形*/
      }
    }
    .first-content {
      position: relative;
      display: inline-block;
      width: 88px;
      line-height: 14px;
      cursor: pointer;
      &:after {
        position: absolute;
        content: "";
        right: -3%;
        top: -6%;
        border-bottom: 7px solid #1A83C0;
        border-left: 9px solid transparent;
        border-top: 9px solid transparent;
        /*border-left和border-right换成透明色 不然是长方形*/
      }
    }
    .second-content {
      position: relative;
      display: inline-block;
      width: 60px;
      line-height: 14px;
      &:after {
        position: absolute;
        content: "";
        right: -5%;
        top: -6%;
        border-bottom: 7px solid #1A83C0;
        border-left: 9px solid transparent;
        border-top: 9px solid transparent;
        /*border-left和border-right换成透明色 不然是长方形*/
      }
    }
  }
  .aborder {
    text-indent: 30px;
    color: #1A83C0;
    margin-top: 10px;
    width: 55%;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
  }
  .input-border {
    margin-left: 30px;
    border: none;
    color: #1A83C0;
    width: 63%;
    height: 70%;
    text-indent: 15px;
    font-size: 10px;
  }
  input::-webkit-input-placeholder {
    color: #59dfff;
  }


  .submission .contain {
    height: calc(100vh - 162px);
    margin-top: 12px;
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/contain.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .item {
    text-align: center;
    width: 16vw;
    margin: 18px auto;
    padding: 22px 0;
    cursor: pointer;
  }
  .submission .item2 {
    text-align: center;
    width: 16vw;
    margin: 10px auto;
    padding: 22px 0;
    cursor: pointer;
  }
  .submission .icon-1 {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/item1.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-2 {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/item2.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-3 {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/item3.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-4 {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/item4.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-5 {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/item5.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-1.active {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/active1.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-2.active {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/active2.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-3.active {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/active3.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-4.active {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/active4.png) no-repeat;
    background-size: 100% 100%;
  }
  .submission .icon-5.active {
    background: rgba(255, 255, 255, 0.04) url(../../../../assets/images/submission/active5.png) no-repeat;
    background-size: 100% 100%;
  }
  .deflt {

  }
  .submission .item p, .submission .item2 p{
    color: #50b6fd;
    margin-top: 110px;
  }
  .submission .item img, .submission .item2 img{
    width: 60%;
  }
  .submission .arrow {
    text-align: center;
    display: list-item;
    color:transparent;

  }
  .submission .arrow img{
    width:20px;
  }
  .content {
    padding: 7px!important;
  }
  .submission .box{
    padding-top: calc((100vh - 620px)/2);
    height: 100%;
  }


</style>

