(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-07b3"],{TFxQ:function(t,e,n){"use strict";n.r(e);var a=n("rY9o"),i={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{list:[{id:1,park:"佑威小区通道一B列",shareNum:23},{id:2,park:"建安小区通道一B列",shareNum:12},{id:3,park:"来福小区通道三C列",shareNum:9}]}},created:function(){},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(a.a)(this.listQuery).then(function(e){t.list=e.data.items,t.listLoading=!1})},deleteRow:function(t){var e=this;this.$confirm("是否删除选中车辆","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n=e.list.indexOf(t);e.list.splice(n,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},s=n("KHd+"),r=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"车位",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.park)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"共享次数",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.shareNum)+"次")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";e.default=r.exports},rY9o:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("t3Un");function i(t){return Object(a.a)({url:"/table/list",method:"get",params:t})}}}]);