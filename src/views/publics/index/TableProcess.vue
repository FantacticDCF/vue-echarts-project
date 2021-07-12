<!--表格进度条组件-->
<template>
  <div class="tableProcess">
    <el-table :data="tableData" width="100%">
      <el-table-column
          prop="top"
          label="排名"
          width="45"
          className="color-blue">
      </el-table-column>
      <el-table-column
          prop="name"
          label="分行"
          width=""
          className="color-blue">
      </el-table-column>
      <el-table-column prop="ts-num" width="">
        <template slot-scope="scope">
          <div style="width:100%;height: 10px;" :ref="'echarts'+scope.row.id"></div>
        </template>
      </el-table-column>
      <el-table-column
          prop="num"
          label="投诉数量"
          width="80"
          className="color-blue">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

  name: "TableProcess",
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.tableData = [
        {
          top: '1',
          name: '北京分行',
          id: '1',
          num: 76
        },
        {
          top: '2',
          name: '上海分行',
          id: '2',
          num: 70
        },
        {
          top: '3',
          name: '广州分行',
          id: '3',
          num: 60
        },
        {
          top: '4',
          name: '深圳分行',
          id: '4',
          num: 55
        },
        {
          top: '5',
          name: '郑州分行',
          id: '5',
          num: 50
        },
        {
          top: '6',
          name: '成都分行',
          id: '6',
          num: 40
        },
        {
          top: '7',
          name: '武汉分行',
          id: '7',
          num: 30
        }
      ];

      this.getEcharts()
    },
    getEcharts() {
      var that = this;
      setTimeout(() => {
        this.tableData.forEach(e => {
          console.log(e);
          console.log(e.num);
          let myChart = this.$echarts.init(this.$refs['echarts' + e.id]);
          myChart.setOption({
            // backgroundColor:"#17326b",
            grid:{
              left:"10",
              top:"10",
              right:"0",
              bottom:"10",
              containLabel:true
            },
            xAxis: {
              type: 'value',
              splitLine:{show:false},
              axisLabel:{show:false},
              axisTick:{show:false},
              axisLine:{show:false}
            },
            yAxis:[
              {
                type: 'category',
                axisTick:{show:false},
                axisLine:{show:false},
                axisLabel:{
                  color:"black",
                  fontSize:12,
                  textStyle: {
                    color: '#fff'
                  }
                },
                data:[],//左侧文字
                max:10, // 关键：设置y刻度最大值，相当于设置总体行高
                inverse:true
              },
              {
                type: 'category',
                axisTick:{show:false},
                axisLine:{show:false},
                axisLabel:{
                  color:"black",
                  fontSize:12,
                  textStyle: {
                    color: '#fff'
                  }
                },
                data:[],//右侧数据
                max:10, // 关键：设置y刻度最大值，相当于设置总体行高
                inverse:true
              }
            ],
            series: [
              {
                name:"条",
                type:"bar",
                barWidth:20,
                data:[e.num],
                barCategoryGap:20,
                itemStyle:{
                  normal:{
                    barBorderRadius:10,
                    color: new that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: '#22b6ed'
                    }, {
                      offset: 1,
                      color: '#3fE279'
                    }]),
                  }
                },
                zlevel:1

              },{
                name:"进度条背景",
                type:"bar",
                barGap:"-100%",
                barWidth:20,
                data:[100],
                color:"#2e5384",
                itemStyle:{
                  normal:{
                    barBorderRadius:10
                  }
                },
              }
            ]

          });

        })
      }, 1000)
    }
  }
}
</script>


<style >
.tableProcess .el-table td, .el-table th {
  padding: 5px 0;
}
/*.el-table tr:hover {*/
/*   background: transparent;*/
/*}*/
.tableProcess .el-table td, .el-table th.is-leaf {
  border-bottom: 0;
}
.tableProcess .el-table {
  background: transparent;
  margin-top: 20px;
}
.tableProcess .el-table th, .el-table tr {
  background-color: transparent;
}
.tableProcess .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: #081b56;
}
.tableProcess .el-table td, .el-table th {
  padding: 5px 0;
  text-align: center;
}
.tableProcess .el-table--border::after, .el-table--group::after, .el-table::before {
  background-color: transparent;
}
.tableProcess .el-table .cell{
  /*color: #12abe2;*/
  font-size: 12px;
}
.tableProcess .color-blue {
  color: #12abe2;
}
.tableProcess .color-white {
  /*color: white;*/
}
</style>