<template>
  <div>
    <div class="bus-bread">查询</div>
    <div class="bus-bread1">待处理工单</div>
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
    <div class="searchTable">
      <div class="table-wrapper">
        <el-row>
          <el-table
            class="customer-table"
            :data="tableData"
            stripe
            style="width: 100%"
          >
            <el-table-column
              header-align="center"
              align="center"
              width="30"
              type="expand"
            >
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="详情">
                  <span>{{ props.row.detail }}</span>
                </el-form-item>
              </el-form>
            </template>
            </el-table-column>
            <el-table-column
              prop="date"
              label="时间"
              header-align="center"
              align="center"
              width="150"
            >
            </el-table-column>
            <el-table-column
              prop="bank"
              header-align="center"
              align="center"
              label="涉事分行"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              align="center"
              header-align="center"
              label="涉事网点"
              style="white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all"
            >
            </el-table-column>
            <el-table-column
              prop="remark"
              header-align="center"
              align="center"
              label="事件记录"
              width="220"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              header-align="center"
              align="center"
              label="投诉人"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="identify"
              header-align="center"
              align="center"
              label="投诉人身份"
            >
            </el-table-column>
          </el-table>
        </el-row>
      </div>
      <div class="searchPage">
        <el-row>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
            >
            </el-pagination>
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
        backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      },
      tableData: [
        {
          date: "2016-05-02",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1518 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "邓伦",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-04",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1517 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "邓伦",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-01",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1519 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "王一博",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-03",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1516 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "王一博",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-04",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1517 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "邓伦",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-01",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1519 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "王一博",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-03",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1516 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "王一博",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-04",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1517 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "邓伦",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-01",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1519 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "王一博",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
        {
          date: "2016-05-03",
          bank: "北京分行",
          address: "上海市普陀区金沙江路 1516 弄",
          remark: "xxxxxxxxxxxxxxx",
          identify: "xxxxxxxxx",
          name: "王一博",
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        },
      ],
      currentPage1: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang='less' scoped>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
input::-webkit-input-placeholder {
  color: #59dfff;
}
// .iconSearch {
//     font-size: 17px;
//     position: relative;
//     left: 0;
//     top: 2px;
//     font-weight: 700;
//     color: #59dfff;
// }
.searchTable {
  width: 98%;
  // height: 510px;
  /* background: #ccc; */
  margin-top: 20px;
  padding: 1%;
  background: url("../../../assets/images/commonTitle/searchbg.png");
  background-size: 100% 100%;
}
.searchPage {
  width: 100%;
  text-align: right;
}

.bus-bread1 {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  top: -20px;
  left: 4.5%;

  &:after {
    position: absolute;
    content: "";
    left: 7.8%;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
}
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
    left: 4.2%;
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
/deep/ .el-table,
/deep/ .el-table__expanded-cell{
  background: transparent;
}
/deep/.table-wrapper .el-table--enable-row-hover .el-table__body tr:hover > td {
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
/deep/.el-table th.is-leaf{
  border: none;
}
/deep/.el-table--border::after,
/deep/.el-table--group::after {
  width: 0;
}
/deep/.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #182a56;
}
/deep/.el-pager li.btn-quicknext,
/deep/.el-pager li.btn-quickprev {
  color: #ebebed;
}

.customer-table .el-table__fixed-right::before,
.el-table__fixed::before, .customer-table::before {
  width: 0;
}
/deep/.el-pager li.active {
  color: #409eff;
  cursor: default;
}
/deep/.el-table .cell {
  line-height: 16px;
}
/deep/.el-table__row td div{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
/deep/.el-form-item__label{
  color: #fff;
}
/deep/.el-table__expanded-cell[class*=cell]{
  padding: 0 50px;
}
</style>