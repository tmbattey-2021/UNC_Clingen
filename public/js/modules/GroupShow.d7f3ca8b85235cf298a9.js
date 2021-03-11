(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/vKN":function(e,t,r){"use strict";var n=r("j6Wa"),a=(r("vDqi"),function(e){var t="/api/curations?"+function(e){var t=["page="+(e.currentPage?e.currentPage:1)];for(var r in delete e.currentPage,e)null!==e[r]&&void 0!==e[r]&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")}(e);return axios.get(t)}),i=r("LqiT"),o=r.n(i),s=r("L2JU");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={components:{DeleteButton:n.a},props:{sortBy:{type:String,default:"gene_symbol"},sortDir:{type:Boolean,default:!1},searchParams:{type:Object,default:function(){return{}}},pageLength:{type:Number,default:10}},data:function(){return{filterField:null,filter:null,currentPage:1,sortDesc:"desc"==this.sortDir,sortKey:JSON.parse(JSON.stringify(this.sortBy)),totalRows:0,searchFieldId:"search-filter-".concat(o()()),fields:[{key:"gene_symbol",label:"Gene Symbol",sortable:!0,filterable:!0},{key:"mode_of_inheritance",label:"MOI",sortable:!0,filterable:!0},{key:"mondo_id",label:"Disease Entity",sortable:!0,filterable:!0,thStyle:{width:"9rem"}},{key:"expert_panel",label:"Expert Panel",filterable:!0,sortable:!0},{key:"curator",label:"Curator",sortable:!0},{key:"current_status",label:"Status",sortable:!1,thStyle:{width:"8rem"}},{key:"actions",label:"",sortable:!1,thStyle:{width:"7rem"}}],ctx:null}},computed:c(c({},Object(s.c)({user:"getUser"})),{},{loading:function(){return!1},filterableFields:function(){return this.fields.filter((function(e){return e.filterable}))}}),watch:{filter:function(e,t){e!=t&&this.resetCurrentPage()},filterField:function(){this.$refs.table.refresh()}},methods:{curationProvider:function(e,t){var r=this;if(e!=this.ctx){var n=c(c(c({},e),this.searchParams),{filter_field:this.filterField});this.filterField&&(n.filter_field=this.filterField),console.info("context",n),a(n).then((function(e){r.totalRows=e.data.meta.total,t(e.data.data)}))}},resetCurrentPage:function(){this.currentPage=1},getDiseaseEntityColumn:function(e){if(e.mondo_id)return e.mondo_id+" ("+e.mondo_name+")";if(e.disease_entity_notes){var t=e.disease_entity_notes;return t.length>32&&(t=t.substr(0,32)+"…"),t}return null},handleFiltered:function(){this.resetCurrentPage()},handleSortChanged:function(){this.resetCurrentPage()}}},p=r("KHd+"),f=Object(p.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"curations-table"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"row mb-2"},[r("div",{staticClass:"col-md-6 form-inline"},[r("label",{attrs:{for:e.searchFieldId}},[e._v("Search:")]),e._v(" \n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.filterField,expression:"filterField"}],staticClass:"form-control form-control-sm",attrs:{name:"",id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterField=t.target.multiple?r:r[0]}}},[r("option",{domProps:{value:null}},[e._v("Any Field")]),e._v(" "),e._l(e.filterableFields,(function(t){return r("option",{key:t.name,domProps:{value:t.key}},[e._v(e._s(t.label))])}))],2),e._v("\n             \n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"form-control form-control-sm",attrs:{placeholder:"search curations",id:e.searchFieldId},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":e.totalRows,"per-page":e.pageLength},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"text-center"},[r("p",{staticClass:"lead"},[e._v("loading...")])]),e._v(" "),r("b-table",{ref:"table",attrs:{striped:"",hover:"",items:e.curationProvider,fields:e.fields,filter:e.filter,"per-page":e.pageLength,"current-page":e.currentPage,"sort-by":e.sortKey,"sort-desc":e.sortDesc,"no-local-sorting":!0,"show-empty":!0},on:{"sort-changed":e.handleSortChanged,"update:sortBy":function(t){e.sortKey=t},"update:sort-by":function(t){e.sortKey=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"table-busy",fn:function(){return[r("center",[e._v("Loading...")])]},proxy:!0},{key:"cell(gene_symbol)",fn:function(t){var n=t.item;return[r("router-link",{attrs:{id:"show-curation-"+n.id+"-link",to:"/curations/"+n.id}},[e._v("\n                "+e._s(n.gene_symbol)+"\n            ")]),e._v(" "),n.hgnc_id?r("small",[e._v("(hgnc:"+e._s(n.hgnc_id)+")")]):e._e()]}},{key:"cell(mode_of_inheritance)",fn:function(t){var n=t.item;return[null!==n.mode_of_inheritance?r("div",[r("div",{attrs:{title:n.mode_of_inheritance.name}},[e._v("\n                    "+e._s(n.mode_of_inheritance.abbreviation)+"\n                ")])]):e._e()]}},{key:"cell(expert_panel)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(n.expert_panel?n.expert_panel.name:null))])]}},{key:"cell(curator)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(n.curator?n.curator.name:null))])]}},{key:"cell(current_status)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(n.current_status?n.current_status.name:null))])]}},{key:"cell(mondo_id)",fn:function(t){var n=t.item;return[r("div",[e._v(e._s(e.getDiseaseEntityColumn(n)))])]}},{key:"cell(actions)",fn:function(t){var n=t.item;return[r("div",[e.user.canEditCuration(n)?r("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{id:"edit-curation-"+n.id+"-btn",to:"/curations/"+n.id+"/edit"}},[e._v("\n                    Edit\n                ")]):e._e(),e._v(" "),r("delete-button",{staticClass:"btn-sm",attrs:{curation:n}},[r("span",{staticClass:"fa fa-trash"},[e._v("X")])])],1)]}}])}),e._v(" "),r("div",{staticClass:"row border-top pt-4"},[r("div",{staticClass:"col-md-6"},[e._v("Total Records: "+e._s(e.totalRows))]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":e.totalRows,"per-page":e.pageLength},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])],1)}),[],!1,null,null,null);t.a=f.exports},LqiT:function(e,t,r){(function(t){e.exports=function(e,r){var n;void 0===e&&(e="");var a=function(e,t){return t<(e=parseInt(e,10).toString(16)).length?e.slice(e.length-t):t>e.length?Array(t-e.length+1).join("0")+e:e},i="undefined"!=typeof window?window:t;i.$locutus=i.$locutus||{};var o=i.$locutus;return o.php=o.php||{},o.php.uniqidSeed||(o.php.uniqidSeed=Math.floor(123456789*Math.random())),o.php.uniqidSeed++,n=e,n+=a(parseInt((new Date).getTime()/1e3,10),8),n+=a(o.php.uniqidSeed,5),r&&(n+=(10*Math.random()).toFixed(8).toString()),n}}).call(this,r("yLpj"))},iyXR:function(e,t,r){"use strict";r.r(t);var n=r("L2JU"),a=r("/vKN"),i=r("LvDl");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={props:["id"],components:{CurationsTable:a.a},beforeRouteUpdate:function(e,t,r){this.fetchGroup(this.id),r()},data:function(){return{hasPanels:!1,loading:!1}},computed:s(s({},Object(n.c)("workingGroups",{groups:"Items",getGroup:"getItemById"})),{},{group:function(){if(0==this.groups.length)return{};var e=this.getGroup(this.id);return this.hasPanels=e&&e.expert_panels&&e.expert_panels.length>0,e}}),methods:s(s({},Object(n.b)("workingGroups",{fetchGroup:"fetchItem"})),{},{getUserRoles:function(e){var t=e.roles.map((function(e){return Object(i.startCase)(e.name)}));return e.pivot.is_coordinator&&t.push("Coordinator"),e.pivot.is_curator&&t.push("Curator"),t}}),mounted:function(){var e=this;this.loading=!0,this.fetchGroup(this.id).then((function(t){e.loading=!1})).catch((function(t){e.loading=!1}))}},u=r("KHd+"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("router-link",{attrs:{to:"/working-groups"}},[e._v("\n            Working groups \n        ")]),e._v("\n        >\n        "),r("router-link",{attrs:{to:"/working-groups/"+e.group.id}},[e._v("\n            "+e._s(e.group.name)+"\n        ")])],1),e._v(" "),r("div",{staticClass:"Working group detail card"},[r("div",{staticClass:"card-header"},[r("h3",[e._v(e._s(e.group.name))])]),e._v(" "),r("div",{staticClass:"card-body"},[r("h4",[e._v("Expert Panels")]),e._v(" "),r("b-tabs",{directives:[{name:"show",rawName:"v-show",value:e.hasPanels,expression:"hasPanels"}],attrs:{pills:"",card:"",vertical:"","nav-wrapper-class":"w-25"}},e._l(e.group.expert_panels,(function(t){return r("b-tab",{key:t.id,attrs:{title:t.name}},[r("b-tabs",[r("b-tab",{attrs:{title:"People"}},[r("template",{slot:"title"},[e._v("\n                                People  "),r("span",{staticClass:"badge  badge-pill badge-primary"},[e._v(e._s(t.users.length))])]),e._v(" "),r("table",{staticClass:"table table-striped"},[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Email")]),e._v(" "),r("th",[e._v("Roles")])])]),e._v(" "),r("tbody",e._l(t.users,(function(t){return r("tr",{key:t.id},[r("td",[e._v(e._s(t.name))]),e._v(" "),r("td",[e._v(e._s(t.email))]),e._v(" "),r("td",[e._v("\n                                            "+e._s(e.getUserRoles(t).join(", "))+"\n                                        ")])])})),0)])],2),e._v(" "),r("b-tab",[r("template",{slot:"title"},[e._v("\n                                Curations "),r("span",{staticClass:"badge  badge-pill badge-primary"},[e._v(e._s(t.curations.length))])]),e._v(" "),r("ul",{staticClass:"list-unstyled mt-2"},[r("li",{staticClass:"border-bottom"},[t.curations&&t.curations.length>0?r("curations-table",{attrs:{"page-length":5,"search-params":{expert_panel_id:t.id}}}):r("div",{staticClass:"alert alert-secondary"},[e._v("\n                                        "+e._s(t.name)+" doesn't have any curations yet.\n                                    ")])],1)])],2)],1)],1)})),1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.hasPanels&&!e.loading,expression:"!hasPanels && !loading"}],staticClass:"alert alert-secondary"},[e._v("\n                This working group does not have any expert panels\n            ")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"alert alert-secondary"},[e._v("\n                Loading …\n            ")])],1)])])}),[],!1,null,null,null);t.default=d.exports},j6Wa:function(e,t,r){"use strict";var n=r("L2JU");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s={props:{curation:{required:!0,type:Object}},data:function(){return{}},computed:i(i({},Object(n.c)({user:"getUser"})),{},{title:function(){var e="";return this.curation&&this.curation.gene_symbol&&(e+=this.curation.gene_symbol,this.curation.mondo_id&&(e+=" / "+this.curation.mondo_id),this.curation.expert_panel&&(e+=" for "+this.curation.expert_panel.name)),e}}),methods:i(i(i({},Object(n.b)("curations",{destroyCuration:"destroyItem"})),Object(n.d)("messages",["addInfo","addError"])),{},{deleteCuration:function(){var e=this;if(confirm("You're about to delete "+this.title+". This can not be undone.  Are you sure you want to continue?")){this.$router.push("/");var t=this.title;this.destroyCuration(this.curation.id).then((function(r){e.addInfo(t+" was successfully deleted.")})).catch((function(r){var n="There was a problem deleting"+t;403==r.response.status&&(n="You do not have permissions to delete curations.  Please contact an adminstrator to help you delete the curation."),e.addError(n)}))}}})},l=r("KHd+"),c=Object(l.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user.canDeleteCuration(e.curation)?r("button",{staticClass:"btn btn-danger",attrs:{id:"delete-curation-"+e.curation.id+"-btn"},on:{click:function(t){return e.deleteCuration(e.curation)}}},[e._t("default",[e._v("Delete")])],2):e._e()}),[],!1,null,null,null);t.a=c.exports}}]);
//# sourceMappingURL=GroupShow.d7f3ca8b85235cf298a9.js.map