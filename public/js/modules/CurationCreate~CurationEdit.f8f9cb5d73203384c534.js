(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"08pa":function(t,e,r){"use strict";var a=r("EEH6"),n=r("ikji"),o=(r("u8XI"),r("KHd+")),i=Object(o.a)(n.default,a.a,a.b,!1,null,null,null);e.default=i.exports},"0R+v":function(t,e,r){"use strict";var a={components:{WarningAlert:r("QAVV").a},props:["curation"],data:function(){return{matchedGenes:[],matchedPhenotypes:[]}},watch:{"curation.gene_symbol":function(){this.curation.gene_symbol&&this.checkCurations()},"curation.phenotypes":function(){this.curation&&this.curation.phenotypes&&this.curation.phenotypes.length>0&&this.checkCurations()}},computed:{matchedCount:function(){return Object.keys(this.matchedGenes).length}},methods:{checkCurations:_.debounce((function(){var t=this;window.axios.get("/api/curations?with=phenotypes&gene_symbol="+this.curation.gene_symbol).then((function(e){t.matchedGenes=Object.values(e.data.data).filter((function(e){return e.id!=t.curation.id}))}))}),500),hasMatchingPhenotypes:function(t){return this.curation&&this.curation.phenotypes&&this.curation.phenotypes.map((function(t){return t.mim_number})).indexOf(t.mim_number)>-1}}},n=r("KHd+"),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("warning-alert",{directives:[{name:"show",rawName:"v-show",value:t.matchedCount>0,expression:"matchedCount > 0"}]},[r("div",{attrs:{slot:"summary"},slot:"summary"},[t._v("\n            There are already "),r("strong",[t._v(t._s(t.matchedCount))]),t._v(" curations in curation or pre-curation with this gene symbol.\n        ")]),t._v(" "),r("div",{attrs:{slot:"details"},slot:"details"},[r("table",{staticClass:"table table-striped table-bordered table-small bg-white"},[r("thead",[r("tr",[r("th",[t._v("Gene")]),t._v(" "),r("th",[t._v("Expert Panel")]),t._v(" "),r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Phenotypes")])])]),t._v(" "),t._l(t.matchedGenes,(function(e,a){return r("tbody",{key:a},[r("tr",[r("td",[r("a",{attrs:{href:"/#/curations/"+e.id,target:"show-"+e.id}},[t._v("\n                                "+t._s(e.gene_symbol)+"\n                            ")])]),t._v(" "),r("td",[t._v(t._s(e.expert_panel.name))]),t._v(" "),r("td",[t._v(t._s(e.current_status?e.current_status.name:"no status"))]),t._v(" "),r("td",[e.phenotypes.length>0?r("ul",{staticClass:"mb-0"},t._l(e.phenotypes,(function(e,a){return r("li",{key:e.mim_number},[t.hasMatchingPhenotypes(e)?r("strong",[t._v(t._s(e.name))]):t._e(),t._v(" "),t.hasMatchingPhenotypes(e)?t._e():r("span",[t._v(t._s(e.name))])])})),0):t._e()])])])}))],2)])])],1)}),[],!1,null,null,null);e.a=o.exports},"6hih":function(t,e,r){"use strict";var a=r("7IMs");r.n(a).a},"7IMs":function(t,e,r){var a=r("xMC5");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},EEH6:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:t.placeholder,readonly:t.readonly},domProps:{value:t.formatted},on:{input:function(e){e.target.value=t.value}}})},n=[]},G7Yw:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".form-control[readonly]{background:#fff}",""])},PwNb:function(t,e,r){"use strict";r("vlNi");e.a={props:["value","errors"],data:function(){return{updatedCuration:{gene_symbol:null,ratonionales:[]},page:null}},watch:{updatedCuration:function(t,e){this.$emit("input",this.updatedCuration)},value:function(){this.value!=this.updatedCuration&&this.syncValue()}},methods:{syncValue:function(){this.value&&(this.updatedCuration=JSON.parse(JSON.stringify(this.value)),this.updatedCuration.page=this.page)}},mounted:function(){this.syncValue()}}},QAVV:function(t,e,r){"use strict";var a={components:{},data:function(){return{}},methods:{}},n=r("KHd+"),o=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"alert alert-warning"},[e("div",{staticClass:"clearfix"},[this._t("summary"),this._v(" "),e("button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.matching-curations-details",modifiers:{"matching-curations-details":!0}}],staticClass:"btn btn-sm btn-warning float-right",attrs:{type:"button"}},[this._v("Details")])],2),this._v(" "),e("b-collapse",{staticClass:"mt-2",attrs:{id:"matching-curations-details"}},[this._t("details")],2)],1)])],1)}),[],!1,null,null,null);e.a=o.exports},RS0q:function(t,e,r){var a=r("G7Yw");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},U6ZH:function(t,e,r){r("BRqt");var a=r("wd/R");r("76gO");t.exports={name:"date-field",props:["name","value","id","placeholder","readonly"],data:function(){return{}},computed:{formatted:function(){return this.value?a(this.value).format("MM/DD/YYYY"):null}},mounted:function(){this.$nextTick(function(){jQuery(this.$el).datepicker().on("changeDate",function(t){jQuery(this.$el).trigger("input"),this.$emit("input",a(t.date,"MM/DD/YYYY").toDate())}.bind(this))}.bind(this))}}},ikji:function(t,e,r){"use strict";var a=r("U6ZH"),n=r.n(a);e.default=n.a},mLDf:function(t,e,r){"use strict";var a=r("L2JU"),n=(r("LvDl"),r("0R+v")),o=r("08pa"),i=r("PwNb"),s=r("ttp2"),u=r("RDmU"),l=r("+jP+"),c=r("wd/R"),d=r.n(c);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={components:{CurationStatusHistory:u.a,Datepicker:l.a},props:{value:{required:!0,type:Object}},data:function(){return{curationCopy:{},modalVisible:!1,newStatusDate:new Date,newStatusId:null,highlighted:{from:(new d.a).hour(0),to:(new d.a).hour(24)},statusDatesUpdated:!1,errors:[]}},watch:{value:{handler:"syncCuration",immediate:!0,deep:!0}},computed:h(h(h({},Object(a.c)({user:"getUser"})),Object(a.c)("curationStatuses",{curationStatuses:"Items"})),{},{statusOptions:function(){var t=this;return this.curationStatuses.filter((function(e){return t.user.canSelectCurationStatus(e,t.curationCopy)}))}}),methods:h(h({},Object(a.b)("curations",{linkNewStatus:"linkNewStatus",storeStatusDate:"updateStatusDate",unlinkStatus:"unlinkStatus"})),{},{addStatus:function(){var t=this;this.linkNewStatus({curation:this.curationCopy,data:{curation_status_id:this.newStatusId,status_date:this.$options.filters.formatDate(this.newStatusDate,"YYYY-MM-DD")}}).then((function(e){t.newStatusId=null,t.newStatusDate=new Date})).catch((function(e){t.errors=e.data.errors}))},updateStatusDate:function(t,e){var r=this;t&&0!=d()(t.status_date).diff(e)&&this.storeStatusDate({curation:this.curationCopy,pivotId:t.id,statusDate:d()(e).format("YYYY-MM-DD")}).then((function(t){console.log("status date updated")})).catch((function(t){r.errors=t.data.errors}))},removeStatusEntry:function(t){this.unlinkStatus({curation:this.curationCopy,pivotId:t.pivot.id})},submitAll:function(){null!=this.newStatusId&&this.addStatus()},syncCuration:function(){this.curationCopy=JSON.parse(JSON.stringify(this.value))}})},v=r("KHd+"),_=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{staticClass:"form-control mb-2",attrs:{variant:"info",size:"sm"},on:{click:function(e){t.modalVisible=!0}}},[t._v("Add or update status")]),t._v(" "),r("curation-status-history",{attrs:{curation:t.value}}),t._v(" "),r("b-modal",{on:{hide:t.submitAll},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[r("div",{attrs:{slot:"modal-header"},slot:"modal-header"},[r("h3",[t._v("Update Curation Status")])]),t._v(" "),r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Date")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("b-form-select",{attrs:{id:"expert-panel-select"},model:{value:t.newStatusId,callback:function(e){t.newStatusId=e},expression:"newStatusId"}},[r("option",{domProps:{value:null}},[t._v("Select...")]),t._v(" "),t._l(t.statusOptions,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])}))],2),t._v(" "),t.errors.curation_status_id?r("div",{staticClass:"text-danger"},t._l(t.errors.curation_status_id,(function(e){return r("div",{key:e},[r("small",[t._v(t._s(e))])])})),0):t._e()],1),t._v(" "),r("td",{staticClass:"form-inline"},[r("datepicker",{attrs:{"input-class":"form-control mr-2",format:"yyyy-MM-dd","calendar-class":"small-calendar",placeholder:"Select a date",highlighted:t.highlighted},model:{value:t.newStatusDate,callback:function(e){t.newStatusDate=e},expression:"newStatusDate"}}),t._v(" "),r("b-button",{attrs:{variant:"primary"},on:{click:t.addStatus}},[r("strong",[t._v("+")])])],1)]),t._v(" "),t._l(t.curationCopy.curation_statuses,(function(e){return r("tr",{key:e.pivot.id},[r("td",[r("label",{attrs:{for:"status-date-"+e.id}},[r("strong",[t._v(t._s(e.name))])])]),t._v(" "),r("td",{staticClass:"form-inline"},[r("datepicker",{attrs:{id:"status-date-"+e.id,"input-class":"form-control mr-2",format:"yyyy-MM-dd","calendar-class":"small-calendar",placeholder:"Select a date",highlighted:t.highlighted},on:{selected:function(r){return t.updateStatusDate(e.pivot,r)}},model:{value:e.pivot.status_date,callback:function(r){t.$set(e.pivot,"status_date",r)},expression:"status.pivot.status_date"}}),t._v(" "),r("b-button",{on:{click:function(r){return t.removeStatusEntry(e)}}},[r("strong",[t._v("x")])])],1)])}))],2)])])],1)}),[],!1,null,null,null).exports;function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x={name:"test",mixins:[i.a],components:{CurationNotifications:n.a,DateField:o.default,ValidationError:s.a,StatusForm:_},data:function(){return{page:"info",newStatusDate:null,newStatusId:null}},watch:{updatedCuration:function(t,e){console.log("Info.vue: updatedCuration")}},computed:g(g(g(g(g(g(g({today:function(){return d()()}},Object(a.c)({user:"getUser"})),Object(a.c)("mois",{mois:"Items"})),Object(a.c)("panels",{panels:"Items"})),Object(a.c)("users",{curators:"getCurators"})),Object(a.c)("curationStatuses",{curationStatuses:"Items"})),Object(a.c)({loading:"loading"})),{},{panelOptions:function(){return this.panels.filter((function(t){return user.canSelectExpertPanel(t)}))},statusOptions:function(){var t=this;return this.curationStatuses.filter((function(e){return user.canSelectCurationStatus(e,t.updatedCuration)}))},panelCurators:function(){var t=this,e=this.curators.filter((function(e){return e.expert_panels&&e.expert_panels.find((function(e){return e.id==t.updatedCuration.expert_panel_id}))}));return e&&1==e.length?this.updatedCuration.curator_id=e[0].id:e&&e.length>0?this.updatedCuration.curator_id=this.updatedCuration.curator_id?this.updatedCuration.curator_id:null:this.updatedCuration.curator_id=null,e},geneSymbolError:function(){return!(this.errors&&this.errors.gene_symbol&&this.errors.gene_symbol.length>0)&&null},expertPanelIdError:function(){return!(this.errors&&this.errors.expert_panel_id&&this.errors.expert_panel_id.length>0)&&null}}),methods:g(g(g(g({handleDateSelected:function(t){}},Object(a.b)("panels",{getAllPanels:"getAllItems"})),Object(a.b)("mois",{getAllMois:"getAllItems"})),Object(a.b)("users",{getAllUsers:"getAllItems"})),{},{fieldError:function(t){return this.errors&&this.errors[t]&&this.errors[t].length>0}}),mounted:function(){this.getAllPanels(),this.getAllUsers(),this.getAllMois()}},C=(r("6hih"),Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"},attrs:{id:"curation-info-fields"}},[t.loading?r("div",{staticStyle:{position:"absolute",top:"0",left:"0",bottom:"0",right:"0","background-color":"rgba(256, 256, 256, .4)","z-index":"10"}},[r("div",{staticClass:"alert alert-light border text-center",staticStyle:{margin:"auto",width:"10rem","margin-top":"25%"}},[t._v("Loading...")])]):t._e(),t._v(" "),r("b-form-group",{class:{error:t.fieldError("gene_symbol")},attrs:{horizontal:"",id:"new-gene-symbol-group",label:"HGNC Gene Symbol","label-for":"gene-symbol-input"}},[r("b-form-input",{attrs:{id:"gene-symbol-input",type:"text",required:"",placeholder:"ATK-1"},model:{value:t.updatedCuration.gene_symbol,callback:function(e){t.$set(t.updatedCuration,"gene_symbol",e)},expression:"updatedCuration.gene_symbol"}}),t._v(" "),r("validation-error",{attrs:{messages:t.errors.gene_symbol}})],1),t._v(" "),r("curation-notifications",{attrs:{curation:t.updatedCuration}}),t._v(" "),r("b-form-group",{class:{error:t.fieldError("moi_id")},attrs:{horizontal:"",label:"Mode of Inheritance","label-for":"moi_input"}},[r("b-form-select",{attrs:{id:"moi_input"},model:{value:t.updatedCuration.moi_id,callback:function(e){t.$set(t.updatedCuration,"moi_id",e)},expression:"updatedCuration.moi_id"}},[r("option",{domProps:{value:null}},[t._v("Select...")]),t._v(" "),t._l(t.mois,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                "+t._s(e.name+" ("+e.hp_id+")")+"\n            ")])}))],2),t._v(" "),r("validation-error",{attrs:{messages:t.errors.moi_id}})],1),t._v(" "),r("b-form-group",{class:{error:t.fieldError("expert_panel_id")},attrs:{horizontal:"",id:"expert-panel-select-group",label:"Gene Curation Expert Panel","label-for":"expert-panel-select"}},[r("b-form-select",{attrs:{id:"expert-panel-select"},model:{value:t.updatedCuration.expert_panel_id,callback:function(e){t.$set(t.updatedCuration,"expert_panel_id",e)},expression:"updatedCuration.expert_panel_id"}},[r("option",{domProps:{value:null}},[t._v("Select...")]),t._v(" "),t._l(t.panelOptions,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n            ")])}))],2),t._v(" "),r("validation-error",{attrs:{messages:t.errors.expert_panel_id}})],1),t._v(" "),r("b-form-group",{class:{error:t.fieldError("curator_id")},attrs:{horizontal:"",id:"curator-select-group",label:"Curator","label-for":"curator-select"}},[r("b-form-select",{attrs:{id:"curator-select"},model:{value:t.updatedCuration.curator_id,callback:function(e){t.$set(t.updatedCuration,"curator_id",e)},expression:"updatedCuration.curator_id"}},[r("option",{domProps:{value:null}},[t._v("Select...")]),t._v(" "),t._l(t.panelCurators,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                "+t._s(e.name)+"\n            ")])}))],2),t._v(" "),r("validation-error",{attrs:{messages:t.errors.curator_id}})],1),t._v(" "),r("b-form-group",{class:{error:t.fieldError("notes")},attrs:{horizontal:"",label:"Notes","label-for":"notes-field"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.notes,expression:"updatedCuration.notes"}],staticClass:"form-control",attrs:{id:"notes-field",placeholder:"optional notes"},domProps:{value:t.updatedCuration.notes},on:{input:function(e){e.target.composing||t.$set(t.updatedCuration,"notes",e.target.value)}}}),t._v(" "),r("validation-error",{attrs:{messages:t.errors.notes}})],1),t._v(" "),t.updatedCuration&&t.updatedCuration.curation_statuses?r("b-form-group",{attrs:{horizontal:"",label:"Status","label-for":"curation_status_id"}},[r("status-form",{staticClass:"mt-1",model:{value:t.updatedCuration,callback:function(e){t.updatedCuration=e},expression:"updatedCuration"}})],1):t._e(),t._v(" "),r("br"),t._v(" "),t.user.hasPermission("update curation gdm_uuid")?r("div",{staticClass:"alert alert-info mt-3"},[t._m(0),t._v(" "),r("hr"),t._v(" "),r("b-form-group",{class:{error:t.fieldError("gdm_uuid")},attrs:{horizontal:"",label:"GCI UUID","label-for":"gdm_uuid"}},[r("b-form-input",{attrs:{id:"gdm_uuid",placeholder:"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"},model:{value:t.updatedCuration.gdm_uuid,callback:function(e){t.$set(t.updatedCuration,"gdm_uuid",e)},expression:"updatedCuration.gdm_uuid"}}),t._v(" "),r("small",[t.updatedCuration.gdm_uuid?r("a",{attrs:{href:"https://curation.clinicalgenome.org/curation-central/?gdm="+t.updatedCuration.gdm_uuid,target:"gci"}},[t._v("\n                    GCI Record\n                ")]):t._e()]),t._v(" "),r("validation-error",{attrs:{messages:t.errors.gdm_uuid}})],1)],1):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("\n            Advanced Info\n            "),e("small",{staticClass:"text-muted float-right"},[e("small",[this._v("\n                You are seeing this b/c you are a trusted user.\n                "),e("br"),this._v("\n                Only use these fields if you know what you're doing.\n            ")])])])}],!1,null,null,null));e.a=C.exports},u8XI:function(t,e,r){"use strict";var a=r("RS0q");r.n(a).a},xMC5:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".small-calendar{font-size:.8em;width:226px}.small-calendar .cell{width:32px;height:32px;line-height:32px}",""])}}]);
//# sourceMappingURL=CurationCreate~CurationEdit.f8f9cb5d73203384c534.js.map