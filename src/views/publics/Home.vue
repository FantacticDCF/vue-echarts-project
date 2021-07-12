<template>
  <div class="index">
    <Layout>
      <!-- <commonTitle />
      <div class="maskTips" @jumpHome ='jumpHome'></div> -->
      <Header>
        <div class="commonTitle">
            <div class="commonLogo">
                <span class="commonTitleres commonTitleres_one" @click="jumpHome">返回首页</span>
                <img src="../../assets/images/commonTitle/logo.png"/>
            </div>
            <div class="commonTitleS">
                <span class="commonTitles commonTitleS_one">数字化投诉分析管理系统</span>
            </div>
            <div class="commonTime">
                <span class="times timed">{{nowDates}}</span>
                <span class="names">王一博</span>
            </div>
        </div>
      </Header>
      <Layout >
        <Sider
          ref="side1"
          hide-trigger
          collapsible
          :collapsed-width="90"
          v-model="isCollapsed"
        >
          <Menu
            :active-name="leftactive"
            theme="light"
            width="90"
            :class="menuitemClasses"
          >
            <MenuItem
              :name="item.name"
              v-for="(item, index) in leftlist"
              :key="index"
              @click.native="leftclick(item)"
            >
              <img class="iconimg" :src="item.img"/>
              <span>{{ item.label }}</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <div class="layout-header-bar">
            <Icon
              type="ios-arrow-back"
              size="30"
              @click="tag_go(2)"
              style="cursor: pointer"
            />
            <div class="layout-header-bar-tag">
              <div class="tges">
                <Tag
                  v-for="(item, index) in count"
                  :key="index"
                  :name="item.name"
                  color="primary"
                  closable
                  @on-close="handleClose2(index)"
                >
                  <router-link :to="item.path">{{ item.name }} </router-link>
                </Tag>
              </div>
            </div>
            <Icon
              type="ios-arrow-forward"
              size="30"
              @click="tag_go(1)"
              style="cursor: pointer"
            />
          </div>
          <Content class="content">
            <div class="crumb">
              <Breadcrumb>
                <BreadcrumbItem
                  :to="item.path"
                  v-for="(item, index) in breadnav"
                  :key="index"
                >
                  <!-- <Icon type="ios-home-outline"></Icon> -->
                  <div class="icon1"></div>
                   <!-- <span v-html="item.name==='降压目标' ?'降压目标投诉发生率考核目标':item.name"></span> -->

                  <!-- <i class="el-icon-caret-bottom icon1"></i> -->
                   {{item.name}}
                  <!-- {{item.name !='降压目标'? item.name :'降压目标'+ <div class="icon1"></div>+'投诉发生率考核目标'}} -->
                    
                  <div class="icon2"></div>
                  <!-- <i class="el-icon-caret-top icon2"></i> -->
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div class="setting">
              <router-view></router-view>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
