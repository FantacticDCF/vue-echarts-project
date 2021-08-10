<template>
  <div>
    <div :class="{'popContainer': isActive}">
      <div v-for='(item, index) in show' :key="index">
        <div v-if="item" :style="style[index]" class="asd">
          <div class="closeit" @click="closeIt(index)">x</div>
          <!-- <img class="imgbg" src="../assets/images/demo1.png" alt=""> -->
          <button @click="asd(index)">asdasd</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'], 
  data () {
    return {
      show: [true, false, false, false, false],
      isActive: true,
      style: [
        {
          width: '50%',
          height: '400px',
          background: '#fff',
          position: 'absolute',
          right: '5%',
          top: '10%',
          zIndex: 30000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '10px 10px 5px #888888'
        }
      ]
    }
  },
  props: ['showT'],
  created () {
    this.show[0] = this.showT
  },
  methods: {
    asd (index) {
      let indexo = index + 1
      let zIndex = 30000 + indexo
      let right =  5 + (5 * indexo) + '%'
      let top = 10 + (5 * indexo) + '%'
      if(indexo < 6) {
        this.show[index + 1] = true
        this.style.push({
          width: '50%',
          height: '400px',
          background: '#fff',
          position: 'absolute',
          right: right,
          top: top,
          zIndex: zIndex,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '10px 10px 5px #888888'
        })
      } else {
        return
      }
    },
    closeIt (index) {
      this.show.splice(index)
      if(this.show.length == 0) {
        this.isActive = false
        this.$emit('litenContent', false)
      }
    }
  }
}
</script>

<style lang='less' scoped>
  div.popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: rgba(82, 143, 194, 0.3) url(../assets/images/demo1.png) no-repeat center;
    // background-size: 100% 100%;
  }
  .asd{
    animation: mymove 1s infinite;
    animation-iteration-count: 1;
    box-shadow: 10px;
  }
  @keyframes mymove {
    0%{
      transform: scale(0);
    }
    100%{
      transform: scale(1);
    }
  }
  .closeit{
    width: 100%;
    text-align: right;
    padding-top: 5px;
    padding-right: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  button{
    margin-top: 150px;
  }
</style>
