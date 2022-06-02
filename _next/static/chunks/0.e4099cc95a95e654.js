"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{85565:function(r,e,n){n.d(e,{dy:function(){return A},DQ:function(){return _}});n(99021);var t=n(52322),o=n(73023),a=n(68683),i=n(45482),u=n(54503),l=n(82735),c=n(63035),f=n(92682),s=n(56695),d=n(23917),p=n(2784);function m(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function b(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function h(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){b(r,e,n[e])}))}return r}function y(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}function g(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return m(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=Object.defineProperty,w=function(r,e){return v(r,"name",{value:e,configurable:!0})},_=o.rJ,j="Drawer",O=(0,i.z)(s.sL,{name:"DrawerHandle",height:8,borderRadius:100,backgroundColor:"$backgroundHover",position:"absolute",pointerEvents:"auto",zIndex:10,y:-20,top:0,left:"30%",right:"30%",opacity:.5,hoverStyle:{opacity:.7}}),x=g((0,f.b)(j),2),k=x[0],S=(x[1],g(k(j,{}),2)),C=S[0],P=(S[1],(0,i.z)(s.FA,{name:"DrawerBackdrop",backgroundColor:"$color",fullscreen:!0,opacity:.2})),D=(0,i.z)(s.FA,{name:"DrawerFrame",flex:1,backgroundColor:"$background",borderTopLeftRadius:"$4",borderTopRightRadius:"$4",padding:"$4"}),R=w((function(){var r=(0,p.useState)(!!u.$L&&u.yF),e=r[0],n=r[1];return(0,p.useEffect)((function(){u.$L&&!u.yF&&n(!1)}),[]),e}),"useIsSSR"),A=(0,l.$)((0,c.Y)((0,p.forwardRef)((function(r,e){var n=r.__scopeDrawer,i=r.children,l=r.open,c=r.defaultOpen,f=r.onChangeOpen,s=y(r,["__scopeDrawer","children","open","defaultOpen","onChangeOpen"]),m=R(),b=g((0,d.T)({prop:l,defaultProp:c||!1,onChange:f,strategy:"most-recent-wins"}),2),v=b[0],w=b[1],_=(0,p.useRef)(null);if((0,u.LI)((function(){var r;if(!v){var e=setTimeout((function(){var r;null==(r=_.current)||r.dismiss()}));return function(){clearTimeout(e)}}null==(r=_.current)||r.present()}),[v]),m)return null;var j=null,O=null,x=null;return p.Children.forEach(i,(function(r){var e;if((0,p.isValidElement)(r))switch(null==(e=r.type)?void 0:e.staticConfig.componentName){case"DrawerHandle":j=r;break;case"DrawerFrame":x=r;break;case"DrawerBackdrop":O=r;break;default:console.warn("Warning: passed invalid child to Drawer",r)}})),(0,t.jsx)(C,{scope:n,open:v,onChangeOpen:w,children:(0,t.jsx)(o.WN,h({handleComponent:function(){return j},backdropComponent:function(){return O},snapPoints:["80%"],ref:(0,a.F)(e,_),onChange:function(r){w(r>=0)},backgroundStyle:{backgroundColor:"transparent"}},s,{children:x}))})})),{componentName:"Drawer"}),{Provider:_,Handle:O,Frame:D,Backdrop:P,ScrollView:o.vM,get FlatList(){return o.dm},get VirtualizedList(){return o.Hs},get SectionList(){return o.jP}})},40133:function(r,e,n){n.r(e),n.d(e,{default:function(){return y}});var t=n(52322),o=n(50711),a=(n(99021),n(82735)),i=n(92890),u=n(85565),l=n(23917),c=n(2784);function f(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function s(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return f(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=Object.defineProperty,p=function(r,e){return d(r,"name",{value:e,configurable:!0})}((function(r){return r.children}),"MenuItem"),m=(0,a.$)((function(r){var e=r.children,n=r.open,o=r.defaultOpen,a=r.trigger,f=r.onChangeOpen,d=(0,i.GS)(),p=s((0,l.T)({prop:n,defaultProp:o||!1,onChange:function(r){null==f||f(r)}}),2),m=p[0],b=p[1],h=(0,c.useMemo)((function(){return{onPress:function(){b((function(r){return!r}))}}}),[]);return d.sm?(0,t.jsxs)(t.Fragment,{children:[(0,c.cloneElement)(a,h),(0,t.jsx)(u.dy,{open:m,onDismiss:function(){return b(!1)},children:e})]}):null}),{Item:p,Provider:u.DQ}),b=n(42571),h=n(15169);function y(){var r=(0,c.useState)(!1),e=r[0],n=r[1];return(0,t.jsx)(m.Provider,{children:(0,t.jsx)(m,{open:e,onChangeOpen:n,trigger:(0,t.jsx)(b.z,{tag:"button",size:"$6",icon:o.v,theme:e?"active":null,circular:!0,width:"_w-1y5umnj",height:"_h-omr7rk",maxWidth:"_maw-1amgjsb",maxHeight:"_mah-58rams",minWidth:"_miw-1igx5a5",minHeight:"_mih-zdpn2a",borderTopLeftRadius:"_btlr-1ffllu1",borderTopRightRadius:"_btrr-s1eb1o",borderBottomRightRadius:"_bbrr-1dnaj0e",borderBottomLeftRadius:"_bblr-avx2d3",paddingTop:"_pt-bv6eyc",paddingBottom:"_pb-15pd5p8",paddingRight:"_pr-va8vyl",paddingLeft:"_pl-wh8dj4",onPress:function(){return n((function(r){return!r}))}}),children:(0,t.jsx)(m.Item,{children:(0,t.jsxs)("div",{className:" _pl-11o8qju _pb-rqvy86 _pr-6dx4l3 _pt-2w0cny _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-1elmj36 _ai-o35pey ",children:[(0,t.jsx)(h.H4,{accessibilityRole:"header",tag:"h4",children:"Menu contents"}),(0,t.jsx)("p",{className:" _lh-1x7rt8o _fos-1y4ya70 _letsp-1y1dvx7 _fow-1lznk30 _col-f1vuru _ussel-1k4z3v8 _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _fofam-41wzum _disp-1ffesbf ",children:"Lorem ipsum dolor sit amet."})]})})})})}}}]);