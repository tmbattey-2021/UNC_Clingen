(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qhHw:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={components:{Info:r("mLDf").a},data:function(){return{updatedCuration:{gene_symbol:null},errors:{}}},computed:a(a({},Object(n.c)({user:"getUser"})),{},{selectedPanel:function(){var t=this;return this.panels.find((function(e){return e.id==t.newPanelId}))},geneSymbolError:function(){return!(this.errors&&this.errors.gene_symbol&&this.errors.gene_symbol.length>0)&&null}}),methods:a(a(a({},Object(n.d)("messages",["addInfo","addAlert"])),Object(n.b)("curations",{fetchCuration:"fetchItem",storeNewItem:"storeNewItem",storeItemUpdates:"storeItemUpdates"})),{},{createCuration:function(){var t=this;return this.storeNewItem(this.updatedCuration).then((function(e){return t.$emit("saved"),t.$emit("created"),t.addInfo("Curation with "+t.updatedCuration.gene_symbol+" created."),t.$router.push("/curations/"+e.data.data.id+"/edit/#curation-type"),e})).catch((function(e){return t.errors=e.response.data.errors,e}))},clearForm:function(){this.updatedCuration={},this.errors={}}}),mounted:function(){}},c=r("KHd+"),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"new-curation-container"},[t.user.canAddCurations()?r("div",[r("p",[r("router-link",{attrs:{to:"/curations"}},[t._v("\n                    < Back to curations\n            ")])],1),t._v(" "),r("b-card",[r("template",{slot:"header"},[r("h3",[t._v("Add a curation to curate")])]),t._v(" "),r("b-form",{attrs:{id:"new-curation-form"}},[r("info",{attrs:{value:t.updatedCuration,errors:t.errors},on:{input:function(e){t.updatedCuration=e}}}),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1"},[r("button",{staticClass:"btn btn-secondary pull-left",attrs:{type:"button",id:"curation-proceed"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Cancel")])]),t._v(" "),r("div",{staticClass:"col-md-11 text-right"},[r("b-button",{attrs:{variant:"primary",id:"create-and-continue-btn"},on:{click:function(e){return t.createCuration()}}},[t._v("Create curation")])],1)])],1)],2)],1):r("div",{staticClass:"alert alert-danger"},[t._v("\n        Sorry.  You don't have permission to create curations.\n    ")])])}),[],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=CurationCreate.10a93e729e19cde9da77.js.map