<!--首页-->
<template>
  <div>
    <commonTitle></commonTitle>
    <bigData :isShow="false"></bigData>
  </div>
</template>
<script>
  import commonTitle from "../components/commonTitle.vue";
  import bigData from "./index";

  export default {
    data() {
      return {
      };
    },
    components:{
        commonTitle,
        bigData
    },
    mounted() {

    },

  };
</script>
