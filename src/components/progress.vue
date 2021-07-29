<template>
  <div>
    <el-progress
      :percentage="percentage"
      :type="type"
      :stroke-width="strokewidth"
      :text-inside="textinside"
      :status='status'
      :color='color'
      :width='width'
      :show-text='showtext'
      :stroke-linecap='strokelinecap'
      :format='format'
    ></el-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: "",
      type: "",
      strokewidth: "",
      textinside: "",
      status:"",
      color:"",
      width:'',
      showtext:'',
      strokelinecap:'',
      format:''
    };
  },
};
</script>

<style>
</style>