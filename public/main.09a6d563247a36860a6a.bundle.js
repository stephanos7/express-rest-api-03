webpackJsonp([1],{"+25r":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"+mjR":function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){},t.prototype.speechComponent=function(){this.router.navigate(["write/speak"])},t}();a=r([n.i(o._6)({selector:"app-tools-section",template:n("ElCw"),styles:[n("Qttz")]}),i("design:paramtypes",["function"==typeof(c=void 0!==s.b&&s.b)&&c||Object])],a);var c},"/NyS":function(t,e,n){"use strict";var o={url:"https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api",username:"f395a340-a494-4546-9c1c-032dcaf2e0d1",password:"5M6CsnLDEUko"};e.a=o},0:function(t,e,n){t.exports=n("cDNt")},"0QKl":function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="section-sto">Welcome to the Section about Stories</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Check below, our magnificent list of all of our Stories!</p>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <button class="slds-button slds-brand" routerLink="/stories">View all Stories</button>\n  </div>\n</div>\n<router-outlet></router-outlet>'},"1xib":function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("HmSl"),i=n("CX3+"),a=n("/NyS");n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n){this.authHttp=t,this.router=e,this.storiesService=n,this.story={contents:""},this.options={height:480,placeholderText:"<h1>Write, now, before it's too late</h1>",charCounterCount:!0,toolbarButtons:["bold","italic","underline","paragraphFormat","alert"],toolbarButtonsXS:["bold","italic","underline","paragraphFormat","alert"],toolbarButtonsSM:["bold","italic","underline","paragraphFormat","alert"],toolbarButtonsMD:["bold","italic","underline","paragraphFormat","alert"]}}return t.prototype.ngOnInit=function(){this.credentials=a.a,$.FroalaEditor.DefineIcon("alert",{NAME:"info"}),$.FroalaEditor.RegisterCommand("alert",{title:"Hello",focus:!1,undo:!1,refreshAfterCallback:!1,callback:function(){alert("Hello!")}})},t.prototype.goHome=function(){this.router.navigate(["/home"])},t.prototype.inputStory=function(){var t=this;this.storiesService.get("598ae7f94e2bf772272d10b6").subscribe(function(e){t.editorContent=e.contents})},t.prototype.produceStory=function(t){this.story.contents=this.editorContent,this.storiesService.postNew(this.story).subscribe(function(t){alert(t.id)})},t.prototype.getToken=function(){var t=this.credentials.url;console.log("this is the creds from env: ",this.credentials.url),this.authHttp.post(t).subscribe(function(t){console.log(t)})},t}();u=c([n.i(o._6)({selector:"app-froala",template:n("iX4b"),styles:[n("+25r")]}),l("design:paramtypes",["function"==typeof(p=void 0!==r.a&&r.a)&&p||Object,"function"==typeof(d=void 0!==s.b&&s.b)&&d||Object,"function"==typeof(f=void 0!==i.a&&i.a)&&f||Object])],u);var p,d,f},"4uzM":function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="section-sto">Welcome, you are almost home</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Log-in or Sign-up below</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class ="wrapper">\n<div class="slds-form slds-form_stacked" *ngIf="!user">\n  <div class="slds-form-element">\n    <label class="slds-form-element__label" for="input-id-01">Username</label>\n    <div class="slds-form-element__control">\n      <input type="text" id="input-id-01" class="slds-input" placeholder="Enter your username" [(ngModel)]="formInfo.username" name="username">\n    </div>\n  </div>\n    <div class="slds-form-element">\n    <label class="slds-form-element__label" for="input-id-01">Password</label>\n    <div class="slds-form-element__control">\n      <input type="password" id="input-id-01" class="slds-input" placeholder="Enter your password" [(ngModel)]="formInfo.password" name="password">\n    </div>\n  </div>\n  <br>\n  <br>\n  <button class="slds-button slds-button_success" (click)="login()">Login</button>\n  <button class="slds-button slds-button_brand" (click)="signup()">Signup</button>\n</div>\n<br>\n<br>\n</div>\n\n<div *ngIf="user">\n  <h2> You are now logged in as {{ user.username }}!! </h2>\n  <p> Here\'s the user object </p>\n  <pre> {{ user | json }} </pre>\n\n  <p *ngIf="privateData"> Here\'s some data fetched from a protected API </p>\n  <pre> {{ privateData | json }} </pre>\n  <button (click)="logout()"> logout </button>\n  <button (click)="getPrivateData()"> Get private data </button>\n</div>\n\n<p class="error"> {{ error }} </p>\n\n\n'},"8pdG":function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=s([n.i(o._6)({selector:"app-not-found",template:n("azN7"),styles:[n("WEM8")]}),r("design:paramtypes",[])],i)},BmT2:function(t,e){t.exports='<div class="wrapper">\n<h2>INDIVIDUAL STORY</h2>\n <button class="slds-button slds-button_success" routerLink="/stories">Back to Stories</button>\n    <div *ngIf="story">\n        <h2> {{ story.contents }} </h2>\n    </div>\n</div>\n\n'},"CX3+":function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("5v8a"),i=(n.n(r),n("xpf9")),a=(n.n(i),n("S7im"));n.n(a);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.http=t,this.BASE_URL="http://localhost:3000"}return t.prototype.getStories=function(){return this.http.get(this.BASE_URL+"/api/stories").map(function(t){return t.json()})},t.prototype.get=function(t){return this.http.get(this.BASE_URL+"/api/stories/"+t).map(function(t){return t.json()})},t.prototype.postNew=function(t){return this.http.post(this.BASE_URL+"/api/stories",t).map(function(t){return t.json()})},t.prototype.remove=function(t){return this.http.delete(this.BASE_URL+"/api/story/"+t).map(function(t){return t.json()})},t}();u=c([n.i(o.c)(),l("design:paramtypes",["function"==typeof(p=void 0!==s.b&&s.b)&&p||Object])],u);var p},ElCw:function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="tools-section">Welcome to the writing section</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Check below, our magnificent tools for writing</p>\n      </div>\n    </div>\n  </div>\n  <br>\n</div>\n<router-outlet></router-outlet>'},HmSl:function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("/NyS");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t,this.credentials=r.a}return t.prototype.defineAuthorizationHeader=function(t){var e=this.credentials.username,n=this.credentials.password;t.append("Authorization","Basic "+btoa(e+":"+n))},t.prototype.get=function(t){var e=new s.c;return this.defineAuthorizationHeader(e),this.http.get(t,{headers:e})},t.prototype.post=function(t){var e=new s.c;return this.defineAuthorizationHeader(e),this.http.put(t,{headers:e})},t}();c=i([n.i(o.c)(),a("design:paramtypes",["function"==typeof(l=void 0!==s.b&&s.b)&&l||Object])],c);var l},IiHw:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},KBjj:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},KcYn:function(t,e){t.exports='<div class="wrapper">\n  <h1> Stories LIST </h1>\n  <div *ngIf="stories">\n    <div *ngFor="let story of stories">\n      <h4>{{ story._id }}</h4>\n      <a [routerLink]="[\'/stories\', story._id]">View Details</a>\n    </div>\n  </div>\n</div>\n\n'},NBeT:function(t,e){t.exports="<h2>\n  speech works!\n</h2>\n"},Qttz:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},UbAT:function(t,e,n){"use strict";var o=n("/oeL"),s=n("jzTb"),r=n("5v8a"),i=(n.n(r),n("xpf9"));n.n(i);n.d(e,"a",function(){return l});var a=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.session=t,this.formInfo={username:"",password:""},this.privateData=""}return t.prototype.ngOnInit=function(){var t=this;this.session.isLoggedIn().subscribe(function(e){return t.successCb(e)})},t.prototype.login=function(){var t=this;this.session.login(this.formInfo).subscribe(function(e){return t.successCb(e)},function(e){return t.errorCb(e)})},t.prototype.signup=function(){var t=this;this.session.signup(this.formInfo).subscribe(function(e){return t.successCb(e)},function(e){return t.errorCb(e)})},t.prototype.logout=function(){var t=this;this.session.logout().subscribe(function(){return t.successCb(null)},function(e){return t.errorCb(e)})},t.prototype.getPrivateData=function(){var t=this;this.session.getPrivateData().subscribe(function(e){return t.privateData=e},function(e){return t.error=e})},t.prototype.errorCb=function(t){this.error=t,this.user=null},t.prototype.successCb=function(t){this.user=t,this.error=null,console.log(this.user)},t}();l=a([n.i(o._6)({selector:"app-login",template:n("4uzM"),styles:[n("v8Xq")]}),c("design:paramtypes",["function"==typeof(u=void 0!==s.a&&s.a)&&u||Object])],l);var u},WEM8:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},XiZO:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("CX3+");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.route=t,this.storiesService=e}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){t.getStoryDetails(e.id)})},t.prototype.getStoryDetails=function(t){var e=this;this.storiesService.get(t).subscribe(function(t){e.story=t})},t}();c=i([n.i(o._6)({selector:"app-story",template:n("BmT2"),styles:[n("yB+W")]}),a("design:paramtypes",["function"==typeof(l=void 0!==s.c&&s.c)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],c);var l,u},Zpeh:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("CX3+");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.list=e}return t.prototype.ngOnInit=function(){var t=this;this.list.getStories().subscribe(function(e){t.stories=e}),this.router.data.forEach(function(t){console.log(t)})},t}();c=i([n.i(o._6)({selector:"app-stories",template:n("KcYn"),styles:[n("mJgZ")]}),a("design:paramtypes",["function"==typeof(l=void 0!==s.c&&s.c)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],c);var l,u},"aR8+":function(t,e,n){"use strict";var o=n("fc+i"),s=n("/oeL"),r=n("bm2B"),i=n("HTkw"),a=n("vZ5Q"),c=n("jHMo"),l=n("CPp0"),u=n("5v8a"),p=(n.n(u),n("wQAS")),d=n("Zpeh"),f=n("XiZO"),h=n("yOJg"),b=n("jzTb"),v=n("CX3+"),g=n("HmSl"),y=n("1xib"),m=n("8pdG"),_=n("tVA8"),R=n("obbU"),j=n("+mjR"),x=n("UbAT");n.d(e,"a",function(){return w});var O=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},w=function(){function t(){}return t}();w=O([n.i(s.b)({declarations:[p.a,d.a,f.a,h.a,y.a,m.a,_.a,R.a,j.a,x.a],imports:[o.a,l.a,c.a,i.a.forRoot(),a.a.forRoot(),a.b.forRoot(),r.a],providers:[v.a,g.a,b.a],bootstrap:[p.a]})],w)},auOE:function(t,e){t.exports='<div class="wrapper">\n\n  <h1>Welcome HOME</h1>\n\n  <ngl-badge>Badge</ngl-badge>\n  <ngl-badge type="default">Default</ngl-badge>\n  <ngl-badge type="info">Info</ngl-badge>\n  <ngl-badge type="success">Success</ngl-badge>\n  <ngl-badge type="warning">Warning</ngl-badge>\n  <ngl-badge type="error">Error</ngl-badge>\n\n</div>\n'},azN7:function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">Error 404 Not Found</h1>\n        <p class="slds-text-body_small slds-line-height_reset">You seem lost, let us guide you home:)</p>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <button class="slds-button slds-button_success" routerLink="/">Back to Home</button>\n  </div>\n</div>'},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("/oeL"),s=n("Qa4U"),r=n("aR8+");n("p5Ee").a.production&&n.i(o.a)(),n.i(s.a)().bootstrapModule(r.a)},efyd:function(t,e){t.exports='<div class="slds-context-bar">\n  <div class="slds-context-bar__primary">\n    <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">\n      <div class="slds-context-bar__icon-action">\n        <button class="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">\n          <span class="slds-icon-waffle">\n            <span class="slds-r1"></span>\n            <span class="slds-r2"></span>\n            <span class="slds-r3"></span>\n            <span class="slds-r4"></span>\n            <span class="slds-r5"></span>\n            <span class="slds-r6"></span>\n            <span class="slds-r7"></span>\n            <span class="slds-r8"></span>\n            <span class="slds-r9"></span>\n          </span>\n          <span class="slds-assistive-text">Open App Launcher</span>\n        </button>\n      </div>\n      <span class="slds-context-bar__label-action slds-context-bar__app-name">\n        <span class="slds-truncate" title="App Name">Write : Now</span>\n      </span>\n    </div>\n  </div>\n  <nav class="slds-context-bar__secondary" role="navigation">\n    <ul class="slds-grid">\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active" [routerLinkActiveOptions]="{ exact: true }">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="Home" routerLink="/">\n          <span class="slds-truncate" title="Home">Home</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="dashboard" >\n          <span class="slds-truncate" title="Menu Item">Dashboard</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="tools" routerLink="/tools">\n          <span class="slds-truncate" title="Menu Item">Tools</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="stories" routerLink="/stories">\n          <span class="slds-truncate" title="Menu Item">Stories</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n<router-outlet></router-outlet>'},hxJY:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},iX4b:function(t,e){t.exports='<div class="wrapper"> \n  <button class="slds-button slds-button_success" routerLink="/">Back to Home</button>\n  <button class="slds-button slds-button_neutral" (click)="inputStory()">Insert Story</button>\n  <button class="slds-button slds-button_neutral" (click)="produceStory()">Produce Story</button>\n  <button class="slds-button slds-button_destructive" (click)="getToken()">Speech to Text</button>\n  <br>\n  <br>\n  <div [froalaEditor]=\'options\' [(froalaModel)]="editorContent"></div>\n  <br>\n  <br>\n  <div [froalaView]="editorContent"></div>\n</div>\n'},j7C0:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},jHMo:function(t,e,n){"use strict";var o=n("BkNc"),s=n("yOJg"),r=n("UbAT"),i=n("1xib"),a=n("tVA8"),c=n("Zpeh"),l=n("XiZO"),u=n("8pdG"),p=n("+mjR"),d=n("obbU");n.d(e,"a",function(){return h});var f=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:s.a},{path:"login",component:r.a},{path:"tools",component:p.a,children:[{path:"",component:i.a,children:[{path:"speak",component:d.a}]}]},{path:"stories",component:a.a,children:[{path:"",component:c.a,data:{message:"hello component!"}},{path:":id",component:l.a}]},{path:"**",component:u.a}],h=o.a.forRoot(f)},jzTb:function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("5v8a"),i=(n.n(r),n("xpf9")),a=(n.n(i),n("Dqrr"));n.n(a);n.d(e,"a",function(){return u});var c=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.http=t,this.BASE_URL="http://localhost:3000"}return t.prototype.handleError=function(t){return a.Observable.throw(t.json().message)},t.prototype.signup=function(t){return this.http.post(this.BASE_URL+"/signup",t).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.login=function(t){return this.http.post(this.BASE_URL+"/login",t).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.logout=function(){return this.http.post(this.BASE_URL+"/logout",{}).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.isLoggedIn=function(){return this.http.get(this.BASE_URL+"/loggedin").map(function(t){return t.json()}).catch(this.handleError)},t.prototype.getPrivateData=function(){return this.http.get(this.BASE_URL+"/private").map(function(t){return t.json()}).catch(this.handleError)},t}();u=c([n.i(o.c)(),l("design:paramtypes",["function"==typeof(p=void 0!==s.b&&s.b)&&p||Object])],u);var p},mJgZ:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},n7du:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="n7du"},obbU:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=s([n.i(o._6)({selector:"app-speech",template:n("NBeT"),styles:[n("KBjj")]}),r("design:paramtypes",[])],i)},p5Ee:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!1}},tVA8:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){},t.prototype.viewAllStories=function(){this.router.navigate(["/stories"])},t}();a=r([n.i(o._6)({selector:"app-section-sto",template:n("0QKl"),styles:[n("IiHw")]}),i("design:paramtypes",["function"==typeof(c=void 0!==s.b&&s.b)&&c||Object])],a);var c},v8Xq:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".wrapper{padding-top:30px;padding-left:400px;padding-right:400px}",""]),t.exports=t.exports.toString()},wQAS:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=function(){function t(){this.title="app"}return t}();r=s([n.i(o._6)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],r)},"yB+W":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},yOJg:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=s([n.i(o._6)({selector:"app-home",template:n("auOE"),styles:[n("j7C0")]}),r("design:paramtypes",[])],i)}},[0]);