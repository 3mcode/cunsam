(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c902f568"],{"42b0":function(t,e,a){},a290:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",{attrs:{"is-back":!1}},[a("el-form",{staticClass:"form-box cs-m",attrs:{"label-width":"150px","label-position":"left"}},[a("el-form-item",{attrs:{label:"授权状态",size:"small"}},[t.status?[a("el-button",{attrs:{type:"success"}},[t._v("已授权")])]:[a("el-button",{attrs:{type:"danger"},on:{click:t.handleOpen}},[t._v("未授权")])]],2),a("el-form-item",{attrs:{label:"授权版本"}},[a("span",[t._v(t._s(t.version))])]),a("el-form-item",{attrs:{label:"授权域名"}},[a("span",[t._v(t._s(t.domain))])]),a("el-form-item",{attrs:{label:"服务到期"}},[a("span",[t._v(t._s(t.service))])]),a("el-form-item",{attrs:{label:"授权年限"}},[a("span",[t._v(t._s(t.authorize))])]),a("el-form-item",{attrs:{label:"后台管理版本号"}},[a("el-tag",[t._v(t._s(t.adminVersion))])],1),a("el-form-item",{attrs:{label:"后台最新版本号"}},[a("el-tag",{attrs:{type:t.checkVersion(t.adminLatest,t.adminVersion)}},[t._v(t._s(t.adminLatest))])],1),a("el-form-item",{attrs:{label:"框架内核版本号"}},[a("el-tag",[t._v(t._s(t.kernelVersion))])],1),a("el-form-item",{attrs:{label:"框架最新版本号"}},[a("el-tag",{attrs:{type:t.checkVersion(t.kernelLatest,t.kernelVersion)}},[t._v(t._s(t.kernelLatest))])],1),a("el-form-item",{attrs:{size:"small"}},[a("el-button",{attrs:{loading:t.loading},on:{click:t.getAuthorizeData}},[t._v("刷新")])],1)],1)],1)},s=[],i=(a("d3b7"),a("ca00")),r=a("2400"),o={name:"setting-app-authorize",data:function(){return{loading:!1,status:0,version:"",domain:"",service:"",authorize:"",adminVersion:"1.7.7",kernelVersion:"0.0.0",adminLatest:"0.0.0",kernelLatest:"0.0.0"}},mounted:function(){this.getAuthorizeData()},methods:{handleOpen:function(){this.$open("https://careyshop.cn/pricing")},checkVersion:function(t,e){return i["a"].compareVersion(t,e)?"danger":"info"},getAuthorizeData:function(){var t=this;Object(r["c"])().then((function(e){e.data&&(t.kernelVersion=e.data.version)})),this.loading=!0,this.$axios({url:"https://api.careyshop.cn/api/v1/authorize.html",method:"post",headers:{"Content-Type":"text/plain; charset=utf-8"},data:{method:"check.authorize.item",domain:document.location.host,version:"professional"}}).then((function(e){e.data&&(t.status=e.data.status,t.version=e.data.version,t.domain=e.data.domain,t.service=e.data.service,t.authorize=e.data.authorize,t.adminLatest=e.data.admin_latest,t.kernelLatest=e.data.kernel_latest)})).finally((function(){t.loading=!1}))}}},l=o,c=(a("dd78"),a("2877")),d=Object(c["a"])(l,n,s,!1,null,"2b57dd2c",null);e["default"]=d.exports},dd78:function(t,e,a){"use strict";var n=a("42b0"),s=a.n(n);s.a}}]);