<template>
  <div>
    <div :class="{'popContainer': isActive}">
      <div v-for='(item, index) in show' :key="index">
        <div v-if="item" :style="style[index]" class="asd">
          <div class="closeit" @click="closeIt(index)">x</div>
            <div class="bg">
              <button class="but" @click="asd(index)"></button>
              <img class="imgbg" src="../assets/images/demo1.png" alt="">
            </div>
            <!-- <img class="imgbg" src="../assets/images/demo1.png" alt=""> -->
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
          left: '45%',
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
    div {
      padding: 15px;
    }
  }
  .bg {
    width: 100%;
    height: 400px;
    position: relative;
    .but {
      position: absolute;
      left: 5%;
      top: 10%;
      padding: 80px 250px 0 0;
      z-index: 99999999999;
      border: none;
      background: none;
    }
    .imgbg {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
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
    position: absolute;
    top: -6%;
    right: 0;
    width: 30px;
    height: 30px;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
    z-index: 99999999999;
    //color: #fff;
  }
</style>
