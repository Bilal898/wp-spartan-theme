this.wp=this.wp||{},this.wp.blockDirectory=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=315)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},18:function(e,t,n){"use strict";var r=n(32);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return o}))},2:function(e,t){!function(){e.exports=this.lodash}()},22:function(e,t,n){"use strict";var r=n(34);var o=n(35);function c(e,t){return Object(r.a)(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}return n}(e,t)||Object(o.a)()}n.d(t,"a",(function(){return c}))},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},3:function(e,t){!function(){e.exports=this.wp.components}()},315:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"isRequestingDownloadableBlocks",(function(){return b})),n.d(r,"getDownloadableBlocks",(function(){return d})),n.d(r,"hasInstallBlocksPermission",(function(){return f})),n.d(r,"getInstalledBlockTypes",(function(){return p}));var o={};n.r(o),n.d(o,"fetchDownloadableBlocks",(function(){return N})),n.d(o,"receiveDownloadableBlocks",(function(){return C})),n.d(o,"setInstallBlocksPermission",(function(){return T})),n.d(o,"downloadBlock",(function(){return I})),n.d(o,"installBlock",(function(){return L})),n.d(o,"uninstallBlock",(function(){return D})),n.d(o,"addInstalledBlockType",(function(){return A})),n.d(o,"removeInstalledBlockType",(function(){return P}));var c=n(4),a=n(18),l=n(9),i=n(6),s=Object(c.combineReducers)({downloadableBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:{},hasPermission:!0,filterValue:void 0,isRequestingDownloadableBlocks:!0,installedBlockTypes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOWNLOADABLE_BLOCKS":return Object(i.a)({},e,{isRequestingDownloadableBlocks:!0});case"RECEIVE_DOWNLOADABLE_BLOCKS":return Object(i.a)({},e,{results:Object.assign({},e.results,Object(l.a)({},t.filterValue,t.downloadableBlocks)),hasPermission:!0,isRequestingDownloadableBlocks:!1});case"SET_INSTALL_BLOCKS_PERMISSION":return Object(i.a)({},e,{items:t.hasPermission?e.items:[],hasPermission:t.hasPermission});case"ADD_INSTALLED_BLOCK_TYPE":return Object(i.a)({},e,{installedBlockTypes:[].concat(Object(a.a)(e.installedBlockTypes),[t.item])});case"REMOVE_INSTALLED_BLOCK_TYPE":return Object(i.a)({},e,{installedBlockTypes:e.installedBlockTypes.filter((function(e){return e.name!==t.item.name}))})}return e}}),u=n(2);function b(e){return e.downloadableBlocks.isRequestingDownloadableBlocks}function d(e,t){return e.downloadableBlocks.results[t]?e.downloadableBlocks.results[t]:[]}function f(e){return e.downloadableBlocks.hasPermission}function p(e){return Object(u.get)(e,["downloadableBlocks","installedBlockTypes"],[])}var m=n(23),k=n.n(m),O=n(10),_=n(37),h=n.n(_),j=k.a.mark(E);function y(e){return{type:"API_FETCH",request:e}}var v=function(e,t,n){if(e){var r=document.querySelector('script[src="'.concat(e.src,'"]'));r&&r.parentNode.removeChild(r);var o=document.createElement("script");o.src="string"==typeof e?e:e.src,o.onload=t,o.onerror=n,document.body.appendChild(o)}},w=function(e){if(e){var t=document.createElement("link");t.rel="stylesheet",t.href="string"==typeof e?e:e.src,document.body.appendChild(t)}};function E(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{type:"LOAD_ASSETS",assets:e});case 1:case"end":return t.stop()}}),j)}var g={SELECT:Object(c.createRegistryControl)((function(e){return function(t){var n,r=t.storeName,o=t.selectorName,c=t.args;return(n=e.select(r))[o].apply(n,Object(a.a)(c))}})),DISPATCH:Object(c.createRegistryControl)((function(e){return function(t){var n,r=t.storeName,o=t.dispatcherName,c=t.args;return(n=e.dispatch(r))[o].apply(n,Object(a.a)(c))}})),API_FETCH:function(e){var t=e.request;return h()(Object(i.a)({},t))},LOAD_ASSETS:function(e){var t=e.assets;return new Promise((function(e,n){if(Array.isArray(t)){var r=0;Object(u.forEach)(t,(function(t){null!==t.match(/\.js$/)?(r++,v(t,(function(){if(0===--r)return e(r)}),n)):w(t)}))}else v(t.editor_script,(function(){return e(0)}),n),w(t.style)}))}},B=k.a.mark(I),x=k.a.mark(L),S=k.a.mark(D);function N(){return{type:"FETCH_DOWNLOADABLE_BLOCKS"}}function C(e,t){return{type:"RECEIVE_DOWNLOADABLE_BLOCKS",downloadableBlocks:e,filterValue:t}}function T(e){return{type:"SET_INSTALL_BLOCKS_PERMISSION",hasPermission:e}}function I(e,t,n){return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e.assets.length){r.next=3;break}throw new Error("Block has no assets");case 3:return r.next=5,E(e.assets);case 5:if(!Object(O.getBlockTypes)().length){r.next=10;break}t(e),r.next=11;break;case 10:throw new Error("Unable to get block types");case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,n(r.t0);case 17:case"end":return r.stop()}}),B,null,[[0,13]])}function L(e,t,n){var r,o,c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,o=e.name,a.prev=1,a.next=4,y({path:"__experimental/block-directory/install",data:{slug:r},method:"POST"});case 4:if(!1!==(c=a.sent).success){a.next=7;break}throw new Error(c.errorMessage);case 7:return a.next=9,A({id:r,name:o});case 9:t(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n(a.t0);case 15:case"end":return a.stop()}}),x,null,[[1,12]])}function D(e,t,n){var r,o,c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,o=e.name,a.prev=1,a.next=4,y({path:"__experimental/block-directory/uninstall",data:{slug:r},method:"DELETE"});case 4:if(!1!==(c=a.sent).success){a.next=7;break}throw new Error(c.errorMessage);case 7:return a.next=9,P({id:r,name:o});case 9:t(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n(a.t0);case 15:case"end":return a.stop()}}),S,null,[[1,12]])}function A(e){return{type:"ADD_INSTALLED_BLOCK_TYPE",item:e}}function P(e){return{type:"REMOVE_INSTALLED_BLOCK_TYPE",item:e}}var R={reducer:s,selectors:r,actions:o,controls:g,resolvers:{getDownloadableBlocks:k.a.mark((function e(t){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,{type:"FETCH_DOWNLOADABLE_BLOCKS"};case 5:return e.next=7,y({path:"__experimental/block-directory/search?term=".concat(t)});case 7:return n=e.sent,r=n.map((function(e){return Object(u.mapKeys)(e,(function(e,t){return Object(u.camelCase)(t)}))})),e.next=11,C(r,t);case 11:e.next=18;break;case 13:if(e.prev=13,e.t0=e.catch(2),"rest_user_cannot_view"!==e.t0.code){e.next=18;break}return e.next=18,T(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})),hasInstallBlocksPermission:k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({path:"__experimental/block-directory/search?term="});case 3:return e.next=5,T(!0);case 5:e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),"rest_user_cannot_view"!==e.t0.code){e.next=12;break}return e.next=12,T(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))}},M=(Object(c.registerStore)("core/block-directory",R),n(0)),K=n(49),H=n(22),F=n(5),V=n(8),q=n(1),W=n(3);var z=function(e){var t=e.rating,n=.5*Math.round(t/.5),r=Math.floor(t),o=Math.ceil(t-r),c=5-(r+o);return Object(M.createElement)("div",{"aria-label":Object(q.sprintf)(Object(q.__)("%s out of 5 stars"),n)},Object(u.times)(r,(function(e){return Object(M.createElement)(W.Icon,{key:"full_stars_".concat(e),icon:"star-filled",size:16})})),Object(u.times)(o,(function(e){return Object(M.createElement)(W.Icon,{key:"half_stars_".concat(e),icon:"star-half",size:16})})),Object(u.times)(c,(function(e){return Object(M.createElement)(W.Icon,{key:"empty_stars_".concat(e),icon:"star-empty",size:16})})))},U=function(e){var t=e.rating,n=e.ratingCount;return Object(M.createElement)("div",{className:"block-directory-block-ratings"},Object(M.createElement)(z,{rating:t}),Object(M.createElement)("span",{className:"block-directory-block-ratings__rating-count","aria-label":Object(q.sprintf)(Object(q._n)("%d total rating","%d total ratings",n),n)},"(",n,")"))};var Y=function(e){var t=e.icon,n=e.title,r=e.rating,o=e.ratingCount,c=e.onClick;return Object(M.createElement)("div",{className:"block-directory-downloadable-block-header__row"},null!==t.match(/\.(jpeg|jpg|gif|png)(?:\?.*)?$/)?Object(M.createElement)("img",{src:t,alt:Object(q.sprintf)(Object(q.__)("%s block icon"),n)}):Object(M.createElement)("span",null,Object(M.createElement)(F.BlockIcon,{icon:t,showColors:!0})),Object(M.createElement)("div",{className:"block-directory-downloadable-block-header__column"},Object(M.createElement)("span",{role:"heading",className:"block-directory-downloadable-block-header__title"},n),Object(M.createElement)(U,{rating:r,ratingCount:o})),Object(M.createElement)(W.Button,{isDefault:!0,onClick:function(e){e.preventDefault(),c()}},Object(q.__)("Add")))};var $=function(e){var t=e.author,n=e.authorBlockCount,r=e.authorBlockRating;return Object(M.createElement)(M.Fragment,null,Object(M.createElement)("span",{className:"block-directory-downloadable-block-author-info__content-author"},Object(q.sprintf)(Object(q.__)("Authored by %s"),t)),Object(M.createElement)("span",{className:"block-directory-downloadable-block-author-info__content"},Object(q.sprintf)(Object(q._n)("This author has %d block, with an average rating of %d.","This author has %d blocks, with an average rating of %d.",n),n,r)))};var G=function(e){var t=e.description,n=e.activeInstalls,r=e.humanizedUpdated;return Object(M.createElement)(M.Fragment,null,Object(M.createElement)("p",{className:"block-directory-downloadable-block-info__content"},t),Object(M.createElement)("div",{className:"block-directory-downloadable-block-info__row"},Object(M.createElement)("div",{className:"block-directory-downloadable-block-info__column"},Object(M.createElement)(W.Icon,{icon:"chart-line"}),Object(q.sprintf)(Object(q._n)("%d active installation","%d active installations",n),n)),Object(M.createElement)("div",{className:"block-directory-downloadable-block-info__column"},Object(M.createElement)(W.Icon,{icon:"update"}),Object(M.createElement)("span",{"aria-label":Object(q.sprintf)(Object(q.__)("Updated %s"),r)},r))))};var J=function(e){var t=e.item,n=e.onClick,r=t.icon,o=t.title,c=t.description,a=t.rating,l=t.activeInstalls,i=t.ratingCount,s=t.author,u=t.humanizedUpdated,b=t.authorBlockCount,d=t.authorBlockRating;return Object(M.createElement)("li",{className:"block-directory-downloadable-block-list-item"},Object(M.createElement)("article",{className:"block-directory-downloadable-block-list-item__panel"},Object(M.createElement)("header",{className:"block-directory-downloadable-block-list-item__header"},Object(M.createElement)(Y,{icon:r,onClick:n,title:o,rating:a,ratingCount:i})),Object(M.createElement)("section",{className:"block-directory-downloadable-block-list-item__body"},Object(M.createElement)(G,{activeInstalls:l,description:c,humanizedUpdated:u})),Object(M.createElement)("footer",{className:"block-directory-downloadable-block-list-item__footer"},Object(M.createElement)($,{author:s,authorBlockCount:b,authorBlockRating:d}))))};var Q=Object(V.compose)(Object(c.withDispatch)((function(e,t){var n=e("core/block-directory"),r=n.installBlock,o=n.downloadBlock,c=e("core/notices"),a=c.createErrorNotice,l=c.removeNotice,i=e("core/block-editor").removeBlocks,s=t.onSelect;return{downloadAndInstallBlock:function(e){var t=function(){var t=s(e);r(e,u.noop,(function n(){a(Object(q.__)("Block previews can't install."),{id:"block-install-error",actions:[{label:Object(q.__)("Retry"),onClick:function(){l("block-install-error"),r(e,u.noop,n)}},{label:Object(q.__)("Remove"),onClick:function(){l("block-install-error"),i(t.clientId),Object(O.unregisterBlockType)(e.name)}}]})}))};o(e,t,(function n(){a(Object(q.__)("Block previews can’t load."),{id:"block-download-error",actions:[{label:Object(q.__)("Retry"),onClick:function(){l("block-download-error"),o(e,t,n)}}]})}))}}})))((function(e){var t=e.items,n=e.onHover,r=void 0===n?u.noop:n,o=e.children,c=e.downloadAndInstallBlock;return(Object(M.createElement)("ul",{role:"list",className:"block-directory-downloadable-blocks-list"},t&&t.map((function(e){return Object(M.createElement)(J,{key:e.id,className:Object(O.getBlockMenuDefaultClassName)(e.id),icons:e.icons,onClick:function(){c(e),r(null)},onFocus:function(){return r(e)},onMouseEnter:function(){return r(e)},onMouseLeave:function(){return r(null)},onBlur:function(){return r(null)},item:e})})),o))}));var X=Object(V.compose)([W.withSpokenMessages,Object(c.withSelect)((function(e,t){var n=t.filterValue,r=e("core/block-directory"),o=r.getDownloadableBlocks,c=r.hasInstallBlocksPermission,a=r.isRequestingDownloadableBlocks,l=c();return{downloadableItems:l?o(n):[],hasPermission:l,isLoading:a()}}))])((function(e){var t=e.downloadableItems,n=e.onSelect,r=e.onHover,o=e.hasPermission,c=e.isLoading,a=e.isWaiting,l=e.debouncedSpeak;return o?c||a?Object(M.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(M.createElement)(W.Spinner,null)):t.length?(l(Object(q.sprintf)(Object(q._n)("No blocks found in your library. We did find %d block available for download.","No blocks found in your library. We did find %d blocks available for download.",t.length),t.length)),Object(M.createElement)(M.Fragment,null,Object(M.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description"},Object(q.__)("No blocks found in your library. These blocks can be downloaded and installed:")),Object(M.createElement)(Q,{items:t,onSelect:n,onHover:r}))):Object(M.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(q.__)("No blocks found in your library.")):(l(Object(q.__)("No blocks found in your library. Please contact your site administrator to install new blocks.")),Object(M.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(q.__)("No blocks found in your library."),Object(M.createElement)("br",null),Object(q.__)("Please contact your site administrator to install new blocks.")))}));var Z=function(){var e=Object(M.useState)(""),t=Object(H.a)(e,2),n=t[0],r=t[1],o=Object(u.debounce)(r,400);return Object(M.createElement)(F.__experimentalInserterMenuExtension,null,(function(e){var t=e.onSelect,r=e.onHover,c=e.filterValue;return e.hasItems||!c?null:(n!==c&&o(c),Object(M.createElement)(X,{onSelect:t,onHover:r,filterValue:n,isWaiting:c!==n}))}))};Object(K.registerPlugin)("block-directory",{render:function(){return Object(M.createElement)(Z,null)}})},32:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},34:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},35:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},37:function(e,t){!function(){e.exports=this.wp.apiFetch}()},4:function(e,t){!function(){e.exports=this.wp.data}()},49:function(e,t){!function(){e.exports=this.wp.plugins}()},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(9);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){Object(r.a)(e,t,n[t])}))}return e}},8:function(e,t){!function(){e.exports=this.wp.compose}()},9:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}});