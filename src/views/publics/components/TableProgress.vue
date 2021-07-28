<!--表格进度条组件-->
<template>
  <el-row>
    <el-col :span="data.colspan" >&nbsp;
        <div class="TableProgress" :style="tpStyleObj">
            <p class="title">{{data.title}}</p>
            <el-table :data="tableData" width="100%" height="">
      <el-table-column v-for="item in colData" :key="item.id"
                       :prop="item.colNameEn" :label="item.colName" :width="item.colWidth" className="color-blue"
      >
        <template  slot-scope="scope">
          <el-progress v-if="item.isProgress"
                       :percentage="scope.row.progressData" :show-text='false' height="15"
                       :color="scope.row.progressStatus?'blue':'red'"
                       ></el-progress>
          <span v-else>{{ scope.row[item.colNameEn] }}</span>
        </template>
      </el-table-column>
    </el-table>
        </div>
    </el-col>
  </el-row>
</template>

<script>
export default {

  name: "TableProgress",
  data() {
    return {
      // data:[],
      tableData: [],
      colData: [],
      tpStyleObj:{
        backgroundImage:"url(" + require("../../../assets/images/components/border.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        // background: 'url(../../../assets/images/components/bg.png)',
      },
      // colspan: 12//表格整体比例
    }
  },
  props:{
    data:Array
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {

      this.colData = this.data.colData
      this.tableData = this.data.tableData

    },
  }
}
</script>


<style >
.TableProgress {
  /*height: 90%;*/
  /*min-height: 300px;*/
}
.TableProgress .title{
  display: inline-block;
  margin: 10px 20px;
  color: #55d4f8;
  font-size: 14px;
}
.TableProgress .el-table td, .el-table th {
  padding: 10px 0;
}
/*.el-table tr:hover {*/
/*   background: transparent;*/
/*}*/
.TableProgress .el-table td, .el-table th.is-leaf {
  border-bottom: 0;
}
.TableProgress .el-table {
  background: transparent;
  /*margin-top: 14px;*/
}
.TableProgress .el-table__body{
  height: 100%;
}
.TableProgress .el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
}
.TableProgress .el-table th, .el-table tr {
  background-color: transparent;
}
.TableProgress .el-table--enable-row-hover .el-table__body tr:hover>td {
  /*background-color: #081b56;*/
}
.TableProgress .el-table td, .el-table th {
  /*padding: 0.7% 0;*/
  text-align: center;
}
.TableProgress .el-table--border::after, .el-table--group::after, .el-table::before {
  background-color: transparent;
}
.TableProgress .el-table .cell{
  /*color: #12abe2;*/
  font-size: 10px;
  padding: 0 2px;
}
.TableProgress .color-blue {
  color: #12abe2;
}
.TableProgress .color-white {
  /*color: white;*/
}
</style>