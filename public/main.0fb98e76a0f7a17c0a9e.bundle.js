webpackJsonp([1],{"+25r":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"+mjR":function(t,e,n){"use strict";var o=n("/oeL"),s=n("jzTb"),r=n("BkNc");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.session=t,this.router=e}return t.prototype.ngOnInit=function(){this.user=this.session.user},t.prototype.speechComponent=function(){this.router.navigate(["write/speak"])},t}();c=i([n.i(o._11)({selector:"app-tools-section",template:n("ElCw"),styles:[n("Qttz")]}),a("design:paramtypes",["function"==typeof(l=void 0!==s.a&&s.a)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],c);var l,u},"/NyS":function(t,e,n){"use strict";var o={url:"https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api",username:"f395a340-a494-4546-9c1c-032dcaf2e0d1",password:"5M6CsnLDEUko"};e.a=o},"/oNB":function(t,e){t.exports='<div class="container" *ngIf="user">\n  <h2>Your recent stories</h2>\n  <div class="row">\n    <div class="col-lg-3 doc-box" *ngFor="let story of stories">\n      <p [innerHTML]="story.contents"></p>\n      <button type="button" class="btn btn-success" [routerLink]="[\'/stories\', story._id]">Edit</button>\n    </div>\n  </div>\n</div>\n\n\n\n\n'},0:function(t,e,n){t.exports=n("cDNt")},"0QKl":function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="section-sto">Welcome to the Section about Stories</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Check below, our magnificent list of all of our Stories!</p>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <button class="slds-button slds-brand" routerLink="/stories">View all Stories</button>\n  </div>\n</div>\n<router-outlet></router-outlet>'},"0aAO":function(t,e,n){"use strict";var o=n("/oeL"),s=n("jzTb");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.session=t}return t.prototype.ngOnInit=function(){this.user=this.session.user,console.log(this.user)},t}();a=r([n.i(o._11)({selector:"app-dashboard",template:n("HdoV"),styles:[n("cnme")]}),i("design:paramtypes",["function"==typeof(c=void 0!==s.a&&s.a)&&c||Object])],a);var c},"1xib":function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("jzTb"),i=n("HmSl"),a=n("CX3+"),c=n("qIvg"),l=n("/NyS");n.d(e,"a",function(){return p});var u=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,n,o,s){this.authHttp=t,this.router=e,this.session=n,this.storiesService=o,this.usersService=s,this.story={contents:"",mainAuthor:""},this.options={height:480,placeholderText:"<h1>Write, now, before it's too late</h1>",charCounterCount:!0,toolbarButtons:["bold","italic","underline","paragraphFormat","alert"],toolbarButtonsXS:["bold","italic","underline","paragraphFormat","alert"],toolbarButtonsSM:["bold","italic","underline","paragraphFormat","alert"],toolbarButtonsMD:["bold","italic","underline","paragraphFormat","alert"]}}return t.prototype.ngOnInit=function(){this.user=this.session.user,this.story.mainAuthor=this.user.id,console.log(this.user),this.credentials=l.a,$.FroalaEditor.DefineIcon("alert",{NAME:"info"}),$.FroalaEditor.RegisterCommand("alert",{title:"Hello",focus:!1,undo:!1,refreshAfterCallback:!1,callback:function(){alert("Hello!")}})},t.prototype.goHome=function(){this.router.navigate(["/home"])},t.prototype.inputStory=function(){var t=this;this.storiesService.get("598ae7f94e2bf772272d10b6").subscribe(function(e){t.editorContent=e.contents})},t.prototype.produceStory=function(t,e){var n=this;this.story.contents=this.editorContent,this.storiesService.postNew(this.story).subscribe(function(t){console.log("this is the response after we save story ",t),n.usersService.addStory(n.user,t).subscribe(function(t){console.log("the user who has been updated, ",t)})})},t.prototype.getToken=function(){var t=this.credentials.url;console.log("this is the creds from env: ",this.credentials.url),this.authHttp.post(t).subscribe(function(t){console.log(t)})},t}();p=u([n.i(o._11)({selector:"app-froala",template:n("iX4b"),styles:[n("+25r")]}),d("design:paramtypes",["function"==typeof(f=void 0!==i.a&&i.a)&&f||Object,"function"==typeof(h=void 0!==s.a&&s.a)&&h||Object,"function"==typeof(v=void 0!==r.a&&r.a)&&v||Object,"function"==typeof(b=void 0!==a.a&&a.a)&&b||Object,"function"==typeof(y=void 0!==c.a&&c.a)&&y||Object])],p);var f,h,v,b,y},"4uzM":function(t,e){t.exports='<div class="wrapper">\n  <div *ngIf="error">\n    {{ error }}\n  </div>\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="section-sto">Welcome, you are almost home</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Log-in below</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class ="wrapper">\n<div class="slds-form slds-form_stacked">\n  <div class="slds-form-element">\n    <label class="slds-form-element__label" for="input-id-01">Username</label>\n    <div class="slds-form-element__control">\n      <input type="text" id="input-id-01" class="slds-input" placeholder="Enter your username" [(ngModel)]="user.username" name="username">\n    </div>\n  </div>\n    <div class="slds-form-element">\n    <label class="slds-form-element__label" for="input-id-01">Password</label>\n    <div class="slds-form-element__control">\n      <input type="text" id="input-id-01" class="slds-input" placeholder="Enter your password" [(ngModel)]="user.password" name="password">\n    </div>\n  </div>\n  <br>\n  <br>\n  <button class="slds-button slds-button_success" (click)="login()">Login</button>\n</div>\n<br>\n<br>\n</div>'},"8pdG":function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=s([n.i(o._11)({selector:"app-not-found",template:n("azN7"),styles:[n("WEM8")]}),r("design:paramtypes",[])],i)},BmT2:function(t,e){t.exports='<div class="wrapper">\n<h2>INDIVIDUAL STORY</h2>\n <button class="slds-button slds-button_success" routerLink="/stories">Back to Stories</button>\n    <div *ngIf="story">\n        <h2> {{ story.contents }} </h2>\n    </div>\n</div>\n\n'},"CX3+":function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("5v8a"),i=(n.n(r),n("xpf9")),a=(n.n(i),n("S7im")),c=(n.n(a),n("Dqrr")),l=(n.n(c),n("jzTb"));n.d(e,"a",function(){return p});var u=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e){this.http=t,this.session=e,this.BASE_URL="http://localhost:3000"}return t.prototype.handleError=function(t){return c.Observable.throw(t.json().message)},t.prototype.getStories=function(){return this.http.get(this.BASE_URL+"/api/stories",this.requestOptions()).map(function(t){return t.json()})},t.prototype.get=function(t){return this.http.get(this.BASE_URL+"/api/stories/"+t,this.requestOptions()).map(function(t){return t.json()})},t.prototype.getStoriesByAuthor=function(t){return this.http.get(this.BASE_URL+"/api/stories/author/"+t,this.requestOptions()).map(function(t){return t.json()})},t.prototype.postNew=function(t){return this.http.post(this.BASE_URL+"/api/stories",t,this.requestOptions()).map(function(t){return t.json()})},t.prototype.remove=function(t){return this.http.delete(this.BASE_URL+"/api/story/"+t,this.requestOptions()).map(function(t){return t.json()})},t.prototype.requestOptions=function(){var t=new s.b({Authorization:"JWT "+this.session.token});return new s.c({headers:t})},t}();p=u([n.i(o.c)(),d("design:paramtypes",["function"==typeof(f=void 0!==s.d&&s.d)&&f||Object,"function"==typeof(h=void 0!==l.a&&l.a)&&h||Object])],p);var f,h},ElCw:function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="tools-section">Welcome to the writing section</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Check below, our magnificent tools for writing</p>\n      </div>\n    </div>\n  </div>\n  <br>\n</div>\n<router-outlet></router-outlet>'},HdoV:function(t,e){t.exports='<div class="jumbotron jumbotron-fluid">\n  <div class="container">\n    <h3 class="display-3">Welcome to your dashboard, {{user.username}}</h3>\n    <p class="lead">Check the latest work in the world of writing</p>\n  </div>\n</div>\n<app-doc-list></app-doc-list>\n\n\n\n\n'},HmSl:function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("/NyS");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t,this.credentials=r.a}return t.prototype.defineAuthorizationHeader=function(t){var e=this.credentials.username,n=this.credentials.password;t.append("Authorization","Basic "+btoa(e+":"+n))},t.prototype.get=function(t){var e=new s.b;return this.defineAuthorizationHeader(e),this.http.get(t,{headers:e})},t.prototype.post=function(t){var e=new s.b;return this.defineAuthorizationHeader(e),this.http.put(t,{headers:e})},t}();c=i([n.i(o.c)(),a("design:paramtypes",["function"==typeof(l=void 0!==s.d&&s.d)&&l||Object])],c);var l},IiHw:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},KBjj:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},KcYn:function(t,e){t.exports='<div class="wrapper">\n  <h1> Stories LIST </h1>\n  <div *ngIf="stories">\n    <div *ngFor="let story of stories">\n      <h4>{{ story._id }}</h4>\n      <a [routerLink]="[\'/stories\', story._id]">View Details</a>\n    </div>\n  </div>\n</div>\n\n'},NBeT:function(t,e){t.exports="<h2>\n  speech works!\n</h2>\n"},PjwQ:function(t,e){t.exports='<div class="wrapper">\n  <div *ngIf="error">\n    {{ error }}\n  </div>\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="section-sto">Join Us!</h1>\n        <p class="slds-text-body_small slds-line-height_reset">Sign-up below</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class ="wrapper">\n<div class="slds-form slds-form_stacked">\n  <div class="slds-form-element">\n    <label class="slds-form-element__label" for="input-id-01">Username</label>\n    <div class="slds-form-element__control">\n      <input type="text" id="input-id-01" class="slds-input" placeholder="Enter your username" [(ngModel)]="formInfo.username" name="username">\n    </div>\n  </div>\n    <div class="slds-form-element">\n    <label class="slds-form-element__label" for="input-id-01">Password</label>\n    <div class="slds-form-element__control">\n      <input type="text" id="input-id-01" class="slds-input" placeholder="Enter your password" [(ngModel)]="formInfo.password" name="password">\n    </div>\n  </div>\n  <br>\n  <br>\n  <button class="slds-button slds-button_success" (click)="signup()">SIGN-UP</button>\n</div>\n<br>\n<br>\n</div>\n'},QYZy:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},Qttz:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},RAHa:function(t,e,n){"use strict";var o=n("/oeL"),s=n("jzTb"),r=n("qIvg"),i=n("CX3+");n.d(e,"a",function(){return l});var a=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,n){this.session=t,this.storiesService=e,this.usersService=n,this.stories=[]}return t.prototype.ngOnInit=function(){var t=this;this.user=this.session.user,this.storiesService.getStoriesByAuthor(this.user.id).subscribe(function(e){t.stories=e,console.log("the list of stories i got: ",e)})},t}();l=a([n.i(o._11)({selector:"app-doc-list",template:n("/oNB"),styles:[n("jWA1")]}),c("design:paramtypes",["function"==typeof(u=void 0!==s.a&&s.a)&&u||Object,"function"==typeof(d=void 0!==i.a&&i.a)&&d||Object,"function"==typeof(p=void 0!==r.a&&r.a)&&p||Object])],l);var u,d,p},UbAT:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("jzTb");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.session=t,this.router=e,this.user={username:"",password:""},this.error=null}return t.prototype.ngOnInit=function(){},t.prototype.login=function(){var t=this;this.session.login(this.user).subscribe(function(e){t.router.navigate(["dashboard"])},function(e){t.error=e})},t}();c=i([n.i(o._11)({selector:"app-login",template:n("4uzM"),styles:[n("v8Xq")]}),a("design:paramtypes",["function"==typeof(l=void 0!==r.a&&r.a)&&l||Object,"function"==typeof(u=void 0!==s.a&&s.a)&&u||Object])],c);var l,u},WEM8:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},XiZO:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("CX3+");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.route=t,this.storiesService=e}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){t.getStoryDetails(e.id)})},t.prototype.getStoryDetails=function(t){var e=this;this.storiesService.get(t).subscribe(function(t){e.story=t})},t}();c=i([n.i(o._11)({selector:"app-story",template:n("BmT2"),styles:[n("yB+W")]}),a("design:paramtypes",["function"==typeof(l=void 0!==s.c&&s.c)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],c);var l,u},Zpeh:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("CX3+");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.list=e}return t.prototype.ngOnInit=function(){var t=this;this.list.getStories().subscribe(function(e){t.stories=e}),this.router.data.forEach(function(t){console.log(t)})},t}();c=i([n.i(o._11)({selector:"app-stories",template:n("KcYn"),styles:[n("mJgZ")]}),a("design:paramtypes",["function"==typeof(l=void 0!==s.c&&s.c)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],c);var l,u},"aR8+":function(t,e,n){"use strict";var o=n("fc+i"),s=n("/oeL"),r=n("bm2B"),i=n("0WLp"),a=n("HTkw"),c=n("vZ5Q"),l=n("jHMo"),u=n("CPp0"),d=n("5v8a"),p=(n.n(d),n("wQAS")),f=n("Zpeh"),h=n("XiZO"),v=n("yOJg"),b=n("jzTb"),y=n("CX3+"),g=n("qIvg"),m=n("HmSl"),_=n("1xib"),j=n("8pdG"),R=n("tVA8"),O=n("obbU"),x=n("+mjR"),w=n("UbAT"),S=n("n9Ag"),A=n("0aAO"),P=n("RAHa");n.d(e,"a",function(){return L});var k=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},L=function(){function t(){}return t}();L=k([n.i(s.b)({declarations:[p.a,f.a,h.a,v.a,_.a,j.a,R.a,O.a,x.a,w.a,S.a,A.a,P.a],imports:[o.a,u.a,l.a,r.a,a.a.forRoot(),c.a.forRoot(),c.b.forRoot(),i.a.forRoot()],providers:[y.a,m.a,b.a,g.a],bootstrap:[p.a]})],L)},auOE:function(t,e){t.exports='<div class="wrapper">\n\n  <h1>Welcome HOME</h1>\n\n  <ngl-badge>Badge</ngl-badge>\n  <ngl-badge type="default">Default</ngl-badge>\n  <ngl-badge type="info">Info</ngl-badge>\n  <ngl-badge type="success">Success</ngl-badge>\n  <ngl-badge type="warning">Warning</ngl-badge>\n  <ngl-badge type="error">Error</ngl-badge>\n\n</div>\n'},azN7:function(t,e){t.exports='<div class="wrapper">\n  <div class="slds-page-header">\n    <div class="slds-media">\n      <div class="slds-media__figure">\n      </div>\n      <div class="slds-media__body">\n        <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">Error 404 Not Found</h1>\n        <p class="slds-text-body_small slds-line-height_reset">You seem lost, let us guide you home:)</p>\n      </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <button class="slds-button slds-button_success" routerLink="/">Back to Home</button>\n  </div>\n</div>'},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("/oeL"),s=n("Qa4U"),r=n("aR8+");n("p5Ee").a.production&&n.i(o.a)(),n.i(s.a)().bootstrapModule(r.a)},cnme:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},efyd:function(t,e){t.exports='<div class="slds-context-bar">\n  <div class="slds-context-bar__primary">\n    <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">\n      <div class="slds-context-bar__icon-action">\n        <button class="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">\n          <span class="slds-icon-waffle">\n            <span class="slds-r1"></span>\n            <span class="slds-r2"></span>\n            <span class="slds-r3"></span>\n            <span class="slds-r4"></span>\n            <span class="slds-r5"></span>\n            <span class="slds-r6"></span>\n            <span class="slds-r7"></span>\n            <span class="slds-r8"></span>\n            <span class="slds-r9"></span>\n          </span>\n        </button>\n      </div>\n      <span class="slds-context-bar__label-action slds-context-bar__app-name">\n        <span class="slds-truncate" title="App Name">Write : Now</span>\n      </span>\n    </div>\n  </div>\n  <nav class="slds-context-bar__secondary" role="navigation">\n    <ul class="slds-grid">\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active" [routerLinkActiveOptions]="{ exact: true }">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="Home" routerLink="/">\n          <span class="slds-truncate" title="Home">Home</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="dashboard" routerLink="/dashboard">\n          <span class="slds-truncate" title="Menu Item">Dashboard</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="tools" routerLink="/tools">\n          <span class="slds-truncate" title="Menu Item">Tools</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item" routerLinkActive="slds-is-active">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="stories" routerLink="/stories">\n          <span class="slds-truncate" title="Menu Item">Stories</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n<router-outlet></router-outlet>'},hxJY:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},iX4b:function(t,e){t.exports='<div class="wrapper"> \n  <button class="slds-button slds-button_success" routerLink="/">Back to Home</button>\n  <button class="slds-button slds-button_neutral" (click)="inputStory()">Insert Story</button>\n  <button class="slds-button slds-button_neutral" (click)="produceStory()">Produce Story</button>\n  <button class="slds-button slds-button_destructive" (click)="getToken()">Speech to Text</button>\n  <br>\n  <br>\n  <div [froalaEditor]=\'options\' [(froalaModel)]="editorContent"></div>\n  <br>\n  <br>\n  <div [froalaView]="editorContent"></div>\n</div>\n'},j7C0:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},jHMo:function(t,e,n){"use strict";var o=n("BkNc"),s=n("yOJg"),r=n("UbAT"),i=n("n9Ag"),a=n("1xib"),c=n("tVA8"),l=n("Zpeh"),u=n("XiZO"),d=n("8pdG"),p=n("+mjR"),f=n("obbU"),h=n("0aAO"),v=n("jzTb");n.d(e,"a",function(){return y});var b=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:s.a},{path:"signup",component:i.a},{path:"login",component:r.a},{path:"dashboard",component:h.a,canActivate:[v.a]},{path:"tools",component:p.a,canActivate:[v.a],children:[{path:"",component:a.a,children:[{path:"speak",component:f.a}]}]},{path:"stories",component:c.a,children:[{path:"",component:l.a,data:{message:"hello component!"}},{path:":id",component:u.a}]},{path:"**",component:d.a}],y=o.b.forRoot(b)},jWA1:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".doc-box{border:5px solid #fff;padding:2%;height:300px}p{height:75%;text-align:justify;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=t.exports.toString()},jzTb:function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("5v8a"),i=(n.n(r),n("xpf9")),a=(n.n(i),n("Dqrr")),c=(n.n(a),n("BkNc"));n.d(e,"a",function(){return d});var l=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e){this.http=t,this.router=e,this.BASE_URL="http://localhost:3000",this.user={},this.token="",this.isAuthenticated=!1}return t.prototype.handleError=function(t){return a.Observable.throw(t.json().message)},t.prototype.canActivate=function(){var t=this,e=localStorage.getItem("token");if(e){var n=new s.b({Authorization:"JWT "+e}),o=new s.c({headers:n});return this.http.get(this.BASE_URL+"/private",o).map(function(n){return!!n&&(t.isAuthenticated=!0,t.token=e,!0)}).catch(this.handleError)}return this.logout(),this.router.navigate(["/login"]),!1},t.prototype.login=function(t){var e=this;return this.http.post(this.BASE_URL+"/login",t).map(function(t){var n=t.json(),o=n.token,s=n.user;return o&&(e.token=o,e.user={id:s._id,username:s.username},e.isAuthenticated=!0),e.isAuthenticated}).catch(this.handleError)},t.prototype.signup=function(t){return this.http.post(this.BASE_URL+"/signup",t).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.logout=function(){this.token="",this.user={},this.isAuthenticated=!1,localStorage.removeItem("token"),this.router.navigate(["/login"])},t}();d=l([n.i(o.c)(),u("design:paramtypes",["function"==typeof(p=void 0!==s.d&&s.d)&&p||Object,"function"==typeof(f=void 0!==c.a&&c.a)&&f||Object])],d);var p,f},mJgZ:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},n7du:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="n7du"},n9Ag:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc"),r=n("jzTb");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.router=t,this.session=e,this.formInfo={username:"",password:""}}return t.prototype.signup=function(){this.session.signup(this.formInfo).subscribe(),this.router.navigate(["login"])},t}();c=i([n.i(o._11)({selector:"app-signup",template:n("PjwQ"),styles:[n("QYZy")]}),a("design:paramtypes",["function"==typeof(l=void 0!==s.a&&s.a)&&l||Object,"function"==typeof(u=void 0!==r.a&&r.a)&&u||Object])],c);var l,u},obbU:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=s([n.i(o._11)({selector:"app-speech",template:n("NBeT"),styles:[n("KBjj")]}),r("design:paramtypes",[])],i)},p5Ee:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},qIvg:function(t,e,n){"use strict";var o=n("/oeL"),s=n("CPp0"),r=n("5v8a"),i=(n.n(r),n("xpf9")),a=(n.n(i),n("S7im")),c=(n.n(a),n("Dqrr")),l=(n.n(c),n("jzTb"));n.d(e,"a",function(){return p});var u=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e){this.http=t,this.session=e,this.BASE_URL="http://localhost:3000"}return t.prototype.handleError=function(t){return c.Observable.throw(t.json().message)},t.prototype.getUsers=function(){return this.http.get(this.BASE_URL+"/api/users",this.requestOptions()).map(function(t){return t.json()})},t.prototype.get=function(t){return this.http.get(this.BASE_URL+"/api/users/"+t,this.requestOptions()).map(function(t){return t.json()})},t.prototype.addStory=function(t,e){return console.log("in the add story method"),this.http.put(this.BASE_URL+"/api/users/"+t.id,e,this.requestOptions()).map(function(t){return t.json()})},t.prototype.requestOptions=function(){var t=new s.b({Authorization:"JWT "+this.session.token});return new s.c({headers:t})},t}();p=u([n.i(o.c)(),d("design:paramtypes",["function"==typeof(f=void 0!==s.d&&s.d)&&f||Object,"function"==typeof(h=void 0!==l.a&&l.a)&&h||Object])],p);var f,h},tVA8:function(t,e,n){"use strict";var o=n("/oeL"),s=n("BkNc");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){},t.prototype.viewAllStories=function(){this.router.navigate(["/stories"])},t}();a=r([n.i(o._11)({selector:"app-section-sto",template:n("0QKl"),styles:[n("IiHw")]}),i("design:paramtypes",["function"==typeof(c=void 0!==s.a&&s.a)&&c||Object])],a);var c},v8Xq:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".wrapper{padding-top:30px;padding-left:400px;padding-right:400px}",""]),t.exports=t.exports.toString()},wQAS:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=function(){function t(){this.title="app"}return t}();r=s([n.i(o._11)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],r)},"yB+W":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},yOJg:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return i});var s=this&&this.__decorate||function(t,e,n,o){var s,r=arguments.length,i=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=s([n.i(o._11)({selector:"app-home",template:n("auOE"),styles:[n("j7C0")]}),r("design:paramtypes",[])],i)}},[0]);