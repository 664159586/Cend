(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0186"],{BKle:function(e,t,n){},GqWp:function(e,t,n){"use strict";var a=n("BKle");n.n(a).a},rY9o:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("t3Un");function l(e){return Object(a.a)({url:"/table/list",method:"get",params:e})}},yq5K:function(e,t,n){"use strict";n.r(t);var a=n("rY9o"),l={filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},data:function(){return{list:[{type:"我使用的",location:"银泰A区通道一B列",user:"阿波罗",tel:"13522311111",car:"浙A12345679",date:"2019-02-28",startTime:"15：00",parkTime:"1h 23min",fare:"25"},{type:"我使用的",location:"银泰A区通道一B列",user:"阿波罗",tel:"13522311111",car:"浙A12345679",date:"2019-02-28",startTime:"15：00",parkTime:"1h 23min",fare:"25"},{type:"我使用的",location:"银泰A区通道一B列",user:"阿波罗",tel:"13522311111",car:"浙A12345679",date:"2019-02-28",startTime:"15：00",parkTime:"1h 23min",fare:"25"}],type:"",daterange:"",options:[{value:"全部",label:"全部"},{value:"我使用的",label:"我使用的"},{value:"我发布的",label:"我发布的"}]}},created:function(){},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.a)(this.listQuery).then(function(t){e.list=t.data.items,e.listLoading=!1})},deleteRow:function(e){var t=this.list.indexOf(e);this.list.splice(t,1)},addCar:function(){this.list.push()}}},r=(n("GqWp"),n("KHd+")),s=Object(r.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"app-container-bar"},[n("el-select",{staticClass:"select",attrs:{placeholder:"请选择类型"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.daterange,callback:function(t){e.daterange=t},expression:"daterange"}}),e._v(" "),n("el-button",{attrs:{type:"primary"}},[e._v("查询")])],1),e._v(" "),n("el-table",{staticClass:"table",attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.type)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"地点",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.location)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"用户",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.tel)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"使用车辆",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.car)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.date)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"开始时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.startTime))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"停车时长",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.parkTime))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"费用(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.fare))])]}}])})],1)],1)},[],!1,null,"18d63b2f",null);s.options.__file="index.vue";t.default=s.exports}}]);