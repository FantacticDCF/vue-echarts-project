<template>
    <div class="fuzzySearch" @mouseleave="mouseout()">
        <div class="aborder" :style="setBackgroundBg">
            <span>工单查询</span>
            <span class="searchbox">
                 <input
                    type="text"
                    class="input-border"
                    placeholder="输入关键词查询"
                    :style="setBackgroundBg"
                    v-model="content"
                    @input="handleInput"
                    @change="handlechange"
                    @keydown.down="changeDown()"
                    @keydown.up="changeUp()"
                    @focus="bluron()"
                />
                <ul class="fuzzy-data-ul">
                    <!-- 这里注意给class添加属性的时候采用的是{属性:true/false}的形式 -->
                    <li id="fuzzy-data-ul-li" v-for="(item, index) in myData" :key="index" :class="{grey: index==now}" @click="handleChose(item)">
                        {{item.title}}
                    </li>
                </ul>
            </span>
            <span>
                <i class="el-icon-search iconSearch"></i>
            </span>
        </div>
        
    </div>
</template>
<script>
import dataList from './data.json';
export default {
    data(){
        return {
            setBackgroundBg: {
            //上方搜索
                backgroundImage:
                    "url(" + require("../assets/images/big-border.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
            },
            searchList:[
                {title : '啦啦啦啦', id: 1},
                {title : '哈哈哈哈', id: 2},
                {title : '嘻嘻嘻嘻', id: 3},
                {title : '略略略略', id: 4},
                {title : '噜噜噜噜', id: 5},
            ],
            myData: [],
            content: '',
            now: -1,
            dataleval: '',
            allData: ''
        }
    },
    methods:{
        get(ev) {
            // let that = this;
            document.getElementsByClassName('fuzzy-data-ul')[0].style.display = 'block'
            // 这里的键码只能通过事件对象$event传进来，因为输入大多数键都应该可以进行搜素，我们要排除的就是up(38)和down(40)
            if (ev.keyCode == 38 || ev.keyCode == 40) {
                return;
            }
            // 这里当按下的键是Enter时，应实现搜索跳转功能
            if(ev.keyCode == 13) {
                // that.content = '';
                this.resetStyle()
            }
            
            // this.$axios.get('/api/sugrec?wd=' + that.content, {})
            // .then(function(res) {
            //     that.myData = res.data.s;
            // }, function() {
            //     alert("搜索失败");
            // })
        },
        changeDown() {
            this.now++;
            if(this.now == this.myData.length) {
                this.now = -1;
            }
            // 这里实现输入框中也显示同样的内容
            this.content = this.myData[this.now].title;
        },
        changeUp() {
            this.now--;
            console.log(this.now,999,this.myData)
            if (this.now == -2) {
                this.now = this.myData.length-1;
            }
            this.content = this.myData[this.now].title;
        },
        bluron(){
            // console.log(111111111)
            // document.getElementsByClassName('fuzzy-data-ul')[0].style.display = 'block'
            // this.$forceUpdate()
        },
        handleChose(item){
            this.content = item.title;
            document.getElementsByClassName('fuzzy-data-ul')[0].style.display = 'none'
        },
        mouseout(){
            this.resetStyle()
        },
        // 模糊查询
        handleInput(){
            this.myData = [];
            this.dataleval = ''
            this.now = -1
            document.getElementsByClassName('fuzzy-data-ul')[0].style.display = 'block'
            if(this.content.length > 0){
                this.myData = dataList.filter(item => {
                    return item.title.search(this.content) !== -1
                })
            }
        },
        handlechange () { 
            let self = this 
            this.handleInput()  
            dataList.forEach(item => {
                if(item.title == this.content){
                    self.dataleval = item.leval   // 判断输入内容属于哪个级别
                }
            });
            this.resetStyle()
           console.log(this.dataleval)
        },
        // 清空li选中样式
        resetStyle(){
            let domselect = document.querySelector(".grey");
            if (domselect) {
                domselect.classList.toggle("grey");  //离开清空ul里面选中的li的样式
            }
            document.getElementsByClassName('fuzzy-data-ul')[0].style.display = 'none'
            this.now = -1
        }
    },
    mounted() {
        
    },
    // watch:{
    //     // 监听input值的变化
    //     content(newval){
    //         let that = this;
    //         // that.searchItem()
    //         dataList.forEach(item => {
    //             if(item.title == newval){
    //                 that.dataleval = item.leval   // 判断输入内容属于哪个级别
    //             }
    //         });
    //         console.log(that.dataleval)
    //     }
    // },
    created(){
        // this.myData = dataList;
        // console.log(dataList,123)
    }
}
</script>
<style lang="less">
.fuzzySearch{
    width: 55%;
}
.aborder {
  text-indent: 25px;
  color: #1a83c0;
  // margin-top: 10px;
  width: 100%;
  height: 40px;
}
.aborder span{
    float: left;
    line-height: 40px;
}
.searchbox{
    width: 70%;
}
.input-border {
  border: none;
  color: #1a83c0;
  width: 95%;
//   height: 90%;
  text-indent: 15px;
  font-size: 10px;
  outline: none;
  margin: 4px 0;
  line-height: 32px;
}
input::-webkit-input-placeholder {
  color: #59dfff;
} 
.fuzzy-data-ul{
    width: 95%;
    background: #fff;
    margin-left: 25px;
    text-indent: 15px;
    border-radius: 3px;
}
#fuzzy-data-ul-li{
    cursor: pointer;
}
#fuzzy-data-ul-li:hover{
    background: #ccc;
}
.grey{
    background: #ccc;
}
</style>