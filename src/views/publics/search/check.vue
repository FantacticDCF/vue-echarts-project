<template>
  <div class="check">
    <el-row>
      <el-col :span="7">
        <div class="yearGoals">
          <h2 class="title" >年度目标完成情况</h2>
          <div class="bar"></div>
        </div>
      </el-col>
    </el-row>
   
  </div>
</template>

<script>
export default {
  name: "check"
}
</script>

<style scoped>

  .check {
    position: relative;
    background: rgba(255, 255, 255, 0.04) url(../../../assets/images/line.png) no-repeat;
    padding: 20px 25px;
    background-size: 100% 100%;
    margin-top: 20px;
  }
  .check h2 {
    height: 22px;
    margin-top: -8px;
    line-height: 23px;
    text-align: left;
    display: block;
    max-width: 195px;
    color: #02d1f4;
    background: url(../../../assets/images/title_bg.png) no-repeat;
    background-size:100% 100%;
    font-size: 12px;
    font-weight: 400;
    padding: 0 8px;
  
  }


</style>