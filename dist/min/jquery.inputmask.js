/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.30
*/
(function(b){if(void 0===b.fn.inputmask){var R=function(e){var d=document.createElement("input");e="on"+e;var b=e in d;b||(d.setAttribute(e,"return;"),b="function"==typeof d[e]);return b},G=function(e,d,g){return(e=g.aliases[e])?(e.alias&&G(e.alias,void 0,g),b.extend(!0,g,e),b.extend(!0,g,d),!0):!1},K=function(e){function d(b){function d(e,b,c,h){this.matches=[];this.isGroup=e||!1;this.isOptional=b||!1;this.isQuantifier=c||!1;this.isAlternator=h||!1;this.quantifier={min:1,max:1}}function g(d,b,c){var h=
e.definitions[b],l=0==d.matches.length;c=void 0!=c?c:d.matches.length;if(h&&!u){for(var m=h.prevalidator,t=m?m.length:0,k=1;k<h.cardinality;k++){var s=t>=k?m[k-1]:[],r=s.validator,s=s.cardinality;d.matches.splice(c++,0,{fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:s?s:1,optionality:d.isOptional,newBlockMarker:l,casing:h.casing,def:h.definitionSymbol||b})}d.matches.splice(c++,0,{fn:h.validator?"string"==typeof h.validator?RegExp(h.validator):new function(){this.test=
h.validator}:/./,cardinality:h.cardinality,optionality:d.isOptional,newBlockMarker:l,casing:h.casing,def:h.definitionSymbol||b})}else d.matches.splice(c++,0,{fn:null,cardinality:0,optionality:d.isOptional,newBlockMarker:l,casing:null,def:b}),u=!1}for(var k=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,u=!1,p=new d,c,l=[],h=[];c=k.exec(b);)switch(c=c[0],c.charAt(0)){case e.optionalmarker.end:case e.groupmarker.end:var t=l.pop();0<l.length?l[l.length-1].matches.push(t):p.matches.push(t);
break;case e.optionalmarker.start:l.push(new d(!1,!0));break;case e.groupmarker.start:l.push(new d(!0));break;case e.quantifiermarker.start:t=new d(!1,!1,!0);c=c.replace(/[{}]/g,"");var z=c.split(",");c=isNaN(z[0])?z[0]:parseInt(z[0]);z=1==z.length?c:isNaN(z[1])?z[1]:parseInt(z[1]);if("*"==z||"+"==z)c="*"==c?0:1,e.greedy=!1;t.quantifier={min:c,max:z};if(0<l.length){z=l[l.length-1].matches;c=z.pop();if(!c.isGroup){var w=new d(!0);w.matches.push(c);c=w}z.push(c);z.push(t)}else c=p.matches.pop(),c.isGroup||
(w=new d(!0),w.matches.push(c),c=w),p.matches.push(c),p.matches.push(t);break;case e.escapeChar:u=!0;break;case e.alternatormarker:break;default:0<l.length?g(l[l.length-1],c):(0<p.matches.length&&(t=p.matches[p.matches.length-1],t.isGroup&&(t.isGroup=!1,g(t,e.groupmarker.start,0),g(t,e.groupmarker.end))),g(p,c))}0<p.matches.length&&h.push(p);return h}function g(m,g){if(e.numericInput){m=m.split("").reverse();for(var k in m)m[k]==e.optionalmarker.start?m[k]=e.optionalmarker.end:m[k]==e.optionalmarker.end?
m[k]=e.optionalmarker.start:m[k]==e.groupmarker.start?m[k]=e.groupmarker.end:m[k]==e.groupmarker.end&&(m[k]=e.groupmarker.start);m=m.join("")}if(void 0!=m&&""!=m){if(0<e.repeat||"*"==e.repeat||"+"==e.repeat)m=e.groupmarker.start+m+e.groupmarker.end+e.quantifiermarker.start+("*"==e.repeat?0:"+"==e.repeat?1:e.repeat)+","+e.repeat+e.quantifiermarker.end;void 0==b.inputmask.masksCache[m]&&(b.inputmask.masksCache[m]={mask:m,maskToken:d(m),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:g});
return b.extend(!0,{},b.inputmask.masksCache[m])}}var k=[];b.isFunction(e.mask)&&(e.mask=e.mask.call(this,e));b.isArray(e.mask)?b.each(e.mask,function(e,d){void 0!=d.mask?k.push(g(d.mask.toString(),d)):k.push(g(d.toString()))}):(1==e.mask.length&&!1==e.greedy&&0!=e.repeat&&(e.placeholder=""),k=void 0!=e.mask.mask?g(e.mask.mask.toString(),e.mask):g(e.mask.toString()));return k},aa="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),
x=navigator.userAgent,ba=null!==x.match(/iphone/i),ca=null!==x.match(/android.*safari.*/i),da=null!==x.match(/android.*chrome.*/i),ea=null!==x.match(/android.*firefox.*/i),fa=/Kindle/i.test(x)||/Silk/i.test(x)||/KFTT/i.test(x)||/KFOT/i.test(x)||/KFJWA/i.test(x)||/KFJWI/i.test(x)||/KFSOWI/i.test(x)||/KFTHWA/i.test(x)||/KFTHWI/i.test(x)||/KFAPWA/i.test(x)||/KFAPWI/i.test(x),U=R("paste")?"paste":R("input")?"input":"propertychange",B=function(e,d,g){function k(a,f,v){f=f||0;var b=[],h,q=0,l;do{if(!0===
a&&e.validPositions[q]){var m=e.validPositions[q];l=m.match;h=m.locator.slice();b.push(null==l.fn?l.def:!0===v?m.input:d.placeholder.charAt(q%d.placeholder.length))}else h=f>q?c(q,h,q-1)[0]:T(q,h,q-1),l=h.match,h=h.locator.slice(),b.push(null==l.fn?l.def:d.placeholder.charAt(q%d.placeholder.length));q++}while((void 0==I||q-1<I)&&null!=l.fn||null==l.fn&&""!=l.def||f>=q);b.pop();return b}function m(a){var f=e;f.buffer=void 0;f.tests={};!0!==a&&(f._buffer=void 0,f.validPositions={},f.p=-1)}function r(a){var f=
e,v=-1,c=f.validPositions;if(b.isFunction(d.getLastValidPosition))v=d.getLastValidPosition.call(n,f,a,d);else{void 0==a&&(a=-1);var f=v,h;for(h in c){var q=parseInt(h);if(-1==a||null!=c[q].match.fn)q<a&&(f=q),q>=a&&(v=q)}v=1<a-f||v<a?f:v}return v}function s(a,f,v){if(d.insertMode&&void 0!=e.validPositions[a]&&void 0==v){v=b.extend(!0,{},e.validPositions);var c=r(),h;for(h=a;h<=c;h++)delete e.validPositions[h];e.validPositions[a]=f;f=!0;for(h=a;h<=c;h++){a=v[h];if(void 0!=a){var q=null==a.match.fn?
h+1:D(h);f=p(q,a.match.def)?f&&!1!==w(q,a.input,!0,!0):!1}if(!f)break}if(!f)return e.validPositions=b.extend(!0,{},v),!1}else e.validPositions[a]=f;return!0}function T(a,f,e){a=c(a,f,e);var b,h;for(h in a)if(b=a[h],d.greedy||b.match&&(!1===b.match.optionality||!1===b.match.newBlockMarker)&&!0!==b.match.optionalQuantifier)break;return b}function u(a){return e.validPositions[a]?e.validPositions[a].match:c(a)[0].match}function p(a,f){var e=!1,b=c(a),d;for(d in b)if(b[d].match&&b[d].match.def==f){e=!0;
break}return e}function c(a,f,b){function d(f,e,b,v){function h(b,v,k){if(c==a&&void 0==b.matches)return l.push({match:b,locator:v.reverse()}),!0;if(void 0!=b.matches)if(b.isGroup&&!0!==k){if(b=h(f.matches[g+1],v))return!0}else if(b.isOptional){var E=b;if(b=d(b,e,v,k))b=l[l.length-1].match,(b=0==E.matches.indexOf(b))&&(m=!0),c=a}else{if(!b.isAlternator)if(b.isQuantifier&&!0!==k)for(E=b,k=0<e.length&&!0!==k?e.shift():0;k<(isNaN(E.quantifier.max)?k+1:E.quantifier.max)&&c<=a;k++){var t=f.matches[f.matches.indexOf(E)-
1];if(b=h(t,[k].concat(v),!0))if(b=l[l.length-1].match,b.optionalQuantifier=k>E.quantifier.min-1,b=0==t.matches.indexOf(b))if(k>E.quantifier.min-1){m=!0;c=a;break}else return!0;else return!0}else if(b=d(b,e,v,k))return!0}else c++}for(var g=0<e.length?e.shift():0;g<f.matches.length;g++)if(!0!==f.matches[g].isQuantifier){var k=h(f.matches[g],[g].concat(b),v);if(k&&c==a)return k;if(c>a)break}}var h=e.maskToken,c=f?b:0;b=f||[0];var l=[],m=!1;if(void 0==f){f=a-1;for(var g;void 0==(g=e.validPositions[f])&&
-1<f;)f--;if(void 0!=g&&-1<f)c=f,b=g.locator.slice();else{for(f=a-1;void 0==(g=e.tests[f])&&-1<f;)f--;void 0!=g&&-1<f&&(c=f,b=g[0].locator.slice())}}for(f=b.shift();f<h.length&&!(d(h[f],b,[f])&&c==a||c>a);f++);(0==l.length||m)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return e.tests[a]=l}function l(){void 0==e._buffer&&(e._buffer=k(!1,1));return e._buffer}function h(){void 0==e.buffer&&(e.buffer=k(!0,r(),!0));return e.buffer}function t(a,f){for(var b=h().slice(),
e=a;e<f;e++)b[e]!=O(e)&&b[e]!=d.skipOptionalPartCharacter&&w(e,b[e],!0,!0)}function z(a,f){switch(f.casing){case "upper":a=a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function w(a,f,v,l){function g(a,f,v,q){var l=!1;b.each(c(a),function(k,g){for(var H=g.match,E=f?1:0,C="",n=h(),w=H.cardinality;w>E;w--)C+=void 0==e.validPositions[a-(w-1)]?O(a-(w-1)):e.validPositions[a-(w-1)].input;f&&(C+=f);l=null!=H.fn?H.fn.test(C,n,a,v,d):f!=H.def&&f!=d.skipOptionalPartCharacter||""==H.def?!1:{c:H.def,
pos:a};if(!1!==l){E=void 0!=l.c?l.c:f;E=E==d.skipOptionalPartCharacter&&null===H.fn?H.def:E;C=a;if(l.refreshFromBuffer){C=l.refreshFromBuffer;v=!0;!0===C?(e.validPositions={},e.tests={},t(0,h().length)):t(C.start,C.end);if(void 0==l.pos&&void 0==l.c)return l.pos=r(),!1;C=void 0!=l.pos?l.pos:a;g=c(C)[0]}else!0!==l&&l.pos!=a&&(C=l.pos,t(a,C),g=c(C)[0]);0<k&&m(!0);s(C,b.extend({},g,{input:z(E,H)}),q)||(l=!1);return!1}});return l}v=!0===v;var q=g(a,f,v,l);if(!v&&!1===q){var k=e.validPositions[a];if(k&&
null==k.match.fn&&(k.match.def==f||f==d.skipOptionalPartCharacter))q={caret:D(a)};else if((d.insertMode||void 0==e.validPositions[D(a)])&&!x(a))for(var k=a+1,n=D(a);k<=n;k++)if(q=g(k,f,v,l),!1!==q){a=k;break}}!0===q&&(q={pos:a});return q}function x(a){a=u(a);return null!=a.fn?a.fn:!1}function B(){var a;I=n.prop("maxLength");-1==I&&(I=void 0);if(!1==d.greedy){var f;f=r();a=e.validPositions[f];var b=void 0!=a?a.locator.slice():void 0;for(f+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;f++)a=
T(f,b,f-1),b=a.locator.slice();a=f}else a=h().length;return void 0==I||a<I?a:I}function D(a){var f=B();if(a>=f)return f;for(;++a<f&&!x(a)&&(!0!==d.nojumps||d.nojumpsThreshold>a););return a}function S(a){if(0>=a)return 0;for(;0<--a&&!x(a););return a}function F(a,f,b){a._valueSet(f.join(""));void 0!=b&&y(a,b)}function O(a,f){f=f||u(a);return null==f.fn?f.def:d.placeholder.charAt(a%d.placeholder.length)}function N(a,f,d,c,g){c=void 0!=c?c.slice():K(a._valueGet()).split("");m();f&&a._valueSet("");b.each(c,
function(f,c){if(!0===g){var h=e.p,h=-1==h?h:S(h),k=-1==h?f:D(h);-1==b.inArray(c,l().slice(h+1,k))&&V.call(a,void 0,!0,c.charCodeAt(0),!1,d,f)}else V.call(a,void 0,!0,c.charCodeAt(0),!1,d,f),d=d||0<f&&f>e.p});f&&F(a,h(),D(r(0)))}function G(a){return b.inputmask.escapeRegex.call(this,a)}function K(a){return a.replace(RegExp("("+G(l().join(""))+")*$"),"")}function M(a){var f=h().slice(),b,d=r(),c={},l=e.validPositions[d].locator.slice(),g;for(b=d+1;b<f.length;b++)g=T(b,l,b-1),l=g.locator.slice(),c[b]=
g;for(b=f.length-1;b>d;b--)if(g=c[b].match,g.optionality&&f[b]==O(b,g))f.pop();else break;F(a,f)}function R(a,f){if(!a.data("_inputmask")||!0!==f&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var c=[],l=e.validPositions,g;for(g in l)l[g].match&&null!=l[g].match.fn&&c.push(l[g].input);c=(A?c.reverse():c).join("");l=(A?h().reverse():h()).join("");return b.isFunction(d.onUnMask)?d.onUnMask.call(a,l,c,d):c}function L(a){!A||"number"!=typeof a||d.greedy&&""==d.placeholder||(a=h().length-a);return a}
function y(a,f,e){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof f){f=L(f);e=L(e);e="number"==typeof e?e:f;var c=b(a).data("_inputmask")||{};c.caret={begin:f,end:e};b(a).data("_inputmask",c);b(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==d.insertMode&&f==e&&e++,a.setSelectionRange?(a.selectionStart=f,a.selectionEnd=e):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",f),a.select()))}else return c=b(a).data("_inputmask"),!b(a).is(":visible")&&
c&&void 0!=c.caret?(f=c.caret.begin,e=c.caret.end):a.setSelectionRange?(f=a.selectionStart,e=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),f=0-a.duplicate().moveStart("character",-1E5),e=f+a.text.length),f=L(f),e=L(e),{begin:f,end:e}}function P(a){if(b.isFunction(d.isComplete))return d.isComplete.call(n,a,d);if("*"!=d.repeat){var f=!1,e=S(B());if(r()==e)for(var f=!0,c=0;c<=e;c++){var h=x(c);if(h&&(void 0==a[c]||a[c]==O(c))||!h&&a[c]!=O(c)){f=
!1;break}}return f}}function ga(a){a=b._data(a).events;b.each(a,function(a,e){b.each(e,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var f=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return f.apply(this,arguments)}}})})}function ha(a){function f(a){if(void 0==b.valHooks[a]||!0!=b.valHooks[a].inputmaskpatch){var e=b.valHooks[a]&&b.valHooks[a].get?b.valHooks[a].get:function(a){return a.value},f=b.valHooks[a]&&b.valHooks[a].set?b.valHooks[a].set:
function(a,b){a.value=b;return a};b.valHooks[a]={get:function(a){var f=b(a);if(f.data("_inputmask")){if(f.data("_inputmask").opts.autoUnmask)return f.inputmask("unmaskedvalue");a=e(a);f=(f=f.data("_inputmask").maskset._buffer)?f.join(""):"";return a!=f?a:""}return e(a)},set:function(a,e){var c=b(a),d=f(a,e);c.data("_inputmask")&&c.triggerHandler("setvalue.inputmask");return d},inputmaskpatch:!0}}}var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(a,"value"));if(e&&e.get){if(!a._valueGet){var c=
e.get,d=e.set;a._valueGet=function(){return A?c.call(this).split("").reverse().join(""):c.call(this)};a._valueSet=function(a){d.call(this,A?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=b(this),f=b(this).data("_inputmask");return f?f.opts.autoUnmask?a.inputmask("unmaskedvalue"):c.call(this)!=l().join("")?c.call(this):"":c.call(this)},set:function(a){d.call(this,a);b(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?
a._valueGet||(c=a.__lookupGetter__("value"),d=a.__lookupSetter__("value"),a._valueGet=function(){return A?c.call(this).split("").reverse().join(""):c.call(this)},a._valueSet=function(a){d.call(this,A?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=b(this),f=b(this).data("_inputmask");return f?f.opts.autoUnmask?a.inputmask("unmaskedvalue"):c.call(this)!=l().join("")?c.call(this):"":c.call(this)}),a.__defineSetter__("value",function(a){d.call(this,a);b(this).triggerHandler("setvalue.inputmask")})):
(a._valueGet||(a._valueGet=function(){return A?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=A?a.split("").reverse().join(""):a}),f(a.type))}function X(a,f,b){if(d.numericInput||A){switch(f){case d.keyCode.BACKSPACE:f=d.keyCode.DELETE;break;case d.keyCode.DELETE:f=d.keyCode.BACKSPACE}A&&(a=b.end,b.end=b.begin,b.begin=a)}b.begin==b.end?f==d.keyCode.BACKSPACE?b.begin=S(b.begin):f==d.keyCode.DELETE&&b.end++:1!=b.end-b.begin||d.insertMode||f==d.keyCode.BACKSPACE&&
b.begin--;a=b.begin;var c=b.end;for(f=a;a<c;a++)delete e.validPositions[a];for(a=c;a<=r();){var c=e.validPositions[a],h=e.validPositions[f];void 0!=c&&void 0==h?(p(f,c.match.def)&&!1!==w(f,c.input,!0)&&(delete e.validPositions[a],a++),f++):a++}for(f=r();0<f&&(void 0==e.validPositions[f]||null==e.validPositions[f].match.fn);)delete e.validPositions[f],f--;m(!0);f=D(-1);r()<f?e.p=f:e.p=b.begin}function Y(a){W=!1;var f=this,c=b(f),g=a.keyCode,k=y(f);g==d.keyCode.BACKSPACE||g==d.keyCode.DELETE||ba&&127==
g||a.ctrlKey&&88==g?(a.preventDefault(),88==g&&(J=h().join("")),X(f,g,k),F(f,h(),e.p),f._valueGet()==l().join("")&&c.trigger("cleared"),d.showTooltip&&c.prop("title",e.mask)):g==d.keyCode.END||g==d.keyCode.PAGE_DOWN?setTimeout(function(){var b=D(r());d.insertMode||b!=B()||a.shiftKey||b--;y(f,a.shiftKey?k.begin:b,b)},0):g==d.keyCode.HOME&&!a.shiftKey||g==d.keyCode.PAGE_UP?y(f,0,a.shiftKey?k.begin:0):g==d.keyCode.ESCAPE||90==g&&a.ctrlKey?(N(f,!0,!1,J.split("")),c.click()):g!=d.keyCode.INSERT||a.shiftKey||
a.ctrlKey?!1!=d.insertMode||a.shiftKey||(g==d.keyCode.RIGHT?setTimeout(function(){var a=y(f);y(f,a.begin)},0):g==d.keyCode.LEFT&&setTimeout(function(){var a=y(f);y(f,a.begin-1)},0)):(d.insertMode=!d.insertMode,y(f,d.insertMode||k.begin!=B()?k.begin:k.begin-1));var c=y(f),q=d.onKeyDown.call(this,a,h(),d);q&&!0===q.refreshFromBuffer&&(e.validPositions={},e.tests={},t(0,h().length),m(!0),F(f,h()),y(f,c.begin,c.end));Z=-1!=b.inArray(g,d.ignorables)}function V(a,f,c,l,g,k){if(void 0==c&&W)return!1;W=!0;
var t=b(this);a=a||window.event;c=f?c:a.which||a.charCode||a.keyCode;if(!(!0===f||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||Z))return!0;if(c){!0!==f&&46==c&&!1==a.shiftKey&&","==d.radixPoint&&(c=44);var n;c=String.fromCharCode(c);f?(k=g?k:r()+1,k={begin:k,end:k}):k=y(this);var z=A?1<k.begin-k.end||1==k.begin-k.end&&d.insertMode:1<k.end-k.begin||1==k.end-k.begin&&d.insertMode;z&&(e.undoPositions=b.extend(!0,{},e.validPositions),X(this,d.keyCode.DELETE,k),d.insertMode||(d.insertMode=!d.insertMode,
s(k.begin,g),d.insertMode=!d.insertMode),z=!d.multi);e.writeOutBuffer=!0;var p=k.begin,u=w(p,c,g);!1!==u&&(!0!==u&&(p=void 0!=u.pos?u.pos:p,c=void 0!=u.c?u.c:c),m(!0),void 0!=u.caret?n=u.caret:(g=e.validPositions,n=void 0!=g[p+1]&&T(k+1,g[p].locator.slice(),p).match.def!=g[p+1].match.def?p+1:D(p)),e.p=n);if(!1!==l){var x=this;setTimeout(function(){d.onKeyValidation.call(x,u,d)},0);if(e.writeOutBuffer&&!1!==u){var B=h();F(this,B,f?void 0:d.numericInput?S(n):n);!0!==f&&setTimeout(function(){!0===P(B)&&
t.trigger("complete");Q=!0;t.trigger("input")},0)}else z&&(e.buffer=void 0,e.validPositions=e.undoPositions)}else z&&(e.buffer=void 0,e.validPositions=e.undoPositions);d.showTooltip&&t.prop("title",e.mask);a&&!0!=f&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}}function ia(a){var f=b(this),c=a.keyCode,g=h();(a=d.onKeyUp.call(this,a,g,d))&&!0===a.refreshFromBuffer&&(e.validPositions={},e.tests={},t(0,h().length),m(!0),F(this,h()));c==d.keyCode.TAB&&d.showMaskOnFocus&&(f.hasClass("focus.inputmask")&&
0==this._valueGet().length?(m(),g=h(),F(this,g),y(this,0),J=h().join("")):(F(this,g),y(this,L(0),L(B()))))}function $(a){if(!0===Q&&"input"==a.type)return Q=!1,!0;var f=this,c=b(f);if("propertychange"==a.type&&f._valueGet().length<=B())return!0;setTimeout(function(){var a=b.isFunction(d.onBeforePaste)?d.onBeforePaste.call(f,f._valueGet(),d):f._valueGet();N(f,!0,!1,a.split(""),!0);!0===P(h())&&c.trigger("complete");c.click()},0)}function ja(a){if(!0===Q&&"input"==a.type)return Q=!1,!0;var b=y(this),
c=this._valueGet(),c=c.replace(RegExp("("+G(l().join(""))+")*"),"");b.begin>c.length&&(y(this,c.length),b=y(this));1!=h().length-c.length||c.charAt(b.begin)==h()[b.begin]||c.charAt(b.begin+1)==h()[b.begin]||x(b.begin)||(a.keyCode=d.keyCode.BACKSPACE,Y.call(this,a));a.preventDefault()}function ka(a){n=b(a);if(n.is(":input")){n.data("_inputmask",{maskset:e,opts:d,isRTL:!1});d.showTooltip&&n.prop("title",e.mask);ha(a);("rtl"==a.dir||d.rightAlign)&&n.css("text-align","right");if("rtl"==a.dir||d.numericInput){a.dir=
"ltr";n.removeAttr("dir");var c=n.data("_inputmask");c.isRTL=!0;n.data("_inputmask",c);A=!0}n.unbind(".inputmask");n.removeClass("focus.inputmask");n.closest("form").bind("submit",function(){J!=h().join("")&&n.change()}).bind("reset",function(){setTimeout(function(){n.trigger("setvalue")},0)});n.bind("mouseenter.inputmask",function(){!b(this).hasClass("focus.inputmask")&&d.showMaskOnHover&&this._valueGet()!=h().join("")&&F(this,h())}).bind("blur.inputmask",function(){var a=b(this);if(a.data("_inputmask")){var c=
this._valueGet(),e=h();a.removeClass("focus.inputmask");J!=h().join("")&&a.change();d.clearMaskOnLostFocus&&""!=c&&(c==l().join("")?this._valueSet(""):M(this));!1===P(e)&&(a.trigger("incomplete"),d.clearIncomplete&&(m(),d.clearMaskOnLostFocus?this._valueSet(""):(e=l().slice(),F(this,e))))}}).bind("focus.inputmask",function(){var a=b(this),c=this._valueGet();d.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!d.showMaskOnHover||d.showMaskOnHover&&""==c)&&this._valueGet()!=h().join("")&&F(this,h(),
D(r()));a.addClass("focus.inputmask");J=h().join("")}).bind("mouseleave.inputmask",function(){var a=b(this);d.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==l().join("")||""==this._valueGet()?this._valueSet(""):M(this)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=y(a);h();if(b.begin==b.end){var b=A?L(b.begin):b.begin,c=r(b),c=D(c);b<c?x(b)?y(a,b):y(a,D(b)):y(a,c)}},0)}).bind("dblclick.inputmask",function(){var a=
this;setTimeout(function(){y(a,0,D(r()))},0)}).bind(U+".inputmask dragdrop.inputmask drop.inputmask",$).bind("setvalue.inputmask",function(){N(this,!0);J=h().join("");this._valueGet()==l().join("")&&this._valueSet("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared);n.bind("keydown.inputmask",Y).bind("keypress.inputmask",V).bind("keyup.inputmask",ia);if(ca||ea||da||fa)"input"==U&&n.unbind(U+".inputmask"),n.bind("input.inputmask",
ja);aa&&n.bind("input.inputmask",$);c=b.isFunction(d.onBeforeMask)?d.onBeforeMask.call(a,a._valueGet(),d):a._valueGet();N(a,!1,!1,c.split(""),!0);F(a,h());J=h().join("");var g;try{g=document.activeElement}catch(k){}g===a?(n.addClass("focus.inputmask"),y(a,D(r()))):d.clearMaskOnLostFocus?h().join("")==l().join("")?a._valueSet(""):M(a):F(a,h());ga(a)}}var A=!1,J=h().join(""),n,W=!1,Q=!1,Z=!1,I;if(void 0!=g)switch(g.action){case "isComplete":return n=b(g.el),P(g.buffer);case "unmaskedvalue":return n=
g.$input,A=g.$input.data("_inputmask").isRTL,R(g.$input,g.skipDatepickerCheck);case "mask":ka(g.el);break;case "format":return n=b({}),n.data("_inputmask",{maskset:e,opts:d,isRTL:d.numericInput}),d.numericInput&&(A=!0),g=g.value.split(""),N(n,!1,!1,A?g.reverse():g,!0),A?h().reverse().join(""):h().join("");case "isValid":return n=b({}),n.data("_inputmask",{maskset:e,opts:d,isRTL:d.numericInput}),d.numericInput&&(A=!0),g=g.value.split(""),N(n,!1,!0,A?g.reverse():g),P(h())}},M=function(e,d,g){function k(c,
d,h){c=c.jquery&&0<c.length?c[0]:c;if("number"==typeof d){d=m(d);h=m(h);h="number"==typeof h?h:d;if(c!=e){var k=b(c).data("_inputmask")||{};k.caret={begin:d,end:h};b(c).data("_inputmask",k)}b(c).is(":visible")&&(c.scrollLeft=c.scrollWidth,!1==g.insertMode&&d==h&&h++,c.setSelectionRange?(c.selectionStart=d,c.selectionEnd=h):c.createTextRange&&(c=c.createTextRange(),c.collapse(!0),c.moveEnd("character",h),c.moveStart("character",d),c.select()))}else return k=b(c).data("_inputmask"),!b(c).is(":visible")&&
k&&void 0!=k.caret?(d=k.caret.begin,h=k.caret.end):c.setSelectionRange?(d=c.selectionStart,h=c.selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),d=0-c.duplicate().moveStart("character",-1E5),h=d+c.text.length),d=m(d),h=m(h),{begin:d,end:h}}function m(b){!x||"number"!=typeof b||g.greedy&&""==g.placeholder||(b=e.value.length-b);return b}function r(c,d){if("multiMaskScope"!=c){if(b.isFunction(g.determineActiveMasksetIndex))u=g.determineActiveMasksetIndex.call(s,
c,d);else{var h=-1,m=-1,p=-1;b.each(d,function(c,e){var d=b(e).data("_inputmask").maskset,g=-1,l=0,s=k(e).begin,w;for(w in d.validPositions)d=parseInt(w),d>g&&(g=d),l++;if(l>h||l==h&&m>s&&p>g||l==h&&m==s&&p<g)h=l,m=s,u=c,p=g})}var w=s.data("_inputmask-multi")||{activeMasksetIndex:0,elmasks:d};w.activeMasksetIndex=u;s.data("_inputmask-multi",w)}-1==["focus"].indexOf(c)&&e.value!=d[u]._valueGet()&&(w=""==b(d[u]).val()?d[u]._valueGet():b(d[u]).val(),e.value=w);-1==["blur","focus"].indexOf(c)&&b(d[u]).hasClass("focus.inputmask")&&
(w=k(d[u]),k(e,w.begin,w.end))}g.multi=!0;var s=b(e),x="rtl"==e.dir||g.numericInput,u=0,p=b.map(d,function(c,e){var d='<input type="text" ';s.attr("value")&&(d+='value="'+s.attr("value")+'" ');s.attr("dir")&&(d+='dir="'+s.attr("dir")+'" ');d=b(d+"/>")[0];B(b.extend(!0,{},c),g,{action:"mask",el:d});return d});s.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:p});("rtl"==e.dir||g.rightAlign)&&s.css("text-align","right");e.dir="ltr";s.removeAttr("dir");""!=s.attr("value")&&r("init",p);s.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",
function(c){var d=k(e),h,t=!0;if("keydown"==c.type){h=c.keyCode;if(h==g.keyCode.DOWN&&u<p.length-1)return u++,r("multiMaskScope",p),!1;if(h==g.keyCode.UP&&0<u)return u--,r("multiMaskScope",p),!1;if(c.ctrlKey||c.shiftKey||c.altKey)return!0}else if("keypress"==c.type&&(c.ctrlKey||c.shiftKey||c.altKey))return!0;b.each(p,function(e,s){if("keydown"==c.type){h=c.keyCode;if(h==g.keyCode.BACKSPACE&&s._valueGet().length<d.begin)return;if(h==g.keyCode.TAB)t=!1;else{if(h==g.keyCode.RIGHT){k(s,d.begin+1,d.end+
1);t=!1;return}if(h==g.keyCode.LEFT){k(s,d.begin-1,d.end-1);t=!1;return}}}if(-1!=["click"].indexOf(c.type)&&(k(s,m(d.begin),m(d.end)),d.begin!=d.end)){t=!1;return}-1!=["keydown"].indexOf(c.type)&&d.begin!=d.end&&k(s,d.begin,d.end);b(s).triggerHandler(c)});t&&setTimeout(function(){r(c.type,p)},0)});s.bind(U+" dragdrop drop setvalue",function(c){k(e);setTimeout(function(){b.each(p,function(d,g){g._valueSet(e.value);b(g).triggerHandler(c)});setTimeout(function(){r(c.type,p)},0)},0)});(function(c){if(void 0==
b.valHooks[c]||!0!=b.valHooks[c].inputmaskmultipatch){var d=b.valHooks[c]&&b.valHooks[c].get?b.valHooks[c].get:function(b){return b.value},e=b.valHooks[c]&&b.valHooks[c].set?b.valHooks[c].set:function(b,c){b.value=c;return b};b.valHooks[c]={get:function(c){var e=b(c);return e.data("_inputmask-multi")?(c=e.data("_inputmask-multi"),d(c.elmasks[c.activeMasksetIndex])):d(c)},set:function(c,d){var g=b(c),k=e(c,d);g.data("_inputmask-multi")&&g.triggerHandler("setvalue");return k},inputmaskmultipatch:!0}}})(e.type)};
b.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:b.noop,onincomplete:b.noop,oncleared:b.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:b.noop,onKeyDown:b.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:b.noop,skipOptionalPartCharacter:" ",
showTooltip:!1,numericInput:!1,getLastValidPosition:void 0,rightAlign:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,
NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0},masksCache:{},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),
"\\$1")},format:function(e,d){var g=b.extend(!0,{},b.inputmask.defaults,d);G(g.alias,d,g);return B(K(g),g,{action:"format",value:e})},isValid:function(e,d){var g=b.extend(!0,{},b.inputmask.defaults,d);G(g.alias,d,g);return B(K(g),g,{action:"isValid",value:e})}};b.fn.inputmask=function(e,d){function g(d,e){var g=b(d),k;for(k in e){var c=g.data("inputmask-"+k.toLowerCase());void 0!=c&&(e[k]=c)}return e}var k=b.extend(!0,{},b.inputmask.defaults,d),m;if("string"===typeof e)switch(e){case "mask":return G(k.alias,
d,k),m=K(k),0==m.length?this:this.each(function(){b.isArray(m)?M(this,m,g(this,k)):B(b.extend(!0,{},m),g(this,k),{action:"mask",el:this})});case "unmaskedvalue":var r=b(this);return r.data("_inputmask")?(m=r.data("_inputmask").maskset,k=r.data("_inputmask").opts,B(m,k,{action:"unmaskedvalue",$input:r})):r.val();case "remove":return this.each(function(){var d=b(this);if(d.data("_inputmask")){m=d.data("_inputmask").maskset;k=d.data("_inputmask").opts;this._valueSet(B(m,k,{action:"unmaskedvalue",$input:d,
skipDatepickerCheck:!0}));d.unbind(".inputmask");d.removeClass("focus.inputmask");d.removeData("_inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(this,"value"));e&&e.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(g){this._valueSet=
this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(m=this.data("_inputmask").maskset,m._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return this.data("_inputmask")?(m=this.data("_inputmask").maskset,k=this.data("_inputmask").opts,B(m,k,{action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})):!0;case "getmetadata":if(this.data("_inputmask"))return m=this.data("_inputmask").maskset,
m.metadata;break;default:return G(e,d,k)||(k.mask=e),m=K(k),void 0==m?this:this.each(function(){b.isArray(m)?M(this,m,g(this,k)):B(b.extend(!0,{},m),g(this,k),{action:"mask",el:this})})}else{if("object"==typeof e)return k=b.extend(!0,{},b.inputmask.defaults,e),G(k.alias,e,k),m=K(k),void 0==m?this:this.each(function(){b.isArray(m)?M(this,m,g(this,k)):B(b.extend(!0,{},m),g(this,k),{action:"mask",el:this})});if(void 0==e)return this.each(function(){var e=b(this).attr("data-inputmask");if(e&&""!=e)try{var e=
e.replace(RegExp("'","g"),'"'),g=b.parseJSON("{"+e+"}");b.extend(!0,g,d);k=b.extend(!0,{},b.inputmask.defaults,g);G(k.alias,g,k);k.alias=void 0;b(this).inputmask(k)}catch(m){}})}}}})(jQuery);
