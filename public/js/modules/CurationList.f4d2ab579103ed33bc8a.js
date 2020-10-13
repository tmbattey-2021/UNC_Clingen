(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/vKN":function(t,e,n){"use strict";var r=n("j6Wa"),a=(n("vDqi"),function(t){var e="/api/curations?"+function(t){var e=["page="+(t.currentPage?t.currentPage:1)];for(var n in delete t.currentPage,t)null!==t[n]&&void 0!==t[n]&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}(t);return axios.get(e)}),o=n("LqiT"),i=n.n(o),s=n("L2JU");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={components:{DeleteButton:r.a},props:{sortBy:{type:String,default:"gene_symbol"},sortDir:{type:Boolean,default:!1},searchParams:{type:Object,default:function(){return{}}},pageLength:{type:Number,default:10}},data:function(){return{filter:null,currentPage:1,sortDesc:"desc"==this.sortDir,sortKey:JSON.parse(JSON.stringify(this.sortBy)),totalRows:0,searchFieldId:"search-filter-".concat(i()()),fields:[{key:"gene_symbol",label:"Gene Symbol",sortable:!0},{key:"mode_of_inheritance",label:"MOI",sortable:!0},{key:"mondo_id",label:"Disease Entity",sortable:!0,thStyle:{width:"9rem"}},{key:"expert_panel",label:"Expert Panel",sortable:!0},{key:"curator",label:"Curator",sortable:!0},{key:"current_status",label:"Status",sortable:!1,thStyle:{width:"8rem"}},{key:"actions",label:"",sortable:!1,thStyle:{width:"7rem"}}],ctx:null}},computed:l(l({},Object(s.c)({user:"getUser"})),{},{loading:function(){return!1}}),watch:{filter:function(t,e){t!=e&&this.resetCurrentPage()}},methods:{curationProvider:function(t,e){var n=this;if(t!=this.ctx){console.info("curationProvider called",t);var r=l(l({},t),this.searchParams);a(r).then((function(t){n.totalRows=t.data.meta.total,e(t.data.data)}))}else console.log("don't call again b/c context hasn't really changed")},resetCurrentPage:function(){this.currentPage=1},getDiseaseEntityColumn:function(t){if(t.mondo_id)return t.mondo_id+" ("+t.mondo_name+")";if(t.disease_entity_notes){var e=t.disease_entity_notes;return e.length>32&&(e=e.substr(0,32)+"…"),e}return null},handleFiltered:function(){this.resetCurrentPage()},handleSortChanged:function(){this.resetCurrentPage()}}},f=n("KHd+"),p=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curations-table"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"row mb-2"},[n("div",{staticClass:"col-md-6 form-inline"},[n("label",{attrs:{for:t.searchFieldId}},[t._v("Search:")]),t._v(" \n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{placeholder:"search curations",id:t.searchFieldId},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("b-pagination",{staticClass:"curations-table-pagination my-0 float-right",attrs:{size:"sm","hide-goto-end-buttons":"","total-rows":t.totalRows,"per-page":t.pageLength},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"text-center"},[n("p",{staticClass:"lead"},[t._v("loading...")])]),t._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:t.curationProvider,fields:t.fields,filter:t.filter,"per-page":t.pageLength,"current-page":t.currentPage,"sort-by":t.sortKey,"sort-desc":t.sortDesc,"no-local-sorting":!0,"show-empty":!0},on:{"sort-changed":t.handleSortChanged,"update:sortBy":function(e){t.sortKey=e},"update:sort-by":function(e){t.sortKey=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[n("center",[t._v("Loading...")])]},proxy:!0},{key:"cell(gene_symbol)",fn:function(e){var r=e.item;return[n("router-link",{attrs:{id:"show-curation-"+r.id+"-link",to:"/curations/"+r.id}},[t._v("\n                "+t._s(r.gene_symbol)+"\n            ")]),t._v(" "),r.hgnc_id?n("small",[t._v("(hgnc:"+t._s(r.hgnc_id)+")")]):t._e()]}},{key:"cell(mode_of_inheritance)",fn:function(e){var r=e.item;return[null!==r.mode_of_inheritance?n("div",[n("div",{attrs:{title:r.mode_of_inheritance.name}},[t._v("\n                    "+t._s(r.mode_of_inheritance.abbreviation)+"\n                ")])]):t._e()]}},{key:"cell(expert_panel)",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(r.expert_panel?r.expert_panel.name:null))])]}},{key:"cell(curator)",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(r.curator?r.curator.name:null))])]}},{key:"cell(current_status)",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(r.current_status?r.current_status.name:null))])]}},{key:"cell(mondo_id)",fn:function(e){var r=e.item;return[n("div",[t._v(t._s(t.getDiseaseEntityColumn(r)))])]}},{key:"cell(actions)",fn:function(e){var r=e.item;return[n("div",[t.user.canEditCuration(r)?n("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{id:"edit-curation-"+r.id+"-btn",to:"/curations/"+r.id+"/edit"}},[t._v("\n                    Edit\n                ")]):t._e(),t._v(" "),n("delete-button",{staticClass:"btn-sm",attrs:{curation:r}},[n("span",{staticClass:"fa fa-trash"},[t._v("X")])])],1)]}}])}),t._v(" "),n("div",{staticClass:"float-right mr-3 mb-3"},[t._v("Total Records: "+t._s(t.totalRows))])],1)}),[],!1,null,null,null);e.a=p.exports},LqiT:function(t,e,n){(function(e){t.exports=function(t,n){var r;void 0===t&&(t="");var a=function(t,e){return e<(t=parseInt(t,10).toString(16)).length?t.slice(t.length-e):e>t.length?Array(e-t.length+1).join("0")+t:t},o="undefined"!=typeof window?window:e;o.$locutus=o.$locutus||{};var i=o.$locutus;return i.php=i.php||{},i.php.uniqidSeed||(i.php.uniqidSeed=Math.floor(123456789*Math.random())),i.php.uniqidSeed++,r=t,r+=a(parseInt((new Date).getTime()/1e3,10),8),r+=a(i.php.uniqidSeed,5),n&&(r+=(10*Math.random()).toFixed(8).toString()),r}}).call(this,n("yLpj"))},j6Wa:function(t,e,n){"use strict";var r=n("L2JU");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={props:{curation:{required:!0,type:Object}},data:function(){return{}},computed:o(o({},Object(r.c)({user:"getUser"})),{},{title:function(){var t="";return this.curation&&this.curation.gene_symbol&&(t+=this.curation.gene_symbol,this.curation.mondo_id&&(t+=" / "+this.curation.mondo_id),this.curation.expert_panel&&(t+=" for "+this.curation.expert_panel.name)),t}}),methods:o(o(o({},Object(r.b)("curations",{destroyCuration:"destroyItem"})),Object(r.d)("messages",["addInfo","addError"])),{},{deleteCuration:function(){var t=this;if(confirm("You're about to delete "+this.title+". This can not be undone.  Are you sure you want to continue?")){this.$router.push("/");var e=this.title;this.destroyCuration(this.curation.id).then((function(n){t.addInfo(e+" was successfully deleted.")})).catch((function(n){var r="There was a problem deleting"+e;403==n.response.status&&(r="You do not have permissions to delete curations.  Please contact an adminstrator to help you delete the curation."),t.addError(r)}))}}})},c=n("KHd+"),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.user.canDeleteCuration(t.curation)?n("button",{staticClass:"btn btn-danger",attrs:{id:"delete-curation-"+t.curation.id+"-btn"},on:{click:function(e){return t.deleteCuration(t.curation)}}},[t._t("default",[t._v("Delete")])],2):t._e()}),[],!1,null,null,null);e.a=l.exports},rR3z:function(t,e,n){"use strict";n.r(e);n("L2JU");var r={components:{CurationsTable:n("/vKN").a}},a=n("KHd+"),o=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",{staticClass:"float-right"},[e("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{to:"/curations/export"}},[this._v("Download CSV")])],1),this._v(" "),e("h3",[this._v("All Curations")])]),this._v(" "),e("div",{staticClass:"card-body"},[e("curations-table")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=CurationList.f4d2ab579103ed33bc8a.js.map