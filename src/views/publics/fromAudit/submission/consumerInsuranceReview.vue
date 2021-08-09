<template>
    <div>
        <fuzzyTable :shows='shows'/>
        <el-row style="margin: 2px 0 0 0;cursor: pointer">
          <el-col :span="2"><div class="bus-bread" @click='goBacktoSec'>消保审核</div></el-col>
          <el-col :span="2"><div class="bus-bread1" @click='goBackto'>报送</div></el-col>
          <el-col :span="2"><div class="bus-bread2">产品审核结果</div></el-col>
          <el-col :span="2"><div class="bus-bread3">消保审核修正</div></el-col>
        </el-row>
        <div class="sgMatch-content" :style="setBackgroundBg1">
            <el-row>
                <span class="sgMatch-content-title">产品/业务办理流程</span>
                <div class="searchTable">
                    <TableCommon :tableData="tableData" :listLabel="listLabel" :detailFlag='detailFlag'/>
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
                    <div class="sgMatch-footer">
                      <span class="confirm-btn">确定</span>
                      <span class="reset-btn">取消</span>
                    </div>
                </div>
            </el-row>
        </div>
    </div>
</template>
<script>
import TableCommon from '../../../../components/tableCommon.vue';
import fuzzyTable from '../../../../components/fuzzySearch.vue'
export default {
  components:{
    TableCommon,
    fuzzyTable
  },
  data(){
    return {
      setBackgroundBg: {
        backgroundImage: "url(" + require("../../../../assets/images/big-border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      },
      setBackgroundBg1: {
        backgroundImage: "url(" + require("../../../../assets/images/submission/sgbg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        padding: '20px 28px 30px 30px',
      },
      detailFlag: false,
      listLabel: [
          {label: '客户流程', width: '200',prop: 'data'},
          {label: '行业流程',width: '160', prop: 'bank'},
          {label: '定岗定责', width: '250', prop: 'netaddress'},
          {label: '近五年投诉量',prop: 'remark'},
          {label: '修正项', width: '200',prop: 'person'},
      ],
      // 表格数据  (随意写的数据）
      tableData: [
          {
              data: '登录手机银行',
              bank: '手机银行注册',
              netaddress: '总行数字金融部',
              remark: '200',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '进入保险产品页面',
              bank: '在销售页面展示',
              netaddress: '总行数字金融部',
              remark: '150',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '预约客户经理',
              bank: '客户经理接待',
              netaddress: '私人银行部',
              remark: '120',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '选择保险销售地区',
              bank: '北京分行',
              netaddress: '私人银行部',
              remark: '80',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '登录手机银行',
              bank: '手机银行注册',
              netaddress: '总行数字金融部',
              remark: '200',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '进入保险产品页面',
              bank: '在售产品界面展示',
              netaddress: '总行数字金融部',
              remark: '150',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '预约客户经理',
              bank: '客户经理接待',
              netaddress: '私人银行部',
              remark: '120',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '登录手机银行',
              bank: '手机银行注册',
              netaddress: '总行数字金融部',
              remark: '200',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '进入保险产品页面',
              bank: '在售产业页面展示',
              netaddress: '总行数字金融部',
              remark: '150',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '预约客户经理',
              bank: '客户经理接待',
              netaddress: '私人银行部',
              remark: '120',
              person: '制定投诉预案',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
         
      ],
      currentPage1: 1,
      shows:''
    }
  },
  created(){
    this.shows = this.$route.params.shows
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    goBackto(){
      this.$router.push({
        path: '/Home/submission'
      })
    },
    goBacktoSec(){
      this.$router.push({
        path: '/Home/fromAudit'
      })
    }
  },
}
</script>
<style lang="less" scoped>
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
    color: #176CA3;
    margin-left: -42px;
    &:after {
      position: absolute;
      content: "";
      left: 64%;
      top: 10px;
      border-bottom: 7px solid #176CA3;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
  .bus-bread3 {
    height: 30px;
    line-height: 40px;
    position: relative;
    text-indent: 5px;
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
.aborder {
  text-indent: 30px;
  color: #1a83c0;
  margin-top: -25px;
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
.sgMatch-content-title{
  font-size: 18px;
  color: #25E2FF;
  z-index: 100;
}
.searchTable {
  width: 98%;
  padding: 1%;
  // background: url("../../../../assets/images/commonTitle/searchbg.png");
  background-size: 100% 100%;
  position: relative;
}
.searchPage {
  width: 100%;
  text-align: right;
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

/deep/.has-gutter{
  background: #193F80;
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
  line-height: 14px;
  font-size: 13px;
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