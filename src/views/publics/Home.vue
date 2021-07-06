<template>
  <div class="index">
    <Layout>
      <Header>
        <Menu
          mode="horizontal"
          theme="light"
          :active-name="topactive"
          class="meum"
        >
          <h3>xxxx平台管理</h3>
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            type="md-menu"
            size="24"
            style="margin: 0rem 1.875rem 0rem 3.125rem"
          ></Icon>
          <div class="layout-nav">
            <MenuItem
              :name="item.label"
              v-for="(item, index) in toplist"
              :key="index"
            >
              <span @click="topclick(item)" class="block">{{
                item.label
              }}</span>
            </MenuItem>
          </div>
          <div class="imy">
            <div style="cursor: pointer">HOME3</div>
          </div>
          <Dropdown @on-click="quit" trigger="click">
            <Avatar :src="avatar_img" />
            <DropdownMenu slot="list">
              <DropdownItem name="1">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Menu>
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
             
              v-show="item.id == activeid ? 'show' : ''"
            >
              <Icon :type="item.icon" />
              <span>{{ item.label }}</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
            <CommonTitle/>          
            <Layout>
                <Sider
                        style="background: #11172F"
                        ref="side1"
                        hide-trigger
                        collapsible
                        :collapsed-width="78"
                        v-model="isCollapsed"
                >
                    <Menu
                            :active-name="leftactive"
                            theme="light"
                            width="auto"
                            :class="menuitemClasses"
                    >
                        <MenuItem
                                :name="item.name"
                                v-for="(item, index) in leftlist"
                                :key="index"
                                @click.native="leftclick(item)"
                        >
                            <Icon :type="item.icon"/>
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
                                style="cursor: pointer;"
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
                                    <router-link :to="item.path">{{
                                        item.name
                                        }}
                                    </router-link>
                                </Tag
                                >
                            </div>
                        </div>
                        <Icon
                                type="ios-arrow-forward"
                                size="30"
                                @click="tag_go(1)"
                                style="cursor: pointer;"
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
                                    <Icon type="ios-home-outline"></Icon>
                                    {{ item.name }}
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
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import CommonTitle from './common/commonTitle.vue'
  export default {
    inject: ['tag_go'],
    components:{
      CommonTitle: CommonTitle
    },
    data() {
      return {
        avatar_img: require('@/assets/images/avatar.jpg'),
        isCollapsed: false,
        count: [{name: "HOME1", path: "/Home/index"}],
        activeid: 1,
        topactive: "HOME1",
        leftactive: "HOME1",
        leftlist: [
          {
            label: "投诉压降",
            name: "投诉压降",
            id: "1",
            to: "/Home/index",
          },
          {
            label: "压降目标",
            name: "压降目标",
            id: "2",
            to: "/Home/cliniclist",
          },
          {
            label: "查询",
            name: "查询",
            id: "3",
            to: "/Home/index",
          },
          {
            label: "监管报送",
            name: "监管报送",
            id: "4",
            to: "/Home/cliniclist",
          },
          {
            label: "投诉分析报告模版",
            name: "投诉分析报告模版",
            id: "5",
            to: "/Home/index",
          },
          {
            label: "消保审核",
            name: "消保审核",
            id: "6",
            to: "/Home/cliniclist",
          },
          {
            label: "投诉预警",
            name: "投诉预警",
            id: "7",
            to: "/Home/index",
          },
          {
            label: "投诉管理驾驶舱",
            name: "投诉管理驾驶舱",
            id: "8",
            to: "/Home/cliniclist",
          }
        ],
        breadnav: [],
        // nowDates: ''
      };
    },
    created() {
      this.breadnav = this.$route.meta.breadnav;
      if (JSON.parse(sessionStorage.getItem("count")) == null) return false;
      else this.count = JSON.parse(sessionStorage.getItem("count"));
      this.topactive = JSON.parse(sessionStorage.getItem("routername")).topactive;
      this.leftactive = JSON.parse(
        sessionStorage.getItem("routername")
      ).leftactive;
      this.activeid = JSON.parse(sessionStorage.getItem("routername")).activeid;
      // this.getDates()
    },
  
  methods: {
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
    methods: {
      // 获取当前的日期
      getDates(){
        var day2 = new Date();
        day2.setTime(day2.getTime());
        var s2 = day2.getFullYear()+"年" + (day2.getMonth()+1) + "月" + day2.getDate() + '日';
        this.nowDates = s2;
      },
      leftclick(item) {
        this.leftactive = item.name;
        this.$router.push({path: item.to});
        sessionStorage.setItem("routername", JSON.stringify({topactive: item.label, leftactive: item.name, activeid: item.id,}));
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
        this.$router.push({path: item.to});
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
    watch: {
      $route(to) {
        this.breadnav = to.meta.breadnav;
        // 跳转到平台库中修改面包屑
        if (to.query.type === "serviceLibrary") {
          this.breadnav = this.serviceNav;
        } else if (to.query.type === "productdetail") {
          this.breadnav = this.proNav;
        }
        if (to.meta.name != undefined)
          this.count.unshift({name: to.meta.name, path: to.path});
        let hash = {};
        this.count = this.count.reduce((item, next) => {
          hash[next.name] ? "" : (hash[next.name] = true && item.push(next));
          return item;
        }, []);
        sessionStorage.setItem("count", JSON.stringify(this.count));
      },
    },
    //退出登录
    quit(name) {
      if (name == 1) {
        sessionStorage.clear();
        this.$router.push("/");
      }
    },
  },

  watch: {
    $route(to) {
      this.breadnav = to.meta.breadnav;
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
</style>
