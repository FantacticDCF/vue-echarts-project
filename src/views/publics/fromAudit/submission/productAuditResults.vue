<template>
  <div>
    <fuzzyTable/>
    <el-row style="margin: 2px 0;cursor: pointer">
      <el-col :span="2"><div class="bus-bread" @click="gobackFir">消保审核</div></el-col>
      <el-col :span="2"><div class="bus-bread1" @click='goBackto'>报送</div></el-col>
      <el-col :span="2"><div class="bus-bread2">产品审核结果</div></el-col>
    </el-row>
    <div class="sgMatch-content" :style="setBackgroundBg1">
        <div class="searchTable">
            <el-row>
                <div class='textarea'>
                    <div class="textarea-content">
                        <div class='textarea-img'></div>
                        <div class="textarea-intro">{{producename}}产品已经通过审核</div>
                        <div class="textarea-upload">
                            <span class="textarea-title">产品备案</span>
                            <div class="uploadFile">
                                <img :style='setBackgroundBg' src="../../../../assets/images/businessUpload/file.png" />
                                <el-upload
                                    class="upload-demo"
                                    action="#"
                                    style="display: block"
                                    :on-change="handleChange"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary">上传附件</el-button>
                                </el-upload>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </el-row>
            <div class="sgMatch-footer">
                <span class="confirm-btn">确定</span>
                <span class="reset-btn">取消</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import fuzzyTable from '../../../../components/fuzzySearch.vue'
export default {
  data() {
    return {
      setBackgroundBg1: {
        backgroundImage: "url(" + require("../../../../assets/images/submission/sgbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        padding: '20px 28px 30px 30px',
        margin: '5px 0 0 0'
      },
      setBackgroundBg:{
          display: 'inline-block',
          width: '20px',
          height: '20px',
          margin: '5px 0 0 15px',
          float: 'left'
      },
      textarea2: '',
      fileList: [],
      producename: 'xxx'
    };
  },
  components: {
    fuzzyTable
  },
  mounted() {},
  methods: {
    handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
    },
    gobackFir(){
      this.$router.push({
        path: '/Home/fromAudit'
      })
    },
    goBackto(){
      this.$router.push({
        path: '/Home/submission'
      })
    },
  },
};
</script>
<style lang='less' scoped>
.el-col-2 {
  height: 30px;
  margin-bottom: 0.3%;
  .bus-bread {
    height: 30px;
    line-height: 40px;
    position: relative;
    text-indent: 16px;
    color: #176CA3;

    // margin-bottom: 1%;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 10px;
      border-bottom: 7px solid #176CA3;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 78%;
      top: 10px;
      border-bottom: 7px solid #176CA3;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .bus-bread1 {
    height: 30px;
    line-height: 40px;
    position: relative;
    // text-indent: 16px;
    color: #176CA3;
    &:after {
      position: absolute;
      content: "";
      left: 35%;
      top: 10px;
      border-bottom: 7px solid #176CA3;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .bus-bread2 {
    height: 30px;
    line-height: 40px;
    position: relative;
    // text-indent: 16px;
    color: #58dbff;
    margin-left: -42px;
    &:after {
      position: absolute;
      content: "";
      left: 64%;
      top: 10px;
      border-bottom: 7px solid #58dbff;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
}
.sgMatch-content-title{
  font-size: 18px;
  color: #25E2FF;
}
.searchTable {
  width: 98%;
  padding: 1%;
  position: relative;
  text-align: center;
}
.textarea{
    background: #11172F;
    height: 400px;
    color: #fff;
    margin-bottom: 20px;
}
.textarea-content{
    padding: 10%;
    text-align: center;
}
.textarea-img{
    width: 80px;
    height: 80px;
    background: #ccc;
    margin-left: 45%;
    margin-bottom: 20px;
}
.textarea-upload{
    width: 100%;
    align-items: center;
    margin-top: 20px;
}
.textarea-title{
    width: 47%;
    height: 30px;
    margin-right: 3%;
    float: left;
    text-align: right;
    line-height: 30px;
}
.sgMatch-footer{
  position: absolute;
  left: 50%; bottom: -28px;
  font-size: 20px;
  width: 48%;
  margin-left: -23%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  .confirm-btn{
    display: inline-block;
    color: #11071F;
    // margin-left: 15px;
  }
  .reset-btn{
    display: inline-block;
    color: #150315;
  }
}
.uploadFile{
    // background: #fff;
    float: left;
    width: 110px;
    height: 30px;
    margin-left: 5px;
    background-image: url('../../../../assets/images/commonTitle/importbg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;

}
/deep/.el-button--small, /deep/.el-button--small.is-round{
    border: none;
    background: transparent;
    float: left;
    padding-left: 10px;
}
/deep/.el-textarea__inner{
    border: none;
    background-color: #11172f;
    color: #fff;
    height: 400px;
}

</style>