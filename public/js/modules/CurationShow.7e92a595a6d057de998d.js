(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8ITO":function(t,s,i){"use strict";i("RA8b")},"9xfi":function(t,s,i){(t.exports=i("I1BE")(!1)).push([t.i,".unused[data-v-2884e836]{color:#aaa}",""])},RA8b:function(t,s,i){var n=i("9xfi");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,o);n.locals&&(t.exports=n.locals)},"jQ/d":function(t,s,i){"use strict";i.r(s);var n=i("L2JU"),o=(i("vlNi"),{props:{geneSymbol:{required:!0},curation:{required:!0,type:Object}},data:function(){return{phenotypes:[]}},watch:{$route:function(t,s){this.phenotypes=this.curation.phenotypes||[]}},computed:{usedPhenotypes:function(){var t=this;return this.phenotypes.length>0&&this.curation.phenotypes?this.phenotypes.filter((function(s){return t.curation.phenotypes.indexOf(s.phenotypeMimNumber)>-1})):this.phenotypes},unusedPhenotypes:function(){var t=this;return this.phenotypes.length>0&&this.curation.phenotypes?this.phenotypes.filter((function(s){return t.curation.phenotypes.indexOf(s.phenotypeMimNumber)<0})):this.phenotypes}},mounted:function(){this.phenotypes=this.curation.phenotypes||[]}}),a=(i("8ITO"),i("KHd+")),e=Object(a.a)(o,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"component-container row"},[t.phenotypes.length>0?i("div",{staticClass:" col-lg-8"},[i("table",{staticClass:"table table-sm table-xs mb-0"},[t._m(0),t._v(" "),i("tbody",t._l(t.phenotypes,(function(s){return i("tr",{key:s.id},[i("td",[t._v(t._s(s.mim_number))]),t._v(" "),i("td",[t._v(t._s(s.name))])])})),0)])]):i("div",{staticClass:"col"},[t._v("\n        No phenotypes in this curation\n    ")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("th",[this._v("MIM Number")]),this._v(" "),s("th",{staticStyle:{width:"80%"}},[this._v("Phenotype")])])}],!1,null,"2884e836",null).exports,r=i("RDmU"),c=i("FD4A"),l=i("j6Wa"),u=i("CCjs"),d=i("iWAU"),_=i("jN9E");function v(t,s){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?v(Object(i),!0).forEach((function(s){h(t,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))}))}return t}function h(t,s,i){return s in t?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,t}var p={props:["id"],components:{PhenotypeList:e,CurationStatusHistory:r.a,DeleteButton:l.a,ClassificationHistory:c.a,DocumentsCard:u.a,TransferCurationControl:d.a,GciLink:_.a},data:function(){return{showStatusHistory:!1,showClassificationHistory:!1,loading:!0}},watch:{$route:function(t,s){this.loadCuration()}},computed:m(m(m({},Object(n.c)({user:"getUser"})),Object(n.c)("curations",{curations:"Items",getCuration:"getItemById",curation:"currentItem"})),{},{statusHistoryButtonText:function(){return this.showStatusHistory?"Hide history":"Show history"},classificationButtonText:function(){return this.showClassificationHistory?"Hide history":"Show history"},title:function(){var t="Curation: ";return this.curation&&this.curation.gene_symbol&&(t+=this.curation.gene_symbol,this.curation.mondo_id&&(t+=" / "+this.curation.mondo_id),this.curation.expert_panel&&(t+=" for "+this.curation.expert_panel.name)),t},mondoUrl:function(){if(this.curation.mondo_id)return"https://www.ebi.ac.uk/ols/ontologies/mondo/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMONDO_".concat(this.curation.mondo_id.substring(6))}}),methods:m(m({},Object(n.b)("curations",{fetchCuration:"fetchItem"})),{},{loadCuration:function(){var t=this;this.loading=!0,this.fetchCuration(this.id).then((function(s){t.loading=!1})).catch((function(s){t.loading=!1}))}}),mounted:function(){this.loadCuration()}},C=Object(a.a)(p,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"curation-show-container"},[i("div",[i("router-link",{attrs:{to:"/curations"}},[t._v("\n            < Back to curations\n        ")])],1),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.loading?i("div",{key:"loading",staticClass:"alert alert-secondary lead text-center mt-4"},[t._v("\n        Loading...\n    ")]):i("b-card",{key:"curation-details",staticStyle:{"max-heigh":"1000px"},attrs:{id:"show-curation"}},[i("template",{slot:"header"},[i("div",{staticClass:"d-float justify-content-between"},[i("h3",[t._v(" "+t._s(t.title))]),t._v(" "),t.loading?t._e():i("div",{staticClass:"d-flex space-x-1"},[t.user.canEditCuration(t.curation)?i("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{id:"edit-curation-"+t.curation.id+"-btn",to:"/curations/"+t.curation.id+"/edit"}},[t._v("\n                        Edit\n                    ")]):t._e(),t._v(" "),i("delete-button",{staticClass:"btn btn-sm",attrs:{curation:t.curation}}),t._v(" "),i("transfer-curation-control",{attrs:{curation:t.curation}})],1)])]),t._v(" "),this.curations?i("div",[i("div",{attrs:{id:"info"}},[i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Gene Symbol:")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v(t._s(t.curation.gene_symbol)+" - "),t.curation.name?i("span",[t._v(t._s("hgnc:"+t.curation.name))]):t._e(),t._v(" ("),t.curation.hgnc_id?i("small",[t._v(t._s("hgnc:"+t.curation.hgnc_id))]):t._e(),t._v(")")])]),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("\n                        Mode Of Inheritance:\n                    ")]),t._v(" "),i("div",{staticClass:"col-md"},[t.curation.mode_of_inheritance?i("div",[t._v("\n                            "+t._s(t.curation.mode_of_inheritance.name)+" - ("+t._s(t.curation.mode_of_inheritance.hp_id)+")\n                        ")]):i("div",[t._v("--")])])]),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Disease Entity:")]),t._v(" "),i("div",{staticClass:"col-md"},[t.curation.mondo_id?i("div",[t.curation.mondo_name?i("span",[t._v("\n                                "+t._s(t.curation.mondo_name?t.curation.mondo_name:"")+" - \n                            ")]):t._e(),t._v(" "),i("external-link",{staticClass:"external",attrs:{href:t.mondoUrl,target:"mondo"}},[t._v("\n                                "+t._s(t.curation.mondo_id?t.curation.mondo_id:"--")+"\n                            ")])],1):t._e()])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Expert Panel:")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v(t._s(t.curation.expert_panel?t.curation.expert_panel.name:"--"))])]),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Curator:")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v(t._s(t.curation.curator?t.curation.curator.name:"--"))])]),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Curation Type:")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v("\n                        "+t._s(t.curation.curation_type?t.curation.curation_type.description:"--")+"\n                    ")])]),t._v(" "),i("div",{staticClass:"row mt-4"},[i("strong",{staticClass:"col-md-3"},[t._v("Phenotypes:")]),t._v(" "),i("phenotype-list",{staticClass:"col-md",attrs:{curation:t.curation,"gene-symbol":t.curation.gene_symbol}})],1),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Rationale:")]),t._v(" "),i("div",{staticClass:"col-md"},[i("ul",{staticClass:"list-inline"},t._l(t.curation.rationales,(function(s,n){return i("li",{key:s.id,staticClass:"list-inline-item"},[t._v("\n                                "+t._s(s.name)),n+1<t.curation.rationales.length?i("span",[t._v(",")]):t._e()])})),0)])]),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("PMIDS")]),t._v(" "),t.curation.pmids?i("div",{staticClass:"col-md"},[i("ul",{staticClass:"list-inline"},t._l(t.curation.pmids,(function(s,n){return i("li",{key:n,staticClass:"list-inline-item"},[t._v("\n                                "+t._s(s)),t.curation.pmids&&t.curation.pmids.length>n+1?i("span",[t._v(",")]):t._e()])})),0)]):t._e()]),t._v(" "),i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("Notes on Rationale")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v("\n                        "+t._s(t.curation.rationale_notes)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"row mt-1"},[i("strong",{staticClass:"col-md-3"},[t._v("Disease entity notes:")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v(t._s(t.curation.disease_entity_notes?t.curation.disease_entity_notes:"--"))])]),t._v(" "),i("div",{staticClass:"row mt-3"},[i("strong",{staticClass:"col-md-3"},[t._v("Current Status:")]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"mb-2"},[t._v("\n                            "+t._s(t.curation.current_status?t.curation.current_status.name:"No status set")+" \n                            "),i("button",{staticClass:"btn btn-sm"},[i("small",[i("small",{on:{click:function(s){t.showStatusHistory=!t.showStatusHistory}}},[t._v(t._s(t.statusHistoryButtonText))])])])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("curation-status-history",{directives:[{name:"show",rawName:"v-show",value:t.showStatusHistory,expression:"showStatusHistory"}],attrs:{curation:t.curation}})],1)],1)]),t._v(" "),t.curation.gdm_uuid?i("div",{staticClass:"row mt-2"},[i("strong",{staticClass:"col-md-3"},[t._v("GCI ID:")]),t._v(" "),i("div",{staticClass:"col-md"},[i("gci-link",{attrs:{curation:t.curation}})],1)]):t._e(),t._v(" "),i("div",{staticClass:"row mt-3"},[i("strong",{staticClass:"col-md-3"},[t._v("Current Classification:")]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"mb-2"},[t._v("\n                            "+t._s(t.curation.current_classification?t.curation.current_classification.name:"No status set")+" \n                            "),i("button",{staticClass:"btn btn-sm"},[i("small",[i("small",{on:{click:function(s){t.showClassificationHistory=!t.showClassificationHistory}}},[t._v(t._s(t.classificationButtonText))])])])]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("classification-history",{directives:[{name:"show",rawName:"v-show",value:t.showClassificationHistory,expression:"showClassificationHistory"}],attrs:{curation:t.curation}})],1)],1)]),t._v(" "),i("div",{staticClass:"row mt-1"},[i("strong",{staticClass:"col-md-3"},[t._v("Notes:")]),t._v(" "),i("div",{staticClass:"col-md"},[t._v(t._s(t.curation.notes?t.curation.notes:"--"))])])]),t._v(" "),i("hr"),t._v(" "),i("documents-card",{attrs:{curation:t.curation}})],1):t._e()],2)],1)],1)}),[],!1,null,null,null);s.default=C.exports}}]);
//# sourceMappingURL=CurationShow.7e92a595a6d057de998d.js.map