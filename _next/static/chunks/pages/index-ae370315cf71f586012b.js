_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return B}));var n=r("q1tI"),a=r.n(n),i=r("sKyC"),u=r("BXwj"),c=r("qd8s"),o=r.n(c),l=r("KwD7"),s=r("bmMU"),f=r.n(s),b=r("+p43"),m=r("5+Am"),p=r("CRla");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(){return v({},Object(b.b)(),{theme:Object(m.d)()})}function h(e,t,r){var a,i;void 0===t&&(t={}),void 0===r&&(r={});var{styleConfig:c}=t,s=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),{theme:b,colorMode:m}=d(),p=Object(u.e)(b,"components."+e),v=c||p,h=o()({theme:b,colorMode:m},null!=(a=null==v?void 0:v.defaultProps)?a:{},Object(u.a)(Object(u.h)(s,["children"]))),y=Object(n.useRef)({});return Object(n.useMemo)(()=>{if(v){var e,t,n,a,i,u,c=Object(l.b)(null!=(e=v.baseStyle)?e:{},h),s=Object(l.b)(null!=(t=null==(n=v.variants)?void 0:n[h.variant])?t:{},h),b=Object(l.b)(null!=(a=null==(i=v.sizes)?void 0:i[h.size])?a:{},h),m=o()({},c,b,s);null!=(u=r)&&u.isMultiPart&&v.parts&&v.parts.forEach(e=>{var t;m[e]=null!=(t=m[e])?t:{}}),f()(y.current,m)||(y.current=m)}return y.current},[v,h,null==(i=r)?void 0:i.isMultiPart])}var y=r("U6LL"),O=r("epLR"),_=r("pr4h");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var N=Object(i.a)((e,t)=>{var r=function(e,t){return h(e,t,{isMultiPart:!0})}("Table",e),a=Object(p.b)(e),{className:i}=a,u=g(a,["className"]);return n.createElement(m.b,{value:r},n.createElement(y.a.table,j({role:"table",ref:t,__css:r.table,className:Object(O.a)("chakra-table",i)},u)))});_.a&&(N.displayName="Table");var w=Object(i.a)((e,t)=>{var{placement:r="bottom"}=e,a=g(e,["placement"]),i=Object(m.c)();return n.createElement(y.a.caption,j({},a,{ref:t,__css:j({},i.caption,{captionSide:r})}))});_.a&&(w.displayName="TableCaption");var E=Object(i.a)((e,t)=>{var r=Object(m.c)();return n.createElement(y.a.thead,j({},e,{ref:t,__css:r.thead}))}),M=Object(i.a)((e,t)=>{var r=Object(m.c)();return n.createElement(y.a.tbody,j({},e,{ref:t,__css:r.tbody}))}),k=Object(i.a)((e,t)=>{var{isNumeric:r}=e,a=g(e,["isNumeric"]),i=Object(m.c)();return n.createElement(y.a.th,j({},a,{ref:t,__css:i.th,"data-is-numeric":r}))}),S=Object(i.a)((e,t)=>{var r=Object(m.c)();return n.createElement(y.a.tr,j({role:"row"},e,{ref:t,__css:r.tr}))}),x=Object(i.a)((e,t)=>{var{isNumeric:r}=e,a=g(e,["isNumeric"]),i=Object(m.c)();return n.createElement(y.a.td,j({role:"gridcell"},a,{ref:t,__css:i.td,"data-is-numeric":r}))}),P=r("Bl7J"),C=a.a.createElement,A=function(e){return C(S,{key:e.stock_name},C(x,null,e.stock_name),C(x,null,e.industry),C(x,null,e.state),C(x,{isNumeric:!0},e.current_quantity),C(x,{isNumeric:!0},e.previous_quantity),C(x,{isNumeric:!0},e.change_quantity),C(x,{isNumeric:!0},Number(e.change_market_value).toFixed(2)),C(x,{isNumeric:!0},Number(e.change_percentage_aum).toFixed(2)))},B=!0;t.default=function(e){var t=e.caption,r=e.mutual_funds;return C(P.a,null,C(N,{variant:"simple",colorScheme:"teal"},C(w,null,t),C(E,null,C(S,null,C(k,null,"Stock Name"),C(k,null,"Industry"),C(k,null,"State"),C(k,{isNumeric:!0},"Current Month's Quantity"),C(k,{isNumeric:!0},"Previous Month's Quantity"),C(k,{isNumeric:!0},"Change in Quantity"),C(k,{isNumeric:!0},"Change in Market Value"),C(k,{isNumeric:!0},"Change in AUM %"))),C(M,null,r.new.map(A),r.added.map(A),r.held.map(A),r.reduced.map(A),r.exit.map(A))))}},bmMU:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,a="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,u){if(t===u)return!0;if(t&&u&&"object"==typeof t&&"object"==typeof u){if(t.constructor!==u.constructor)return!1;var c,o,l,s;if(Array.isArray(t)){if((c=t.length)!=u.length)return!1;for(o=c;0!==o--;)if(!e(t[o],u[o]))return!1;return!0}if(n&&t instanceof Map&&u instanceof Map){if(t.size!==u.size)return!1;for(s=t.entries();!(o=s.next()).done;)if(!u.has(o.value[0]))return!1;for(s=t.entries();!(o=s.next()).done;)if(!e(o.value[1],u.get(o.value[0])))return!1;return!0}if(a&&t instanceof Set&&u instanceof Set){if(t.size!==u.size)return!1;for(s=t.entries();!(o=s.next()).done;)if(!u.has(o.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(u)){if((c=t.length)!=u.length)return!1;for(o=c;0!==o--;)if(t[o]!==u[o])return!1;return!0}if(t.constructor===RegExp)return t.source===u.source&&t.flags===u.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===u.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===u.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(u).length)return!1;for(o=c;0!==o--;)if(!Object.prototype.hasOwnProperty.call(u,l[o]))return!1;if(r&&t instanceof Element)return!1;for(o=c;0!==o--;)if(("_owner"!==l[o]&&"__v"!==l[o]&&"__o"!==l[o]||!t.$$typeof)&&!e(t[l[o]],u[l[o]]))return!1;return!0}return t!==t&&u!==u}(e,t)}catch(u){if((u.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw u}}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RXBc")}])}},[["vlRD",1,2,0,3,4,5]]]);