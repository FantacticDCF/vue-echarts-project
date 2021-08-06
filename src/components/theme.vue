<template slot-scope="scope">
  <el-select class="myTheme" v-model="themeValue" placeholder="主题风格" @change="changeTheme"
             :popper-append-to-body="false">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "theme",
  data() {
    return {
      themeValue:"darkBlue",
      options: [{
        value: 'darkBlue',
        label: '深蓝（默认）',
        color: '#11172F'
      },{
        value: 'black',
        label: '黑色',
        color: '#000000'
      },{
        value: 'red',
        label: '红色',
        color: '#ff0000'
      }],
    }
  },
  methods: {
    //切换主题颜色
    changeTheme(value) {
      console.log(value,'--------------');
      var obj = {}
      obj = this.options.find(function(item){
        return item.value === value;
      })
      console.log(obj,'obj')
      this.themeValue = value;
      document.querySelector('body').setAttribute('style', 'background-color:'+obj.color)
      document.querySelector('.commonTitle').setAttribute('style', 'background-color:'+obj.color)
      document.querySelector('.ivu-layout.ivu-layout-has-sider').setAttribute('style', 'background-color:'+obj.color+'!important')
      document.querySelector('.content').setAttribute('style', 'background-color:'+obj.color)

    },

  }
}
</script>

<style scoped>
 .el-input__inner{
    background-color: transparent !important;
    /*border-color: #DBDBDB;*/
    color: #59dfff;
  }
  .el-select-dropdown {
    background-color: #11172F;
    border:0
  }
  .el-select-dropdown__item.selected {
    color: #409EFF;
    font-weight: 700;
    background-color: #0E1E53;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: #0E1E53;
  }
</style>