// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,i=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),p&&a&&a.call(r,n,t.set),r};function s(r,n,t){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var y=Math.floor,g=Math.ceil;function h(r){return r<0?g(r):y(r)}var d=Number,v=d.NEGATIVE_INFINITY,m=Number.POSITIVE_INFINITY,b=1023;function N(r){return r===m||r===v}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return w&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,k=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",S=A()?function(r){var n,t,e,i,o;if(null==r)return E.call(r);t=r[j],o=j,n=null!=(i=r)&&k.call(i,o);try{r[j]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[j]=t:delete r[j],e}:function(r){return E.call(r)},U="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var T,O=_,F="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var $,G=T,H="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W,C=$,R="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new O(K.buffer),rr=J.HIGH,nr=J.LOW;function tr(r,n){return K[0]=n,r[0]=Q[rr],r[1]=Q[nr],r}function er(r,n){return 1===arguments.length?tr([0,0],r):tr(r,n)}var ir,or,ar=!0===D?1:0,ur=new G(1),fr=new O(ur.buffer);function cr(r){return ur[0]=r,fr[ar]}!0===D?(ir=1,or=0):(ir=0,or=1);var sr={HIGH:ir,LOW:or},lr=new G(1),pr=new O(lr.buffer),yr=sr.HIGH,gr=sr.LOW;function hr(r,n){return pr[yr]=r,pr[gr]=n,lr[0]}var dr=[0,0];function vr(r,n){var t,e;return er(dr,r),t=dr[0],t&=2147483647,e=cr(n),hr(t|=e&=2147483648,dr[1])}function mr(r){return Math.abs(r)}function br(r,n){return p(n)||N(n)?(r[0]=n,r[1]=0,r):0!==n&&mr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Nr=[0,0],wr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||p(r)||N(r)?r:(function(r,n){1===arguments.length?br([0,0],r):br(r,n)}(Nr,r),n+=Nr[1],n+=function(r){var n=cr(r);return(n=(2146435072&n)>>>20)-b|0}(r=Nr[0]),n<-1074?vr(0,r):n>1023?r<0?v:m:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er(wr,r),t=wr[0],t&=2148532223,e*hr(t|=n+b<<20,wr[1])))}var _r=1.4426950408889634,Er=1/(1<<28);function kr(r){var n;return p(r)||r===m?r:r===v?0:r>709.782712893384?m:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,n,t){var e,i,o,a;return Ar(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=h(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}var jr=!0===D?0:1,Sr=new G(1),Ur=new O(Sr.buffer);function xr(r,n){return Sr[0]=r,Ur[jr]=n>>>0,Sr[0]}var Ir=.8450629115104675;function Tr(r){var n,t,e,i,o,a,u,f;if(p(r))return NaN;if(r===m)return 0;if(r===v)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(i=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),o=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(t<1.25)return u=(o=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,f=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+Ir+u/f:1-Ir-u/f;if(t<28){if(o=1/(t*t),t<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=kr(-(e=xr(t,0))*e-.5625)*kr((e-t)*(e+t)+i/o),n?2-i/t:i/t}return n?2:0}var Or=Math.sqrt;function Fr(r,n,t){return p(r)||p(n)||p(t)||t<0?NaN:0===t?r<n?0:1:.5*Tr(-(r-n)/(t*Or(2)))}function Vr(r){return function(){return r}}function Pr(r){return p(r)?Vr(NaN):function(n){return p(n)?NaN:n<r?0:1}}function $r(r,n,t){c(r,n,{configurable:!1,enumerable:!1,get:t})}function Gr(r){return"number"==typeof r}l((function(r,n){return p(r)||p(n)?NaN:r<n?0:1}),"factory",Pr),l(Fr,"factory",(function(r,n){var t;return p(r)||p(n)||n<0?Vr(NaN):0===n?Pr(r):(t=n*Or(2),function(n){return p(n)?NaN:.5*Tr(-(n-r)/t)})}));var Hr=d.prototype.toString,Lr=A();function Mr(r){return"object"==typeof r&&(r instanceof d||(Lr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function Wr(r){return Gr(r)||Mr(r)}function Cr(r){return Gr(r)&&r>0}function Rr(r){return Mr(r)&&r.valueOf()>0}function Zr(r){return Cr(r)||Rr(r)}function qr(r){return Gr(r)&&p(r)}function Xr(r){return Mr(r)&&p(r.valueOf())}function Yr(r){return qr(r)||Xr(r)}l(Wr,"isPrimitive",Gr),l(Wr,"isObject",Mr),l(Zr,"isPrimitive",Cr),l(Zr,"isObject",Rr),l(Yr,"isPrimitive",qr),l(Yr,"isObject",Xr);var zr=!0===D?1:0,Br=new G(1),Dr=new O(Br.buffer);function Jr(r,n){return Br[0]=r,Dr[zr]=n>>>0,Br[0]}var Kr=.6931471803691238,Qr=1.9082149292705877e-10,rn=1048575;function nn(r){var n,t,e,i,o,a,u,f,c,s,l,y;return 0===r?v:p(r)||r<0?NaN:(o=0,(t=cr(r))<1048576&&(o-=54,t=cr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-b|0,o+=(f=614244+(t&=rn)&1048576|0)>>20|0,u=(r=Jr(r,t|1072693248^f))-1,(rn&2+t)<3?0===u?0===o?0:o*Kr+o*Qr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Kr-(a-o*Qr-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Kr-(n-(s*(n+a)+o*Qr)-u)):0===o?u-s*(u-a):o*Kr-(s*(u-a)-o*Qr-u))))}var tn=6.283185307179586;function en(r,n){return p(r)||p(n)||n<=0?NaN:.5*nn(17.079468445347132*n*n)}function on(r,n){return p(r)||p(n)||n<=0?NaN:0}function an(r,n){return p(r)||p(n)||n<=0?NaN:r}function un(r,n){return p(r)||p(n)||n<=0?NaN:r}function fn(r,n){return p(r)||p(n)||n<=0?NaN:r}function cn(r,n){return p(r)||p(n)||n<=0?NaN:0}function sn(r,n){return p(r)||p(n)||n<=0?NaN:n}function ln(r,n){return p(r)||p(n)||n<=0?NaN:n*n}function pn(r){return y(r)===r}function yn(r){return pn(r/2)}function gn(r){return yn(r>0?r-1:r+1)}function hn(r){return 0|r}var dn=1048576,vn=[1,1.5],mn=[0,.5849624872207642],bn=[0,1.350039202129749e-8],Nn=2147483647,wn=1048575,An=1048576,_n=2147483647,En=1083179008,kn=1e300,jn=1e-300,Sn=[0,0],Un=[0,0];function xn(r,n){var t,e,i,o,a,u,f,c,s,l,y,g,h,d;if(p(r)||p(n))return NaN;if(er(Sn,n),a=Sn[0],0===Sn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Or(r);if(-.5===n)return 1/Or(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(N(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:mr(r)<1==(n===m)?0:m}(r,n)}if(er(Sn,r),o=Sn[0],0===Sn[1]){if(0===o)return function(r,n){return n===v?m:n===m?0:n>0?gn(n)?r:0:gn(n)?vr(m,r):m}(r,n);if(1===r)return 1;if(-1===r&&gn(n))return-1;if(N(r))return r===v?xn(-0,-n):n<0?0:m}if(r<0&&!1===pn(n))return(r-r)/(r-r);if(i=mr(r),t=o&_n|0,e=a&_n|0,f=a>>>31|0,u=(u=o>>>31|0)&&gn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&cr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*kn*kn:u*jn*jn;if(t>1072693248)return 0===f?u*kn*kn:u*jn*jn;y=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=xr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(Un,i)}else y=function(r,n,t){var e,i,o,a,u,f,c,s,l,p,y,g,h,d,v,m,N,w,A,_,E;return w=0,t<dn&&(w-=53,t=cr(n*=9007199254740992)),w+=(t>>20)-b|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,w+=1,t-=dn),a=xr(i=(m=(n=Jr(n,t))-(c=vn[_]))*(N=1/(n+c)),0),e=524288+(t>>1|536870912),f=Jr(0,e+=_<<18),v=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=xr(f=3+(o=a*a)+(v+=(u=N*(m-a*f-a*(n-(f-c))))*(a+i)),0),h=(y=-7.028461650952758e-9*(l=xr(l=(m=a*f)+(N=u*f+(v-(f-3-o))*i),0))+.9617966939259756*(N-(l-m))+bn[_])-((g=xr(g=(p=.9617967009544373*l)+y+(s=mn[_])+(d=w),0))-d-s-p),r[0]=g,r[1]=h,r}(Un,i,t);if(l=(n-(c=xr(n,0)))*y[0]+n*y[1],s=c*y[0],er(Sn,g=l+s),h=hn(Sn[0]),d=hn(Sn[1]),h>=En){if(0!=(h-En|d))return u*kn*kn;if(l+8008566259537294e-32>g-s)return u*kn*kn}else if((h&_n)>=1083231232){if(0!=(h-3230714880|d))return u*jn*jn;if(l<=g-s)return u*jn*jn}return g=function(r,n,t){var e,i,o,a,u,f,c,s,l,p;return l=((s=r&Nn|0)>>20)-b|0,c=0,s>1071644672&&(i=Jr(0,((c=r+(An>>l+1)>>>0)&~(wn>>(l=((c&Nn)>>20)-b|0)))>>>0),c=(c&wn|An)>>20-l>>>0,r<0&&(c=-c),n-=i),r=hn(r=cr(f=1-((f=(o=.6931471824645996*(i=xr(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ar(f,c):Jr(f,r)}(h,s,l),u*g}var In=1.8378770664093456;function Tn(r,n,t){var e;return p(r)||p(n)||p(t)||t<0?NaN:0===t?r===n?m:v:(e=xn(t,2),-.5*(2*nn(t)+In)+-1/(2*e)*xn(r-n,2))}function On(r){return p(r)?Vr(NaN):function(n){return p(n)?NaN:n===r?m:v}}function Fn(r,n,t){return p(r)||p(n)||p(t)||t<=0?NaN:kr(n*r+.5*xn(t*r,2))}function Vn(r,n,t){var e;return p(r)||p(n)||p(t)||t<0?NaN:0===t?r===n?m:0:(e=xn(t,2),1/Or(e*tn)*kr(-1/(2*e)*xn(r-n,2)))}function Pn(r){return p(r)?Vr(NaN):function(n){return p(n)?NaN:n===r?m:0}}function $n(r){var n,t,e,i,o;return p(r)?NaN:1===r?m:-1===r?v:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,t=-r):(n=1,t=r),e=1-t,t<=.5?(i=t*(t+10),o=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)}(t),n*(.08913147449493408*i+i*o)):e>=.25?(i=Or(-2*nn(e)),o=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)}(e-=.25),n*(i/(2.249481201171875+o))):(e=Or(-nn(e)))<3?(o=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)}(e-1.125),n*(.807220458984375*e+o*e)):e<6?(o=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)}(e-3),n*(.9399557113647461*e+o*e)):(o=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)}(e-6),n*(.9836282730102539*e+o*e)))}function Gn(r,n,t){return p(n)||p(t)||p(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*Or(2)*$n(2*r-1)}function Hn(r){return"number"==typeof r}function Ln(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Mn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+Ln(i):Ln(i)+r,e&&(r="-"+r)),r}l((function(r,n){return p(r)||p(n)?NaN:r===n?m:v}),"factory",On),l(Tn,"factory",(function(r,n){var t,e,i;return p(r)||p(n)||n<0?Vr(NaN):0===n?On(r):(t=xn(n,2),e=-.5*(2*nn(n)+In),i=-1/(2*t),function(n){return e+i*xn(n-r,2)})})),l(Fn,"factory",(function(r,n){return p(r)||p(n)||n<=0?Vr(NaN):function(t){return p(t)?NaN:kr(r*t+.5*xn(n*t,2))}})),l((function(r,n){return p(r)||p(n)?NaN:r===n?m:0}),"factory",Pn),l(Vn,"factory",(function(r,n){var t,e,i;return p(r)||p(n)||n<0?Vr(NaN):0===n?Pn(r):(t=xn(n,2),e=1/Or(t*tn),i=-1/(2*t),function(n){return p(n)?NaN:e*kr(i*xn(n-r,2))})})),l((function(r,n){return p(r)||r<0||r>1?NaN:n}),"factory",(function(r){return p(r)?Vr(NaN):function(n){return p(n)||n<0||n>1?NaN:r}})),l(Gn,"factory",(function(r,n){var t,e;return p(r)||p(n)||n<0?Vr(NaN):(t=r,e=n*Or(2),function(r){return p(r)||r<0||r>1?NaN:t+e*$n(2*r-1)})}));var Wn=String.prototype.toLowerCase,Cn=String.prototype.toUpperCase;function Rn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Hn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Mn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Mn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Cn.call(r.specifier)?Cn.call(t):Wn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Zn(r){return"string"==typeof r}var qn=Math.abs,Xn=String.prototype.toLowerCase,Yn=String.prototype.toUpperCase,zn=String.prototype.replace,Bn=/e\+(\d)$/,Dn=/e-(\d)$/,Jn=/^(\d+)$/,Kn=/^(\d+)e/,Qn=/\.0$/,rt=/\.0*e/,nt=/(\..*[^0])0*e/;function tt(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Hn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":qn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=zn.call(t,nt,"$1e"),t=zn.call(t,rt,"e"),t=zn.call(t,Qn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=zn.call(t,Bn,"e+0$1"),t=zn.call(t,Dn,"e-0$1"),r.alternate&&(t=zn.call(t,Jn,"$1."),t=zn.call(t,Kn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Yn.call(r.specifier)?Yn.call(t):Xn.call(t)}function et(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function it(r,n,t){var e=n-r.length;return e<0?r:r=t?r+et(e):et(e)+r}var ot=String.fromCharCode,at=isNaN,ut=Array.isArray;function ft(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function ct(r){var n,t,e,i,o,a,u,f,c;if(!ut(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(Zn(e=r[f]))a+=e;else{if(n=void 0!==e.precision,!(e=ft(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,at(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,at(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Rn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!at(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=at(o)?String(e.arg):ot(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=tt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Mn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=it(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var st=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function lt(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function pt(r){var n,t,e,i;for(t=[],i=0,e=st.exec(r);e;)(n=r.slice(i,st.lastIndex-e[0].length)).length&&t.push(n),t.push(lt(e)),i=st.lastIndex,e=st.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function yt(r){return"string"==typeof r}function gt(r){var n,t,e;if(!yt(r))throw new TypeError(gt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=pt(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return ct.apply(null,t)}function ht(){var r,n;if(!(this instanceof ht))return 0===arguments.length?new ht:new ht(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Gr(n=arguments[0])||Yr(n))throw new TypeError(gt("invalid argument. Location parameter must be a number. Value: `%s`.",n));if(!Cr(r))throw new TypeError(gt("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=0,r=1;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Gr(r)||Yr(r))throw new TypeError(gt("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),c(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Cr(n))throw new TypeError(gt("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}$r(ht.prototype,"entropy",(function(){return en(this.mu,this.sigma)})),$r(ht.prototype,"kurtosis",(function(){return on(this.mu,this.sigma)})),$r(ht.prototype,"mean",(function(){return an(this.mu,this.sigma)})),$r(ht.prototype,"median",(function(){return un(this.mu,this.sigma)})),$r(ht.prototype,"mode",(function(){return fn(this.mu,this.sigma)})),$r(ht.prototype,"skewness",(function(){return cn(this.mu,this.sigma)})),$r(ht.prototype,"stdev",(function(){return sn(this.mu,this.sigma)})),$r(ht.prototype,"variance",(function(){return ln(this.mu,this.sigma)})),l(ht.prototype,"cdf",(function(r){return Fr(r,this.mu,this.sigma)})),l(ht.prototype,"logpdf",(function(r){return Tn(r,this.mu,this.sigma)})),l(ht.prototype,"mgf",(function(r){return Fn(r,this.mu,this.sigma)})),l(ht.prototype,"pdf",(function(r){return Vn(r,this.mu,this.sigma)})),l(ht.prototype,"quantile",(function(r){return Gn(r,this.mu,this.sigma)}));var dt={};s(dt,"cdf",Fr),s(dt,"Normal",ht),s(dt,"entropy",en),s(dt,"kurtosis",on),s(dt,"logpdf",Tn),s(dt,"mean",an),s(dt,"median",un),s(dt,"mgf",Fn),s(dt,"mode",fn),s(dt,"pdf",Vn),s(dt,"quantile",Gn),s(dt,"skewness",cn),s(dt,"stdev",sn),s(dt,"variance",ln),r.Normal=ht,r.cdf=Fr,r.default=dt,r.entropy=en,r.kurtosis=on,r.logpdf=Tn,r.mean=an,r.median=un,r.mgf=Fn,r.mode=fn,r.pdf=Vn,r.quantile=Gn,r.skewness=cn,r.stdev=sn,r.variance=ln,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).normal={});
//# sourceMappingURL=index.js.map
