(function(t){function e(e){for(var s,n,r=e[0],c=e[1],u=e[2],d=0,g=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(g.length)g.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"393d":function(t,e,a){"use strict";var s=a("565b"),i=a.n(s);i.a},"565b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-bug",attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("Bug-Report")]),a("img",{staticClass:"img-fluid ml-2 mt-4",staticStyle:{height:"40px",width:"40px"},attrs:{id:"bugg",src:"https://i.pinimg.com/originals/8d/6d/bf/8d6dbf5e345d59715f7dc043ecb23bc2.png"}}),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),u=a.n(c),l=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},g=d,m=(a("f142"),a("2877")),p=Object(m["a"])(g,n,r,!1,null,"3981d5ee",null),b=p.exports,h={name:"App",async beforeCreate(){await Object(l["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:b}},f=h,v=(a("5c0b"),Object(m["a"])(f,i,o,!1,null,null,null)),B=v.exports,w=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home text-align-center"},[a("button",{staticClass:"btn btn-sm btn-outline-warning mt-5 mb-2",on:{click:function(e){t.inputVisible=!t.inputVisible}}},[t._v("Report Bug")]),a("div",{staticClass:"card"},[t.inputVisible?a("img",{staticClass:"img-fluid ml-2 mt-4",staticStyle:{height:"60px",width:"70px"},attrs:{id:"buggy",src:"https://i1.wp.com/freepngimages.com/wp-content/uploads/2017/06/stag-beetle-no-background.png?fit=769%2C913"}}):t._e(),a("div",{staticClass:"card-body"},[t.inputVisible?a("form",{staticClass:"mb-5",on:{submit:function(e){return e.preventDefault(),t.addBug()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control w-25",attrs:{type:"text",id:"title",placeholder:"Enter Title Here...",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control w-50",attrs:{type:"text",id:"description",placeholder:"Enter Description Here...",required:""},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Confirm")])]):t._e(),a("table",{staticClass:"table text-center",attrs:{id:"bugTable"}},[a("tr",[a("th",{on:{click:function(e){return t.sortTable(0)}}},[a("u",[t._v("Title")])]),a("th",{on:{click:function(e){return t.sortTable(1)}}},[a("u",[t._v("Reported By")])]),a("th",{on:{click:function(e){return t.sortTable(2)}}},[a("u",[t._v("Status")])]),a("th",{on:{click:function(e){return t.sortTable(3)}}},[a("u",[t._v("Last Updated")])])]),t._l(t.bugs,(function(t){return a("bugs",{key:t.id,attrs:{bugData:t}})}))],2)])])])},_=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"Bugs",on:{click:t.openBug}},[a("td",{staticClass:"text-capitalize"},[(this.$auth.userInfo.email=t.user.email)?a("i",{staticClass:"fa fa-trash-o text-danger ml-2",on:{click:function(e){return t.removeBug(t.bugData)}}}):t._e(),t._v(" "+t._s(t.bugData.title)+" ")]),a("td",[t._v(t._s(t.bugData.creator.name))]),0==t.bugData.closed?a("td",{staticClass:"text-success"},[t._v(t._s(this.status))]):a("td",{staticClass:"text-danger"},[t._v(t._s(this.status))]),a("td",[t._v(t._s(t.updatedDate))])])},$=[],x=a("a454"),N={name:"Bugs",props:["bugData"],data(){return{status:this.bugData.closed?"Closed":"Open",updatedDate:new Date(this.bugData.updatedAt).toLocaleString()}},computed:{user(){return this.$store.state.profile}},methods:{openBug(){this.$router.push({name:"bug-info",params:{id:this.bugData.id}})},removeBug(t){this.$store.dispatch("removeBug",{bugId:this.bugData.id,creatorEmail:this.bugData.creatorEmail})}},components:{BugInfo:x["default"]}},D=N,T=(a("393d"),Object(m["a"])(D,y,$,!1,null,"27f9c64c",null)),E=T.exports,k={name:"home",mounted(){this.$store.dispatch("getBugs")},data(){return{newBug:{},inputVisible:!1}},methods:{addBug(){this.$store.dispatch("addBug",{title:this.newBug.title,description:this.newBug.description,creatorEmail:this.$auth.userInfo.email}),this.newBug={title:"",description:""}},sortTable(t){let e,a,s,i,o,n,r,c,u=0;e=document.getElementById("bugTable"),s=!0,c="asc";while(s){for(s=!1,a=e.rows,i=1;i<a.length-1;i++)if(r=!1,o=a[i].getElementsByTagName("TD")[t],n=a[i+1].getElementsByTagName("TD")[t],"asc"==c){if(o.innerHTML.toLowerCase()>n.innerHTML.toLowerCase()){r=!0;break}}else if((c="desc")&&o.innerHTML.toLowerCase()<n.innerHTML.toLowerCase()){r=!0;break}r?(a[i].parentNode.insertBefore(a[i+1],a[i]),s=!0,u++):0==u&&"asc"==c&&(c="desc",s=!0)}}},computed:{bugs(){return this.$store.state.bugs}},components:{Bugs:E}},I=k,P=(a("e668"),Object(m["a"])(I,C,_,!1,null,null,null)),O=P.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center bg-zap"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},S=[],H={name:"Profile",computed:{profile(){return this.$store.state.profile}}},V=H,A=(a("9651"),Object(m["a"])(V,j,S,!1,null,"1b25bac4",null)),L=A.exports;s["a"].use(w["a"]);const Y=[{path:"/",name:"Home",component:O,beforeEnter:l["b"]},{path:"/profile",name:"Profile",component:L,beforeEnter:l["b"]},{path:"/bugs/:id",name:"bug-info",component:()=>Promise.resolve().then(a.bind(null,"a454")),beforeEnter:l["b"]}],M=new w["a"]({routes:Y});var z=M,R=a("2f62");let U=location.host.includes("localhost")?"http://localhost:3000/":"/";const q=u.a.create({baseURL:U+"api",timeout:4e3,withCredentials:!0});var G=a("6688"),J=a.n(G);s["a"].use(R["a"]);var W=new R["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e}},actions:{setBearer({},t){q.defaults.headers.authorization=t},resetBearer(){q.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await q.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t,dispatch:e}){try{let e=await q.get("bugs");console.log(e.data.data),t("setBugs",e.data.data)}catch(a){console.error(a)}},async getBugById({commit:t,dispatch:e},a){try{let s=await q.get("bugs/"+a);t("setActiveBug",s.data),e("getNotes",a)}catch(s){console.error(s)}},async addBug({commit:t,dispatch:e},a){try{let t=await q.post("bugs",a);console.log(t.data),e("getBugs"),z.push({name:"bug-info",params:{id:t.data.data.id}})}catch(s){console.error(s)}},async editBug({commit:t,dispatch:e},a){try{console.log(a);await q.put("bugs/"+a.id,a);e("getBugById",a.id)}catch(s){console.error(s)}},async removeBug({commit:t,dispatch:e},a){await J.a.fire({title:"Are you sure you want to delete bug?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{if(t.value){J.a.fire("Closed!","Your bug has been deleted.","success");try{q.delete("bugs/"+a.bugId,a.creatorEmail);e("getBugs")}catch(s){console.error(s)}}z.push({name:"Home"})})},async closeBug({commit:t,dispatch:e},a){await J.a.fire({title:"Are you sure you want to close bug?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, close it!"}).then(s=>{if(s.value){J.a.fire("Closed!","Your bug has been closed.","success");try{q.put("bugs/"+a.bugId,a);e("getBugById",a.bugId),t("setBugs",a)}catch(i){console.error(i)}z.push({name:"Home"})}})},async getNotes({commit:t,dispatch:e},a){try{let e=await q.get("bugs/"+a+"/notes");t("setNotes",e.data)}catch(s){console.error(s)}},async addNote({commit:t,dispatch:e},a){try{let t=await q.post("notes",a);console.log(t.data),e("getNotes",a.bugId)}catch(s){console.error(s)}},async removeNote({commit:t,dispatch:e},a){await J.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{if(t.value){J.a.fire("Deleted!","Your file has been deleted.","success");try{q.delete("notes/"+a.id);e("getBugById",a.bugId)}catch(s){console.error(s)}}})}}});const K="bcw-cody.us.auth0.com",Q="https://bug-report.com",X="iyYK5tQqp3CmGmw4jjAUk00gVfllXOV1";s["a"].use(l["a"],{domain:K,clientId:X,audience:Q,onRedirectCallback:t=>{z.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:z,store:W,render:function(t){return t(B)}}).$mount("#app")},"57cb":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},9651:function(t,e,a){"use strict";var s=a("ba82"),i=a.n(s);i.a},"9c0c":function(t,e,a){},a454:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bug container"},[a("div",{staticClass:"border border-shadow mt-2 card"},[a("div",{staticClass:"card-header"},[a("h2",{staticClass:"text-capitalize text-center"},[t._v("Title: "+t._s(t.bug.title))])]),0==t.bug.closed?a("span",{staticClass:"text-success ml-4"},[t._v("Status: Open")]):a("span",{staticClass:"text-danger ml-4"},[t._v("Status: Closed")]),a("h6",{staticClass:"ml-4"},[t._v("Created: "+t._s(new Date(t.bug.createdAt).toLocaleString()))]),a("h6",{staticClass:"ml-4"},[t._v("Created By: "+t._s(this.$auth.userInfo.name))]),a("hr"),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"text-capitalize"},[t._v("Description:")]),a("p",[t._v(t._s(t.bug.description))]),a("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{disabled:1==t.bug.closed},on:{click:function(e){return t.closeBug()}}},[t._v("Close Bug")]),this.$auth.userInfo?a("button",{staticClass:"btn btn-sm btn-outline-warning ml-2",attrs:{disabled:1==t.bug.closed},on:{click:function(e){t.editVisible=!t.editVisible}}},[t._v("Edit Bug")]):t._e(),t.editVisible?a("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(t.bug.id)}}},[t.editVisible?a("img",{staticClass:"img-fluid ml-2 mt-4",staticStyle:{height:"40px",width:"40px"},attrs:{id:"buggy",src:"https://pngimg.com/uploads/bug/bug_PNG4001.png"}}):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedBug.title,expression:"editedBug.title"}],staticClass:"form-control w-25",attrs:{type:"text",id:"title",placeholder:"Enter Title Here..."},domProps:{value:t.editedBug.title},on:{input:function(e){e.target.composing||t.$set(t.editedBug,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editedBug.description,expression:"editedBug.description"}],staticClass:"form-control w-50",attrs:{type:"text",id:"description",placeholder:"Enter Description Here..."},domProps:{value:t.editedBug.description},on:{input:function(e){e.target.composing||t.$set(t.editedBug,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-sm btn-outline-success mb-2",attrs:{type:"submit"}},[t._v("Submit")])]):t._e(),a("hr"),a("button",{staticClass:"btn btn-sm btn-outline-success mb-2",attrs:{disabled:1==t.bug.closed},on:{click:function(e){t.noteVisible=!t.noteVisible}}},[t._v("Add Note")]),t.noteVisible?a("form",{on:{submit:function(e){return e.preventDefault(),t.addNote()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.comment,expression:"newNote.comment"}],staticClass:"form-control w-50",attrs:{type:"text",id:"comment",placeholder:"Enter Comment Here..."},domProps:{value:t.newNote.comment},on:{input:function(e){e.target.composing||t.$set(t.newNote,"comment",e.target.value)}}})]),a("button",{staticClass:"btn btn-sm btn-outline-success mb-2",attrs:{type:"submit"}},[t._v("Submit")])]):t._e(),a("br"),t._m(0),t._l(t.notes,(function(t){return a("notes",{key:t.id,attrs:{noteData:t}})}))],2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("u",[t._v("NOTES:")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notes shadow-lg border"},[a("ul",[a("li",[a("h5",{staticClass:"text-capitalize"},[a("span",[t._v(t._s(this.$auth.userInfo.name)+": "+t._s(t.noteData.content))]),this.$auth.userInfo?a("i",{staticClass:"fa fa-trash-o text-danger ml-2",on:{click:function(e){return t.removeNote(t.noteData)}}}):t._e()])])])])},n=[],r={name:"notes",props:["noteData"],data(){return{}},computed:{},methods:{removeNote(t){this.$store.dispatch("removeNote",{id:this.noteData.id,bugId:this.noteData.bugId})}},components:{}},c=r,u=a("2877"),l=Object(u["a"])(c,o,n,!1,null,"3541c9d0",null),d=l.exports,g={name:"bug",mounted(){this.$store.dispatch("getBugById",this.$route.params.id),this.$store.dispatch("getNotes",this.$route.params.id)},data(){return{editedBug:{},newNote:{},noteVisible:!1,editVisible:!1,disableEdit:!0,title:"",description:""}},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},methods:{closeBug(){this.$store.dispatch("closeBug",{bugId:this.bug.id,closed:!0})},addNote(){this.$store.dispatch("addNote",{content:this.newNote.comment,creatorEmail:this.$auth.userInfo.email,name:this.$auth.userInfo.name,bugId:this.bug.id}),this.newNote.comment=""},editBug(t){this.$store.dispatch("editBug",{id:t,title:this.editedBug.title,description:this.editedBug.description,creatorEmail:this.$auth.userInfo.email}),this.editedBug={title:"",description:""}}},components:{Notes:d}},m=g,p=(a("da23"),Object(u["a"])(m,s,i,!1,null,"19f8540e",null));e["default"]=p.exports},af61:function(t,e,a){},ba82:function(t,e,a){},da23:function(t,e,a){"use strict";var s=a("af61"),i=a.n(s);i.a},e668:function(t,e,a){"use strict";var s=a("57cb"),i=a.n(s);i.a},f142:function(t,e,a){"use strict";var s=a("f75b"),i=a.n(s);i.a},f75b:function(t,e,a){}});