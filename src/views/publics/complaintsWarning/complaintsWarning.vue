<template>
  <div>
    <!-- 顶部搜索 -->
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
    <!-- <div class="bus-bread">查询</div> -->
    <el-row>
      <el-col :span="12"><div class="bus-bread">投诉预警</div></el-col>
      <el-col :span="12"> </el-col>
    </el-row>
    <!-- 下面数据 -->
    <div class="yujingInfo">
      <div class="Layout" :style="info.setBackgroundBg3">
        <div class="title">客群预警</div>
        <div class="LayoutTitle">
          <div class="ranking">排名</div>
          <div class="ranking property">客户资产</div>
          <div class="evaluate">客户评价</div>
        </div>

        <div
          class="LayoutTitle info"
          v-for="(item, index) in infoDesc"
          :key="index"
        >
          <div class="ranking1">{{ index + 1 }}</div>
          <div class="ranking1 property white">{{ item.scope }}</div>
          <div class="progress">
            <jindutiao
              :progress="item.jindu"
              :name="item.colorid < 1 ? item.namecolor : item.namecolor1"
            />
          </div>
          <div :class="item.colorid < 1 ? item.classname : item.classname1">
            <i :class="item.colorid < 1 ? '' : item.icon" class="icon"></i
            >{{ item.jindu[0] }}
          </div>
        </div>
      </div>
      <div class="Layout" :style="info.setBackgroundBg3">
        <div class="title">业务预警</div>
      </div>
      <div class="Layout" :style="info.setBackgroundBg3">
        <div class="title">岗位预警</div>
      </div>
      <div class="Layout" :style="info.setBackgroundBg3">
        <div class="title">事件预警</div>
      </div>
    </div>
  </div>
</template>
<script>
import jindutiao from "../components/jindutiao.vue";
export default {
  data() {
    return {
      // arr: [50],
      info: {
        setBackgroundBg: {
          //上方搜索
          backgroundImage:
            "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
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
      infoDesc: [
        {
          id: 1001,
          scope: "0-1万",
          jindu: [88],
          namecolor: "蓝色",
          //  namecolor1: "红色",
          classname: "progressDesc",
          classname1: "red",
          colorid: 0, //0 的时候时蓝色  1的时候时红色
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
         {
          id: 1002,
          scope: "1-50万",
          jindu: [80],
          namecolor: "蓝色",
          //  namecolor1: "红色",
          classname: "progressDesc",
          classname1: "red",
          colorid: 0, //0 的时候时蓝色  1的时候时红色
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
         {
          id: 1003,
          scope: "50-300万",
          jindu: [70],
          namecolor: "蓝色",
          //  namecolor1: "红色",
          classname: "progressDesc",
          classname1: "red",
          colorid: 0, //0 的时候时蓝色  1的时候时红色
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
         {
          id: 1004,
          scope: "300-500万",
          jindu: [68],
          namecolor: "蓝色",
          //  namecolor1: "红色",
          classname: "progressDesc",
          classname1: "red",
          colorid: 0, //0 的时候时蓝色  1的时候时红色
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
         {
          id: 1005,
          scope: "600万以上",
          jindu: [50],
          namecolor: "蓝色",
          //  namecolor1: "红色",
          classname: "progressDesc",
          classname1: "red",
          colorid: 1, //0 的时候时蓝色  1的时候时红色
          namecolor1: "红色",
          icon: "el-icon-warning",
        },
      ],
    };
  },
  components: {
    // EventWarning:eventWarning
    jindutiao,
  },
};
</script>
<style lang='less' scoped>
//顶部搜索
.el-col-12 {
  height: 30px;
  margin-bottom: 0.3%;
  .bus-bread {
    height: 30px;
    line-height: 40px;
    position: relative;
    text-indent: 16px;
    color: #58dbff;

    // margin-bottom: 1%;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 10px;
      border-bottom: 7px solid #1a83c0;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 12%;
      top: 10px;
      border-bottom: 7px solid #58dbff;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
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
//底部数据
.yujingInfo {
  // height: ;
  width: 100%;
  height: 540px;
  display: flex;
  flex-wrap: wrap; //允许换行排列
  justify-content: space-between;
  flex-direction: column;
  margin-top: 0.1%;
  .Layout:nth-child(1) {
    height: 49%;
    width: 49%;
    .title {
      margin-left: 3%;
      margin-top: 2%;
      color: #55d4f8;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
    .LayoutTitle {
      display: flex;
      .ranking {
        height: 20px;
        width: 20%;
        text-align: center;
        color: #55d4f8;
      }
      .property {
        text-align: left;
      }
      .evaluate {
        flex-grow: 1;
        text-align: center;
        color: #55d4f8;
      }
    }
    .ranking1 {
      width: 20%;
      height: 40px;
      text-align: center;
      color: #55d4f8;
      line-height: 40px;
    }
    .info {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .white {
      color: #ffff !important;
      font-size: 12px;
      // text-align: center !important;
    }
    .red {
      flex-grow: 1;
     text-indent: 8px;
      color: #f16a6a;
      font-size: 12px;
      .icon {
        margin-right: 5px;
      }
      // text-align: center !important;
    }
    .progress {
      height: 40px;
      width: 250px;
      padding-top: 12px;
      /deep/ .main {
        height: 15px;
        width: 250px !important;
        /* margin-left: 10px; */
      }
    }
    .progressDesc {
      flex-grow: 1;
      text-indent: 16px;
      color: #55d4f8;
      font-size: 12px;
    }
  }
  .Layout:nth-child(2) {
    height: 49%;
    width: 49%;
    .title {
      margin-left: 3%;
      margin-top: 2%;
      color: #55d4f8;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
  }
  .Layout:nth-child(3) {
    height: 49%;
    width: 49%;
    .title {
      margin-left: 3%;
      margin-top: 2%;
      color: #55d4f8;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
  }
  .Layout:nth-child(4) {
    height: 49%;
    width: 49%;
    .title {
      margin-left: 3%;
      margin-top: 2%;
      color: #55d4f8;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
  }
}
</style>