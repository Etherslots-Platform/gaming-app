"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[430],{74998:(t,e,n)=>{n.r(e),n.d(e,{default:()=>L});var r=n(15537),a=n(85893),o=n(5255),i=n(17024),s=n(66530),c=n(83240),u=n(91864),l=n(57894),d=n(10698),m=n(27935),p=n(84002),f=n(96878),h=n(73845),v=n(9669),y=n.n(v),g=n(50175),_=n.n(g),b=n(74944),w=n(18001);function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function x(){x=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),s=new L(a||[]);return r(i,"_invoke",{value:w(t,n,s)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function m(){}function p(){}function f(){}var h={};c(h,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&n.call(y,o)&&(h=y);var g=f.prototype=m.prototype=Object.create(h);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function a(r,o,i,s){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==Z(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,s)}))}s(c.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=F(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function F(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,F(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=l(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,r(g,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(g),c(g,s,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function F(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function $(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){F(o,r,a,i,s,"next",t)}function s(t){F(o,r,a,i,s,"throw",t)}i(void 0)}))}}const k={mixins:[b.Z],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Maintenance")}},data:function(){return{data:{},maintenanceFormIsValid:null,maintenanceForm:new(_()),commandFormIsValid:null,commandForm:new(_())({command:null,arguments:{}}),migrationForm:new(_()),cacheForm:new(_()),clearQueueForm:new(_())({queue:null}),stopQueueWorkerForm:new(_())}},computed:{commands:function(){return this.data.commands?this.data.commands.map((function(t){return{value:t.class,text:t.description}})):[]},dataLoaded:function(){return this.data&&Object.keys(this.data).length>0}},created:function(){var t=this;return $(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y().get("/api/admin/maintenance");case 2:n=e.sent,r=n.data,t.data=r;case 5:case"end":return e.stop()}}),e)})))()},methods:{switchMaintenanceMode:function(){var t=this;return $(x().mark((function e(){var n,r,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data.maintenance_mode?"up":"down",e.next=3,t.maintenanceForm.post("/api/admin/maintenance/".concat(n));case 3:r=e.sent,a=r.data,t.data.maintenance_mode=!t.data.maintenance_mode,t.$store.dispatch("message/success",{text:a.message});case 7:case"end":return e.stop()}}),e)})))()},executeCommand:function(){var t=this;return $(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.commandForm.post("/api/admin/maintenance/command");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/success",{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},migrate:function(){var t=this;return $(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.migrationForm.post("/api/admin/maintenance/migrate");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/success",{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},clearCache:function(){var t=this;return $(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cacheForm.post("/api/admin/maintenance/cache");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/success",{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},clearQueue:function(){var t=this;return $(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.clearQueueForm.post("/api/admin/maintenance/queues/clear");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/success",{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},stopQueueWorker:function(){var t=this;return $(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stopQueueWorkerForm.post("/api/admin/maintenance/queues/stop");case 2:n=e.sent,r=n.data,t.$store.dispatch("message/success",{text:r.message});case 5:case"end":return e.stop()}}),e)})))()},copyToClipboard:function(t){return(0,w.vQ)(t.$el.querySelector("input"))}}};const L=(0,n(51900).Z)(k,(function(){var t=this,e=t._self._c;return e(s.Z,[e(l.Z,[e(i.Z,{attrs:{cols:"12"}},[e(a.Z,[e(f.Z,[e(h.qW,[t._v("\n            "+t._s(t.$t("Maintenance"))+"\n          ")])],1),t._v(" "),e(o.ZB,[e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("System info"))+"\n                ")]),t._v(" "),e(o.ZB,[e(m.Z,{attrs:{type:"list-item-three-line",loading:!t.dataLoaded}},[e("div",t._l(t.data.system_info,(function(n,r){return e("div",{key:r},[t._v("\n                        "+t._s(n.title)+": "+t._s(n.value)+"\n                      ")])})),0)])],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Application version"))+"\n                ")]),t._v(" "),e(o.ZB,[e(m.Z,{attrs:{type:"text",loading:!t.dataLoaded}},[t.data.update_available?e("p",{staticClass:"warning--text mb-0"},[e(u.Z,{attrs:{color:"warning",left:""}},[t._v("\n                        mdi-alert\n                      ")]),t._v("\n                      "+t._s(t.$t("New version {0} is available ({1} currently installed).",[t.data.latest_version,t.data.current_version]))+"\n                      "),e("a",{attrs:{href:"/admin/help/app#q10"}},[t._v(t._s(t.$t("How to upgrade?")))])],1):e("p",{staticClass:"success--text mb-0"},[e(u.Z,{attrs:{color:"success",left:""}},[t._v("\n                        mdi-check-all\n                      ")]),t._v("\n                      "+t._s(t.$t("Application is up-to-date (version {0} is installed).",[t.data.latest_version]))+"\n                    ")],1)])],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Cron"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("Some application tasks should be run on a regular basis."))+"\n                    "+t._s(t.$t("To automatically execute these tasks, add the following system cron job."))+"\n                    "+t._s(t.$t("If you are adding a cron job via cPanel, you will need to omit the leading asterisk characters."))+"\n                    "+t._s(t.$t("Please refer to the installation guide for more information on how to add a cron job."))+"\n                  ")]),t._v(" "),e(c.Z,{on:{submit:function(e){return e.preventDefault(),t.cron.apply(null,arguments)}}},[e(p.Z,{ref:"cron",attrs:{dense:"",outlined:"",readonly:"","append-icon":"mdi-content-copy",value:t.data.cron_job,disabled:!t.dataLoaded},on:{"click:append":function(e){return t.copyToClipboard(t.$refs.cron)}}})],1)],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Cache"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("The application caches templates, configuration, translation strings, aggregated data etc to improve performance."))+"\n                    "+t._s(t.$t("To clear all caches at once click the button below."))+"\n                  ")]),t._v(" "),e(c.Z,{on:{submit:function(e){return e.preventDefault(),t.clearCache.apply(null,arguments)}}},[e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:t.cacheForm.busy,loading:t.cacheForm.busy}},[t._v("\n                        "+t._s(t.$t("Clear cache"))+"\n                      ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Database"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("After upgrading to a new version of the application it is necessary to update the database objects."))+"\n                    "+t._s(t.$t("All current data will be preserved."))+"\n                  ")]),t._v(" "),e(c.Z,{on:{submit:function(e){return e.preventDefault(),t.migrate.apply(null,arguments)}}},[e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:t.migrationForm.busy,loading:t.migrationForm.busy}},[t._v("\n                        "+t._s(t.$t("Update database"))+"\n                      ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Tasks"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("The app provides a number of service tasks, which can be executed on demand."))+"\n                  ")]),t._v(" "),e(c.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.executeCommand.apply(null,arguments)}},model:{value:t.commandFormIsValid,callback:function(e){t.commandFormIsValid=e},expression:"commandFormIsValid"}},[e(d.Z,{attrs:{items:t.commands,label:t.$t("Task"),error:t.commandForm.errors.has("command"),"error-messages":t.commandForm.errors.get("command"),outlined:"",disabled:!t.data.commands},model:{value:t.commandForm.command,callback:function(e){t.$set(t.commandForm,"command",e)},expression:"commandForm.command"}}),t._v(" "),t.commandForm.command?[t._l(t.data.commands,(function(n){return[n.class===t.commandForm.command?t._l(n.arguments,(function(n,r){return e(p.Z,{key:r,attrs:{label:t.$t(n.title),rules:[t.validationRequired],placeholder:n.default,error:t.commandForm.errors.has("arguments"),"error-messages":t.commandForm.errors.get("arguments"),outlined:""},model:{value:t.commandForm.arguments[n.id],callback:function(e){t.$set(t.commandForm.arguments,n.id,e)},expression:"commandForm.arguments[arg.id]"}})})):t._e()]}))]:t._e(),t._v(" "),e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.commandForm.command||!t.commandFormIsValid||t.commandForm.busy,loading:t.commandForm.busy}},[t._v("\n                        "+t._s(t.$t("Execute"))+"\n                      ")])],1)],2)],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Maintenance mode"))+"\n                ")]),t._v(" "),e(o.ZB,[e("p",[t._v("\n                    "+t._s(t.$t("You can enable maintenance mode while updating the application or performing other maintenance tasks so that no one except administrators can use the site."))+"\n                  ")]),t._v(" "),e(c.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.switchMaintenanceMode.apply(null,arguments)}},model:{value:t.maintenanceFormIsValid,callback:function(e){t.maintenanceFormIsValid=e},expression:"maintenanceFormIsValid"}},[e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.maintenanceFormIsValid||t.maintenanceForm.busy,loading:t.maintenanceForm.busy}},[t.data.maintenance_mode?[t._v("\n                          "+t._s(t.$t("Disable maintenance mode"))+"\n                        ")]:[t._v("\n                          "+t._s(t.$t("Enable maintenance mode"))+"\n                        ")]],2)],1)],1)],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Queues"))+"\n                ")]),t._v(" "),e(o.ZB,[e(l.Z,[e(i.Z,[e(r.Z,{attrs:{to:{name:"admin.maintenance.jobs.index"},color:"primary"}},[t._v("\n                        "+t._s(t.$t("Jobs"))+"\n                      ")]),t._v(" "),e(r.Z,{attrs:{to:{name:"admin.maintenance.failed-jobs.index"},color:"primary"}},[t._v("\n                        "+t._s(t.$t("Failed jobs"))+"\n                      ")])],1)],1),t._v(" "),e(c.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.clearQueue.apply(null,arguments)}}},[e(d.Z,{attrs:{items:t.data.queues,label:t.$t("Queue"),outlined:"",disabled:!t.data.queues,"hide-details":!0},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:!t.clearQueueForm.queue||t.clearQueueForm.busy,loading:t.clearQueueForm.busy}},[t._v("\n                            "+t._s(t.$t("Delete all jobs from the queue"))+"\n                          ")])],1)]},proxy:!0}]),model:{value:t.clearQueueForm.queue,callback:function(e){t.$set(t.clearQueueForm,"queue",e)},expression:"clearQueueForm.queue"}})],1),t._v(" "),e(c.Z,{staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.stopQueueWorker.apply(null,arguments)}}},[e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[e(r.Z,{attrs:{type:"submit",color:"primary",disabled:t.stopQueueWorkerForm.busy,loading:t.stopQueueWorkerForm.busy}},[t._v("\n                        "+t._s(t.$t("Stop queue worker"))+"\n                      ")])],1)],1)],1)],1)],1)],1),t._v(" "),e(l.Z,[e(i.Z,[e(a.Z,{attrs:{outlined:""}},[e(o.EB,{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(t.$t("Log files"))+"\n                ")]),t._v(" "),e(o.ZB,[e(m.Z,{attrs:{type:"button",loading:!t.dataLoaded}},[t.data.log_files&&t.data.log_files.length?e("div",t._l(t.data.log_files,(function(n,a){return e(r.Z,{key:a,staticClass:"text-lowercase",attrs:{color:n.isWritable?"primary":"error",tile:"",text:"",to:{name:"admin.maintenance.logs.show",params:{file:n.name}}}},[e(u.Z,{attrs:{left:""}},[t._v("\n                          mdi-file\n                        ")]),t._v("\n                        "+t._s(n.name)+".log\n                        ("+t._s(n.size)+" "+t._s(t.$t("MB"))+")\n                        "),n.isWritable?t._e():e("span",{staticClass:"text-uppercase"},[t._v("\n                          "+t._s(t.$t("Permission error"))+"!\n                        ")])],1)})),1):e("div",[t._v("\n                      "+t._s(t.$t("There are no log files."))+"\n                    ")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);