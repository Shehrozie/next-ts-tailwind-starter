(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"20a2":function(e,t,s){e.exports=s("nOHt")},L3vG:function(e,t,s){"use strict";var n=s("nKUr"),c=s("q1tI"),i=s.n(c),l=s("g4pe"),a=s.n(l),r=s("YFqc"),o=s.n(r),j=s("20a2"),x=function(e){var t=e.activeLinkClass,s=e.linkText,c=e.href;return c===Object(j.useRouter)().pathname?Object(n.jsx)(o.a,{href:c,children:Object(n.jsx)("li",{className:t,children:Object(n.jsx)("a",{className:"text-titles cursor-pointer",children:s})})}):Object(n.jsx)(o.a,{href:c,children:Object(n.jsx)("li",{className:"mr-12 py-6",children:Object(n.jsx)("a",{className:"text-secondary cursor-pointer",children:s})})})},C=s("TSYQ"),d=s.n(C),m=s("/MKj"),b=Object(m.b)((function(e){return{profilePic:e.store.userProfilePic}}))((function(e){var t=e.profilePic,s=Object(c.useState)(!1),i=s[0],l=s[1],a=Object(c.useRef)(null),r=Object(j.useRouter)(),x=function(e){a.current.contains(e.target)||l(!1)};Object(c.useEffect)((function(){return document.addEventListener("mousedown",x),function(){document.removeEventListener("mousedown",x)}}),[]);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"flex flex-wrap",ref:a,children:[i?Object(n.jsx)("div",{className:"fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20",style:{marginTop:"73px",zIndex:999999999999999},onClick:function(){return l(!1)}}):void 0,Object(n.jsx)("div",{className:"w-full sm:w-6/12 md:w-4/12 px-4",children:Object(n.jsxs)("div",{className:"relative inline-flex align-middle w-full",children:[Object(n.jsxs)("button",{className:d()("outline-none focus:outline-none cool-transition flex items-center w-10 h-10 cursor-pointer lg:mr-0 mr-10",{"active-avatar":!0===i||"/settings"===r.pathname}),type:"button",onClick:function(){l(i=!i)},children:[Object(n.jsx)("img",{src:t,alt:"",className:"rounded-full"}),Object(n.jsx)("i",{className:"fas fa-chevron-down ml-4 text-secondary"})]}),Object(n.jsxs)("div",{className:(i?"block ":"hidden ")+"text-base py-2 list-none text-left rounded-b-xl mt-2 -ml-14 bg-white absolute -left-10 top-12 w-40 border border-secondary-elements",style:{zIndex:999999999999999},children:[Object(n.jsx)(o.a,{href:"/settings",children:Object(n.jsx)("a",{className:"text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles",children:"Account"})}),Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("a",{className:"text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles",children:"+ Invite a Member"})}),Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("a",{className:"text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles",children:"Contact Support"})}),Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("a",{className:"text-sm pt-2 px-4 block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles",children:"Help"})}),Object(n.jsx)("div",{className:"h-0 mt-4 mb-2 border border-solid border-t-0 border-gray-300 opacity-25 w-10/12 mx-auto"}),Object(n.jsx)(o.a,{href:"/login",children:Object(n.jsxs)("a",{className:"text-sm py-2 px-4 flex items-center w-full whitespace-no-wrap bg-transparent hover:bg-gray-100 cursor-pointer text-titles",children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt text-secondary mx-3 text-lg"}),"Log out"]})})]})]})})]})})})),u=Object(m.b)((function(e){return{firstName:e.store.firstName,lastName:e.store.lastName,notifications:e.store.notifications}}))((function(e){var t=e.firstName,s=e.lastName,l=e.notifications,a=Object(c.useState)(!1),r=a[0],x=a[1],C=Object(c.useState)(!1),m=C[0],b=C[1],u=Object(c.useState)(!1),h=u[0],f=u[1],p=Object(j.useRouter)(),O=Object(c.useRef)(null),v=function(e){O.current.contains(e.target)||(x(!1),b(!1),f(!1))};Object(c.useEffect)((function(){return p.pathname.includes("/notifications")?b(!0):b(!1),document.addEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}}),[]);var g=l.map((function(e,t){if(t<3)return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("div",{className:"flex w-full px-6",children:Object(n.jsxs)("div",{className:"w-full flex flex-wrap items-center",children:[Object(n.jsx)("div",{className:"w-3/4 text-left",children:Object(n.jsx)("h1",{className:"text-titles",children:e.title})}),Object(n.jsx)("div",{className:"w-1/4 text-right",children:Object(n.jsx)("button",{className:"bg-transparent outline-none focus:outline-none text-primary text-sm",children:"View"})}),Object(n.jsx)("div",{className:"w-full",children:Object(n.jsx)("p",{className:"font-sans text-secondary text-xs my-4 text-left",children:e.text})}),Object(n.jsxs)("div",{className:"w-full flex items-center",children:[Object(n.jsxs)("div",{className:"w-1/2 flex items-center",children:[Object(n.jsx)("img",{src:"/img/notifications/clock-icon.svg",alt:"",className:"mr-2"}),Object(n.jsx)("p",{className:"text-secondary text-xs",children:e.deliveredTime})]}),Object(n.jsx)("div",{className:"w-1/2 text-right",children:Object(n.jsx)("button",{className:"bg-transparent outline-none focus:outline-none text-xs text-secondary",children:"Mark as Read"})})]})]})}),Object(n.jsx)("div",{className:"h-px w-full my-6",style:{background:"#efefef"}})]},e.id)}));return Object(n.jsxs)(n.Fragment,{children:[r?Object(n.jsx)("div",{className:"fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20",style:{marginTop:"73px",zIndex:99999999999999}}):void 0,Object(n.jsxs)("div",{className:"relative",ref:O,children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)("button",{className:d()("outline-none focus:outline-none lg:mt-2 -mt-1 lg:ml-0 ml-4 lg:mr-0 mr-5 z-50",{"active-notification pb-5":m||h}),onClick:function(){return x(r=!r),void f(!!r)},children:Object(n.jsx)("img",{src:"/img/icons/bell-icon.svg",alt:""})}),Object(n.jsxs)("span",{className:"text-secondary mx-4 truncate text-sm mt-2 mr-0 z-40 lg:inline hidden",children:[void 0!==s?t+" "+s.charAt(0):null,"."]})]}),Object(n.jsxs)("div",{className:d()("lg:absolute fixed bg-white border-t border-secondary-elements lg:-left-96 left-0 flex flex-wrap rounded-b-2xl lg:w-notifications-dropdown w-full lg:overflow-y-hidden overflow-y-scroll lg:h-auto h-full top-14 -mt-0.5",{hidden:!1===r,block:!0===r}),style:{zIndex:99999999999999},children:[Object(n.jsxs)("div",{className:"flex w-full items-center pt-6 px-6",children:[Object(n.jsx)("div",{className:"w-1/2 text-left",children:Object(n.jsx)("h1",{className:"text-titles text-1xl",children:"Notifications"})}),Object(n.jsx)("div",{className:"w-1/2 text-right",children:Object(n.jsx)("button",{className:"text-secondary text-xs bg-transparent outline-none focus:outline-none",children:"Mark All as Read"})})]}),Object(n.jsx)("div",{className:"h-px w-full my-6",style:{background:"#efefef"}}),g,"/notifications"!==p.pathname?Object(n.jsx)("div",{className:"w-full mb-4 -mt-2 text-center lg:pb-0 md:pb-10 pb-16",children:Object(n.jsx)(o.a,{href:"/notifications",children:Object(n.jsx)("button",{className:"bg-transparent outline-none focus:outline-none text-primary text-sm",children:"See all Notifications"})})}):Object(n.jsx)("div",{className:"h-10 w-full"})]})]})]})})),h=Object(m.b)((function(e){return{profilePic:e.store.userProfilePic,userFirstName:e.store.firstName,userLastName:e.store.lastName}}))((function(e){var t=e.profilePic,s=e.userFirstName,c=e.userLastName,i=e.onCrossClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"flex flex-wrap px-5 pt-5",children:[Object(n.jsxs)("div",{className:"flex items-center w-full justify-between pb-4",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)("img",{src:t,alt:""}),Object(n.jsxs)("span",{className:"text-secondary text-sm ml-3",children:[s," ",c.charAt(0),"."]})]}),Object(n.jsx)("button",{className:"bg-transparent outline-none focus:outline-none",onClick:i,children:Object(n.jsx)("img",{src:"/img/icons/cross-icon.svg",alt:""})})]}),Object(n.jsx)("div",{className:"h-px bg-secondary-elements w-full"})]})})})),f=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"flex flex-wrap px-5 pt-5",children:[Object(n.jsxs)("div",{className:"flex flex-wrap w-full space-y-4 pb-6",children:[Object(n.jsx)("div",{className:"w-full",children:Object(n.jsx)("button",{className:"outline-none focus:outline-none bg-transparent text-sm text-titles",children:"Account"})}),Object(n.jsx)("div",{className:"w-full",children:Object(n.jsx)("button",{className:"outline-none focus:outline-none bg-transparent text-sm text-titles",children:"+ Invite a member"})}),Object(n.jsx)("div",{className:"w-full",children:Object(n.jsx)("button",{className:"outline-none focus:outline-none bg-transparent text-sm text-titles",children:"Contact Support"})})]}),Object(n.jsx)("div",{className:"w-full h-px bg-secondary-elements"})]})})},p=function(e){var t=e.classNames;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:d()("fill-current",t),children:Object(n.jsx)("path",{d:"M19.773 9.23495L11.6327 1.04108C11.6223 1.03053 11.6115 1.0203 11.6005 1.01038C10.7116 0.21229 9.36843 0.209439 8.47617 1.00377C8.46507 1.01366 8.45429 1.02385 8.44378 1.03432L0.229371 9.23256C-0.0760201 9.53741 -0.0765279 10.0321 0.228277 10.3374C0.533121 10.6428 1.02777 10.6433 1.33312 10.3385L1.95312 9.71975V16.4652C1.95312 18.1883 3.355 19.5902 5.07812 19.5902H7.89062C8.3221 19.5902 8.67187 19.2405 8.67187 18.809V12.4418H11.4062V18.809C11.4062 19.2405 11.756 19.5902 12.1875 19.5902H14.9219C16.645 19.5902 18.0469 18.1883 18.0469 16.4652C18.0469 16.0337 17.6971 15.684 17.2656 15.684C16.8341 15.684 16.4844 16.0337 16.4844 16.4652C16.4844 17.3268 15.7834 18.0277 14.9219 18.0277H12.9687V11.6605C12.9687 11.229 12.619 10.8793 12.1875 10.8793H7.89062C7.45914 10.8793 7.10937 11.229 7.10937 11.6605V18.0277H5.07812C4.21656 18.0277 3.51562 17.3268 3.51562 16.4652V8.18397C3.51562 8.17616 3.5155 8.16838 3.51527 8.16065L9.52914 2.15866C9.82183 1.9101 10.2511 1.91104 10.5427 2.16081L16.4844 8.14166V12.559C16.4844 12.9905 16.8341 13.3402 17.2656 13.3402C17.6971 13.3402 18.0469 12.9905 18.0469 12.559V9.71444L18.6645 10.3362C18.8172 10.4899 19.0179 10.5668 19.2187 10.5668C19.4178 10.5668 19.617 10.4912 19.7694 10.3398C20.0755 10.0357 20.0771 9.54104 19.773 9.23495Z"})})})},O=function(e){var t=e.classNames;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:d()("fill-current",t),children:Object(n.jsx)("path",{d:"M16.4919 0.000152588C16.4906 0.000152588 16.4894 0 16.488 0C16.4874 0 16.4868 0 16.4862 0C16.4856 0 16.485 0 16.4844 0C16.4832 0 16.4819 0.000152588 16.4806 0.000152588C16.4474 0.000305176 16.4145 0.00152588 16.3815 0.00274658C16.3638 0.00152588 16.3461 0 16.3281 0H6.05469C4.33151 0 2.92969 1.40182 2.92969 3.125C2.92969 3.15277 2.93121 3.17993 2.93396 3.20694C2.94693 5.03632 3.38531 7.19757 3.84933 9.4841C4.13498 10.8917 4.42856 12.3393 4.62906 13.75H2.38281C2.23862 13.75 2.09717 13.79 1.97418 13.8654C1.91025 13.9047 0.418549 14.8427 0.392456 16.8222C0.391235 16.8396 0.390625 16.8573 0.390625 16.875C0.390625 18.5982 1.79245 20 3.51562 20H13.7552C15.4744 19.9959 16.8723 18.596 16.8727 16.8758C16.8727 16.4444 16.5231 16.0945 16.0916 16.0944C16.0915 16.0944 16.0915 16.0944 16.0915 16.0944C15.6601 16.0944 15.3102 16.4441 15.3102 16.8755C15.3099 17.7362 14.61 18.4364 13.7495 18.4375C12.8888 18.4364 12.1889 17.7359 12.1889 16.875C12.1889 15.7811 12.9579 15.2428 13.0293 15.195C13.3322 15.0169 13.4711 14.6628 13.3795 14.3231C13.2877 13.9821 12.9703 13.75 12.6172 13.75H6.20682C5.99991 12.2243 5.68573 10.6764 5.38071 9.17343C4.92569 6.93146 4.496 4.814 4.496 3.12439C4.496 3.10776 4.49448 3.09158 4.49341 3.07526C4.51981 2.23679 5.20981 1.5625 6.05469 1.5625H13.7836C13.5168 2.0224 13.3633 2.55569 13.3632 3.12439C13.3632 4.97101 13.808 7.16324 14.2792 9.4841C14.5377 10.7579 14.805 12.0752 15.0017 13.3614C15.0609 13.7479 15.3937 14.0247 15.773 14.0247C15.8122 14.0247 15.8521 14.0216 15.892 14.0157C16.3187 13.9503 16.6115 13.5518 16.5463 13.1252C16.3438 11.8016 16.0727 10.4654 15.8104 9.17328C15.3554 6.93146 14.9257 4.814 14.9257 3.12454C14.9258 2.26379 15.6258 1.56357 16.4864 1.5625C17.347 1.56357 18.0469 2.2641 18.0469 3.125C18.0469 3.95966 17.5992 4.47083 17.3553 4.6875H17.2266C16.795 4.6875 16.4453 5.03723 16.4453 5.46875C16.4453 5.90027 16.795 6.25 17.2266 6.25H17.6186C17.7628 6.25 17.9042 6.21002 18.0272 6.13464C18.0917 6.09497 19.6094 5.14069 19.6094 3.125C19.6094 1.40442 18.2115 0.00427246 16.4919 0.000152588ZM11.0458 18.4375H3.51562C2.66693 18.4375 1.97418 17.7574 1.95358 16.9136C1.95419 16.9008 1.9545 16.888 1.9545 16.875C1.9545 16.0403 2.40219 15.5292 2.64618 15.3125H10.9705C10.77 15.7359 10.6264 16.2552 10.6264 16.875C10.6264 17.4438 10.7791 17.9776 11.0458 18.4375ZM6.875 6.25C6.44348 6.25 6.09375 5.90027 6.09375 5.46875C6.09375 5.03723 6.44348 4.6875 6.875 4.6875H11.2891C11.7206 4.6875 12.0703 5.03723 12.0703 5.46875C12.0703 5.90027 11.7206 6.25 11.2891 6.25H6.875ZM11.7578 8.98438H7.38281C6.95129 8.98438 6.60156 8.63464 6.60156 8.20312C6.60156 7.77161 6.95129 7.42188 7.38281 7.42188H11.7578C12.1893 7.42188 12.5391 7.77161 12.5391 8.20312C12.5391 8.63464 12.1893 8.98438 11.7578 8.98438ZM10.7812 10.1562C11.2128 10.1562 11.5625 10.506 11.5625 10.9375C11.5625 11.369 11.2128 11.7188 10.7812 11.7188H8.00781C7.57629 11.7188 7.22656 11.369 7.22656 10.9375C7.22656 10.506 7.57629 10.1562 8.00781 10.1562H10.7812Z"})})})},v=function(e){var t=e.classNames;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:d()("fill-current",t),children:Object(n.jsx)("path",{d:"M5.23605 19.5325C5.07477 19.5325 4.9118 19.501 4.75632 19.4366C4.28741 19.2424 3.98438 18.7889 3.98438 18.2814V16.9531C3.98438 16.4792 3.59894 16.0938 3.125 16.0938C1.40182 16.0938 0 14.6919 0 12.9688V3.59375C0 1.87057 1.40182 0.46875 3.125 0.46875H16.875C18.5982 0.46875 20 1.87057 20 3.59375V9.0625C20 9.49402 19.6503 9.84375 19.2188 9.84375C18.7872 9.84375 18.4375 9.49402 18.4375 9.0625V3.59375C18.4375 2.73224 17.7365 2.03125 16.875 2.03125H3.125C2.26349 2.03125 1.5625 2.73224 1.5625 3.59375V12.9688C1.5625 13.8303 2.26349 14.5312 3.125 14.5312C4.46045 14.5312 5.54688 15.6177 5.54688 16.9531V17.5279L7.24808 15.8267C8.0835 14.9913 9.19418 14.5312 10.3757 14.5312H16.875C17.7365 14.5312 18.4375 13.8303 18.4375 12.9688C18.4375 12.5372 18.7872 12.1875 19.2188 12.1875C19.6503 12.1875 20 12.5372 20 12.9688C20 14.6919 18.5982 16.0938 16.875 16.0938H10.3757C9.61151 16.0938 8.89328 16.3913 8.35297 16.9316L6.11893 19.1656C5.87921 19.4054 5.56076 19.5325 5.23605 19.5325ZM16.0938 5.15625C16.0938 4.72473 15.744 4.375 15.3125 4.375H4.6875C4.25598 4.375 3.90625 4.72473 3.90625 5.15625C3.90625 5.58777 4.25598 5.9375 4.6875 5.9375H15.3125C15.744 5.9375 16.0938 5.58777 16.0938 5.15625ZM16.0938 8.28125C16.0938 7.84973 15.744 7.5 15.3125 7.5H4.6875C4.25598 7.5 3.90625 7.84973 3.90625 8.28125C3.90625 8.71277 4.25598 9.0625 4.6875 9.0625H15.3125C15.744 9.0625 16.0938 8.71277 16.0938 8.28125ZM12.9688 11.4062C12.9688 10.9747 12.619 10.625 12.1875 10.625H4.6875C4.25598 10.625 3.90625 10.9747 3.90625 11.4062C3.90625 11.8378 4.25598 12.1875 4.6875 12.1875H12.1875C12.619 12.1875 12.9688 11.8378 12.9688 11.4062Z"})})})},g=function(e){var t=e.classNames;return Object(n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:d()("fill-current",t),children:Object(n.jsx)("path",{d:"M19.2188 12.9695C19.6502 12.9695 20 12.6197 20 12.1882V7.03196C20 5.30884 18.5981 3.907 16.875 3.907H13.5127V2.88845C13.5127 1.70458 12.5496 0.741455 11.3657 0.741455H8.63426C7.45039 0.741455 6.48727 1.70458 6.48727 2.88845V3.90696H3.125C1.40188 3.90696 0 5.30884 0 7.03196V16.1335C0 17.8567 1.40188 19.2585 3.125 19.2585H16.875C18.5981 19.2585 20 17.8567 20 16.1335C20 15.702 19.6502 15.3523 19.2188 15.3523C18.7873 15.3523 18.4375 15.702 18.4375 16.1335C18.4375 16.9951 17.7366 17.696 16.875 17.696H3.125C2.26344 17.696 1.5625 16.9951 1.5625 16.1335V10.5852H9.25781V11.7585C9.25781 12.19 9.60758 12.5398 10.0391 12.5398C10.4705 12.5398 10.8203 12.19 10.8203 11.7585V10.5852H18.4375V12.1882C18.4375 12.6197 18.7873 12.9695 19.2188 12.9695ZM8.04977 2.88845C8.04977 2.56614 8.31195 2.30396 8.63426 2.30396H11.3657C11.688 2.30396 11.9502 2.56614 11.9502 2.88845V3.90696H8.04977V2.88845ZM1.5625 9.02274V7.032C1.5625 6.17044 2.26344 5.4695 3.125 5.4695H16.875C17.7366 5.4695 18.4375 6.17044 18.4375 7.032V9.02274H1.5625Z"})})},w=function(e){var t=e.classNames;return Object(n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:d()("fill-current",t),children:Object(n.jsx)("path",{d:"M19.9498 17.1376C19.8618 16.7152 19.4482 16.4441 19.0257 16.532C18.6032 16.6199 18.3321 17.0337 18.4201 17.4561C18.4707 17.6994 18.4104 17.9487 18.2546 18.1404C18.1644 18.2514 17.9632 18.4375 17.6297 18.4375H2.37129C2.03778 18.4375 1.83657 18.2513 1.74633 18.1404C1.59051 17.9488 1.5302 17.6994 1.58086 17.4561C2.39165 13.5617 5.82661 10.717 9.79336 10.621C9.86208 10.6237 9.9311 10.625 10.0005 10.625C10.0701 10.625 10.1394 10.6236 10.2084 10.621C13.0026 10.688 15.5852 12.1033 17.1493 14.4358C17.3895 14.7942 17.8748 14.8899 18.2332 14.6496C18.5916 14.4094 18.6873 13.9241 18.447 13.5657C17.1651 11.6538 15.3037 10.2636 13.1813 9.56504C14.4746 8.59516 15.313 7.04988 15.313 5.3125C15.313 2.3832 12.9298 0 10.0005 0C7.07114 0 4.68797 2.3832 4.68797 5.3125C4.68797 7.05094 5.52735 8.59703 6.82208 9.56684C5.63583 9.95738 4.52274 10.5651 3.54852 11.3664C1.76211 12.8358 0.520044 14.8854 0.0511764 17.1376C-0.0957768 17.8433 0.0802779 18.5682 0.534106 19.1262C0.985708 19.6815 1.65536 20 2.37129 20H17.6296C18.3456 20 19.0152 19.6815 19.4668 19.1262C19.9207 18.5682 20.0967 17.8433 19.9498 17.1376ZM6.25047 5.3125C6.25047 3.24473 7.9327 1.5625 10.0005 1.5625C12.0682 1.5625 13.7505 3.24473 13.7505 5.3125C13.7505 7.3166 12.1702 8.95856 10.1903 9.05773C10.1271 9.05656 10.0638 9.05598 10.0005 9.05598C9.93743 9.05598 9.87438 9.0566 9.81141 9.05777C7.83114 8.95898 6.25047 7.31687 6.25047 5.3125Z"})})},N=function(e){var t=e.classNames;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:d()("fill-current",t),children:Object(n.jsx)("path",{d:"M10 4.6875C11.2924 4.6875 12.3438 3.63617 12.3438 2.34375C12.3438 1.05133 11.2924 0 10 0C8.70758 0 7.65625 1.05133 7.65625 2.34375C7.65625 3.63617 8.70758 4.6875 10 4.6875ZM10 1.5625C10.4308 1.5625 10.7812 1.91299 10.7812 2.34375C10.7812 2.77451 10.4308 3.125 10 3.125C9.56924 3.125 9.21875 2.77451 9.21875 2.34375C9.21875 1.91299 9.56924 1.5625 10 1.5625ZM14.2969 12.4255C14.2969 13.3804 13.7881 14.2789 12.9694 14.7702L12.9129 14.8041C12.5618 15.0148 12.3438 15.3998 12.3438 15.809V19.2188C12.3438 19.6503 11.994 20 11.5625 20C11.131 20 10.7812 19.6503 10.7812 19.2188V15.809C10.7812 14.8541 11.29 13.9557 12.1088 13.4644L12.1652 13.4305C12.5163 13.2199 12.7344 12.8348 12.7344 12.4255V8.94531C12.7344 7.33109 11.2367 6.99219 9.98047 6.99219C8.72421 6.99219 7.22656 7.33109 7.22656 8.94531V12.4142C7.22656 12.8278 7.44797 13.2147 7.80426 13.4244L7.87064 13.4634C8.70224 13.9526 9.21875 14.8557 9.21875 15.8203V19.2188C9.21875 19.6503 8.86902 20 8.4375 20C8.00598 20 7.65625 19.6503 7.65625 19.2188V15.8203C7.65625 15.4068 7.43484 15.0198 7.07855 14.8103L7.01218 14.7713C6.18057 14.2821 5.66406 13.3789 5.66406 12.4142V8.94531C5.66406 7.7684 6.13922 6.81976 7.03827 6.20209C7.77374 5.69672 8.7912 5.42969 9.98047 5.42969C11.1697 5.42969 12.1872 5.69672 12.9227 6.20209C13.8217 6.81976 14.2969 7.7684 14.2969 8.94531V12.4255ZM3.90625 6.25C5.19867 6.25 6.25 5.19867 6.25 3.90625C6.25 2.61383 5.19867 1.5625 3.90625 1.5625C2.61383 1.5625 1.5625 2.61383 1.5625 3.90625C1.5625 5.19867 2.61383 6.25 3.90625 6.25ZM3.90625 3.125C4.33701 3.125 4.6875 3.47549 4.6875 3.90625C4.6875 4.33701 4.33701 4.6875 3.90625 4.6875C3.47549 4.6875 3.125 4.33701 3.125 3.90625C3.125 3.47549 3.47549 3.125 3.90625 3.125ZM6.25 16.4844V19.2188C6.25 19.6503 5.90027 20 5.46875 20C5.03723 20 4.6875 19.6503 4.6875 19.2188V16.4844C4.6875 16.0529 5.03723 15.7031 5.46875 15.7031C5.90027 15.7031 6.25 16.0529 6.25 16.4844ZM4.60938 7.79297C4.60938 8.22449 4.25964 8.57422 3.82812 8.57422C1.5625 8.57422 1.5625 9.63837 1.5625 10.0391V13.3594C1.5625 13.7263 1.73767 14.0767 2.03125 14.2969C2.71606 14.8105 3.125 15.6284 3.125 16.4844V19.2188C3.125 19.6503 2.77527 20 2.34375 20C1.91223 20 1.5625 19.6503 1.5625 19.2188V16.4844C1.5625 16.1174 1.38733 15.7671 1.09375 15.5469C0.408936 15.0333 0 14.2154 0 13.3594V10.0391C0 8.983 0.433655 8.1485 1.25397 7.62604C1.89392 7.21832 2.76001 7.01172 3.82812 7.01172C4.25964 7.01172 4.60938 7.36145 4.60938 7.79297ZM16.0938 6.25C17.3862 6.25 18.4375 5.19867 18.4375 3.90625C18.4375 2.61383 17.3862 1.5625 16.0938 1.5625C14.8013 1.5625 13.75 2.61383 13.75 3.90625C13.75 5.19867 14.8013 6.25 16.0938 6.25ZM16.0938 3.125C16.5245 3.125 16.875 3.47549 16.875 3.90625C16.875 4.33701 16.5245 4.6875 16.0938 4.6875C15.663 4.6875 15.3125 4.33701 15.3125 3.90625C15.3125 3.47549 15.663 3.125 16.0938 3.125ZM15.3125 16.4844V19.2188C15.3125 19.6503 14.9628 20 14.5312 20C14.0997 20 13.75 19.6503 13.75 19.2188V16.4844C13.75 16.0529 14.0997 15.7031 14.5312 15.7031C14.9628 15.7031 15.3125 16.0529 15.3125 16.4844ZM20 10.0391V13.3594C20 14.2154 19.5911 15.0333 18.9062 15.5469C18.6127 15.7671 18.4375 16.1174 18.4375 16.4844V19.2188C18.4375 19.6503 18.0878 20 17.6562 20C17.2247 20 16.875 19.6503 16.875 19.2188V16.4844C16.875 15.6284 17.2839 14.8105 17.9688 14.2969C18.2623 14.0767 18.4375 13.7263 18.4375 13.3594V10.0391C18.4375 9.63837 18.4375 8.57422 16.1719 8.57422C15.7404 8.57422 15.3906 8.22449 15.3906 7.79297C15.3906 7.36145 15.7404 7.01172 16.1719 7.01172C17.24 7.01172 18.1061 7.21832 18.746 7.62604C19.5663 8.1485 20 8.983 20 10.0391Z"})})})},y=function(e){var t=e.activeLinkClass,s=e.linkText,c=e.href,i=e.icon,l=function(){switch(i){case"Home":return Object(n.jsx)(p,{classNames:"ml-5 mr-4"});case"Talents":return Object(n.jsx)(O,{classNames:"ml-5 mr-4"});case"Messages":return Object(n.jsx)(v,{classNames:"ml-5 mr-4"});case"Opportunities":return Object(n.jsx)(g,{classNames:"ml-5 mr-4"});case"Profile":return Object(n.jsx)(w,{classNames:"ml-5 mr-4"});case"Team":return Object(n.jsx)(N,{classNames:"ml-5 mr-4"});default:return null}};return c===Object(j.useRouter)().pathname?Object(n.jsx)(o.a,{href:c,children:Object(n.jsxs)("li",{className:d()("flex items-center w-full my-2 text-primary",t),children:[l(),Object(n.jsx)("a",{className:"text-titles cursor-pointer",children:s})]})}):Object(n.jsx)(o.a,{href:c,children:Object(n.jsxs)("div",{className:"flex items-center w-full my-2 text-secondary",children:[l(),Object(n.jsx)("a",{className:"cursor-pointer",children:s})]})})},k=function(){var e=Object(c.useState)([{id:1,path:"/",activeClass:"active-sidebar-link",linkText:"Home",icon:"Home"},{id:2,path:"/talents",activeClass:"active-sidebar-link",linkText:"Talents",icon:"Talents"},{id:3,path:"/messages",activeClass:"active-sidebar-link",linkText:"Messages",icon:"Messages"},{id:4,path:"/opportunities",activeClass:"active-sidebar-link",linkText:"Opportunities",icon:"Opportunities"},{id:5,path:"/profile",activeClass:"active-sidebar-link",linkText:"Profile",icon:"Profile"},{id:6,path:"/team",activeClass:"active-sidebar-link",linkText:"Team",icon:"Team"}]),t=e[0],s=e[1];Object(c.useEffect)((function(){s(t)}),[]);var l=t.map((function(e){return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsx)(y,{href:e.path,activeLinkClass:e.activeClass,linkText:e.linkText,icon:e.icon})},e.id)}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"flex items-center flex-wrap py-5",children:[Object(n.jsx)("div",{className:"w-full flex flex-wrap items-center",children:l}),Object(n.jsx)("div",{className:"w-full h-px bg-secondary-elements mx-5 mt-4"})]})})},H=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("svg",{width:"24",height:"22",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M20.1591 9.87572L7.12531 9.87572C6.50401 9.87572 6.00032 10.3794 6.00032 11.0007C6.00032 11.622 6.50401 12.1257 7.12531 12.1257L20.1591 12.1257L18.7046 13.5803C18.2652 14.0196 18.2652 14.7319 18.7046 15.1712C19.1438 15.6106 19.8562 15.6106 20.2955 15.1712L23.6704 11.7963C23.6967 11.77 23.7216 11.7424 23.7452 11.7136C23.7554 11.7011 23.7644 11.6878 23.774 11.675C23.7864 11.6585 23.7992 11.6423 23.8106 11.6252C23.8211 11.6095 23.8302 11.5932 23.8398 11.5772C23.849 11.5617 23.8587 11.5466 23.8672 11.5307C23.876 11.5142 23.8835 11.4973 23.8914 11.4805C23.8992 11.4641 23.9074 11.4479 23.9144 11.4311C23.9211 11.4146 23.9267 11.3979 23.9326 11.3813C23.9391 11.3633 23.946 11.3455 23.9515 11.3271C23.9566 11.3105 23.9602 11.2936 23.9644 11.2767C23.9692 11.258 23.9744 11.2394 23.9782 11.2204C23.982 11.201 23.9843 11.1813 23.9871 11.1617C23.9895 11.145 23.9927 11.1285 23.9944 11.1116C23.998 11.0753 23.9998 11.0387 23.9999 11.0023C23.9999 11.0018 24 11.0012 24 11.0006C24 11.0001 23.9999 10.9995 23.9999 10.999C23.9998 10.9625 23.998 10.926 23.9944 10.8896C23.9927 10.8729 23.9896 10.8566 23.9872 10.8401C23.9844 10.8203 23.9821 10.8005 23.9782 10.7808C23.9744 10.7619 23.9692 10.7436 23.9645 10.7251C23.9602 10.7081 23.9565 10.6909 23.9514 10.674C23.9459 10.6559 23.9391 10.6385 23.9328 10.6208C23.9267 10.6038 23.9212 10.5868 23.9143 10.5701C23.9075 10.5536 23.8994 10.5378 23.8918 10.5217C23.8837 10.5045 23.876 10.4872 23.867 10.4703C23.8588 10.4549 23.8494 10.4403 23.8405 10.4254C23.8307 10.4088 23.8213 10.3921 23.8105 10.376C23.7995 10.3595 23.7873 10.3442 23.7755 10.3283C23.7653 10.3148 23.7559 10.3007 23.745 10.2875C23.7226 10.2602 23.6988 10.2341 23.674 10.2089C23.6728 10.2077 23.6718 10.2064 23.6706 10.2052L20.2956 6.83014C20.0759 6.61046 19.788 6.50059 19.5001 6.50059C19.2122 6.50066 18.9242 6.61046 18.7047 6.83006C18.2653 7.26941 18.2653 7.98168 18.7046 8.42103L20.1591 9.87572Z",fill:"#C8CFE2"}),Object(n.jsx)("path",{d:"M1.12512 21.125L15.375 21.125C15.9963 21.125 16.5 20.6213 16.5 20L16.5 15.5C16.5 14.8787 15.9963 14.375 15.375 14.375C14.7537 14.375 14.25 14.8787 14.25 15.5L14.25 18.875L2.25011 18.875L2.25011 3.12504L14.25 3.12504L14.25 6.50009C14.25 7.12139 14.7537 7.62509 15.375 7.62508C15.9963 7.62508 16.5 7.12139 16.5 6.50009L16.5 2.00005C16.5 1.37875 15.9963 0.875052 15.375 0.875052L1.12512 0.875053C0.503821 0.875053 0.000124159 1.37875 0.000124213 2.00005L0.000125787 20C0.000125841 20.6213 0.503822 21.125 1.12512 21.125Z",fill:"#C8CFE2"})]})})},V=function(e){var t=e.onCrossClick,s=e.isSidebarOpen;return Object(n.jsxs)(n.Fragment,{children:[s?Object(n.jsx)("div",{className:"fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20",style:{marginTop:"60px",zIndex:999999999999999}}):void 0,Object(n.jsxs)("div",{className:d()("bg-white fixed w-52 cool-transition shadow-main top-0 rounded-l-5xl",{"right-0":s,"-right-full":!s}),style:{zIndex:1e16},children:[Object(n.jsx)(h,{onCrossClick:t}),Object(n.jsx)(f,{}),Object(n.jsx)(k,{}),Object(n.jsx)("div",{className:"w-full flex pb-5",children:Object(n.jsx)(o.a,{href:"/login",children:Object(n.jsxs)("button",{className:"w-full flex justify-center bg-transparent outline-none focus:outline-none text-sm",children:[Object(n.jsx)(H,{}),Object(n.jsx)("span",{className:"ml-2 mt-px",children:"Logout"})]})})})]})]})},L=function(){var e=Object(c.useState)([{id:1,path:"/",activeClass:"active-link",linkText:"Home"},{id:2,path:"/talents",activeClass:"active-link",linkText:"Talents"},{id:3,path:"/messages",activeClass:"active-link",linkText:"Messages"},{id:4,path:"/opportunities",activeClass:"active-link",linkText:"Opportunities"},{id:5,path:"/profile",activeClass:"active-link",linkText:"Profile"},{id:6,path:"/team",activeClass:"active-link",linkText:"Team"}]),t=e[0],s=e[1],l=Object(j.useRouter)(),a=Object(c.useState)(!1),r=a[0],C=a[1],d=t.map((function(e){return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsx)(x,{href:e.path,activeLinkClass:e.activeClass,linkText:e.linkText})},e.id)})),m=function(){window.innerWidth>=1024&&C(!1)};Object(c.useEffect)((function(){return s(t),m(),window.addEventListener("resize",(function(){m()})),window.removeEventListener("resize",(function(){m()}))}),[]);return Object(n.jsx)(i.a.Fragment,{children:Object(n.jsxs)("header",{id:"app-header",className:"w-full md:px-6 pl-6 fixed top-0 py-0 border-b border-secondary-elements bg-white",style:{zIndex:99999999999999},children:[Object(n.jsxs)("div",{className:"lg:hidden flex items-center py-4 pr-6",children:[Object(n.jsx)("div",{className:"w-1/3",children:Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("img",{src:"/img/logo.svg",alt:"",className:"cursor-pointer"})})}),Object(n.jsxs)("div",{className:"w-2/3 text-right flex items-center justify-end",children:[Object(n.jsx)("button",{className:"bg-transparent outline-none focus:outline-none",onClick:function(){l.push("/messages")},children:Object(n.jsx)("img",{src:"/img/icons/message-icon.svg",alt:"",className:"w-2/3"})}),Object(n.jsx)(u,{}),Object(n.jsx)("button",{className:"bg-transparent outline-none focus:outline-none",onClick:function(){C(!0)},children:Object(n.jsx)("img",{src:"/img/icons/hamburger-icon.svg",alt:""})})]})]}),Object(n.jsxs)("div",{className:"lg:flex items-center hidden",children:[Object(n.jsx)("div",{className:"w-1/5",children:Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("img",{src:"/img/logo.svg",alt:"",className:"cursor-pointer"})})}),Object(n.jsx)("div",{className:"w-3/5 text-center",children:Object(n.jsx)("ul",{className:"flex justify-center list-none",children:d})}),Object(n.jsxs)("div",{className:"w-1/5 flex items-center justify-end",children:[Object(n.jsx)(u,{}),Object(n.jsx)(b,{})]})]}),Object(n.jsx)(V,{onCrossClick:function(){C(!1)},isSidebarOpen:r})]})})};t.a=function(e){var t=e.children,s=e.title,c=void 0===s?"This is the default title":s;return Object(n.jsxs)("div",{className:"overflow-x-hidden",children:[Object(n.jsxs)(a.a,{children:[Object(n.jsx)("title",{children:c}),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"})]}),Object(n.jsx)(L,{}),t]})}}}]);