// import commonTitle from "./components/commonTitle.vue"
export default {
  inject: ["tag_go"],
  data() {
    return {
      info:`降压目标${ <div class="icon1"></div>}'投诉发生率考核目标`,
      avatar_img: require("@/assets/images/avatar.jpg"),
      isCollapsed: false,
      count: [{ name: "投诉压降", path: "/Home/business" }],
      activeid: 1,
      toplist: [
        {
          label: "HOME1",
          name: "HOME1",
          id: "1",
          to: "/Home/index",
        },
        {
          label: "HOME2",
          name: "HOME2",
          id: "2",
          to: "/Home/cliniclist",
        },
      ],
      topactive: "投诉压降",
      leftactive: "投诉压降",
      leftlist: [
        // {
        //   label: "HOME1",
        //   name: "HOME1",
        //   icon: "ios-paper",
        //   id: "1",
        //   to: "/Home/index",
        // },
        {
          label: "投诉压降",
          name: "投诉压降",
          img: require('../../assets/images/commonTitle/tsjy.png'),
          id: "1",
          to: "/Home/business",
        },
        {
          label: "压降目标",
          // name: "压降目标",
           name: "压降目标",
          img: require('../../assets/images/commonTitle/yjmb.png'),
          id: "2",
          to: "/Home/losspressure",
        },
        {
          label: "查询",
          name: "查询",
          img: require('../../assets/images/commonTitle/cx.png'),
          id: "2",
          to: "/Home/serch",
        },
        {
          label: "监管报送",
          name: "监管报送",
          img: require('../../assets/images/commonTitle/jgbs.png'),
          id: "2",
          to: "/Home/regulatorySubmitted",
        },
        {
          label: "投诉分析报告模版",
          name: "投诉分析报告模版",
          img: require('../../assets/images/commonTitle/tsfx.png'),
          id: "2",
          to: "/Home/complaintAnalysis",
        },
        {
          label: "消保审核",
          name: "消保审核",
          img: require('../../assets/images/commonTitle/xbsh.png'),
          id: "2",
          to: "/Home/fromAudit",
        },
        {
          label: "投诉预警",
          name: "投诉预警",
          img: require('../../assets/images/commonTitle/tsyj.png'),
          id: "2",
          to: "/Home/complaintsWarning",
        },
        {
          label: "投诉管理驾驶舱",
          name: "投诉管理驾驶舱",
          img: require('../../assets/images/commonTitle/tsgl.png'),
          id: "2",
          to: "/Home/complaintCockpit",
        },
      ],
      breadnav: [],
      nowDates: ''
    };
  },
  created() {
//  this.breadnav = this.$route.meta.breadnav;
    if (JSON.parse(sessionStorage.getItem("count")) == null) return false;
    else this.count = JSON.parse(sessionStorage.getItem("count"));
    this.topactive = JSON.parse(sessionStorage.getItem("routername")).topactive;
    this.leftactive = "投诉压降"
    // this.leftactive = JSON.parse(
    //   sessionStorage.getItem("routername")
    // ).leftactive;
    // this.activeid = JSON.parse(sessionStorage.getItem("routername")).activeid;
    // 获取当前日期
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var s2 = day2.getFullYear()+"年" + (day2.getMonth()+1) + "月" + day2.getDate() + '日';
    this.nowDates = s2;
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  methods: {
    jumpHome(){
      this.$router.push({path: '/index'})
    },
    leftclick(item) {
      this.leftactive = item.name;
      this.$router.push({ path: item.to });
      sessionStorage.setItem(
        "routername",
        JSON.stringify({
          topactive: item.label,
          leftactive: item.name,
          activeid: item.id,
        })
      );
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    // tag标签
    handleClose2(index) {
      this.count.splice(index, 1);
    },
    //顶部导航
    topclick(item) {
      this.activeid = item.id;
      this.leftactive = item.name;
      this.topactive = item.label;
      this.$router.push({ path: item.to });
      sessionStorage.setItem(
        "routername",
        JSON.stringify({
          topactive: item.label,
          leftactive: item.name,
          activeid: item.id,
        })
      );
    },
    //退出登录
    quit(name) {
      if (name == 1) {
        sessionStorage.clear();
        this.$router.push("/");
      }
    },
  },
  components: {
    // navTop,
    // commonTitle,
  },
  watch: {
    $route(to) {
//    this.breadnav = to.meta.breadnav;
      // 跳转到平台库中修改面包屑
      if (to.query.type === "serviceLibrary") {
        this.breadnav = this.serviceNav;
      } else if (to.query.type === "productdetail") {
        this.breadnav = this.proNav;
      }
      if (to.meta.name != undefined)
        this.count.unshift({ name: to.meta.name, path: to.path });
      let hash = {};
      this.count = this.count.reduce((item, next) => {
        hash[next.name] ? "" : (hash[next.name] = true && item.push(next));
        return item;
      }, []);
      sessionStorage.setItem("count", JSON.stringify(this.count));
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../../assets/less/Home.less");
.ivu-menu-item{
  text-align: left !important;
}
.menu-item span{
  width: 7rem !important;
}
.ivu-layout-sider{
  min-width: 230px !important;
  max-width: 230px !important;
  margin: 10px !important;
}

.iconimg{
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.header{
    background: none;
    padding: 0rem;
    height: 3.75rem;
    line-height: 3.75rem;
    position: fixed;
    width: 100%;
    z-index: 999;
}
.commonTitle{
  width: 100%;
  height: 60px;
  background: #11172F;
  text-align: center;
  overflow: hidden;
  background-image: url("../../assets/images/commonTitle/bg04.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.commonLogo{
  width: 30%;
  height: 60px;
  float: left;
   /* background-image: url("../../assets/images/commonTitle/bg01.png");
   background-size: 100% 100%;
   background-repeat: no-repeat; */
  // display: flex;
  // justify-content: space-around;
}
.commonLogo img{
  display: inline-block;
  width: 140px;
  height: 45px;
  margin-top: 5px;
  float: right;
}
.commonLogo .commonTitleres{
  display: inline-block;
  font-size: 12px;
  width: 38%;
  line-height: 60px;
  margin-left: 50px;
  cursor: pointer;
  float: right;
}
.commonLogo .commonTitleres_one{ 
  background-image:-webkit-linear-gradient(bottom,#51aefe,#89f5fc);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.commonTitleS{
  width: 40%;
  height: 60px;
  /* margin-left: -20px; */
  float: left;
}
.commonTitleS .commonTitles{
  font-size: 22px;
  line-height: 66px;
  font-weight: 500;
  position: relative;
}
.commonTitleS .commonTitleS_one{ 
  background-image:-webkit-linear-gradient(bottom,#51aefe,#89f5fc);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.commonTime{
  width: 30%;
  float: left;
  margin-left: -25px;
   /* background-image: url("../../assets/images/commonTitle/bg03.png");
   background-size: 100% 100%;
   background-repeat: no-repeat; */
  justify-content: space-around;
  position: relative;
}
.commonTime .times{
  display: inline-block;
  font-size: 12px;
  margin-left: 53px;
  line-height: 50px;
  color: #6bf6fd;
  position: absolute;
    left: 33%;
    top: 2px;
}
/* .commonTime .timed{ 
  background-image:-webkit-linear-gradient(bottom,#4392d6,#57c9d5);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
} */

.commonTime .names{
  font-size: 10px;
  color: #6bf6fd;
  position: absolute;
  left: 76%;
  top: -6px;
}
</style>
