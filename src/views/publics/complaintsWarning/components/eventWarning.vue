<template>
  <div>
    <fuzzyTable/>
    <el-row style="margin: 2px 0;cursor: pointer">
      <el-col :span="2"><div class="bus-bread"  @click="goback">投诉预警</div></el-col>
      <el-col :span="2"><div class="bus-bread1" @click='goBackto'>事件预警</div></el-col>
    </el-row>
    <div class="searchTable">
      <tableCommon :tableData="tableData" :listLabel="listLabel" :detailFlag='detailFlag'/>
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
import tableCommon from '../../../../components/tableCommon.vue'
import fuzzyTable from '../../../../components/fuzzySearch.vue'
export default {
  components:{
    tableCommon,
    fuzzyTable
  },
  data() {
    return {
      detailFlag: true,
      listLabel: [
          {label: '时间', width: '150',prop: 'data'},
          {label: '涉事分行',width: '160', prop: 'bank'},
          {label: '涉事网点', prop: 'netaddress'},
          {label: '事件记录', width: '220',prop: 'remark'},
          {label: '投诉人', width: '120',prop: 'person'},
          {label: '投诉人身份', prop: 'identify'}
      ],
      // 表格数据  (随意写的数据）
      tableData: [
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '534454545456465',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          },
          {
              data: '2021年1月5号',
              bank: '北京分行',
              netaddress: '北京市金融街道21号',
              remark: 'xxxxxxxxxxxx',
              person: 'z张三',
              identify: '5344545454564654',
              detail: 'xxxxxxxxxxxxxxxxxxx'
          }
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
    goback(){
      this.$router.push({path:"/Home/complaintsWarning"})
    }
  },
};
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
    color: #58dbff;
    &:after {
      position: absolute;
      content: "";
      left: 60%;
      top: 10px;
      border-bottom: 7px solid #58dbff;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }
}
.searchTable {
  width: 98%;
  // height: 510px;
  /* background: #ccc; */
  margin-top: 20px;
  padding: 1%;
  background: url("../../../../assets/images/commonTitle/searchbg.png");
  background-size: 100% 100%;
}
.searchPage {
  width: 100%;
  text-align: right;
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