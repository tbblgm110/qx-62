/*
恋小语VIP

下载：https://apps.apple.com/dk/app/id1632878609

====================================

^http:\//\api\.love\.823123\.com\/facades\/ad_space\.index url reject-200

[rewrite_local]

^http:\/\/api\.love\.823123\.com\/facades\/account\.show$ url script-response-body https://raw.githubusercontent.com/wf021325/qx/master/js/lxy.js
^http:\/\/api\.love\.823123\.com\/facades\/open\.chat_stream url script-request-header  https://raw.githubusercontent.com/wf021325/qx/master/js/lxytk.js


# http://api.love.823123.com/facades/account.show url script-response-body http://192.168.2.170:8080/lxy.js
# http://api.love.823123.com/facades/open.chat_stream url script-request-header  http://192.168.2.170:8080/lxytk.js

[mitm]
hostname  = api.love.823123.com
====================================
 */
int();
const key = 'lX4uSSGqztP3vQ7K';
let body = $response.body;
var obj = JSON.parse(body);
var data = B64_Decrypt(obj.data);
obj = JSON.parse(data);
var iv_1 = obj.iv;
var iv = B64_Decrypt(iv_1);
var value = obj.value;
word = AES_Decrypt(value, key, iv)
obj = {};
obj = JSON.parse(word);
obj.data.guest = false;
obj.data.vip_expired_at = '3742732800';
obj.data.perpetual_vip = true;
obj.data.vip = true;
obj.data.nickname = '苍井灰灰';
obj.data.id = obj.data.identifyCode = 10086;
obj.data.avatar_url = obj.data.profilePhoto_url = 'https://love-helper.oss-cn-hangzhou.aliyuncs.com/images/2023/09/06/n33C7GybsrML8UHOioWnsV2ERLGjLAnysrqpmLTT.jpg'


word = JSON.stringify(obj);
value = AES_Encrypt(word, key, iv);
obj = {};
obj.iv = iv_1;
obj.value = value;
data = JSON.stringify(obj);
obj = {};
obj.data = B64_Encrypt(data);
body = JSON.stringify(obj);
$done({body});



