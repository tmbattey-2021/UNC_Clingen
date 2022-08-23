(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+HTJ":function(t,e,n){"use strict";n("hjG7")},"1f99":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".search-select-component[data-v-feddf082]{position:relative;overflow:visible;height:2.5rem}.search-select-container[data-v-feddf082]{border:1px solid;line-height:1.5rem;display:flex;flex-wrap:wrap;padding:.25rem .5rem;border-radius:10px}.search-select-container>input[data-v-feddf082]{border:none}.search-select-container>.selection[data-v-feddf082]{margin:.15rem;border-radius:5px;display:flex;background:#666;color:#fff}.search-select-container>.selection.disabled[data-v-feddf082]{background:#aaa}.search-select-container>.selection>*[data-v-feddf082]{padding-left:.5rem;padding-right:.5rem}.search-select-container>.selection>label[data-v-feddf082]{margin-bottom:0}.search-select-container>.selection>button[data-v-feddf082]{border-width:0 0 0 1px;background-color:transparent;color:#fff}.search-select-container .input[data-v-feddf082]{display:block;width:100%;outline:none;padding:0;flex-grow:1;z-index:5}.result-container[data-v-feddf082]{position:relative}.option-list[data-v-feddf082]{background:#efefef;box-shadow:0 0 5px #666;list-style:none;margin:0 .5rem;padding:0;overflow:auto}.filtered-option[data-v-feddf082]{cursor:pointer;margin:0;padding:.25rem .5rem}.filtered-option.highlighted[data-v-feddf082],.filtered-option[data-v-feddf082]:hover{background-color:#add8e6}",""])},f2aF:function(t,e,n){"use strict";n.r(e);var i=n("L2JU"),o=n("PwNb"),r=n("vlNi"),a=n.n(r),s={data:function(){return{phenotypes:[],phenotypesLoaded:!1}},computed:{loading:function(){return this.$store.getters.loading}},methods:{fetchPhenotypes:function(t){var e=this;return t?a.a.gene(t).then((function(t){e.phenotypes=t.data.phenotypes,e.phenotypesLoaded=!0})).catch((function(t){console.error(t)})):new Promise((function(t,e){t()}))}}},u=n("EzaY"),c=n("ttp2"),l={components:{},data:function(){return{}},methods:{}},d=n("KHd+"),p=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters.omimLoading,expression:"$store.getters.omimLoading"}],staticClass:"alert alert-info"},[this._v("\n        Loading data from OMIM...\n    ")])])}),[],!1,null,null,null).exports,h={mixins:[o.a,s],components:{CriteriaTable:u.a,ValidationError:c.a,OmimLoading:p},data:function(){return{page:"curation-types",curationTypes:[],fields:[{key:"phenotype",sortable:!0},{key:"phenotypeMimNumber",sortable:!0},{key:"phenotypeInheritance",sortable:!0,label:"Inheritance"}]}},watch:{updatedCuration:function(t,e){t!=e&&(t.gene_symbol==e.gene_symbol&&t.curation_type_id==e.curation_type_id||this.fetchPhenotypes(this.updatedCuration.gene_symbol),this.updatedCuration.addingCurationType=1)}},computed:{options:function(){return this.phenotypesLoaded&&0==this.phenotypes.length&&null===this.updatedCuration.curation_type_id?(this.updatedCuration.curation_type_id=2,[]):1==this.phenotypes.length?this.curationTypes.filter((function(t){return"lumped"!=t.name})).map((function(t){return{text:t.description,value:t.id}})):this.curationTypes.map((function(t){return{text:t.description,value:t.id}}))}},methods:{fetchCurationTypes:function(){var t=this;window.axios.get("/api/curation-types").then((function(e){t.curationTypes=e.data}))}},mounted:function(){this.fetchCurationTypes()}},f=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curation-curation-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.phenotypes.length&&!t.loading,expression:"phenotypes.length == 0 && !loading"}]},[n("div",{staticClass:"alert alert-secondary clearfix"},[n("p",[t._v("The gene "),n("strong",[t._v(t._s(t.updatedCuration.gene_symbol))]),t._v(" is not associated with a disease entity per OMIM at this time.")])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[n("omim-loading"),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.phenotypes.length>0,expression:"phenotypes.length > 0"}]},[n("b-table",{attrs:{striped:"",hover:"",items:t.phenotypes,fields:t.fields,stacked:"sm",small:"",bordered:""}}),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[n("strong",[t._v("How would you like to proceed?")])]),t._v(" "),n("b-form-radio-group",{attrs:{id:"btnradios2",size:"lg",options:t.options,stacked:"",name:"radioBtnOutline"},model:{value:t.updatedCuration.curation_type_id,callback:function(e){t.$set(t.updatedCuration,"curation_type_id",e)},expression:"updatedCuration.curation_type_id"}}),t._v(" "),n("validation-error",{attrs:{messages:t.errors.curation_type_id}})],1)],1)])],1),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("criteria-table")],1)])])}),[],!1,null,null,null).exports,v=n("0R+v");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={components:{CriteriaTable:u.a,CurationNotifications:v.a,ValidationError:c.a},props:["disabled"],mixins:[o.a,s],data:function(){return{page:"phenotypes",phenotypes:[],updatedCuration:{},fields:[{key:"phenotype",sortable:!0},{key:"phenotypeMimNumber",sortable:!0},{key:"phenotypeInheritance",sortable:!0,label:"Inheritance"},{key:"checkbox",tdClass:"text-right w-10",sortable:!1,label:" ",formatter:function(t,e,n){return{mim_number:n.phenotypeMimNumber,name:n.phenotype}}}],message:null}},watch:{updatedCuration:function(t,e){var n=this;t.gene_symbol!=e.gene_symbol&&this.fetchPhenotypes(this.updatedCuration.gene_symbol).then((function(t){n.phenotypes&&1==n.phenotypes.length&&1==n.updatedCuration.curation_type_id&&n.updatedCuration.phenotypes&&0==n.updatedCuration.phenotypes.length&&(Vue.set(n.updatedCuration.phenotypes,0,{mim_number:n.phenotypes[0].phenotypeMimNumber,name:n.phenotypes[0].phenotype}),n.message="We have preselected the phenotype because you indicated you are curating "+n.updatedCuration.gene_symbol+" with this single disease entity")}))}},computed:y(y({},Object(i.c)("rationales",{rationales:"Items"})),{},{showPmids:function(){},loading:function(){return this.$store.getters.loading},showTable:function(){return 2!=this.updatedCuration.curation_type_id&&3!=this.updatedCuration.curation_type_id&&this.phenotypes.length>0},showRationale:function(){return!0}})},b=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-container"},[n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading&&t.phenotypes.length<1,expression:"loading && phenotypes.length < 1"}],staticClass:"alert alert-info"},[t._v("Loading phenotype information...")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading||t.phenotypes.length>0,expression:"!loading || phenotypes.length > 0"}]},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.phenotypes.length,expression:"phenotypes.length == 0"}],staticClass:"alert alert-secondary clearfix"},[n("p",[t._v("The gene "),n("strong",[t._v(t._s(t.updatedCuration.value))]),t._v(" is not associated with a disease entity per OMIM at this time.")])]),t._v(" "),n("b-table",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}],attrs:{items:t.phenotypes,fields:t.fields,stacked:"sm",striped:"",hover:"",small:""},scopedSlots:t._u([{key:"head(checkbox)",fn:function(e){return[t._v("\n                            \n                    ")]}},{key:"cell(checkbox)",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.phenotypes,expression:"updatedCuration.phenotypes"}],staticClass:"form-check-input form-check-input-lg",attrs:{type:"checkbox",disabled:t.disabled},domProps:{value:e.value,checked:Array.isArray(t.updatedCuration.phenotypes)?t._i(t.updatedCuration.phenotypes,e.value)>-1:t.updatedCuration.phenotypes},on:{change:function(n){var i=t.updatedCuration.phenotypes,o=n.target,r=!!o.checked;if(Array.isArray(i)){var a=e.value,s=t._i(i,a);o.checked?s<0&&t.$set(t.updatedCuration,"phenotypes",i.concat([a])):s>-1&&t.$set(t.updatedCuration,"phenotypes",i.slice(0,s).concat(i.slice(s+1)))}else t.$set(t.updatedCuration,"phenotypes",r)}}})]}}])}),t._v(" "),n("curation-notifications",{staticClass:"mt-2",attrs:{curation:t.updatedCuration}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}],staticClass:"alert alert-info"},[t._v(t._s(t.message))])],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8"},[t.showRationale?n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"rationale_id"}},[t._v("What is your rationale for this curation?")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.rationales,expression:"updatedCuration.rationales"}],staticClass:"form-control",staticStyle:{height:"8.5em"},attrs:{multiple:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.updatedCuration,"rationales",e.target.multiple?n:n[0])}}},t._l(t.rationales,(function(e){return n("option",{key:e.id,domProps:{value:e}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])})),0),t._v(" "),n("validation-error",{attrs:{messages:t.errors.rationales}})],1):t._e(),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:100==t.updatedCuration.rationale_id,expression:"updatedCuration.rationale_id == 100"}],staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.rationale_other,expression:"updatedCuration.rationale_other"}],staticClass:"form-control",attrs:{placeholder:"Other rationale details"},domProps:{value:t.updatedCuration.rationale_other},on:{input:function(e){e.target.composing||t.$set(t.updatedCuration,"rationale_other",e.target.value)}}}),t._v(" "),n("validation-error",{attrs:{messages:t.errors.rationale_other}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:3!=t.updatedCuration.curation_type_id,expression:"updatedCuration.curation_type_id != 3"}],staticClass:"form-group"},[n("label",{attrs:{for:"pmids"}},[t._v("Supporting PMIDS:")]),t._v(" "),n("small",[t._v("comma separated list")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.pmids,expression:"updatedCuration.pmids"}],staticClass:"form-control",attrs:{id:"pmids",placeholder:"18183754, 123451, 1231231"},domProps:{value:t.updatedCuration.pmids},on:{input:function(e){e.target.composing||t.$set(t.updatedCuration,"pmids",e.target.value)}}}),t._v(" "),n("validation-error",{attrs:{messages:t.errors.pmids}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:3==t.updatedCuration.curation_type_id,expression:"updatedCuration.curation_type_id == 3"}],staticClass:"form-group"},[n("label",{attrs:{for:"isolated_phenotype"}},[t._v("Enter broader OMIM phenotype (MIM phenotype):")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.isolated_phenotype,expression:"updatedCuration.isolated_phenotype"}],staticClass:"form-control",attrs:{id:"isolated_phenotype"},domProps:{value:t.updatedCuration.isolated_phenotype},on:{input:function(e){e.target.composing||t.$set(t.updatedCuration,"isolated_phenotype",e.target.value)}}}),t._v(" "),n("validation-error",{attrs:{messages:t.errors.isolated_phenotype}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"rationale_notes"}},[t._v("Provide your Rationale:")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.rationale_notes,expression:"updatedCuration.rationale_notes"}],staticClass:"form-control",attrs:{id:"rationale_notes"},domProps:{value:t.updatedCuration.rationale_notes},on:{input:function(e){e.target.composing||t.$set(t.updatedCuration,"rationale_notes",e.target.value)}}}),t._v(" "),n("validation-error",{attrs:{messages:t.errors.rationale_notes}})],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTable,expression:"showTable"}],staticClass:"col-lg-4"},[n("criteria-table")],1)])])}),[],!1,null,null,null).exports,C=n("j6Wa"),w=n("mLDf"),x=n("o0o1"),O=n.n(x),k=n("LvDl");function P(t,e,n,i,o,r,a){try{var s=t[r](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(i,o)}var S={name:"SearchSelect",props:{throttle:{required:!1,type:Number,default:250},searchFunction:{required:!1,type:Function,default:null},value:{required:!0},options:{required:!1,default:function(){return[]}},optionsHeight:{required:!1,type:Number,default:200},placeholder:{required:!1,type:String,default:""},disabled:{required:!1,type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(t){},data:function(){return{searchText:"",cursorPosition:null,filteredOptions:[],clearInputTimeout:null,keydownTimer:null,currentKey:null}},computed:{hasOptions:function(){return this.filteredOptions.length>0},optionsListHeight:function(){return this.showingOptions?this.optionsHeight:0},selection:function(){return this.modelValue},showInput:function(){return!this.hasSelection},showingOptions:function(){return this.filteredOptions.length>0},highlightedOption:function(){return this.showingOptions?null:this.filteredOptions[this.cursorPosition]},hasSelection:function(){return Boolean(this.value)}},watch:{searchText:function(t){this.search(this.searchText,this.options)},filteredOptions:function(t){this.cursorPosition=0}},methods:{defaultSearchFunction:function(t,e){return""===t?[]:e.filter((function(e){return null!==e.name.match(new RegExp(t,"gi"))}))},removeSelection:function(){this.$emit("input",null),this.$refs.input.focus()},setSelection:function(t){console.info("setSelection",t),this.$emit("input",t),console.log("emitted"),this.clearInput(),console.log("clearedInput"),this.resetCursor(),console.log("resetCursor")},clearInput:function(){console.debug("clearInput"),this.clearSearchText(),this.clearOptions()},clearOptions:function(){console.debug("clearOptions"),this.filteredOptions=[]},clearSearchText:function(){console.debug("clearSearchText"),this.searchText=""},resetCursor:function(){this.cursorPosition=0},startKeydownTimer:function(t){var e=this;t.key!=this.currentKey&&(this.cancelKeydownTimer(t),"ArrowUp"==t.key&&(console.info("start key down timer",t.key),this.keydownTimer=setInterval((function(){e.moveUp()}),100),this.currentKey="ArrowUp"),"ArrowDown"==t.key&&(console.info("start key down timer",t.key),this.keydownTimer=setInterval((function(){e.moveDown()}),100),this.currentKey="ArrowDown"))},cancelKeydownTimer:function(t){this.keydownTimer&&(clearInterval(this.keydownTimer),this.currentKey=null)},moveUp:function(){this.cursorPosition?this.cursorPosition-1<0||(this.cursorPosition--,this.scrollToHighlightedOption()):this.cursorPosition=0},moveDown:function(){null!==this.cursorPosition?this.cursorPosition+1>=this.filteredOptions.length||(this.cursorPosition++,this.scrollToHighlightedOption()):this.cursorPosition=0},handleKeyEvent:function(t){this.cancelKeydownTimer(t),this.showingOptions&&("ArrowDown"==t.key&&this.moveDown(),"ArrowUp"==t.key&&this.moveUp(),["Enter"].indexOf(t.key)>-1&&(t.preventDefault(),this.setSelection(this.filteredOptions[this.cursorPosition])),"Escape"==t.key&&(console.log("escape"),this.clearOptions()))},scrollToHighlightedOption:function(){(function(t){var e=t.getBoundingClientRect();document.getElementById("block")&&document.getElementById("block").remove();var n=t.parentNode.getBoundingClientRect();return e.top>=n.top&&e.bottom<=n.bottom})(document.getElementById("option-"+this.cursorPosition))||document.getElementById("option-"+this.cursorPosition).scrollIntoView()}},created:function(){var t=this;this.search=Object(k.debounce)(function(){var e,n=(e=O.a.mark((function e(n,i){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.searchFunction){e.next=5;break}if(""!==n){e.next=3;break}return e.abrupt("return",[]);case 3:return t.filteredOptions=i.filter((function(t){return null!==t.match(new RegExp(n,"gi"))})),e.abrupt("return");case 5:return e.next=7,t.searchFunction(n,i);case 7:t.filteredOptions=e.sent;case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function a(t){P(r,i,o,a,s,"next",t)}function s(t){P(r,i,o,a,s,"throw",t)}a(void 0)}))});return function(t,e){return n.apply(this,arguments)}}(),this.throttle)}},j=(n("+HTJ"),Object(d.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-select-component"},[n("div",{staticClass:"search-select-container border"},[t.hasSelection?n("div",{staticClass:"selection",class:{disabled:t.disabled}},[n("label",[t._t("selection-label",[t._v("\n                    "+t._s(t.value)+"\n                ")],{selection:t.value})],2),t._v(" "),n("button",{attrs:{disabled:t.disabled},on:{click:function(e){return t.removeSelection()}}},[t._v("x")])]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"},{name:"show",rawName:"v-show",value:t.showInput,expression:"showInput"}],ref:"input",staticClass:"input",attrs:{type:"text",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.searchText},on:{keydown:t.startKeydownTimer,keyup:t.handleKeyEvent,input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasOptions,expression:"hasOptions"}],staticClass:"result-container"},[n("ul",{staticClass:"option-list",style:"max-height: "+t.optionsListHeight+"px"},t._l(t.filteredOptions,(function(e,i){return n("li",{key:i,staticClass:"filtered-option",class:{highlighted:i===t.cursorPosition},attrs:{id:"option-"+i},on:{click:function(n){return t.setSelection(e)}}},[t._t("option",[t._v(t._s(e))],{option:e,index:i})],2)})),0)])])}),[],!1,null,"feddf082",null).exports);function I(t,e,n,i,o,r,a){try{var s=t[r](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(i,o)}var T={mixins:[o.a],components:{ValidationError:c.a,CurationNotification:v.a,SearchSelect:j},data:function(){return{page:"mondo",updatedCuration:{},selection:"eat",searchMondo:(t=O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/api/diseases/search?query_string="+e).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),e=function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){I(r,i,o,a,s,"next",t)}function s(t){I(r,i,o,a,s,"throw",t)}a(void 0)}))},function(t){return e.apply(this,arguments)})};var t,e},watch:{updatedCuration:function(){this.$emit("input",this.updatedCuration)},value:function(t,e){this.value!=this.updatedCuration&&this.syncValue()}}},N=Object(d.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-form-group",{staticClass:"position-relative",class:{error:t.errors.mondo_id},attrs:{horizontal:"",label:"MonDO ID","label-for":"mondo-id"}},[n("search-select",{staticStyle:{"z-index":"2"},attrs:{"search-function":t.searchMondo,placeholder:"MonDO ID or name",disabled:null!==t.updatedCuration.gdm_uuid},scopedSlots:t._u([{key:"selection-label",fn:function(e){var i=e.selection;return[n("div","object"==typeof i?[t._v("\n                    "+t._s(i.mondo_id)+" - "+t._s(i.name)+"\n                ")]:[t._v(t._s(i))])]}},{key:"option",fn:function(e){var i=e.option;return[n("div","object"==typeof i?[t._v("\n                    "+t._s(i.mondo_id)+" - "+t._s(i.name)+"\n                ")]:[t._v("\n                    "+t._s(i)+"\n                ")])]}}]),model:{value:t.updatedCuration.disease,callback:function(e){t.$set(t.updatedCuration,"disease",e)},expression:"updatedCuration.disease"}}),t._v(" "),n("validation-error",{attrs:{messages:t.errors.mondo_id}}),t._v(" "),n("gci-linked-message",{attrs:{curation:t.updatedCuration,"attribute-label":"MonDO ID"}},[n("small",{staticClass:"text-muted"},[t._v("\n                Alternatively, refer to "),n("a",{attrs:{href:"https://www.ebi.ac.uk/ols/ontologies/mondo",target:"mondo"}},[t._v("MonDO")]),t._v(" for a valid MonDO ID\n            ")])]),t._v(" "),n("curation-notification",{attrs:{curation:t.updatedCuration,"search-by-mondo":!0}})],1),t._v("\n    or\n    "),n("b-form-group",{class:{error:t.errors.disease_entity_notes},attrs:{horizontal:""},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n            Disease Entity ("),n("small",[t._v("Use when no appropriate MonDO ID is available.")]),t._v(")\n        ")]},proxy:!0}])},[t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updatedCuration.disease_entity_notes,expression:"updatedCuration.disease_entity_notes"}],staticClass:"form-control",domProps:{value:t.updatedCuration.disease_entity_notes},on:{input:function(e){e.target.composing||t.$set(t.updatedCuration,"disease_entity_notes",e.target.value)}}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.updatedCuration.disease_entity_notes?n("div",{staticClass:"alert alert-info mt-2"},[n("a",{attrs:{href:"https://github.com/monarch-initiative/mondo/issues/new/choose",target:"mondo"}},[t._v("Request a new MonDO term")]),t._v(" by submitting an issue on their "),n("a",{attrs:{href:"https://github.com/monarch-initiative/mondo"}},[t._v("GitHub project.")]),t._v(" (GitHub account required)\n            ")]):t._e()])],1)],1)}),[],!1,null,null,null).exports,D=n("08pa"),$=n("FD4A");function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var U={components:{CurationNotifications:v.a,DateField:D.default,ValidationError:c.a,ClassificationHistory:$.a},mixins:[o.a],data:function(){return{page:"mondo",updatedCuration:{}}},computed:M({},Object(i.c)("classifications",{classifications:"Items"})),methods:M({},Object(i.b)("classifications",{getAllClassifications:"getAllItems"})),mounted:function(){this.getAllClassifications()}},B=Object(d.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-container w-50"},[e("classification-history",{attrs:{curation:this.value}}),this._v(" "),e("div",{staticClass:"alert alert-secondary"},[this._v("\n        Classifications must be added to a curation via the GCI.\n    ")])],1)}),[],!1,null,null,null).exports,H={components:{DocumentsCard:n("CCjs").a},mixins:[o.a],data:function(){return{page:"documents",curation:{}}},watch:{updatedCuration:function(){this.curation=this.updatedCuration?this.updatedCuration:{}}}},L=Object(d.a)(H,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("documents-card",{attrs:{curation:this.curation}})],1)}),[],!1,null,null,null).exports,K=n("iWAU"),q=void 0;function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var V={props:["id"],components:{Phenotypes:b,Info:w.a,Mondo:N,CurationType:f,DeleteButton:C.a,Classification:B,Documents:L,TransferCurationControl:K.a},data:function(){return{currentStep:"info",steps:{info:{title:"Info",next:"curation-type"},"curation-type":{title:"Curation Type",next:"phenotypes"},phenotypes:{title:"Phenotypes",next:"mondo"},mondo:{title:"MonDO",next:"classification",back:"phenotypes"},documents:{title:"Documents",next:null,back:"classification"}},updatedCuration:{rationals:[]},standInCuration:{id:0,expert_panel:{},rationales:[]},errors:{}}},watch:{$route:function(t,e){this.setCurrentStep()},curation:function(t,e){void 0!==t&&this.setUpdatedCuration(t,e)}},computed:J(J(J({},Object(i.c)({user:"getUser"})),Object(i.c)("curations",{curations:"Items",getCuration:"getItemById"})),{},{title:function(){var t="Edit Curation: ";return this.curation.gene_symbol&&(t+=this.curation.gene_symbol,this.curation.expert_panel&&(t+=" for "+this.curation.expert_panel.name)),t},curation:function(){if(0==this.curations.length)return this.standInCuration;var t=this.getCuration(this.id);return t||this.standInCuration},curator:function(){return q.curation.curator?q.curation.curator.name:"--"},expertPanel:function(){return q.expert_panel?q.curation.expert_panel.name:"--"},selectedPanel:function(){return q.panels.find((function(t){return t.id==q.newPanelId}))},geneSymbolError:function(){return!(this.errors&&this.errors.gene_symbol&&this.errors.gene_symbol.length>0)&&null},currentStepIdx:function(){return Object.keys(this.steps).indexOf(this.currentStep)},nextStep:function(){return"function"==typeof this.steps[this.currentStep].next?this.steps[this.currentStep].next():this.steps[this.currentStep].next},previousStep:function(){if(this.steps[this.currentStep].back)return"function"==typeof this.steps[this.currentStep].back?this.steps[this.currentStep].back():this.steps[this.currentStep].back;var t=Object.keys(this.steps);return this.currentStepIdx>0?t[this.currentStepIdx-1]:null}}),methods:J(J(J({},Object(i.d)("messages",["addInfo","addAlert"])),Object(i.b)("curations",{fetchCuration:"fetchItem",storeNewItem:"storeNewItem",storeItemUpdates:"storeItemUpdates"})),{},{updateCuration:function(t,e){var n=this;return this.updatedCuration.nav=e,this.storeItemUpdates(this.updatedCuration).then((function(e){return n.addInfo("Updates saved for "+n.updatedCuration.gene_symbol+"."),n.$emit("saved"),t&&t(e),n.errors={},e})).catch((function(t){return n.errors=t.response.data.errors,t}))},navNext:function(t){this.nextStep?this.$router.push(this.$route.path+"#"+this.nextStep):this.$router.push("/")},navBack:function(t){this.previousStep&&this.$router.push(this.$route.path+"#"+this.previousStep)},exit:function(t){this.$router.push("/")},setUpdatedCuration:function(t,e){if(void 0!==t)return void 0===e||t.id!=e.id&&t.id&&0!=t.id?(this.fetchCuration(this.curation.id),void(this.updatedCuration=JSON.parse(JSON.stringify(this.curation)))):void(this.updatedCuration=JSON.parse(JSON.stringify(this.curation)))},cancel:function(){this.$emit("canceled"),this.clearForm()},clearForm:function(){this.updatedCuration={},this.errors={}},proceed:function(){this.currentStep="disease-entity-fields"},setCurrentStep:function(){this.$route.hash.substr(1)&&(this.currentStep=this.$route.hash.substr(1))}}),mounted:function(){this.fetchCuration(this.id),this.updatedCuration={},this.curation&&this.setUpdatedCuration(this.curation,{}),this.setCurrentStep()}},z=Object(d.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("router-link",{attrs:{to:"/curations"}},[t._v("\n            < Back to curations\n        ")])],1),t._v(" "),n("b-card",{attrs:{id:"edit-curation-modal"}},[n("template",{slot:"header"},[n("div",{staticClass:"d-flex justify-content-between"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"d-flex space-x-2"},[t.$store.state.features.transferEnabled?n("transfer-curation-control",{attrs:{curation:t.curation}}):t._e(),t._v(" "),n("router-link",{attrs:{to:"/curations/"+t.curation.id}},[t._v("\n                        view\n                    ")])],1)])]),t._v(" "),this.curation.id?t.user.canEditCuration(this.curation)?t._e():n("div",{staticClass:"alert alert-danger"},[t._v("\n            Sorry.  You don't have permission to edit this curation.\n        ")]):n("div",{staticClass:"alert alert-info"},[t._v("\n            Loading...\n        ")]),t._v(" "),t.curations&&t.user.canEditCuration(this.curation)?n("div",[n("b-form",{attrs:{id:"new-curation-form"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2 border-right"},[n("nav",{staticClass:"nav flex-column"},t._l(t.steps,(function(e,i){return n("router-link",{key:i,staticClass:"nav-link",class:{active:t.currentStep==i},attrs:{to:t.$route.path+"#"+i}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})),1)]),t._v(" "),n("div",{staticClass:"col-md-10"},[n(t.currentStep,{ref:"editPage",tag:"component",attrs:{value:t.updatedCuration,errors:t.errors},on:{input:function(e){t.updatedCuration=e}}})],1)]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/curations")}}},[t._v("Cancel")])]),t._v(" "),n("div",{staticClass:"col-md-8 text-right"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"curation"},on:{click:function(e){return t.updateCuration()}}},[t._v("Save")]),t._v(" "),t.nextStep?n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.updateCuration(t.exit)}}},[t._v("Save & exit")]):t._e(),t._v(" "),n("b-button",{directives:[{name:"show",rawName:"v-show",value:t.currentStepIdx>0,expression:"currentStepIdx > 0"}],attrs:{variant:"primary"},on:{click:function(e){return t.updateCuration(t.navBack,"back")}}},[t._v("Back")]),t._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.updateCuration(t.navNext,"next")}}},[t._v("\n                            "+t._s(t.nextStep?"Next":"Save and exit")+"\n                        ")])],1)])])],1):t._e()],2)],1)}),[],!1,null,null,null);e.default=z.exports},hjG7:function(t,e,n){var i=n("1f99");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(t.exports=i.locals)}}]);
//# sourceMappingURL=CurationEdit.7373492811e2bf71afaf.js.map