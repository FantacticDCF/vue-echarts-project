<template>
	<div class="bas-bac" :style="setBackground">
		<div class="bus-top-text">
			投诉压降计划
		</div>
		<div class="bus-content">
			<div class="bus-left-content" :style="setBackgroundBg">
				<div class="color-blue">投诉压降计划模版</div>
				<div class="bus-content-text">
					<el-row>
						<el-col :span="9">
							<div class="aline-right">投诉压降目标：</div>
						</el-col>
						<el-col :span="15">
							<div class="color-ff">个贷审批时间过长引起的投诉</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<div class="aline-right">投诉原因分析：</div>
						</el-col>
						<el-col :span="15">
							<div class="color-ff">分行贷款审批过程中，经办人与审批人间 信息沟通不畅导致
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<div class="aline-right">投诉压降处理流程：</div>
						</el-col>
						<el-col :span="15">
							<div class="color-ff">个贷审批流程</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<div class="aline-right">投诉压降政策支援：</div>
						</el-col>
						<el-col :span="15">
							<div class="color-ff">个贷审批流程政策法规部门提供个人审批流程缩减的政策依据和可能性。</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<div class="aline-right">投诉压降对策：</div>
						</el-col>
						<el-col :span="15">
							<div class="color-ff">提升分行个贷审批处与网点贷款经办人的频率，明确限时办结制度。</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="9">
							<div class="aline-right">投诉压降工作节点要求：</div>
						</el-col>
						<el-col :span="15">
							<div class="color-ff">1、一周内完善个人贷款限时结办的管理办 法；2、完善贷款审批处与网点的工作交接 与工作提醒制定；3、贷款审批处开展审批 “日查”工作。
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
			<div class="bus-right-content" :style="setBackgroundBg">
				<div class="color-blue">投诉压降计划</div>
				<div class="bus-content-text">
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降目标</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right">客户排队平均时长降低到5分钟内
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉原因分析</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right" id="aline-ce">大堂经理工作能力不足，导致网点内自助具 使用率不足，导致的柜面压力

							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降处理流程</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right">大堂经理业务能力提升
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降政策支援</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right" id="aline-ce">人力资源部推荐行内培训师，开展相关自助 机具的业务辅导
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降对策</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right" id="aline-ce">提升大堂经理的自助机具的推荐能力与推荐 力度
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降工作节点1</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right" id="aline-ce">3月4日，由行内培训师开展自助机具推荐 技巧培训
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降工作节点2</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right">3月6日-12日，培训师定时检查与现场辅导</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="8">
							<div class="aline-right-bg">投诉压降工作节点3</div>
						</el-col>
						<el-col :span="16">
							<div class="color-ff-right">3月7日开始每日夕会开展自查与总结工作</div>
						</el-col>
					</el-row>
				</div>
				<div class="bus-content-btn">
					<button class="cancle-btn">确定/保存</button>
					<button class="prin-btn">打印</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
				}
			}
		},
	}
</script>

<style lang="less" scoped>
	.bas-bac {
		width: 100%;
		height: 100%;
		margin-top: 10px;
	}
	
	.bus-top-text {
		padding: 8px 0 0 15px;
		color: #58dbff;
		font-size: 12px;
	}
	
	.bus-content {
		margin-top: 30px;
		width: 100%;
	}
	
	.bus-left-content {
		margin-left: 35px;
		float: left;
		width: 45%;
		height: 348px;
		padding-bottom: 13px;
	}
	
	.bus-right-content {
		margin-left: 20px;
		float: left;
		width: 45%;
		height: 348px;
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
		width: 116px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		color: #69a8e1;
		background: #1b3e69;
		margin-left: 15px;
		font-size: 12px;
	}
	.bus-content-text {
		padding: 5px;
	}
	
	.color-ff {
		color: #ffffff;
		font-size: 12px;
		padding: 0 15px 10px 0;
		
	}
	.color-ff-right {
		padding-left: 8px;
		font-size: 10px;
		color: #ffffff;
		font-size: 12px;
		width: 240px;
		height: 28px;
		line-height: 28px;
		background: #122d59;
		margin-bottom: 6px;
	}
	#aline-ce {
		line-height: 14px;
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
		bottom: -2%;
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
</style>