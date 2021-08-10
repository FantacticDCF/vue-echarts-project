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
    <!-- <fuzzySearch/> -->
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
          v-for="(item, index) in desc.infoDesc"
          :key="index"
        >
          <div class="ranking1">{{ index + 1 }}</div>
          <div class="ranking1 property white hidden">{{ item.scope }}</div>
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
        <div class="LayoutTitle">
          <div class="ranking">排名</div>
          <div class="ranking property">客户资产</div>
          <div class="evaluate">客户评价</div>
        </div>

        <div
          class="LayoutTitle info"
          v-for="(item, index) in desc.infoDesc1"
          :key="index"
        >
          <div class="ranking1">{{ index + 1 }}</div>
          <div class="ranking1 property white hidden">{{ item.scope }}</div>
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
        <div class="title">岗位预警</div>
        <div class="LayoutTitle">
          <div class="ranking">排名</div>
          <div class="ranking property">客户资产</div>
          <div class="evaluate">客户评价</div>
        </div>

        <div
          class="LayoutTitle info"
          v-for="(item, index) in desc.infoDesc2"
          :key="index"
        >
          <div class="ranking1">{{ index + 1 }}</div>
          <div class="ranking1 property white hidden">{{ item.scope }}</div>
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
        <div class="title">事件预警</div>
        <div class="tableDesc">
          <tableCommon
            :tableData="tableData"
            :listLabel="listLabel"
            :detailFlag="detailFlag"
            @click.native="goto"
          ></tableCommon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jindutiao from "../components/jindutiao.vue";
