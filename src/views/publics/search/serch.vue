<template>
  <div>
    <div class="info">
      <span class="work">工单查询</span>
      <input type="text" class="inp" placeholder="输入关键词查询" />
      <i class="el-icon-search iconSearch"></i>
    </div>
    <div class="searchTable">
        <div class="table-wrapper">
            <el-table
                class="customer-table"
                :data="tableData"
                stripe
                style="width: 100%;">
                <el-table-column
                    prop="date"
                    label="时间"
                    header-align='center'
                    align="center"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="bank"
                    header-align='center'
                    align="center"
                    label="涉事分行"
                    width="160">
                </el-table-column>
                <el-table-column
                    prop="address"
                    align="center"
                    header-align='center'
                    label="涉事网点">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    header-align='center'
                    align="center"
                    label="事件记录"
                    width="220">
                </el-table-column>
                <el-table-column
                    prop="name"
                    header-align='center'
                    align="center"
                    label="投诉人"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="identify"
                    header-align='center'
                    align="center"
                    label="投诉人身份">
                </el-table-column>
            </el-table>
        </div>
        <div class="searchPage">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tableData: [{
            date: '2016-05-02',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1518 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '邓伦'
        }, {
            date: '2016-05-04',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1517 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '邓伦'
        }, {
            date: '2016-05-01',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1519 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '王一博'
        }, {
            date: '2016-05-03',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1516 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '王一博'
        }, {
            date: '2016-05-04',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1517 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '邓伦'
        }, {
            date: '2016-05-01',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1519 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '王一博'
        }, {
            date: '2016-05-03',
            bank: '北京分行',
            address: '上海市普陀区金沙江路 1516 弄',
            remark: 'xxxxxxxxxxxxxxx',
            identify: 'xxxxxxxxx',
            name: '王一博'
        }],
        currentPage1: 1,
    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>
<style lang='less' scoped>
.info {
    width: 480px;
    height: 45px;
    border: 1px solid #4c8ed3;
    border-radius: 10px;
}
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
    text-indent: 8px;
    line-height: 27px;
    display: inline-block;
    border: 1px solid #5097d3;
    margin-left: 10px;
    border-radius: 6px;
    background: linear-gradient(#ffff);
    outline: none;
    color: #59dfff;
}
input::-webkit-input-placeholder {
    color: #59dfff;
}
.iconSearch {
    font-size: 17px;
    position: relative;
    left: 20px;
    top: 2px;
    font-weight: 700;
    color: #59dfff;
}
.searchTable{
    width: 98%;
    /* height: 300px; */
    /* background: #ccc; */
    margin-top: 10px;
    padding: 1%;
    background: url('../../../assets/images/commonTitle/searchbg.png');
    background-size: 100% 100%;
}
.searchPage{
    width: 100%;
    text-align: right;
}
/deep/ .el-table{
    background:  transparent;
}
/deep/ .el-table tr{
     background:  transparent;
     color: #ebebed;
}
/deep/ .has-gutter tr th{
    background:  transparent;
    color: #ebebed;   
}
 /deep/.table-wrapper .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color:  #29597c;
}
/deep/.el-pagination__total{
    color: #ebebed;
}
/deep/.el-pager .number,/deep/.el-icon {
    background: transparent;
    color: #ebebed;
}
/deep/.el-pagination .btn-next,/deep/ .el-pagination .btn-prev{
    background: transparent;
    color: #ebebed;
}
/deep/th, /deep/td{
    border: none;
}
/deep/.el-table td, /deep/.el-table th.is-leaf{
    border: none;
}
/deep/.el-table--border::after, /deep/.el-table--group::after{
  width: 0;
}
/deep/.el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #182a56;
  }
/deep/.el-pager li.btn-quicknext, /deep/.el-pager li.btn-quickprev{
    color: #ebebed;
}
.customer-table::before{
  width: 0;
}
.customer-table .el-table__fixed-right::before,.el-table__fixed::before{
  width: 0;
}
/deep/.el-pager li.active {
    color: #409EFF;
    cursor: default;
}
</style>