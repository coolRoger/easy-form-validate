parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({17:[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],8:[function(require,module,exports) {
var e=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e);
},{}],25:[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],18:[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":25}],39:[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],32:[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":39}],16:[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],28:[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":16}],40:[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":39,"./_global":17}],33:[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":28,"./_fails":16,"./_dom-create":40}],34:[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":39}],26:[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(e){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":32,"./_ie8-dom-define":33,"./_to-primitive":34,"./_descriptors":28}],27:[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],19:[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":26,"./_property-desc":27,"./_descriptors":28}],20:[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],10:[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":17,"./_core":8,"./_ctx":18,"./_hide":19,"./_has":20}],24:[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],15:[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":24}],23:[function(require,module,exports) {
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};
},{}],29:[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":15,"./_defined":23}],42:[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],37:[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":42}],38:[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":42}],30:[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":29,"./_to-length":37,"./_to-absolute-index":38}],41:[function(require,module,exports) {
module.exports=!0;
},{}],35:[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});
},{"./_core":8,"./_global":17,"./_library":41}],36:[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],31:[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":35,"./_uid":36}],21:[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":20,"./_to-iobject":29,"./_array-includes":30,"./_shared-key":31}],22:[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],11:[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":21,"./_enum-bug-keys":22}],12:[function(require,module,exports) {
exports.f=Object.getOwnPropertySymbols;
},{}],13:[function(require,module,exports) {
exports.f={}.propertyIsEnumerable;
},{}],14:[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":23}],9:[function(require,module,exports) {
"use strict";var e=require("./_object-keys"),r=require("./_object-gops"),t=require("./_object-pie"),o=require("./_to-object"),i=require("./_iobject"),c=Object.assign;module.exports=!c||require("./_fails")(function(){var e={},r={},t=Symbol(),o="abcdefghijklmnopqrst";return e[t]=7,o.split("").forEach(function(e){r[e]=e}),7!=c({},e)[t]||Object.keys(c({},r)).join("")!=o})?function(c,n){for(var u=o(c),s=arguments.length,a=1,f=r.f,b=t.f;s>a;)for(var j,l=i(arguments[a++]),q=f?e(l).concat(f(l)):e(l),_=q.length,g=0;_>g;)b.call(l,j=q[g++])&&(u[j]=l[j]);return u}:c;
},{"./_object-keys":11,"./_object-gops":12,"./_object-pie":13,"./_to-object":14,"./_iobject":15,"./_fails":16}],7:[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F,"Object",{assign:require("./_object-assign")});
},{"./_export":10,"./_object-assign":9}],6:[function(require,module,exports) {
require("../../modules/es6.object.assign"),module.exports=require("../../modules/_core").Object.assign;
},{"../../modules/es6.object.assign":7,"../../modules/_core":8}],5:[function(require,module,exports) {
module.exports={default:require("core-js/library/fn/object/assign"),__esModule:!0};
},{"core-js/library/fn/object/assign":6}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.d_messages=exports.d_rules=void 0,exports.d_rules={email:{regex:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g},cellphone:{regex:/^\d+$/g,min:4,max:16},number:{regex:/^\d+$/g,min:4,max:16},password:{regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/g,min:6,max:16},comfirmPassword:{equalTo:"password"}},exports.d_messages={email:{regex:"请输入正确的邮箱格式",required:"邮箱不能为空"},cellphone:{regex:"请输入正确电话号码",required:"电话号码不能为空",min:"电话号码位数不能少于4",max:"电话号码位数不能多于16"},number:{regex:"请输入正确电话号码",required:"电话号码不能为空",min:"电话号码位数不能少于4",max:"电话号码位数不能多于16"},password:{regex:"密码必须是同时包含大写字母和数字的组合",required:"密码不能为空",min:"密码不能少于6个字符",max:"密码不能多于16个字符"},comfirmPassword:{equalTo:"两次密码输入不一致"}};
},{}],3:[function(require,module,exports) {
"use strict";var e=require("babel-runtime/core-js/object/assign"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var s=function(){return(s=r.default||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var u=require("./default"),a=function(){function e(e,r,t){this.rules=e,this.messages=r,this.formObj=t}return e.prototype.validate=function(){var e=s(s({},u.d_rules),this.rules);s(s({},u.d_messages),this.messages);for(var r in e){console.log(r+":",e[r]);var t=e[r];t.required,t.regex,t.equalTo,t.min,t.max,String(this.formObj[r])}return{status:!0,message:"验证通过"}},e}();exports.default=a;
},{"babel-runtime/core-js/object/assign":5,"./default":4}],1:[function(require,module,exports) {
var e=require("../lib/index").default;module.exports=e;
},{"../lib/index":3}]},{},[1], null)
//# sourceMappingURL=/easy-form-validate.map