function AES_Encrypt(r,t,p){var e=CryptoJS.enc.Utf8.parse(r);return t=CryptoJS.enc.Utf8.parse(t),CryptoJS.AES.encrypt(e,t,{iv:CryptoJS.enc.Utf8.parse(p),mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString()}function AES_Decrypt(r,t,p){var e=r;return t=CryptoJS.enc.Utf8.parse(t),CryptoJS.AES.decrypt(e,t,{iv:CryptoJS.enc.Utf8.parse(p),mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)}function B64_Decrypt(r){var t=CryptoJS.enc.Base64.parse(r);return CryptoJS.enc.Utf8.stringify(t)}function B64_Encrypt(r){var t=CryptoJS.enc.Utf8.parse(r);return CryptoJS.enc.Base64.stringify(t)}

function int(){CryptoJS=function(t,e){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),"undefined"!=typeof self&&self.crypto&&(r=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var i=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},n=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},c=s.Base={extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},a=s.WordArray=c.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||u).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=s<<24-(i+o)%4*8}else for(var c=0;c<n;c+=4)e[i+c>>>2]=r[c>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=c.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){var r,n=[],o=function(e){e=e;var r=987654321,i=4294967295;return function(){var n=((r=36969*(65535&r)+(r>>16)&i)<<16)+(e=18e3*(65535&e)+(e>>16)&i)&i;return n/=4294967296,(n+=.5)*(t.random()>.5?1:-1)}},s=!1;try{i(),s=!0}catch(t){}for(var c,f=0;f<e;f+=4)s?n.push(i()):(c=987654071*(r=o(4294967296*(c||t.random())))(),n.push(4294967296*r()|0));return new a.init(n,e)}}),f=o.enc={},u=f.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new a.init(r,e/2)}},h=f.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new a.init(r,e)}},p=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},d=s.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=p.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,i=this._data,n=i.words,o=i.sigBytes,s=this.blockSize,c=o/(4*s),f=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*s,u=t.min(4*f,o);if(f){for(var h=0;h<f;h+=s)this._doProcessBlock(n,h);r=n.splice(0,f),i.sigBytes-=u}return new a.init(r,u)},clone:function(){var t=c.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),l=(s.Hasher=d.extend({cfg:c.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new l.HMAC.init(t,r).finalize(e)}}}),o.algo={});return o}(Math);!function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;c<4&&o+.75*c<r;c++)n.push(i.charAt(s>>>6*(3-c)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(t){var r=t.length,i=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<i.length;o++)n[i.charCodeAt(o)]=o}var s=i.charAt(64);if(s){var c=t.indexOf(s);-1!==c&&(r=c)}return function(t,r,i){for(var n=[],o=0,s=0;s<r;s++)if(s%4){var c=i[t.charCodeAt(s-1)]<<s%4*2,a=i[t.charCodeAt(s)]>>>6-s%4*2;n[o>>>2]|=(c|a)<<24-o%4*8,o++}return e.create(n,o)}(t,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,i=r.Base,n=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,c=(s.Utf8,s.Base64),a=e.algo.EvpKDF,f=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?g:_}return function(e){return{encrypt:function(r,i,n){return t(i).encrypt(e,r,i,n)},decrypt:function(r,i,n){return t(i).decrypt(e,r,i,n)}}}}()}),u=(r.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),h=r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=u.CBC=function(){var e=h.extend();function r(e,r,i){var n,o=this._iv;o?(n=o,this._iv=t):n=this._prevBlock;for(var s=0;s<i;s++)e[r+s]^=n[s]}return e.Encryptor=e.extend({processBlock:function(t,e){var i=this._cipher,n=i.blockSize;r.call(this,t,e,n),i.encryptBlock(t,e),this._prevBlock=t.slice(e,e+n)}}),e.Decryptor=e.extend({processBlock:function(t,e){var i=this._cipher,n=i.blockSize,o=t.slice(e,e+n);i.decryptBlock(t,e),r.call(this,t,e,n),this._prevBlock=o}}),e}(),d=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes%r,o=i<<24|i<<16|i<<8|i,s=[],c=0;c<i;c+=4)s.push(o);var a=n.create(s,i);t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},l=(r.BlockCipher=f.extend({cfg:f.cfg.extend({mode:p,padding:d}),reset:function(){var t;f.reset.call(this);var e=this.cfg,r=e.iv,i=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=i.createEncryptor:(t=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(i,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;return(r?n.create([1398893684,1701076831]).concat(r).concat(e):e).toString(c)},parse:function(t){var e,r=c.parse(t),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(e=n.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),l.create({ciphertext:r,salt:e})}},_=r.SerializableCipher=i.extend({cfg:i.extend({format:y}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),o=n.finalize(e),s=n.cfg;return l.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),v=(e.kdf={}).OpenSSL={execute:function(t,e,r,i,o){if(i||(i=n.random(8)),o)s=a.create({keySize:e+r,hasher:o}).compute(t,i);else var s=a.create({keySize:e+r}).compute(t,i);var c=n.create(s.words.slice(e),4*r);return s.sigBytes=4*e,l.create({key:s,iv:c,salt:i})}},g=r.PasswordBasedCipher=_.extend({cfg:_.cfg.extend({kdf:v}),encrypt:function(t,e,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize,i.salt,i.hasher);i.iv=n.iv;var o=_.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=i.kdf.execute(r,t.keySize,t.ivSize,e.salt,i.hasher);return i.iv=n.iv,_.decrypt.call(this,t,e,n.key,i)}})}(),function(){var t=CryptoJS,e=t.lib.BlockCipher,r=t.algo,i=[],n=[],o=[],s=[],c=[],a=[],f=[],u=[],h=[],p=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var r=0,d=0;for(e=0;e<256;e++){var l=d^d<<1^d<<2^d<<3^d<<4;l=l>>>8^255&l^99,i[r]=l,n[l]=r;var y=t[r],_=t[y],v=t[_],g=257*t[l]^16843008*l;o[r]=g<<24|g>>>8,s[r]=g<<16|g>>>16,c[r]=g<<8|g>>>24,a[r]=g,g=16843009*v^65537*_^257*y^16843008*r,f[l]=g<<24|g>>>8,u[l]=g<<16|g>>>16,h[l]=g<<8|g>>>24,p[l]=g,r?(r=y^t[t[t[v^y]]],d^=t[t[d]]):r=d=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],l=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],s=0;s<n;s++)if(s<r)o[s]=e[s];else{var c=o[s-1];s%r?r>6&&s%r==4&&(c=i[c>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c]):(c=i[(c=c<<8|c>>>24)>>>24]<<24|i[c>>>16&255]<<16|i[c>>>8&255]<<8|i[255&c],c^=d[s/r|0]<<24),o[s]=o[s-r]^c}for(var a=this._invKeySchedule=[],l=0;l<n;l++)s=n-l,c=l%4?o[s]:o[s-4],a[l]=l<4||s<=4?c:f[i[c>>>24]]^u[i[c>>>16&255]]^h[i[c>>>8&255]]^p[i[255&c]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,s,c,a,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,f,u,h,p,n),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,s,c){for(var a=this._nRounds,f=t[e]^r[0],u=t[e+1]^r[1],h=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++){var y=i[f>>>24]^n[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[d++],_=i[u>>>24]^n[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[d++],v=i[h>>>24]^n[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[d++],g=i[p>>>24]^n[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[d++];f=y,u=_,h=v,p=g}y=(c[f>>>24]<<24|c[u>>>16&255]<<16|c[h>>>8&255]<<8|c[255&p])^r[d++],_=(c[u>>>24]<<24|c[h>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],v=(c[h>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&u])^r[d++],g=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[u>>>8&255]<<8|c[255&h])^r[d++],t[e]=y,t[e+1]=_,t[e+2]=v,t[e+3]=g},keySize:8});t.AES=e._createHelper(l)}();}

