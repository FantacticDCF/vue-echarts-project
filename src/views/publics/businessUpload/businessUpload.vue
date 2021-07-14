<template style="overflow: hidden;">
  <div>
    <div class="bus-bread">投诉压降</div>
    <div class="bus-bread1">节点成果提交</div>
    <div class="aborder" :style="setBackgroundBg">
      <span>工单查询</span>
      <input
        type="text"
        class="input-border"
        placeholder="输入关键词查询"
        :style="setBackgroundBg"
      />
      <!-- <div class="iconSearch"> -->
      <i class="el-icon-search iconSearch"></i>
    </div>
    <div class="formInfo">
      <div class="box">
        <img
          src="../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png"
          alt=""
          class="image"
        />
        <div class="title">{{ titleName }}</div>
        <div class="content-box">
          <img src="../../../assets/images/businessUpload/content-box.png" alt="">
          <div class="content-box-title">投诉压降第一阶段工作情况汇报</div>
          <ol>
            <li v-for="(item, index) in list" :key="index" id="listLi" @click.stop="projectSelectFun($event, index)">
              <div>
                <img :src="item.imgsrc" alt="" class="imgsrc" @click.stop="changeImg(index)">
                <div>
                    <div>{{item.title}}</div>
                    <ul>
                        <li>{{item.warning}}</li>
                        <li>{{item.warning1}}</li>
                    </ul>
                </div>
              </div>
              <el-upload
                action="#"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="onchange"
                v-if="item.haveimg == 0"
              >
                <img :src="item.uploadimg" alt="" class="uplood-img">
              </el-upload>
              <div class="uploadSuceess" v-if="item.haveimg == 1">
                <i class="el-icon-circle-check" style="font-size: 40px; color: #55d4f8;font-weight: bold;"></i>
                <div>上传成功</div>
              </div>
              <div class="uploadError" v-if="item.haveimg == 2">
                <i class="el-icon-circle-close" style="font-size: 40px; color: #55d4f8;font-weight: bold;"></i>
                <div>上传失败</div>
              </div>
            </li>
          </ol>
          <div class="submit">确定/提交</div>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>您是否想要更改此图片</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="startChangeImage">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {uploadImg} from "@/axios/publics";
export default {
  data() {
    return {
      setBackgroundBg: {
        backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      },
      dialogVisible: false,
      index: '',
      list: [
        {
          imgsrc: require("../../../assets/images/businessUpload/image.png"),
          title: '成果图片上传',
          warning: '文件支持xx格式',
          warning1: '文件不超过2M',
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0
        },
        {
          imgsrc: require("../../../assets/images/businessUpload/file.png"),
          title: '成果文档上传',
          warning: '文件支持xx格式',
          warning1: '文件不超过2M',
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0
        },
        {
          imgsrc: require("../../../assets/images/businessUpload/veodio.png"),
          title: '成果视频上传',
          warning: '文件支持xx格式',
          warning1: '文件不超过2M',
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0
        },
        {
          imgsrc: require("../../../assets/images/businessUpload/other.png"),
          title: '成果相关其他文件上传',
          warning: '文件支持xx格式',
          warning1: '文件不超过2M',
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0
        }
      ],
      titleName: "投诉压降节点1 工作成果汇报"
    };
  },
  methods: {
    projectSelectFun (e) {
       let _dom = document.querySelector('.selected')
       if (_dom) {
         _dom.classList.toggle('selected') // 当class为project的元素上没有这个CSS类时，它就新增这个CSS类；如果class为project的元素有了这个CSS类，它就是删除它。就是反转操作。
       }
       e.target.classList.toggle('selected')
    },
    onchange (e) {
      const data = {
        file: e.raw
      }
      uploadImg(data).then(res => {
        this.list[0].imgsrc = res.info.data.url
        this.list[0].haveimg = 1
      })
    },
    changeImg (index) {
      this.index = index
      if(this.list[index].imgsrc !== require("../../../assets/images/businessUpload/image.png")) {
        this.dialogVisible = true
      } else {
        this.$message.error('您目前还没上传图片')
      }
    },
    startChangeImage () {
      this.list[this.index].imgsrc = require("../../../assets/images/businessUpload/image.png")
      this.list[this.index].haveimg = 0
      this.dialogVisible = false
    }
  }
};
</script>

<style lang='less' scoped>
@import url("../../../assets/less/businessUpload.less");
.bus-bread {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
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
    left: 6.6%;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
}
.bus-bread1 {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  top: -20px;
  left: 6.4%;

  &:after {
    position: absolute;
    content: "";
    left: 9%;
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
.uplood-img{
    width: 60%;
    height: 60%;
}
.selected{
  background: url(../../../assets/images/businessUpload/list-active.png) no-repeat !important;
  background-size: 100% 99.5% !important;
}
.uploadSuceess{
  width: 30%;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  &>div{
    color: #55d4f8;
    font-size: 12px;
  }
}
.uploadError{
  width: 30%;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  &>div{
    color: #55d4f8;
    font-size: 12px; 
  }
}
.el-icon-circle-check{
  margin-left: 20px;
}
.el-icon-circle-close{
  margin-left: 20px;
}
</style>