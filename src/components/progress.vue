<template>
  <div>
    <el-progress
      :percentage="percentage"
      :type="type"
      :stroke-width="strokeWidth"
      :text-inside="textinside"
      :status='status'
      :color='customColor'
      :width='width'
      :show-text='showtext'
      :stroke-linecap='strokeLinecap'
      :style="aok"
    ></el-progress>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: String
    },
    type: {
      type: String
    },
    strokeWidth: {
      type: String
    },
    textinside: {
      type: Boolean
    },
    status: {
      type: String
    },
    customColor: {
      type: String
    },
    width: {
      type: Number
    },
    showtext: {
      type: Boolean
    },
    strokeLinecap: {
      type: String
    },
    aok: {
      type: Object
    },
    
  }
};
</script>

<style>
</style>