<template>
  <div class="cockpit_container">
  <bigData class="cockpit" :is-show="true"></bigData>
  </div>
</template>
<script>
import bigData from "../index";
export default {
    data(){
        return {

        }
    },
    components:{
      bigData
    }
}
</script>

  <style lang="less" scoped>
   .ivu-layout {
    background: #11172f;
  }
  .content {
    padding: 7px!important;
  }
  .content .crumb {
    display: none;
  }
  .mainbox .column {
    width:30%
  }
  .mainbox .column:nth-child(2) {
    width: 40%;
  }
  .cockpit {
    margin-left: -10px;
  }
  .cockpit .no .no-hd {
    /*height: 10vh;*/
  }
  .cockpit .no .no-hd ul li {
    padding: 14px 0 20px 0;
    font-size: 16px;
  }
  .cockpit .no .no-hd p {
    margin: 5px 10px;
  }
  /*.cockpit .no .no-bd {*/

  /*}*/
  .cockpit .no .no-bd ul {
    font-size: 18px;
  }
  .cockpit .no .no-bd ul li {
    font-size: 18px;
    padding-top: 10px;
  }
</style>