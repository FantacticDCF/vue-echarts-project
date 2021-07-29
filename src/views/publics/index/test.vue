<template>
  <table-progress :data="data"></table-progress>
</template>

<script>
import TableProgress from "../../../components/TableProgress";
export default {
  name: "test",
  components: {TableProgress},
  data() {
    return {
      data:{}
    }
  },
  mounted() {
    this.data = {
      title:"年度机构目标分解",
      colspan: 12,
      colData: [
        {
          id:1,
          colName: '指标',
          colNameEn: 'col1',
          isProgress:false
        },
        {
          id:2,
          colName: '达标值',
          colNameEn: 'progressData',
          isProgress:true
        },
        {
          id:3,
          colName: '',
          colNameEn: 'col3',
          isProgress:false
        }
      ],
      tableData: [
        {
          id: '1',
          col1:"静安支行",
          progressData:50,
          progressStatus:1,//绿色1 红色0
          col3:"0.0005%",
        },
        {
          id: '2',
          col1:"迪士尼支行",
          progressData:70,
          progressStatus:0,//绿色1 红色0
          col3:"0.0008%",
        },
        {
          id: '3',
          col1:"虹桥支行",
          progressData:30,
          progressStatus:1,//绿色1 红色0
          col3:"0.001%",
        },
        {
          id: '3',
          col1:"虹桥支行",
          progressData:30,
          progressStatus:1,//绿色1 红色0
          col3:"0.001%",
        },
        {
          id: '3',
          col1:"虹桥支行",
          progressData:30,
          progressStatus:1,//绿色1 红色0
          col3:"0.001%",
        },
        {
          id: '3',
          col1:"虹桥支行",
          progressData:30,
          progressStatus:1,//绿色1 红色0
          col3:"0.001%",
        },
        {
          id: '3',
          col1:"虹桥支行",
          progressData:30,
          progressStatus:1,//绿色1 红色0
          col3:"0.001%",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>