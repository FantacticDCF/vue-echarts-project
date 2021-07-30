<template>
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
              v-if="detailFlag"
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
              v-for="item,index in listLabel" 
              :key="index"
              :prop="item.prop"
              :label="item.label"
              header-align="center"
              align="center"
              :width="item.width"
            >
            </el-table-column>
          </el-table>
        </el-row>
      </div>
</template>
<script>
export default {
    props: {
        detailFlag :  {
            type: String, 
            default: ()=> false
        },
        tableData: [],
        listLabel: []
    }
    
}
</script>
<style lang="less" scoped>
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