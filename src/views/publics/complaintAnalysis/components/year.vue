<template>
  <div id="">年</div>
</template>

<script>
import { getheight } from '../../../../plugin/getheight.js'
export default {
  name: 'year',
  data () {
    return {
      screenHeight: document.documentElement.clientHeight - 60 - 21 - 32 - 32 - 20 - 15
    }
  },
  mounted() {
    let _this = this
    window.onresize = function () {
      _this.screenHeight = getheight('divId') - 60 - 21 - 32 - 32 - 20 - 15
    }
  }
}
</script>

<style>

</style>