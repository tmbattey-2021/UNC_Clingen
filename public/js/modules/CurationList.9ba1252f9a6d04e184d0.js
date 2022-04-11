(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/vKN":function(t,e,r){"use strict";r("vDqi");var n=function(t){var e="/api/curations?"+function(t){var e=["page="+(t.currentPage?t.currentPage:1)];for(var r in delete t.currentPage,t)null!==t[r]&&void 0!==t[r]&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}(t);return axios.get(e)},a=r("LqiT"),i=r.n(a),o=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={components:{DeleteButton:r("j6Wa").a},props:{sortBy:{type:String,default:"gene_symbol"},sortDir:{type:Boolean,default:!1},searchParams:{type:Object,default:function(){return{}}},pageLength:{type:Number,default:10}},data:function(){var t=this;return{filterField:null,filter:null,currentPage:1,sortDesc:"desc"==this.sortDir,sortKey:JSON.parse(JSON.stringify(this.sortBy)),totalRows:0,searchFieldId:"search-filter-".concat(i()()),fields:[{key:"gene_symbol",label:"Gene Symbol",sortable:!0,filterable:!0},{key:"mode_of_inheritance",label:"MOI",sortable:!0,filterable:!0},{key:"mondo_id",label:"Disease Entity",sortable:!0,filterable:!0,thStyle:{width:"9rem"}},{key:"expert_panel",label:"Expert Panel",filterable:!0,sortable:!0},{key:"curator",label:"Curator",sortable:!0},{key:"current_status",label:"Status",sortable:!1,thStyle:{width:"8rem"}},{key:"created_at",label:"created",sortable:!0,formatter:function(e){return t.$options.filters.formatDate(e,"YYYY-MM-DD")}},{key:"actions",label:"",sortable:!1,thStyle:{width:"7rem"}}],ctx:null}},computed:l(l({},Object(o.c)({user:"getUser"})),{},{loading:function(){return!1},filterableFields:function(){return this.fields.filter((function(t){return t.filterable}))}}),watch:{filter:function(t,e){t!=e&&this.resetCurrentPage()},filterField:function(){this.$refs.table.refresh()}},methods:{curationProvider:function(t,e){var r=this;if(t!=this.ctx){var a=l(l(l({},t),this.searchParams),{filter_field:this.filterField});this.filterField&&(a.filter_field=this.filterField),n(a).then((function(t){r.totalRows=t.data.meta.total,e(t.data.data)}))}},resetCurrentPage:function(){this.currentPage=1},getDiseaseEntityColumn:function(t){if(t.mondo_id&&t.disease)return t.mondo_id+" ("+t.disease.name+")";if(t.disease_entity_notes){var e=t.disease_entity_notes;return e.length>32&&(e=e.substr(0,32)+"…"),e}return null},handleFiltered:function(){this.resetCurrentPage()},handleSortChanged:function(){this.resetCurrentPage()}}},d=r("KHd+"),f=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"curations-table"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"row mb-2"},[r("div",{staticClass:"col-md-6 form-inline"},[r("label",{attrs:{for:t.searchFieldId}},[t._v("Search:")]),t._v(" \n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.filterField,expression:"filterField"}],staticClass:"form-control form-control-sm",attrs:{name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filterField=e.target.multiple?r:r[0]}}},[r("option",{domProps:{value:null}},[t._v("Any Field")]),t._v(" "),t._l(t.filterableFields,(function(e){return r("option",{key:e.name,domProps:{value:e.key}},[t._v(t._s(e.label))])}))],2),t._v("\n             \n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control form-control-sm",attrs:{placeholder:"search curations",id:t.searchFieldId},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":t.totalRows,"per-page":t.pageLength},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"text-center"},[r("p",{staticClass:"lead"},[t._v("loading...")])]),t._v(" "),r("b-table",{ref:"table",attrs:{striped:"",hover:"",items:t.curationProvider,fields:t.fields,filter:t.filter,"per-page":t.pageLength,"current-page":t.currentPage,"sort-by":t.sortKey,"sort-desc":t.sortDesc,"no-local-sorting":!0,"show-empty":!0},on:{"sort-changed":t.handleSortChanged,"update:sortBy":function(e){t.sortKey=e},"update:sort-by":function(e){t.sortKey=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[r("center",[t._v("Loading...")])]},proxy:!0},{key:"cell(gene_symbol)",fn:function(e){var n=e.item;return[r("router-link",{attrs:{id:"show-curation-"+n.id+"-link",to:"/curations/"+n.id}},[t._v("\n                "+t._s(n.gene_symbol)+"\n            ")]),t._v(" "),n.hgnc_id?r("small",[t._v("(hgnc:"+t._s(n.hgnc_id)+")")]):t._e()]}},{key:"cell(mode_of_inheritance)",fn:function(e){var n=e.item;return[null!==n.mode_of_inheritance?r("div",[r("div",{attrs:{title:n.mode_of_inheritance.name}},[t._v("\n                    "+t._s(n.mode_of_inheritance.abbreviation)+"\n                ")])]):t._e()]}},{key:"cell(expert_panel)",fn:function(e){var n=e.item;return[r("div",[t._v(t._s(n.expert_panel?n.expert_panel.name:null))])]}},{key:"cell(curator)",fn:function(e){var n=e.item;return[r("div",[t._v(t._s(n.curator?n.curator.name:null))])]}},{key:"cell(current_status)",fn:function(e){var n=e.item;return[r("div",[t._v(t._s(n.current_status?n.current_status.name:null))])]}},{key:"cell(mondo_id)",fn:function(e){var n=e.item;return[r("div",[t._v(t._s(t.getDiseaseEntityColumn(n)))])]}},{key:"cell(actions)",fn:function(e){var n=e.item;return[r("div",[t.user.canEditCuration(n)?r("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{id:"edit-curation-"+n.id+"-btn",to:"/curations/"+n.id+"/edit"}},[t._v("\n                    Edit\n                ")]):t._e(),t._v(" "),r("delete-button",{staticClass:"btn-sm",attrs:{curation:n}},[r("span",{staticClass:"fa fa-trash"},[t._v("X")])])],1)]}}])}),t._v(" "),r("div",{staticClass:"row border-top pt-4"},[r("div",{staticClass:"col-md-6"},[t._v("Total Records: "+t._s(t.totalRows))]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":t.totalRows,"per-page":t.pageLength},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])],1)}),[],!1,null,null,null);e.a=f.exports},LqiT:function(t,e,r){(function(e){t.exports=function(t,r){var n;void 0===t&&(t="");var a=function(t,e){return e<(t=parseInt(t,10).toString(16)).length?t.slice(t.length-e):e>t.length?Array(e-t.length+1).join("0")+t:t},i="undefined"!=typeof window?window:e;i.$locutus=i.$locutus||{};var o=i.$locutus;return o.php=o.php||{},o.php.uniqidSeed||(o.php.uniqidSeed=Math.floor(123456789*Math.random())),o.php.uniqidSeed++,n=t,n+=a(parseInt((new Date).getTime()/1e3,10),8),n+=a(o.php.uniqidSeed,5),r&&(n+=(10*Math.random()).toFixed(8).toString()),n}}).call(this,r("yLpj"))},j6Wa:function(t,e,r){"use strict";var n=r("L2JU");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={props:{curation:{required:!0,type:Object}},data:function(){return{}},computed:i(i({},Object(n.c)({user:"getUser"})),{},{title:function(){var t="";return this.curation&&this.curation.gene_symbol&&(t+=this.curation.gene_symbol,this.curation.mondo_id&&(t+=" / "+this.curation.mondo_id),this.curation.expert_panel&&(t+=" for "+this.curation.expert_panel.name)),t}}),methods:i(i(i({},Object(n.b)("curations",{destroyCuration:"destroyItem"})),Object(n.d)("messages",["addInfo","addError"])),{},{deleteCuration:function(){var t=this;if(confirm("You're about to delete "+this.title+". This can not be undone.  Are you sure you want to continue?")){this.$router.push("/");var e=this.title;this.destroyCuration(this.curation.id).then((function(r){t.addInfo(e+" was successfully deleted.")})).catch((function(r){var n="There was a problem deleting"+e;403==r.response.status&&(n="You do not have permissions to delete curations.  Please contact an adminstrator to help you delete the curation."),t.addError(n)}))}}})},l=r("KHd+"),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.user.canDeleteCuration(t.curation)?r("button",{staticClass:"btn btn-danger",attrs:{id:"delete-curation-"+t.curation.id+"-btn"},on:{click:function(e){return t.deleteCuration(t.curation)}}},[t._t("default",[t._v("Delete")])],2):t._e()}),[],!1,null,null,null);e.a=c.exports},rR3z:function(t,e,r){"use strict";r.r(e);var n={components:{CurationsTable:r("/vKN").a}},a=r("KHd+"),i=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",{staticClass:"float-right"},[e("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{to:"/curations/export"}},[this._v("Download CSV")])],1),this._v(" "),e("h3",[this._v("All Curations")])]),this._v(" "),e("div",{staticClass:"card-body"},[e("curations-table")],1)])}),[],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=CurationList.9ba1252f9a6d04e184d0.js.map