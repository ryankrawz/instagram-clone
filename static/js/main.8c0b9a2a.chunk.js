(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{12:function(e,t,s){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},15:function(e,t,s){e.exports={navbar:"Navbar_navbar__31-FB"}},17:function(e,t,s){e.exports={header:"Header_header__3mObx"}},18:function(e,t,s){e.exports={response:"Response_response__e9JgJ",username:"Response_username__Nfhi_"}},19:function(e,t,s){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},20:function(e,t,s){e.exports={stat:"ProfileStat_stat__1IMzP",statNum:"ProfileStat_statNum__iI29Y",statLabel:"ProfileStat_statLabel__3fRa_"}},23:function(e,t,s){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},36:function(e,t,s){},4:function(e,t,s){e.exports={bold:"Post_bold__1fmUM",post:"Post_post__hw-08",postHeader:"Post_postHeader__SB-fC",profilePhoto:"Post_profilePhoto__1HOX3",postPhoto:"Post_postPhoto__3ttJA",postItem:"Post_postItem__QGlIx",commentButton:"Post_commentButton__1BJn6",addComment:"Post_addComment__aGSqH",postTimestamp:"Post_postTimestamp__h4H0W"}},46:function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),a=s(26),r=s.n(a),c=(s(36),s(6)),i=s(2),l=s(23),d=s.n(l),u=s(5),j=s(11),p={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};function m(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e+t}var h=s(0),b=Object(n.createContext)();var f=function(e){var t=Object(n.useState)(p),s=Object(j.a)(t,2),o=s[0],a=s[1];return Object(h.jsx)(b.Provider,{value:Object(u.a)(Object(u.a)({},o),{},{addComment:function(e,t){var s={userId:o.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};a(Object(u.a)(Object(u.a)({},o),{},{comments:o.comments.concat(s)}))},addFollower:function(e){var t={userId:e,followerId:o.currentUserId};a(Object(u.a)(Object(u.a)({},o),{},{followers:o.followers.concat(t)}))},addPost:function(e,t){if(!e)throw new TypeError("Photo required");var s={id:m("post"),userId:o.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};a(Object(u.a)(Object(u.a)({},o),{},{posts:o.posts.concat(s)}))},addLike:function(e){var t={userId:o.currentUserId,postId:e,datetime:(new Date).toISOString()};a(Object(u.a)(Object(u.a)({},o),{},{likes:o.likes.concat(t)}))},removeFollower:function(e){a(Object(u.a)(Object(u.a)({},o),{},{followers:o.followers.filter((function(t){return!(t.followerId===o.currentUserId&&t.userId===e)}))}))},removeLike:function(e){a(Object(u.a)(Object(u.a)({},o),{},{likes:o.likes.filter((function(t){return!(t.userId===o.currentUserId&&t.postId===e)}))}))}}),children:e.children})};var O=function(){return Object(h.jsx)("div",{children:"Activity"})};var x=function(){return Object(h.jsx)("div",{children:"Explore"})},g=s(17),v=s.n(g);function _(e){return e.startsWith("/")?"/instagram-clone"+e:e}var I=function(){return Object(h.jsxs)("header",{className:v.a.header,children:[Object(h.jsx)("div",{className:v.a.headerItem,children:Object(h.jsx)("button",{children:Object(h.jsx)("img",{src:_("/assets/camera.svg"),alt:"Home"})})}),Object(h.jsx)("div",{className:v.a.headerItem,children:Object(h.jsx)("button",{children:Object(h.jsx)("img",{src:_("/assets/logo.png"),alt:"Explore"})})}),Object(h.jsx)("div",{className:v.a.headerItem,children:Object(h.jsx)("button",{children:Object(h.jsx)("img",{src:_("/assets/message.svg"),alt:"Explore"})})})]})};function N(e,t){return t.find((function(t){return t.id===e}))}function w(e,t){return t.filter((function(t){return t.postId===e.id}))}function P(e,t,s){var n=t.filter((function(t){return t.postId===e.id}));return{self:n.some((function(e){return e.userId===s})),count:n.length}}var k=s(4),D=s.n(k);function y(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"}var T=s(18),C=s.n(T);var S=function(e){return Object(h.jsxs)("div",{className:C.a.response,children:[Object(h.jsx)("span",{className:C.a.username,children:e.username}),Object(h.jsx)("span",{className:C.a.text,children:e.text})]})};var B=function(e){var t=Object(n.useState)(""),s=Object(j.a)(t,2),o=s[0],a=s[1],r=Object(n.useState)(!1),i=Object(j.a)(r,2),l=i[0],d=i[1];return Object(h.jsxs)("section",{className:D.a.post,children:[Object(h.jsxs)("div",{className:D.a.postHeader,children:[Object(h.jsx)("img",{className:D.a.profilePhoto,src:_(e.user.photo),alt:e.user.id}),Object(h.jsx)(c.b,{to:"/profile/".concat(e.user.id),children:Object(h.jsx)("span",{className:D.a.bold,children:e.user.id})})]}),Object(h.jsx)("img",{className:D.a.postPhoto,src:_(e.post.photo),alt:e.post.desc}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[e.likes.self?Object(h.jsx)("img",{className:D.a.postItem,src:_("/assets/unlike.svg"),alt:"Unlike",onClick:function(){e.onUnlike(e.post.id)}}):Object(h.jsx)("img",{className:D.a.postItem,src:_("/assets/like.svg"),alt:"Like",onClick:function(){e.onLike(e.post.id)}}),Object(h.jsx)("img",{className:"".concat(D.a.postItem," ").concat(D.a.commentButton),src:_("/assets/comment.svg"),alt:"Comment",onClick:function(e){return d(!l)}})]}),Object(h.jsxs)("span",{className:"".concat(D.a.bold," ").concat(D.a.postItem),children:[e.likes.count," likes"]})]}),Object(h.jsxs)("div",{className:D.a.postItem,children:[Object(h.jsx)(S,{username:e.user.id,text:e.post.desc}),e.comments.map((function(e,t){return Object(h.jsx)(S,{username:e.userId,text:e.text},t)}))]}),Object(h.jsx)("span",{className:"".concat(D.a.postItem," ").concat(D.a.postTimestamp),children:y(e.post.datetime)}),l&&Object(h.jsxs)("form",{className:D.a.addComment,onSubmit:function(t){e.onComment(e.post.id,o),a(""),d(!1),t.preventDefault()},children:[Object(h.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:o,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Post"})]})]})};var L=function(){var e=Object(n.useContext)(b),t=e.posts,s=e.users,o=e.comments,a=e.likes,r=e.currentUserId,c=e.addComment,l=e.addLike,d=e.removeLike,u=Object(i.g)().postId;return Object(h.jsx)("div",{children:t.filter((function(e){return!u||e.id===u})).sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return Object(h.jsx)(B,{user:N(e.userId,s),likes:P(e,a,r),post:e,comments:w(e,o),onLike:l,onUnlike:d,onComment:c},e.id)}))})},Z=s(15),H=s.n(Z);var U=function(){return Object(h.jsxs)("nav",{className:H.a.navbar,children:[Object(h.jsx)("div",{className:H.a.navItem,children:Object(h.jsx)(c.b,{to:"/",children:Object(h.jsx)("img",{src:_("/assets/home.svg"),alt:"Home"})})}),Object(h.jsx)("div",{className:H.a.navItem,children:Object(h.jsx)(c.b,{to:"/explore",children:Object(h.jsx)("img",{src:_("/assets/explore.svg"),alt:"Explore"})})}),Object(h.jsx)("div",{className:H.a.navItem,children:Object(h.jsx)(c.b,{to:"/newpost",children:Object(h.jsx)("img",{src:_("/assets/newpost.svg"),alt:"New Post"})})}),Object(h.jsx)("div",{className:H.a.navItem,children:Object(h.jsx)(c.b,{to:"/activity",children:Object(h.jsx)("img",{src:_("/assets/like.svg"),alt:"Activity"})})}),Object(h.jsx)("div",{className:H.a.navItem,children:Object(h.jsx)(c.b,{to:"/profile",children:Object(h.jsx)("img",{src:_("/assets/profile.svg"),alt:"Profile"})})})]})},E=s(12),F=s.n(E),J=s(28),A=s(29),M=s(14),q=s(31),G=s(30),R=function(e){Object(q.a)(s,e);var t=Object(G.a)(s);function s(e){var n;return Object(J.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(M.a)(n)),n.handleDrop=n.handleDrop.bind(Object(M.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(M.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(M.a)(n)),n}return Object(A.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=o.a.Children.only(this.props.children);return o.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var z=function(){var e=Object(n.useContext)(b).addPost,t=Object(n.useState)(!1),s=Object(j.a)(t,2),o=s[0],a=s[1],r=Object(n.useState)(""),c=Object(j.a)(r,2),l=c[0],d=c[1],u=Object(n.useState)(null),p=Object(j.a)(u,2),m=p[0],f=p[1],O=Object(n.useState)(""),x=Object(j.a)(O,2),g=x[0],v=x[1],_=Object(i.f)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:F.a.photo,children:[m?Object(h.jsx)("img",{src:m,alt:"New Post"}):Object(h.jsx)("div",{className:F.a.message,children:"Drop your image"}),Object(h.jsx)(R,{onDragEnter:function(e){a(!0)},onDragLeave:function(e){a(!1)},onDrop:function(e){if(e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){f(e.target.result)},s.readAsDataURL(t)}}a(!1)}},children:Object(h.jsx)("div",{className:[F.a.dropArea,o?F.a.dragging:null].join(" ")})})]}),Object(h.jsx)("div",{className:F.a.desc,children:Object(h.jsx)("textarea",{value:l,onChange:function(e){return function(e){d(e.target.value)}(e)}})}),Object(h.jsx)("div",{className:F.a.error,children:g}),Object(h.jsxs)("div",{className:F.a.actions,children:[Object(h.jsx)("button",{onClick:function(e){return _.push("/")},children:"Cancel"}),Object(h.jsx)("button",{onClick:function(t){try{e(m,l),v(""),_.push("/")}catch(s){v(s.message)}t.preventDefault()},children:"Share"})]})]})},Q=s(7),W=s.n(Q),X=s(19),Y=s.n(X);var V=function(e){return Object(h.jsx)("div",{className:Y.a.square,children:Object(h.jsx)("div",{className:Y.a.content,children:Object(h.jsx)("img",{className:Y.a.image,src:_(e.post.photo),alt:"Post Thumbnail"})})})},K=s(20),$=s.n(K);var ee=function(e){return Object(h.jsxs)("div",{className:$.a.stat,children:[Object(h.jsx)("span",{className:$.a.statNum,children:e.num}),Object(h.jsx)("span",{className:$.a.statLabel,children:e.label})]})};var te=function(){var e=Object(n.useContext)(b),t=e.posts,s=e.users,o=e.followers,a=e.currentUserId,r=e.addFollower,l=e.removeFollower,d=Object(i.g)(),u=d.userId?d.userId:a,j=N(u,s),p=function(e,t,s){var n=t.filter((function(t){return t.userId===e})).map((function(e){return e.followerId}));return s.filter((function(e){return n.includes(e.id)}))}(u,o,s),m=function(e,t,s){var n=t.filter((function(t){return t.followerId===e})).map((function(e){return e.userId}));return s.filter((function(e){return n.includes(e.id)}))}(u,o,s),f=function(e,t){return t.filter((function(t){return t.userId===e}))}(u,t);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("section",{className:W.a.profileHeader,children:[Object(h.jsx)("img",{className:W.a.profilePhoto,src:_(j.photo),alt:j.id}),Object(h.jsxs)("div",{className:W.a.titleAndButton,children:[Object(h.jsx)("span",{className:W.a.profileTitle,children:j.id}),u!==a&&Object(h.jsx)("div",{className:W.a.buttonContainer,children:0===o.filter((function(e){return e.followerId===a})).length?Object(h.jsx)("span",{className:"".concat(W.a.button," ").concat(W.a.followButton),onClick:function(e){return r(j.id)},children:"Follow"}):Object(h.jsx)("span",{className:"".concat(W.a.button," ").concat(W.a.unfollowButton),onClick:function(e){return l(j.id)},children:"Unfollow"})})]})]}),Object(h.jsxs)("section",{className:W.a.profileBio,children:[Object(h.jsx)("span",{className:W.a.bold,children:j.name}),Object(h.jsx)("span",{children:j.bio})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("section",{className:W.a.profileStats,children:[Object(h.jsx)(ee,{num:f.length,label:"posts"}),Object(h.jsx)(ee,{num:p.length,label:"followers"}),Object(h.jsx)(ee,{num:m.length,label:"following"})]}),Object(h.jsx)("section",{className:W.a.profilePosts,children:f.map((function(e){return Object(h.jsx)(c.b,{to:"/".concat(e.id),children:Object(h.jsx)(V,{post:e})},e.id)}))})]})};var se=function(){return Object(h.jsx)(c.a,{basename:"/instagram-clone",children:Object(h.jsx)(f,{children:Object(h.jsxs)("div",{className:d.a.container,children:[Object(h.jsx)(I,{}),Object(h.jsx)("main",{className:d.a.content,children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/explore",children:Object(h.jsx)(x,{})}),Object(h.jsx)(i.a,{path:"/newpost",children:Object(h.jsx)(z,{})}),Object(h.jsx)(i.a,{path:"/activity",children:Object(h.jsx)(O,{})}),Object(h.jsx)(i.a,{path:"/profile/:userId?",children:Object(h.jsx)(te,{})}),Object(h.jsx)(i.a,{path:"/:postId?",children:Object(h.jsx)(L,{})})]})}),Object(h.jsx)(U,{})]})})})},ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),o(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(se,{})}),document.getElementById("root")),ne()},7:function(e,t,s){e.exports={bold:"Profile_bold__22CJl",profileHeader:"Profile_profileHeader__2NZ-u",profilePhoto:"Profile_profilePhoto__4saYH",titleAndButton:"Profile_titleAndButton__27U2_",profileTitle:"Profile_profileTitle__o1xr9",buttonContainer:"Profile_buttonContainer__21JPG",button:"Profile_button__sIBMn",followButton:"Profile_followButton__1sqNq",unfollowButton:"Profile_unfollowButton__38faJ",profileBio:"Profile_profileBio__3-fmv",profileStats:"Profile_profileStats__2FQky",profilePosts:"Profile_profilePosts__1uPJ3"}}},[[46,1,2]]]);
//# sourceMappingURL=main.8c0b9a2a.chunk.js.map