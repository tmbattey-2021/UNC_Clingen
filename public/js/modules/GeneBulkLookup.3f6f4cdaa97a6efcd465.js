(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+MGk":function(t,e,r){"use strict";r("lWtR")},"+bMS":function(t,e,r){"use strict";var s={props:["value","errors"],components:{ValidationError:r("ttp2").a},data:function(){return{currentTab:0,hasHeader:!1}},computed:{numericCurrentTab:{get:function(){return parseInt(this.currentTab)},set:function(t){this.currentTab=t}}},watch:{currentTab:function(t,e){localStorage.setItem("bulk-upload-form-tab-index",t)}},methods:{processFile:function(t){var e=this;if(t.length>0&&"text/csv"==t[0].type){var r=new FileReader;r.addEventListener("load",(function(t){var r=t.target.result;if(e.hasHeader){var s=r.split("\n");s.splice(0,1);e.$emit("input",s.join(","))}else e.$emit("input",r)})),r.addEventListener("progress",(function(t){if(t.loaded&&t.total){var e=t.loaded/t.total*100;console.log("progress: ".concat(Math.round(e)))}})),r.readAsText(t[0])}}},mounted:function(){var t=localStorage.getItem("bulk-upload-form-tab-index");this.currentTab=t||0}},n=r("KHd+"),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-tabs",{staticClass:"border",attrs:{vertical:"",pills:"",card:""},model:{value:t.numericCurrentTab,callback:function(e){t.numericCurrentTab=e},expression:"numericCurrentTab"}},[r("b-tab",{attrs:{title:"Manual entry"}},[r("label",{attrs:{for:"gene-symbol-input"}},[t._v("Gene Symbols:")]),t._v("\n             \n            "),r("textarea",{staticClass:"form-control",attrs:{cols:"10",rows:"3",id:"gene-symbol-input",maxlength:"1900",placeholder:"Comma, space, or new-line separated gene symboels, i.e.: BCRA1, TP53 ABSC"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),r("div",{staticClass:"mt-1"},[r("button",{staticClass:"btn btn-sm btn-light border",on:{click:function(e){return t.$emit("input","")}}},[t._v("Clear")]),t._v(" "),r("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.$emit("lookup")}}},[t._v("Search")]),t._v(" "),r("button",{staticClass:"btn btn-primary btn-sm float-right",on:{click:function(e){return t.$emit("getCsv")}}},[t._v("Get CSV")])])]),t._v(" "),r("b-tab",{attrs:{title:"CSV Upload"}},[r("div",[r("label",{attrs:{for:"csv-upload"}},[t._v("CSV file: ")]),t._v(" "),r("input",{staticClass:"d-block",attrs:{type:"file",accept:"csv",id:"csv-upload"},on:{change:function(e){return t.processFile(e.target.files)}}}),t._v(" "),r("div",{staticClass:"text-info text-small"},[r("small",[t._v("File should contain a single column with gene symbols.")])]),t._v(" "),r("div",{staticClass:"form-check my-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.hasHeader,expression:"hasHeader"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"has-header"},domProps:{checked:Array.isArray(t.hasHeader)?t._i(t.hasHeader,null)>-1:t.hasHeader},on:{change:function(e){var r=t.hasHeader,s=e.target,n=!!s.checked;if(Array.isArray(r)){var a=t._i(r,null);s.checked?a<0&&(t.hasHeader=r.concat([null])):a>-1&&(t.hasHeader=r.slice(0,a).concat(r.slice(a+1)))}else t.hasHeader=n}}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"has-header"}},[t._v(" has header row")])])]),t._v(" "),r("div",{staticClass:"mt-2"},[r("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.$emit("lookup")}}},[t._v("Search")]),t._v(" "),r("button",{staticClass:"btn btn-primary btn-sm float-right",on:{click:function(e){return t.$emit("getCsv")}}},[t._v("Get CSV")])])])],1)],1)}),[],!1,null,null,null);e.a=a.exports},"2Xr8":function(t,e,r){"use strict";r("5FTD")},"5FTD":function(t,e,r){var s=r("yAls");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,n);s.locals&&(t.exports=s.locals)},Mkuz:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".phenotype[data-v-30505e96]{color:#666;margin-bottom:.5rem}.phenotype.curated[data-v-30505e96]{color:#000}.phenotypes-table[data-v-30505e96]{width:100%;table-layout:fixed}.phenotypes-table th[data-v-30505e96]{width:calc(50% - 3rem)}.phenotypes-table th[data-v-30505e96]:first-child{width:6rem}",""])},lWtR:function(t,e,r){var s=r("Mkuz");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,n);s.locals&&(t.exports=s.locals)},sBdY:function(t,e,r){"use strict";r.r(e);r("wd/R");var s=r("+bMS"),n=r("wCxy");function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}var o={components:{LookupForm:s.a,FilterControl:n.a},props:{},data:function(){return{geneSymbols:[],results:[],fields:[{key:"gene_symbol",label:"Gene",sortable:!0},{key:"phenotypes",label:"Phenotypes",sortable:!1}],loadingResults:!1,filters:{gene:[]},formErrors:[]}},computed:{emptyText:function(){return"Add comma speparated gene symbols in the textarea to do a bulk lookup"},responseGenes:function(){return a(new Set(this.results.map((function(t){return t.gene_symbol}))))},filteredResults:function(){return JSON.parse(JSON.stringify(this.results))},resultsPanels:function(){if(0==this.results.length)return[];var t=this.results.filter((function(t){return null!==t.expert_panel})).map((function(t){return t.expert_panel.name}));return a(new Set(t))},resultsClassifications:function(){if(0==this.results.length)return[];var t=this.results.filter((function(t){return null!==t.current_classification})).map((function(t){return t.current_classification.name}));return a(new Set(t))},resultsStatuses:function(){if(0==this.results.length)return[];var t=this.results.filter((function(t){return null!==t.current_status})).map((function(t){return t.current_status?t.current_status.name:null}));return a(new Set(t))}},methods:{search:function(){var t=this;this.formErrors=[],this.loadingResults=!0,axios.post("/api/genes",{where:{gene_symbol:this.geneSymbols.split(/[, \n]/)},with:["phenotypes"]}).then((function(e){return console.info("response",e),t.results=e.data,console.info("this.results",t.results),e})).catch((function(e){var r=Object.values(e.response.data.errors).flat();console.log(r),t.formErrors=r})).then((function(e){t.loadingResults=!1}))},addFilter:function(t,e){-1!=Object.keys(this.filters).indexOf(t)?this.filters[t].push(e):alert('Bad filter key. Valid filter keys include: "gene", "expertPanel", "classification", and "status"')},removeFilter:function(t,e){var r=this.filters[t].indexOf(e);if(-1!=r){var s=JSON.parse(JSON.stringify(this.filters[t]));s.splice(r,1),console.log(s),this.$set(this.filters,t,s)}},toggleFilter:function(t,e){this.filters[t].indexOf(e)<0?this.addFilter(t,e):this.removeFilter(t,e)},downloadCsv:function(){var t=this;this.search(),axios.post("/api/genes/csv",{where:{gene_symbol:this.geneSymbols.split(/[, \n]/)},with:["phenotypes"]}).then((function(t){var e=document.createElement("a");e.style.display="none",document.body.appendChild(e),console.log(t.data),e.href=window.URL.createObjectURL(new Blob([t.data,{type:"text/csv"}])),e.setAttribute("download","bulk-gene-lookup-results.csv"),e.click(),document.body.removeChild(e)})).catch((function(e){var r=Object.values(e.response.data.errors).flat();console.log(r),t.formErrors=r}))},phenotypeIsInCuration:function(t,e){return e.phenotypes.map((function(t){return t.mim_number})).indexOf(t.mim_number)>-1}}},l=(r("+MGk"),r("KHd+")),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("p",{staticClass:"text-grey"},[t._v("\n            Look OMIM phenotypes for genes by gene symbol.\n        ")]),t._v(" "),t.formErrors.length>0?r("div",{staticClass:"alert alert-danger"},[r("ul",{staticClass:"mb-0"},t._l(t.formErrors,(function(e,s){return r("li",{key:s},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),r("lookup-form",{staticClass:"mb-3",on:{lookup:t.search,getCsv:t.downloadCsv},model:{value:t.geneSymbols,callback:function(e){t.geneSymbols=e},expression:"geneSymbols"}}),t._v(" "),t.results.length>0?r("div",[r("h5",[t._v("Curations:")]),t._v(" "),r("b-table",{staticClass:"text-small",attrs:{fields:t.fields,items:t.filteredResults,"primary-key":"id",bordered:"","show-empty":"","empty-text":t.emptyText,busy:t.loadingResults,small:!0,striped:""},scopedSlots:t._u([{key:"cell(phenotypes)",fn:function(e){var s=e.value;return[0==s.length?r("strong",{staticClass:"mb-3 d-block"},[t._v("\n                        No OMIM phenotypes were found for this gene.\n                    ")]):r("table",{staticClass:"table phenotypes-table w-100"},[r("thead",[r("tr",[r("th",{attrs:{width:"10%"}},[t._v("OMIM ID")]),t._v(" "),r("th",{attrs:{width:"45%"}},[t._v("Name")]),t._v(" "),r("th",[t._v("MOI")])])]),t._v(" "),r("tbody",t._l(s,(function(e,s){return r("tr",{key:s},[r("td",[t._v(t._s(e.mim_number))]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.moi))])])})),0)])]}}],null,!1,488963934)},[r("div",{staticClass:"text-center",attrs:{slot:"table-busy"},slot:"table-busy"},[t._v("\n                    Looking for curations...\n                ")])])],1):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"mb-0"},[this._v("Bulk Gene/Phenotype Lookup")])])}],!1,null,"30505e96",null);e.default=c.exports},ttp2:function(t,e,r){"use strict";var s={props:["messages"],computed:{hasErrors:function(){return void 0!==this.messages}}},n=r("KHd+"),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.hasErrors,expression:"hasErrors"}],staticClass:"text-danger mt-1"},t._l(t.messages,(function(e,s){return r("div",{key:s},[r("small",[t._v(t._s(e))])])})),0)])}),[],!1,null,null,null);e.a=a.exports},wCxy:function(t,e,r){"use strict";var s={props:{items:{type:Array,required:!0},title:{type:String,default:"Filter"},selectedFilters:{type:Array,required:!0}}},n=(r("2Xr8"),r("KHd+")),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h6",[t._v(t._s(t.title))]),t._v(" "),r("ul",{staticClass:"list-group text-small"},t._l(t.items,(function(e){return r("li",{key:e,staticClass:"list-group-item cursor-pointer",class:{selected:t.selectedFilters.includes(e)},on:{click:function(r){return t.$emit("toggle",e)}}},[t.selectedFilters.includes(e)?r("span",{staticClass:"btn btn-sm float-right cursor-pointer"},[t._v("\n                x\n            ")]):t._e(),t._v("\n            "+t._s(e)+"\n        ")])})),0)])}),[],!1,null,null,null);e.a=a.exports},yAls:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"li.selected{text-decoration:underline;font-weight:700}",""])}}]);
//# sourceMappingURL=GeneBulkLookup.3f6f4cdaa97a6efcd465.js.map