<template>
  <div id="divId" ref="divid">
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
    <el-row :style="{width: '100%', height: screenHeight + 'px'}">
      <el-col>
        <div class="title">投诉压降节点1 工作成果汇报</div>
        <el-row class="content" :style="{width: '100%', height: (screenHeight - 75) + 'px'}">
          <el-col :span="12">
            <div>投诉压降第一阶段工作情况汇报</div>
            <div
              class="show-img"
              :style="{width: '100%', height: (screenHeight - 225) + 'px'}"
            >
              <img v-for="(item, index) in imgss" :src="item" alt="" :key="index">
            </div>
          </el-col>
          <el-col :span="12">
            <ol>
              <li
                v-for="(item, index) in list"
                :key="index"
                id="listLi"
                @click.stop="projectSelectFun($event, index)"
              >
                <div>
                  <img
                    :src="item.imgsrc"
                    alt=""
                    class="imgsrc"
                  />
                  <div>
                    <div>{{ item.title }}</div>
                    <ul>
                      <li>{{ item.warning }}</li>
                      <li>{{ item.warning1 }}</li>
                    </ul>
                  </div>
                </div>
                <el-upload
                  action="#"
                  :auto-upload="false"
                  :show-file-list="false"
                  :on-change="onchange"
                  v-if="item.haveimg == 0"
                  :limit="item.limit"
                  multiple
                  :disabled="item.disabled"
                >
                  <img :src="item.uploadimg" alt="" class="uplood-img" />
                </el-upload>
                <div class="uploadSuceess" v-if="item.haveimg == 1">
                  <i
                    class="el-icon-circle-check"
                    style="font-size: 40px; color: #55d4f8; font-weight: bold"
                  ></i>
                  <div>上传成功</div>
                </div>
                <div class="uploadError" v-if="item.haveimg == 2">
                  <i
                    class="el-icon-circle-close"
                    style="font-size: 40px; color: #55d4f8; font-weight: bold"
                  ></i>
                  <div>上传失败</div>
                </div>
              </li>
            </ol>
          </el-col>
          <div class="submit">确定/提交</div>
        </el-row>
      </el-col>
    </el-row>
    <!-- <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>您是否想要更改此图片</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="startChangeImage">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import { uploadImg } from "@/axios/publics";
