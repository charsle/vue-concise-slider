!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define("vue-concise-slider",[],i):"object"==typeof exports?exports["vue-concise-slider"]=i():t["vue-concise-slider"]=i()}(this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var s=e[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var e={};return i.m=t,i.c=e,i.p="",i(0)}([function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),r=n(s);i.default=r.default},,,,function(t,i){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],i=0;i<this.length;i++){var e=this[i];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(i,e){"string"==typeof i&&(i=[[null,i,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<i.length;s++){var a=i[s];"number"==typeof a[0]&&n[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(t,i,e){function n(t,i){for(var e=0;e<t.length;e++){var n=t[e],s=u[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(l(n.parts[r],i))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(l(n.parts[r],i));u[n.id]={id:n.id,refs:1,parts:a}}}}function s(t){for(var i=[],e={},n=0;n<t.length;n++){var s=t[n],r=s[0],a=s[1],o=s[2],l=s[3],d={css:a,media:o,sourceMap:l};e[r]?e[r].parts.push(d):i.push(e[r]={id:r,parts:[d]})}return i}function r(t,i){var e=f(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(i,n.nextSibling):e.appendChild(i):e.insertBefore(i,e.firstChild),m.push(i);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(i)}}function a(t){t.parentNode.removeChild(t);var i=m.indexOf(t);i>=0&&m.splice(i,1)}function o(t){var i=document.createElement("style");return i.type="text/css",r(t,i),i}function l(t,i){var e,n,s;if(i.singleton){var r=v++;e=g||(g=o(i)),n=d.bind(null,e,r,!1),s=d.bind(null,e,r,!0)}else e=o(i),n=c.bind(null,e),s=function(){a(e)};return n(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;n(t=i)}else s()}}function d(t,i,e,n){var s=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(i,s);else{var r=document.createTextNode(s),a=t.childNodes;a[i]&&t.removeChild(a[i]),a.length?t.insertBefore(r,a[i]):t.appendChild(r)}}function c(t,i){var e=i.css,n=i.media,s=i.sourceMap;if(n&&t.setAttribute("media",n),s&&(e+="\n/*# sourceURL="+s.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var u={},h=function(t){var i;return function(){return"undefined"==typeof i&&(i=t.apply(this,arguments)),i}},p=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,m=[];t.exports=function(t,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=p()),"undefined"==typeof i.insertAt&&(i.insertAt="bottom");var e=s(t);return n(e,i),function(t){for(var r=[],a=0;a<e.length;a++){var o=e[a],l=u[o.id];l.refs--,r.push(l)}if(t){var d=s(t);n(d,i)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var b=function(){var t=[];return function(i,e){return t[i]=e,t.filter(Boolean).join("\n")}}()},,function(t,i,e){var n,s,r={};e(8),n=e(10),s=e(12),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(r).forEach(function(t){var i=r[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(9);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".slider-container{margin:0 auto;overflow:hidden;z-index:1;height:400px;margin:20px auto;width:70%;position:relative;white-space:nowrap}.slider-center-center{margin:auto;z-index:1;position:absolute;top:0;left:0;right:0;bottom:0}.slider-wrapper{box-sizing:content-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%;z-index:1}.swiper-container-vertical>.slider-wrapper{-webkit-box-orient:vertical;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}.slider-item{-ms-flex-negative:0;flex-shrink:0;height:100%;position:relative;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff none repeat scroll 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#fff;background-position:50%!important;background-size:cover!important}.slider-pagination{position:absolute;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.slider-pagination-bullets{bottom:10px;left:0;width:100%}.slider-pagination-bullet{background:#000 none repeat scroll 0 0;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px;cursor:pointer;margin:0 5px}.swiper-container-vertical>.slider-pagination-bullets{bottom:auto;left:auto;width:auto;right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical .slider-pagination-bullet{display:block;margin:5px 0}.slider-pagination-bullet-active{background:#fff none repeat scroll 0 0;opacity:1}.slider-button-next,.slider-button-prev{background-position:50%;background-repeat:no-repeat;background-size:27px 44px;cursor:pointer;height:44px;margin-top:-22px;position:absolute;top:50%;width:27px;z-index:10}.slider-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\");left:10px;right:auto}.slider-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\");left:auto;right:10px}@media screen and (max-width:414px){.slider-container{height:200px;margin:20px auto;width:90%}}",""])},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(11),r=n(s);i.default={props:["sliderinit","pages"],data:function(){return{basicdata:{poswidth:"0",posheight:"0",start:{},end:{},tracking:!1,animation:!1,containerClass:{"swiper-container-vertical":!1},setIntervalid:"",prefixes:(0,r.default)(),transitionEnding:!1}}},computed:{styleobj:function(){var t={};return t.transform="translate3D("+this.basicdata.poswidth+","+this.basicdata.posheight+",0)",t[this.basicdata.prefixes.transition+"TimingFunction"]="ease",t[this.basicdata.prefixes.transition+"Duration"]=(this.basicdata.animation?this.sliderinit.slideSpeed||300:0)+"ms",t},pagenums:function(){return this.pages.length},currentWidth:{get:function(){var t=void 0,i=this.sliderinit.currentPage;this.sliderinit.loop&&(i=this.sliderinit.infinite?this.sliderinit.currentPage+(this.sliderinit.infinite<=this.pages.length?this.sliderinit.infinite:this.pages.length):this.sliderinit.currentPage+1);for(var e in this.$el.children)/slider-wrapper/gi.test(this.$el.children[e].className)&&(t=this.$el.children[e]);var n=t.children;if(!n.length)return 0;var s=n[i].offsetLeft;return this.sliderinit.loop&&(s=n[i].offsetLeft),s},set:function(t){return t}},currentHeight:function(){var t=0,i=void 0,e=this.sliderinit.currentPage-1;this.sliderinit.loop&&(e=this.sliderinit.infinite?this.sliderinit.currentPage+(this.sliderinit.infinite<=this.pages.length?this.sliderinit.infinite:this.pages.length)-1:this.sliderinit.currentPage+1);for(var n in this.$el.children)/slider-wrapper/gi.test(this.$el.children[n].className)&&(i=this.$el.children[n]);var s=i.children;for(var r in s)r<=e&&(t+=s[r].offsetHeight,t+=parseInt(s[r].style.marginTop||0),t+=parseInt(s[r].style.marginBottom||0));return t}},mounted:function(){var t=this,i=this;i.slide(this.sliderinit.currentPage,"animationnone"),i.$on("slideTo",function(i){t.slide(i)}),i.$on("slideNext",function(){t.next()}),i.$on("slidePre",function(){t.pre()}),i.clock().begin(i),"vertical"===this.sliderinit.direction&&(this.basicdata.containerClass["swiper-container-vertical"]=!0)},methods:{swipeStart:function(t){var i=this;if(!this.basicdata.transitionEnding){if(this.basicdata.animation=!1,this.sliderinit.autoplay){var e=this;this.clock().stop(e)}if(document.addEventListener("touchmove",i.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return void(this.basicdata.tracking=!1);this.basicdata.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY}else this.basicdata.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY}},swipeMove:function(t){if(this.basicdata.tracking){if("touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),"vertical"===this.sliderinit.direction)return void(this.basicdata.posheight=-this.currentHeight+this.basicdata.end.y-this.basicdata.start.y+"px");this.basicdata.poswidth=-this.currentWidth+this.basicdata.end.x-this.basicdata.start.x+"px"}},swipeEnd:function(t){this.basicdata.tracking=!1;var i=(new Date).getTime(),e=i-this.basicdata.start.t,n=this.basicdata.end.x-this.basicdata.start.x,s=this.basicdata.end.y-this.basicdata.start.y;if(this.sliderinit.autoplay){var r=this;setTimeout(function(){r.clock().begin(r)},this.sliderinit.autoplay)}if(document.removeEventListener("touchmove",this.preventDefault(t)),e>this.sliderinit.thresholdTime)return void this.slide(this.sliderinit.currentPage);if("vertical"!==this.sliderinit.direction){if(n>this.sliderinit.thresholdDistance&&Math.abs(s)<this.sliderinit.thresholdDistance)return void this.pre();if(-n>this.sliderinit.thresholdDistance&&Math.abs(s)<this.sliderinit.thresholdDistance)return void this.next();if(!(e<300&&Math.abs(n)<10&&Math.abs(s)<10))return void this.slide(this.sliderinit.currentPage);this.$emit("tap",this.sliderinit.currentPage),this.slide(this.basicdata.currentPage)}else{if(s>this.sliderinit.thresholdDistance&&Math.abs(n)<this.sliderinit.thresholdDistance)return void this.pre();if(-s>this.sliderinit.thresholdDistance&&Math.abs(n)<this.sliderinit.thresholdDistance)return void this.next();if(!(e<300&&Math.abs(n)<10&&Math.abs(s)<10))return void this.slide(this.sliderinit.currentPage);this.$emit("tap",this.sliderinit.currentPage),this.slide(this.basicdata.currentPage)}},pre:function(){this.sliderinit.currentPage>=1?(this.sliderinit.currentPage-=this.sliderinit.slidesToScroll||1,this.slide()):this.sliderinit.loop&&0===this.sliderinit.currentPage?(this.sliderinit.currentPage-=this.sliderinit.slidesToScroll||1,this.basicdata.transitionEnding=!0,this.slide()):this.slide()},next:function(){this.sliderinit.currentPage<this.pagenums-1?(this.sliderinit.currentPage+=this.sliderinit.slidesToScroll||1,this.slide()):this.sliderinit.loop&&this.sliderinit.currentPage===this.pagenums-1?(this.sliderinit.currentPage+=this.sliderinit.slidesToScroll||1,this.basicdata.transitionEnding=!0,this.slide()):this.slide()},slide:function(t,i){var e=this;e.basicdata.animation=!0,"animationnone"===i&&(e.basicdata.animation=!1),(t||0===t)&&(e.sliderinit.currentPage=t),"vertical"===e.sliderinit.direction?e.basicdata.posheight=-e.currentHeight+"px":e.basicdata.poswidth=-e.currentWidth+"px",e.sliderinit.currentPage<0||e.sliderinit.currentPage>=e.pagenums||e.$emit("slide",e.sliderinit.currentPage)},clock:function(){return{begin:function(t){if(t.sliderinit.autoplay){if(t.basicdata.setIntervalid)return;t.basicdata.setIntervalid=setInterval(function(){t.next(),t.sliderinit.currentPage!==t.pagenums-1||t.sliderinit.loop||(clearInterval(t.basicdata.setIntervalid),t.basicdata.setIntervalid=0)},t.sliderinit.autoplay)}},stop:function(t){clearInterval(t.basicdata.setIntervalid),t.basicdata.setIntervalid=0}}},preventDefault:function(t){t.preventDefault()},onTransitionEnd:function(){var t=this;setTimeout(function(){t.sliderinit.loop&&(t.basicdata.transitionEnding=!1,t.sliderinit.currentPage<0?t.slide(t.pagenums+t.sliderinit.currentPage,"animationnone"):t.sliderinit.currentPage>=t.pagenums&&t.slide(0+t.sliderinit.currentPage-t.pagenums,"animationnone"))},0)}}}},function(t,i){(function(t){"use strict";function e(){var i=void 0,e=void 0,n=void 0,s=void 0;return function(){var r=document.createElement("_"),a=r.style,o=void 0;""===a[o="webkitTransition"]&&(n="webkitTransitionEnd",e=o),""===a[o="transition"]&&(n="transitionend",e=o),""===a[o="webkitTransform"]&&(i=o),""===a[o="msTransform"]&&(i=o),""===a[o="transform"]&&(i=o),document.body.insertBefore(r,null),a[i]="translate3d(0, 0, 0)",s=!!t.getComputedStyle(r).getPropertyValue(i),document.body.removeChild(r)}(),{transform:i,transition:e,transitionEnd:n,hasTranslate3d:s}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=e}).call(i,function(){return this}())},function(t,i){t.exports=' <div class=slider-container :class=basicdata.containerClass> <div class=slider-wrapper :style=styleobj @touchmove=swipeMove @touchstart=swipeStart @touchend=swipeEnd @mousedown=swipeStart @mouseup=swipeEnd @mousemove=swipeMove @webkit-transition-end=onTransitionEnd @transitionend=onTransitionEnd> <template v-if=!sliderinit.loop> <template v-for="item in pages"> <div class=slider-item :style=item.style> {{item.title}} </div> </template> </template> <template v-if=sliderinit.loop> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <div v-if="index+sliderinit.infinite-pages.length>=0" class=slider-item :style=" item.style">{{item.title}}</div> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[pages.length-1].style>{{pages[pages.length-1].title}}</div> </template> <template v-for="item in pages"> <div class=slider-item :style=item.style>{{item.title}}</div> </template> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <div v-if="index-sliderinit.infinite<0" class=slider-item :style=" item.style">{{item.title}}</div> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[0].style>{{pages[0].title}}</div> </template> </template> </div> <div class="slider-pagination slider-pagination-bullets"> <template v-for="n in pagenums"> <span @click=slide(n-1) class=slider-pagination-bullet :class="n-1 === sliderinit.currentPage? \'slider-pagination-bullet-active\':\'\'"></span> </template> </div> </div> '}])});