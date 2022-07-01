// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,s,l;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),s="get"in t,l="set"in t,v&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,n,t.get),l&&a&&a.call(r,n,t.set),r},s=n()?c:v,l=s;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},p=s;var m=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var N=function(r){return r!=r},b=Math.floor,h=Math.ceil,g=b,w=h;var d=function(r){return r<0?w(r):g(r)},A=Number,_=A.NEGATIVE_INFINITY,j=Number.POSITIVE_INFINITY,U=j,O=_;var E=function(r){return r===U||r===O};var S=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return S&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,T=P;var F=function(r){return T.call(r)},k=Object.prototype.hasOwnProperty;var H=function(r,n){return null!=r&&k.call(r,n)},V="function"==typeof Symbol?Symbol.toStringTag:"",G=H,M=V,L=P;var q=F,W=function(r){var n,t,e;if(null==r)return L.call(r);t=r[M],n=G(r,M);try{r[M]=void 0}catch(n){return L.call(r)}return e=L.call(r),n?r[M]=t:delete r[M],e},x=I()?W:q,Y=x,C="function"==typeof Uint32Array;var z="function"==typeof Uint32Array?Uint32Array:null,B=function(r){return C&&r instanceof Uint32Array||"[object Uint32Array]"===Y(r)},D=z;var J=function(){var r,n;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,4294967296,4294967297]),r=B(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var K="function"==typeof Uint32Array?Uint32Array:void 0,Q=function(){throw new Error("not implemented")},R=J()?K:Q,X=x,Z="function"==typeof Float64Array;var $="function"==typeof Float64Array?Float64Array:null,rr=function(r){return Z&&r instanceof Float64Array||"[object Float64Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr([1,3.14,-3.14,NaN]),r=rr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var er="function"==typeof Float64Array?Float64Array:void 0,ur=function(){throw new Error("not implemented")},ir=tr()?er:ur,ar=x,or="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null,cr=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===ar(r)},vr=fr;var sr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),r=cr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,yr=function(){throw new Error("not implemented")},pr=sr()?lr:yr,mr=x,Nr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,hr=function(r){return Nr&&r instanceof Uint16Array||"[object Uint16Array]"===mr(r)},gr=br;var wr=function(){var r,n;if("function"!=typeof gr)return!1;try{n=new gr(n=[1,3.14,-3.14,65536,65537]),r=hr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var dr,Ar="function"==typeof Uint16Array?Uint16Array:void 0,_r=function(){throw new Error("not implemented")},jr={uint16:wr()?Ar:_r,uint8:pr};(dr=new jr.uint16(1))[0]=4660;var Ur,Or,Er=52===new jr.uint8(dr.buffer)[0];!0===Er?(Ur=1,Or=0):(Ur=0,Or=1);var Sr=R,Ir={HIGH:Ur,LOW:Or},Pr=new ir(1),Tr=new Sr(Pr.buffer),Fr=Ir.HIGH,kr=Ir.LOW;var Hr=function(r,n){return Pr[0]=n,r[0]=Tr[Fr],r[1]=Tr[kr],r};var Vr=function(r,n){return 1===arguments.length?Hr([0,0],r):Hr(r,n)},Gr=R,Mr=!0===Er?1:0,Lr=new ir(1),qr=new Gr(Lr.buffer);var Wr,xr,Yr=function(r){return Lr[0]=r,qr[Mr]};!0===Er?(Wr=1,xr=0):(Wr=0,xr=1);var Cr=R,zr={HIGH:Wr,LOW:xr},Br=new ir(1),Dr=new Cr(Br.buffer),Jr=zr.HIGH,Kr=zr.LOW;var Qr=function(r,n){return Dr[Jr]=r,Dr[Kr]=n,Br[0]},Rr=Vr,Xr=Yr,Zr=Qr,$r=[0,0];var rn=function(r,n){var t,e;return Rr($r,r),t=$r[0],t&=2147483647,e=Xr(n),Zr(t|=e&=2147483648,$r[1])};var nn=function(r){return Math.abs(r)},tn=E,en=N,un=nn;var an=function(r,n){return en(n)||tn(n)?(r[0]=n,r[1]=0,r):0!==n&&un(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var on=Yr;var fn=function(r){var n=on(r);return(n=(2146435072&n)>>>20)-1023|0},cn=j,vn=_,sn=N,ln=E,yn=rn,pn=function(r,n){return 1===arguments.length?an([0,0],r):an(r,n)},mn=fn,Nn=Vr,bn=Qr,hn=[0,0],gn=[0,0];var wn=function(r,n){var t,e;return 0===n||0===r||sn(r)||ln(r)?r:(pn(hn,r),n+=hn[1],(n+=mn(r=hn[0]))<-1074?yn(0,r):n>1023?r<0?vn:cn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nn(gn,r),t=gn[0],t&=2148532223,e*bn(t|=n+1023<<20,gn[1])))},dn=wn;var An=dn,_n=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var jn=N,Un=d,On=_,En=j,Sn=function(r,n,t){var e,u,i;return i=(e=r-n)-(u=e*e)*_n(u),An(1-(n-e*i/(2-i)-r),t)};var In=function(r){var n;return jn(r)||r===En?r:r===On?0:r>709.782712893384?En:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Un(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Sn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Pn=R,Tn=!0===Er?0:1,Fn=new ir(1),kn=new Pn(Fn.buffer);var Hn=function(r,n){return Fn[0]=r,kn[Tn]=n>>>0,Fn[0]},Vn=Hn;var Gn=N,Mn=In,Ln=Vn,qn=j,Wn=_,xn=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Yn=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Cn=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},zn=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Bn=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Dn=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},Jn=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Kn=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Qn=.8450629115104675;var Rn=function(r){var n,t,e,u,i,a,o,f;if(Gn(r))return NaN;if(r===qn)return 0;if(r===Wn)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(a=(u=.12837916709551256+(e=r*r)*xn(e))/(i=1+e*Yn(e)),r<.25?1-(r+r*a):(u=r*a,.5-(u+=r-.5)));if(t<1.25)return o=(i=t-1)*Cn(i)-.0023621185607526594,f=1+i*zn(i),n?1+Qn+o/f:1-Qn-o/f;if(t<28){if(i=1/(t*t),t<2.857142857142857)u=i*Bn(i)-.009864944034847148,i=1+i*Dn(i);else{if(r<-6)return 2;u=i*Jn(i)-.0098649429247001,i=1+i*Kn(i)}return e=Ln(t,0),u=Mn(-e*e-.5625)*Mn((e-t)*(e+t)+u/i),n?2-u/t:u/t}return n?2:0},Xn=Math.sqrt,Zn=Rn,$n=Xn,rt=N;var nt=function(r,n,t){var e;return rt(r)||rt(n)||rt(t)||t<0?NaN:0===t?r<n?0:1:(e=t*$n(2),.5*Zn(-(r-n)/e))};var tt=function(r){return function(){return r}},et=N;var ut=tt,it=N;var at=function(r,n){return et(r)||et(n)?NaN:r<n?0:1};m(at,"factory",(function(r){return it(r)?ut(NaN):function(n){if(it(n))return NaN;return n<r?0:1}}));var ot=tt,ft=at.factory,ct=N,vt=Xn,st=Rn;var lt=nt;m(lt,"factory",(function(r,n){var t;return ct(r)||ct(n)||n<0?ot(NaN):0===n?ft(r):(t=n*vt(2),function(n){if(ct(n))return NaN;return.5*st(-(n-r)/t)})}));var yt=lt,pt=s;var mt=function(r,n,t){pt(r,n,{configurable:!1,enumerable:!1,get:t})};var Nt=function(r){return"number"==typeof r},bt=A.prototype.toString;var ht=x,gt=A,wt=function(r){try{return bt.call(r),!0}catch(r){return!1}},dt=I();var At=function(r){return"object"==typeof r&&(r instanceof gt||(dt?wt(r):"[object Number]"===ht(r)))},_t=Nt,jt=At;var Ut=m,Ot=function(r){return _t(r)||jt(r)},Et=At;Ut(Ot,"isPrimitive",Nt),Ut(Ot,"isObject",Et);var St=Ot,It=St.isPrimitive;var Pt=function(r){return It(r)&&r>0},Tt=St.isObject;var Ft=function(r){return Tt(r)&&r.valueOf()>0},kt=Pt,Ht=Ft;var Vt=m,Gt=function(r){return kt(r)||Ht(r)},Mt=Ft;Vt(Gt,"isPrimitive",Pt),Vt(Gt,"isObject",Mt);var Lt=Gt,qt=St.isPrimitive,Wt=N;var xt=function(r){return qt(r)&&Wt(r)},Yt=St.isObject,Ct=N;var zt=function(r){return Yt(r)&&Ct(r.valueOf())},Bt=xt,Dt=zt;var Jt=m,Kt=function(r){return Bt(r)||Dt(r)},Qt=zt;Jt(Kt,"isPrimitive",xt),Jt(Kt,"isObject",Qt);var Rt=Kt,Xt=R,Zt=!0===Er?1:0,$t=new ir(1),re=new Xt($t.buffer);var ne=function(r,n){return $t[0]=r,re[Zt]=n>>>0,$t[0]};var te=Yr,ee=ne,ue=N,ie=_,ae=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},oe=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},fe=.6931471803691238,ce=1.9082149292705877e-10;var ve=function(r){var n,t,e,u,i,a,o,f,c,v,s;return 0===r?ie:ue(r)||r<0?NaN:(u=0,(t=te(r))<1048576&&(u-=54,t=te(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=ee(r,t|1072693248^o))-1,(1048575&2+t)<3?0===a?0===u?0:u*fe+u*ce:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*fe-(i-u*ce-a)):(o=t-398458|0,f=440401-t|0,e=(v=(s=(c=a/(2+a))*c)*s)*ae(v),i=s*oe(v)+e,(o|=f)>0?(n=.5*a*a,0===u?a-(n-c*(n+i)):u*fe-(n-(c*(n+i)+u*ce)-a)):0===u?a-c*(a-i):u*fe-(c*(a-i)-u*ce-a))))},se=N,le=ve;var ye=function(r,n){return se(r)||se(n)||n<=0?NaN:.5*le(17.079468445347132*n*n)},pe=N;var me=function(r,n){return pe(r)||pe(n)||n<=0?NaN:0},Ne=N;var be=function(r,n){return Ne(r)||Ne(n)||n<=0?NaN:r},he=N;var ge=function(r,n){return he(r)||he(n)||n<=0?NaN:r},we=N;var de=function(r,n){return we(r)||we(n)||n<=0?NaN:r},Ae=N;var _e=function(r,n){return Ae(r)||Ae(n)||n<=0?NaN:0},je=N;var Ue=function(r,n){return je(r)||je(n)||n<=0?NaN:n},Oe=N;var Ee=function(r,n){return Oe(r)||Oe(n)||n<=0?NaN:n*n},Se=b;var Ie=function(r){return Se(r)===r},Pe=Ie;var Te=function(r){return Pe(r/2)};var Fe=function(r){return Te(r>0?r-1:r+1)};var ke=function(r){return 0|r},He=Fe,Ve=rn,Ge=_,Me=j;var Le=Yr;var qe=nn,We=j;var xe=Yr,Ye=Vn,Ce=ne,ze=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Be=[1,1.5],De=[0,.5849624872207642],Je=[0,1.350039202129749e-8];var Ke=Vn,Qe=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Re=Yr,Xe=ne,Ze=Vn,$e=ke,ru=dn,nu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var tu=N,eu=Fe,uu=E,iu=Ie,au=Xn,ou=nn,fu=Vr,cu=Vn,vu=ke,su=_,lu=j,yu=function(r,n){return n===Ge?Me:n===Me?0:n>0?He(n)?r:0:He(n)?Ve(Me,r):Me},pu=function(r,n){return(2147483647&Le(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},mu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:qe(r)<1==(n===We)?0:We},Nu=function(r,n,t){var e,u,i,a,o,f,c,v,s,l,y,p,m,N,b,h,g,w,d,A;return w=0,t<1048576&&(w-=53,t=xe(n*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?A=0:d<767610?A=1:(A=0,w+=1,t-=1048576),e=524288+(t>>1|536870912),o=(g=1/((n=Ce(n,t))+(c=Be[A])))*((h=n-c)-(a=Ye(u=h*g,0))*(f=Ce(0,e+=A<<18))-a*(n-(f-c))),b=(i=u*u)*i*ze(i),f=Ye(f=3+(i=a*a)+(b+=o*(a+u)),0),m=(y=-7.028461650952758e-9*(s=Ye(s=(h=a*f)+(g=o*f+(b-(f-3-i))*u),0))+.9617966939259756*(g-(s-h))+Je[A])-((p=Ye(p=(l=.9617967009544373*s)+y+(v=De[A])+(N=w),0))-N-v-l),r[0]=p,r[1]=m,r},bu=function(r,n){var t,e,u,i,a;return t=(a=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Qe(u)))-((e=Ke(e=(i=1.4426950216293335*u)+a,0))-i),r[0]=e,r[1]=t,r},hu=function(r,n,t){var e,u,i,a,o,f,c,v,s,l;return l=((s=2147483647&r|0)>>20)-1023|0,v=0,s>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=Xe(0,e)),f=(o=.6931471805599453*(t-((i=Ze(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(a=.6931471824645996*i)+o)-a),u=c-(i=c*c)*nu(i),r=Re(c=1-(c*u/(u-2)-(f+c*f)-c)),r=$e(r),c=(r+=v<<20>>>0)>>20<=0?ru(c,v):Xe(c,r)},gu=1e300,wu=1e-300,du=[0,0],Au=[0,0];var _u=function r(n,t){var e,u,i,a,o,f,c,v,s,l,y,p,m,N;if(tu(n)||tu(t))return NaN;if(fu(du,t),o=du[0],0===du[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return au(n);if(-.5===t)return 1/au(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(uu(t))return mu(n,t)}if(fu(du,n),a=du[0],0===du[1]){if(0===a)return yu(n,t);if(1===n)return 1;if(-1===n&&eu(t))return-1;if(uu(n))return n===su?r(-0,-t):t<0?0:lu}if(n<0&&!1===iu(t))return(n-n)/(n-n);if(i=ou(n),e=2147483647&a|0,u=2147483647&o|0,c=o>>>31|0,f=(f=a>>>31|0)&&eu(t)?-1:1,u>1105199104){if(u>1139802112)return pu(n,t);if(e<1072693247)return 1===c?f*gu*gu:f*wu*wu;if(e>1072693248)return 0===c?f*gu*gu:f*wu*wu;y=bu(Au,i)}else y=Nu(Au,i,e);if(l=(t-(v=cu(t,0)))*y[0]+t*y[1],s=v*y[0],fu(du,p=l+s),m=vu(du[0]),N=vu(du[1]),m>=1083179008){if(0!=(m-1083179008|N))return f*gu*gu;if(l+8008566259537294e-32>p-s)return f*gu*gu}else if((2147483647&m)>=1083231232){if(0!=(m-3230714880|N))return f*wu*wu;if(l<=p-s)return f*wu*wu}return f*(p=hu(m,s,l))},ju=_u,Uu=ve,Ou=ju,Eu=_,Su=j,Iu=N;var Pu=function(r,n,t){var e;return Iu(r)||Iu(n)||Iu(t)||t<0?NaN:0===t?r===n?Su:Eu:(e=Ou(t,2),-.5*(2*Uu(t)+1.8378770664093456)+-1/(2*e)*Ou(r-n,2))},Tu=j,Fu=_,ku=N;var Hu=tt,Vu=j,Gu=_,Mu=N;var Lu=function(r,n){return ku(r)||ku(n)?NaN:r===n?Tu:Fu};m(Lu,"factory",(function(r){return Mu(r)?Hu(NaN):function(n){if(Mu(n))return NaN;return n===r?Vu:Gu}}));var qu=tt,Wu=Lu.factory,xu=N,Yu=ju,Cu=ve;var zu=Pu;m(zu,"factory",(function(r,n){var t,e,u;return xu(r)||xu(n)||n<0?qu(NaN):0===n?Wu(r):(t=Yu(n,2),e=-.5*(2*Cu(n)+1.8378770664093456),u=-1/(2*t),function(n){return e+u*Yu(n-r,2)})}));var Bu=zu,Du=N,Ju=In,Ku=ju;var Qu=tt,Ru=N,Xu=In,Zu=ju;var $u=function(r,n,t){return Du(r)||Du(n)||Du(t)||t<=0?NaN:Ju(n*r+.5*Ku(t*r,2))};m($u,"factory",(function(r,n){return Ru(r)||Ru(n)||n<=0?Qu(NaN):function(t){if(Ru(t))return NaN;return Xu(r*t+.5*Zu(n*t,2))}}));var ri=$u,ni=In,ti=ju,ei=Xn,ui=j,ii=N;var ai=function(r,n,t){var e;return ii(r)||ii(n)||ii(t)||t<0?NaN:0===t?r===n?ui:0:(e=ti(t,2),1/ei(6.283185307179586*e)*ni(-1/(2*e)*ti(r-n,2)))},oi=j,fi=N;var ci=tt,vi=j,si=N;var li=function(r,n){return fi(r)||fi(n)?NaN:r===n?oi:0};m(li,"factory",(function(r){return si(r)?ci(NaN):function(n){if(si(n))return NaN;return n===r?vi:0}}));var yi=tt,pi=li.factory,mi=N,Ni=Xn,bi=In,hi=ju;var gi=ai;m(gi,"factory",(function(r,n){var t,e,u;return mi(r)||mi(n)||n<0?yi(NaN):0===n?pi(r):(t=hi(n,2),e=1/Ni(6.283185307179586*t),u=-1/(2*t),function(n){if(mi(n))return NaN;return e*bi(u*hi(n-r,2))})}));var wi=gi;var di=N,Ai=Xn,_i=ve,ji=j,Ui=_,Oi=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)},Ei=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)},Si=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)},Ii=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)},Pi=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)};var Ti=function(r){var n,t,e,u;return di(r)?NaN:1===r?ji:-1===r?Ui:0===r?r:r>1||r<-1?NaN:(r<0?(n=-1,t=-r):(n=1,t=r),e=1-t,t<=.5?n*(.08913147449493408*(u=t*(t+10))+u*Oi(t)):e>=.25?n*((u=Ai(-2*_i(e)))/(2.249481201171875+Ei(e-=.25))):(e=Ai(-_i(e)))<3?n*(.807220458984375*e+Si(e-1.125)*e):e<6?n*(.9399557113647461*e+Ii(e-3)*e):n*(.9836282730102539*e+Pi(e-6)*e))},Fi=Ti,ki=N,Hi=Xn;var Vi=function(r,n,t){return ki(n)||ki(t)||ki(r)||t<0||r<0||r>1?NaN:0===t?n:n+t*Hi(2)*Fi(2*r-1)},Gi=N;var Mi=tt,Li=N;var qi=function(r,n){return Gi(r)||r<0||r>1?NaN:n};m(qi,"factory",(function(r){return Li(r)?Mi(NaN):function(n){if(Li(n)||n<0||n>1)return NaN;return r}}));var Wi=tt,xi=qi.factory,Yi=Ti,Ci=N,zi=Xn;var Bi=Vi;m(Bi,"factory",(function(r,n){var t,e;return Ci(r)||Ci(n)||n<0?Wi(NaN):(0===n&&xi(r),t=r,e=n*zi(2),function(r){if(Ci(r)||r<0||r>1)return NaN;return t+e*Yi(2*r-1)})}));var Di=Bi,Ji=s,Ki=m,Qi=mt,Ri=Lt.isPrimitive,Xi=St.isPrimitive,Zi=Rt,$i=ye,ra=me,na=be,ta=ge,ea=de,ua=_e,ia=Ue,aa=Ee,oa=yt,fa=Bu,ca=ri,va=wi,sa=Di;function la(){var r,n;if(!(this instanceof la))return 0===arguments.length?new la:new la(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Xi(n=arguments[0])||Zi(n))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+n+"`");if(!Ri(r))throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `"+r+"`")}else n=0,r=1;return Ji(this,"mu",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Xi(r)||Zi(r))throw new TypeError("invalid value. Must be a number primitive. Value: `"+r+"`");n=r}}),Ji(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Ri(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");r=n}}),this}Qi(la.prototype,"entropy",(function(){return $i(this.mu,this.sigma)})),Qi(la.prototype,"kurtosis",(function(){return ra(this.mu,this.sigma)})),Qi(la.prototype,"mean",(function(){return na(this.mu,this.sigma)})),Qi(la.prototype,"median",(function(){return ta(this.mu,this.sigma)})),Qi(la.prototype,"mode",(function(){return ea(this.mu,this.sigma)})),Qi(la.prototype,"skewness",(function(){return ua(this.mu,this.sigma)})),Qi(la.prototype,"stdev",(function(){return ia(this.mu,this.sigma)})),Qi(la.prototype,"variance",(function(){return aa(this.mu,this.sigma)})),Ki(la.prototype,"cdf",(function(r){return oa(r,this.mu,this.sigma)})),Ki(la.prototype,"logpdf",(function(r){return fa(r,this.mu,this.sigma)})),Ki(la.prototype,"mgf",(function(r){return ca(r,this.mu,this.sigma)})),Ki(la.prototype,"pdf",(function(r){return va(r,this.mu,this.sigma)})),Ki(la.prototype,"quantile",(function(r){return sa(r,this.mu,this.sigma)}));var ya=la,pa={};y(pa,"cdf",yt),y(pa,"Normal",ya),y(pa,"entropy",ye),y(pa,"kurtosis",me),y(pa,"logpdf",Bu),y(pa,"mean",be),y(pa,"median",ge),y(pa,"mgf",ri),y(pa,"mode",de),y(pa,"pdf",wi),y(pa,"quantile",Di),y(pa,"skewness",_e),y(pa,"stdev",Ue),y(pa,"variance",Ee);export{ya as Normal,yt as cdf,pa as default,ye as entropy,me as kurtosis,Bu as logpdf,be as mean,ge as median,ri as mgf,de as mode,wi as pdf,Di as quantile,_e as skewness,Ue as stdev,Ee as variance};
//# sourceMappingURL=mod.js.map