import tableCommon from "../../../components/tableCommon.vue";
// import fuzzySearch from '../../../components/fuzzySearch.vue'
export default {
  data() {
    return {
      listLabel: [
        { label: "时间", prop: "data" },
        { label: "涉事分行", prop: "bank" },
        { label: "涉事网点", prop: "netaddress" },
        { label: "事件记录", prop: "remark" },
        { label: "投诉人", prop: "person" },
        { label: "投诉人身份", prop: "identify" },
      ], //表头数据
      tableData: [
        {
          data: "2021.7.30",
          bank: "上海分行",
          netaddress: "虹口支行",
          remark: "xxxxxxxxxxxx",
          person: "z张三",
          identify: "xxxxxxxxxxxx",
        },
        {
          data: "2021.5.20",
          bank: "北京分行",
          netaddress: "天桥支行",
          remark: "xxxxxxxxxxxx",
          person: "z张三",
          identify: "xxxxxxxxxxxx",
        },

        {
          data: "2021.4.16",
          bank: "广州分行",
          netaddress: "花城支行",
          remark: "xxxxxxxxxxxx",
          person: "z张三",
          identify: "xxxxxxxxxxxx",
        },
        {
          data: "2021.3.23",
          bank: "深圳分行",
          netaddress: "景田支行",
          remark: "xxxxxxxxxxxx",
          person: "z张三",
          identify: "xxxxxxxxxxxx",
        },
        {
          data: "2021.2.23",
          bank: "深圳分行",
          netaddress: "景田支行",
          remark: "xxxxxxxxxxxx",
          person: "z张三",
          identify: "xxxxxxxxxxxx",
        },
      ], //表单数据
      detailFlag: false, //控制表单尖角号
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
      desc: {
        //三个进度条数据
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
            colorid: 1, //0 的时候时蓝色  1的时候时红色
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
            colorid: 0, //0 的时候时蓝色  1的时候时红色
            namecolor1: "红色",
            icon: "el-icon-warning",
          },
        ],
        infoDesc1: [
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
            colorid: 1, //0 的时候时蓝色  1的时候时红色
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
            colorid: 0, //0 的时候时蓝色  1的时候时红色
            namecolor1: "红色",
            icon: "el-icon-warning",
          },
        ],
        infoDesc2: [
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
            colorid: 1, //0 的时候时蓝色  1的时候时红色
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
            colorid: 0, //0 的时候时蓝色  1的时候时红色
            namecolor1: "红色",
            icon: "el-icon-warning",
          },
        ],
      },
    };
  },
  components: {
    jindutiao,
    tableCommon,
    // fuzzySearch
  },
  methods: {
    goto() {
      this.$router.push({ path: "/Home/eventWarning" });
    },
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
  .Layout:nth-child(1),
  .Layout:nth-child(2),
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
    .LayoutTitle {
      display: flex;
      margin-top: 10px;
      .ranking {
        text-indent: 15px;
        height: 20px;
        width: 18%;
        text-align: right;
        // padding-right: 9px;
        color: #55d4f8;
      }
      .property {
        text-align: right;
        width: 15% !important;
      }
      .evaluate {
        flex-grow: 1;
        text-align: left;
        color: #55d4f8;
        text-indent: 121px;
      }
    }
    .ranking1 {
      text-indent: 8px;
      width: 18%;
      height: 40px;
      // padding-right: 5px;
      text-align: right;
      color: #55d4f8;
      line-height: 40px;
      padding-right: 9px;
    }
    .info {
      width: 100%;
      height: 35px;
      line-height: 35px;
      margin-top: 3px;
    }
    .white {
      color: #ffff !important;
      font-size: 12px;
      // text-align: center !important;
    }
    .hidden {
      padding-right: 0;
    }
    .red {
      flex-grow: 1;
      text-indent: 16px;
      color: #f16a6a;
      font-size: 12px;
      position: relative;
      padding-top: 3px;

      .icon {
        position: absolute;
        top: 15px;
        left: -40px;
      }
    }
    .progress {
      height: 40px;
      width: 300px;
      padding-top: 12px;
      /deep/ .main {
        height: 15px;
        width: 300px !important;
        /* margin-left: 10px; */
      }
    }
    .progressDesc {
      flex-grow: 1;
      text-indent: 16px;
      color: #55d4f8;
      font-size: 12px;
      padding-top: 3px;
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
    .tableDesc {
      height: 80%;
      width: 90%;
      margin: 10px auto;
      /deep/ .el-table,
      /deep/ .el-table__expanded-cell {
        background: transparent;
      }
      /deep/.table-wrapper
        .el-table--enable-row-hover
        .el-table__body
        tr:hover
        > td {
        background-color: #29597c;
      }
      /deep/.el-pagination__total {
        color: #ebebed;
      }
      /deep/.el-pager .number,
      /deep/.el-icon,
      /deep/.el-pagination .btn-next,
      /deep/ .el-pagination .btn-prev,
      /deep/ .has-gutter tr th,
      /deep/ .el-table tr {
        background: transparent;
        color: #ebebed;
      }
      /deep/th,
      /deep/td,
      /deep/.el-table td,
      /deep/.el-table th.is-leaf {
        border: none;
      }
      /deep/.el-table td,
      .el-table th {
        padding: 9px 0 !important;
      }
      /deep/.el-table--border::after,
      /deep/.el-table--group::after {
        width: 0;
      }
      /deep/.el-table--striped .el-table__body tr.el-table__row--striped td {
        background: #182a56;
      }
      /deep/.el-table th>.cell{
            padding: 3px 0 !important;
      } 
      /deep/.el-pager li.btn-quicknext,
      /deep/.el-pager li.btn-quickprev {
        color: #ebebed;
      }
      /deep/.el-table thead {
        background-color: #193f80;
      }
      .customer-table .el-table__fixed-right::before,
      .el-table__fixed::before,
      .customer-table::before {
        width: 0;
      }
      /deep/.el-pager li.active {
        color: #409eff;
        cursor: default;
      }
      /deep/.el-table .cell {
        line-height: 16px;
      }
      /deep/.el-table__row td div {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
      /deep/.el-form-item__label {
        color: #fff;
      }
      /deep/.el-table__expanded-cell[class*="cell"] {
        padding: 0 50px;
      }
      //  background-color: red;
    }
  }
}
</style>