let pubics=[
    {
        path: '/',
        name: 'publicslogin',
        component: ()=>import("@/views/publics/login")//登录
    },
    {
        path: '/register',
        name: 'register',
        component: ()=>import("@/views/publics/register")//注册
    },
    {
        path: '/bigData',
        name: 'bigData',
        component: ()=>import("@/views/publics/bigData/bigDataIndex")//注册
    },
    {
        path: '/Home',
        name: 'publicsHome',
        component: ()=>import("@/views/publics/Home"),//后台
        children:[
            // {
            //     path: '/Home/index',
            //     name: 'publicsindex',
            //     component: ()=>import("@/views/publics/Home/index"),
            //     meta:{breadnav:[{path:'',name:'HOME1'}],name:'HOME1'}//营业数据
            // },
            {
                path: '/Home/business',
                name: 'publicsbusiness',
                component: ()=>import("@/views/publics/Home/business"),
                meta:{breadnav:[{path:'/Home/business',name:'投诉压降'}],name:'投诉压降'}//投诉压降
            },
            {
                path: '/Home/plan',
                name: 'businessplan',
                component: ()=>import("@/views/publics/Home/plan"),
                meta:{breadnav:[{path:'/Home/plan',name:'投诉压降计划'}],name:'投诉压降计划'}//投诉压降计划
            },
            {
                path: '/Home/losspressure',
                name: 'losspressure',
                component: ()=>import("@/views/publics/losspressure/losspressure"),
                meta:{breadnav:[{path:'/Home/losspressure',name:'压降目标'}],name:'压降目标'}//压降目标
            },
            {
                path: '/Home/serch',
                name: 'serch',
                component: ()=>import("@/views/publics/search/serch"),
                meta:{breadnav:[{path:'/Home/serch',name:'查询'}],name:'查询'}//机构
            },
            {
                path: '/Home/regulatorySubmitted',
                name: 'regulatorySubmitted',
                component: ()=>import("@/views/publics/regulatorySubmitted/regulatorySubmitted"),
                meta:{breadnav:[{path:'/Home/regulatorySubmitted',name:'监管报送'}],name:'监管报送'}//监管报送
            },
            {
                path: '/Home/complaintAnalysis',
                name: 'complaintAnalysis',
                component: ()=>import("@/views/publics/complaintAnalysis/complaintAnalysis"),
                meta:{breadnav:[{path:'/Home/complaintAnalysis',name:'投诉分析报告模版'}],name:'投诉分析报告模版'}//投诉分析报告模版
            },
            {
                path: '/Home/fromAudit',
                name: 'fromAudit',
                component: ()=>import("@/views/publics/fromAudit/fromAudit"),
                meta:{breadnav:[{path:'/Home/fromAudit',name:'消保审核'}],name:'消保审核'}//消保审核
            },
            {
                path: '/Home/complaintsWarning',
                name: 'complaintsWarning',
                component: ()=>import("@/views/publics/complaintsWarning/complaintsWarning"),
                meta:{breadnav:[{path:'/Home/complaintsWarning',name:'投诉预警'}],name:'投诉预警'}//投诉预警
            },
            {
                path: '/Home/complaintCockpit',
                name: 'complaintCockpit',
                component: ()=>import("@/views/publics/complaintCockpit/complaintCockpit"),
                meta:{breadnav:[{path:'/Home/complaintCockpit',name:'投诉管理驾驶舱'}],name:'投诉管理驾驶舱'}//投诉管理驾驶舱
            },
       ]
    }
]
export default pubics