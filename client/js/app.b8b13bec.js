(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],d=0,g=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&g.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"42ee":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("Bug-Report")]),a("img",{staticClass:"img-fluid ml-2 mt-4",staticStyle:{height:"40px",width:"40px"},attrs:{id:"bugg",src:"https://i.pinimg.com/originals/8d/6d/bf/8d6dbf5e345d59715f7dc043ecb23bc2.png"}}),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),l=a.n(c),u=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},g=d,p=(a("6659"),a("2877")),m=Object(p["a"])(g,n,r,!1,null,"467d4d60",null),b=m.exports,h={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:b}},f=h,v=(a("5c0b"),Object(p["a"])(f,o,i,!1,null,null,null)),B=v.exports,w=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home text-align-center"},[a("button",{staticClass:"btn btn-sm btn-outline-warning mt-5 mb-2",on:{click:function(e){t.inputVisible=!t.inputVisible}}},[t._v("Report Bug")]),a("div",{staticClass:"card"},[t.inputVisible?a("img",{staticClass:"img-fluid ml-2 mt-4",staticStyle:{height:"60px",width:"70px"},attrs:{id:"buggy",src:"https://i1.wp.com/freepngimages.com/wp-content/uploads/2017/06/stag-beetle-no-background.png?fit=769%2C913"}}):t._e(),a("div",{staticClass:"card-body"},[t.inputVisible?a("form",{staticClass:"mb-5",on:{submit:function(e){return e.preventDefault(),t.addBug()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control w-25",attrs:{type:"text",id:"title",placeholder:"Enter Title Here...",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control w-50",attrs:{type:"text",id:"description",placeholder:"Enter Description Here...",required:""},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Confirm")])]):t._e(),a("table",{staticClass:"table text-center",attrs:{id:"bugTable"}},[a("tr",[a("th",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Click to sort"},on:{click:function(e){return t.sortTable(0)}}},[a("u",[t._v("Title")])]),a("th",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Click to sort"},on:{click:function(e){return t.sortTable(1)}}},[a("u",[t._v("Reported By")])]),a("th",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Click to sort"},on:{click:function(e){return t.sortTable(2)}}},[a("u",[t._v("Status")])]),a("th",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Click to sort"},on:{click:function(e){return t.sortTable(3)}}},[a("u",[t._v("Last Updated")])])]),t._l(t.bugs,(function(t){return a("bugs",{key:t.id,attrs:{bugData:t,id:t.id}})}))],2)])])])},_=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"Bugs",on:{click:t.openBug}},[a("td",{staticClass:"text-capitalize",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Click to open"}},[(this.$auth.userInfo.email=t.user.email)?a("i",{staticClass:"fa fa-trash-o text-danger ml-2",on:{click:function(e){return t.removeBug(t.bugData)}}}):t._e(),t._v(" "+t._s(t.bugData.title)+" ")]),a("td",[t._v(t._s(t.bugData.creator.name))]),0==t.bugData.closed?a("td",{staticClass:"text-success"},[t._v(t._s(this.status))]):a("td",{staticClass:"text-danger"},[t._v(t._s(this.status))]),a("td",[t._v(t._s(t.updatedDate))])])},x=[],N=a("a454"),k={name:"Bugs",props:["bugData"],mounted(){$('[data-toggle="tooltip"]').on("click",(function(){$(this).tooltip("hide")}))},data(){return{status:this.bugData.closed?"Closed":"Open",updatedDate:new Date(this.bugData.updatedAt).toLocaleString()}},computed:{user(){return this.$store.state.profile}},methods:{openBug(){$("#"+this.bugData.id).tooltip("hide"),this.$router.push({name:"bug-info",params:{id:this.bugData.id}})},removeBug(t){this.$store.dispatch("removeBug",{bugId:this.bugData.id,creatorEmail:this.bugData.creatorEmail})}},components:{BugInfo:N["default"]}},D=k,E=(a("c3bc"),Object(p["a"])(D,y,x,!1,null,"09fc2aa2",null)),T=E.exports,I={name:"home",mounted(){this.$store.dispatch("getBugs"),$('[data-toggle="tooltip"]').tooltip({trigger:"hover"})},data(){return{newBug:{},inputVisible:!1}},methods:{addBug(){this.$store.dispatch("addBug",{title:this.newBug.title,description:this.newBug.description,creatorEmail:this.$auth.userInfo.email}),this.newBug={title:"",description:""}},sortTable(t){let e,a,s,o,i,n,r,c,l=0;e=document.getElementById("bugTable"),s=!0,c="asc";while(s){for(s=!1,a=e.rows,o=1;o<a.length-1;o++)if(r=!1,i=a[o].getElementsByTagName("TD")[t],n=a[o+1].getElementsByTagName("TD")[t],"asc"==c){if(i.innerHTML.toLowerCase()>n.innerHTML.toLowerCase()){r=!0;break}}else if((c="desc")&&i.innerHTML.toLowerCase()<n.innerHTML.toLowerCase()){r=!0;break}r?(a[o].parentNode.insertBefore(a[o+1],a[o]),s=!0,l++):0==l&&"asc"==c&&(c="desc",s=!0)}}},computed:{bugs(){return this.$store.state.bugs}},components:{Bugs:T}},P=I,O=(a("e668"),Object(p["a"])(P,C,_,!1,null,null,null)),j=O.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center bg-zap"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},H=[],V={name:"Profile",computed:{profile(){return this.$store.state.profile}}},A=V,L=(a("9651"),Object(p["a"])(A,S,H,!1,null,"1b25bac4",null)),Y=L.exports;s["a"].use(w["a"]);const M=[{path:"/",name:"Home",component:j,beforeEnter:u["b"]},{path:"/profile",name:"Profile",component:Y,beforeEnter:u["b"]},{path:"/bugs/:id",name:"bug-info",component:()=>Promise.resolve().then(a.bind(null,"a454")),beforeEnter:u["b"]}],z=new w["a"]({routes:M});var R=z,U=a("2f62");let q=location.host.includes("localhost")?"http://localhost:3000/":"/";const G=l.a.create({baseURL:q+"api",timeout:4e3,withCredentials:!0});var J=a("6688"),W=a.n(J);s["a"].use(U["a"]);var K=new U["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e}},actions:{setBearer({},t){G.defaults.headers.authorization=t},resetBearer(){G.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await G.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t,dispatch:e}){try{let e=await G.get("bugs");console.log(e.data.data),t("setBugs",e.data.data)}catch(a){console.error(a)}},async getBugById({commit:t,dispatch:e},a){try{let s=await G.get("bugs/"+a);t("setActiveBug",s.data),e("getNotes",a)}catch(s){console.error(s)}},async addBug({commit:t,dispatch:e},a){try{let t=await G.post("bugs",a);console.log(t.data),e("getBugs"),R.push({name:"bug-info",params:{id:t.data.data.id}})}catch(s){console.error(s)}},async editBug({commit:t,dispatch:e},a){try{console.log(a);await G.put("bugs/"+a.id,a);e("getBugById",a.id)}catch(s){console.error(s)}},async removeBug({commit:t,dispatch:e},a){await W.a.fire({title:"Are you sure you want to delete bug?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{if(t.value){W.a.fire("Closed!","Your bug has been deleted.","success");try{G.delete("bugs/"+a.bugId,a.creatorEmail);e("getBugs")}catch(s){console.error(s)}}R.push({name:"Home"})})},async closeBug({commit:t,dispatch:e},a){await W.a.fire({title:"Are you sure you want to close bug?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, close it!"}).then(s=>{if(s.value){W.a.fire("Closed!","Your bug has been closed.","success");try{G.put("bugs/"+a.bugId,a);e("getBugById",a.bugId),t("setBugs",a)}catch(o){console.error(o)}R.push({name:"Home"})}})},async getNotes({commit:t,dispatch:e},a){try{let e=await G.get("bugs/"+a+"/notes");t("setNotes",e.data)}catch(s){console.error(s)}},async addNote({commit:t,dispatch:e},a){try{let t=await G.post("notes",a);console.log(t.data),e("getNotes",a.bugId)}catch(s){console.error(s)}},async removeNote({commit:t,dispatch:e},a){await W.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{if(t.value){W.a.fire("Deleted!","Your file has been deleted.","success");try{G.delete("notes/"+a.id);e("getBugById",a.bugId)}catch(s){console.error(s)}}})}}});const Q="bcw-cody.us.auth0.com",X="https://bug-report.com",F="iyYK5tQqp3CmGmw4jjAUk00gVfllXOV1";s["a"].use(u["a"],{domain:Q,clientId:F,audience:X,onRedirectCallback:t=>{R.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:R,store:K,render:function(t){return t(B)}}).$mount("#app")},"57cb":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},6659:function(t,e,a){"use strict";var s=a("7515"),o=a.n(s);o.a},7515:function(t,e,a){},9651:function(t,e,a){"use strict";var s=a("ba82"),o=a.n(s);o.a},"9c0c":function(t,e,a){},a454:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bug container"},[a("div",{staticClass:"border border-shadow mt-2 card"},[a("div",{staticClass:"card-header"},[a("h2",{staticClass:"text-capitalize text-center"},[t._v("Title: "+t._s(t.bug.title))])]),0==t.bug.closed?a("span",{staticClass:"text-success ml-4"},[t._v("Status: Open")]):a("span",{staticClass:"text-danger ml-4"},[t._v("Status: Closed")]),a("h6",{staticClass:"ml-4"},[t._v("Created: "+t._s(new Date(t.bug.createdAt).toLocaleString()))]),a("h6",{staticClass:"ml-4"},[t._v("Created By: "+t._s(t.bug.creatorEmail))]),a("hr"),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"text-capitalize"},[t._v("Description:")]),a("p",[t._v(t._s(t.bug.description))]),a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{disabled:1==t.bug.closed},on:{click:function(e){return t.closeBug()}}},[t._v("Close Bug")]),this.$auth.userInfo?a("button",{staticClass:"btn btn-sm btn-outline-warning ml-2",attrs:{disabled:1==t.bug.closed},on:{click:function(e){t.editVisible=!t.editVisible}}},[t._v("Edit Bug")]):t._e(),t.editVisible?a("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(t.bug.id)}}},[t.editVisible?a("img",{staticClass:"img-fluid ml-2 mt-4",staticStyle:{height:"40px",width:"40px"},attrs:{id:"buggy",src:"https://pngimg.com/uploads/bug/bug_PNG4001.png"}}):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedBug.title,expression:"editedBug.title"}],staticClass:"form-control w-25",attrs:{type:"text",id:"title",placeholder:"Enter Title Here..."},domProps:{value:t.editedBug.title},on:{input:function(e){e.target.composing||t.$set(t.editedBug,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedBug.description,expression:"editedBug.description"}],staticClass:"form-control w-50",attrs:{type:"text",id:"description",placeholder:"Enter Description Here..."},domProps:{value:t.editedBug.description},on:{input:function(e){e.target.composing||t.$set(t.editedBug,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-sm btn-outline-success mb-2",attrs:{type:"submit"}},[t._v("Submit")])]):t._e(),a("hr"),a("button",{staticClass:"btn btn-sm btn-outline-success mb-2",attrs:{disabled:1==t.bug.closed},on:{click:function(e){t.noteVisible=!t.noteVisible}}},[t._v("Add Note")]),t.noteVisible?a("form",{on:{submit:function(e){return e.preventDefault(),t.addNote()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.comment,expression:"newNote.comment"}],staticClass:"form-control w-50",attrs:{type:"text",id:"comment",placeholder:"Enter Comment Here..."},domProps:{value:t.newNote.comment},on:{input:function(e){e.target.composing||t.$set(t.newNote,"comment",e.target.value)}}})]),a("button",{staticClass:"btn btn-sm btn-outline-success mb-2",attrs:{type:"submit"}},[t._v("Submit")])]):t._e(),a("br"),t._m(0),t._l(t.notes,(function(t){return a("notes",{key:t.id,attrs:{noteData:t}})}))],2)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("u",[t._v("NOTES:")])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notes shadow-lg border"},[a("ul",[a("li",[a("h5",{staticClass:"text-capitalize"},[a("span",[t._v(t._s(t.noteData.creatorEmail)+": "+t._s(t.noteData.content))]),this.$auth.userInfo?a("i",{staticClass:"fa fa-trash-o text-danger ml-2",on:{click:function(e){return t.removeNote(t.noteData)}}}):t._e()])])])])},n=[],r={name:"notes",props:["noteData"],data(){return{}},computed:{},methods:{removeNote(t){this.$store.dispatch("removeNote",{id:this.noteData.id,bugId:this.noteData.bugId})}},components:{}},c=r,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,"2e4eb960",null),d=u.exports,g={name:"bug",mounted(){this.$store.dispatch("getBugById",this.$route.params.id),this.$store.dispatch("getNotes",this.$route.params.id)},data(){return{editedBug:{},newNote:{},noteVisible:!1,editVisible:!1,disableEdit:!0,title:"",description:"",name:""}},computed:{bug(){return this.$store.state.activeBug},bugs(){return this.$store.state.bugs},notes(){return this.$store.state.notes}},methods:{closeBug(){this.$store.dispatch("closeBug",{bugId:this.bug.id,closed:!0})},addNote(){this.$store.dispatch("addNote",{content:this.newNote.comment,creatorEmail:this.$auth.userInfo.email,name:this.$auth.userInfo.name,bugId:this.bug.id}),this.newNote.comment=""},editBug(t){this.$store.dispatch("editBug",{id:t,title:this.editedBug.title,description:this.editedBug.description,creatorEmail:this.$auth.userInfo.email}),this.editedBug={title:"",description:""}}},components:{Notes:d}},p=g,m=(a("f8ef"),Object(l["a"])(p,s,o,!1,null,"11e6ad08",null));e["default"]=m.exports},ba82:function(t,e,a){},c3bc:function(t,e,a){"use strict";var s=a("42ee"),o=a.n(s);o.a},e668:function(t,e,a){"use strict";var s=a("57cb"),o=a.n(s);o.a},e69a:function(t,e,a){},f8ef:function(t,e,a){"use strict";var s=a("e69a"),o=a.n(s);o.a}});