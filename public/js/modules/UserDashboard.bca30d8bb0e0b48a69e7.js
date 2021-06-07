(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/vKN":function(e,t,r){"use strict";var n=r("j6Wa"),i=(r("vDqi"),function(e){var t="/api/curations?"+function(e){var t=["page="+(e.currentPage?e.currentPage:1)];for(var r in delete e.currentPage,e)null!==e[r]&&void 0!==e[r]&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")}(e);return axios.get(t)}),o=r("LqiT"),a=r.n(o),s=r("L2JU");r("XuAf");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={components:{DeleteButton:n.a},props:{sortBy:{type:String,default:"gene_symbol"},sortDir:{type:Boolean,default:!1},searchParams:{type:Object,default:function(){return{}}},pageLength:{type:Number,default:10}},data:function(){var e=this;return{filterField:null,filter:null,currentPage:1,sortDesc:"desc"==this.sortDir,sortKey:JSON.parse(JSON.stringify(this.sortBy)),totalRows:0,searchFieldId:"search-filter-".concat(a()()),fields:[{key:"gene_symbol",label:"Gene Symbol",sortable:!0,filterable:!0},{key:"mode_of_inheritance",label:"MOI",sortable:!0,filterable:!0},{key:"mondo_id",label:"Disease Entity",sortable:!0,filterable:!0,thStyle:{width:"9rem"}},{key:"expert_panel",label:"Expert Panel",filterable:!0,sortable:!0},{key:"curator",label:"Curator",sortable:!0},{key:"current_status",label:"Status",sortable:!1,thStyle:{width:"8rem"}},{key:"created_at",label:"created",sortable:!0,formatter:function(t){return e.$options.filters.formatDate(t,"YYYY-MM-DD")}},{key:"actions",label:"",sortable:!1,thStyle:{width:"7rem"}}],ctx:null}},computed:c(c({},Object(s.c)({user:"getUser"})),{},{loading:function(){return!1},filterableFields:function(){return this.fields.filter((function(e){return e.filterable}))}}),watch:{filter:function(e,t){e!=t&&this.resetCurrentPage()},filterField:function(){this.$refs.table.refresh()}},methods:{curationProvider:function(e,t){var r=this;if(e!=this.ctx){var n=c(c(c({},e),this.searchParams),{filter_field:this.filterField});this.filterField&&(n.filter_field=this.filterField),console.info("context",n),i(n).then((function(e){r.totalRows=e.data.meta.total,t(e.data.data)}))}},resetCurrentPage:function(){this.currentPage=1},getDiseaseEntityColumn:function(e){if(e.mondo_id)return e.mondo_id+" ("+e.mondo_name+")";if(e.disease_entity_notes){var t=e.disease_entity_notes;return t.length>32&&(t=t.substr(0,32)+"…"),t}return null},handleFiltered:function(){this.resetCurrentPage()},handleSortChanged:function(){this.resetCurrentPage()}}},f=r("KHd+"),p=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"curations-table"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"row mb-2"},[r("div",{staticClass:"col-md-6 form-inline"},[r("label",{attrs:{for:e.searchFieldId}},[e._v("Search:")]),e._v(" \n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.filterField,expression:"filterField"}],staticClass:"form-control form-control-sm",attrs:{name:"",id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterField=t.target.multiple?r:r[0]}}},[r("option",{domProps:{value:null}},[e._v("Any Field")]),e._v(" "),e._l(e.filterableFields,(function(t){return r("option",{key:t.name,domProps:{value:t.key}},[e._v(e._s(t.label))])}))],2),e._v("\n             \n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"form-control form-control-sm",attrs:{placeholder:"search curations",id:e.searchFieldId},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":e.totalRows,"per-page":e.pageLength},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"text-center"},[r("p",{staticClass:"lead"},[e._v("loading...")])]),e._v(" "),r("b-table",{ref:"table",attrs:{striped:"",hover:"",items:e.curationProvider,fields:e.fields,filter:e.filter,"per-page":e.pageLength,"current-page":e.currentPage,"sort-by":e.sortKey,"sort-desc":e.sortDesc,"no-local-sorting":!0,"show-empty":!0},on:{"sort-changed":e.handleSortChanged,"update:sortBy":function(t){e.sortKey=t},"update:sort-by":function(t){e.sortKey=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"table-busy",fn:function(){return[r("center",[e._v("Loading...")])]},proxy:!0},{key:"cell(gene_symbol)",fn:function(t){var n=t.item;return[r("router-link",{attrs:{id:"show-curation-"+n.id+"-link",to:"/curations/"+n.id}},[e._v("\n                "+e._s(n.gene_symbol)+"\n            ")]),e._v(" "),n.hgnc_id?r("small",[e._v("(hgnc:"+e._s(n.hgnc_id)+")")]):e._e()]}},{key:"cell(mode_of_inheritance)",fn:function(t){var n=t.item;return[null!==n.mode_of_inheritance?r("div",[r("div",{attrs:{title:n.mode_of_inheritance.name}},[e._v("\n                    "+e._s(n.mode_of_inheritance.abbreviation)+"\n                ")])]):e._e()]}},{key:"cell(expert_panel)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(n.expert_panel?n.expert_panel.name:null))])]}},{key:"cell(curator)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(n.curator?n.curator.name:null))])]}},{key:"cell(current_status)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(n.current_status?n.current_status.name:null))])]}},{key:"cell(mondo_id)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(e.getDiseaseEntityColumn(n)))])]}},{key:"cell(actions)",fn:function(t){var n=t.item;return[r("div",[e.user.canEditCuration(n)?r("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{id:"edit-curation-"+n.id+"-btn",to:"/curations/"+n.id+"/edit"}},[e._v("\n                    Edit\n                ")]):e._e(),e._v(" "),r("delete-button",{staticClass:"btn-sm",attrs:{curation:n}},[r("span",{staticClass:"fa fa-trash"},[e._v("X")])])],1)]}}])}),e._v(" "),r("div",{staticClass:"row border-top pt-4"},[r("div",{staticClass:"col-md-6"},[e._v("Total Records: "+e._s(e.totalRows))]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":e.totalRows,"per-page":e.pageLength},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])],1)}),[],!1,null,null,null);t.a=p.exports},2442:function(e,t,r){"use strict";r.r(t);var n=r("L2JU");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={components:{CurationsTable:r("/vKN").a},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.c)({user:"getUser"}))},s=r("KHd+"),l=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[this.user.canAddCurations()?t("router-link",{staticClass:"btn btn-secondary float-right btn-sm",attrs:{id:"new-curation-btn",to:"/curations/create"}},[this._v("\n            Add new Curation\n        ")]):this._e(),this._v(" "),t("h3",[this._v("Dashboard: Your Curations")])],1),this._v(" "),t("div",{staticClass:"card-body"},[t("curations-table",{attrs:{"search-params":{user_id:this.user.user.id}}})],1)])}),[],!1,null,null,null);t.default=l.exports},LqiT:function(e,t,r){(function(t){e.exports=function(e,r){var n;void 0===e&&(e="");var i=function(e,t){return t<(e=parseInt(e,10).toString(16)).length?e.slice(e.length-t):t>e.length?Array(t-e.length+1).join("0")+e:e},o="undefined"!=typeof window?window:t;o.$locutus=o.$locutus||{};var a=o.$locutus;return a.php=a.php||{},a.php.uniqidSeed||(a.php.uniqidSeed=Math.floor(123456789*Math.random())),a.php.uniqidSeed++,n=e,n+=i(parseInt((new Date).getTime()/1e3,10),8),n+=i(a.php.uniqidSeed,5),r&&(n+=(10*Math.random()).toFixed(8).toString()),n}}).call(this,r("yLpj"))},XuAf:function(e,t,r){"use strict";var n=r("XuX8"),i=r.n(n),o=r("wd/R"),a=r.n(o);i.a.filter("formatDate",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm";return null===e?null:a()(e).format(t)}))},j6Wa:function(e,t,r){"use strict";var n=r("L2JU");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s={props:{curation:{required:!0,type:Object}},data:function(){return{}},computed:o(o({},Object(n.c)({user:"getUser"})),{},{title:function(){var e="";return this.curation&&this.curation.gene_symbol&&(e+=this.curation.gene_symbol,this.curation.mondo_id&&(e+=" / "+this.curation.mondo_id),this.curation.expert_panel&&(e+=" for "+this.curation.expert_panel.name)),e}}),methods:o(o(o({},Object(n.b)("curations",{destroyCuration:"destroyItem"})),Object(n.d)("messages",["addInfo","addError"])),{},{deleteCuration:function(){var e=this;if(confirm("You're about to delete "+this.title+". This can not be undone.  Are you sure you want to continue?")){this.$router.push("/");var t=this.title;this.destroyCuration(this.curation.id).then((function(r){e.addInfo(t+" was successfully deleted.")})).catch((function(r){var n="There was a problem deleting"+t;403==r.response.status&&(n="You do not have permissions to delete curations.  Please contact an adminstrator to help you delete the curation."),e.addError(n)}))}}})},l=r("KHd+"),c=Object(l.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user.canDeleteCuration(e.curation)?r("button",{staticClass:"btn btn-danger",attrs:{id:"delete-curation-"+e.curation.id+"-btn"},on:{click:function(t){return e.deleteCuration(e.curation)}}},[e._t("default",[e._v("Delete")])],2):e._e()}),[],!1,null,null,null);t.a=c.exports}}]);
//# sourceMappingURL=UserDashboard.bca30d8bb0e0b48a69e7.js.map