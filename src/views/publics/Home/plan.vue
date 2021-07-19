<template>
	<div>
		<div class="bus-bread">
			<span class="empty-box"></span>
			<span class="first-content color-black pdlr-10" @click="goToBack">投诉压降</span>
			<span class="second-content pdl-10 pdr-5">投诉压降措施制定</span>
		</div>
		<div class="aborder" :style="setBackgroundBg2">
			<span>投诉案例查询</span>
			<input type="text" class="input-border" placeholder="输入关键词查询" :style="setBackgroundBg2" />
			<i class="el-icon-search iconSearch"></i>
		</div>
		<el-row class="bas-bac" :style="setBackground" id="bigBox">
			<el-row class="bus-top-text">
				投诉压降计划
			</el-row>
			<el-row class="bus-content">
				<el-row class="bus-left-content" :style="setBackgroundBg">
					<el-row class="color-blue">投诉压降计划模版</el-row>
					<el-row class="bus-content-text" v-for="(item,index) in form.sttusCodes" :key="index">
						<el-row>
							<el-col :span="9">
								<div class="aline-right">{{item.label}}</div>
							</el-col>
							<el-col :span="15" class='pdr-25'>
								<div class="color-ff">{{item.value}}</div>
							</el-col>
						</el-row>
					</el-row>
				</el-row>
				<el-row class="bus-right-content" :style="setBackgroundBg">
					<el-row class="color-blue">投诉压降计划</el-row>
					<el-row class="bus-content-text1" v-for="(item,index) in form.countermeasures" :key="index">
						<el-col :span="8">
							<div class="aline-right-bg">{{item.label}}</div>
						</el-col>
						<el-col :span="16">
							<div :class="item.type > 0 ? 'beyond' : 'color-ff-right'">{{item.value}}</div>
						</el-col>
					</el-row>
					<div class="bus-content-btn">
						<button class="cancle-btn">确定/保存</button>
						<button class="prin-btn">打印</button>
					</div>
				</el-row>
			</el-row>
		</el-row>
	</div>
</template>
<script>
	//	import { getheight } from '../../../plugin/getheight.js'
	export default {
		data() {
			return {
				isType: 'false',
				form: {
					sttusCodes: [{
							label: "投诉压降目标：",
							value: "个贷审批时间过长引起的投诉"
						},
						{
							label: "投诉原因分析：",
							value: "分行贷款审批过程中，经办人与审批人间 信息沟通不畅导致"
						},
						{
							label: "投诉压降处理流程：",
							value: "个贷审批流程"
						},
						{
							label: "投诉压降政策支援：",
							value: "个贷审批流程政策法规部门提供个人审批流程缩减的政策依据和可能性。"
						},
						{
							label: "投诉压降对策：",
							value: "提升分行个贷审批处与网点贷款经办人的频率，明确限时办结制度。"
						},
						{
							label: "投诉压降工作节点要求：",
							value: "1、一周内完善个人贷款限时结办的管理办法；2、完善贷款审批处与网点的工作交接 与工作提醒制定；3、贷款审批处开展审批 “日查”工作。"
						}
					],
					countermeasures: [{
							label: "投诉压降目标",
							value: "客户排队平均时长降低到5分钟内",
							type: "0"
						},
						{
							label: "投诉原因分析",
							value: "大堂经理工作能力不足，导致网点内自助具 使用率不足，导致的柜面压力",
							type: "1"
						},
						{
							label: "投诉压降处理流程",
							value: "大堂经理业务能力提升",
							type: "0"
						},
						{
							label: "投诉压降政策支援",
							value: "人力资源部推荐行内培训师，开展相关自助机具的业务辅导",
							type: "1"
						},
						{
							label: "投诉压降对策：",
							value: "提升大堂经理的自助机具的推荐能力与推荐力度",
							type: "0"
						},
						{
							label: "投诉压降工作节点1",
							value: "3月4日，由行内培训师开展自助机具推荐 技巧培训",
							type: "0"
						},
						{
							label: "投诉压降工作节点2",
							value: "3月6日-12日，培训师定时检查与现场辅导",
							type: "0"
						},
						{
							label: "投诉压降工作节点3",
							value: "3月4日，由行内培训师开展自助机具推荐 技巧培训",
							type: "0"
						}
					]
				},
				//screenHeight: document.documentElement.clientHeight - 60 - 21 - 32 - 32 - 20 - 15,
				setBackground: {
					backgroundImage: "url(" + require("../../../assets/images/bus/bus-bg.png") + ")",
					backgroundRepeat: "no-repeat",
					//					backgroundSize: "100% auto",
					backgroundSize: "100% 100%",
					backgroundPosition: "center"
				},
				setBackgroundBg: {
					backgroundImage: "url(" + require("../../../assets/images/bus/bus-content-bg.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
					backgroundPosition: "center"
				},
				setBackgroundBg2: {
					backgroundImage: "url(" + require("../../../assets/images/big-border.png") + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
					backgroundPosition: "center"
				}
			}
		},
		mounted() {
			//			let _this = this
			//			window.onresize = function() {
			//				debugger
			//				_this.screenHeight = getheight('bigBox') - 60 - 21 - 32 - 32 - 20 - 15
			//			}
		},
		methods: {
			goToBack() {
				this.$router.push({
					path: '/Home/business'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.bas-bac {
		width: 100%;
		/*height: 510px;*/
		height: calc(100vh - 170px);     
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
		padding: 7px;
	}
	.bus-content-text1 {
		padding: 1px;
	}
	.color-ff {
		color: #ffffff;
		font-size: 12px;
		/*padding: 0 15px 20px 0;*/
		
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
	.beyond {
		height: 32px;
		line-height: 16px;
		font-size: 10px;
		margin-right: 8%;
		padding-left: 8px;
		color: #ffffff;
		background: #122d59;
		margin-bottom: 6px;
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
.pdlr-10 {
	padding: 0 10px;
}
.pdl-10 {
	padding-left: 10px;
}
.pdr-5 {
	padding-right: 5px;
}
.pdr-25 {
	padding-right: 25px;
}
</style>