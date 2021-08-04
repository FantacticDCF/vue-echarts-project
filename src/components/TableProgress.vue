<!--表格进度条组件-->
<template>
    <el-col :span="data.colspan" >&nbsp;
        <div class="TableProgress" :style="tpStyleObj">
            <p class="title">{{data.title}}</p>
            <el-table :data="tableData" width="100%" height="100%">
              <el-table-column v-for="item in colData" :key="item.id"
                               :prop="item.colNameEn" :label="item.colName" :width="item.colWidth"
                               :className="item.colColor"
              >
                <template  slot-scope="scope">
                  <el-progress v-if="item.isProgress"
                               :percentage="scope.row.progressData" :show-text='false'
                               :class="scope.row.progressStatus?'colorDefault':'colorDanger'"
                               :width="20"
                               :stroke-width="20"
                               ></el-progress>
                  <span v-else>{{ scope.row[item.colNameEn] }}</span>
                </template>
              </el-table-column>
            </el-table>
        </div>
    </el-col>
</template>

<script>
export default {

  name: "TableProgress",
  data() {
    return {
      // data:[],
      tableData:[],
      colData: [],
      tpStyleObj:{
        backgroundImage:"",
        // backgroundImage:"url(" + require("../assets/images/components/border.png") + ")",
        // backgroundImage:"url(require(" + this.bgUrl + "))",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      },
      // colspan: 12//表格整体比例
    }
  },
  props:{
    data:Object
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.data,'---data---')
      this.init()
    });
  },
  methods: {
    init() {
      this.colData = this.data.colData
      this.tableData = this.data.tableData
      this.tpStyleObj.backgroundImage = "url(" + require(`../assets/images/components/${this.data.bgImg}.png`) + ")"
      // this.tpStyleObj.backgroundImage = "url(" + require(`../assets/images/components/border.png`) + ")"

    },
  },
}
</script>


<style >
.TableProgress {
  /*margin-top: 20px;*/
  margin: 5px;
  padding:1px;
}

.TableProgress .title {
  height: 22px;
  margin-top: 10px;
  margin-left: 14px;
  text-align: left;
  display: block;
  max-width: 195px;
  color: #02d1f4;
  background: url(../assets/images/title_bg.png) no-repeat;
  background-size:100% 100%;
  font-size: 12px;
  font-weight: 400;
  padding: 0 8px;

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
  width: 98%;
  margin: 10px 0 10px 15px;
}
.TableProgress .el-table__body{
  height: 100%;
}
.TableProgress .el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
  height: auto!important;
}
.TableProgress .el-table th, .el-table tr {
  background-color: transparent;
}
.TableProgress .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: transparent;
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
.TableProgress .blue {
  color: #55d4f8;
}
.TableProgress .color-white {
  /*color: white;*/
}
.TableProgress .colorDefault .el-progress-bar__inner{
  background-color: #55d4f8;
}
.TableProgress .colorDanger .el-progress-bar__inner{
  background-color: rgba(251, 84, 62, 1);
  /*background-image: -webkit-linear-gradient(bottom,rgba(251, 84, 62, 1), rgba(245, 134, 89, 1));*/
}
.TableProgress .el-progress-bar__outer  {
   /*height: 15px;*/
   border-radius: 75px;
   background-color: #1a3a6b7d;
   overflow: hidden;
   position: relative;
   vertical-align: middle;
 }
</style>