<template>
    <div>
        <CircleProgressBar :progress="arr" name="蓝色"/>
    </div>
</template>
<script>
import CircleProgressBar from '../components/CircleProgressBar.vue';
export default {
    data(){
        return {
         arr:[50]
        }
    },
    components:{
        CircleProgressBar
    }
}
</script>
<style scoped>
    
</style>