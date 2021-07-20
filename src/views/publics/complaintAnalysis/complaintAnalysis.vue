<template>
    <div id="divId">
      <div class="bus-bread">投诉分析报告模版</div>
      <div class="aborder" :style="setBackgroundBg">
        <span>工单查询</span>
        <input
          type="text"
          class="input-border"
          placeholder="输入关键词查询"
          :style="setBackgroundBg"
        />
        <!-- <div class="iconSearch"> -->
        <i class="el-icon-search iconSearch"></i>
      </div>
      <div class="tabMenu">
        <div v-for="(item, index) in tabs" :class="item.class" :key="index" @click='projectSelectFun($event, index, item.componentName)'>{{item.name}}</div>
      </div>
      <component
        style="margin-top: 20px;"
        :is="currentComponent" 
        :customer_id="customer_id" 
      >
      </component>
    </div>
</template>
<script>
import { getheight } from '../../../plugin/getheight.js'
export default {
    data(){
      return {
        setBackgroundBg: {
          backgroundImage:
          "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        activeName: 'first',
        screenHeight: document.documentElement.clientHeight - 60 - 21 - 32 - 32 - 20 - 15,
        tabs: [
          {
            name: '月',
            componentName: 'lookMonth',
            id: '1',
            class: 'selected'
          },
          {
            name: '季度',
            componentName: 'lookQuarter',
            id: '2'
          },
          {
            name: '半年',
            componentName: 'lookHalfYear',
            id: '3'
          },
          {
            name: '年',
            componentName: 'lookYear',
            id: '4'
          }
        ],
        currentComponent: '',
        customer_id: ''
      }
    },
    mounted () {
      let _this = this
      window.onresize = function () {
        _this.screenHeight = getheight('divId') - 60 - 21 - 32 - 32 - 20 - 15
      }
      this.currentComponent = this.tabs[0].componentName
    },
    components: { // 以函数的形式进行注册组件并引用组件
      lookMonth (resolve) {
        require(["./components/month.vue"], resolve)
      },
      lookQuarter (resolve) {
        require(["./components/quarter.vue"], resolve)
      },
      lookHalfYear (resolve) {
        require(["./components/halfYear.vue"], resolve)
      },
      lookYear (resolve) {
        require(["./components/year.vue"], resolve)
      }
    },
    methods: {
      handleClick(tab) {
        console.log(tab)
      },
      projectSelectFun(e, index, name) { // name必须为components里的方法名
         console.log(e);
        let _dom = document.querySelector(".selected")
        if (_dom) {
          _dom.classList.toggle("selected") // 当class为project的元素上没有这个CSS类时，它就新增这个CSS类；如果class为project的元素有了这个CSS类，它就是删除它。就是反转操作。
        }
        e.target.classList.toggle("selected")
        this.customer_id = this.tabs[index].id
        this.currentComponent = name // 赋值并调用components里的方法进行注册组件
      }
    }
}
</script>
<style lang="less" scoped>
.bus-bread {
  position: relative;
  text-indent: 16px;
  color: #69a8e1;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
  &:after {
    position: absolute;
    content: "";
    left: 11.5%;
    top: 0;
    border-bottom: 7px solid #1a83c0;
    border-left: 9px solid transparent;
    border-top: 9px solid transparent;
    /*border-left和border-right换成透明色 不然是长方形*/
  }
}
.aborder {
  text-indent: 30px;
  color: #1a83c0;
  margin-top: 10px;
  width: 55%;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
}
.input-border {
  margin-left: 30px;
  border: none;
  color: #1a83c0;
  width: 70%;
  height: 70%;
  text-indent: 15px;
  font-size: 10px;
}
input::-webkit-input-placeholder {
  color: #59dfff;
}
.tabMenu{
  padding-left: 0px;
  margin-top: 20px;
  width: 40%;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #61728E;
  border-radius: 30px;
  &>div{
    width: 20%;
    text-align: center;
    height: auto;
    font-weight: 500;
  }
  &>.selected{
    background: url(../../../assets/images/complaintAnalysis/tabBg.png) no-repeat;
    background-size: 109% 138%;
    background-position-y: -5px;
    background-position-x: -4px;
    height: auto;
    height: 100%;
    color: #65D0EA;
  }
}
</style>