<template>
  <div>
    <div>
      <div class="bus-bread">{{title}}</div>
      <div class="aborder" :style="info.setBackgroundBg">
        <span>工单查询</span>
        <input
          type="text"
          class="input-border"
          placeholder="输入关键词查询"
          :style="info.setBackgroundBg"
        />
        <i class="el-icon-search iconSearch"></i>
      </div>
    </div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" :style="info.setBackgroundBg1">
          <div class="middle_square">
            <div
            @mouseover="mouseOver(index)"
            @mouseleave="mouseleave(index)"
              class="desc_image"
              @click="idHandle(item.id)"
              v-for="(item, index) in shuju"
              :key="index"
              :style="{'backgroundImage':'url('+item.src+')','backgroundSize':'100% 100%','backgroundRepeat':'no-repeat','backgroundPosition':'center'} "
            >
              <!-- {{ index + 1 }} -->
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import audit1 from '../../../assets/images/audit/audit5.png'
import audit2 from '../../../assets/images/audit/audit6.png'
import audit3 from '../../../assets/images/audit/audit7.png'
import audit4 from '../../../assets/images/audit/audit8.png'
import audit5 from '../../../assets/images/audit/audit1.png'
import audit6 from '../../../assets/images/audit/audit2.png'
import audit7 from '../../../assets/images/audit/audit3.png'
import audit8 from '../../../assets/images/audit/audit4.png'

export default {  
  data() {
    return {
      // hover: false,
      title:'消保审核',
      img:[
          { src:audit7},
        { src:audit8},
        { src:audit5},
        { src:audit6},
      
      ],
        img1:[
        { src:audit3},
        { src:audit4}, 
        { src:audit1},
        { src:audit2},
         
      ],
      shuju: [
        {
          id: "001",
          src:audit3,
          title:"报送"
        },
        {
          id: "002",
           src:audit4,
           title:"审核"
        },
        {
          id: "003",
           src:audit1,
           title:"查询"
        },
        {
          id: "004",
           src:audit2,
           title:"返回"
        },
      ],
      info: {
        setBackgroundBg: {
          backgroundImage:"url(" + require("../../../assets/images/big-border.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
        setBackgroundBg1: {
          backgroundImage:"url(" + require("../../../assets/images/commonTitle/searchbg.png") +")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        },
      },
    };
  },
  mounted() {
    
  },
  methods: {
    //鼠标悬停
    mouseOver(index){
     console.log(index);
     console.log(this.shuju[index].src);
      this.shuju[index].src=this.img[index].src
    },
    mouseleave(index){
        console.log(index);
     this.shuju[index].src=this.img1[index].src
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
          // background-color: aqua;
          justify-content: space-evenly;
          flex-direction: column;
          font-size:19px;
          position: relative;
          // bottom:10%
          span{
            position: absolute;
            bottom: 12.2%;
            left: 41.8%;
            color: #59dfff;
          }
        }
      }
    }
  }
}
//  .desc_image:nth-child(1):hover {
//     // background: rgba(255, 255, 255, 0.04) url(../../../assets/images/audit/audit1.png) no-repeat;
//     background-image: url(../../../assets/images/audit/audit1.png) !important;
//     background-size: 100% 100%;
//     background-repeat: "no-repeat";
//           // backgroundSize: "100% 100%",
//      background-position: "center",
//   }

//    .desc_image:nth-child(2):hover {
//     background-image: url(../../../assets/images/audit/audit2.png);
//     background-size: 100% 100%;
//     background-repeat: "no-repeat";
//           // backgroundSize: "100% 100%",
//      background-position: "center",
//   }
//    .desc_image:nth-child(3):hover {
//      background-image: url(../../../assets/images/audit/audit3.png);
//     background-size: 100% 100%;
//     background-repeat: "no-repeat";
//           // backgroundSize: "100% 100%",
//      background-position: "center",
//   }
//    .desc_image:nth-child(4):hover {
//       background-image: url(../../../assets/images/audit/audit4.png);
//     background-size: 100% 100%;
//     background-repeat: "no-repeat";
//           // backgroundSize: "100% 100%",
//      background-position: "center",
//   }

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
    right: 92.5%;
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
</style>