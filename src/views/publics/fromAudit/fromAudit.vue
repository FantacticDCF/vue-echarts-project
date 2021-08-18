<template>
  <div>
    <div>
       <fuzzySearch/>
      <el-row class="el-row-input" style="margin: 2px 0 5px">
      <el-col :span="23" class="titleList"
        ><div class="bus-bread">消保审核</div>
        </el-col
      >
    </el-row>
    </div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" :style="info.setBackgroundBg1">
          <div class="middle_square">
            <div
              @mouseover="mouseOver(index, $event)"
              @mouseleave="mouseleave(index, $event)"
              class="desc_image"
              @click="idHandle(item.id)"
              v-for="(item, index) in shuju"
              :key="index"
              :style="{
                backgroundImage: 'url(' + item.src + ')',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }"
              v-html="item.title"
            ></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import audit1 from "../../../assets/images/audit/audit5.png";
import audit2 from "../../../assets/images/audit/audit6.png";
import audit3 from "../../../assets/images/audit/audit7.png";
import audit4 from "../../../assets/images/audit/audit8.png";
import audit5 from "../../../assets/images/audit/audit1.png";
import audit6 from "../../../assets/images/audit/audit2.png";
import audit7 from "../../../assets/images/audit/audit3.png";
import audit8 from "../../../assets/images/audit/audit4.png";
import fuzzySearch from '../../../components/fuzzySearch.vue'
export default {
  data() {
    return {
      shuju: [
        {
          id: "001",
          src: audit3,
          title: "报送",
          src1: audit7
        },
        {
          id: "002",
          src: audit4,
          title: "审核",
          src1: audit8
        },
        {
          id: "003",
          src: audit1,
          title: "查询",
          src1: audit5,
        },
        {
          id: "004",
          src: audit2,
          title: "返回",
          src1: audit6
        },
      ],
      info: {
        setBackgroundBg: {
          backgroundImage:
            "url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        setBackgroundBg1: {
          backgroundImage:
            "url(" +
            require("../../../assets/images/commonTitle/searchbg.png") +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
      },
    };
  },
  components:{
    fuzzySearch
  },
  mounted() {},
  methods: {
    //鼠标悬停
 
    mouseOver(index, e) {
      e.target.style.background = "url(" + this.shuju[index].src1 + ")";
      e.target.style.backgroundSize = "100% 100%";
      e.target.style.backgroundPosition='center'

    },
    mouseleave(index, e) {
      e.target.style.background = "url(" + this.shuju[index].src + ")";
      e.target.style.backgroundSize = "100% 100%";
      e.target.style.backgroundPosition='center'
    },
    idHandle(val) {
      this.$router.push({
        name: "submission",
        params: {
          id: val,
        },
      });
    },
  },
};
</script>
<style lang='less' scoped>
.el-row {
  margin-top: 1.5%;
  .el-col-24 {
    height: 520px;

    .grid-content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .middle_square {
        height: 80%;
        width: 40%;
        display: flex;
        flex-wrap: wrap; //允许换行排列

        .desc_image {
          width: 48%;
          height: 48%;
          margin-left: 1.5%;
          justify-content: space-evenly;
          flex-direction: column;
          font-size: 19px;
          text-align: center;
          line-height: 327px;
          color: #59dfff;
        }
      }
    }
  }
}

.el-row-input {
  height: 30px;

  .bus-bread {
    height: 30px;
    line-height: 50px;
    position: relative;
    text-indent:19px;
    color: #59DEFF;

    // margin-bottom: 1%;
    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 14px;
      border-bottom: 7px solid #1A85C2;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
    &:after {
      position: absolute;
      content: "";
      left: 7%;
      top: 14px;
      border-bottom: 7px solid #59DEFF;
      border-left: 9px solid transparent;
      border-top: 9px solid transparent;
      /*border-left和border-right换成透明色 不然是长方形*/
    }
  }  
}
</style>