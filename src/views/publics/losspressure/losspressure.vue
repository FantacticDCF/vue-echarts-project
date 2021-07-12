<template>
  <div>
    <!-- <div class="info">
      <span class="work">工单查询</span>
      <input type="text" class="inp" placeholder="输入关键词查询" />
      
      <i class="el-icon-search iconSearch"></i>
    
    </div> -->
     <!-- <div class="bus-bread">
				压降目标 
		</div>
       <div class="bus-bread1">
				投诉发生率考核目标 
		</div> -->
    <div class="bus-bread">
		<span class="empty-box"></span>
		<span class="first-content" >&nbsp;投诉压降&nbsp;&nbsp;</span>
		<span class="second-content">&nbsp;&nbsp;投诉发生率考核目标&nbsp;</span>
	</div>
		<div class="aborder" :style="setBackgroundBg">
			<span>工单查询</span>
			<input type="text" class="input-border"  placeholder="输入关键词查询" :style="setBackgroundBg"/>
			<!-- <div class="iconSearch"> -->
			<i class="el-icon-search iconSearch"></i>
		</div>


    <div class="formInfo">
      <div class="box">
        <img
          src="../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png"
          alt=""
          class="image"
        />

        <div class="title">{{ titleName }}</div>
        <div class="desc">
          <div class="descTitle">
            <div class="descTitleName">指标</div>
            <div class="jinduValueNum">达标值</div>
          </div>
          <div class="descTitle1" v-for="(item, index) in info" :key="index">
            <div
              :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
            >
              {{ item.name }}
            </div>
            <div class="jinduValue">
              <CircleProgressBar
                :progress="item.jindu"
                :name="item.namecolor"
              />
            </div>
            <div class="titleNum">{{ item.num1 }}%</div>
          </div>
        </div>
      </div>
      <div class="box1">
        <img
          src="../../../assets/images/8714a3044d4e775a11f79e65d2afb0a.png"
          alt=""
          class="image"
        />
        <div class="title">{{ titleName1 }}</div>
        <div class="desc">
          <div class="descTitle">
            <div class="descTitleName">指标</div>
            <div class="jinduValueNum">达标值</div>
          </div>
          <div class="descTitle1" v-for="(item, index) in info1" :key="index">
            <div
              :class="item.colorid < 1 ? item.titleColor1 : item.titleColor2"
            >
              {{ item.name }}
            </div>
            <div class="jinduValue">
              <CircleProgressBar
                :progress="item.jindu"
                :name="item.namecolor"
              />
            </div>
            <div class="titleNum">{{ item.num1 }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgressBar from "../components/CircleProgressBar.vue";
export default {
  data() {
    return {
      arr: [50],
      setBackgroundBg: {
				backgroundImage: "url(" + require("../../../assets/images/big-border.png") + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
				backgroundPosition: "center"
			},
      titleName: "年度机构目标分解",
      titleName1: "年度业务目标分解",
      info: [
        {
          id: 1001,
          colorid: 0,
          name: "全辖投诉数量控制",
          num1: 0.005,
          jindu: [100],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "blue",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1002,
          colorid: 1,
          name: "静安支行",
          num1: 0.001,
          jindu: [50],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1003,
          name: "浦东支行",
          num1: 0.002,
          jindu: [60],
          colorid: 1,
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",

          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1004,
          colorid: 1,
          namecolor1: "红色",
          name: "上海火车支行",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1005,
          name: "虹桥支行",
          num1: 0.001,
          jindu: [60],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1006,
          name: "迪士尼支行",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1007,
          name: "市府支行",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1008,
          name: "西藏路支行",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "titleNum",
          icon: "el-icon-warning",
        },
        {
          id: 1009,
          name: "北京路支行",
          num1: 0.002,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1010,
          name: "解放路支行",
          num1: 0.001,
          jindu: [30],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1, //改变颜色的id
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
      ],
      info1: [
        {
          id: 1001,
          colorid: 0,
          name: "全辖投诉数量控制",
          num1: 0.005,
          jindu: [100],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "blue",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1002,
          colorid: 1,
          name: "零售银行部",
          num1: 0.001,
          jindu: [50],
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1003,
          name: "个人信贷部",
          num1: 0.002,
          jindu: [60],
          colorid: 1,
          namecolor: "蓝色",
          namecolor1: "红色",
          classname: "write",

          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1004,
          colorid: 1,
          namecolor1: "红色",
          name: "数字金融部",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1005,
          name: "电子渠道部",
          num1: 0.001,
          jindu: [60],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1006,
          name: "运营部",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1007,
          name: "普惠金融",
          num1: 0.002,
          jindu: [45],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1008,
          name: "小企业金融",
          num1: 0.003,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "titleNum",
          icon: "el-icon-warning",
        },
        {
          id: 1009,
          name: "交易银行部",
          num1: 0.002,
          jindu: [50],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1,
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
        {
          id: 1010,
          name: "公司银行部",
          num1: 0.001,
          jindu: [30],
          namecolor: "蓝色",
          classname: "write",
          colorid: 1, //改变颜色的id
          namecolor1: "红色",
          titleColor2: "titleNum1",
          titleColor1: "designation",
          icon: "el-icon-warning",
        },
      ],
    };
  },
  components: {
    CircleProgressBar,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url("../../../assets/less/losspressure.less");

.bas-bac {
		width: 100%;
		height: 510px;
		margin-top: 15px;
	}
	
	.bus-top-text {
		padding: 8px 0 0 15px;
		color: #58dbff;
		font-size: 12px;
	}
	
	.bus-content {
		margin-top: 10px;
		width: 100%;
	}
	
	.bus-left-content {
		margin: 20px 0 2% 3%;
		float: left;
		width: 45%;
		height: 400px;
		padding-bottom: 13px;
	}
	
	.bus-right-content {
		margin: 20px 0 2% 3%;
		float: left;
		width: 45%;
		height: 400px;
		padding-bottom: 16px;
		position: relative;
	}
	
	.el-row {
		margin-bottom: 0px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.aline-right {
		text-align: right;
		margin-right: 5px;
		color: #69a8e1;
		font-size: 12px;
		padding-bottom: 10px;
	}
	
	.aline-right-bg {
		/*width: 116px;*/
		height: 32px;
		line-height: 32px;
		text-align: center;
		color: #69a8e1;
		background: #1b3e69;
		margin-left: 13%;
		font-size: 12px;
	}
	.bus-content-text {
		padding: 5px;
	}
	
	.color-ff {
		color: #ffffff;
		font-size: 12px;
		padding: 0 15px 20px 0;
		
	}
	.color-ff-right {
		margin-right: 8%;
		padding-left: 8px;
		font-size: 10px;
		color: #ffffff;
		font-size: 12px;
		/*width: 240px;*/
		height: 32px;
		line-height: 32px;
		background: #122d59;
		margin-bottom: 6px;
	}
	#aline-ce {
		line-height: 16px;
		font-size: 10px;
	}
	.color-blue {
		margin: 15px 0 10px 0;
		color: #23cefd;
		text-align: center;
		font-size: 14px;
		font-weight: bold;
	}
	.bus-content-btn {
		position: absolute;
		bottom: -1%;
		right: 30%;
		.cancle-btn {
			width: 80px;
			height: 22px;
			line-height: 22px;
			background: #23cefd;
			border: none;
			border-radius: 16px;
			cursor: pointer;
		}
		.prin-btn {
			margin-left: 10px;
			width: 80px;
			height: 22px;
			line-height: 22px;
			background: #69a8e1;
			border: none;
			border-radius: 16px;
			cursor: pointer;
		}
	}
	.bus-bread {
		/*position: relative;*/
		text-indent: 16px;
		color: #69a8e1;
		.empty-box {
			position: relative;
			&:before {
				position: absolute;
				content: "";
				right: 0;
				top: -6%;
				border-bottom: 7px solid #1A83C0;
				border-left: 9px solid transparent;
				border-top: 9px solid transparent;
				/*border-left和border-right换成透明色 不然是长方形*/
			}
		}
		.first-content {
			position: relative;
			&:after {
				position: absolute;
				content: "";
				right: -3%;
				top: -6%;
				border-bottom: 7px solid #1A83C0;
				border-left: 9px solid transparent;
				border-top: 9px solid transparent;
				/*border-left和border-right换成透明色 不然是长方形*/
			}
		}
		.second-content {
			position: relative;
			&:after {
				position: absolute;
				content: "";
				right: -5%;
				top: -6%;
				border-bottom: 7px solid #1A83C0;
				border-left: 9px solid transparent;
				border-top: 9px solid transparent;
				/*border-left和border-right换成透明色 不然是长方形*/
			}
		}
	}
.aborder {
	text-indent: 30px;
	color: #1A83C0;
	margin-top: 10px;
	width: 55%;
	height: 32px;
	line-height: 32px;
	overflow: hidden;
}
.input-border {
	margin-left: 30px;
	border: none;
	color: #1A83C0;
	width: 63%;
	height: 70%;
	text-indent: 15px;
	font-size: 10px;
}
input::-webkit-input-placeholder {
      color: #59dfff;
    }
.color-black {
	color: rgba(34, 82, 128, 1);
	cursor: pointer;
}
</style>