import { getheight } from '../../../plugin/getheight.js'
export default {
  data() {
    return {
      setBackgroundBg: {
        backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      },
      index: "",
      list: [
        {
          imgsrc: require("../../../assets/images/businessUpload/image.png"),
          title: "成果图片上传",
          warning: "文件支持xx格式",
          warning1: "文件不超过2M",
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0,
          contextfont: '成果图片上传',
          disabled: false,
          limit: 100
        },
        {
          imgsrc: require("../../../assets/images/businessUpload/file.png"),
          title: "成果文档上传",
          warning: "文件支持xx格式",
          warning1: "文件不超过2M",
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0,
          contextfont: '成果文档上传',
          disabled: false,
          limit: 100
        },
        {
          imgsrc: require("../../../assets/images/businessUpload/veodio.png"),
          title: "成果视频上传",
          warning: "文件支持xx格式",
          warning1: "文件不超过2M",
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0,
          contextfont: '成果视频上传',
          disabled: false,
          limit: 100
        },
        {
          imgsrc: require("../../../assets/images/businessUpload/other.png"),
          title: "成果相关其他文件上传",
          warning: "文件支持xx格式",
          warning1: "文件不超过2M",
          uploadimg: require("../../../assets/images/businessUpload/upload.png"),
          haveimg: 0,
          contextfont: '成果相关其他文件上传',
          disabled: false,
          limit: 100
        },
      ],
      imgss: [],
      contextfont: '文本内容',
      screenHeight: document.documentElement.clientHeight - 60 - 21 - 32 - 32 - 20 - 15,
      titleName: "投诉压降节点1 工作成果汇报",
    };
  },
  mounted () {
    let _this = this
    window.onresize = function () {
      _this.screenHeight = getheight('divId') - 60 - 21 - 32 - 32 - 20 - 15
    }
    console.log(this.$refs.divid.innerHTML)
  },
  methods: {
    projectSelectFun(e) {
      let _dom = document.querySelector(".selected")
      if (_dom) {
        _dom.classList.toggle("selected") // 当class为project的元素上没有这个CSS类时，它就新增这个CSS类；如果class为project的元素有了这个CSS类，它就是删除它。就是反转操作。
      }
      e.target.classList.toggle("selected")
    },
    onchange(e, file) {
      this.fileList = []
      file.map(item => {
        this.fileList.push(item.raw)
      })
      const data = {
        file: this.fileList,
      };
      uploadImg(data).then((res) => {
        for(let i = 0; i < this.fileList.length; i++) {
          this.imgss[i] = res.info.data.url
        }
        console.log(this.imgss)
        this.list[0].haveimg = 1;
      });
      if(file[0].name.split('.')[1] == 'zip') {
        this.list[3].disabled = false
        this.list[0].disabled = true
        this.list[1].disabled = true
        this.list[2].disabled = true
      }
      if(file[0].name.split('.')[1] == 'png') {
        this.list[0].disabled = false
        this.list[3].disabled = true
        this.list[1].disabled = true
        this.list[2].disabled = true
      }
    }
  }
}
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
.uplood-img {
  width: 60%;
  height: 60%;
}
.selected {
  background: url(../../../assets/images/businessUpload/list-active.png)
    no-repeat !important;
  background-size: 100% 99.5% !important;
}
.uploadSuceess {
  width: 30%;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  & > div {
    color: #55d4f8;
    font-size: 12px;
  }
}
.uploadError {
  width: 30%;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  & > div {
    color: #55d4f8;
    font-size: 12px;
  }
}
.el-icon-circle-check {
  margin-left: 20px;
}
.el-icon-circle-close {
  margin-left: 20px;
}
.el-row {
  padding: 10px 20px 25px;
  margin-top: 20px;
  background: url(../../../assets/images/businessUpload/bigBg.png) no-repeat;
  background-size: 100% 100%;
}
.content {
  width: 100%;
  height: 90%;
  background: url(../../../assets/images/businessUpload/bg.png) no-repeat;
  background-size: 100% 100%;
}
.title {
  color: #00cdff;
  font-size: 14px;
  font-weight: 500;
}
.el-col-12 {
  width: 45%;
  margin-left: 20px;
}
.el-col-12:nth-child(1) {
  width: 51%;
  margin-top: 20px;
  height: 90%;
  background: url(../../../assets/images/businessUpload/content-box.png)
    no-repeat;
  background-size: 100% 100%;
  & > div:nth-child(1) {
    width: 100%;
    text-align: center;
    color: #00cdff;
    font-size: 16px;
    font-weight: 500;
    padding-top: 20px;
  }
}
.el-col-12:nth-child(2) {
  padding-top: 20px;
  width: 44%;
  height: 90%;
}
ol {
  width: 100%;
  height: 105%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > li {
    list-style: none;
    width: 100%;
    padding: 5.5px 20px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(../../../assets/images/businessUpload/list-bg.png);
    background-size: 100% 99.5%;
    & > div {
      display: flex;
      align-items: center;
      & > .imgsrc {
        width: 20%;
      }
      & > div {
        margin-left: 20px;
        & > div {
          color: #00cdff;
          font-size: 16px;
          font-weight: 500;
        }
        & > ul {
          & > li {
            color: #3b6ca5;
          }
        }
      }
    }
  }
  & > li:nth-child(4) {
    & > div {
      & > .imgsrc {
        width: 18% !important;
      }
    }
  }
  & > li:active {
    background: url(../../../assets/images/businessUpload/list-active.png)
      no-repeat;
    background-size: 100% 99.5%;
  }
}
.submit {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 16px;
  padding-left: 5px;
  padding-top: 1.9%;
  color: #131B3D;
  font-weight: 500;
}
/deep/ .el-textarea__inner{
    background: #0E1E53 !important;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    position: relative;
}
.war{
  width: 48%;
  position: absolute;
  top: 48%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}
.show-img{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  &>img{
    width: 20%;
    height: 35%;
    margin-left: 22px;
  }
}
</style>