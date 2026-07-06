(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const rc="180",rf=0,Oc=1,sf=2,Ah=1,of=2,oi=3,wi=0,mn=1,$n=2,Ei=0,_r=1,Uc=2,Nc=3,Fc=4,af=5,Hi=100,cf=101,lf=102,hf=103,uf=104,ff=200,df=201,pf=202,mf=203,ha=204,ua=205,gf=206,_f=207,vf=208,xf=209,yf=210,Ef=211,Sf=212,Mf=213,Tf=214,fa=0,da=1,pa=2,yr=3,ma=4,ga=5,_a=6,va=7,Rh=0,wf=1,bf=2,Si=0,Af=1,Rf=2,Cf=3,Pf=4,If=5,Df=6,Lf=7,Ch=300,Er=301,Sr=302,xa=303,ya=304,ro=306,Ea=1e3,Gi=1001,Sa=1002,zn=1003,Of=1004,ds=1005,qn=1006,mo=1007,Wi=1008,Kn=1009,Ph=1010,Ih=1011,Yr=1012,sc=1013,$i=1014,ai=1015,ts=1016,oc=1017,ac=1018,Kr=1020,Dh=35902,Lh=35899,Oh=1021,Uh=1022,Bn=1023,Zr=1026,Jr=1027,Nh=1028,lc=1029,Fh=1030,hc=1031,uc=1033,Gs=33776,Ws=33777,$s=33778,Xs=33779,Ma=35840,Ta=35841,wa=35842,ba=35843,Aa=36196,Ra=37492,Ca=37496,Pa=37808,Ia=37809,Da=37810,La=37811,Oa=37812,Ua=37813,Na=37814,Fa=37815,Ba=37816,za=37817,ka=37818,Ha=37819,Va=37820,Ga=37821,Wa=36492,$a=36494,Xa=36495,qa=36283,ja=36284,Ya=36285,Ka=36286,Uf=3200,Nf=3201,Bh=0,Ff=1,xi="",An="srgb",Mr="srgb-linear",Ys="linear",Mt="srgb",Ji=7680,Bc=519,Bf=512,zf=513,kf=514,zh=515,Hf=516,Vf=517,Gf=518,Wf=519,zc=35044,kc="300 es",jn=2e3,Ks=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const qr=Math.PI/180,Qr=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function $f(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Xf(i,e,t){return i!==e?(t-i)/(e-i):0}function jr(i,e,t){return(1-t)*i+t*e}function qf(i,e,t,n){return jr(i,e,1-Math.exp(-t*n))}function jf(i,e=1){return e-Math.abs(fc(i,e*2)-e)}function Yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Jf(i,e){return i+Math.random()*(e-i)}function Qf(i){return i*(.5-Math.random())}function ed(i){i!==void 0&&(Hc=i);let e=Hc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function td(i){return i*qr}function nd(i){return i*Qr}function id(i){return(i&i-1)===0&&i!==0}function rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function od(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),u=o(t/2),l=s((e+n)/2),p=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),g=s((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(a*p,u*h,u*d,a*l);break;case"YZY":i.set(u*d,a*p,u*h,a*l);break;case"ZXZ":i.set(u*h,u*d,a*p,a*l);break;case"XZX":i.set(a*p,u*x,u*g,a*l);break;case"YXY":i.set(u*g,a*p,u*x,a*l);break;case"ZYZ":i.set(u*x,u*g,a*p,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mr={DEG2RAD:qr,RAD2DEG:Qr,generateUUID:Ar,clamp:dt,euclideanModulo:fc,mapLinear:$f,inverseLerp:Xf,lerp:jr,damp:qf,pingpong:jf,smoothstep:Yf,smootherstep:Kf,randInt:Zf,randFloat:Jf,randFloatSpread:Qf,seededRandom:ed,degToRad:td,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:rd,floorPowerOfTwo:sd,setQuaternionFromProperEuler:od,normalize:ln,denormalize:pr};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let u=n[r+0],l=n[r+1],p=n[r+2],h=n[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],E=s[o+3];if(a===0){e[t+0]=u,e[t+1]=l,e[t+2]=p,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=x,e[t+3]=E;return}if(h!==E||u!==d||l!==g||p!==x){let v=1-a;const m=u*d+l*g+p*x+h*E,A=m>=0?1:-1,C=1-m*m;if(C>Number.EPSILON){const L=Math.sqrt(C),D=Math.atan2(L,m*A);v=Math.sin(v*D)/L,a=Math.sin(a*D)/L}const S=a*A;if(u=u*v+d*S,l=l*v+g*S,p=p*v+x*S,h=h*v+E*S,v===1-a){const L=1/Math.sqrt(u*u+l*l+p*p+h*h);u*=L,l*=L,p*=L,h*=L}}e[t]=u,e[t+1]=l,e[t+2]=p,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],u=n[r+1],l=n[r+2],p=n[r+3],h=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[t]=a*x+p*h+u*g-l*d,e[t+1]=u*x+p*d+l*h-a*g,e[t+2]=l*x+p*g+a*d-u*h,e[t+3]=p*x-a*h-u*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,u=Math.sin,l=a(n/2),p=a(r/2),h=a(s/2),d=u(n/2),g=u(r/2),x=u(s/2);switch(o){case"XYZ":this._x=d*p*h+l*g*x,this._y=l*g*h-d*p*x,this._z=l*p*x+d*g*h,this._w=l*p*h-d*g*x;break;case"YXZ":this._x=d*p*h+l*g*x,this._y=l*g*h-d*p*x,this._z=l*p*x-d*g*h,this._w=l*p*h+d*g*x;break;case"ZXY":this._x=d*p*h-l*g*x,this._y=l*g*h+d*p*x,this._z=l*p*x+d*g*h,this._w=l*p*h-d*g*x;break;case"ZYX":this._x=d*p*h-l*g*x,this._y=l*g*h+d*p*x,this._z=l*p*x-d*g*h,this._w=l*p*h+d*g*x;break;case"YZX":this._x=d*p*h+l*g*x,this._y=l*g*h+d*p*x,this._z=l*p*x-d*g*h,this._w=l*p*h-d*g*x;break;case"XZY":this._x=d*p*h-l*g*x,this._y=l*g*h-d*p*x,this._z=l*p*x+d*g*h,this._w=l*p*h+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],u=t[9],l=t[2],p=t[6],h=t[10],d=n+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(p-u)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(p-u)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(u+p)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(u+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,u=t._y,l=t._z,p=t._w;return this._x=n*p+o*a+r*l-s*u,this._y=r*p+o*u+s*a-n*l,this._z=s*p+o*l+n*u-r*a,this._w=o*p-n*a-r*u-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const l=Math.sqrt(u),p=Math.atan2(l,a),h=Math.sin((1-t)*p)/l,d=Math.sin(t*p)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,u=e.w,l=2*(o*r-a*n),p=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+u*l+o*h-a*p,this.y=n+u*p+a*l-s*h,this.z=r+u*h+s*p-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,u=t.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new H,Vc=new qi;class it{constructor(e,t,n,r,s,o,a,u,l){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,u,l)}set(e,t,n,r,s,o,a,u,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=a,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=o,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],p=n[4],h=n[7],d=n[2],g=n[5],x=n[8],E=r[0],v=r[3],m=r[6],A=r[1],C=r[4],S=r[7],L=r[2],D=r[5],U=r[8];return s[0]=o*E+a*A+u*L,s[3]=o*v+a*C+u*D,s[6]=o*m+a*S+u*U,s[1]=l*E+p*A+h*L,s[4]=l*v+p*C+h*D,s[7]=l*m+p*S+h*U,s[2]=d*E+g*A+x*L,s[5]=d*v+g*C+x*D,s[8]=d*m+g*S+x*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],p=e[8];return t*o*p-t*a*l-n*s*p+n*a*u+r*s*l-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],p=e[8],h=p*o-a*l,d=a*u-p*s,g=l*s-o*u,x=t*h+n*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=h*E,e[1]=(r*l-p*n)*E,e[2]=(a*n-r*o)*E,e[3]=d*E,e[4]=(p*t-r*u)*E,e[5]=(r*s-a*t)*E,e[6]=g*E,e[7]=(n*u-l*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+e,-r*l,r*u,-r*(-l*o+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new it;function kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ad(){const i=Zs("canvas");return i.style.display="block",i}const Gc={};function es(i){i in Gc||(Gc[i]=!0,console.warn(i))}function cd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Wc=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xi?Ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:Wc,fromXYZ:$c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Wc,fromXYZ:$c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const xt=ld();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class hd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=Zs("canvas")),Qi.width=e.width,Qi.height=e.height;const r=Qi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vo(r[o].image)):s.push(vo(r[o]))}else s=vo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;const xo=new H;class gn extends br{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Gi,r=Gi,s=qn,o=Wi,a=Bn,u=Kn,l=gn.DEFAULT_ANISOTROPY,p=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Ar(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ch;gn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,l=u[0],p=u[4],h=u[8],d=u[1],g=u[5],x=u[9],E=u[2],v=u[6],m=u[10];if(Math.abs(p-d)<.01&&Math.abs(h-E)<.01&&Math.abs(x-v)<.01){if(Math.abs(p+d)<.1&&Math.abs(h+E)<.1&&Math.abs(x+v)<.1&&Math.abs(l+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,S=(g+1)/2,L=(m+1)/2,D=(p+d)/4,U=(h+E)/4,z=(x+v)/4;return C>S&&C>L?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=D/n,s=U/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=D/r,s=z/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=U/s,r=z/s),this.set(n,r,s,t),this}let A=Math.sqrt((v-x)*(v-x)+(h-E)*(h-E)+(d-p)*(d-p));return Math.abs(A)<.001&&(A=1),this.x=(v-x)/A,this.y=(h-E)/A,this.z=(d-p)/A,this.w=Math.acos((l+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new gn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hh extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),ms.subVectors(this.max,Or),er.subVectors(e.a,Or),tr.subVectors(e.b,Or),nr.subVectors(e.c,Or),fi.subVectors(tr,er),di.subVectors(nr,tr),Ii.subVectors(er,nr);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!yo(t,er,tr,nr,ms)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,er,tr,nr,ms))?!1:(gs.crossVectors(fi,di),t=[gs.x,gs.y,gs.z],yo(t,er,tr,nr,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,ps=new ns,er=new H,tr=new H,nr=new H,fi=new H,di=new H,Ii=new H,Or=new H,ms=new H,gs=new H,Di=new H;function yo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Di.fromArray(i,s);const a=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),u=e.dot(Di),l=t.dot(Di),p=n.dot(Di);if(Math.max(-Math.max(u,l,p),Math.min(u,l,p))>a)return!1}return!0}const md=new ns,Ur=new H,Eo=new H;class so{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Eo)),this.expandByPoint(Ur.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new H,So=new H,_s=new H,pi=new H,Mo=new H,vs=new H,To=new H;class pc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){So.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(So);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_s),a=pi.dot(this.direction),u=-pi.dot(_s),l=pi.lengthSq(),p=Math.abs(1-o*o);let h,d,g,x;if(p>0)if(h=o*u-a,d=o*a-u,x=s*p,h>=0)if(d>=-x)if(d<=x){const E=1/p;h*=E,d*=E,g=h*(h+o*d+2*a)+d*(o*h+d+2*u)+l}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*u)+l;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*u)+l;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-u),s),g=-h*h+d*(d+2*u)+l):d<=x?(h=0,d=Math.min(Math.max(-s,-u),s),g=d*(d+2*u)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-u),s),g=-h*h+d*(d+2*u)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(So).addScaledVector(_s,d),g}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),r=ti.dot(ti)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,u;const l=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),p>=0?(s=(e.min.y-d.y)*p,o=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,o=(e.min.y-d.y)*p),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,u=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,u=(e.min.z-d.z)*h),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,s){Mo.subVectors(t,e),vs.subVectors(n,e),To.crossVectors(Mo,vs);let o=this.direction.dot(To),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const u=a*this.direction.dot(vs.crossVectors(pi,vs));if(u<0)return null;const l=a*this.direction.dot(Mo.cross(pi));if(l<0||u+l>o)return null;const p=-a*pi.dot(To);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,r,s,o,a,u,l,p,h,d,g,x,E,v){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,u,l,p,h,d,g,x,E,v)}set(e,t,n,r,s,o,a,u,l,p,h,d,g,x,E,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=u,m[2]=l,m[6]=p,m[10]=h,m[14]=d,m[3]=g,m[7]=x,m[11]=E,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),l=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*p,g=o*h,x=a*p,E=a*h;t[0]=u*p,t[4]=-u*h,t[8]=l,t[1]=g+x*l,t[5]=d-E*l,t[9]=-a*u,t[2]=E-d*l,t[6]=x+g*l,t[10]=o*u}else if(e.order==="YXZ"){const d=u*p,g=u*h,x=l*p,E=l*h;t[0]=d+E*a,t[4]=x*a-g,t[8]=o*l,t[1]=o*h,t[5]=o*p,t[9]=-a,t[2]=g*a-x,t[6]=E+d*a,t[10]=o*u}else if(e.order==="ZXY"){const d=u*p,g=u*h,x=l*p,E=l*h;t[0]=d-E*a,t[4]=-o*h,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*p,t[9]=E-d*a,t[2]=-o*l,t[6]=a,t[10]=o*u}else if(e.order==="ZYX"){const d=o*p,g=o*h,x=a*p,E=a*h;t[0]=u*p,t[4]=x*l-g,t[8]=d*l+E,t[1]=u*h,t[5]=E*l+d,t[9]=g*l-x,t[2]=-l,t[6]=a*u,t[10]=o*u}else if(e.order==="YZX"){const d=o*u,g=o*l,x=a*u,E=a*l;t[0]=u*p,t[4]=E-d*h,t[8]=x*h+g,t[1]=h,t[5]=o*p,t[9]=-a*p,t[2]=-l*p,t[6]=g*h+x,t[10]=d-E*h}else if(e.order==="XZY"){const d=o*u,g=o*l,x=a*u,E=a*l;t[0]=u*p,t[4]=-h,t[8]=l*p,t[1]=d*h+E,t[5]=o*p,t[9]=g*h-x,t[2]=x*h-g,t[6]=a*p,t[10]=E*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,n){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),mi.crossVectors(n,yn),mi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),mi.crossVectors(n,yn)),mi.normalize(),xs.crossVectors(yn,mi),r[0]=mi.x,r[4]=xs.x,r[8]=yn.x,r[1]=mi.y,r[5]=xs.y,r[9]=yn.y,r[2]=mi.z,r[6]=xs.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],p=n[1],h=n[5],d=n[9],g=n[13],x=n[2],E=n[6],v=n[10],m=n[14],A=n[3],C=n[7],S=n[11],L=n[15],D=r[0],U=r[4],z=r[8],b=r[12],w=r[1],F=r[5],Z=r[9],P=r[13],G=r[2],k=r[6],B=r[10],W=r[14],$=r[3],ue=r[7],fe=r[11],Ee=r[15];return s[0]=o*D+a*w+u*G+l*$,s[4]=o*U+a*F+u*k+l*ue,s[8]=o*z+a*Z+u*B+l*fe,s[12]=o*b+a*P+u*W+l*Ee,s[1]=p*D+h*w+d*G+g*$,s[5]=p*U+h*F+d*k+g*ue,s[9]=p*z+h*Z+d*B+g*fe,s[13]=p*b+h*P+d*W+g*Ee,s[2]=x*D+E*w+v*G+m*$,s[6]=x*U+E*F+v*k+m*ue,s[10]=x*z+E*Z+v*B+m*fe,s[14]=x*b+E*P+v*W+m*Ee,s[3]=A*D+C*w+S*G+L*$,s[7]=A*U+C*F+S*k+L*ue,s[11]=A*z+C*Z+S*B+L*fe,s[15]=A*b+C*P+S*W+L*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],u=e[9],l=e[13],p=e[2],h=e[6],d=e[10],g=e[14],x=e[3],E=e[7],v=e[11],m=e[15];return x*(+s*u*h-r*l*h-s*a*d+n*l*d+r*a*g-n*u*g)+E*(+t*u*g-t*l*d+s*o*d-r*o*g+r*l*p-s*u*p)+v*(+t*l*h-t*a*g-s*o*h+n*o*g+s*a*p-n*l*p)+m*(-r*a*p-t*u*h+t*a*d+r*o*h-n*o*d+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],u=e[6],l=e[7],p=e[8],h=e[9],d=e[10],g=e[11],x=e[12],E=e[13],v=e[14],m=e[15],A=h*v*l-E*d*l+E*u*g-a*v*g-h*u*m+a*d*m,C=x*d*l-p*v*l-x*u*g+o*v*g+p*u*m-o*d*m,S=p*E*l-x*h*l+x*a*g-o*E*g-p*a*m+o*h*m,L=x*h*u-p*E*u-x*a*d+o*E*d+p*a*v-o*h*v,D=t*A+n*C+r*S+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=A*U,e[1]=(E*d*s-h*v*s-E*r*g+n*v*g+h*r*m-n*d*m)*U,e[2]=(a*v*s-E*u*s+E*r*l-n*v*l-a*r*m+n*u*m)*U,e[3]=(h*u*s-a*d*s-h*r*l+n*d*l+a*r*g-n*u*g)*U,e[4]=C*U,e[5]=(p*v*s-x*d*s+x*r*g-t*v*g-p*r*m+t*d*m)*U,e[6]=(x*u*s-o*v*s-x*r*l+t*v*l+o*r*m-t*u*m)*U,e[7]=(o*d*s-p*u*s+p*r*l-t*d*l-o*r*g+t*u*g)*U,e[8]=S*U,e[9]=(x*h*s-p*E*s-x*n*g+t*E*g+p*n*m-t*h*m)*U,e[10]=(o*E*s-x*a*s+x*n*l-t*E*l-o*n*m+t*a*m)*U,e[11]=(p*a*s-o*h*s-p*n*l+t*h*l+o*n*g-t*a*g)*U,e[12]=L*U,e[13]=(p*E*r-x*h*r+x*n*d-t*E*d-p*n*v+t*h*v)*U,e[14]=(x*a*r-o*E*r-x*n*u+t*E*u+o*n*v-t*a*v)*U,e[15]=(o*h*r-p*a*r+p*n*u-t*h*u-o*n*d+t*a*d)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,u=e.z,l=s*o,p=s*a;return this.set(l*o+n,l*a-r*u,l*u+r*a,0,l*a+r*u,p*a+n,p*u-r*o,0,l*u-r*a,p*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,u=t._w,l=s+s,p=o+o,h=a+a,d=s*l,g=s*p,x=s*h,E=o*p,v=o*h,m=a*h,A=u*l,C=u*p,S=u*h,L=n.x,D=n.y,U=n.z;return r[0]=(1-(E+m))*L,r[1]=(g+S)*L,r[2]=(x-C)*L,r[3]=0,r[4]=(g-S)*D,r[5]=(1-(d+m))*D,r[6]=(v+A)*D,r[7]=0,r[8]=(x+C)*U,r[9]=(v-A)*U,r[10]=(1-(d+E))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ir.set(r[0],r[1],r[2]).length();const o=ir.set(r[4],r[5],r[6]).length(),a=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const l=1/s,p=1/o,h=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=p,Un.elements[5]*=p,Un.elements[6]*=p,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=jn,u=!1){const l=this.elements,p=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),g=(n+r)/(n-r);let x,E;if(u)x=s/(o-s),E=o*s/(o-s);else if(a===jn)x=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Ks)x=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=p,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=jn,u=!1){const l=this.elements,p=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),g=-(n+r)/(n-r);let x,E;if(u)x=1/(o-s),E=o/(o-s);else if(a===jn)x=-2/(o-s),E=-(o+s)/(o-s);else if(a===Ks)x=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=p,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new H,Un=new Ut,gd=new H(0,0,0),_d=new H(1,1,1),mi=new H,xs=new H,yn=new H,Xc=new Ut,qc=new qi;class Pn{constructor(e=0,t=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],u=r[1],l=r[5],p=r[9],h=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const jc=new H,rr=new qi,ni=new Ut,ys=new H,Nr=new H,xd=new H,yd=new qi,Yc=new H(1,0,0),Kc=new H(0,1,0),Zc=new H(0,0,1),Jc={type:"added"},Ed={type:"removed"},sr={type:"childadded",child:null},wo={type:"childremoved",child:null};class en extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new H,t=new Pn,n=new qi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new it}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis(Kc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis(Kc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Nr,ys,this.up):ni.lookAt(ys,Nr,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(ni),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,p=u.length;l<p;l++){const h=u[l];s(e.shapes,h)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(e.materials,this.material[u]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(e.animations,u))}}if(t){const a=o(e.geometries),u=o(e.materials),l=o(e.textures),p=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const u=[];for(const l in a){const p=a[l];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new H(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new H,ii=new H,bo=new H,ri=new H,or=new H,ar=new H,Qc=new H,Ao=new H,Ro=new H,Co=new H,Po=new kt,Io=new kt,Do=new kt;class Fn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),ii.subVectors(n,t),bo.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(ii),u=Nn.dot(bo),l=ii.dot(ii),p=ii.dot(bo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(l*u-a*p)*d,x=(o*p-a*u)*d;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,r,s,o,a,u){return this.getBarycoord(e,t,n,r,ri)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ri.x),u.addScaledVector(o,ri.y),u.addScaledVector(a,ri.z),u)}static getInterpolatedAttribute(e,t,n,r,s,o){return Po.setScalar(0),Io.setScalar(0),Do.setScalar(0),Po.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),Do.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Po,s.x),o.addScaledVector(Io,s.y),o.addScaledVector(Do,s.z),o}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),ii.subVectors(e,t),Nn.cross(ii).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;or.subVectors(r,n),ar.subVectors(s,n),Ao.subVectors(e,n);const u=or.dot(Ao),l=ar.dot(Ao);if(u<=0&&l<=0)return t.copy(n);Ro.subVectors(e,r);const p=or.dot(Ro),h=ar.dot(Ro);if(p>=0&&h<=p)return t.copy(r);const d=u*h-p*l;if(d<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(or,o);Co.subVectors(e,s);const g=or.dot(Co),x=ar.dot(Co);if(x>=0&&g<=x)return t.copy(s);const E=g*l-u*x;if(E<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(ar,a);const v=p*x-g*h;if(v<=0&&h-p>=0&&g-x>=0)return Qc.subVectors(s,r),a=(h-p)/(h-p+(g-x)),t.copy(r).addScaledVector(Qc,a);const m=1/(v+E+d);return o=E*m,a=d*m,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=fc(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lo(o,s,e+1/3),this.g=Lo(o,s,e),this.b=Lo(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return xt.workingToColorSpace(sn.copy(this),e),Math.round(dt(sn.r*255,0,255))*65536+Math.round(dt(sn.g*255,0,255))*256+Math.round(dt(sn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(sn.copy(this),t);const n=sn.r,r=sn.g,s=sn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,l;const p=(a+o)/2;if(a===o)u=0,l=0;else{const h=o-a;switch(l=p<=.5?h/(o+a):h/(2-o-a),o){case n:u=(r-s)/h+(r<s?6:0);break;case r:u=(s-n)/h+2;break;case s:u=(n-r)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=p,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=An){xt.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,r=sn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Es);const n=jr(gi.h,Es.h,t),r=jr(gi.s,Es.s,t),s=jr(gi.l,Es.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new ct;ct.NAMES=Vh;let Sd=0;class Rr extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=_r,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gc extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new H,Ss=new lt;let Md=0;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class Gh extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wh extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const Tn=new Ut,Oo=new en,cr=new H,En=new ns,Fr=new ns,Kt=new H;class fn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?Wh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(En.min,Fr.min),En.expandByPoint(Kt),Kt.addVectors(En.max,Fr.max),En.expandByPoint(Kt)):(En.expandByPoint(Fr.min),En.expandByPoint(Fr.max))}En.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],u=this.morphTargetsRelative;for(let l=0,p=a.count;l<p;l++)Kt.fromBufferAttribute(a,l),u&&(cr.fromBufferAttribute(e,l),Kt.add(cr)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],u=[];for(let z=0;z<n.count;z++)a[z]=new H,u[z]=new H;const l=new H,p=new H,h=new H,d=new lt,g=new lt,x=new lt,E=new H,v=new H;function m(z,b,w){l.fromBufferAttribute(n,z),p.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(s,z),g.fromBufferAttribute(s,b),x.fromBufferAttribute(s,w),p.sub(l),h.sub(l),g.sub(d),x.sub(d);const F=1/(g.x*x.y-x.x*g.y);isFinite(F)&&(E.copy(p).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(F),v.copy(h).multiplyScalar(g.x).addScaledVector(p,-x.x).multiplyScalar(F),a[z].add(E),a[b].add(E),a[w].add(E),u[z].add(v),u[b].add(v),u[w].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,b=A.length;z<b;++z){const w=A[z],F=w.start,Z=w.count;for(let P=F,G=F+Z;P<G;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const C=new H,S=new H,L=new H,D=new H;function U(z){L.fromBufferAttribute(r,z),D.copy(L);const b=a[z];C.copy(b),C.sub(L.multiplyScalar(L.dot(b))).normalize(),S.crossVectors(D,b);const F=S.dot(u[z])<0?-1:1;o.setXYZW(z,C.x,C.y,C.z,F)}for(let z=0,b=A.length;z<b;++z){const w=A[z],F=w.start,Z=w.count;for(let P=F,G=F+Z;P<G;P+=3)U(e.getX(P+0)),U(e.getX(P+1)),U(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,u=new H,l=new H,p=new H,h=new H;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),E=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,v),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),a.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),l.fromBufferAttribute(n,v),a.add(p),u.add(p),l.add(p),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),n.setXYZ(d+0,p.x,p.y,p.z),n.setXYZ(d+1,p.x,p.y,p.z),n.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,u){const l=a.array,p=a.itemSize,h=a.normalized,d=new l.constructor(u.length*p);let g=0,x=0;for(let E=0,v=u.length;E<v;E++){a.isInterleavedBufferAttribute?g=u[E]*a.data.stride+a.offset:g=u[E]*p;for(let m=0;m<p;m++)d[x++]=l[g++]}return new kn(d,p,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],l=e(u,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const u=[],l=s[a];for(let p=0,h=l.length;p<h;p++){const d=l[p],g=e(d,n);u.push(g)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],p=[];for(let h=0,d=l.length;h<d;h++){const g=l[h];p.push(g.toJSON(e.data))}p.length>0&&(r[u]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],h=s[l];for(let d=0,g=h.length;d<g;d++)p.push(h[d].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,p=o.length;l<p;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new Ut,Li=new pc,Ms=new so,tl=new H,Ts=new H,ws=new H,bs=new H,Uo=new H,As=new H,nl=new H,Rs=new H;class nt extends en{constructor(e=new fn,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){As.set(0,0,0);for(let u=0,l=s.length;u<l;u++){const p=a[u],h=s[u];p!==0&&(Uo.fromBufferAttribute(h,e),o?As.addScaledVector(Uo,p):As.addScaledVector(Uo.sub(t),p))}t.add(As)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Ms.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ms,tl)===null||Li.origin.distanceToSquared(tl)>(e.far-e.near)**2))&&(el.copy(s).invert(),Li.copy(e.ray).applyMatrix4(el),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=d.length;x<E;x++){const v=d[x],m=o[v.materialIndex],A=Math.max(v.start,g.start),C=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let S=A,L=C;S<L;S+=3){const D=a.getX(S),U=a.getX(S+1),z=a.getX(S+2);r=Cs(this,m,e,n,l,p,h,D,U,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),E=Math.min(a.count,g.start+g.count);for(let v=x,m=E;v<m;v+=3){const A=a.getX(v),C=a.getX(v+1),S=a.getX(v+2);r=Cs(this,o,e,n,l,p,h,A,C,S),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let x=0,E=d.length;x<E;x++){const v=d[x],m=o[v.materialIndex],A=Math.max(v.start,g.start),C=Math.min(u.count,Math.min(v.start+v.count,g.start+g.count));for(let S=A,L=C;S<L;S+=3){const D=S,U=S+1,z=S+2;r=Cs(this,m,e,n,l,p,h,D,U,z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),E=Math.min(u.count,g.start+g.count);for(let v=x,m=E;v<m;v+=3){const A=v,C=v+1,S=v+2;r=Cs(this,o,e,n,l,p,h,A,C,S),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function wd(i,e,t,n,r,s,o,a){let u;if(e.side===mn?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,e.side===wi,a),u===null)return null;Rs.copy(a),Rs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:i}}function Cs(i,e,t,n,r,s,o,a,u,l){i.getVertexPosition(a,Ts),i.getVertexPosition(u,ws),i.getVertexPosition(l,bs);const p=wd(i,e,t,n,Ts,ws,bs,nl);if(p){const h=new H;Fn.getBarycoord(nl,Ts,ws,bs,h),r&&(p.uv=Fn.getInterpolatedAttribute(r,a,u,l,h,new lt)),s&&(p.uv1=Fn.getInterpolatedAttribute(s,a,u,l,h,new lt)),o&&(p.normal=Fn.getInterpolatedAttribute(o,a,u,l,h,new H),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const d={a,b:u,c:l,normal:new H,materialIndex:0};Fn.getNormal(Ts,ws,bs,d.normal),p.face=d,p.barycoord=h}return p}class Ct extends fn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],l=[],p=[],h=[];let d=0,g=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(p,3)),this.setAttribute("uv",new Nt(h,2));function x(E,v,m,A,C,S,L,D,U,z,b){const w=S/U,F=L/z,Z=S/2,P=L/2,G=D/2,k=U+1,B=z+1;let W=0,$=0;const ue=new H;for(let fe=0;fe<B;fe++){const Ee=fe*F-P;for(let Ne=0;Ne<k;Ne++){const rt=Ne*w-Z;ue[E]=rt*A,ue[v]=Ee*C,ue[m]=G,l.push(ue.x,ue.y,ue.z),ue[E]=0,ue[v]=0,ue[m]=D>0?1:-1,p.push(ue.x,ue.y,ue.z),h.push(Ne/U),h.push(1-fe/z),W+=1}}for(let fe=0;fe<z;fe++)for(let Ee=0;Ee<U;Ee++){const Ne=d+Ee+k*fe,rt=d+Ee+k*(fe+1),ht=d+(Ee+1)+k*(fe+1),at=d+(Ee+1)+k*fe;u.push(Ne,rt,at),u.push(rt,ht,at),$+=6}a.addGroup(g,$,b),g+=$,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Tr(i[t]);for(const r in n)e[r]=n[r]}return e}function bd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Ad={clone:Tr,merge:hn};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new H,il=new lt,rl=new lt;class Rn extends Xh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,il,rl),t.subVectors(rl,il)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/l,r*=o.width/u,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,hr=1;class Pd extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(lr,hr,e,t);r.layers=this.layers,this.add(r);const s=new Rn(lr,hr,e,t);s.layers=this.layers,this.add(s);const o=new Rn(lr,hr,e,t);o.layers=this.layers,this.add(o);const a=new Rn(lr,hr,e,t);a.layers=this.layers,this.add(a);const u=new Rn(lr,hr,e,t);u.layers=this.layers,this.add(u);const l=new Rn(lr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,u]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,l,p]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(h,d,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class qh extends gn{constructor(e=[],t=Er,n,r,s,o,a,u,l,p){super(e,t,n,r,s,o,a,u,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ct(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ei});s.uniforms.tEquirect.value=t;const o=new nt(r,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=qn),new Pd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class pn extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,n),m=this._getHandJoint(l,E);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=p.position.distanceTo(h.position),g=.02,x=.005;l.inputState.pinching&&d>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _c{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=n}clone(){return new _c(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ld extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fo=new H,Od=new H,Ud=new it;class zi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fo.subVectors(n,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ud.getNormalMatrix(e),r=this.coplanarPoint(Fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new so,Nd=new lt(.5,.5),Ps=new H;class vc{constructor(e=new zi,t=new zi,n=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],u=s[2],l=s[3],p=s[4],h=s[5],d=s[6],g=s[7],x=s[8],E=s[9],v=s[10],m=s[11],A=s[12],C=s[13],S=s[14],L=s[15];if(r[0].setComponents(l-o,g-p,m-x,L-A).normalize(),r[1].setComponents(l+o,g+p,m+x,L+A).normalize(),r[2].setComponents(l+a,g+h,m+E,L+C).normalize(),r[3].setComponents(l-a,g-h,m-E,L-C).normalize(),n)r[4].setComponents(u,d,v,S).normalize(),r[5].setComponents(l-u,g-d,m-v,L-S).normalize();else if(r[4].setComponents(l-u,g-d,m-v,L-S).normalize(),t===jn)r[5].setComponents(l+u,g+d,m+v,L+S).normalize();else if(t===Ks)r[5].setComponents(u,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);const t=Nd.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xc extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Js=new H,Qs=new H,sl=new Ut,Br=new pc,Is=new so,Bo=new H,ol=new H;class jh extends en{constructor(e=new fn,t=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Js.fromBufferAttribute(t,r-1),Qs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Js.distanceTo(Qs);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;sl.copy(r).invert(),Br.copy(e.ray).applyMatrix4(sl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=this.isLineSegments?2:1,p=n.index,d=n.attributes.position;if(p!==null){const g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let E=g,v=x-1;E<v;E+=l){const m=p.getX(E),A=p.getX(E+1),C=Ds(this,e,Br,u,m,A,E);C&&t.push(C)}if(this.isLineLoop){const E=p.getX(x-1),v=p.getX(g),m=Ds(this,e,Br,u,E,v,x-1);m&&t.push(m)}}else{const g=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let E=g,v=x-1;E<v;E+=l){const m=Ds(this,e,Br,u,E,E+1,E);m&&t.push(m)}if(this.isLineLoop){const E=Ds(this,e,Br,u,x-1,g,x-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ds(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Js.fromBufferAttribute(a,r),Qs.fromBufferAttribute(a,s),t.distanceSqToSegment(Js,Qs,Bo,ol)>n)return;Bo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Bo);if(!(l<e.near||l>e.far))return{distance:l,point:ol.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const al=new H,cl=new H;class Fd extends jh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)al.fromBufferAttribute(t,r),cl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+al.distanceTo(cl);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yh extends gn{constructor(e,t,n=$i,r,s,o,a=zn,u=zn,l,p=Zr,h=1){if(p!==Zr&&p!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,a,u,p,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yc extends fn{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],u=[],l=[],p=t/2,h=Math.PI/2*e,d=t,g=2*h+d,x=n*2+s,E=r+1,v=new H,m=new H;for(let A=0;A<=x;A++){let C=0,S=0,L=0,D=0;if(A<=n){const b=A/n,w=b*Math.PI/2;S=-p-e*Math.cos(w),L=e*Math.sin(w),D=-e*Math.cos(w),C=b*h}else if(A<=n+s){const b=(A-n)/s;S=-p+b*t,L=e,D=0,C=h+b*d}else{const b=(A-n-s)/n,w=b*Math.PI/2;S=p+e*Math.sin(w),L=e*Math.cos(w),D=e*Math.sin(w),C=h+d+b*h}const U=Math.max(0,Math.min(1,C/g));let z=0;A===0?z=.5/r:A===x&&(z=-.5/r);for(let b=0;b<=r;b++){const w=b/r,F=w*Math.PI*2,Z=Math.sin(F),P=Math.cos(F);m.x=-L*P,m.y=S,m.z=L*Z,a.push(m.x,m.y,m.z),v.set(-L*P,D,L*Z),v.normalize(),u.push(v.x,v.y,v.z),l.push(w+z,U)}if(A>0){const b=(A-1)*E;for(let w=0;w<r;w++){const F=b+w,Z=b+w+1,P=A*E+w,G=A*E+w+1;o.push(F,Z,P),o.push(Z,G,P)}}}this.setIndex(o),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sn extends fn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:u};const l=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],d=[],g=[];let x=0;const E=[],v=n/2;let m=0;A(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(p),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(g,2));function A(){const S=new H,L=new H;let D=0;const U=(t-e)/n;for(let z=0;z<=s;z++){const b=[],w=z/s,F=w*(t-e)+e;for(let Z=0;Z<=r;Z++){const P=Z/r,G=P*u+a,k=Math.sin(G),B=Math.cos(G);L.x=F*k,L.y=-w*n+v,L.z=F*B,h.push(L.x,L.y,L.z),S.set(k,U,B).normalize(),d.push(S.x,S.y,S.z),g.push(P,1-w),b.push(x++)}E.push(b)}for(let z=0;z<r;z++)for(let b=0;b<s;b++){const w=E[b][z],F=E[b+1][z],Z=E[b+1][z+1],P=E[b][z+1];(e>0||b!==0)&&(p.push(w,F,P),D+=3),(t>0||b!==s-1)&&(p.push(F,Z,P),D+=3)}l.addGroup(m,D,0),m+=D}function C(S){const L=x,D=new lt,U=new H;let z=0;const b=S===!0?e:t,w=S===!0?1:-1;for(let Z=1;Z<=r;Z++)h.push(0,v*w,0),d.push(0,w,0),g.push(.5,.5),x++;const F=x;for(let Z=0;Z<=r;Z++){const G=Z/r*u+a,k=Math.cos(G),B=Math.sin(G);U.x=b*B,U.y=v*w,U.z=b*k,h.push(U.x,U.y,U.z),d.push(0,w,0),D.x=k*.5+.5,D.y=B*.5*w+.5,g.push(D.x,D.y),x++}for(let Z=0;Z<r;Z++){const P=L+Z,G=F+Z;S===!0?p.push(G,G+1,P):p.push(G+1,G,P),z+=3}l.addGroup(m,z,S===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ec extends Sn{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ec(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends fn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),p(),this.setAttribute("position",new Nt(s,3)),this.setAttribute("normal",new Nt(s.slice(),3)),this.setAttribute("uv",new Nt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const C=new H,S=new H,L=new H;for(let D=0;D<t.length;D+=3)g(t[D+0],C),g(t[D+1],S),g(t[D+2],L),u(C,S,L,A)}function u(A,C,S,L){const D=L+1,U=[];for(let z=0;z<=D;z++){U[z]=[];const b=A.clone().lerp(S,z/D),w=C.clone().lerp(S,z/D),F=D-z;for(let Z=0;Z<=F;Z++)Z===0&&z===D?U[z][Z]=b:U[z][Z]=b.clone().lerp(w,Z/F)}for(let z=0;z<D;z++)for(let b=0;b<2*(D-z)-1;b++){const w=Math.floor(b/2);b%2===0?(d(U[z][w+1]),d(U[z+1][w]),d(U[z][w])):(d(U[z][w+1]),d(U[z+1][w+1]),d(U[z+1][w]))}}function l(A){const C=new H;for(let S=0;S<s.length;S+=3)C.x=s[S+0],C.y=s[S+1],C.z=s[S+2],C.normalize().multiplyScalar(A),s[S+0]=C.x,s[S+1]=C.y,s[S+2]=C.z}function p(){const A=new H;for(let C=0;C<s.length;C+=3){A.x=s[C+0],A.y=s[C+1],A.z=s[C+2];const S=v(A)/2/Math.PI+.5,L=m(A)/Math.PI+.5;o.push(S,1-L)}x(),h()}function h(){for(let A=0;A<o.length;A+=6){const C=o[A+0],S=o[A+2],L=o[A+4],D=Math.max(C,S,L),U=Math.min(C,S,L);D>.9&&U<.1&&(C<.2&&(o[A+0]+=1),S<.2&&(o[A+2]+=1),L<.2&&(o[A+4]+=1))}}function d(A){s.push(A.x,A.y,A.z)}function g(A,C){const S=A*3;C.x=e[S+0],C.y=e[S+1],C.z=e[S+2]}function x(){const A=new H,C=new H,S=new H,L=new H,D=new lt,U=new lt,z=new lt;for(let b=0,w=0;b<s.length;b+=9,w+=6){A.set(s[b+0],s[b+1],s[b+2]),C.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),D.set(o[w+0],o[w+1]),U.set(o[w+2],o[w+3]),z.set(o[w+4],o[w+5]),L.copy(A).add(C).add(S).divideScalar(3);const F=v(L);E(D,w+0,A,F),E(U,w+2,C,F),E(z,w+4,S,F)}}function E(A,C,S,L){L<0&&A.x===1&&(o[C]=A.x-1),S.x===0&&S.z===0&&(o[C]=L/2/Math.PI+.5)}function v(A){return Math.atan2(A.z,-A.x)}function m(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.vertices,e.indices,e.radius,e.details)}}class Mc extends Sc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mc(e.radius,e.detail)}}class is extends fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),u=Math.floor(r),l=a+1,p=u+1,h=e/a,d=t/u,g=[],x=[],E=[],v=[];for(let m=0;m<p;m++){const A=m*d-o;for(let C=0;C<l;C++){const S=C*h-s;x.push(S,-A,0),E.push(0,0,1),v.push(C/a),v.push(1-m/u)}}for(let m=0;m<u;m++)for(let A=0;A<a;A++){const C=A+l*m,S=A+l*(m+1),L=A+1+l*(m+1),D=A+1+l*m;g.push(C,S,D),g.push(S,L,D)}this.setIndex(g),this.setAttribute("position",new Nt(x,3)),this.setAttribute("normal",new Nt(E,3)),this.setAttribute("uv",new Nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends fn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+a,Math.PI);let l=0;const p=[],h=new H,d=new H,g=[],x=[],E=[],v=[];for(let m=0;m<=n;m++){const A=[],C=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&u===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const D=L/t;h.x=-e*Math.cos(r+D*s)*Math.sin(o+C*a),h.y=e*Math.cos(o+C*a),h.z=e*Math.sin(r+D*s)*Math.sin(o+C*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),v.push(D+S,1-C),A.push(l++)}p.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){const C=p[m][A+1],S=p[m][A],L=p[m+1][A],D=p[m+1][A+1];(m!==0||o>0)&&g.push(C,S,D),(m!==n-1||u<Math.PI)&&g.push(S,L,D)}this.setIndex(g),this.setAttribute("position",new Nt(x,3)),this.setAttribute("normal",new Nt(E,3)),this.setAttribute("uv",new Nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cn extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bd extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zd extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zh extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kd extends Zh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zo=new Ut,ll=new H,hl=new H;class Hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jh extends Xh{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vd extends Hd{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ul extends Zh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gd extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fl=new Ut;class Qh{constructor(e,t,n=0,r=1/0){this.ray=new pc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fl),this}intersectObject(e,t=!0,n=[]){return Za(e,this,n,t),n.sort(dl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Za(e[r],this,n,t);return n.sort(dl),n}}function dl(i,e){return i.distance-e.distance}function Za(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Za(s[o],e,t,!0)}}class Wd extends Fd{constructor(e=10,t=10,n=4473924,r=8947848){n=new ct(n),r=new ct(r);const s=t/2,o=e/t,a=e/2,u=[],l=[];for(let d=0,g=0,x=-a;d<=t;d++,x+=o){u.push(-a,0,x,a,0,x),u.push(x,0,-a,x,0,a);const E=d===s?n:r;E.toArray(l,g),g+=3,E.toArray(l,g),g+=3,E.toArray(l,g),g+=3,E.toArray(l,g),g+=3}const p=new fn;p.setAttribute("position",new Nt(u,3)),p.setAttribute("color",new Nt(l,3));const h=new xc({vertexColors:!0,toneMapped:!1});super(p,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function pl(i,e,t,n){const r=$d(n);switch(t){case Oh:return i*e;case Nh:return i*e/r.components*r.byteLength;case lc:return i*e/r.components*r.byteLength;case Fh:return i*e*2/r.components*r.byteLength;case hc:return i*e*2/r.components*r.byteLength;case Uh:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case uc:return i*e*4/r.components*r.byteLength;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $s:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case ba:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case wa:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case $a:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qa:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(i){switch(i){case Kn:case Ph:return{byteLength:1,components:1};case Yr:case Ih:case ts:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case $i:case sc:case ai:return{byteLength:4,components:1};case Dh:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function eu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Xd(i){const e=new WeakMap;function t(a,u){const l=a.array,p=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,l,p),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,u,l){const p=u.array,h=u.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,p);else{h.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<h.length;g++){const x=h[d],E=h[g];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++d,h[d]=E)}h.length=d+1;for(let g=0,x=h.length;g<x;g++){const E=h[g];i.bufferSubData(l,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);u&&(i.deleteBuffer(u.buffer),e.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=e.get(a);(!p||p.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,u));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,u),l.version=a.version}}return{get:r,remove:s,update:o}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:qd,alphahash_pars_fragment:jd,alphamap_fragment:Yd,alphamap_pars_fragment:Kd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:sp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:cp,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:fp,color_pars_fragment:dp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:vp,displacementmap_pars_vertex:xp,displacementmap_vertex:yp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Sp,colorspace_fragment:Mp,colorspace_pars_fragment:Tp,envmap_fragment:wp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:Bp,lights_toon_fragment:kp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Wp,lights_physical_pars_fragment:$p,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:jp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:rm,morphinstance_vertex:sm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:cm,morphtarget_vertex:lm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:vm,iridescence_pars_fragment:xm,opaque_fragment:ym,packing:Em,premultiplied_alpha_fragment:Sm,project_vertex:Mm,dithering_fragment:Tm,dithering_pars_fragment:wm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Dm,skinning_pars_vertex:Lm,skinning_vertex:Om,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:$m,background_vert:Xm,background_frag:qm,backgroundCube_vert:jm,backgroundCube_frag:Ym,cube_vert:Km,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:og,meshbasic_frag:ag,meshlambert_vert:cg,meshlambert_frag:lg,meshmatcap_vert:hg,meshmatcap_frag:ug,meshnormal_vert:fg,meshnormal_frag:dg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:_g,meshtoon_vert:vg,meshtoon_frag:xg,points_vert:yg,points_frag:Eg,shadow_vert:Sg,shadow_frag:Mg,sprite_vert:Tg,sprite_frag:wg},Ae={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Wn={basic:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:hn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:hn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ct(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:hn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:hn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:hn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:hn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:hn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:hn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:hn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:hn([Ae.lights,Ae.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Wn.physical={uniforms:hn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ls={r:0,b:0,g:0},Ui=new Pn,bg=new Ut;function Ag(i,e,t,n,r,s,o){const a=new ct(0);let u=s===!0?0:1,l,p,h=null,d=0,g=null;function x(C){let S=C.isScene===!0?C.background:null;return S&&S.isTexture&&(S=(C.backgroundBlurriness>0?t:e).get(S)),S}function E(C){let S=!1;const L=x(C);L===null?m(a,u):L&&L.isColor&&(m(L,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(C,S){const L=x(S);L&&(L.isCubeTexture||L.mapping===ro)?(p===void 0&&(p=new nt(new Ct(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Tr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Ui.copy(S.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Ui)),p.material.toneMapped=xt.getTransfer(L.colorSpace)!==Mt,(h!==L||d!==L.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,h=L,d=L.version,g=i.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new nt(new is(2,2),new bi({name:"BackgroundMaterial",uniforms:Tr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xt.getTransfer(L.colorSpace)!==Mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,d=L.version,g=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,S){C.getRGB(Ls,$h(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,S,o)}function A(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,S=1){a.set(C),u=S,m(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,m(a,u)},render:E,addToRenderList:v,dispose:A}}function Rg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(w,F,Z,P,G){let k=!1;const B=h(P,Z,F);s!==B&&(s=B,l(s.object)),k=g(w,P,Z,G),k&&x(w,P,Z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(w,F,Z,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function u(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function p(w){return i.deleteVertexArray(w)}function h(w,F,Z){const P=Z.wireframe===!0;let G=n[w.id];G===void 0&&(G={},n[w.id]=G);let k=G[F.id];k===void 0&&(k={},G[F.id]=k);let B=k[P];return B===void 0&&(B=d(u()),k[P]=B),B}function d(w){const F=[],Z=[],P=[];for(let G=0;G<t;G++)F[G]=0,Z[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:P,object:w,attributes:{},index:null}}function g(w,F,Z,P){const G=s.attributes,k=F.attributes;let B=0;const W=Z.getAttributes();for(const $ in W)if(W[$].location>=0){const fe=G[$];let Ee=k[$];if(Ee===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;B++}return s.attributesNum!==B||s.index!==P}function x(w,F,Z,P){const G={},k=F.attributes;let B=0;const W=Z.getAttributes();for(const $ in W)if(W[$].location>=0){let fe=k[$];fe===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),G[$]=Ee,B++}s.attributes=G,s.attributesNum=B,s.index=P}function E(){const w=s.newAttributes;for(let F=0,Z=w.length;F<Z;F++)w[F]=0}function v(w){m(w,0)}function m(w,F){const Z=s.newAttributes,P=s.enabledAttributes,G=s.attributeDivisors;Z[w]=1,P[w]===0&&(i.enableVertexAttribArray(w),P[w]=1),G[w]!==F&&(i.vertexAttribDivisor(w,F),G[w]=F)}function A(){const w=s.newAttributes,F=s.enabledAttributes;for(let Z=0,P=F.length;Z<P;Z++)F[Z]!==w[Z]&&(i.disableVertexAttribArray(Z),F[Z]=0)}function C(w,F,Z,P,G,k,B){B===!0?i.vertexAttribIPointer(w,F,Z,G,k):i.vertexAttribPointer(w,F,Z,P,G,k)}function S(w,F,Z,P){E();const G=P.attributes,k=Z.getAttributes(),B=F.defaultAttributeValues;for(const W in k){const $=k[W];if($.location>=0){let ue=G[W];if(ue===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const fe=ue.normalized,Ee=ue.itemSize,Ne=e.get(ue);if(Ne===void 0)continue;const rt=Ne.buffer,ht=Ne.type,at=Ne.bytesPerElement,he=ht===i.INT||ht===i.UNSIGNED_INT||ue.gpuType===sc;if(ue.isInterleavedBufferAttribute){const de=ue.data,Ie=de.stride,Ze=ue.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<$.locationSize;He++)m($.location+He,de.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<$.locationSize;He++)v($.location+He);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let He=0;He<$.locationSize;He++)C($.location+He,Ee/$.locationSize,ht,fe,Ie*at,(Ze+Ee/$.locationSize*He)*at,he)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<$.locationSize;de++)m($.location+de,ue.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<$.locationSize;de++)v($.location+de);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let de=0;de<$.locationSize;de++)C($.location+de,Ee/$.locationSize,ht,fe,Ee*at,Ee/$.locationSize*de*at,he)}}else if(B!==void 0){const fe=B[W];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv($.location,fe);break;case 3:i.vertexAttrib3fv($.location,fe);break;case 4:i.vertexAttrib4fv($.location,fe);break;default:i.vertexAttrib1fv($.location,fe)}}}}A()}function L(){z();for(const w in n){const F=n[w];for(const Z in F){const P=F[Z];for(const G in P)p(P[G].object),delete P[G];delete F[Z]}delete n[w]}}function D(w){if(n[w.id]===void 0)return;const F=n[w.id];for(const Z in F){const P=F[Z];for(const G in P)p(P[G].object),delete P[G];delete F[Z]}delete n[w.id]}function U(w){for(const F in n){const Z=n[F];if(Z[w.id]===void 0)continue;const P=Z[w.id];for(const G in P)p(P[G].object),delete P[G];delete Z[w.id]}}function z(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:v,disableUnusedAttributes:A}}function Cg(i,e,t){let n;function r(l){n=l}function s(l,p){i.drawArrays(n,l,p),t.update(p,n,1)}function o(l,p,h){h!==0&&(i.drawArraysInstanced(n,l,p,h),t.update(p,n,h))}function a(l,p,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,p,0,h);let g=0;for(let x=0;x<h;x++)g+=p[x];t.update(g,n,1)}function u(l,p,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<l.length;x++)o(l[x],p[x],d[x]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,p,0,d,0,h);let x=0;for(let E=0;E<h;E++)x+=p[E]*d[E];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function Pg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(U){return!(U!==Bn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const z=U===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Kn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ai&&!z)}function u(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=u(l);p!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:S,vertexTextures:L,maxSamples:D}}function Ig(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new zi,a=new it,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||r;return r=d,n=h.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=p(h,d,0)},this.setState=function(h,d,g){const x=h.clippingPlanes,E=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||x===null||x.length===0||s&&!v)s?p(null):l();else{const A=s?0:n,C=A*4;let S=m.clippingState||null;u.value=S,S=p(x,d,C,g);for(let L=0;L!==C;++L)S[L]=t[L];m.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(h,d,g,x){const E=h!==null?h.length:0;let v=null;if(E!==0){if(v=u.value,x!==!0||v===null){const m=g+E*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(v===null||v.length<m)&&(v=new Float32Array(m));for(let C=0,S=g;C!==E;++C,S+=4)o.copy(h[C]).applyMatrix4(A,a),o.normal.toArray(v,S),v[S+3]=o.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function Dg(i){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=Er:a===ya&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===ya)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const l=new Id(u.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const gr=4,ml=[.125,.215,.35,.446,.526,.582],Vi=20,ko=new Jh,gl=new ct;let Ho=null,Vo=0,Go=0,Wo=!1;const ki=(1+Math.sqrt(5))/2,ur=1/ki,_l=[new H(-ki,ur,0),new H(ki,ur,0),new H(-ur,0,ki),new H(ur,0,ki),new H(0,ki,-ur),new H(0,ki,ur),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Lg=new H;class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Lg}=s;Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,a),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Vo,Go),this._renderer.xr.enabled=Wo,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ts,format:Bn,colorSpace:Mr,depthBuffer:!1},r=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(s)),this._blurMaterial=Ug(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,r,s){const u=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(gl),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const E=new gc({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),v=new nt(new Ct,E);let m=!1;const A=e.background;A?A.isColor&&(E.color.copy(A),e.background=null,m=!0):(E.color.copy(gl),m=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(u.up.set(0,l[C],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+p[C],s.y,s.z)):S===1?(u.up.set(0,0,l[C]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+p[C],s.z)):(u.up.set(0,l[C],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+p[C]));const L=this._cubeSize;Os(r,S*L,C>2?L:0,L,L),h.setRenderTarget(r),m&&h.render(v,u),h.render(e,u)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=g,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const u=this._cubeSize;Os(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_l[(r-s-1)%_l.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,h=new nt(this._lodPlanes[r],l),d=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Vi-1),E=s/x,v=isFinite(s)?1+Math.floor(p*E):Vi;v>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vi}`);const m=[];let A=0;for(let U=0;U<Vi;++U){const z=U/E,b=Math.exp(-z*z/2);m.push(b),U===0?A+=b:U<v&&(A+=2*b)}for(let U=0;U<m.length;U++)m[U]=m[U]/A;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:C}=this;d.dTheta.value=x,d.mipInt.value=C-n;const S=this._sizeLods[r],L=3*S*(r>C-gr?r-C+gr:0),D=4*(this._cubeSize-S);Os(t,L,D,3*S,2*S),u.setRenderTarget(t),u.render(h,ko)}}function Og(i){const e=[],t=[],n=[];let r=i;const s=i-gr+1+ml.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let u=1/a;o>i-gr?u=ml[o-i+gr-1]:o===0&&(u=0),n.push(u);const l=1/(a-2),p=-l,h=1+l,d=[p,p,h,p,h,h,p,p,h,h,p,h],g=6,x=6,E=3,v=2,m=1,A=new Float32Array(E*x*g),C=new Float32Array(v*x*g),S=new Float32Array(m*x*g);for(let D=0;D<g;D++){const U=D%3*2/3-1,z=D>2?0:-1,b=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];A.set(b,E*x*D),C.set(d,v*x*D);const w=[D,D,D,D,D,D];S.set(w,m*x*D)}const L=new fn;L.setAttribute("position",new kn(A,E)),L.setAttribute("uv",new kn(C,v)),L.setAttribute("faceIndex",new kn(S,m)),e.push(L),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ug(i,e,t){const n=new Float32Array(Vi),r=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yl(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function El(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===xa||u===ya,p=u===Er||u===Sr;if(l||p){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new vl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return l&&g&&g.height>0||p&&g&&r(g)?(t===null&&(t=new vl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let u=0;const l=6;for(let p=0;p<l;p++)a[p]!==void 0&&u++;return u===l}function s(a){const u=a.target;u.removeEventListener("dispose",s);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Fg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bg(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function u(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER)}function l(h){const d=[],g=h.index,x=h.attributes.position;let E=0;if(g!==null){const A=g.array;E=g.version;for(let C=0,S=A.length;C<S;C+=3){const L=A[C+0],D=A[C+1],U=A[C+2];d.push(L,D,D,U,U,L)}}else if(x!==void 0){const A=x.array;E=x.version;for(let C=0,S=A.length/3-1;C<S;C+=3){const L=C+0,D=C+1,U=C+2;d.push(L,D,D,U,U,L)}}else return;const v=new(kh(d)?Wh:Gh)(d,1);v.version=E;const m=s.get(h);m&&e.remove(m),s.set(h,v)}function p(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:u,getWireframeAttribute:p}}function zg(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function u(d,g){i.drawElements(n,g,s,d*o),t.update(g,n,1)}function l(d,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,d*o,x),t.update(g,n,x))}function p(d,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,d,0,x);let v=0;for(let m=0;m<x;m++)v+=g[m];t.update(v,n,1)}function h(d,g,x,E){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<d.length;m++)l(d[m]/o,g[m],E[m]);else{v.multiDrawElementsInstancedWEBGL(n,g,0,s,d,0,E,0,x);let m=0;for(let A=0;A<x;A++)m+=g[A]*E[A];t.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=l,this.renderMultiDraw=p,this.renderMultiDrawInstances=h}function kg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hg(i,e,t){const n=new WeakMap,r=new kt;function s(o,a,u){const l=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=p!==void 0?p.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var g=w;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),v===!0&&(S=3);let L=a.attributes.position.count*S,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*D*4*h),z=new Hh(U,L,D,h);z.type=ai,z.needsUpdate=!0;const b=S*4;for(let F=0;F<h;F++){const Z=m[F],P=A[F],G=C[F],k=L*D*4*F;for(let B=0;B<Z.count;B++){const W=B*b;x===!0&&(r.fromBufferAttribute(Z,B),U[k+W+0]=r.x,U[k+W+1]=r.y,U[k+W+2]=r.z,U[k+W+3]=0),E===!0&&(r.fromBufferAttribute(P,B),U[k+W+4]=r.x,U[k+W+5]=r.y,U[k+W+6]=r.z,U[k+W+7]=0),v===!0&&(r.fromBufferAttribute(G,B),U[k+W+8]=r.x,U[k+W+9]=r.y,U[k+W+10]=r.z,U[k+W+11]=G.itemSize===4?r.w:1)}}d={count:h,texture:z,size:new lt(L,D)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let v=0;v<l.length;v++)x+=l[v];const E=a.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Vg(i,e,t,n){let r=new WeakMap;function s(u){const l=n.render.frame,p=u.geometry,h=e.get(u,p);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,l))),u.isSkinnedMesh){const d=u.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const tu=new gn,Sl=new Yh(1,1),nu=new Hh,iu=new pd,ru=new qh,Ml=[],Tl=[],wl=new Float32Array(16),bl=new Float32Array(9),Al=new Float32Array(4);function Cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ml[r];if(s===void 0&&(s=new Float32Array(r),Ml[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),qt(t,n)}}function jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;bl.set(n),i.uniformMatrix3fv(this.addr,!1,bl),qt(t,n)}}function Yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),qt(t,n)}}function Kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function e0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function r0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sl.compareFunction=zh,s=Sl):s=tu,t.setTexture2D(e||s,r)}function s0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iu,r)}function o0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ru,r)}function a0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nu,r)}function c0(i){switch(i){case 5126:return Gg;case 35664:return Wg;case 35665:return $g;case 35666:return Xg;case 35674:return qg;case 35675:return jg;case 35676:return Yg;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(i,e){i.uniform1fv(this.addr,e)}function h0(i,e){const t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function u0(i,e){const t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function f0(i,e){const t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function d0(i,e){const t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p0(i,e){const t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m0(i,e){const t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g0(i,e){i.uniform1iv(this.addr,e)}function _0(i,e){i.uniform2iv(this.addr,e)}function v0(i,e){i.uniform3iv(this.addr,e)}function x0(i,e){i.uniform4iv(this.addr,e)}function y0(i,e){i.uniform1uiv(this.addr,e)}function E0(i,e){i.uniform2uiv(this.addr,e)}function S0(i,e){i.uniform3uiv(this.addr,e)}function M0(i,e){i.uniform4uiv(this.addr,e)}function T0(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||tu,s[o])}function w0(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||iu,s[o])}function b0(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ru,s[o])}function A0(i,e,t){const n=this.cache,r=e.length,s=oo(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nu,s[o])}function R0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return E0;case 36295:return S0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return A0}}class C0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c0(t.type)}}class P0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Rl(i,e){i.seq.push(e),i.map[e.id]=e}function D0(i,e,t){const n=i.name,r=n.length;for($o.lastIndex=0;;){const s=$o.exec(n),o=$o.lastIndex;let a=s[1];const u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===r){Rl(t,l===void 0?new C0(a,i,e):new P0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new I0(a),Rl(t,h)),t=h}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);D0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L0=37297;let O0=0;function U0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Pl=new it;function N0(i){xt._getMatrix(Pl,xt.workingColorSpace,i);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Ys:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+U0(i.getShaderSource(e),a)}else return s}function F0(i,e){const t=N0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B0(i,e){let t;switch(e){case Af:t="Linear";break;case Rf:t="Reinhard";break;case Cf:t="Cineon";break;case Pf:t="ACESFilmic";break;case Df:t="AgX";break;case Lf:t="Neutral";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new H;function z0(){xt.getLuminanceCoefficients(Us);const i=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function H0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wr(i){return i!==""}function Dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(G0,$0)}const W0=new Map;function $0(i,e){let t=st[e];if(t===void 0){const n=W0.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(i){return i.replace(X0,q0)}function q0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ul(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===of?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Y0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Sr:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Sr&&(e="ENVMAP_MODE_REFRACTION"),e}function Z0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case wf:e="ENVMAP_BLENDING_MIX";break;case bf:e="ENVMAP_BLENDING_ADD";break}return e}function J0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const u=j0(t),l=Y0(t),p=K0(t),h=Z0(t),d=J0(t),g=k0(t),x=H0(s),E=r.createProgram();let v,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(v=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?st.tonemapping_pars_fragment:"",t.toneMapping!==Si?B0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,F0("linearToOutputTexel",t.outputColorSpace),z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Ja(o),o=Dl(o,t),o=Ll(o,t),a=Ja(a),a=Dl(a,t),a=Ll(a,t),o=Ol(o),a=Ol(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const C=A+v+o,S=A+m+a,L=Cl(r,r.VERTEX_SHADER,C),D=Cl(r,r.FRAGMENT_SHADER,S);r.attachShader(E,L),r.attachShader(E,D),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function U(F){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(E)||"",P=r.getShaderInfoLog(L)||"",G=r.getShaderInfoLog(D)||"",k=Z.trim(),B=P.trim(),W=G.trim();let $=!0,ue=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,L,D);else{const fe=Il(r,L,"vertex"),Ee=Il(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+fe+`
`+Ee)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(ue=!1);ue&&(F.diagnostics={runnable:$,programLog:k,vertexShader:{log:B,prefix:v},fragmentShader:{log:W,prefix:m}})}r.deleteShader(L),r.deleteShader(D),z=new qs(r,E),b=V0(r,E)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(E,L0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=D,this}let e_=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new n_(e),t.set(e,n)),n}}class n_{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}}function i_(i,e,t,n,r,s,o){const a=new mc,u=new t_,l=new Set,p=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,w,F,Z,P){const G=Z.fog,k=P.geometry,B=b.isMeshStandardMaterial?Z.environment:null,W=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),$=W&&W.mapping===ro?W.image.height:null,ue=x[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const fe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let Ne=0;k.morphAttributes.position!==void 0&&(Ne=1),k.morphAttributes.normal!==void 0&&(Ne=2),k.morphAttributes.color!==void 0&&(Ne=3);let rt,ht,at,he;if(ue){const gt=Wn[ue];rt=gt.vertexShader,ht=gt.fragmentShader}else rt=b.vertexShader,ht=b.fragmentShader,u.update(b),at=u.getVertexShaderID(b),he=u.getFragmentShaderID(b);const de=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ze=P.isInstancedMesh===!0,He=P.isBatchedMesh===!0,ut=!!b.map,jt=!!b.matcap,N=!!W,At=!!b.aoMap,tt=!!b.lightMap,Je=!!b.bumpMap,Be=!!b.normalMap,Tt=!!b.displacementMap,ze=!!b.emissiveMap,je=!!b.metalnessMap,Pt=!!b.roughnessMap,It=b.anisotropy>0,I=b.clearcoat>0,T=b.dispersion>0,J=b.iridescence>0,le=b.sheen>0,pe=b.transmission>0,ae=It&&!!b.anisotropyMap,Xe=I&&!!b.clearcoatMap,Se=I&&!!b.clearcoatNormalMap,We=I&&!!b.clearcoatRoughnessMap,Ue=J&&!!b.iridescenceMap,ve=J&&!!b.iridescenceThicknessMap,De=le&&!!b.sheenColorMap,$e=le&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,be=!!b.specularColorMap,Ye=!!b.specularIntensityMap,V=pe&&!!b.transmissionMap,ye=pe&&!!b.thicknessMap,_e=!!b.gradientMap,Le=!!b.alphaMap,ge=b.alphaTest>0,ce=!!b.alphaHash,Ve=!!b.extensions;let Qe=Si;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const yt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:ht,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:He,batchingColor:He&&P._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&P.instanceColor!==null,instancingMorph:Ze&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mr,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:jt,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:$,aoMap:At,lightMap:tt,bumpMap:Je,normalMap:Be,displacementMap:d&&Tt,emissiveMap:ze,normalMapObjectSpace:Be&&b.normalMapType===Ff,normalMapTangentSpace:Be&&b.normalMapType===Bh,metalnessMap:je,roughnessMap:Pt,anisotropy:It,anisotropyMap:ae,clearcoat:I,clearcoatMap:Xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:We,dispersion:T,iridescence:J,iridescenceMap:Ue,iridescenceThicknessMap:ve,sheen:le,sheenColorMap:De,sheenRoughnessMap:$e,specularMap:Ge,specularColorMap:be,specularIntensityMap:Ye,transmission:pe,transmissionMap:V,thicknessMap:ye,gradientMap:_e,opaque:b.transparent===!1&&b.blending===_r&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:ce,combine:b.combine,mapUv:ut&&E(b.map.channel),aoMapUv:At&&E(b.aoMap.channel),lightMapUv:tt&&E(b.lightMap.channel),bumpMapUv:Je&&E(b.bumpMap.channel),normalMapUv:Be&&E(b.normalMap.channel),displacementMapUv:Tt&&E(b.displacementMap.channel),emissiveMapUv:ze&&E(b.emissiveMap.channel),metalnessMapUv:je&&E(b.metalnessMap.channel),roughnessMapUv:Pt&&E(b.roughnessMap.channel),anisotropyMapUv:ae&&E(b.anisotropyMap.channel),clearcoatMapUv:Xe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Se&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&E(b.sheenRoughnessMap.channel),specularMapUv:Ge&&E(b.specularMap.channel),specularColorMapUv:be&&E(b.specularColorMap.channel),specularIntensityMapUv:Ye&&E(b.specularIntensityMap.channel),transmissionMapUv:V&&E(b.transmissionMap.channel),thicknessMapUv:ye&&E(b.thicknessMap.channel),alphaMapUv:Le&&E(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Be||It),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(ut||Le),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ie,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:ze&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)w.push(F),w.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(A(w,b),C(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function A(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function C(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const w=x[b.type];let F;if(w){const Z=Wn[w];F=Ad.clone(Z.uniforms)}else F=b.uniforms;return F}function L(b,w){let F;for(let Z=0,P=p.length;Z<P;Z++){const G=p[Z];if(G.cacheKey===w){F=G,++F.usedTimes;break}}return F===void 0&&(F=new Q0(i,w,b,s),p.push(F)),F}function D(b){if(--b.usedTimes===0){const w=p.indexOf(b);p[w]=p[p.length-1],p.pop(),b.destroy()}}function U(b){u.remove(b)}function z(){u.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:L,releaseProgram:D,releaseShaderCache:U,programs:p,dispose:z}}function r_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,u){i.get(o)[a]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function s_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,g,x,E,v){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:g,groupOrder:x,renderOrder:h.renderOrder,z:E,group:v},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=g,m.groupOrder=x,m.renderOrder=h.renderOrder,m.z=E,m.group=v),e++,m}function a(h,d,g,x,E,v){const m=o(h,d,g,x,E,v);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function u(h,d,g,x,E,v){const m=o(h,d,g,x,E,v);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||s_),n.length>1&&n.sort(d||Nl),r.length>1&&r.sort(d||Nl)}function p(){for(let h=e,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:p,sort:l}}function o_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Fl,i.set(n,[o])):r>=s.length?(o=new Fl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function a_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ct};break;case"SpotLight":t={position:new H,direction:new H,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function c_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let l_=0;function h_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u_(i){const e=new a_,t=c_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new Ut,o=new Ut;function a(l){let p=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,x=0,E=0,v=0,m=0,A=0,C=0,S=0,L=0,D=0,U=0;l.sort(h_);for(let b=0,w=l.length;b<w;b++){const F=l[b],Z=F.color,P=F.intensity,G=F.distance,k=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=Z.r*P,h+=Z.g*P,d+=Z.b*P;else if(F.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(F.sh.coefficients[B],P);U++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const W=F.shadow,$=t.get(F);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=F.shadow.matrix,A++}n.directional[g]=B,g++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(Z).multiplyScalar(P),B.distance=G,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,n.spot[E]=B;const W=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,W.updateMatrices(F),F.castShadow&&D++),n.spotLightMatrix[E]=W.matrix,F.castShadow){const $=t.get(F);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,n.spotShadow[E]=$,n.spotShadowMap[E]=k,S++}E++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(Z).multiplyScalar(P),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),n.rectArea[v]=B,v++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const W=F.shadow,$=t.get(F);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,$.shadowCameraNear=W.camera.near,$.shadowCameraFar=W.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=F.shadow.matrix,C++}n.point[x]=B,x++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar(P),B.groundColor.copy(F.groundColor).multiplyScalar(P),n.hemi[m]=B,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=h,n.ambient[2]=d;const z=n.hash;(z.directionalLength!==g||z.pointLength!==x||z.spotLength!==E||z.rectAreaLength!==v||z.hemiLength!==m||z.numDirectionalShadows!==A||z.numPointShadows!==C||z.numSpotShadows!==S||z.numSpotMaps!==L||z.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=E,n.rectArea.length=v,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=S+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,z.directionalLength=g,z.pointLength=x,z.spotLength=E,z.rectAreaLength=v,z.hemiLength=m,z.numDirectionalShadows=A,z.numPointShadows=C,z.numSpotShadows=S,z.numSpotMaps=L,z.numLightProbes=U,n.version=l_++)}function u(l,p){let h=0,d=0,g=0,x=0,E=0;const v=p.matrixWorldInverse;for(let m=0,A=l.length;m<A;m++){const C=l[m];if(C.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),h++}else if(C.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(v),S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(v),g++}else if(C.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(v),o.identity(),s.copy(C.matrixWorld),s.premultiply(v),o.extractRotation(s),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(v),d++}else if(C.isHemisphereLight){const S=n.hemi[E];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(v),E++}}}return{setup:a,setupView:u,state:n}}function Bl(i){const e=new u_(i),t=[],n=[];function r(p){l.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function o(p){n.push(p)}function a(){e.setup(t)}function u(p){e.setupView(t,p)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:u,pushLight:s,pushShadow:o}}function f_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bl(i),e.set(r,[a])):s>=o.length?(a=new Bl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m_(i,e,t){let n=new vc;const r=new lt,s=new lt,o=new kt,a=new Bd({depthPacking:Nf}),u=new zd,l={},p=t.maxTextureSize,h={[wi]:mn,[mn]:wi,[$n]:$n},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:d_,fragmentShader:p_}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new fn;x.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new nt(x,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let m=this.type;this.render=function(D,U,z){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ei),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const P=m!==oi&&this.type===oi,G=m===oi&&this.type!==oi;for(let k=0,B=D.length;k<B;k++){const W=D[k],$=W.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ue=$.getFrameExtents();if(r.multiply(ue),s.copy($.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/ue.x),r.x=s.x*ue.x,$.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/ue.y),r.y=s.y*ue.y,$.mapSize.y=s.y)),$.map===null||P===!0||G===!0){const Ee=this.type!==oi?{minFilter:zn,magFilter:zn}:{};$.map!==null&&$.map.dispose(),$.map=new Xi(r.x,r.y,Ee),$.map.texture.name=W.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const fe=$.getViewportCount();for(let Ee=0;Ee<fe;Ee++){const Ne=$.getViewport(Ee);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),Z.viewport(o),$.updateMatrices(W,Ee),n=$.getFrustum(),S(U,z,$.camera,W,this.type)}$.isPointLightShadow!==!0&&this.type===oi&&A($,z),$.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(b,w,F)};function A(D,U){const z=e.update(E);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xi(r.x,r.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,z,d,E,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,z,g,E,null)}function C(D,U,z,b){let w=null;const F=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)w=F;else if(w=z.isPointLight===!0?u:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Z=w.uuid,P=U.uuid;let G=l[Z];G===void 0&&(G={},l[Z]=G);let k=G[P];k===void 0&&(k=w.clone(),G[P]=k,U.addEventListener("dispose",L)),w=k}if(w.visible=U.visible,w.wireframe=U.wireframe,b===oi?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:h[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=i.properties.get(w);Z.light=z}return w}function S(D,U,z,b,w){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===oi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const P=e.update(D),G=D.material;if(Array.isArray(G)){const k=P.groups;for(let B=0,W=k.length;B<W;B++){const $=k[B],ue=G[$.materialIndex];if(ue&&ue.visible){const fe=C(D,ue,b,w);D.onBeforeShadow(i,D,U,z,P,fe,$),i.renderBufferDirect(z,null,P,fe,D,$),D.onAfterShadow(i,D,U,z,P,fe,$)}}}else if(G.visible){const k=C(D,G,b,w);D.onBeforeShadow(i,D,U,z,P,k,null),i.renderBufferDirect(z,null,P,k,D,null),D.onAfterShadow(i,D,U,z,P,k,null)}}const Z=D.children;for(let P=0,G=Z.length;P<G;P++)S(Z[P],U,z,b,w)}function L(D){D.target.removeEventListener("dispose",L);for(const z in l){const b=l[z],w=D.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const g_={[fa]:da,[pa]:_a,[ma]:va,[yr]:ga,[da]:fa,[_a]:pa,[va]:ma,[ga]:yr};function __(i,e){function t(){let V=!1;const ye=new kt;let _e=null;const Le=new kt(0,0,0,0);return{setMask:function(ge){_e!==ge&&!V&&(i.colorMask(ge,ge,ge,ge),_e=ge)},setLocked:function(ge){V=ge},setClear:function(ge,ce,Ve,Qe,yt){yt===!0&&(ge*=Qe,ce*=Qe,Ve*=Qe),ye.set(ge,ce,Ve,Qe),Le.equals(ye)===!1&&(i.clearColor(ge,ce,Ve,Qe),Le.copy(ye))},reset:function(){V=!1,_e=null,Le.set(-1,0,0,0)}}}function n(){let V=!1,ye=!1,_e=null,Le=null,ge=null;return{setReversed:function(ce){if(ye!==ce){const Ve=e.get("EXT_clip_control");ce?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ye=ce;const Qe=ge;ge=null,this.setClear(Qe)}},getReversed:function(){return ye},setTest:function(ce){ce?de(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(ce){_e!==ce&&!V&&(i.depthMask(ce),_e=ce)},setFunc:function(ce){if(ye&&(ce=g_[ce]),Le!==ce){switch(ce){case fa:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ce}},setLocked:function(ce){V=ce},setClear:function(ce){ge!==ce&&(ye&&(ce=1-ce),i.clearDepth(ce),ge=ce)},reset:function(){V=!1,_e=null,Le=null,ge=null,ye=!1}}}function r(){let V=!1,ye=null,_e=null,Le=null,ge=null,ce=null,Ve=null,Qe=null,yt=null;return{setTest:function(gt){V||(gt?de(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(gt){ye!==gt&&!V&&(i.stencilMask(gt),ye=gt)},setFunc:function(gt,dn,_n){(_e!==gt||Le!==dn||ge!==_n)&&(i.stencilFunc(gt,dn,_n),_e=gt,Le=dn,ge=_n)},setOp:function(gt,dn,_n){(ce!==gt||Ve!==dn||Qe!==_n)&&(i.stencilOp(gt,dn,_n),ce=gt,Ve=dn,Qe=_n)},setLocked:function(gt){V=gt},setClear:function(gt){yt!==gt&&(i.clearStencil(gt),yt=gt)},reset:function(){V=!1,ye=null,_e=null,Le=null,ge=null,ce=null,Ve=null,Qe=null,yt=null}}}const s=new t,o=new n,a=new r,u=new WeakMap,l=new WeakMap;let p={},h={},d=new WeakMap,g=[],x=null,E=!1,v=null,m=null,A=null,C=null,S=null,L=null,D=null,U=new ct(0,0,0),z=0,b=!1,w=null,F=null,Z=null,P=null,G=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),B=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=W>=2);let ue=null,fe={};const Ee=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),rt=new kt().fromArray(Ee),ht=new kt().fromArray(Ne);function at(V,ye,_e,Le){const ge=new Uint8Array(4),ce=i.createTexture();i.bindTexture(V,ce),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<_e;Ve++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ye+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ce}const he={};he[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(yr),Je(!1),Be(Oc),de(i.CULL_FACE),At(Ei);function de(V){p[V]!==!0&&(i.enable(V),p[V]=!0)}function Ie(V){p[V]!==!1&&(i.disable(V),p[V]=!1)}function Ze(V,ye){return h[V]!==ye?(i.bindFramebuffer(V,ye),h[V]=ye,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function He(V,ye){let _e=g,Le=!1;if(V){_e=d.get(ye),_e===void 0&&(_e=[],d.set(ye,_e));const ge=V.textures;if(_e.length!==ge.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ve=ge.length;ce<Ve;ce++)_e[ce]=i.COLOR_ATTACHMENT0+ce;_e.length=ge.length,Le=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Le=!0);Le&&i.drawBuffers(_e)}function ut(V){return x!==V?(i.useProgram(V),x=V,!0):!1}const jt={[Hi]:i.FUNC_ADD,[cf]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};jt[hf]=i.MIN,jt[uf]=i.MAX;const N={[ff]:i.ZERO,[df]:i.ONE,[pf]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[vf]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[Tf]:i.ONE_MINUS_CONSTANT_ALPHA};function At(V,ye,_e,Le,ge,ce,Ve,Qe,yt,gt){if(V===Ei){E===!0&&(Ie(i.BLEND),E=!1);return}if(E===!1&&(de(i.BLEND),E=!0),V!==af){if(V!==v||gt!==b){if((m!==Hi||S!==Hi)&&(i.blendEquation(i.FUNC_ADD),m=Hi,S=Hi),gt)switch(V){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}A=null,C=null,L=null,D=null,U.set(0,0,0),z=0,v=V,b=gt}return}ge=ge||ye,ce=ce||_e,Ve=Ve||Le,(ye!==m||ge!==S)&&(i.blendEquationSeparate(jt[ye],jt[ge]),m=ye,S=ge),(_e!==A||Le!==C||ce!==L||Ve!==D)&&(i.blendFuncSeparate(N[_e],N[Le],N[ce],N[Ve]),A=_e,C=Le,L=ce,D=Ve),(Qe.equals(U)===!1||yt!==z)&&(i.blendColor(Qe.r,Qe.g,Qe.b,yt),U.copy(Qe),z=yt),v=V,b=!1}function tt(V,ye){V.side===$n?Ie(i.CULL_FACE):de(i.CULL_FACE);let _e=V.side===mn;ye&&(_e=!_e),Je(_e),V.blending===_r&&V.transparent===!1?At(Ei):At(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Le=V.stencilWrite;a.setTest(Le),Le&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ze(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function Be(V){V!==rf?(de(i.CULL_FACE),V!==F&&(V===Oc?i.cullFace(i.BACK):V===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),F=V}function Tt(V){V!==Z&&(B&&i.lineWidth(V),Z=V)}function ze(V,ye,_e){V?(de(i.POLYGON_OFFSET_FILL),(P!==ye||G!==_e)&&(i.polygonOffset(ye,_e),P=ye,G=_e)):Ie(i.POLYGON_OFFSET_FILL)}function je(V){V?de(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Pt(V){V===void 0&&(V=i.TEXTURE0+k-1),ue!==V&&(i.activeTexture(V),ue=V)}function It(V,ye,_e){_e===void 0&&(ue===null?_e=i.TEXTURE0+k-1:_e=ue);let Le=fe[_e];Le===void 0&&(Le={type:void 0,texture:void 0},fe[_e]=Le),(Le.type!==V||Le.texture!==ye)&&(ue!==_e&&(i.activeTexture(_e),ue=_e),i.bindTexture(V,ye||he[V]),Le.type=V,Le.texture=ye)}function I(){const V=fe[ue];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(V){rt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),rt.copy(V))}function $e(V){ht.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ht.copy(V))}function Ge(V,ye){let _e=l.get(ye);_e===void 0&&(_e=new WeakMap,l.set(ye,_e));let Le=_e.get(V);Le===void 0&&(Le=i.getUniformBlockIndex(ye,V.name),_e.set(V,Le))}function be(V,ye){const Le=l.get(ye).get(V);u.get(ye)!==Le&&(i.uniformBlockBinding(ye,Le,V.__bindingPointIndex),u.set(ye,Le))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ue=null,fe={},h={},d=new WeakMap,g=[],x=null,E=!1,v=null,m=null,A=null,C=null,S=null,L=null,D=null,U=new ct(0,0,0),z=0,b=!1,w=null,F=null,Z=null,P=null,G=null,rt.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Ie,bindFramebuffer:Ze,drawBuffers:He,useProgram:ut,setBlending:At,setMaterial:tt,setFlipSided:Je,setCullFace:Be,setLineWidth:Tt,setPolygonOffset:ze,setScissorTest:je,activeTexture:Pt,bindTexture:It,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Ue,texImage3D:ve,updateUBOMapping:Ge,uniformBlockBinding:be,texStorage2D:Se,texStorage3D:We,texSubImage2D:le,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Xe,scissor:De,viewport:$e,reset:Ye}}function v_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,p=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,T){return g?new OffscreenCanvas(I,T):Zs("canvas")}function E(I,T,J){let le=1;const pe=It(I);if((pe.width>J||pe.height>J)&&(le=J/Math.max(pe.width,pe.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(le*pe.width),Xe=Math.floor(le*pe.height);h===void 0&&(h=x(ae,Xe));const Se=T?x(ae,Xe):h;return Se.width=ae,Se.height=Xe,Se.getContext("2d").drawImage(I,0,0,ae,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ae+"x"+Xe+")."),Se}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function v(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(I,T,J,le,pe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=T;if(T===i.RED&&(J===i.FLOAT&&(ae=i.R32F),J===i.HALF_FLOAT&&(ae=i.R16F),J===i.UNSIGNED_BYTE&&(ae=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.R8UI),J===i.UNSIGNED_SHORT&&(ae=i.R16UI),J===i.UNSIGNED_INT&&(ae=i.R32UI),J===i.BYTE&&(ae=i.R8I),J===i.SHORT&&(ae=i.R16I),J===i.INT&&(ae=i.R32I)),T===i.RG&&(J===i.FLOAT&&(ae=i.RG32F),J===i.HALF_FLOAT&&(ae=i.RG16F),J===i.UNSIGNED_BYTE&&(ae=i.RG8)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RG8UI),J===i.UNSIGNED_SHORT&&(ae=i.RG16UI),J===i.UNSIGNED_INT&&(ae=i.RG32UI),J===i.BYTE&&(ae=i.RG8I),J===i.SHORT&&(ae=i.RG16I),J===i.INT&&(ae=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),J===i.UNSIGNED_INT&&(ae=i.RGB32UI),J===i.BYTE&&(ae=i.RGB8I),J===i.SHORT&&(ae=i.RGB16I),J===i.INT&&(ae=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),J===i.UNSIGNED_INT&&(ae=i.RGBA32UI),J===i.BYTE&&(ae=i.RGBA8I),J===i.SHORT&&(ae=i.RGBA16I),J===i.INT&&(ae=i.RGBA32I)),T===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),T===i.RGBA){const Xe=pe?Ys:xt.getTransfer(le);J===i.FLOAT&&(ae=i.RGBA32F),J===i.HALF_FLOAT&&(ae=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ae=Xe===Mt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(I,T){let J;return I?T===null||T===$i||T===Kr?J=i.DEPTH24_STENCIL8:T===ai?J=i.DEPTH32F_STENCIL8:T===Yr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$i||T===Kr?J=i.DEPTH_COMPONENT24:T===ai?J=i.DEPTH_COMPONENT32F:T===Yr&&(J=i.DEPTH_COMPONENT16),J}function L(I,T){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==zn&&I.minFilter!==qn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function D(I){const T=I.target;T.removeEventListener("dispose",D),z(T),T.isVideoTexture&&p.delete(T)}function U(I){const T=I.target;T.removeEventListener("dispose",U),w(T)}function z(I){const T=n.get(I);if(T.__webglInit===void 0)return;const J=I.source,le=d.get(J);if(le){const pe=le[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&b(I),Object.keys(le).length===0&&d.delete(J)}n.remove(I)}function b(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const J=I.source,le=d.get(J);delete le[T.__cacheKey],o.memory.textures--}function w(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let pe=0;pe<T.__webglFramebuffer[le].length;pe++)i.deleteFramebuffer(T.__webglFramebuffer[le][pe]);else i.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)i.deleteFramebuffer(T.__webglFramebuffer[le]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=I.textures;for(let le=0,pe=J.length;le<pe;le++){const ae=n.get(J[le]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(J[le])}n.remove(I)}let F=0;function Z(){F=0}function P(){const I=F;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),F+=1,I}function G(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function k(I,T){const J=n.get(I);if(I.isVideoTexture&&je(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const le=I.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(J,I,T);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function B(I,T){const J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){he(J,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function W(I,T){const J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){he(J,I,T);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function $(I,T){const J=n.get(I);if(I.version>0&&J.__version!==I.version){de(J,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const ue={[Ea]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},fe={[zn]:i.NEAREST,[Of]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Ee={[Bf]:i.NEVER,[Wf]:i.ALWAYS,[zf]:i.LESS,[zh]:i.LEQUAL,[kf]:i.EQUAL,[Gf]:i.GEQUAL,[Hf]:i.GREATER,[Vf]:i.NOTEQUAL};function Ne(I,T){if(T.type===ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===qn||T.magFilter===mo||T.magFilter===ds||T.magFilter===Wi||T.minFilter===qn||T.minFilter===mo||T.minFilter===ds||T.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ue[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ue[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ue[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,fe[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zn||T.minFilter!==ds&&T.minFilter!==Wi||T.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function rt(I,T){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",D));const le=T.source;let pe=d.get(le);pe===void 0&&(pe={},d.set(le,pe));const ae=G(T);if(ae!==I.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pe[ae].usedTimes++;const Xe=pe[I.__cacheKey];Xe!==void 0&&(pe[I.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(T)),I.__cacheKey=ae,I.__webglTexture=pe[ae].texture}return J}function ht(I,T,J){return Math.floor(Math.floor(I/J)/T)}function at(I,T,J,le){const ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,le,T.data);else{ae.sort((ve,De)=>ve.start-De.start);let Xe=0;for(let ve=1;ve<ae.length;ve++){const De=ae[Xe],$e=ae[ve],Ge=De.start+De.count,be=ht($e.start,T.width,4),Ye=ht(De.start,T.width,4);$e.start<=Ge+1&&be===Ye&&ht($e.start+$e.count-1,T.width,4)===be?De.count=Math.max(De.count,$e.start+$e.count-De.start):(++Xe,ae[Xe]=$e)}ae.length=Xe+1;const Se=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ve=0,De=ae.length;ve<De;ve++){const $e=ae[ve],Ge=Math.floor($e.start/4),be=Math.ceil($e.count/4),Ye=Ge%T.width,V=Math.floor(Ge/T.width),ye=be,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,Ye,V,ye,_e,J,le,T.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function he(I,T,J){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);const pe=rt(I,T),ae=T.source;t.bindTexture(le,I.__webglTexture,i.TEXTURE0+J);const Xe=n.get(ae);if(ae.version!==Xe.__version||pe===!0){t.activeTexture(i.TEXTURE0+J);const Se=xt.getPrimaries(xt.workingColorSpace),We=T.colorSpace===xi?null:xt.getPrimaries(T.colorSpace),Ue=T.colorSpace===xi||Se===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ve=E(T.image,!1,r.maxTextureSize);ve=Pt(T,ve);const De=s.convert(T.format,T.colorSpace),$e=s.convert(T.type);let Ge=C(T.internalFormat,De,$e,T.colorSpace,T.isVideoTexture);Ne(le,T);let be;const Ye=T.mipmaps,V=T.isVideoTexture!==!0,ye=Xe.__version===void 0||pe===!0,_e=ae.dataReady,Le=L(T,ve);if(T.isDepthTexture)Ge=S(T.format===Jr,T.type),ye&&(V?t.texStorage2D(i.TEXTURE_2D,1,Ge,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ve.width,ve.height,0,De,$e,null));else if(T.isDataTexture)if(Ye.length>0){V&&ye&&t.texStorage2D(i.TEXTURE_2D,Le,Ge,Ye[0].width,Ye[0].height);for(let ge=0,ce=Ye.length;ge<ce;ge++)be=Ye[ge],V?_e&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,be.width,be.height,De,$e,be.data):t.texImage2D(i.TEXTURE_2D,ge,Ge,be.width,be.height,0,De,$e,be.data);T.generateMipmaps=!1}else V?(ye&&t.texStorage2D(i.TEXTURE_2D,Le,Ge,ve.width,ve.height),_e&&at(T,ve,De,$e)):t.texImage2D(i.TEXTURE_2D,0,Ge,ve.width,ve.height,0,De,$e,ve.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ge,Ye[0].width,Ye[0].height,ve.depth);for(let ge=0,ce=Ye.length;ge<ce;ge++)if(be=Ye[ge],T.format!==Bn)if(De!==null)if(V){if(_e)if(T.layerUpdates.size>0){const Ve=pl(be.width,be.height,T.format,T.type);for(const Qe of T.layerUpdates){const yt=be.data.subarray(Qe*Ve/be.data.BYTES_PER_ELEMENT,(Qe+1)*Ve/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Qe,be.width,be.height,1,De,yt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,ve.depth,De,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ge,be.width,be.height,ve.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,ve.depth,De,$e,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ge,be.width,be.height,ve.depth,0,De,$e,be.data)}else{V&&ye&&t.texStorage2D(i.TEXTURE_2D,Le,Ge,Ye[0].width,Ye[0].height);for(let ge=0,ce=Ye.length;ge<ce;ge++)be=Ye[ge],T.format!==Bn?De!==null?V?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ge,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?_e&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,be.width,be.height,De,$e,be.data):t.texImage2D(i.TEXTURE_2D,ge,Ge,be.width,be.height,0,De,$e,be.data)}else if(T.isDataArrayTexture)if(V){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ge,ve.width,ve.height,ve.depth),_e)if(T.layerUpdates.size>0){const ge=pl(ve.width,ve.height,T.format,T.type);for(const ce of T.layerUpdates){const Ve=ve.data.subarray(ce*ge/ve.data.BYTES_PER_ELEMENT,(ce+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ve.width,ve.height,1,De,$e,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,$e,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ve.width,ve.height,ve.depth,0,De,$e,ve.data);else if(T.isData3DTexture)V?(ye&&t.texStorage3D(i.TEXTURE_3D,Le,Ge,ve.width,ve.height,ve.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,$e,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ve.width,ve.height,ve.depth,0,De,$e,ve.data);else if(T.isFramebufferTexture){if(ye)if(V)t.texStorage2D(i.TEXTURE_2D,Le,Ge,ve.width,ve.height);else{let ge=ve.width,ce=ve.height;for(let Ve=0;Ve<Le;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,Ge,ge,ce,0,De,$e,null),ge>>=1,ce>>=1}}else if(Ye.length>0){if(V&&ye){const ge=It(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ge,ge.width,ge.height)}for(let ge=0,ce=Ye.length;ge<ce;ge++)be=Ye[ge],V?_e&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,De,$e,be):t.texImage2D(i.TEXTURE_2D,ge,Ge,De,$e,be);T.generateMipmaps=!1}else if(V){if(ye){const ge=It(ve);t.texStorage2D(i.TEXTURE_2D,Le,Ge,ge.width,ge.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,$e,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ge,De,$e,ve);v(T)&&m(le),Xe.__version=ae.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function de(I,T,J){if(T.image.length!==6)return;const le=rt(I,T),pe=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);const ae=n.get(pe);if(pe.version!==ae.__version||le===!0){t.activeTexture(i.TEXTURE0+J);const Xe=xt.getPrimaries(xt.workingColorSpace),Se=T.colorSpace===xi?null:xt.getPrimaries(T.colorSpace),We=T.colorSpace===xi||Xe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,De=[];for(let ce=0;ce<6;ce++)!Ue&&!ve?De[ce]=E(T.image[ce],!0,r.maxCubemapSize):De[ce]=ve?T.image[ce].image:T.image[ce],De[ce]=Pt(T,De[ce]);const $e=De[0],Ge=s.convert(T.format,T.colorSpace),be=s.convert(T.type),Ye=C(T.internalFormat,Ge,be,T.colorSpace),V=T.isVideoTexture!==!0,ye=ae.__version===void 0||le===!0,_e=pe.dataReady;let Le=L(T,$e);Ne(i.TEXTURE_CUBE_MAP,T);let ge;if(Ue){V&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ye,$e.width,$e.height);for(let ce=0;ce<6;ce++){ge=De[ce].mipmaps;for(let Ve=0;Ve<ge.length;Ve++){const Qe=ge[Ve];T.format!==Bn?Ge!==null?V?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,Qe.width,Qe.height,Ge,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,Ye,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,Qe.width,Qe.height,Ge,be,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,Ye,Qe.width,Qe.height,0,Ge,be,Qe.data)}}}else{if(ge=T.mipmaps,V&&ye){ge.length>0&&Le++;const ce=It(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ve){V?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De[ce].width,De[ce].height,Ge,be,De[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,De[ce].width,De[ce].height,0,Ge,be,De[ce].data);for(let Ve=0;Ve<ge.length;Ve++){const yt=ge[Ve].image[ce].image;V?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,yt.width,yt.height,Ge,be,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,Ye,yt.width,yt.height,0,Ge,be,yt.data)}}else{V?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ge,be,De[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,Ge,be,De[ce]);for(let Ve=0;Ve<ge.length;Ve++){const Qe=ge[Ve];V?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,Ge,be,Qe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,Ye,Ge,be,Qe.image[ce])}}}v(T)&&m(i.TEXTURE_CUBE_MAP),ae.__version=pe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ie(I,T,J,le,pe,ae){const Xe=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),We=C(J.internalFormat,Xe,Se,J.colorSpace),Ue=n.get(T),ve=n.get(J);if(ve.__renderTarget=T,!Ue.__hasExternalTextures){const De=Math.max(1,T.width>>ae),$e=Math.max(1,T.height>>ae);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,ae,We,De,$e,T.depth,0,Xe,Se,null):t.texImage2D(pe,ae,We,De,$e,0,Xe,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ze(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,pe,ve.__webglTexture,0,Tt(T)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,pe,ve.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(I,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const le=T.depthTexture,pe=le&&le.isDepthTexture?le.type:null,ae=S(T.stencilBuffer,pe),Xe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=Tt(T);ze(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ae,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ae,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,I)}else{const le=T.textures;for(let pe=0;pe<le.length;pe++){const ae=le[pe],Xe=s.convert(ae.format,ae.colorSpace),Se=s.convert(ae.type),We=C(ae.internalFormat,Xe,Se,ae.colorSpace),Ue=Tt(T);J&&ze(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,We,T.width,T.height):ze(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,We,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,We,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(T.depthTexture);le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const pe=le.__webglTexture,ae=Tt(T);if(T.depthTexture.format===Zr)ze(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(T.depthTexture.format===Jr)ze(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ut(I){const T=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",pe)};le.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=le}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const le=I.texture.mipmaps;le&&le.length>0?He(T.__webglFramebuffer[0],I):He(T.__webglFramebuffer,I)}else if(J){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=i.createRenderbuffer(),Ze(T.__webglDepthbuffer[le],I,!1);else{const pe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ae)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ze(T.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(I,T,J){const le=n.get(I);T!==void 0&&Ie(le.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ut(I)}function N(I){const T=I.texture,J=n.get(I),le=n.get(T);I.addEventListener("dispose",U);const pe=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Xe=pe.length>1;if(Xe||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,o.memory.textures++),ae){J.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Se]=[];for(let We=0;We<T.mipmaps.length;We++)J.__webglFramebuffer[Se][We]=i.createFramebuffer()}else J.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)J.__webglFramebuffer[Se]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let Se=0,We=pe.length;Se<We;Se++){const Ue=n.get(pe[Se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ze(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const We=pe[Se];J.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Se]);const Ue=s.convert(We.format,We.colorSpace),ve=s.convert(We.type),De=C(We.internalFormat,Ue,ve,We.colorSpace,I.isXRRenderTarget===!0),$e=Tt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,De,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,J.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,T);for(let Se=0;Se<6;Se++)if(T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)Ie(J.__webglFramebuffer[Se][We],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We);else Ie(J.__webglFramebuffer[Se],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Se=0,We=pe.length;Se<We;Se++){const Ue=pe[Se],ve=n.get(Ue);let De=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,ve.__webglTexture),Ne(De,Ue),Ie(J.__webglFramebuffer,I,Ue,i.COLOR_ATTACHMENT0+Se,De,0),v(Ue)&&m(De)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,le.__webglTexture),Ne(Se,T),T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)Ie(J.__webglFramebuffer[We],I,T,i.COLOR_ATTACHMENT0,Se,We);else Ie(J.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,Se,0);v(T)&&m(Se),t.unbindTexture()}I.depthBuffer&&ut(I)}function At(I){const T=I.textures;for(let J=0,le=T.length;J<le;J++){const pe=T[J];if(v(pe)){const ae=A(I),Xe=n.get(pe).__webglTexture;t.bindTexture(ae,Xe),m(ae),t.unbindTexture()}}}const tt=[],Je=[];function Be(I){if(I.samples>0){if(ze(I)===!1){const T=I.textures,J=I.width,le=I.height;let pe=i.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=n.get(I),Se=T.length>1;if(Se)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const We=I.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ve=n.get(T[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,J,le,0,0,J,le,pe,i.NEAREST),u===!0&&(tt.length=0,Je.length=0,tt.push(i.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(tt.push(ae),Je.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ue]);const ve=n.get(T[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Tt(I){return Math.min(r.maxSamples,I.samples)}function ze(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(I){const T=o.render.frame;p.get(I)!==T&&(p.set(I,T),I.update())}function Pt(I,T){const J=I.colorSpace,le=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==Mr&&J!==xi&&(xt.getTransfer(J)===Mt?(le!==Bn||pe!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function It(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=$,this.rebindTextures=jt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ze}function x_(i,e){function t(n,r=xi){let s;const o=xt.getTransfer(r);if(n===Kn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===Bn)return i.RGBA;if(n===Zr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===Nh)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===Gs||n===Ws||n===$s||n===Xs)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Ta||n===wa||n===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Aa||n===Ra)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Ia||n===Da||n===La||n===Oa||n===Ua||n===Na||n===Fa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===$a||n===Xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wa)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===ja||n===Ya||n===Ka)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:y_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M_ extends br{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=1,l=null,p=null,h=null,d=null,g=null,x=null;const E=typeof XRWebGLBinding<"u",v=new S_,m={},A=t.getContextAttributes();let C=null,S=null;const L=[],D=[],U=new lt;let z=null;const b=new Rn;b.viewport=new kt;const w=new Rn;w.viewport=new kt;const F=[b,w],Z=new Gd;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let de=L[he];return de===void 0&&(de=new No,L[he]=de),de.getTargetRaySpace()},this.getControllerGrip=function(he){let de=L[he];return de===void 0&&(de=new No,L[he]=de),de.getGripSpace()},this.getHand=function(he){let de=L[he];return de===void 0&&(de=new No,L[he]=de),de.getHandSpace()};function k(he){const de=D.indexOf(he.inputSource);if(de===-1)return;const Ie=L[de];Ie!==void 0&&(Ie.update(he.inputSource,he.frame,l||o),Ie.dispatchEvent({type:he.type,data:he.inputSource}))}function B(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",W);for(let he=0;he<L.length;he++){const de=D[he];de!==null&&(D[he]=null,L[he].disconnect(de))}P=null,G=null,v.reset();for(const he in m)delete m[he];e.setRenderTarget(C),g=null,d=null,h=null,r=null,S=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",B),r.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Ze=null,He=null;A.depth&&(He=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=A.stencil?Jr:Zr,Ze=A.stencil?Kr:$i);const ut={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ut),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Xi(d.textureWidth,d.textureHeight,{format:Bn,type:Kn,depthTexture:new Yh(d.textureWidth,d.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ie={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Ie),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new Xi(g.framebufferWidth,g.framebufferHeight,{format:Bn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await r.requestReferenceSpace(a),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(he){for(let de=0;de<he.removed.length;de++){const Ie=he.removed[de],Ze=D.indexOf(Ie);Ze>=0&&(D[Ze]=null,L[Ze].disconnect(Ie))}for(let de=0;de<he.added.length;de++){const Ie=he.added[de];let Ze=D.indexOf(Ie);if(Ze===-1){for(let ut=0;ut<L.length;ut++)if(ut>=D.length){D.push(Ie),Ze=ut;break}else if(D[ut]===null){D[ut]=Ie,Ze=ut;break}if(Ze===-1)break}const He=L[Ze];He&&He.connect(Ie)}}const $=new H,ue=new H;function fe(he,de,Ie){$.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(Ie.matrixWorld);const Ze=$.distanceTo(ue),He=de.projectionMatrix.elements,ut=Ie.projectionMatrix.elements,jt=He[14]/(He[10]-1),N=He[14]/(He[10]+1),At=(He[9]+1)/He[5],tt=(He[9]-1)/He[5],Je=(He[8]-1)/He[0],Be=(ut[8]+1)/ut[0],Tt=jt*Je,ze=jt*Be,je=Ze/(-Je+Be),Pt=je*-Je;if(de.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Pt),he.translateZ(je),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),He[10]===-1)he.projectionMatrix.copy(de.projectionMatrix),he.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const It=jt+je,I=N+je,T=Tt-Pt,J=ze+(Ze-Pt),le=At*N/I*It,pe=tt*N/I*It;he.projectionMatrix.makePerspective(T,J,le,pe,It,I),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Ee(he,de){de===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(de.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let de=he.near,Ie=he.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Ie=v.depthFar)),Z.near=w.near=b.near=de,Z.far=w.far=b.far=Ie,(P!==Z.near||G!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,G=Z.far),Z.layers.mask=he.layers.mask|6,b.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const Ze=he.parent,He=Z.cameras;Ee(Z,Ze);for(let ut=0;ut<He.length;ut++)Ee(He[ut],Ze);He.length===2?fe(Z,b,w):Z.projectionMatrix.copy(b.projectionMatrix),Ne(he,Z,Ze)};function Ne(he,de,Ie){Ie===null?he.matrix.copy(de.matrixWorld):(he.matrix.copy(Ie.matrixWorld),he.matrix.invert(),he.matrix.multiply(de.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(de.projectionMatrix),he.projectionMatrixInverse.copy(de.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Qr*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&g===null))return u},this.setFoveation=function(he){u=he,d!==null&&(d.fixedFoveation=he),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=he)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Z)},this.getCameraTexture=function(he){return m[he]};let rt=null;function ht(he,de){if(p=de.getViewerPose(l||o),x=de,p!==null){const Ie=p.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Ze=!1;Ie.length!==Z.cameras.length&&(Z.cameras.length=0,Ze=!0);for(let N=0;N<Ie.length;N++){const At=Ie[N];let tt=null;if(g!==null)tt=g.getViewport(At);else{const Be=h.getViewSubImage(d,At);tt=Be.viewport,N===0&&(e.setRenderTargetTextures(S,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(S))}let Je=F[N];Je===void 0&&(Je=new Rn,Je.layers.enable(N),Je.viewport=new kt,F[N]=Je),Je.matrix.fromArray(At.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(At.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(tt.x,tt.y,tt.width,tt.height),N===0&&(Z.matrix.copy(Je.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ze===!0&&Z.cameras.push(Je)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=n.getBinding();const N=h.getDepthInformation(Ie[0]);N&&N.isValid&&N.texture&&v.init(N,r.renderState)}if(He&&He.includes("camera-access")&&E){e.state.unbindTexture(),h=n.getBinding();for(let N=0;N<Ie.length;N++){const At=Ie[N].camera;if(At){let tt=m[At];tt||(tt=new Kh,m[At]=tt);const Je=h.getCameraImage(At);tt.sourceTexture=Je}}}}for(let Ie=0;Ie<L.length;Ie++){const Ze=D[Ie],He=L[Ie];Ze!==null&&He!==void 0&&He.update(Ze,de,l||o)}rt&&rt(he,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}const at=new eu;at.setAnimationLoop(ht),this.setAnimationLoop=function(he){rt=he},this.dispose=function(){}}}const Ni=new Pn,T_=new Ut;function w_(i,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,$h(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,A,C,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),h(v,m)):m.isMeshPhongMaterial?(s(v,m),p(v,m)):m.isMeshStandardMaterial?(s(v,m),d(v,m),m.isMeshPhysicalMaterial&&g(v,m,S)):m.isMeshMatcapMaterial?(s(v,m),x(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),E(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?u(v,m,A,C):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===mn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===mn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const A=e.get(m),C=A.envMap,S=A.envMapRotation;C&&(v.envMap.value=C,Ni.copy(S),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),v.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Ni)),v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function u(v,m,A,C){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*A,v.scale.value=C*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function h(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function d(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function g(v,m,A){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,m){m.matcap&&(v.matcap.value=m.matcap)}function E(v,m){const A=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function b_(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,C){const S=C.program;n.uniformBlockBinding(A,S)}function l(A,C){let S=r[A.id];S===void 0&&(x(A),S=p(A),r[A.id]=S,A.addEventListener("dispose",v));const L=C.program;n.updateUBOMapping(A,L);const D=e.render.frame;s[A.id]!==D&&(d(A),s[A.id]=D)}function p(A){const C=h();A.__bindingPointIndex=C;const S=i.createBuffer(),L=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,S),S}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const C=r[A.id],S=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let D=0,U=S.length;D<U;D++){const z=Array.isArray(S[D])?S[D]:[S[D]];for(let b=0,w=z.length;b<w;b++){const F=z[b];if(g(F,D,b,L)===!0){const Z=F.__offset,P=Array.isArray(F.value)?F.value:[F.value];let G=0;for(let k=0;k<P.length;k++){const B=P[k],W=E(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,Z+G,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,C,S,L){const D=A.value,U=C+"_"+S;if(L[U]===void 0)return typeof D=="number"||typeof D=="boolean"?L[U]=D:L[U]=D.clone(),!0;{const z=L[U];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return L[U]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function x(A){const C=A.uniforms;let S=0;const L=16;for(let U=0,z=C.length;U<z;U++){const b=Array.isArray(C[U])?C[U]:[C[U]];for(let w=0,F=b.length;w<F;w++){const Z=b[w],P=Array.isArray(Z.value)?Z.value:[Z.value];for(let G=0,k=P.length;G<k;G++){const B=P[G],W=E(B),$=S%L,ue=$%W.boundary,fe=$+ue;S+=ue,fe!==0&&L-fe<W.storage&&(S+=L-fe),Z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=W.storage}}}const D=S%L;return D>0&&(S+=L-D),A.__size=S,A.__cache={},this}function E(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function v(A){const C=A.target;C.removeEventListener("dispose",v);const S=o.indexOf(C.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function m(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:u,update:l,dispose:m}}class A_{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=new Uint32Array(4),E=new Int32Array(4);let v=null,m=null;const A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let L=!1;this._outputColorSpace=An;let D=0,U=0,z=null,b=-1,w=null;const F=new kt,Z=new kt;let P=null;const G=new ct(0);let k=0,B=t.width,W=t.height,$=1,ue=null,fe=null;const Ee=new kt(0,0,B,W),Ne=new kt(0,0,B,W);let rt=!1;const ht=new vc;let at=!1,he=!1;const de=new Ut,Ie=new H,Ze=new kt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function jt(){return z===null?$:1}let N=n;function At(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){const q="webgl2";if(N=At(q,R),N===null)throw At(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let tt,Je,Be,Tt,ze,je,Pt,It,I,T,J,le,pe,ae,Xe,Se,We,Ue,ve,De,$e,Ge,be,Ye;function V(){tt=new Fg(N),tt.init(),Ge=new x_(N,tt),Je=new Pg(N,tt,e,Ge),Be=new __(N,tt),Je.reversedDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),Tt=new kg(N),ze=new r_,je=new v_(N,tt,Be,ze,Je,Ge,Tt),Pt=new Dg(S),It=new Ng(S),I=new Xd(N),be=new Rg(N,I),T=new Bg(N,I,Tt,be),J=new Vg(N,T,I,Tt),ve=new Hg(N,Je,je),Se=new Ig(ze),le=new i_(S,Pt,It,tt,Je,be,Se),pe=new w_(S,ze),ae=new o_,Xe=new f_(tt),Ue=new Ag(S,Pt,It,Be,J,g,u),We=new m_(S,J,Je),Ye=new b_(N,Tt,Je,Be),De=new Cg(N,tt,Tt),$e=new zg(N,tt,Tt),Tt.programs=le.programs,S.capabilities=Je,S.extensions=tt,S.properties=ze,S.renderLists=ae,S.shadowMap=We,S.state=Be,S.info=Tt}V();const ye=new M_(S,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(B,W,!1))},this.getSize=function(R){return R.set(B,W)},this.setSize=function(R,q,te=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,W=q,t.width=Math.floor(R*$),t.height=Math.floor(q*$),te===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*$,W*$).floor()},this.setDrawingBufferSize=function(R,q,te){B=R,W=q,$=te,t.width=Math.floor(R*te),t.height=Math.floor(q*te),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Ee)},this.setViewport=function(R,q,te,ne){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,q,te,ne),Be.viewport(F.copy(Ee).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,q,te,ne){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,q,te,ne),Be.scissor(Z.copy(Ne).multiplyScalar($).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){Be.setScissorTest(rt=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,te=!0){let ne=0;if(R){let K=!1;if(z!==null){const me=z.texture.format;K=me===uc||me===hc||me===lc}if(K){const me=z.texture.type,Ce=me===Kn||me===$i||me===Yr||me===Kr||me===oc||me===ac,ke=Ue.getClearColor(),Te=Ue.getClearAlpha(),Ke=ke.r,et=ke.g,qe=ke.b;Ce?(x[0]=Ke,x[1]=et,x[2]=qe,x[3]=Te,N.clearBufferuiv(N.COLOR,0,x)):(E[0]=Ke,E[1]=et,E[2]=qe,E[3]=Te,N.clearBufferiv(N.COLOR,0,E))}else ne|=N.COLOR_BUFFER_BIT}q&&(ne|=N.DEPTH_BUFFER_BIT),te&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ue.dispose(),ae.dispose(),Xe.dispose(),ze.dispose(),Pt.dispose(),It.dispose(),J.dispose(),be.dispose(),Ye.dispose(),le.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",_n),ye.removeEventListener("sessionend",Pr),In.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=Tt.autoReset,q=We.enabled,te=We.autoUpdate,ne=We.needsUpdate,K=We.type;V(),Tt.autoReset=R,We.enabled=q,We.autoUpdate=te,We.needsUpdate=ne,We.type=K}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const q=R.target;q.removeEventListener("dispose",ce),Ve(q)}function Ve(R){Qe(R),ze.remove(R)}function Qe(R){const q=ze.get(R).programs;q!==void 0&&(q.forEach(function(te){le.releaseProgram(te)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,te,ne,K,me){q===null&&(q=He);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,ke=po(R,q,te,ne,K);Be.setMaterial(ne,Ce);let Te=te.index,Ke=1;if(ne.wireframe===!0){if(Te=T.getWireframeAttribute(te),Te===void 0)return;Ke=2}const et=te.drawRange,qe=te.attributes.position;let ot=et.start*Ke,_t=(et.start+et.count)*Ke;me!==null&&(ot=Math.max(ot,me.start*Ke),_t=Math.min(_t,(me.start+me.count)*Ke)),Te!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Te.count)):qe!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,qe.count));const Dt=_t-ot;if(Dt<0||Dt===1/0)return;be.setup(K,ne,ke,te,Te);let St,Et=De;if(Te!==null&&(St=I.get(Te),Et=$e,Et.setIndex(St)),K.isMesh)ne.wireframe===!0?(Be.setLineWidth(ne.wireframeLinewidth*jt()),Et.setMode(N.LINES)):Et.setMode(N.TRIANGLES);else if(K.isLine){let Pe=ne.linewidth;Pe===void 0&&(Pe=1),Be.setLineWidth(Pe*jt()),K.isLineSegments?Et.setMode(N.LINES):K.isLineLoop?Et.setMode(N.LINE_LOOP):Et.setMode(N.LINE_STRIP)}else K.isPoints?Et.setMode(N.POINTS):K.isSprite&&Et.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Pe=K._multiDrawStarts,vt=K._multiDrawCounts,mt=K._multiDrawCount,Yt=Te?I.get(Te).bytesPerElement:1,Jn=ze.get(ne).currentProgram.getUniforms();for(let tn=0;tn<mt;tn++)Jn.setValue(N,"_gl_DrawID",tn),Et.render(Pe[tn]/Yt,vt[tn])}else if(K.isInstancedMesh)Et.renderInstances(ot,Dt,K.count);else if(te.isInstancedBufferGeometry){const Pe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,vt=Math.min(te.instanceCount,Pe);Et.renderInstances(ot,Dt,vt)}else Et.render(ot,Dt)};function yt(R,q,te){R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,Zn(R,q,te),R.side=wi,R.needsUpdate=!0,Zn(R,q,te),R.side=$n):Zn(R,q,te)}this.compile=function(R,q,te=null){te===null&&(te=R),m=Xe.get(te),m.init(q),C.push(m),te.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),R!==te&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const ne=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const me=K.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){const ke=me[Ce];yt(ke,te,K),ne.add(ke)}else yt(me,te,K),ne.add(me)}),m=C.pop(),ne},this.compileAsync=function(R,q,te=null){const ne=this.compile(R,q,te);return new Promise(K=>{function me(){if(ne.forEach(function(Ce){ze.get(Ce).currentProgram.isReady()&&ne.delete(Ce)}),ne.size===0){K(R);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let gt=null;function dn(R){gt&&gt(R)}function _n(){In.stop()}function Pr(){In.start()}const In=new eu;In.setAnimationLoop(dn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(R){gt=R,ye.setAnimationLoop(R),R===null?In.stop():In.start()},ye.addEventListener("sessionstart",_n),ye.addEventListener("sessionend",Pr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(q),q=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,q,z),m=Xe.get(R,C.length),m.init(q),C.push(m),de.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ht.setFromProjectionMatrix(de,jn,q.reversedDepth),he=this.localClippingEnabled,at=Se.init(this.clippingPlanes,he),v=ae.get(R,A.length),v.init(),A.push(v),ye.enabled===!0&&ye.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&ji(me,q,-1/0,S.sortObjects)}ji(R,q,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ue,fe),ut=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ut&&Ue.addToRenderList(v,R),this.info.render.frame++,at===!0&&Se.beginShadows();const te=m.state.shadowsArray;We.render(te,R,q),at===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=v.opaque,K=v.transmissive;if(m.setupLights(),q.isArrayCamera){const me=q.cameras;if(K.length>0)for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Te=me[Ce];os(ne,K,R,Te)}ut&&Ue.render(R);for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Te=me[Ce];Ri(v,R,Te,Te.viewport)}}else K.length>0&&os(ne,K,R,q),ut&&Ue.render(R),Ri(v,R,q);z!==null&&U===0&&(je.updateMultisampleRenderTarget(z),je.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(S,R,q),be.resetDefaultState(),b=-1,w=null,C.pop(),C.length>0?(m=C[C.length-1],at===!0&&Se.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?v=A[A.length-1]:v=null};function ji(R,q,te,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){ne&&Ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const Ce=J.update(R),ke=R.material;ke.visible&&v.push(R,Ce,ke,te,Ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const Ce=J.update(R),ke=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ze.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ze.copy(Ce.boundingSphere.center)),Ze.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(ke)){const Te=Ce.groups;for(let Ke=0,et=Te.length;Ke<et;Ke++){const qe=Te[Ke],ot=ke[qe.materialIndex];ot&&ot.visible&&v.push(R,Ce,ot,te,Ze.z,qe)}}else ke.visible&&v.push(R,Ce,ke,te,Ze.z,null)}}const me=R.children;for(let Ce=0,ke=me.length;Ce<ke;Ce++)ji(me[Ce],q,te,ne)}function Ri(R,q,te,ne){const K=R.opaque,me=R.transmissive,Ce=R.transparent;m.setupLightsView(te),at===!0&&Se.setGlobalState(S.clippingPlanes,te),ne&&Be.viewport(F.copy(ne)),K.length>0&&Ci(K,q,te),me.length>0&&Ci(me,q,te),Ce.length>0&&Ci(Ce,q,te),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function os(R,q,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ne.id]===void 0&&(m.state.transmissionRenderTarget[ne.id]=new Xi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ts:Kn,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const me=m.state.transmissionRenderTarget[ne.id],Ce=ne.viewport||F;me.setSize(Ce.z*S.transmissionResolutionScale,Ce.w*S.transmissionResolutionScale);const ke=S.getRenderTarget(),Te=S.getActiveCubeFace(),Ke=S.getActiveMipmapLevel();S.setRenderTarget(me),S.getClearColor(G),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),ut&&Ue.render(te);const et=S.toneMapping;S.toneMapping=Si;const qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),m.setupLightsView(ne),at===!0&&Se.setGlobalState(S.clippingPlanes,ne),Ci(R,te,ne),je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let _t=0,Dt=q.length;_t<Dt;_t++){const St=q[_t],Et=St.object,Pe=St.geometry,vt=St.material,mt=St.group;if(vt.side===$n&&Et.layers.test(ne.layers)){const Yt=vt.side;vt.side=mn,vt.needsUpdate=!0,as(Et,te,ne,Pe,vt,mt),vt.side=Yt,vt.needsUpdate=!0,ot=!0}}ot===!0&&(je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me))}S.setRenderTarget(ke,Te,Ke),S.setClearColor(G,k),qe!==void 0&&(ne.viewport=qe),S.toneMapping=et}function Ci(R,q,te){const ne=q.isScene===!0?q.overrideMaterial:null;for(let K=0,me=R.length;K<me;K++){const Ce=R[K],ke=Ce.object,Te=Ce.geometry,Ke=Ce.group;let et=Ce.material;et.allowOverride===!0&&ne!==null&&(et=ne),ke.layers.test(te.layers)&&as(ke,q,te,Te,et,Ke)}}function as(R,q,te,ne,K,me){R.onBeforeRender(S,q,te,ne,K,me),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(S,q,te,ne,R,me),K.transparent===!0&&K.side===$n&&K.forceSinglePass===!1?(K.side=mn,K.needsUpdate=!0,S.renderBufferDirect(te,q,ne,K,R,me),K.side=wi,K.needsUpdate=!0,S.renderBufferDirect(te,q,ne,K,R,me),K.side=$n):S.renderBufferDirect(te,q,ne,K,R,me),R.onAfterRender(S,q,te,ne,K,me)}function Zn(R,q,te){q.isScene!==!0&&(q=He);const ne=ze.get(R),K=m.state.lights,me=m.state.shadowsArray,Ce=K.state.version,ke=le.getParameters(R,K.state,me,q,te),Te=le.getProgramCacheKey(ke);let Ke=ne.programs;ne.environment=R.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(R.isMeshStandardMaterial?It:Pt).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",ce),Ke=new Map,ne.programs=Ke);let et=Ke.get(Te);if(et!==void 0){if(ne.currentProgram===et&&ne.lightsStateVersion===Ce)return Dr(R,ke),et}else ke.uniforms=le.getUniforms(R),R.onBeforeCompile(ke,S),et=le.acquireProgram(ke,Te),Ke.set(Te,et),ne.uniforms=ke.uniforms;const qe=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Se.uniform),Dr(R,ke),ne.needsLights=cs(R),ne.lightsStateVersion=Ce,ne.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=et,ne.uniformsList=null,et}function Ir(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=qs.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Dr(R,q){const te=ze.get(R);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function po(R,q,te,ne,K){q.isScene!==!0&&(q=He),je.resetTextureUnits();const me=q.fog,Ce=ne.isMeshStandardMaterial?q.environment:null,ke=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Mr,Te=(ne.isMeshStandardMaterial?It:Pt).get(ne.envMap||Ce),Ke=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,_t=!!te.morphAttributes.color;let Dt=Si;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Dt=S.toneMapping);const St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Et=St!==void 0?St.length:0,Pe=ze.get(ne),vt=m.state.lights;if(at===!0&&(he===!0||R!==w)){const Ft=R===w&&ne.id===b;Se.setState(ne,R,Ft)}let mt=!1;ne.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==vt.state.version||Pe.outputColorSpace!==ke||K.isBatchedMesh&&Pe.batching===!1||!K.isBatchedMesh&&Pe.batching===!0||K.isBatchedMesh&&Pe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Pe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Pe.instancing===!1||!K.isInstancedMesh&&Pe.instancing===!0||K.isSkinnedMesh&&Pe.skinning===!1||!K.isSkinnedMesh&&Pe.skinning===!0||K.isInstancedMesh&&Pe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Pe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Pe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Pe.instancingMorph===!1&&K.morphTexture!==null||Pe.envMap!==Te||ne.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Se.numPlanes||Pe.numIntersection!==Se.numIntersection)||Pe.vertexAlphas!==Ke||Pe.vertexTangents!==et||Pe.morphTargets!==qe||Pe.morphNormals!==ot||Pe.morphColors!==_t||Pe.toneMapping!==Dt||Pe.morphTargetsCount!==Et)&&(mt=!0):(mt=!0,Pe.__version=ne.version);let Yt=Pe.currentProgram;mt===!0&&(Yt=Zn(ne,q,K));let Jn=!1,tn=!1,Pi=!1;const wt=Yt.getUniforms(),Wt=Pe.uniforms;if(Be.useProgram(Yt.program)&&(Jn=!0,tn=!0,Pi=!0),ne.id!==b&&(b=ne.id,tn=!0),Jn||w!==R){Be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),wt.setValue(N,"projectionMatrix",R.projectionMatrix),wt.setValue(N,"viewMatrix",R.matrixWorldInverse);const nn=wt.map.cameraPosition;nn!==void 0&&nn.setValue(N,Ie.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,tn=!0,Pi=!0)}if(K.isSkinnedMesh){wt.setOptional(N,K,"bindMatrix"),wt.setOptional(N,K,"bindMatrixInverse");const Ft=K.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),wt.setValue(N,"boneTexture",Ft.boneTexture,je))}K.isBatchedMesh&&(wt.setOptional(N,K,"batchingTexture"),wt.setValue(N,"batchingTexture",K._matricesTexture,je),wt.setOptional(N,K,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",K._indirectTexture,je),wt.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&wt.setValue(N,"batchingColorTexture",K._colorsTexture,je));const $t=te.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ve.update(K,te,Yt),(tn||Pe.receiveShadow!==K.receiveShadow)&&(Pe.receiveShadow=K.receiveShadow,wt.setValue(N,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Wt.envMap.value=Te,Wt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(Wt.envMapIntensity.value=q.environmentIntensity),tn&&(wt.setValue(N,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&vn(Wt,Pi),me&&ne.fog===!0&&pe.refreshFogUniforms(Wt,me),pe.refreshMaterialUniforms(Wt,ne,$,W,m.state.transmissionRenderTarget[R.id]),qs.upload(N,Ir(Pe),Wt,je)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(qs.upload(N,Ir(Pe),Wt,je),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(N,"center",K.center),wt.setValue(N,"modelViewMatrix",K.modelViewMatrix),wt.setValue(N,"normalMatrix",K.normalMatrix),wt.setValue(N,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Ft=ne.uniformsGroups;for(let nn=0,Lr=Ft.length;nn<Lr;nn++){const Qn=Ft[nn];Ye.update(Qn,Yt),Ye.bind(Qn,Yt)}}return Yt}function vn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function cs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,q,te){const ne=ze.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ze.get(R.texture).__webglTexture=q,ze.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const te=ze.get(R);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0};const ls=N.createFramebuffer();this.setRenderTarget=function(R,q=0,te=0){z=R,D=q,U=te;let ne=!0,K=null,me=!1,Ce=!1;if(R){const Te=ze.get(R);if(Te.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(N.FRAMEBUFFER,null),ne=!1;else if(Te.__webglFramebuffer===void 0)je.setupRenderTarget(R);else if(Te.__hasExternalTextures)je.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if(Te.__boundDepthTexture!==qe){if(qe!==null&&ze.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);const et=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[q])?K=et[q][te]:K=et[q],me=!0):R.samples>0&&je.useMultisampledRTT(R)===!1?K=ze.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?K=et[te]:K=et,F.copy(R.viewport),Z.copy(R.scissor),P=R.scissorTest}else F.copy(Ee).multiplyScalar($).floor(),Z.copy(Ne).multiplyScalar($).floor(),P=rt;if(te!==0&&(K=ls),Be.bindFramebuffer(N.FRAMEBUFFER,K)&&ne&&Be.drawBuffers(R,K),Be.viewport(F),Be.scissor(Z),Be.setScissorTest(P),me){const Te=ze.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,Te.__webglTexture,te)}else if(Ce){const Te=q;for(let Ke=0;Ke<R.textures.length;Ke++){const et=ze.get(R.textures[Ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ke,et.__webglTexture,te,Te)}}else if(R!==null&&te!==0){const Te=ze.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Te.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(R,q,te,ne,K,me,Ce,ke=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te){Be.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Ke=R.textures[ke],et=Ke.format,qe=Ke.type;if(!Je.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&te>=0&&te<=R.height-K&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ke),N.readPixels(q,te,ne,K,Ge.convert(et),Ge.convert(qe),me))}finally{const Ke=z!==null?ze.get(z).__webglFramebuffer:null;Be.bindFramebuffer(N.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,q,te,ne,K,me,Ce,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te)if(q>=0&&q<=R.width-ne&&te>=0&&te<=R.height-K){Be.bindFramebuffer(N.FRAMEBUFFER,Te);const Ke=R.textures[ke],et=Ke.format,qe=Ke.type;if(!Je.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ke),N.readPixels(q,te,ne,K,Ge.convert(et),Ge.convert(qe),0);const _t=z!==null?ze.get(z).__webglFramebuffer:null;Be.bindFramebuffer(N.FRAMEBUFFER,_t);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cd(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.deleteBuffer(ot),N.deleteSync(Dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,te=0){const ne=Math.pow(2,-te),K=Math.floor(R.image.width*ne),me=Math.floor(R.image.height*ne),Ce=q!==null?q.x:0,ke=q!==null?q.y:0;je.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,te,0,0,Ce,ke,K,me),Be.unbindTexture()};const Dn=N.createFramebuffer(),hs=N.createFramebuffer();this.copyTextureToTexture=function(R,q,te=null,ne=null,K=0,me=null){me===null&&(K!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=K,K=0):me=0);let Ce,ke,Te,Ke,et,qe,ot,_t,Dt;const St=R.isCompressedTexture?R.mipmaps[me]:R.image;if(te!==null)Ce=te.max.x-te.min.x,ke=te.max.y-te.min.y,Te=te.isBox3?te.max.z-te.min.z:1,Ke=te.min.x,et=te.min.y,qe=te.isBox3?te.min.z:0;else{const $t=Math.pow(2,-K);Ce=Math.floor(St.width*$t),ke=Math.floor(St.height*$t),R.isDataArrayTexture?Te=St.depth:R.isData3DTexture?Te=Math.floor(St.depth*$t):Te=1,Ke=0,et=0,qe=0}ne!==null?(ot=ne.x,_t=ne.y,Dt=ne.z):(ot=0,_t=0,Dt=0);const Et=Ge.convert(q.format),Pe=Ge.convert(q.type);let vt;q.isData3DTexture?(je.setTexture3D(q,0),vt=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(je.setTexture2DArray(q,0),vt=N.TEXTURE_2D_ARRAY):(je.setTexture2D(q,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const mt=N.getParameter(N.UNPACK_ROW_LENGTH),Yt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Jn=N.getParameter(N.UNPACK_SKIP_PIXELS),tn=N.getParameter(N.UNPACK_SKIP_ROWS),Pi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);const wt=R.isDataArrayTexture||R.isData3DTexture,Wt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const $t=ze.get(R),Ft=ze.get(q),nn=ze.get($t.__renderTarget),Lr=ze.get(Ft.__renderTarget);Be.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),Be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let Qn=0;Qn<Te;Qn++)wt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.get(R).__webglTexture,K,qe+Qn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.get(q).__webglTexture,me,Dt+Qn)),N.blitFramebuffer(Ke,et,Ce,ke,ot,_t,Ce,ke,N.DEPTH_BUFFER_BIT,N.NEAREST);Be.bindFramebuffer(N.READ_FRAMEBUFFER,null),Be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||ze.has(R)){const $t=ze.get(R),Ft=ze.get(q);Be.bindFramebuffer(N.READ_FRAMEBUFFER,Dn),Be.bindFramebuffer(N.DRAW_FRAMEBUFFER,hs);for(let nn=0;nn<Te;nn++)wt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.__webglTexture,K,qe+nn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$t.__webglTexture,K),Wt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,me,Dt+nn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ft.__webglTexture,me),K!==0?N.blitFramebuffer(Ke,et,Ce,ke,ot,_t,Ce,ke,N.COLOR_BUFFER_BIT,N.NEAREST):Wt?N.copyTexSubImage3D(vt,me,ot,_t,Dt+nn,Ke,et,Ce,ke):N.copyTexSubImage2D(vt,me,ot,_t,Ke,et,Ce,ke);Be.bindFramebuffer(N.READ_FRAMEBUFFER,null),Be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Wt?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(vt,me,ot,_t,Dt,Ce,ke,Te,Et,Pe,St.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,me,ot,_t,Dt,Ce,ke,Te,Et,St.data):N.texSubImage3D(vt,me,ot,_t,Dt,Ce,ke,Te,Et,Pe,St):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,ot,_t,Ce,ke,Et,Pe,St.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,ot,_t,St.width,St.height,Et,St.data):N.texSubImage2D(N.TEXTURE_2D,me,ot,_t,Ce,ke,Et,Pe,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,tn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pi),me===0&&q.generateMipmaps&&N.generateMipmap(vt),Be.unbindTexture()},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&je.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?je.setTextureCube(R,0):R.isData3DTexture?je.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?je.setTexture2DArray(R,0):je.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){D=0,U=0,z=null,Be.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}function bc(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){var r=!1;try{r=this instanceof n}catch{}return r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Xo={},zl={},kl;function R_(){return kl||(kl=1,ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),zl}var Ns={},Qa=function(i,e){return Qa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Qa(i,e)};function su(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Qa(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var eo=function(){return eo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},eo.apply(this,arguments)};function ou(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function au(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function cu(i,e){return function(t,n){e(t,n,i)}}function lu(i,e,t,n,r,s){function o(m){if(m!==void 0&&typeof m!="function")throw new TypeError("Function expected");return m}for(var a=n.kind,u=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?n.static?i:i.prototype:null,p=e||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),h,d=!1,g=t.length-1;g>=0;g--){var x={};for(var E in n)x[E]=E==="access"?{}:n[E];for(var E in n.access)x.access[E]=n.access[E];x.addInitializer=function(m){if(d)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(m||null))};var v=(0,t[g])(a==="accessor"?{get:p.get,set:p.set}:p[u],x);if(a==="accessor"){if(v===void 0)continue;if(v===null||typeof v!="object")throw new TypeError("Object expected");(h=o(v.get))&&(p.get=h),(h=o(v.set))&&(p.set=h),(h=o(v.init))&&r.unshift(h)}else(h=o(v))&&(a==="field"?r.unshift(h):p[u]=h)}l&&Object.defineProperty(l,n.name,p),d=!0}function hu(i,e,t){for(var n=arguments.length>2,r=0;r<e.length;r++)t=n?e[r].call(i,t):e[r].call(i);return n?t:void 0}function uu(i){return typeof i=="symbol"?i:"".concat(i)}function fu(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function du(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}function pu(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(p){try{l(n.next(p))}catch(h){o(h)}}function u(p){try{l(n.throw(p))}catch(h){o(h)}}function l(p){p.done?s(p.value):r(p.value).then(a,u)}l((n=n.apply(i,e||[])).next())})}function mu(i,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(p){return u([l,p])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(n=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(i,t)}catch(p){l=[6,p],r=0}finally{n=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var ao=Object.create?(function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}):(function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]});function gu(i,e){for(var t in i)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&ao(e,i,t)}function to(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ac(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}function _u(){for(var i=[],e=0;e<arguments.length;e++)i=i.concat(Ac(arguments[e]));return i}function vu(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)n[r]=s[o];return n}function xu(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}function wr(i){return this instanceof wr?(this.v=i,this):new wr(i)}function yu(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(i,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(g){return function(x){return Promise.resolve(x).then(g,h)}}function a(g,x){n[g]&&(r[g]=function(E){return new Promise(function(v,m){s.push([g,E,v,m])>1||u(g,E)})},x&&(r[g]=x(r[g])))}function u(g,x){try{l(n[g](x))}catch(E){d(s[0][3],E)}}function l(g){g.value instanceof wr?Promise.resolve(g.value.v).then(p,h):d(s[0][2],g)}function p(g){u("next",g)}function h(g){u("throw",g)}function d(g,x){g(x),s.shift(),s.length&&u(s[0][0],s[0][1])}}function Eu(i){var e,t;return e={},n("next"),n("throw",function(r){throw r}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(r,s){e[r]=i[r]?function(o){return(t=!t)?{value:wr(i[r](o)),done:!1}:s?s(o):o}:s}}function Su(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof to=="function"?to(i):i[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(s){t[s]=i[s]&&function(o){return new Promise(function(a,u){o=i[s](o),r(a,u,o.done,o.value)})}}function r(s,o,a,u){Promise.resolve(u).then(function(l){s({value:l,done:a})},o)}}function Mu(i,e){return Object.defineProperty?Object.defineProperty(i,"raw",{value:e}):i.raw=e,i}var C_=Object.create?(function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}):function(i,e){i.default=e},ec=function(i){return ec=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},ec(i)};function Tu(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t=ec(i),n=0;n<t.length;n++)t[n]!=="default"&&ao(e,i,t[n]);return C_(e,i),e}function wu(i){return i&&i.__esModule?i:{default:i}}function bu(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)}function Au(i,e,t,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,t):r?r.value=t:e.set(i,t),t}function Ru(i,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof i=="function"?e===i:i.has(e)}function Cu(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var n,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose],t&&(r=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");r&&(n=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),i.stack.push({value:e,dispose:n,async:t})}else t&&i.stack.push({async:!0});return e}var P_=typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var n=new Error(t);return n.name="SuppressedError",n.error=i,n.suppressed=e,n};function Pu(i){function e(s){i.error=i.hasError?new P_(s,i.error,"An error was suppressed during disposal."):s,i.hasError=!0}var t,n=0;function r(){for(;t=i.stack.pop();)try{if(!t.async&&n===1)return n=0,i.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return n|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else n|=1}catch(o){e(o)}if(n===1)return i.hasError?Promise.reject(i.error):Promise.resolve();if(i.hasError)throw i.error}return r()}function Iu(i,e){return typeof i=="string"&&/^\.\.?\//.test(i)?i.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,n,r,s,o){return n?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):i}const I_={__extends:su,__assign:eo,__rest:ou,__decorate:au,__param:cu,__esDecorate:lu,__runInitializers:hu,__propKey:uu,__setFunctionName:fu,__metadata:du,__awaiter:pu,__generator:mu,__createBinding:ao,__exportStar:gu,__values:to,__read:Ac,__spread:_u,__spreadArrays:vu,__spreadArray:xu,__await:wr,__asyncGenerator:yu,__asyncDelegator:Eu,__asyncValues:Su,__makeTemplateObject:Mu,__importStar:Tu,__importDefault:wu,__classPrivateFieldGet:bu,__classPrivateFieldSet:Au,__classPrivateFieldIn:Ru,__addDisposableResource:Cu,__disposeResources:Pu,__rewriteRelativeImportExtension:Iu},D_=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Cu,get __assign(){return eo},__asyncDelegator:Eu,__asyncGenerator:yu,__asyncValues:Su,__await:wr,__awaiter:pu,__classPrivateFieldGet:bu,__classPrivateFieldIn:Ru,__classPrivateFieldSet:Au,__createBinding:ao,__decorate:au,__disposeResources:Pu,__esDecorate:lu,__exportStar:gu,__extends:su,__generator:mu,__importDefault:wu,__importStar:Tu,__makeTemplateObject:Mu,__metadata:du,__param:cu,__propKey:uu,__read:Ac,__rest:ou,__rewriteRelativeImportExtension:Iu,__runInitializers:hu,__setFunctionName:fu,__spread:_u,__spreadArray:xu,__spreadArrays:vu,__values:to,default:I_},Symbol.toStringTag,{value:"Module"})),co=bc(D_);var qo={},Hl;function lo(){return Hl||(Hl=1,(function(i){i.CloseCode=void 0,(function(n){n[n.CONSENTED=4e3]="CONSENTED",n[n.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(i.CloseCode||(i.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}i.AbortError=t,i.ServerError=e})(qo)),qo}var jo={},Yo={},Ko={},$r={exports:{}},L_=$r.exports,Vl;function Rc(){return Vl||(Vl=1,(function(i,e){(function(t,n){n(e)})(L_,(function(t){t.OPERATION=void 0,(function(M){M[M.ADD=128]="ADD",M[M.REPLACE=0]="REPLACE",M[M.DELETE=64]="DELETE",M[M.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",M[M.MOVE_AND_ADD=160]="MOVE_AND_ADD",M[M.DELETE_AND_ADD=192]="DELETE_AND_ADD",M[M.CLEAR=10]="CLEAR",M[M.REVERSE=15]="REVERSE",M[M.MOVE=32]="MOVE",M[M.DELETE_BY_REFID=33]="DELETE_BY_REFID",M[M.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??=Symbol.for("Symbol.metadata");const s="~track",o="~encoder",a="~decoder",u="~filter",l="~getByIndex",p="~deleteByIndex",h="~changes",d="~childType",g="~onEncodeEnd",x="~onDecodeEnd",E="~descriptors",v="~__numFields",m="~__refTypeFieldIndexes",A="~__viewFieldIndexes",C="$__fieldIndexesByViewTag";let S;try{S=new TextEncoder}catch{}const L=new ArrayBuffer(8),D=new Int32Array(L),U=new Float32Array(L),z=new Float64Array(L),b=new BigInt64Array(L),F=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(M,c){for(var f=0,_=0,y=0,O=M.length;y<O;y++)f=M.charCodeAt(y),f<128?_+=1:f<2048?_+=2:f<55296||f>=57344?_+=3:(y++,_+=4);return _};function Z(M,c,f){for(var _=0,y=0,O=c.length;y<O;y++)_=c.charCodeAt(y),_<128?M[f.offset++]=_:_<2048?(M[f.offset]=192|_>>6,M[f.offset+1]=128|_&63,f.offset+=2):_<55296||_>=57344?(M[f.offset]=224|_>>12,M[f.offset+1]=128|_>>6&63,M[f.offset+2]=128|_&63,f.offset+=3):(y++,_=65536+((_&1023)<<10|c.charCodeAt(y)&1023),M[f.offset]=240|_>>18,M[f.offset+1]=128|_>>12&63,M[f.offset+2]=128|_>>6&63,M[f.offset+3]=128|_&63,f.offset+=4)}function P(M,c,f){M[f.offset++]=c&255}function G(M,c,f){M[f.offset++]=c&255}function k(M,c,f){M[f.offset++]=c&255,M[f.offset++]=c>>8&255}function B(M,c,f){M[f.offset++]=c&255,M[f.offset++]=c>>8&255}function W(M,c,f){M[f.offset++]=c&255,M[f.offset++]=c>>8&255,M[f.offset++]=c>>16&255,M[f.offset++]=c>>24&255}function $(M,c,f){const _=c>>24,y=c>>16,O=c>>8,j=c;M[f.offset++]=j&255,M[f.offset++]=O&255,M[f.offset++]=y&255,M[f.offset++]=_&255}function ue(M,c,f){const _=Math.floor(c/Math.pow(2,32)),y=c>>>0;$(M,y,f),$(M,_,f)}function fe(M,c,f){const _=c/Math.pow(2,32)>>0,y=c>>>0;$(M,y,f),$(M,_,f)}function Ee(M,c,f){b[0]=BigInt.asIntN(64,c),W(M,D[0],f),W(M,D[1],f)}function Ne(M,c,f){b[0]=BigInt.asIntN(64,c),W(M,D[0],f),W(M,D[1],f)}function rt(M,c,f){U[0]=c,W(M,D[0],f)}function ht(M,c,f){z[0]=c,W(M,D[0],f),W(M,D[1],f)}function at(M,c,f){M[f.offset++]=c?1:0}function he(M,c,f){c||(c="");let _=F(c,"utf8"),y=0;if(_<32)M[f.offset++]=_|160,y=1;else if(_<256)M[f.offset++]=217,M[f.offset++]=_%255,y=2;else if(_<65536)M[f.offset++]=218,B(M,_,f),y=3;else if(_<4294967296)M[f.offset++]=219,$(M,_,f),y=5;else throw new Error("String too long");return Z(M,c,f),y+_}function de(M,c,f){if(isNaN(c))return de(M,0,f);if(isFinite(c)){if(c!==(c|0))return Math.abs(c)<=34028235e31&&(U[0]=c,Math.abs(Math.abs(U[0])-Math.abs(c))<1e-4)?(M[f.offset++]=202,rt(M,c,f),5):(M[f.offset++]=203,ht(M,c,f),9)}else return de(M,c>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,f);return c>=0?c<128?(M[f.offset++]=c&255,1):c<256?(M[f.offset++]=204,M[f.offset++]=c&255,2):c<65536?(M[f.offset++]=205,B(M,c,f),3):c<4294967296?(M[f.offset++]=206,$(M,c,f),5):(M[f.offset++]=207,fe(M,c,f),9):c>=-32?(M[f.offset++]=224|c+32,1):c>=-128?(M[f.offset++]=208,P(M,c,f),2):c>=-32768?(M[f.offset++]=209,k(M,c,f),3):c>=-2147483648?(M[f.offset++]=210,W(M,c,f),5):(M[f.offset++]=211,ue(M,c,f),9)}const Ie={int8:P,uint8:G,int16:k,uint16:B,int32:W,uint32:$,int64:ue,uint64:fe,bigint64:Ee,biguint64:Ne,float32:rt,float64:ht,boolean:at,string:he,number:de,utf8Write:Z,utf8Length:F},Ze=new ArrayBuffer(8),He=new Int32Array(Ze),ut=new Float32Array(Ze),jt=new Float64Array(Ze),N=new BigUint64Array(Ze),At=new BigInt64Array(Ze);function tt(M,c,f){f>M.length-c.offset&&(f=M.length-c.offset);for(var _="",y=0,O=c.offset,j=c.offset+f;O<j;O++){var oe=M[O];if((oe&128)===0){_+=String.fromCharCode(oe);continue}if((oe&224)===192){_+=String.fromCharCode((oe&31)<<6|M[++O]&63);continue}if((oe&240)===224){_+=String.fromCharCode((oe&15)<<12|(M[++O]&63)<<6|(M[++O]&63)<<0);continue}if((oe&248)===240){y=(oe&7)<<18|(M[++O]&63)<<12|(M[++O]&63)<<6|(M[++O]&63)<<0,y>=65536?(y-=65536,_+=String.fromCharCode((y>>>10)+55296,(y&1023)+56320)):_+=String.fromCharCode(y);continue}console.error("decode.utf8Read(): Invalid byte "+oe+" at offset "+O+". Skip to end of string: "+(c.offset+f));break}return c.offset+=f,_}function Je(M,c){return Be(M,c)<<24>>24}function Be(M,c){return M[c.offset++]}function Tt(M,c){return ze(M,c)<<16>>16}function ze(M,c){return M[c.offset++]|M[c.offset++]<<8}function je(M,c){return M[c.offset++]|M[c.offset++]<<8|M[c.offset++]<<16|M[c.offset++]<<24}function Pt(M,c){return je(M,c)>>>0}function It(M,c){return He[0]=je(M,c),ut[0]}function I(M,c){return He[0]=je(M,c),He[1]=je(M,c),jt[0]}function T(M,c){const f=Pt(M,c);return je(M,c)*Math.pow(2,32)+f}function J(M,c){const f=Pt(M,c);return Pt(M,c)*Math.pow(2,32)+f}function le(M,c){return He[0]=je(M,c),He[1]=je(M,c),At[0]}function pe(M,c){return He[0]=je(M,c),He[1]=je(M,c),N[0]}function ae(M,c){return Be(M,c)>0}function Xe(M,c){const f=M[c.offset++];let _;return f<192?_=f&31:f===217?_=Be(M,c):f===218?_=ze(M,c):f===219&&(_=Pt(M,c)),tt(M,c,_)}function Se(M,c){const f=M[c.offset++];if(f<128)return f;if(f===202)return It(M,c);if(f===203)return I(M,c);if(f===204)return Be(M,c);if(f===205)return ze(M,c);if(f===206)return Pt(M,c);if(f===207)return J(M,c);if(f===208)return Je(M,c);if(f===209)return Tt(M,c);if(f===210)return je(M,c);if(f===211)return T(M,c);if(f>223)return(255-f+1)*-1}function We(M,c){const f=M[c.offset];return f<192&&f>160||f===217||f===218||f===219}const Ue={utf8Read:tt,int8:Je,uint8:Be,int16:Tt,uint16:ze,int32:je,uint32:Pt,float32:It,float64:I,int64:T,uint64:J,bigint64:le,biguint64:pe,boolean:ae,string:Xe,number:Se,stringCheck:We},ve={},De=new Map;function $e(M,c){c.constructor&&(De.set(c.constructor,M),ve[M]=c),c.encode&&(Ie[M]=c.encode),c.decode&&(Ue[M]=c.decode)}function Ge(M){return ve[M]}function be(M){for(const c in M)$e(c,M[c]);return c=>Te(c)}const Vn=class Vn{static register(c){const f=Object.getPrototypeOf(c);if(f!==Pe){let _=Vn.inheritedTypes.get(f);_||(_=new Set,Vn.inheritedTypes.set(f,_)),_.add(c)}}static cache(c){let f=Vn.cachedContexts.get(c);return f||(f=new Vn(c),Vn.cachedContexts.set(c,f)),f}constructor(c){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},c&&this.discoverTypes(c)}has(c){return this.schemas.has(c)}get(c){return this.types[c]}add(c,f=this.schemas.size){return this.schemas.has(c)?!1:(this.types[f]=c,c[Symbol.metadata]===void 0&&_e.initialize(c),this.schemas.set(c,f),!0)}getTypeId(c){return this.schemas.get(c)}discoverTypes(c,f,_,y){if(y&&this.registerFilteredByParent(c,f,_),!this.add(c))return;Vn.inheritedTypes.get(c)?.forEach(oe=>{this.discoverTypes(oe,f,_,y)});let O=c;for(;(O=Object.getPrototypeOf(O))&&O!==Pe&&O!==Function.prototype;)this.discoverTypes(O);const j=c[Symbol.metadata]??={};j[A]&&(this.hasFilters=!0);for(const oe in j){const ee=oe,re=j[ee].type,se=j[ee].tag!==void 0;if(typeof re!="string")if(typeof re=="function")this.discoverTypes(re,c,ee,y||se);else{const ie=Object.values(re)[0];if(typeof ie=="string")continue;this.discoverTypes(ie,c,ee,y||se)}}}registerFilteredByParent(c,f,_){let O=`${this.schemas.get(c)??this.schemas.size}`;f&&(O+=`-${this.schemas.get(f)}`),O+=`-${_}`,this.parentFiltered[O]=!0}debug(){let c="";for(const f in this.parentFiltered){const _=f.split("-").map(Number),y=_.pop();c+=`
		`,c+=`${f}: ${_.reverse().map((O,j)=>{const oe=this.types[O],ee=oe[Symbol.metadata];let re=oe.name;return j===0&&(re+=`[${ee[y].name}]`),`${re}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${c}`}};Vn.inheritedTypes=new Map,Vn.cachedContexts=new Map;let Ye=Vn;function V(M){if(Array.isArray(M))return{array:V(M[0])};if(typeof M.type<"u")return M.type;if(ye(M))return Object.keys(M).every(c=>typeof M[c]=="string")?"string":"number";if(typeof M=="object"&&M!==null){const c=Object.keys(M).find(f=>ve[f]!==void 0);if(c)return M[c]=V(M[c]),M}return M}function ye(M){if(typeof M=="function"&&M[Symbol.metadata])return!1;const c=Object.keys(M),f=c.filter(_=>/\d+/.test(_));return!!(f.length>0&&f.length===c.length/2&&M[M[f[0]]]==f[0]||c.length>0&&c.every(_=>typeof M[_]=="string"&&M[_]===_))}const _e={addField(M,c,f,_,y){if(c>64)throw new Error(`Can't define field '${f}'.
Schema instances may only have up to 64 fields.`);M[c]=Object.assign(M[c]||{},{type:V(_),index:c,name:f}),Object.defineProperty(M,E,{value:M[E]||{},enumerable:!1,configurable:!0}),y?(M[E][f]=y,M[E][`_${f}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):M[E][f]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(M,v,{value:c,enumerable:!1,configurable:!0}),Object.defineProperty(M,f,{value:c,enumerable:!1,configurable:!0}),typeof M[c].type!="string"&&(M[m]===void 0&&Object.defineProperty(M,m,{value:[],enumerable:!1,configurable:!0}),M[m].push(c))},setTag(M,c,f){const _=M[c],y=M[_];y.tag=f,M[A]||(Object.defineProperty(M,A,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(M,C,{value:{},enumerable:!1,configurable:!0})),M[A].push(_),M[C][f]||(M[C][f]=[]),M[C][f].push(_)},setFields(M,c){const f=M.prototype.constructor;Ye.register(f);const _=Object.getPrototypeOf(f),y=_&&_[Symbol.metadata],O=_e.initialize(f);f[s]||(f[s]=Pe[s]),f[o]||(f[o]=Pe[o]),f[a]||(f[a]=Pe[a]),f.prototype.toJSON||(f.prototype.toJSON=Pe.prototype.toJSON);let j=O[v]??(y&&y[v])??-1;j++;for(const oe in c){const ee=V(c[oe]),re=typeof Object.keys(ee)[0]=="string"&&Ge(Object.keys(ee)[0]),se=re?Object.values(ee)[0]:ee;_e.addField(O,j,oe,ee,Ke(`_${oe}`,j,se,re)),j++}return M},isDeprecated(M,c){return M[c].deprecated===!0},init(M){const c={};M[Symbol.metadata]=c,Object.defineProperty(c,v,{value:0,enumerable:!1,configurable:!0})},initialize(M){const c=Object.getPrototypeOf(M),f=c[Symbol.metadata];let _=M[Symbol.metadata]??Object.create(null);return c!==Pe&&_===f&&(_=Object.create(null),f&&(Object.setPrototypeOf(_,f),Object.defineProperty(_,v,{value:f[v],enumerable:!1,configurable:!0,writable:!0}),f[A]!==void 0&&(Object.defineProperty(_,A,{value:[...f[A]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,C,{value:{...f[C]},enumerable:!1,configurable:!0,writable:!0})),f[m]!==void 0&&Object.defineProperty(_,m,{value:[...f[m]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(_,E,{value:{...f[E]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(M,Symbol.metadata,{value:_,writable:!1,configurable:!0}),_},isValidInstance(M){return M.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(M.constructor[Symbol.metadata],v)},getFields(M){const c=M[Symbol.metadata],f={};for(let _=0;_<=c[v];_++)f[c[_].name]=c[_].type;return f},hasViewTagAtIndex(M,c){return M?.[A]?.includes(c)}};function Le(M){return{indexes:{},operations:[],queueRootNode:M}}function ge(){return{next:void 0,tail:void 0}}function ce(M,c){const f=M.indexes[c];f===void 0?M.indexes[c]=M.operations.push(c)-1:M.operations[f]=c}function Ve(M,c){let f=M.indexes[c];f===void 0&&(f=Object.values(M.indexes).at(-1),c=Object.entries(M.indexes).find(([_,y])=>y===f)?.[0]),M.operations[f]=void 0,delete M.indexes[c]}class Qe{constructor(c){this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=c,this.metadata=c.constructor[Symbol.metadata],this.metadata?.[A]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(c){this.root=c;const f=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,f),f&&this.forEachChild((_,y)=>{_.root!==c?_.setRoot(c):c.add(_)})}setParent(c,f,_){if(this.addParent(c,_),!f)return;const y=f.add(this);f!==this.root&&(this.root=f,this.checkIsFiltered(c,_,y)),y&&this.forEachChild((O,j)=>{if(O.root===f){f.add(O),f.moveNextToParent(O);return}O.setParent(this.ref,f,j)})}forEachChild(c){if(this.ref[d]){if(typeof this.ref[d]!="string")for(const[f,_]of this.ref.entries())_&&c(_[h],this.indexes?.[f]??f)}else for(const f of this.metadata?.[m]??[]){const _=this.metadata[f],y=this.ref[_.name];y&&c(y[h],f)}}operation(c){this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-c),this.root?.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-c),this.root?.enqueueChangeTree(this,"changes"))}change(c,f=t.OPERATION.ADD){const _=this.isFiltered||this.metadata?.[c]?.tag!==void 0,y=_?this.filteredChanges:this.changes,O=this.indexedOperations[c];if(!O||O===t.OPERATION.DELETE){const j=O&&O===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:f;this.indexedOperations[c]=j}ce(y,c),_?(ce(this.allFilteredChanges,c),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(ce(this.allChanges,c),this.root?.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(c){const f=this.isFiltered?this.filteredChanges:this.changes,_={},y={};for(const O in this.indexedOperations)_[Number(O)+c]=this.indexedOperations[O],y[Number(O)+c]=f.indexes[O];this.indexedOperations=_,f.indexes=y,f.operations=f.operations.map(O=>O+c)}shiftAllChangeIndexes(c,f=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(c,f,this.allFilteredChanges),this._shiftAllChangeIndexes(c,f,this.allChanges)):this._shiftAllChangeIndexes(c,f,this.allChanges)}_shiftAllChangeIndexes(c,f=0,_){const y={};let O=0;for(const j in _.indexes)y[O++]=_.indexes[j];_.indexes=y;for(let j=0;j<_.operations.length;j++){const oe=_.operations[j];oe>f&&(_.operations[j]=oe+c)}}indexedOperation(c,f,_=c){this.indexedOperations[c]=f,this.filteredChanges!==void 0?(ce(this.allFilteredChanges,_),ce(this.filteredChanges,c),this.root?.enqueueChangeTree(this,"filteredChanges")):(ce(this.allChanges,_),ce(this.changes,c),this.root?.enqueueChangeTree(this,"changes"))}getType(c){return this.ref[d]||this.metadata[c].type}getChange(c){return this.indexedOperations[c]}getValue(c,f=!1){return this.ref[l](c,f)}delete(c,f,_=c){if(c===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${c}'`)}catch(j){console.warn(j)}return}const y=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[c]=f??t.OPERATION.DELETE,ce(y,c),Ve(this.allChanges,_);const O=this.getValue(c);return O&&O[h]&&this.root?.remove(O[h]),this.filteredChanges!==void 0?(Ve(this.allFilteredChanges,_),this.root?.enqueueChangeTree(this,"filteredChanges")):this.root?.enqueueChangeTree(this,"changes"),O}endEncode(c){this.indexedOperations={},this[c]=Le(),this.ref[g]?.(),this.isNew=!1}discard(c=!1){this.ref[g]?.(),this.indexedOperations={},this.changes=Le(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=Le(this.filteredChanges.queueRootNode)),c&&(this.allChanges=Le(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=Le(this.allFilteredChanges.queueRootNode)))}discardAll(){const c=Object.keys(this.indexedOperations);for(let f=0,_=c.length;f<_;f++){const y=this.getValue(Number(c[f]));y&&y[h]&&y[h].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(c,f,_){this.root.types.hasFilters&&(this._checkFilteredByParent(c,f),this.filteredChanges!==void 0&&(this.root?.enqueueChangeTree(this,"filteredChanges"),_&&this.root?.enqueueChangeTree(this,"allFilteredChanges"))),this.isFiltered||(this.root?.enqueueChangeTree(this,"changes"),_&&this.root?.enqueueChangeTree(this,"allChanges"))}_checkFilteredByParent(c,f){if(!c)return;const _=_e.isValidInstance(this.ref)?this.ref.constructor:this.ref[d];let y,O=!_e.isValidInstance(c);O?(y=c[h],c=y.parent,f=y.parentIndex):y=c[h];const j=c.constructor;let oe=`${this.root.types.getTypeId(_)}`;j&&(oe+=`-${this.root.types.schemas.get(j)}`),oe+=`-${f}`;const ee=_e.hasViewTagAtIndex(j?.[Symbol.metadata],f);this.isFiltered=c[h].isFiltered||this.root.types.parentFiltered[oe]||ee,this.isFiltered&&(this.isVisibilitySharedWithParent=y.isFiltered&&typeof _!="string"&&!ee&&O,this.filteredChanges||(this.filteredChanges=Le(),this.allFilteredChanges=Le()),this.changes.operations.length>0&&(this.changes.operations.forEach(re=>ce(this.filteredChanges,re)),this.allChanges.operations.forEach(re=>ce(this.allFilteredChanges,re)),this.changes=Le(),this.allChanges=Le()))}get parent(){return this.parentChain?.ref}get parentIndex(){return this.parentChain?.index}addParent(c,f){if(this.hasParent((_,y)=>_[h]===c[h])){this.parentChain.index=f;return}this.parentChain={ref:c,index:f,next:this.parentChain}}removeParent(c=this.parent){let f=this.parentChain,_=null;for(;f;){if(f.ref[h]===c[h])return _?_.next=f.next:this.parentChain=f.next,!0;_=f,f=f.next}return this.parentChain===void 0}findParent(c){let f=this.parentChain;for(;f;){if(c(f.ref,f.index))return f;f=f.next}}hasParent(c){return this.findParent(c)!==void 0}getAllParents(){const c=[];let f=this.parentChain;for(;f;)c.push({ref:f.ref,index:f.index}),f=f.next;return c}}function yt(M,c,f,_,y,O){typeof f=="string"?Ie[f]?.(c,_,O):f[Symbol.metadata]!==void 0?(Ie.number(c,_[h].refId,O),(y&t.OPERATION.ADD)===t.OPERATION.ADD&&M.tryEncodeTypeId(c,f,_.constructor,O)):Ie.number(c,_[h].refId,O)}const gt=function(M,c,f,_,y,O,j,oe,ee){if(c[O.offset++]=(_|y)&255,y===t.OPERATION.DELETE)return;const re=f.ref,se=ee[_];yt(M,c,ee[_].type,re[se.name],y,O)},dn=function(M,c,f,_,y,O){if(c[O.offset++]=y&255,Ie.number(c,_,O),y===t.OPERATION.DELETE)return;const j=f.ref;if((y&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof j.set=="function"){const re=f.ref.$indexes.get(_);Ie.string(c,re,O)}const oe=j[d],ee=j[l](_);yt(M,c,oe,ee,y,O)},_n=function(M,c,f,_,y,O,j,oe){const ee=f.ref,re=oe&&f.isFiltered&&typeof f.getType(_)!="string";let se;if(re){const we=ee.tmpItems[_];if(!we)return;se=we[h].refId,y===t.OPERATION.DELETE?y=t.OPERATION.DELETE_BY_REFID:y===t.OPERATION.ADD&&(y=t.OPERATION.ADD_BY_REFID)}else se=_;if(c[O.offset++]=y&255,Ie.number(c,se,O),y===t.OPERATION.DELETE||y===t.OPERATION.DELETE_BY_REFID)return;const ie=f.getType(_),Oe=f.getValue(_,j);yt(M,c,ie,Oe,y,O)},Pr=-1;function In(M,c,f,_,y,O,j,oe){const ee=M.root,re=f[l](_);let se;if((c&t.OPERATION.DELETE)===t.OPERATION.DELETE){const ie=ee.refIds.get(re);ie!==void 0&&ee.removeRef(ie),c!==t.OPERATION.DELETE_AND_ADD&&f[p](_),se=void 0}if(c!==t.OPERATION.DELETE)if(Pe.is(y)){const ie=Ue.number(O,j);if(se=ee.refs.get(ie),(c&t.OPERATION.ADD)===t.OPERATION.ADD){const Oe=M.getInstanceType(O,j,y);se||(se=M.createInstanceOfType(Oe)),ee.addRef(ie,se,se!==re||c===t.OPERATION.DELETE_AND_ADD&&se===re)}}else if(typeof y=="string")se=Ue[y](O,j);else{const ie=Ge(Object.keys(y)[0]),Oe=Ue.number(O,j),we=ee.refs.has(Oe)?re||ee.refs.get(Oe):new ie.constructor;if(se=we.clone(!0),se[d]=Object.values(y)[0],re){let Me=ee.refIds.get(re);if(Me!==void 0&&Oe!==Me){const xe=re.entries();let Fe;for(;(Fe=xe.next())&&!Fe.done;){const[Bt,zt]=Fe.value;typeof zt=="object"&&(Me=ee.refIds.get(zt),ee.removeRef(Me)),oe.push({ref:re,refId:Me,op:t.OPERATION.DELETE,field:Bt,value:void 0,previousValue:zt})}}}ee.addRef(Oe,se,we!==re||c===t.OPERATION.DELETE_AND_ADD&&we===re)}return{value:se,previousValue:re}}const ji=function(M,c,f,_,y){const O=c[f.offset++],j=_.constructor[Symbol.metadata],oe=O>>6<<6,ee=O%(oe||255),re=j[ee];if(re===void 0)return console.warn("@colyseus/schema: field not defined at",{index:ee,ref:_.constructor.name,metadata:j}),Pr;const{value:se,previousValue:ie}=In(M,oe,_,ee,re.type,c,f,y);se!=null&&(_[re.name]=se),ie!==se&&y.push({ref:_,refId:M.currentRefId,op:oe,field:re.name,value:se,previousValue:ie})},Ri=function(M,c,f,_,y){const O=c[f.offset++];if(O===t.OPERATION.CLEAR){M.removeChildRefs(_,y),_.clear();return}const j=Ue.number(c,f),oe=_[d];let ee;(O&t.OPERATION.ADD)===t.OPERATION.ADD?typeof _.set=="function"?(ee=Ue.string(c,f),_.setIndex(j,ee)):ee=j:ee=_.getIndex(j);const{value:re,previousValue:se}=In(M,O,_,j,oe,c,f,y);if(re!=null){if(typeof _.set=="function")_.$items.set(ee,re);else if(typeof _.$setAt=="function")_.$setAt(j,re,O);else if(typeof _.add=="function"){const ie=_.add(re);typeof ie=="number"&&_.setIndex(ie,ie)}}se!==re&&y.push({ref:_,refId:M.currentRefId,op:O,field:"",dynamicIndex:ee,value:re,previousValue:se})},os=function(M,c,f,_,y){let O=c[f.offset++],j;if(O===t.OPERATION.CLEAR){M.removeChildRefs(_,y),_.clear();return}else if(O===t.OPERATION.REVERSE){_.reverse();return}else if(O===t.OPERATION.DELETE_BY_REFID){const ie=Ue.number(c,f),Oe=M.root.refs.get(ie);j=_.findIndex(we=>we===Oe),_[p](j),y.push({ref:_,refId:M.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:j,value:void 0,previousValue:Oe});return}else if(O===t.OPERATION.ADD_BY_REFID){const ie=Ue.number(c,f),Oe=M.root.refs.get(ie);Oe&&(j=_.findIndex(we=>we===Oe)),(j===-1||j===void 0)&&(j=_.length)}else j=Ue.number(c,f);const oe=_[d];let ee=j;const{value:re,previousValue:se}=In(M,O,_,j,oe,c,f,y);re!=null&&re!==se&&_.$setAt(j,re,O),se!==re&&y.push({ref:_,refId:M.currentRefId,op:O,field:"",dynamicIndex:ee,value:re,previousValue:se})};class Ci extends Error{}function as(M,c,f,_){let y,O=!1;switch(c){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":y="number",isNaN(M)&&console.log(`trying to encode "NaN" in ${f.constructor.name}#${_}`);break;case"bigint64":case"biguint64":y="bigint";break;case"string":y="string",O=!0;break;case"boolean":return;default:return}if(typeof M!==y&&(!O||O&&M!==null)){let j=`'${JSON.stringify(M)}'${M&&M.constructor&&` (${M.constructor.name})`||""}`;throw new Ci(`a '${y}' was expected, but ${j} was provided in ${f.constructor.name}#${_}`)}}function Zn(M,c,f,_){if(!(M instanceof c))throw new Ci(`a '${c.name}' was expected, but '${M&&M.constructor.name}' was provided in ${f.constructor.name}#${_}`)}var Ir,Dr;const po=(M,c)=>{const f=M.toString(),_=c.toString();return f<_?-1:f>_?1:0},Ln=class Ln{static[(Ir=o,Dr=a,u)](c,f,_){return!_||typeof c[d]=="string"||_.isChangeTreeVisible(c.tmpItems[f]?.[h])}static is(c){return Array.isArray(c)||c.array!==void 0}static from(c){return new Ln(...Array.from(c))}constructor(...c){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,d,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const f=new Proxy(this,{get:(_,y)=>typeof y!="symbol"&&!isNaN(y)?this.items[y]:Reflect.get(_,y),set:(_,y,O)=>{if(typeof y!="symbol"&&!isNaN(y)){if(O==null)_.$deleteAt(y);else{if(O[h]){Zn(O,_[d],_,y);const j=_.items[y];_.isMovingItems?(j!==void 0?O[h].isNew?_[h].indexedOperation(Number(y),t.OPERATION.MOVE_AND_ADD):(_[h].getChange(Number(y))&t.OPERATION.DELETE)===t.OPERATION.DELETE?_[h].indexedOperation(Number(y),t.OPERATION.DELETE_AND_MOVE):_[h].indexedOperation(Number(y),t.OPERATION.MOVE):O[h].isNew&&_[h].indexedOperation(Number(y),t.OPERATION.ADD),O[h].setParent(this,_[h].root,y)):_.$changeAt(Number(y),O),j!==void 0&&j[h].root?.remove(j[h])}else _.$changeAt(Number(y),O);_.items[y]=O,_.tmpItems[y]=O}return!0}else return Reflect.set(_,y,O)},deleteProperty:(_,y)=>(typeof y=="number"?_.$deleteAt(y):delete _[y],!0),has:(_,y)=>typeof y!="symbol"&&!isNaN(Number(y))?Reflect.has(this.items,y):Reflect.has(_,y)});return Object.defineProperty(this,h,{value:new Qe(f),enumerable:!1,writable:!0}),c.length>0&&this.push(...c),f}set length(c){c===0?this.clear():c<this.items.length?this.splice(c,this.length-c):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...c){let f=this.tmpItems.length;const _=this[h];for(let y=0,O=c.length;y<O;y++,f++){const j=c[y];if(j==null)return;typeof j=="object"&&this[d]&&Zn(j,this[d],this,y),_.indexedOperation(f,t.OPERATION.ADD,this.items.length),this.items.push(j),this.tmpItems.push(j),j[h]?.setParent(this,_.root,f)}return f}pop(){let c=-1;for(let f=this.tmpItems.length-1;f>=0;f--)if(this.deletedIndexes[f]!==!0){c=f;break}if(!(c<0))return this[h].delete(c,void 0,this.items.length-1),this.deletedIndexes[c]=!0,this.items.pop()}at(c){return c<0&&(c+=this.length),this.items[c]}$changeAt(c,f){if(f==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[c]===f)return;const _=this.items[c]!==void 0?typeof f=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,y=this[h];y.change(c,_),f[h]?.setParent(this,y.root,c)}$deleteAt(c,f){this[h].delete(c,f)}$setAt(c,f,_){c===0&&_===t.OPERATION.ADD&&this.items[c]!==void 0?this.items.unshift(f):_===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(c,1),this.items[c]=f):this.items[c]=f}clear(){if(this.items.length===0)return;const c=this[h];c.forEachChild((f,_)=>{c.root?.remove(f)}),c.discard(!0),c.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...c){return new Ln(...this.items.concat(...c))}join(c){return this.items.join(c)}reverse(){return this[h].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const c=this[h],f=this.tmpItems.findIndex(y=>y===this.items[0]),_=this.items.findIndex(y=>y===this.items[0]);return c.delete(f,t.OPERATION.DELETE,_),c.shiftAllChangeIndexes(-1,_),this.deletedIndexes[f]=!0,this.items.shift()}slice(c,f){const _=new Ln;return _.push(...this.items.slice(c,f)),_}sort(c=po){this.isMovingItems=!0;const f=this[h];return this.items.sort(c).forEach((y,O)=>f.change(O,t.OPERATION.REPLACE)),this.tmpItems.sort(c),this.isMovingItems=!1,this}splice(c,f,..._){const y=this[h],O=this.items.length,j=this.tmpItems.length,oe=_.length,ee=[];for(let re=0;re<j;re++)this.deletedIndexes[re]!==!0&&ee.push(re);if(O>c){f===void 0&&(f=O-c);for(let re=c;re<c+f;re++){const se=ee[re];y.delete(se,t.OPERATION.DELETE),this.deletedIndexes[se]=!0}}else f=0;if(oe>0){if(oe>f)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let re=0;re<oe;re++){const se=(ee[c]??O)+re;y.indexedOperation(se,this.deletedIndexes[se]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),_[re][h]?.setParent(this,y.root,se)}}return f>oe&&y.shiftAllChangeIndexes(-(f-oe),ee[c+oe]),y.filteredChanges!==void 0?y.root?.enqueueChangeTree(y,"filteredChanges"):y.root?.enqueueChangeTree(y,"changes"),this.items.splice(c,f,..._)}unshift(...c){const f=this[h];return f.shiftChangeIndexes(c.length),f.isFiltered?ce(f.filteredChanges,this.items.length):ce(f.allChanges,this.items.length),c.forEach((_,y)=>{f.change(y,t.OPERATION.ADD)}),this.tmpItems.unshift(...c),this.items.unshift(...c)}indexOf(c,f){return this.items.indexOf(c,f)}lastIndexOf(c,f=this.length-1){return this.items.lastIndexOf(c,f)}every(c,f){return this.items.every(c,f)}some(c,f){return this.items.some(c,f)}forEach(c,f){return this.items.forEach(c,f)}map(c,f){return this.items.map(c,f)}filter(c,f){return this.items.filter(c,f)}reduce(c,f){return this.items.reduce(c,f)}reduceRight(c,f){return this.items.reduceRight(c,f)}find(c,f){return this.items.find(c,f)}findIndex(c,f){return this.items.findIndex(c,f)}fill(c,f,_){throw new Error("ArraySchema#fill() not implemented")}copyWithin(c,f,_){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return Ln}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(c,f){return this.items.includes(c,f)}flatMap(c,f){throw new Error("ArraySchema#flatMap() is not supported.")}flat(c){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...c){return this.items.findLastIndex.apply(this.items,arguments)}with(c,f){const _=this.items.slice();return c<0&&(c+=this.length),_[c]=f,new Ln(..._)}toReversed(){return this.items.slice().reverse()}toSorted(c){return this.items.slice().sort(c)}toSpliced(c,f,..._){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(c=>{let f=this.items.length;for(;f!=0;){let _=Math.floor(Math.random()*f);f--,[this[f],this[_]]=[this[_],this[f]]}})}move(c){return this.isMovingItems=!0,c(this),this.isMovingItems=!1,this}[l](c,f=!1){return f?this.items[c]:this.deletedIndexes[c]?this.items[c]:this.tmpItems[c]||this.items[c]}[p](c){this.items[c]=void 0,this.tmpItems[c]=void 0}[g](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[x](){this.items=this.items.filter(c=>c!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(c=>typeof c.toJSON=="function"?c.toJSON():c)}clone(c){let f;return c?(f=new Ln,f.push(...this.items)):f=new Ln(...this.map(_=>_[h]?_.clone():_)),f}};Ln[Ir]=_n,Ln[Dr]=os;let vn=Ln;$e("array",{constructor:vn});var cs,ls;const hi=class hi{static[(cs=o,ls=a,u)](c,f,_){return!_||typeof c[d]=="string"||_.isChangeTreeVisible((c[l](f)??c.deletedItems[f])[h])}static is(c){return c.map!==void 0}constructor(c){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const f=new Qe(this);if(f.indexes={},Object.defineProperty(this,h,{value:f,enumerable:!1,writable:!0}),c)if(c instanceof Map||c instanceof hi)c.forEach((_,y)=>this.set(y,_));else for(const _ in c)this.set(_,c[_]);Object.defineProperty(this,d,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return hi}set(c,f){if(f==null)throw new Error(`MapSchema#set('${c}', ${f}): trying to set ${f} value on '${c}'.`);typeof f=="object"&&this[d]&&Zn(f,this[d],this,c),c=c.toString();const _=this[h],y=f[h]!==void 0;let O,j;if(typeof _.indexes[c]<"u"){O=_.indexes[c],j=t.OPERATION.REPLACE;const oe=this.$items.get(c);if(oe===f)return;y&&(j=t.OPERATION.DELETE_AND_ADD,oe!==void 0&&oe[h].root?.remove(oe[h])),this.deletedItems[O]&&delete this.deletedItems[O]}else O=_.indexes[v]??0,j=t.OPERATION.ADD,this.$indexes.set(O,c),_.indexes[c]=O,_.indexes[v]=O+1;return this.$items.set(c,f),_.change(O,j),y&&f[h].setParent(this,_.root,O),this}get(c){return this.$items.get(c)}delete(c){if(!this.$items.has(c))return!1;const f=this[h].indexes[c];return this.deletedItems[f]=this[h].delete(f),this.$items.delete(c)}clear(){const c=this[h];c.discard(!0),c.indexes={},c.forEachChild((f,_)=>{c.root?.remove(f)}),this.$indexes.clear(),this.$items.clear(),c.operation(t.OPERATION.CLEAR)}has(c){return this.$items.has(c)}forEach(c){this.$items.forEach(c)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(c,f){this.$indexes.set(c,f)}getIndex(c){return this.$indexes.get(c)}[l](c){return this.$items.get(this.$indexes.get(c))}[p](c){const f=this.$indexes.get(c);this.$items.delete(f),this.$indexes.delete(c)}[g](){const c=this[h];for(const f in this.deletedItems){const _=parseInt(f),y=this.$indexes.get(_);delete c.indexes[y],this.$indexes.delete(_)}this.deletedItems={}}toJSON(){const c={};return this.forEach((f,_)=>{c[_]=typeof f.toJSON=="function"?f.toJSON():f}),c}clone(c){let f;return c?f=Object.assign(new hi,this):(f=new hi,this.forEach((_,y)=>{_[h]?f.set(y,_.clone()):f.set(y,_)})),f}};hi[cs]=dn,hi[ls]=Ri;let Dn=hi;$e("map",{constructor:Dn});var hs,R;const Yi=class Yi{static[(hs=o,R=a,u)](c,f,_){return!_||typeof c[d]=="string"||_.isChangeTreeVisible((c[l](f)??c.deletedItems[f])[h])}static is(c){return c.collection!==void 0}constructor(c){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[h]=new Qe(this),this[h].indexes={},c&&c.forEach(f=>this.add(f)),Object.defineProperty(this,d,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(c){const f=this.$refId++;return c[h]!==void 0&&c[h].setParent(this,this[h].root,f),this[h].indexes[f]=f,this.$indexes.set(f,f),this.$items.set(f,c),this[h].change(f),f}at(c){const f=Array.from(this.$items.keys())[c];return this.$items.get(f)}entries(){return this.$items.entries()}delete(c){const f=this.$items.entries();let _,y;for(;(y=f.next())&&!y.done;)if(c===y.value[1]){_=y.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[h].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const c=this[h];c.discard(!0),c.indexes={},c.forEachChild((f,_)=>{c.root?.remove(f)}),this.$indexes.clear(),this.$items.clear(),c.operation(t.OPERATION.CLEAR)}has(c){return Array.from(this.$items.values()).some(f=>f===c)}forEach(c){this.$items.forEach((f,_,y)=>c(f,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(c,f){this.$indexes.set(c,f)}getIndex(c){return this.$indexes.get(c)}[l](c){return this.$items.get(this.$indexes.get(c))}[p](c){const f=this.$indexes.get(c);this.$items.delete(f),this.$indexes.delete(c)}[g](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const c=[];return this.forEach((f,_)=>{c.push(typeof f.toJSON=="function"?f.toJSON():f)}),c}clone(c){let f;return c?f=Object.assign(new Yi,this):(f=new Yi,this.forEach(_=>{_[h]?f.add(_.clone()):f.add(_)})),f}};Yi[hs]=dn,Yi[R]=Ri;let q=Yi;$e("collection",{constructor:q});var te,ne;const Ki=class Ki{static[(te=o,ne=a,u)](c,f,_){return!_||typeof c[d]=="string"||_.visible.has((c[l](f)??c.deletedItems[f])[h])}static is(c){return c.set!==void 0}constructor(c){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[h]=new Qe(this),this[h].indexes={},c&&c.forEach(f=>this.add(f)),Object.defineProperty(this,d,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(c){if(this.has(c))return!1;const f=this.$refId++;c[h]!==void 0&&c[h].setParent(this,this[h].root,f);const _=this[h].indexes[f]?.op??t.OPERATION.ADD;return this[h].indexes[f]=f,this.$indexes.set(f,f),this.$items.set(f,c),this[h].change(f,_),f}entries(){return this.$items.entries()}delete(c){const f=this.$items.entries();let _,y;for(;(y=f.next())&&!y.done;)if(c===y.value[1]){_=y.value[0];break}return _===void 0?!1:(this.deletedItems[_]=this[h].delete(_),this.$indexes.delete(_),this.$items.delete(_))}clear(){const c=this[h];c.discard(!0),c.indexes={},this.$indexes.clear(),this.$items.clear(),c.operation(t.OPERATION.CLEAR)}has(c){const f=this.$items.values();let _=!1,y;for(;(y=f.next())&&!y.done;)if(c===y.value){_=!0;break}return _}forEach(c){this.$items.forEach((f,_,y)=>c(f,_,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(c,f){this.$indexes.set(c,f)}getIndex(c){return this.$indexes.get(c)}[l](c){return this.$items.get(this.$indexes.get(c))}[p](c){const f=this.$indexes.get(c);this.$items.delete(f),this.$indexes.delete(c)}[g](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const c=[];return this.forEach((f,_)=>{c.push(typeof f.toJSON=="function"?f.toJSON():f)}),c}clone(c){let f;return c?f=Object.assign(new Ki,this):(f=new Ki,this.forEach(_=>{_[h]?f.add(_.clone()):f.add(_)})),f}};Ki[te]=dn,Ki[ne]=Ri;let K=Ki;$e("set",{constructor:K});const me=-1;function Ce(M){return Ye.register(M),M}function ke(M=me){return function(c,f){const _=c.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null));_e.setTag(j,f,M)}}function Te(M,c){return function(f,_){const y=f.constructor;if(!M)throw new Error(`${y.name}: @type() reference provided for "${_}" is undefined. Make sure you don't have any circular dependencies.`);M=V(M),Ye.register(y);const j=Object.getPrototypeOf(y)[Symbol.metadata],oe=_e.initialize(y);let ee=oe[_];if(oe[ee]!==void 0){if(oe[ee].deprecated)return;if(oe[ee].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${_}' definition on '${y.name}'.
Check @type() annotation`)}catch(re){const se=re.stack.split(`
`)[4].trim();throw new Error(`${re.message} ${se}`)}}else ee=oe[v]??(j&&j[v])??-1,ee++;if(c&&c.manual)_e.addField(oe,ee,_,M,{enumerable:!0,configurable:!0,writable:!0});else{const re=typeof Object.keys(M)[0]=="string"&&Ge(Object.keys(M)[0]),se=re?Object.values(M)[0]:M;_e.addField(oe,ee,_,M,Ke(`_${_}`,ee,se,re))}}}function Ke(M,c,f,_){return{get:function(){return this[M]},set:function(y){const O=this[M]??void 0;if(y!==O){if(y!=null){_?(_.constructor===vn&&!(y instanceof vn)&&(y=new vn(...y)),_.constructor===Dn&&!(y instanceof Dn)&&(y=new Dn(y)),y[d]=f):typeof f!="string"?Zn(y,f,this,M.substring(1)):as(y,f,this,M.substring(1));const j=this[h];O!==void 0&&O[h]?(j.root?.remove(O[h]),this.constructor[s](j,c,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](j,c,t.OPERATION.ADD),y[h]?.setParent(this,j.root,c)}else O!==void 0&&this[h].delete(c);this[M]=y}},enumerable:!0,configurable:!0}}function et(M=!0){return function(c,f){const _=c.constructor,O=Object.getPrototypeOf(_)[Symbol.metadata],j=_[Symbol.metadata]??=Object.assign({},_[Symbol.metadata],O??Object.create(null)),oe=j[f];j[oe].deprecated=!0,M&&(j[E]??={},j[E][f]={get:function(){throw new Error(`${f} is deprecated.`)},set:function(ee){},enumerable:!1,configurable:!0}),Object.defineProperty(j,oe,{value:j[oe],enumerable:!1,configurable:!0})}}function qe(M,c,f){for(let _ in c)Te(c[_],f)(M.prototype,_);return M}function ot(M,c,f=Pe){const _={},y={},O={},j={};for(let se in M){const ie=M[se];typeof ie=="object"?(ie.view!==void 0&&(j[se]=typeof ie.view=="boolean"?me:ie.view),_[se]=V(ie),Object.prototype.hasOwnProperty.call(ie,"default")?O[se]=ie.default:Array.isArray(ie)||ie.array!==void 0?O[se]=new vn:ie.map!==void 0?O[se]=new Dn:ie.collection!==void 0?O[se]=new q:ie.set!==void 0?O[se]=new K:ie.type!==void 0&&Pe.is(ie.type)&&(!ie.type.prototype.initialize||ie.type.prototype.initialize.length===0)&&(O[se]=new ie.type)):typeof ie=="function"?Pe.is(ie)?((!ie.prototype.initialize||ie.prototype.initialize.length===0)&&(O[se]=new ie),_[se]=V(ie)):y[se]=ie:_[se]=V(ie)}const oe=()=>{const se={};for(const ie in O){const Oe=O[ie];Oe&&typeof Oe.clone=="function"?se[ie]=Oe.clone():se[ie]=Oe}return se},ee=se=>{const ie=Object.keys(_),Oe={};for(const we in se)ie.includes(we)||(Oe[we]=se[we]);return Oe},re=_e.setFields(class extends f{constructor(...se){y.initialize&&typeof y.initialize=="function"?(super(Object.assign({},oe(),ee(se[0]||{}))),new.target===re&&y.initialize.apply(this,se)):super(Object.assign({},oe(),se[0]||{}))}},_);re._getDefaultValues=oe,Object.assign(re.prototype,y);for(let se in j)ke(j[se])(re.prototype,se);return c&&Object.defineProperty(re,"name",{value:c}),re.extends=(se,ie)=>ot(se,ie,re),re}function _t(M){return new Array(M).fill(0).map((c,f)=>f===M-1?"└─ ":"   ").join("")}function Dt(M){const c=M[h].root,f={ops:{},refs:[]};let _=c.changes.next;for(;_;){const y=_.changeTree;if(y===void 0){_=_.next;continue}const O=y.indexedOperations;f.refs.push(`refId#${y.refId}`);for(const j in O){const oe=O[j],ee=t.OPERATION[oe];f.ops[ee]||(f.ops[ee]=0),f.ops[t.OPERATION[oe]]++}_=_.next}return f}var St,Et;const Zi=class Zi{static initialize(c){Object.defineProperty(c,h,{value:new Qe(c),enumerable:!1,writable:!0}),Object.defineProperties(c,c.constructor[Symbol.metadata]?.[E]||{})}static is(c){return typeof c[Symbol.metadata]=="object"}static[(St=o,Et=a,s)](c,f,_=t.OPERATION.ADD){c.change(f,_)}static[u](c,f,_){const O=c.constructor[Symbol.metadata][f]?.tag;if(_===void 0)return O===void 0;if(O===void 0)return!0;if(O===me)return _.isChangeTreeVisible(c[h]);{const j=_.tags?.get(c[h]);return j&&j.has(O)}}constructor(c){Zi.initialize(this),c&&Object.assign(this,c)}assign(c){return Object.assign(this,c),this}setDirty(c,f){const _=this.constructor[Symbol.metadata];this[h].change(_[_[c]].index,f)}clone(){const c=Object.create(this.constructor.prototype);Zi.initialize(c);const f=this.constructor[Symbol.metadata];for(const _ in f){const y=f[_].name;typeof this[y]=="object"&&typeof this[y]?.clone=="function"?c[y]=this[y].clone():c[y]=this[y]}return c}toJSON(){const c={},f=this.constructor[Symbol.metadata];for(const _ in f){const y=f[_],O=y.name;!y.deprecated&&this[O]!==null&&typeof this[O]<"u"&&(c[O]=typeof this[O].toJSON=="function"?this[O].toJSON():this[O])}return c}discardAllChanges(){this[h].discardAll()}[l](c){const f=this.constructor[Symbol.metadata];return this[f[c].name]}[p](c){const f=this.constructor[Symbol.metadata];this[f[c].name]=void 0}static debugRefIds(c,f=!1,_=0,y,O=""){const j=f?` - ${JSON.stringify(c.toJSON())}`:"",oe=c[h],ee=y?y.root.refIds.get(c):oe.refId,re=y?y.root:oe.root,se=re?.refCount?.[ee]>1?` [×${re.refCount[ee]}]`:"";let ie=`${_t(_)}${O}${c.constructor.name} (refId: ${ee})${se}${j}
`;return oe.forEachChild((Oe,we)=>{let Me=we;typeof we=="number"&&c.$indexes&&(Me=c.$indexes.get(we)??we);const xe=c.forEach!==void 0&&Me!==void 0?`["${Me}"]: `:"";ie+=this.debugRefIds(Oe.ref,f,_+1,y,xe)}),ie}static debugRefIdEncodingOrder(c,f="allChanges"){let _=[],y=c[h].root[f].next;for(;y;)y.changeTree&&_.push(y.changeTree.refId),y=y.next;return _}static debugRefIdsFromDecoder(c){return this.debugRefIds(c.state,!1,0,c)}static debugChanges(c,f=!1){const _=c[h],y=f?_.allChanges:_.changes,O=f?"allChanges":"changes";let j=`${c.constructor.name} (${_.refId}) -> .${O}:
`;function oe(ee){ee.operations.filter(re=>re).forEach(re=>{const se=_.indexedOperations[re];j+=`- [${re}]: ${t.OPERATION[se]} (${JSON.stringify(_.getValue(Number(re),f))})
`})}return oe(y),!f&&_.filteredChanges&&_.filteredChanges.operations.filter(ee=>ee).length>0&&(j+=`${c.constructor.name} (${_.refId}) -> .filteredChanges:
`,oe(_.filteredChanges)),f&&_.allFilteredChanges&&_.allFilteredChanges.operations.filter(ee=>ee).length>0&&(j+=`${c.constructor.name} (${_.refId}) -> .allFilteredChanges:
`,oe(_.allFilteredChanges)),j}static debugChangesDeep(c,f="changes"){let _="";const y=c[h],O=y.root,j=new Map,oe=[];let ee=0;for(const[se,ie]of Object.entries(O[f])){const Oe=O.changeTrees[se];if(!Oe)continue;let we=!1,Me=[],xe=Oe.parent?.[h];if(Oe===y)we=!0;else for(;xe!==void 0;){if(Me.push(xe),xe.ref===c){we=!0;break}xe=xe.parent?.[h]}we&&(oe.push(Oe.refId),ee+=Object.keys(ie).length,j.set(Oe,Me.reverse()))}_+=`---
`,_+=`root refId: ${y.refId}
`,_+=`Total instances: ${oe.length} (refIds: ${oe.join(", ")})
`,_+=`Total changes: ${ee}
`,_+=`---
`;const re=new WeakSet;for(const[se,ie]of j.entries()){ie.forEach((Fe,Bt)=>{re.has(Fe)||(_+=`${_t(Bt)}${Fe.ref.constructor.name} (refId: ${Fe.refId})
`,re.add(Fe))});const Oe=se.indexedOperations,we=ie.length,Me=_t(we),xe=we>0?`(${se.parentIndex}) `:"";_+=`${Me}${xe}${se.ref.constructor.name} (refId: ${se.refId}) - changes: ${Object.keys(Oe).length}
`;for(const Fe in Oe){const Bt=Oe[Fe];_+=`${_t(we+1)}${t.OPERATION[Bt]}: ${Fe}
`}}return`${_}`}};Zi[St]=gt,Zi[Et]=ji;let Pe=Zi;function vt(M,c,f,_){var y=arguments.length,O=y<3?c:_,j;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")O=Reflect.decorate(M,c,f,_);else for(var oe=M.length-1;oe>=0;oe--)(j=M[oe])&&(O=(y<3?j(O):y>3?j(c,f,O):j(c,f))||O);return y>3&&O&&Object.defineProperty(c,f,O),O}typeof SuppressedError=="function"&&SuppressedError;class mt{constructor(c){this.types=c,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=ge(),this.allFilteredChanges=ge(),this.changes=ge(),this.filteredChanges=ge()}getNextUniqueId(){return this.nextUniqueId++}add(c){c.refId===void 0&&(c.refId=this.getNextUniqueId());const f=this.changeTrees[c.refId]===void 0;f&&(this.changeTrees[c.refId]=c);const _=this.refCount[c.refId];if(_===0){const y=c.allChanges.operations;let O=y.length;for(;O--;)c.indexedOperations[y[O]]=t.OPERATION.ADD,ce(c.changes,O)}return this.refCount[c.refId]=(_||0)+1,f}remove(c){const f=this.refCount[c.refId]-1;return f<=0?(c.root=void 0,delete this.changeTrees[c.refId],this.removeChangeFromChangeSet("allChanges",c),this.removeChangeFromChangeSet("changes",c),c.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",c),this.removeChangeFromChangeSet("filteredChanges",c)),this.refCount[c.refId]=0,c.forEachChild((_,y)=>{_.removeParent(c.ref)&&(_.parentChain===void 0||_.parentChain&&this.refCount[_.refId]>0?this.remove(_):_.parentChain&&this.moveNextToParent(_))})):(this.refCount[c.refId]=f,this.recursivelyMoveNextToParent(c)),f}recursivelyMoveNextToParent(c){this.moveNextToParent(c),c.forEachChild((f,_)=>this.recursivelyMoveNextToParent(f))}moveNextToParent(c){c.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",c),this.moveNextToParentInChangeTreeList("allFilteredChanges",c)):(this.moveNextToParentInChangeTreeList("changes",c),this.moveNextToParentInChangeTreeList("allChanges",c))}moveNextToParentInChangeTreeList(c,f){const _=this[c],y=f[c].queueRootNode;if(!y)return;const O=f.parent;if(!O||!O[h])return;const j=O[h][c]?.queueRootNode;if(!j||j===y)return;const oe=j.position;y.position>oe||(y.prev?y.prev.next=y.next:_.next=y.next,y.next?y.next.prev=y.prev:_.tail=y.prev,y.prev=j,y.next=j.next,j.next?j.next.prev=y:_.tail=y,j.next=y,this.updatePositionsAfterMove(_,y,oe+1))}enqueueChangeTree(c,f,_=c[f].queueRootNode){_||(c[f].queueRootNode=this.addToChangeTreeList(this[f],c))}addToChangeTreeList(c,f){const _={changeTree:f,next:void 0,prev:void 0,position:c.tail?c.tail.position+1:0};return c.next?(_.prev=c.tail,c.tail.next=_,c.tail=_):(c.next=_,c.tail=_),_}updatePositionsAfterRemoval(c,f){let _=c.next,y=0;for(;_;)y>=f&&(_.position=y),_=_.next,y++}updatePositionsAfterMove(c,f,_){let y=c.next,O=0;for(;y;)y.position=O,y=y.next,O++}removeChangeFromChangeSet(c,f){const _=this[c],y=f[c].queueRootNode;if(y&&y.changeTree===f){const O=y.position;return y.prev?y.prev.next=y.next:_.next=y.next,y.next?y.next.prev=y.prev:_.tail=y.prev,this.updatePositionsAfterRemoval(_,O),f[c].queueRootNode=void 0,!0}return!1}}const us=class us{constructor(c){this.sharedBuffer=Buffer.allocUnsafe(us.BUFFER_SIZE),this.context=Ye.cache(c.constructor),this.root=new mt(this.context),this.setState(c)}setState(c){this.state=c,this.state[h].setRoot(this.root)}encode(c={offset:0},f,_=this.sharedBuffer,y="changes",O=y==="allChanges",j=c.offset){const oe=f!==void 0,ee=this.state[h];let re=this.root[y];for(;re=re.next;){const se=re.changeTree;if(oe){if(!f.isChangeTreeVisible(se)){f.invisible.add(se);continue}f.invisible.delete(se)}const ie=se[y],Oe=se.ref,we=ie.operations.length;if(we===0)continue;const Me=Oe.constructor,xe=Me[o],Fe=Me[u],Bt=Me[Symbol.metadata];(oe||c.offset>j||se!==ee)&&(_[c.offset++]=255,Ie.number(_,se.refId,c));for(let zt=0;zt<we;zt++){const xn=ie.operations[zt];if(xn<0){_[c.offset++]=Math.abs(xn)&255;continue}const Mn=O?t.OPERATION.ADD:se.indexedOperations[xn];xn===void 0||Mn===void 0||Fe&&!Fe(Oe,xn,f)||xe(this,_,se,xn,Mn,c,O,oe,Bt)}}if(c.offset>_.byteLength){const se=Math.ceil(c.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(se/1024)} * 1024; // ${Math.round(se/1024)} KB
`),_=Buffer.alloc(se,_),_===this.sharedBuffer&&(this.sharedBuffer=_),this.encode({offset:j},f,_,y,O)}else return _.subarray(0,c.offset)}encodeAll(c={offset:0},f=this.sharedBuffer){return this.encode(c,void 0,f,"allChanges",!0)}encodeAllView(c,f,_,y=this.sharedBuffer){const O=_.offset;return this.encode(_,c,y,"allFilteredChanges",!0,O),Buffer.concat([y.subarray(0,f),y.subarray(O,_.offset)])}encodeView(c,f,_,y=this.sharedBuffer){const O=_.offset;for(const[j,oe]of c.changes){const ee=this.root.changeTrees[j];if(ee===void 0){c.changes.delete(j);continue}const re=Object.keys(oe);if(re.length===0)continue;const ie=ee.ref.constructor,Oe=ie[o],we=ie[Symbol.metadata];y[_.offset++]=255,Ie.number(y,ee.refId,_);for(let Me=0,xe=re.length;Me<xe;Me++){const Fe=Number(re[Me]),zt=ee.ref[l](Fe)!==void 0&&oe[Fe]||t.OPERATION.DELETE;Oe(this,y,ee,Fe,zt,_,!1,!0,we)}}return c.changes.clear(),this.encode(_,c,y,"filteredChanges",!1,O),Buffer.concat([y.subarray(0,f),y.subarray(O,_.offset)])}discardChanges(){let c=this.root.changes.next;for(;c;)c.changeTree.endEncode("changes"),c=c.next;for(this.root.changes=ge(),c=this.root.filteredChanges.next;c;)c.changeTree.endEncode("filteredChanges"),c=c.next;this.root.filteredChanges=ge()}tryEncodeTypeId(c,f,_,y){const O=this.context.getTypeId(f),j=this.context.getTypeId(_);if(j===void 0){console.warn(`@colyseus/schema WARNING: Class "${_.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}O!==j&&(c[y.offset++]=213,Ie.number(c,j,y))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};us.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let Yt=us;function Jn(M,c){if(c===-1||c>=M.length)return!1;const f=M.length-1;for(let _=c;_<f;_++)M[_]=M[_+1];return M.length=f,!0}class tn extends Error{constructor(c){super(c),this.name="DecodingWarning"}}class Pi{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(c,f,_=!0){this.refs.set(c,f),this.refIds.set(f,c),_&&(this.refCount[c]=(this.refCount[c]||0)+1),this.deletedRefs.has(c)&&this.deletedRefs.delete(c)}removeRef(c){const f=this.refCount[c];if(f===void 0){try{throw new tn("trying to remove refId that doesn't exist: "+c)}catch(_){console.warn(_)}return}if(f===0){try{const _=this.refs.get(c);throw new tn(`trying to remove refId '${c}' with 0 refCount (${_.constructor.name}: ${JSON.stringify(_)})`)}catch(_){console.warn(_)}return}(this.refCount[c]=f-1)<=0&&this.deletedRefs.add(c)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(c=>{if(this.refCount[c]>0)return;const f=this.refs.get(c);if(f.constructor[Symbol.metadata]!==void 0){const _=f.constructor[Symbol.metadata];for(const y in _){const O=_[y].name,j=typeof f[O]=="object"&&this.refIds.get(f[O]);j&&!this.deletedRefs.has(j)&&this.removeRef(j)}}else typeof f[d]=="function"&&Array.from(f.values()).forEach(_=>{const y=this.refIds.get(_);this.deletedRefs.has(y)||this.removeRef(y)});this.refs.delete(c),delete this.refCount[c],delete this.callbacks[c]}),this.deletedRefs.clear()}addCallback(c,f,_){if(c===void 0){const y=typeof f=="number"?t.OPERATION[f]:f;throw new Error(`Can't addCallback on '${y}' (refId is undefined)`)}return this.callbacks[c]||(this.callbacks[c]={}),this.callbacks[c][f]||(this.callbacks[c][f]=[]),this.callbacks[c][f].push(_),()=>this.removeCallback(c,f,_)}removeCallback(c,f,_){const y=this.callbacks?.[c]?.[f]?.indexOf(_);y!==void 0&&y!==-1&&Jn(this.callbacks[c][f],y)}}class wt{constructor(c,f){this.currentRefId=0,this.setState(c),this.context=f||new Ye(c.constructor)}setState(c){this.state=c,this.root=new Pi,this.root.addRef(0,c)}decode(c,f={offset:0},_=this.state){const y=[],O=this.root,j=c.byteLength;let oe=_.constructor[a];for(this.currentRefId=0;f.offset<j;){if(c[f.offset]==255){f.offset++,_[x]?.();const re=Ue.number(c,f),se=O.refs.get(re);se?(_=se,oe=_.constructor[a],this.currentRefId=re):(console.error(`"refId" not found: ${re}`,{previousRef:_,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(c,f,j));continue}if(oe(this,c,f,_,y)===Pr){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(c,f,j);continue}}return _[x]?.(),this.triggerChanges?.(y),O.garbageCollectDeletedRefs(),y}skipCurrentStructure(c,f,_){const y={offset:f.offset};for(;f.offset<_&&!(c[f.offset]===255&&(y.offset=f.offset+1,this.root.refs.has(Ue.number(c,y))));)f.offset++}getInstanceType(c,f,_){let y;if(c[f.offset]===213){f.offset++;const O=Ue.number(c,f);y=this.context.get(O)}return y||_}createInstanceOfType(c){return new c}removeChildRefs(c,f){const _=typeof c[d]!="string",y=this.root.refIds.get(c);c.forEach((O,j)=>{f.push({ref:c,refId:y,op:t.OPERATION.DELETE,field:j,value:void 0,previousValue:O}),_&&this.root.removeRef(this.root.refIds.get(O))})}}class Wt extends Pe{}vt([Te("string")],Wt.prototype,"name",void 0),vt([Te("string")],Wt.prototype,"type",void 0),vt([Te("number")],Wt.prototype,"referencedType",void 0);class $t extends Pe{constructor(){super(...arguments),this.fields=new vn}}vt([Te("number")],$t.prototype,"id",void 0),vt([Te("number")],$t.prototype,"extendsId",void 0),vt([Te([Wt])],$t.prototype,"fields",void 0);class Ft extends Pe{constructor(){super(...arguments),this.types=new vn}static encode(c,f={offset:0}){const _=c.context,y=new Ft,O=new Yt(y),j=_.schemas.get(c.state.constructor);j>0&&(y.rootType=j);const oe=new Set,ee={},re=ie=>{if(ie.extendsId===void 0||oe.has(ie.extendsId)){oe.add(ie.id),y.types.push(ie);const Oe=ee[ie.id];Oe!==void 0&&(delete ee[ie.id],Oe.forEach(we=>re(we)))}else ee[ie.extendsId]===void 0&&(ee[ie.extendsId]=[]),ee[ie.extendsId].push(ie)};_.schemas.forEach((ie,Oe)=>{const we=new $t;we.id=Number(ie);const Me=Object.getPrototypeOf(Oe);Me!==Pe&&(we.extendsId=_.schemas.get(Me));const xe=Oe[Symbol.metadata];if(xe!==Me[Symbol.metadata])for(const Fe in xe){const Bt=Number(Fe),zt=xe[Bt].name;if(!Object.prototype.hasOwnProperty.call(xe,zt))continue;const xn=new Wt;xn.name=zt;let Mn;const ui=xe[Bt];if(typeof ui.type=="string")Mn=ui.type;else{let fs;Pe.is(ui.type)?(Mn="ref",fs=ui.type):(Mn=Object.keys(ui.type)[0],typeof ui.type[Mn]=="string"?Mn+=":"+ui.type[Mn]:fs=ui.type[Mn]),xn.referencedType=fs?_.getTypeId(fs):-1}xn.type=Mn,we.fields.push(xn)}re(we)});for(const ie in ee)ee[ie].forEach(Oe=>y.types.push(Oe));return O.encodeAll(f).slice(0,f.offset)}static decode(c,f){const _=new Ft;new wt(_).decode(c,f);const O=new Ye;_.types.forEach(ee=>{const re=O.get(ee.extendsId)??Pe,se=class extends re{};Ye.register(se),O.add(se,ee.id)},{});const j=(ee,re,se)=>{re.fields.forEach((ie,Oe)=>{const we=se+Oe;if(ie.referencedType!==void 0){let Me=ie.type,xe=O.get(ie.referencedType);if(!xe){const Fe=ie.type.split(":");Me=Fe[0],xe=Fe[1]}Me==="ref"?_e.addField(ee,we,ie.name,xe):_e.addField(ee,we,ie.name,{[Me]:xe})}else _e.addField(ee,we,ie.name,ie.type)})};_.types.forEach(ee=>{const re=O.get(ee.id),se=_e.initialize(re),ie=[];let Oe=ee;do ie.push(Oe),Oe=_.types.find(Me=>Me.id===Oe.extendsId);while(Oe);let we=0;ie.reverse().forEach(Me=>{j(se,Me,we),we+=Me.fields.length})});const oe=new(O.get(_.rootType||0));return new wt(oe,O)}}vt([Te([$t])],Ft.prototype,"types",void 0),vt([Te("number")],Ft.prototype,"rootType",void 0);function nn(M){const c=M.root,f=c.callbacks,_=new WeakMap;let y;M.triggerChanges=function(oe){const ee=new Set;for(let re=0,se=oe.length;re<se;re++){const ie=oe[re],Oe=ie.refId,we=ie.ref,Me=f[Oe];if(Me){if((ie.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ie.previousValue instanceof Pe){const xe=f[c.refIds.get(ie.previousValue)]?.[t.OPERATION.DELETE];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe]()}if(we instanceof Pe){if(!ee.has(Oe)){const xe=Me?.[t.OPERATION.REPLACE];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe]()}if(Me.hasOwnProperty(ie.field)){const xe=Me[ie.field];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe](ie.value,ie.previousValue)}}else{if((ie.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(ie.previousValue!==void 0){const xe=Me[t.OPERATION.DELETE];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe](ie.previousValue,ie.dynamicIndex??ie.field)}if((ie.op&t.OPERATION.ADD)===t.OPERATION.ADD){const xe=Me[t.OPERATION.ADD];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe](ie.value,ie.dynamicIndex??ie.field)}}else if((ie.op&t.OPERATION.ADD)===t.OPERATION.ADD&&ie.previousValue!==ie.value){const xe=Me[t.OPERATION.ADD];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe](ie.value,ie.dynamicIndex??ie.field)}if(ie.value!==ie.previousValue&&(ie.value!==void 0||ie.previousValue!==void 0)){const xe=Me[t.OPERATION.REPLACE];for(let Fe=xe?.length-1;Fe>=0;Fe--)xe[Fe](ie.value,ie.dynamicIndex??ie.field)}}ee.add(Oe)}}};function O(oe,ee){let re=ee.instance?.constructor[Symbol.metadata]||oe,se=ee.instance&&typeof ee.instance.forEach=="function"||oe&&typeof oe[Symbol.metadata]>"u";if(re&&!se){const ie=function(Oe,we,Me,xe){return xe&&ee.instance[we]!==void 0&&!_.has(y)&&Me(ee.instance[we],void 0),c.addCallback(c.refIds.get(Oe),we,Me)};return new Proxy({listen:function(we,Me,xe=!0){if(ee.instance)return ie(ee.instance,we,Me,xe);{let Fe=()=>{};return ee.onInstanceAvailable((Bt,zt)=>{Fe=ie(Bt,we,Me,xe&&zt&&!_.has(y))}),()=>Fe()}},onChange:function(we){return c.addCallback(c.refIds.get(ee.instance),t.OPERATION.REPLACE,we)},bindTo:function(we,Me){return Me||(Me=Object.keys(re).map(xe=>re[xe].name)),c.addCallback(c.refIds.get(ee.instance),t.OPERATION.REPLACE,()=>{Me.forEach(xe=>we[xe]=ee.instance[xe])})}},{get(Oe,we){const Me=re[re[we]];if(Me){const xe=ee.instance?.[we],Fe=(Bt=>{const zt=j(ee.instance).listen(we,(xn,Mn)=>{Bt(xn,!1),zt?.()},!1);c.refIds.get(xe)!==void 0&&Bt(xe,!0)});return O(Me.type,{instance:c.refIds.get(xe)&&xe,parentInstance:ee.instance,onInstanceAvailable:Fe})}else return Oe[we]},has(Oe,we){return re[we]!==void 0},set(Oe,we,Me){throw new Error("not allowed")},deleteProperty(Oe,we){throw new Error("not allowed")}})}else{const ie=function(Me,xe,Fe){return Fe&&Me.forEach((Bt,zt)=>xe(Bt,zt)),c.addCallback(c.refIds.get(Me),t.OPERATION.ADD,(Bt,zt)=>{_.set(xe,!0),y=xe,xe(Bt,zt),_.delete(xe),y=void 0})},Oe=function(Me,xe){return c.addCallback(c.refIds.get(Me),t.OPERATION.DELETE,xe)},we=function(Me,xe){return c.addCallback(c.refIds.get(Me),t.OPERATION.REPLACE,xe)};return new Proxy({onAdd:function(Me,xe=!0){if(ee.instance)return ie(ee.instance,Me,xe&&!_.has(y));if(ee.onInstanceAvailable){let Fe=()=>{};return ee.onInstanceAvailable((Bt,zt)=>{Fe=ie(Bt,Me,xe&&zt&&!_.has(y))}),()=>Fe()}},onRemove:function(Me){if(ee.instance)return Oe(ee.instance,Me);if(ee.onInstanceAvailable){let xe=()=>{};return ee.onInstanceAvailable(Fe=>{xe=Oe(Fe,Me)}),()=>xe()}},onChange:function(Me){if(ee.instance)return we(ee.instance,Me);if(ee.onInstanceAvailable){let xe=()=>{};return ee.onInstanceAvailable(Fe=>{xe=we(Fe,Me)}),()=>xe()}}},{get(Me,xe){if(!Me[xe])throw new Error(`Can't access '${xe}' through callback proxy. access the instance directly.`);return Me[xe]},has(Me,xe){return Me[xe]!==void 0},set(Me,xe,Fe){throw new Error("not allowed")},deleteProperty(Me,xe){throw new Error("not allowed")}})}}function j(oe){return O(void 0,{instance:oe})}return j}function Lr(M,c){M.triggerChanges=c}class Qn{constructor(c=!1){this.iterable=c,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,c&&(this.items=[])}add(c,f=me,_=!0){const y=c?.[h],O=y.parent;if(y){if(!O&&y.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${y.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",c),!1;const j=c.constructor[Symbol.metadata];this.visible.add(y),this.iterable&&_&&this.items.push(c),_&&O&&this.addParentOf(y,f);let oe=this.changes.get(y.refId);oe===void 0&&(oe={},this.changes.set(y.refId,oe));let ee=!1;if(y.forEachChild((re,se)=>{j&&j[se].tag!==void 0&&j[se].tag!==f||this.add(re.ref,f,!1)&&(ee=!0)}),f!==me){this.tags||(this.tags=new WeakMap);let re;this.tags.has(y)?re=this.tags.get(y):(re=new Set,this.tags.set(y,re)),re.add(f),j?.[C]?.[f]?.forEach(se=>{y.getChange(se)!==t.OPERATION.DELETE&&(oe[se]=t.OPERATION.ADD)})}else if(!y.isNew||ee){const re=y.filteredChanges!==void 0?y.allFilteredChanges:y.allChanges,se=this.invisible.has(y);for(let ie=0,Oe=re.operations.length;ie<Oe;ie++){const we=re.operations[ie];if(we===void 0)continue;const Me=y.indexedOperations[we]??t.OPERATION.ADD,xe=j?.[we].tag;Me!==t.OPERATION.DELETE&&(se||xe===void 0||xe===f)&&(oe[we]=Me,ee=!0)}}return ee}addParentOf(c,f){const _=c.parent[h],y=c.parentIndex;if(!this.visible.has(_)){this.visible.add(_);const O=_.parent?.[h];O&&O.filteredChanges!==void 0&&this.addParentOf(_,f)}if(_.getChange(y)!==t.OPERATION.DELETE){let O=this.changes.get(_.refId);O===void 0&&(O={},this.changes.set(_.refId,O)),this.tags||(this.tags=new WeakMap);let j;this.tags.has(_)?j=this.tags.get(_):(j=new Set,this.tags.set(_,j)),j.add(f),O[y]=t.OPERATION.ADD}}remove(c,f=me,_=!1){const y=c[h];if(!y)return console.warn("StateView#remove(), invalid object:",c),this;this.visible.delete(y),this.iterable&&!_&&Jn(this.items,this.items.indexOf(c));const j=y.ref.constructor[Symbol.metadata];let oe=this.changes.get(y.refId);if(oe===void 0&&(oe={},this.changes.set(y.refId,oe)),f===me){const ee=y.parent;if(ee&&!_e.isValidInstance(ee)&&y.isFiltered){const re=ee[h];let se=this.changes.get(re.refId);se===void 0?(se={},this.changes.set(re.refId,se)):se[y.parentIndex]===t.OPERATION.ADD&&this.changes.delete(y.refId),se[y.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(y)}else j?.[A]?.forEach(re=>oe[re]=t.OPERATION.DELETE)}else j?.[C][f].forEach(ee=>oe[ee]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(y)){const ee=this.tags.get(y);f===void 0?this.tags.delete(y):(ee.delete(f),ee.size===0&&this.tags.delete(y))}return this}has(c){return this.visible.has(c[h])}hasTag(c,f=me){return this.tags?.get(c[h])?.has(f)??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let c=0,f=this.items.length;c<f;c++)this.remove(this.items[c],me,!0);this.items.length=0}isChangeTreeVisible(c){let f=this.visible.has(c);return!f&&c.isVisibilitySharedWithParent&&this.visible.has(c.parent[h])&&(this.visible.add(c),f=!0),f}_recursiveDeleteVisibleChangeTree(c){c.forEachChild(f=>{this.visible.delete(f),this._recursiveDeleteVisibleChangeTree(f)})}}$e("map",{constructor:Dn}),$e("array",{constructor:vn}),$e("set",{constructor:K}),$e("collection",{constructor:q}),t.$changes=h,t.$childType=d,t.$decoder=a,t.$deleteByIndex=p,t.$encoder=o,t.$filter=u,t.$getByIndex=l,t.$track=s,t.ArraySchema=vn,t.ChangeTree=Qe,t.CollectionSchema=q,t.Decoder=wt,t.Encoder=Yt,t.MapSchema=Dn,t.Metadata=_e,t.Reflection=Ft,t.ReflectionField=Wt,t.ReflectionType=$t,t.Schema=Pe,t.SetSchema=K,t.StateView=Qn,t.TypeContext=Ye,t.decode=Ue,t.decodeKeyValueOperation=Ri,t.decodeSchemaOperation=ji,t.defineCustomTypes=be,t.defineTypes=qe,t.deprecated=et,t.dumpChanges=Dt,t.encode=Ie,t.encodeArray=_n,t.encodeKeyValueOperation=dn,t.encodeSchemaOperation=gt,t.entity=Ce,t.getDecoderStateCallbacks=nn,t.getRawChangesCallback=Lr,t.registerType=$e,t.schema=ot,t.type=Te,t.view=ke}))})($r,$r.exports)),$r.exports}var Gl;function O_(){if(Gl)return Ko;Gl=1;var i=co,e=Rc();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return i.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return i.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},u=[];e.encode.string(u,r,a),e.encode.string(u,s,a),o&&e.encode.string(u,o,a),this.writer.write(new Uint8Array(u).buffer)}_close(){this.isOpen=!1}}return Ko.H3TransportTransport=t,Ko}var Zo={},Jo,Wl;function U_(){return Wl||(Wl=1,Jo=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Jo}var $l;function N_(){if($l)return Zo;$l=1;var i=U_();const e=globalThis.WebSocket||i;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return Zo.WebSocketTransport=t,Zo}var Xl;function F_(){if(Xl)return Yo;Xl=1;var i=O_(),e=N_();let t=class{constructor(r){this.events={},r==="h3"?this.transport=new i.H3TransportTransport(this.events):this.transport=new e.WebSocketTransport(this.events)}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return Yo.Connection=t,Yo}var Qo={},ql;function Du(){return ql||(ql=1,(function(i){i.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(i.Protocol||(i.Protocol={})),i.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(i.ErrorCode||(i.ErrorCode={}))})(Qo)),Qo}var Fs={},jl;function Lu(){if(jl)return Fs;jl=1;const i={};function e(n,r){i[n]=r}function t(n){const r=i[n];if(!r)throw new Error("missing serializer: "+n);return r}return Fs.getSerializer=t,Fs.registerSerializer=e,Fs}var ea={},Yl;function Ou(){if(Yl)return ea;Yl=1;const i=()=>({emit(e,...t){let n=this.events[e]||[];for(let r=0,s=n.length;r<s;r++)n[r](...t)},events:{},on(e,t){var n;return!((n=this.events[e])===null||n===void 0)&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return ea.createNanoEvents=i,ea}var Bs={},Kl;function B_(){if(Kl)return Bs;Kl=1;class i{constructor(){this.handlers=[]}register(n,r=!1){return this.handlers.push(n),this}invoke(...n){this.handlers.forEach(r=>r.apply(this,n))}invokeAsync(...n){return Promise.all(this.handlers.map(r=>r.apply(this,n)))}remove(n){const r=this.handlers.indexOf(n);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new i;function n(r){return t.register(r,this===null)}return n.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},n.remove=r=>t.remove(r),n.invoke=(...r)=>t.invoke(...r),n.invokeAsync=(...r)=>t.invokeAsync(...r),n.clear=()=>t.clear(),n}return Bs.EventEmitter=i,Bs.createSignal=e,Bs}var zs={},Zl;function Uu(){if(Zl)return zs;Zl=1;var i=Rc();function e(n){try{return i.getDecoderStateCallbacks(n.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(i.Reflection.decode(r,s),this.decoder=new i.Decoder(this.state)):(this.decoder=i.Reflection.decode(r,s),this.state=this.decoder.state)}};return zs.SchemaSerializer=t,zs.getStateCallbacks=e,zs}var tc;try{tc=new TextDecoder}catch{}var Re,Yn,X=0,Rt={},pt,yi,bn=0,Xn=0,Qt,li,an=[],ft,Jl={useRecords:!1,mapsAsObjects:!0};class Nu{}const Cc=new Nu;Cc.name="MessagePack 0xC1";var Mi=!1,Fu=2,z_;try{new Function("")}catch{Fu=1/0}class Ai{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Re)return Gu(()=>(no(),this?this.unpack(e,t):Ai.prototype.unpack.call(Jl,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Yn=t.end||e.length,X=t.start||0):(X=0,Yn=t>-1?t:e.length),Xn=0,yi=null,Qt=null,Re=e;try{ft=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw Re=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Ai){if(Rt=this,this.structures)return pt=this.structures,ks(t);(!pt||pt.length>0)&&(pt=[])}else Rt=Jl,(!pt||pt.length>0)&&(pt=[]);return ks(t)}unpackMultiple(e,t){let n,r=0;try{Mi=!0;let s=e.length,o=this?this.unpack(e,s):uo.unpack(e,s);if(t){if(t(o,r,X)===!1)return;for(;X<s;)if(r=X,t(ks(),r,X)===!1)return}else{for(n=[o];X<s;)r=X,n.push(ks());return n}}catch(s){throw s.lastPosition=r,s.values=n,s}finally{Mi=!1,no()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(n=>n.slice(0)));for(let n=0,r=e.length;n<r;n++){let s=e[n];s&&(s.isShared=!0,n>=32&&(s.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in t||[])if(n>=0){let r=e[n],s=t[n];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[n]=r),e[n]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function ks(i){try{if(!Rt.trusted&&!Mi){let t=pt.sharedLength||0;t<pt.length&&(pt.length=t)}let e;if(Rt.randomAccessStructure&&Re[X]<64&&Re[X]>=32&&z_||(e=Vt()),Qt&&(X=Qt.postBundlePosition,Qt=null),Mi&&(pt.restoreStructures=null),X==Yn)pt&&pt.restoreStructures&&Ql(),pt=null,Re=null,li&&(li=null);else{if(X>Yn)throw new Error("Unexpected end of MessagePack data");if(!Mi){let t;try{t=JSON.stringify(e,(n,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(n){t="(JSON view not available "+n+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw pt&&pt.restoreStructures&&Ql(),no(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||X>Yn)&&(e.incomplete=!0),e}}function Ql(){for(let i in pt.restoreStructures)pt[i]=pt.restoreStructures[i];pt.restoreStructures=null}function Vt(){let i=Re[X++];if(i<160)if(i<128){if(i<64)return i;{let e=pt[i&63]||Rt.getStructures&&Bu()[i&63];return e?(e.read||(e.read=Pc(e,i&63)),e.read()):i}}else if(i<144)if(i-=128,Rt.mapsAsObjects){let e={};for(let t=0;t<i;t++){let n=ku();n==="__proto__"&&(n="__proto_"),e[n]=Vt()}return e}else{let e=new Map;for(let t=0;t<i;t++)e.set(Vt(),Vt());return e}else{i-=144;let e=new Array(i);for(let t=0;t<i;t++)e[t]=Vt();return Rt.freezeData?Object.freeze(e):e}else if(i<192){let e=i-160;if(Xn>=X)return yi.slice(X-bn,(X+=e)-bn);if(Xn==0&&Yn<140){let t=e<16?Ic(e):zu(e);if(t!=null)return t}return nc(e)}else{let e;switch(i){case 192:return null;case 193:return Qt?(e=Vt(),e>0?Qt[1].slice(Qt.position1,Qt.position1+=e):Qt[0].slice(Qt.position0,Qt.position0-=e)):Cc;case 194:return!1;case 195:return!0;case 196:if(e=Re[X++],e===void 0)throw new Error("Unexpected end of buffer");return ta(e);case 197:return e=ft.getUint16(X),X+=2,ta(e);case 198:return e=ft.getUint32(X),X+=4,ta(e);case 199:return Fi(Re[X++]);case 200:return e=ft.getUint16(X),X+=2,Fi(e);case 201:return e=ft.getUint32(X),X+=4,Fi(e);case 202:if(e=ft.getFloat32(X),Rt.useFloat32>2){let t=ho[(Re[X]&127)<<1|Re[X+1]>>7];return X+=4,(t*e+(e>0?.5:-.5)>>0)/t}return X+=4,e;case 203:return e=ft.getFloat64(X),X+=8,e;case 204:return Re[X++];case 205:return e=ft.getUint16(X),X+=2,e;case 206:return e=ft.getUint32(X),X+=4,e;case 207:return Rt.int64AsType==="number"?(e=ft.getUint32(X)*4294967296,e+=ft.getUint32(X+4)):Rt.int64AsType==="string"?e=ft.getBigUint64(X).toString():Rt.int64AsType==="auto"?(e=ft.getBigUint64(X),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=ft.getBigUint64(X),X+=8,e;case 208:return ft.getInt8(X++);case 209:return e=ft.getInt16(X),X+=2,e;case 210:return e=ft.getInt32(X),X+=4,e;case 211:return Rt.int64AsType==="number"?(e=ft.getInt32(X)*4294967296,e+=ft.getUint32(X+4)):Rt.int64AsType==="string"?e=ft.getBigInt64(X).toString():Rt.int64AsType==="auto"?(e=ft.getBigInt64(X),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=ft.getBigInt64(X),X+=8,e;case 212:if(e=Re[X++],e==114)return sh(Re[X++]&63);{let t=an[e];if(t)return t.read?(X++,t.read(Vt())):t.noBuffer?(X++,t()):t(Re.subarray(X,++X));throw new Error("Unknown extension "+e)}case 213:return e=Re[X],e==114?(X++,sh(Re[X++]&63,Re[X++])):Fi(2);case 214:return Fi(4);case 215:return Fi(8);case 216:return Fi(16);case 217:return e=Re[X++],Xn>=X?yi.slice(X-bn,(X+=e)-bn):H_(e);case 218:return e=ft.getUint16(X),X+=2,Xn>=X?yi.slice(X-bn,(X+=e)-bn):V_(e);case 219:return e=ft.getUint32(X),X+=4,Xn>=X?yi.slice(X-bn,(X+=e)-bn):G_(e);case 220:return e=ft.getUint16(X),X+=2,th(e);case 221:return e=ft.getUint32(X),X+=4,th(e);case 222:return e=ft.getUint16(X),X+=2,nh(e);case 223:return e=ft.getUint32(X),X+=4,nh(e);default:if(i>=224)return i-256;if(i===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+i)}}}const k_=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Pc(i,e){function t(){if(t.count++>Fu){let r=i.read=new Function("r","return function(){return "+(Rt.freezeData?"Object.freeze":"")+"({"+i.map(s=>s==="__proto__"?"__proto_:r()":k_.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(Vt);return i.highByte===0&&(i.read=eh(e,i.read)),r()}let n={};for(let r=0,s=i.length;r<s;r++){let o=i[r];o==="__proto__"&&(o="__proto_"),n[o]=Vt()}return Rt.freezeData?Object.freeze(n):n}return t.count=0,i.highByte===0?eh(e,t):t}const eh=(i,e)=>function(){let t=Re[X++];if(t===0)return e();let n=i<32?-(i+(t<<5)):i+(t<<5),r=pt[n]||Bu()[n];if(!r)throw new Error("Record id is not defined for "+n);return r.read||(r.read=Pc(r,i)),r.read()};function Bu(){let i=Gu(()=>(Re=null,Rt.getStructures()));return pt=Rt._mergeStructures(i,pt)}var nc=rs,H_=rs,V_=rs,G_=rs;let W_=!1;function rs(i){let e;if(i<16&&(e=Ic(i)))return e;if(i>64&&tc)return tc.decode(Re.subarray(X,X+=i));const t=X+i,n=[];for(e="";X<t;){const r=Re[X++];if((r&128)===0)n.push(r);else if((r&224)===192){const s=Re[X++]&63;n.push((r&31)<<6|s)}else if((r&240)===224){const s=Re[X++]&63,o=Re[X++]&63;n.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=Re[X++]&63,o=Re[X++]&63,a=Re[X++]&63;let u=(r&7)<<18|s<<12|o<<6|a;u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|u&1023),n.push(u)}else n.push(r);n.length>=4096&&(e+=Zt.apply(String,n),n.length=0)}return n.length>0&&(e+=Zt.apply(String,n)),e}function th(i){let e=new Array(i);for(let t=0;t<i;t++)e[t]=Vt();return Rt.freezeData?Object.freeze(e):e}function nh(i){if(Rt.mapsAsObjects){let e={};for(let t=0;t<i;t++){let n=ku();n==="__proto__"&&(n="__proto_"),e[n]=Vt()}return e}else{let e=new Map;for(let t=0;t<i;t++)e.set(Vt(),Vt());return e}}var Zt=String.fromCharCode;function zu(i){let e=X,t=new Array(i);for(let n=0;n<i;n++){const r=Re[X++];if((r&128)>0){X=e;return}t[n]=r}return Zt.apply(String,t)}function Ic(i){if(i<4)if(i<2){if(i===0)return"";{let e=Re[X++];if((e&128)>1){X-=1;return}return Zt(e)}}else{let e=Re[X++],t=Re[X++];if((e&128)>0||(t&128)>0){X-=2;return}if(i<3)return Zt(e,t);let n=Re[X++];if((n&128)>0){X-=3;return}return Zt(e,t,n)}else{let e=Re[X++],t=Re[X++],n=Re[X++],r=Re[X++];if((e&128)>0||(t&128)>0||(n&128)>0||(r&128)>0){X-=4;return}if(i<6){if(i===4)return Zt(e,t,n,r);{let s=Re[X++];if((s&128)>0){X-=5;return}return Zt(e,t,n,r,s)}}else if(i<8){let s=Re[X++],o=Re[X++];if((s&128)>0||(o&128)>0){X-=6;return}if(i<7)return Zt(e,t,n,r,s,o);let a=Re[X++];if((a&128)>0){X-=7;return}return Zt(e,t,n,r,s,o,a)}else{let s=Re[X++],o=Re[X++],a=Re[X++],u=Re[X++];if((s&128)>0||(o&128)>0||(a&128)>0||(u&128)>0){X-=8;return}if(i<10){if(i===8)return Zt(e,t,n,r,s,o,a,u);{let l=Re[X++];if((l&128)>0){X-=9;return}return Zt(e,t,n,r,s,o,a,u,l)}}else if(i<12){let l=Re[X++],p=Re[X++];if((l&128)>0||(p&128)>0){X-=10;return}if(i<11)return Zt(e,t,n,r,s,o,a,u,l,p);let h=Re[X++];if((h&128)>0){X-=11;return}return Zt(e,t,n,r,s,o,a,u,l,p,h)}else{let l=Re[X++],p=Re[X++],h=Re[X++],d=Re[X++];if((l&128)>0||(p&128)>0||(h&128)>0||(d&128)>0){X-=12;return}if(i<14){if(i===12)return Zt(e,t,n,r,s,o,a,u,l,p,h,d);{let g=Re[X++];if((g&128)>0){X-=13;return}return Zt(e,t,n,r,s,o,a,u,l,p,h,d,g)}}else{let g=Re[X++],x=Re[X++];if((g&128)>0||(x&128)>0){X-=14;return}if(i<15)return Zt(e,t,n,r,s,o,a,u,l,p,h,d,g,x);let E=Re[X++];if((E&128)>0){X-=15;return}return Zt(e,t,n,r,s,o,a,u,l,p,h,d,g,x,E)}}}}}function ih(){let i=Re[X++],e;if(i<192)e=i-160;else switch(i){case 217:e=Re[X++];break;case 218:e=ft.getUint16(X),X+=2;break;case 219:e=ft.getUint32(X),X+=4;break;default:throw new Error("Expected string")}return rs(e)}function ta(i){return Rt.copyBuffers?Uint8Array.prototype.slice.call(Re,X,X+=i):Re.subarray(X,X+=i)}function Fi(i){let e=Re[X++];if(an[e]){let t;return an[e](Re.subarray(X,t=X+=i),n=>{X=n;try{return Vt()}finally{X=t}})}else throw new Error("Unknown extension type "+e)}var rh=new Array(4096);function ku(){let i=Re[X++];if(i>=160&&i<192){if(i=i-160,Xn>=X)return yi.slice(X-bn,(X+=i)-bn);if(!(Xn==0&&Yn<180))return nc(i)}else return X--,Hu(Vt());let e=(i<<5^(i>1?ft.getUint16(X):i>0?Re[X]:0))&4095,t=rh[e],n=X,r=X+i-3,s,o=0;if(t&&t.bytes==i){for(;n<r;){if(s=ft.getUint32(n),s!=t[o++]){n=1879048192;break}n+=4}for(r+=3;n<r;)if(s=Re[n++],s!=t[o++]){n=1879048192;break}if(n===r)return X=n,t.string;r-=3,n=X}for(t=[],rh[e]=t,t.bytes=i;n<r;)s=ft.getUint32(n),t.push(s),n+=4;for(r+=3;n<r;)s=Re[n++],t.push(s);let a=i<16?Ic(i):zu(i);return a!=null?t.string=a:t.string=nc(i)}function Hu(i){if(typeof i=="string")return i;if(typeof i=="number"||typeof i=="boolean"||typeof i=="bigint")return i.toString();if(i==null)return i+"";if(Rt.allowArraysInMapKeys&&Array.isArray(i)&&i.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return i.flat().toString();throw new Error(`Invalid property type for record: ${typeof i}`)}const sh=(i,e)=>{let t=Vt().map(Hu),n=i;e!==void 0&&(i=i<32?-((e<<5)+i):(e<<5)+i,t.highByte=e);let r=pt[i];return r&&(r.isShared||Mi)&&((pt.restoreStructures||(pt.restoreStructures=[]))[i]=r),pt[i]=t,t.read=Pc(t,n),t.read()};an[0]=()=>{};an[0].noBuffer=!0;an[66]=i=>{let e=i.length,t=BigInt(i[0]&128?i[0]-256:i[0]);for(let n=1;n<e;n++)t<<=BigInt(8),t+=BigInt(i[n]);return t};let $_={Error,TypeError,ReferenceError};an[101]=()=>{let i=Vt();return($_[i[0]]||Error)(i[1],{cause:i[2]})};an[105]=i=>{if(Rt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=ft.getUint32(X-4);li||(li=new Map);let t=Re[X],n;t>=144&&t<160||t==220||t==221?n=[]:n={};let r={target:n};li.set(e,r);let s=Vt();return r.used?Object.assign(n,s):(r.target=s,s)};an[112]=i=>{if(Rt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=ft.getUint32(X-4),t=li.get(e);return t.used=!0,t.target};an[115]=()=>new Set(Vt());const Vu=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(i=>i+"Array");let X_=typeof globalThis=="object"?globalThis:window;an[116]=i=>{let e=i[0],t=Vu[e];if(!t){if(e===16){let n=new ArrayBuffer(i.length-1);return new Uint8Array(n).set(i.subarray(1)),n}throw new Error("Could not find typed array for code "+e)}return new X_[t](Uint8Array.prototype.slice.call(i,1).buffer)};an[120]=()=>{let i=Vt();return new RegExp(i[0],i[1])};const q_=[];an[98]=i=>{let e=(i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3],t=X;return X+=e-i.length,Qt=q_,Qt=[ih(),ih()],Qt.position0=0,Qt.position1=0,Qt.postBundlePosition=X,X=t,Vt()};an[255]=i=>i.length==4?new Date((i[0]*16777216+(i[1]<<16)+(i[2]<<8)+i[3])*1e3):i.length==8?new Date(((i[0]<<22)+(i[1]<<14)+(i[2]<<6)+(i[3]>>2))/1e6+((i[3]&3)*4294967296+i[4]*16777216+(i[5]<<16)+(i[6]<<8)+i[7])*1e3):i.length==12?new Date(((i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3])/1e6+((i[4]&128?-281474976710656:0)+i[6]*1099511627776+i[7]*4294967296+i[8]*16777216+(i[9]<<16)+(i[10]<<8)+i[11])*1e3):new Date("invalid");function Gu(i){let e=Yn,t=X,n=bn,r=Xn,s=yi,o=li,a=Qt,u=new Uint8Array(Re.slice(0,Yn)),l=pt,p=pt.slice(0,pt.length),h=Rt,d=Mi,g=i();return Yn=e,X=t,bn=n,Xn=r,yi=s,li=o,Qt=a,Re=u,Mi=d,pt=l,pt.splice(0,pt.length,...p),Rt=h,ft=new DataView(Re.buffer,Re.byteOffset,Re.byteLength),g}function no(){Re=null,li=null,pt=null}function j_(i){i.unpack?an[i.type]=i.unpack:an[i.type]=i}const ho=new Array(147);for(let i=0;i<256;i++)ho[i]=+("1e"+Math.floor(45.15-i*.30103));const Y_=Ai;var uo=new Ai({useRecords:!1});const K_=uo.unpack,Z_=uo.unpackMultiple,J_=uo.unpack,Wu={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let $u=new Float32Array(1),oh=new Uint8Array($u.buffer,0,4);function Q_(i){$u[0]=i;let e=ho[(oh[3]&127)<<1|oh[2]>>7];return(e*i+(i>0?.5:-.5)>>0)/e}let js;try{js=new TextEncoder}catch{}let io,Dc;const fo=typeof Buffer<"u",Hs=fo?function(i){return Buffer.allocUnsafeSlow(i)}:Uint8Array,Xu=fo?Buffer:Uint8Array,ah=fo?4294967296:2144337920;let Q,zr,bt,Y=0,cn,Ot=null,ev;const tv=21760,nv=/[\u0080-\uFFFF]/,fr=Symbol("record-id");class ss extends Ai{constructor(e){super(e),this.offset=0;let t,n,r,s,o=Xu.prototype.utf8Write?function(P,G){return Q.utf8Write(P,G,Q.byteLength-G)}:js&&js.encodeInto?function(P,G){return js.encodeInto(P,Q.subarray(G)).written}:!1,a=this;e||(e={});let u=e&&e.sequential,l=e.structures||e.saveStructures,p=e.maxSharedStructures;if(p==null&&(p=l?32:0),p>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let h=e.maxOwnStructures;h==null&&(h=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let d=p>32||h+p>64,g=p+64,x=p+h+64;if(x>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let E=[],v=0,m=0;this.pack=this.encode=function(P,G){if(Q||(Q=new Hs(8192),bt=Q.dataView||(Q.dataView=new DataView(Q.buffer,0,8192)),Y=0),cn=Q.length-10,cn-Y<2048?(Q=new Hs(Q.length),bt=Q.dataView||(Q.dataView=new DataView(Q.buffer,0,Q.length)),cn=Q.length-10,Y=0):Y=Y+7&2147483640,t=Y,G&Ku&&(Y+=G&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof P!="string"?(Ot=[],Ot.size=1/0):Ot=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let B=r.sharedLength||0;if(B>p)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let W=0;W<B;W++){let $=r[W];if(!$)continue;let ue,fe=r.transitions;for(let Ee=0,Ne=$.length;Ee<Ne;Ee++){let rt=$[Ee];ue=fe[rt],ue||(ue=fe[rt]=Object.create(null)),fe=ue}fe[fr]=W+64}this.lastNamedStructuresLength=B}u||(r.nextId=B+64)}n&&(n=!1);let k;try{a.randomAccessStructure&&P&&P.constructor&&P.constructor===Object?Z(P):S(P);let B=Ot;if(Ot&&hh(t,S,0),s&&s.idsToInsert){let W=s.idsToInsert.sort((Ee,Ne)=>Ee.offset>Ne.offset?1:-1),$=W.length,ue=-1;for(;B&&$>0;){let Ee=W[--$].offset+t;Ee<B.stringsPosition+t&&ue===-1&&(ue=0),Ee>B.position+t?ue>=0&&(ue+=6):(ue>=0&&(bt.setUint32(B.position+t,bt.getUint32(B.position+t)+ue),ue=-1),B=B.previous,$++)}ue>=0&&B&&bt.setUint32(B.position+t,bt.getUint32(B.position+t)+ue),Y+=W.length*6,Y>cn&&b(Y),a.offset=Y;let fe=rv(Q.subarray(t,Y),W);return s=null,fe}return a.offset=Y,G&ju?(Q.start=t,Q.end=Y,Q):Q.subarray(t,Y)}catch(B){throw k=B,B}finally{if(r&&(A(),n&&a.saveStructures)){let B=r.sharedLength||0,W=Q.subarray(t,Y),$=ov(r,a);if(!k)return a.saveStructures($,$.isCompatible)===!1?a.pack(P,G):(a.lastNamedStructuresLength=B,Q.length>1073741824&&(Q=null),W)}Q.length>1073741824&&(Q=null),G&Yu&&(Y=t)}};const A=()=>{m<10&&m++;let P=r.sharedLength||0;if(r.length>P&&!u&&(r.length=P),v>1e4)r.transitions=null,m=0,v=0,E.length>0&&(E=[]);else if(E.length>0&&!u){for(let G=0,k=E.length;G<k;G++)E[G][fr]=0;E=[]}},C=P=>{var G=P.length;G<16?Q[Y++]=144|G:G<65536?(Q[Y++]=220,Q[Y++]=G>>8,Q[Y++]=G&255):(Q[Y++]=221,bt.setUint32(Y,G),Y+=4);for(let k=0;k<G;k++)S(P[k])},S=P=>{Y>cn&&(Q=b(Y));var G=typeof P,k;if(G==="string"){let B=P.length;if(Ot&&B>=4&&B<4096){if((Ot.size+=B)>tv){let fe,Ee=(Ot[0]?Ot[0].length*3+Ot[1].length:0)+10;Y+Ee>cn&&(Q=b(Y+Ee));let Ne;Ot.position?(Ne=Ot,Q[Y]=200,Y+=3,Q[Y++]=98,fe=Y-t,Y+=4,hh(t,S,0),bt.setUint16(fe+t-3,Y-t-fe)):(Q[Y++]=214,Q[Y++]=98,fe=Y-t,Y+=4),Ot=["",""],Ot.previous=Ne,Ot.size=0,Ot.position=fe}let ue=nv.test(P);Ot[ue?0:1]+=P,Q[Y++]=193,S(ue?-B:B);return}let W;B<32?W=1:B<256?W=2:B<65536?W=3:W=5;let $=B*3;if(Y+$>cn&&(Q=b(Y+$)),B<64||!o){let ue,fe,Ee,Ne=Y+W;for(ue=0;ue<B;ue++)fe=P.charCodeAt(ue),fe<128?Q[Ne++]=fe:fe<2048?(Q[Ne++]=fe>>6|192,Q[Ne++]=fe&63|128):(fe&64512)===55296&&((Ee=P.charCodeAt(ue+1))&64512)===56320?(fe=65536+((fe&1023)<<10)+(Ee&1023),ue++,Q[Ne++]=fe>>18|240,Q[Ne++]=fe>>12&63|128,Q[Ne++]=fe>>6&63|128,Q[Ne++]=fe&63|128):(Q[Ne++]=fe>>12|224,Q[Ne++]=fe>>6&63|128,Q[Ne++]=fe&63|128);k=Ne-Y-W}else k=o(P,Y+W);k<32?Q[Y++]=160|k:k<256?(W<2&&Q.copyWithin(Y+2,Y+1,Y+1+k),Q[Y++]=217,Q[Y++]=k):k<65536?(W<3&&Q.copyWithin(Y+3,Y+2,Y+2+k),Q[Y++]=218,Q[Y++]=k>>8,Q[Y++]=k&255):(W<5&&Q.copyWithin(Y+5,Y+3,Y+3+k),Q[Y++]=219,bt.setUint32(Y,k),Y+=4),Y+=k}else if(G==="number")if(P>>>0===P)P<32||P<128&&this.useRecords===!1||P<64&&!this.randomAccessStructure?Q[Y++]=P:P<256?(Q[Y++]=204,Q[Y++]=P):P<65536?(Q[Y++]=205,Q[Y++]=P>>8,Q[Y++]=P&255):(Q[Y++]=206,bt.setUint32(Y,P),Y+=4);else if(P>>0===P)P>=-32?Q[Y++]=256+P:P>=-128?(Q[Y++]=208,Q[Y++]=P+256):P>=-32768?(Q[Y++]=209,bt.setInt16(Y,P),Y+=2):(Q[Y++]=210,bt.setInt32(Y,P),Y+=4);else{let B;if((B=this.useFloat32)>0&&P<4294967296&&P>=-2147483648){Q[Y++]=202,bt.setFloat32(Y,P);let W;if(B<4||(W=P*ho[(Q[Y]&127)<<1|Q[Y+1]>>7])>>0===W){Y+=4;return}else Y--}Q[Y++]=203,bt.setFloat64(Y,P),Y+=8}else if(G==="object"||G==="function")if(!P)Q[Y++]=192;else{if(s){let W=s.get(P);if(W){if(!W.id){let $=s.idsToInsert||(s.idsToInsert=[]);W.id=$.push(W)}Q[Y++]=214,Q[Y++]=112,bt.setUint32(Y,W.id),Y+=4;return}else s.set(P,{offset:Y-t})}let B=P.constructor;if(B===Object)z(P);else if(B===Array)C(P);else if(B===Map)if(this.mapAsEmptyObject)Q[Y++]=128;else{k=P.size,k<16?Q[Y++]=128|k:k<65536?(Q[Y++]=222,Q[Y++]=k>>8,Q[Y++]=k&255):(Q[Y++]=223,bt.setUint32(Y,k),Y+=4);for(let[W,$]of P)S(W),S($)}else{for(let W=0,$=io.length;W<$;W++){let ue=Dc[W];if(P instanceof ue){let fe=io[W];if(fe.write){fe.type&&(Q[Y++]=212,Q[Y++]=fe.type,Q[Y++]=0);let at=fe.write.call(this,P);at===P?Array.isArray(P)?C(P):z(P):S(at);return}let Ee=Q,Ne=bt,rt=Y;Q=null;let ht;try{ht=fe.pack.call(this,P,at=>(Q=Ee,Ee=null,Y+=at,Y>cn&&b(Y),{target:Q,targetView:bt,position:Y-at}),S)}finally{Ee&&(Q=Ee,bt=Ne,Y=rt,cn=Q.length-10)}ht&&(ht.length+Y>cn&&b(ht.length+Y),Y=iv(ht,Q,Y,fe.type));return}}if(Array.isArray(P))C(P);else{if(P.toJSON){const W=P.toJSON();if(W!==P)return S(W)}if(G==="function")return S(this.writeFunction&&this.writeFunction(P));z(P)}}}else if(G==="boolean")Q[Y++]=P?195:194;else if(G==="bigint"){if(P<BigInt(1)<<BigInt(63)&&P>=-(BigInt(1)<<BigInt(63)))Q[Y++]=211,bt.setBigInt64(Y,P);else if(P<BigInt(1)<<BigInt(64)&&P>0)Q[Y++]=207,bt.setBigUint64(Y,P);else if(this.largeBigIntToFloat)Q[Y++]=203,bt.setFloat64(Y,Number(P));else{if(this.largeBigIntToString)return S(P.toString());if(this.useBigIntExtension&&P<BigInt(2)**BigInt(1023)&&P>-(BigInt(2)**BigInt(1023))){Q[Y++]=199,Y++,Q[Y++]=66;let B=[],W;do{let $=P&BigInt(255);W=($&BigInt(128))===(P<BigInt(0)?BigInt(128):BigInt(0)),B.push($),P>>=BigInt(8)}while(!((P===BigInt(0)||P===BigInt(-1))&&W));Q[Y-2]=B.length;for(let $=B.length;$>0;)Q[Y++]=Number(B[--$]);return}else throw new RangeError(P+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}Y+=8}else if(G==="undefined")this.encodeUndefinedAsNil?Q[Y++]=192:(Q[Y++]=212,Q[Y++]=0,Q[Y++]=0);else throw new Error("Unknown type: "+G)},L=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?P=>{let G;if(this.skipValues){G=[];for(let W in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(W))&&!this.skipValues.includes(P[W])&&G.push(W)}else G=Object.keys(P);let k=G.length;k<16?Q[Y++]=128|k:k<65536?(Q[Y++]=222,Q[Y++]=k>>8,Q[Y++]=k&255):(Q[Y++]=223,bt.setUint32(Y,k),Y+=4);let B;if(this.coercibleKeyAsNumber)for(let W=0;W<k;W++){B=G[W];let $=Number(B);S(isNaN($)?B:$),S(P[B])}else for(let W=0;W<k;W++)S(B=G[W]),S(P[B])}:P=>{Q[Y++]=222;let G=Y-t;Y+=2;let k=0;for(let B in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(B))&&(S(B),S(P[B]),k++);if(k>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');Q[G+++t]=k>>8,Q[G+t]=k&255},D=this.useRecords===!1?L:e.progressiveRecords&&!d?P=>{let G,k=r.transitions||(r.transitions=Object.create(null)),B=Y++-t,W;for(let $ in P)if(typeof P.hasOwnProperty!="function"||P.hasOwnProperty($)){if(G=k[$],G)k=G;else{let ue=Object.keys(P),fe=k;k=r.transitions;let Ee=0;for(let Ne=0,rt=ue.length;Ne<rt;Ne++){let ht=ue[Ne];G=k[ht],G||(G=k[ht]=Object.create(null),Ee++),k=G}B+t+1==Y?(Y--,w(k,ue,Ee)):F(k,ue,B,Ee),W=!0,k=fe[$]}S(P[$])}if(!W){let $=k[fr];$?Q[B+t]=$:F(k,Object.keys(P),B,0)}}:P=>{let G,k=r.transitions||(r.transitions=Object.create(null)),B=0;for(let $ in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty($))&&(G=k[$],G||(G=k[$]=Object.create(null),B++),k=G);let W=k[fr];W?W>=96&&d?(Q[Y++]=((W-=96)&31)+96,Q[Y++]=W>>5):Q[Y++]=W:w(k,k.__keys__||Object.keys(P),B);for(let $ in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty($))&&S(P[$])},U=typeof this.useRecords=="function"&&this.useRecords,z=U?P=>{U(P)?D(P):L(P)}:D,b=P=>{let G;if(P>16777216){if(P-t>ah)throw new Error("Packed buffer would be larger than maximum buffer size");G=Math.min(ah,Math.round(Math.max((P-t)*(P>67108864?1.25:2),4194304)/4096)*4096)}else G=(Math.max(P-t<<2,Q.length-1)>>12)+1<<12;let k=new Hs(G);return bt=k.dataView||(k.dataView=new DataView(k.buffer,0,G)),P=Math.min(P,Q.length),Q.copy?Q.copy(k,0,t,P):k.set(Q.slice(t,P)),Y-=t,t=0,cn=k.length-10,Q=k},w=(P,G,k)=>{let B=r.nextId;B||(B=64),B<g&&this.shouldShareStructure&&!this.shouldShareStructure(G)?(B=r.nextOwnId,B<x||(B=g),r.nextOwnId=B+1):(B>=x&&(B=g),r.nextId=B+1);let W=G.highByte=B>=96&&d?B-96>>5:-1;P[fr]=B,P.__keys__=G,r[B-64]=G,B<g?(G.isShared=!0,r.sharedLength=B-63,n=!0,W>=0?(Q[Y++]=(B&31)+96,Q[Y++]=W):Q[Y++]=B):(W>=0?(Q[Y++]=213,Q[Y++]=114,Q[Y++]=(B&31)+96,Q[Y++]=W):(Q[Y++]=212,Q[Y++]=114,Q[Y++]=B),k&&(v+=m*k),E.length>=h&&(E.shift()[fr]=0),E.push(P),S(G))},F=(P,G,k,B)=>{let W=Q,$=Y,ue=cn,fe=t;Q=zr,Y=0,t=0,Q||(zr=Q=new Hs(8192)),cn=Q.length-10,w(P,G,B),zr=Q;let Ee=Y;if(Q=W,Y=$,cn=ue,t=fe,Ee>1){let Ne=Y+Ee-1;Ne>cn&&b(Ne);let rt=k+t;Q.copyWithin(rt+Ee,rt+1,Y),Q.set(zr.slice(0,Ee),rt),Y=Ne}else Q[k+t]=zr[0]},Z=P=>{let G=ev(P,Q,t,Y,r,b,(k,B,W)=>{if(W)return n=!0;Y=B;let $=Q;return S(k),A(),$!==Q?{position:Y,targetView:bt,target:Q}:Y},this);if(G===0)return z(P);Y=G}}useBuffer(e){Q=e,Q.dataView||(Q.dataView=new DataView(Q.buffer,Q.byteOffset,Q.byteLength)),bt=Q.dataView,Y=0}set position(e){Y=e}get position(){return Y}set buffer(e){Q=e}get buffer(){return Q}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}Dc=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Nu];io=[{pack(i,e,t){let n=i.getTime()/1e3;if((this.useTimestamp32||i.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,n)}else if(n>0&&n<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,i.getMilliseconds()*4e6+(n/1e3/4294967296>>0)),s.setUint32(o+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,i.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(n)))}}},{pack(i,e,t){if(this.setAsEmptyObject)return e(0),t({});let n=Array.from(i),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(n)}},{pack(i,e,t){let{target:n,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(n[r++]=212,n[r++]=101,n[r++]=0),t([i.name,i.message,i.cause])}},{pack(i,e,t){let{target:n,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(n[r++]=212,n[r++]=120,n[r++]=0),t([i.source,i.flags])}},{pack(i,e){this.moreTypes?ch(i,16,e):lh(fo?Buffer.from(i):new Uint8Array(i),e)}},{pack(i,e){let t=i.constructor;t!==Xu&&this.moreTypes?ch(i,Vu.indexOf(t.name),e):lh(i,e)}},{pack(i,e){let{target:t,position:n}=e(1);t[n]=193}}];function ch(i,e,t,n){let r=i.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,i.buffer||(i=new Uint8Array(i)),s.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o)}function lh(i,e){let t=i.byteLength;var n,r;if(t<256){var{target:n,position:r}=e(t+2);n[r++]=196,n[r++]=t}else if(t<65536){var{target:n,position:r}=e(t+3);n[r++]=197,n[r++]=t>>8,n[r++]=t&255}else{var{target:n,position:r,targetView:s}=e(t+5);n[r++]=198,s.setUint32(r,t),r+=4}n.set(i,r)}function iv(i,e,t,n){let r=i.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=n,e.set(i,t),t+=r,t}function rv(i,e){let t,n=e.length*6,r=i.length-n;for(;t=e.pop();){let s=t.offset,o=t.id;i.copyWithin(s+n,s,r),n-=6;let a=s+n;i[a++]=214,i[a++]=105,i[a++]=o>>24,i[a++]=o>>16&255,i[a++]=o>>8&255,i[a++]=o&255,r=s}return i}function hh(i,e,t){if(Ot.length>0){bt.setUint32(Ot.position+i,Y+t-Ot.position-i),Ot.stringsPosition=Y-i;let n=Ot;Ot=null,e(n[0]),e(n[1])}}function sv(i){if(i.Class){if(!i.pack&&!i.write)throw new Error("Extension has no pack or write function");if(i.pack&&!i.type)throw new Error("Extension has no type (numeric code to identify the extension)");Dc.unshift(i.Class),io.unshift(i)}j_(i)}function ov(i,e){return i.isCompatible=t=>{let n=!t||(e.lastNamedStructuresLength||0)===t.length;return n||e._mergeStructures(t),n},i}let qu=new ss({useRecords:!1});const av=qu.pack,cv=qu.pack,lv=ss,{NEVER:hv,ALWAYS:uv,DECIMAL_ROUND:fv,DECIMAL_FIT:dv}=Wu,ju=512,Yu=1024,Ku=2048;function pv(i,e={}){if(!i||typeof i!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof i[Symbol.iterator]=="function")return mv(i,e);if(typeof i.then=="function"||typeof i[Symbol.asyncIterator]=="function")return gv(i,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*mv(i,e){const t=new ss(e);for(const n of i)yield t.pack(n)}async function*gv(i,e){const t=new ss(e);for await(const n of i)yield t.pack(n)}function _v(i,e={}){if(!i||typeof i!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Ai(e);let n;const r=s=>{let o;n&&(s=Buffer.concat([n,s]),n=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)n=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof i[Symbol.iterator]=="function")return(function*(){for(const o of i)yield*r(o)})();if(typeof i[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of i)yield*r(o)})()}const vv=_v,xv=pv,yv=!1,Ev=!0,Sv=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:uv,C1:Cc,DECIMAL_FIT:dv,DECIMAL_ROUND:fv,Decoder:Y_,Encoder:lv,FLOAT32_OPTIONS:Wu,NEVER:hv,Packr:ss,RESERVE_START_SPACE:Ku,RESET_BUFFER_MODE:Yu,REUSE_BUFFER_MODE:ju,Unpackr:Ai,addExtension:sv,clearSource:no,decode:J_,decodeIter:vv,encode:cv,encodeIter:xv,isNativeAccelerationEnabled:W_,mapsAsObjects:Ev,pack:av,roundFloat32:Q_,unpack:K_,unpackMultiple:Z_,useRecords:yv},Symbol.toStringTag,{value:"Module"})),Mv=bc(Sv);var uh;function Ju(){if(uh)return jo;uh=1;var i=F_(),e=Du(),t=Lu(),n=Ou(),r=B_(),s=Rc(),o=Uu(),a=lo(),u=Mv;let l=class Zu{constructor(h,d){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=n.createNanoEvents(),this.roomId=null,this.name=h,this.packr=new u.Packr,this.packr.encode(void 0),d&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=d,this.serializer.state=new d),this.onError((g,x)=>{var E;return(E=console.warn)===null||E===void 0?void 0:E.call(console,`colyseus.js - onError => (${g}) ${x}`)}),this.onLeave(()=>this.removeAllListeners())}connect(h,d,g=this,x,E){const v=new i.Connection(x.protocol);if(g.connection=v,v.events.onmessage=Zu.prototype.onMessageCallback.bind(g),v.events.onclose=function(m){var A;if(!g.hasJoined){(A=console.warn)===null||A===void 0||A.call(console,`Room connection was closed unexpectedly (${m.code}): ${m.reason}`),g.onError.invoke(m.code,m.reason);return}m.code===a.CloseCode.DEVMODE_RESTART&&d?d():(g.onLeave.invoke(m.code,m.reason),g.destroy())},v.events.onerror=function(m){var A;(A=console.warn)===null||A===void 0||A.call(console,`Room, onError (${m.code}): ${m.reason}`),g.onError.invoke(m.code,m.reason)},x.protocol==="h3"){const m=new URL(h);v.connect(m.origin,x)}else v.connect(h,E)}leave(h=!0){return new Promise(d=>{this.onLeave(g=>d(g)),this.connection?h?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(h,d){return this.onMessageHandlers.on(this.getMessageHandlerKey(h),d)}send(h,d){const g={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof h=="string"?s.encode.string(this.packr.buffer,h,g):s.encode.number(this.packr.buffer,h,g),this.packr.position=0;const x=d!==void 0?this.packr.pack(d,2048+g.offset):this.packr.buffer.subarray(0,g.offset);this.connection.send(x)}sendUnreliable(h,d){const g={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof h=="string"?s.encode.string(this.packr.buffer,h,g):s.encode.number(this.packr.buffer,h,g),this.packr.position=0;const x=d!==void 0?this.packr.pack(d,2048+g.offset):this.packr.buffer.subarray(0,g.offset);this.connection.sendUnreliable(x)}sendBytes(h,d){const g={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof h=="string"?s.encode.string(this.packr.buffer,h,g):s.encode.number(this.packr.buffer,h,g),d.byteLength+g.offset>this.packr.buffer.byteLength){const x=new Uint8Array(g.offset+d.byteLength);x.set(this.packr.buffer),this.packr.useBuffer(x)}this.packr.buffer.set(d,g.offset),this.connection.send(this.packr.buffer.subarray(0,g.offset+d.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(h){const d=new Uint8Array(h.data),g={offset:1},x=d[0];if(x===e.Protocol.JOIN_ROOM){const E=s.decode.utf8Read(d,g,d[g.offset++]);if(this.serializerId=s.decode.utf8Read(d,g,d[g.offset++]),!this.serializer){const v=t.getSerializer(this.serializerId);this.serializer=new v}d.byteLength>g.offset&&this.serializer.handshake&&this.serializer.handshake(d,g),this.reconnectionToken=`${this.roomId}:${E}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(x===e.Protocol.ERROR){const E=s.decode.number(d,g),v=s.decode.string(d,g);this.onError.invoke(E,v)}else if(x===e.Protocol.LEAVE_ROOM)this.leave();else if(x===e.Protocol.ROOM_STATE)this.serializer.setState(d,g),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(d,g),this.onStateChange.invoke(this.serializer.getState());else if(x===e.Protocol.ROOM_DATA){const E=s.decode.stringCheck(d,g)?s.decode.string(d,g):s.decode.number(d,g),v=d.byteLength>g.offset?u.unpack(d,{start:g.offset}):void 0;this.dispatchMessage(E,v)}else if(x===e.Protocol.ROOM_DATA_BYTES){const E=s.decode.stringCheck(d,g)?s.decode.string(d,g):s.decode.number(d,g);this.dispatchMessage(E,d.subarray(g.offset))}}dispatchMessage(h,d){var g;const x=this.getMessageHandlerKey(h);this.onMessageHandlers.events[x]?this.onMessageHandlers.emit(x,d):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",h,d):(g=console.warn)===null||g===void 0||g.call(console,`colyseus.js: onMessage() not registered for type '${h}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(h){switch(typeof h){case"string":return h;case"number":return`i${h}`;default:throw new Error("invalid message type.")}}};return jo.Room=l,jo}var na={};function fh(i,e){e.headers=i.headers||{},e.statusMessage=i.statusText,e.statusCode=i.status,e.data=i.response}function Hn(i,e,t){return new Promise(function(n,r){t=t||{};var s=new XMLHttpRequest,o,a,u,l=t.body,p=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(h){h.timeout=h.type=="timeout",r(h)},s.onabort=function(h){h.aborted=!0,r(h)},s.open(i,e.href||e),s.onload=function(){for(u=s.getAllResponseHeaders().trim().split(/[\r\n]+/),fh(s,s);a=u.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(h){return fh(s,h),r(h)}(s.status>=400?r:n)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(p["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in p)s.setRequestHeader(o,p[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var Tv=Hn.bind(Hn,"GET"),wv=Hn.bind(Hn,"POST"),bv=Hn.bind(Hn,"PATCH"),Av=Hn.bind(Hn,"DELETE"),Rv=Hn.bind(Hn,"PUT");const Cv=Object.freeze(Object.defineProperty({__proto__:null,del:Av,get:Tv,patch:bv,post:wv,put:Rv,send:Hn},Symbol.toStringTag,{value:"Module"})),Pv=bc(Cv);var dh;function Iv(){if(dh)return na;dh=1;var i=lo(),e=Pv;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var u=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,u.get?u:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var n=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,u={}){return n[o](this.client.getHttpEndpoint(a),this.getOptions(u)).catch(l=>{var p;if(l.aborted)throw new i.AbortError("Request aborted");const h=l.statusCode,d=((p=l.data)===null||p===void 0?void 0:p.error)||l.statusMessage||l.message;throw!h&&!d?l:new i.ServerError(h,d)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return na.HTTP=r,na}var ia={},kr={},ph;function Dv(){if(ph)return kr;ph=1;var i=co;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,u){this.cache[a]=u},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function n(a,u){t().setItem(a,u)}function r(a){t().removeItem(a)}function s(a,u){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?u(l):l.then(p=>u(p))}class o{constructor(){this.dbPromise=new Promise(u=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>u(l.result)})}tx(u,l){return i.__awaiter(this,void 0,void 0,function*(){const h=(yield this.dbPromise).transaction("store",u).objectStore("store");return l(h)})}setItem(u,l){return this.tx("readwrite",p=>p.put(l,u)).then()}getItem(u){return i.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",p=>p.get(u));return new Promise(p=>{l.onsuccess=()=>p(l.result)})})}removeItem(u){return this.tx("readwrite",l=>l.delete(u)).then()}}return kr.getItem=s,kr.removeItem=r,kr.setItem=n,kr}var mh;function Qu(){if(mh)return ia;mh=1;var i=co,e=Dv(),t=Ou(),n,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},n.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,p=>this.token=p)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const p=i.__classPrivateFieldGet(this,o,"f").on("change",l);return i.__classPrivateFieldGet(this,n,"f")||i.__classPrivateFieldSet(this,r,new Promise((h,d)=>{this.getUserData().then(g=>{this.emitChange(Object.assign(Object.assign({},g),{token:this.token}))}).catch(g=>{this.emitChange({user:null,token:void 0})}).finally(()=>{h()})}),"f"),i.__classPrivateFieldSet(this,n,!0,"f"),p}getUserData(){return i.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,p,h){return i.__awaiter(this,void 0,void 0,function*(){const d=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:p,options:h}})).data;return this.emitChange(d),d})}signInWithEmailAndPassword(l,p){return i.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:p}})).data;return this.emitChange(h),h})}signInAnonymously(l){return i.__awaiter(this,void 0,void 0,function*(){const p=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(p),p})}sendPasswordResetEmail(l){return i.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return i.__awaiter(this,arguments,void 0,function*(p,h={}){return new Promise((d,g)=>{const x=h.width||480,E=h.height||768,v=this.token?`?token=${this.token}`:"",m=`Login with ${p[0].toUpperCase()+p.substring(1)}`,A=this.http.client.getHttpEndpoint(`${h.prefix||`${this.settings.path}/provider`}/${p}${v}`),C=screen.width/2-x/2,S=screen.height/2-E/2;i.__classPrivateFieldSet(this,s,window.open(A,m,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+x+", height="+E+", top="+S+", left="+C),"f");const L=U=>{U.data.user===void 0&&U.data.token===void 0||(clearInterval(D),i.__classPrivateFieldGet(this,s,"f").close(),i.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",L),U.data.error!==void 0?g(U.data.error):(d(U.data),this.emitChange(U.data)))},D=setInterval(()=>{(!i.__classPrivateFieldGet(this,s,"f")||i.__classPrivateFieldGet(this,s,"f").closed)&&(i.__classPrivateFieldSet(this,s,void 0,"f"),g("cancelled"),window.removeEventListener("message",L))},200);window.addEventListener("message",L)})})}signOut(){return i.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),i.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return n=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,ia.Auth=a,ia}var ra={},gh;function Lv(){if(gh)return ra;gh=1;function i(e){var t;const n=((t=window?.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${n}${s}${e.pathname}${e.search}`:`${e.protocol}//${n}/.proxy/colyseus${s}${e.pathname}${e.search}`}return ra.discordURLBuilder=i,ra}var _h;function Ov(){if(_h)return Ns;_h=1;var i=co,e=lo(),t=Ju(),n=Iv(),r=Qu(),s=Lv(),o;class a extends Error{constructor(h,d){super(h),this.code=d,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const u=typeof window<"u"&&typeof((o=window?.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(h=u,d){var g,x;if(typeof h=="string"){const E=h.startsWith("/")?new URL(h,u):new URL(h),v=E.protocol==="https:"||E.protocol==="wss:",m=Number(E.port||(v?443:80));this.settings={hostname:E.hostname,pathname:E.pathname,port:m,secure:v,searchParams:E.searchParams.toString()||void 0}}else h.port===void 0&&(h.port=h.secure?443:80),h.pathname===void 0&&(h.pathname=""),this.settings=h;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new n.HTTP(this,d?.headers||{}),this.auth=new r.Auth(this.http),this.urlBuilder=d?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((x=(g=window?.location)===null||g===void 0?void 0:g.hostname)===null||x===void 0)&&x.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(h){return i.__awaiter(this,arguments,void 0,function*(d,g={},x){return yield this.createMatchMakeRequest("joinOrCreate",d,g,x)})}create(h){return i.__awaiter(this,arguments,void 0,function*(d,g={},x){return yield this.createMatchMakeRequest("create",d,g,x)})}join(h){return i.__awaiter(this,arguments,void 0,function*(d,g={},x){return yield this.createMatchMakeRequest("join",d,g,x)})}joinById(h){return i.__awaiter(this,arguments,void 0,function*(d,g={},x){return yield this.createMatchMakeRequest("joinById",d,g,x)})}reconnect(h,d){return i.__awaiter(this,void 0,void 0,function*(){if(typeof h=="string"&&typeof d=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[g,x]=h.split(":");if(!g||!x)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",g,{reconnectionToken:x},d)})}consumeSeatReservation(h,d,g){return i.__awaiter(this,void 0,void 0,function*(){const x=this.createRoom(h.room.name,d);x.roomId=h.room.roomId,x.sessionId=h.sessionId;const E={sessionId:x.sessionId};h.reconnectionToken&&(E.reconnectionToken=h.reconnectionToken);const v=g||x;return x.connect(this.buildEndpoint(h.room,E,h.protocol),h.devMode&&(()=>i.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${x.roomId}'...`);let m=0,A=8;const C=()=>i.__awaiter(this,void 0,void 0,function*(){m++;try{yield this.consumeSeatReservation(h,d,v),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${x.roomId}'`)}catch{m<A?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${m} out of ${A})`),setTimeout(C,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(C,2e3)})),v,h,this.http.headers),new Promise((m,A)=>{const C=(S,L)=>A(new e.ServerError(S,L));v.onError.once(C),v.onJoin.once(()=>{v.onError.remove(C),m(v)})})})}createMatchMakeRequest(h,d){return i.__awaiter(this,arguments,void 0,function*(g,x,E={},v,m){const A=(yield this.http.post(`matchmake/${g}/${x}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(E)})).data;if(A.error)throw new a(A.error,A.code);return g==="reconnect"&&(A.reconnectionToken=E.reconnectionToken),yield this.consumeSeatReservation(A,v,m)})}createRoom(h,d){return new t.Room(h,d)}buildEndpoint(h,d={},g="ws"){let x=this.settings.searchParams||"";this.http.authToken&&(d._authToken=this.http.authToken);for(const m in d)d.hasOwnProperty(m)&&(x+=(x?"&":"")+`${m}=${d[m]}`);g==="h3"&&(g="http");let E=this.settings.secure?`${g}s://`:`${g}://`;h.publicAddress?E+=`${h.publicAddress}`:E+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const v=`${E}/${h.processId}/${h.roomId}?${x}`;return this.urlBuilder?this.urlBuilder(new URL(v)):v}getHttpEndpoint(h=""){const d=h.startsWith("/")?h:`/${h}`;let g=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${d}`;return this.settings.searchParams&&(g+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(g)):g}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",Ns.Client=l,Ns.MatchMakeError=a,Ns}var sa={},vh;function Uv(){if(vh)return sa;vh=1;let i=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return sa.NoneSerializer=i,sa}var xh;function Nv(){return xh||(xh=1,(function(i){R_();var e=Ov(),t=Du(),n=Ju(),r=Qu(),s=lo(),o=Uu(),a=Uv(),u=Lu();u.registerSerializer("schema",o.SchemaSerializer),u.registerSerializer("none",a.NoneSerializer),i.Client=e.Client,i.MatchMakeError=e.MatchMakeError,Object.defineProperty(i,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(i,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),i.Room=n.Room,i.Auth=r.Auth,i.ServerError=s.ServerError,i.SchemaSerializer=o.SchemaSerializer,i.getStateCallbacks=o.getStateCallbacks,i.registerSerializer=u.registerSerializer})(Xo)),Xo}var Lc=Nv();const Ht={DT:1/60},un={GRAVITY:9.8,JUMP_VELOCITY:4.65,FALL_MULTIPLIER:1,COYOTE_TIME:.08,RUN_SPEED:5.4,CROUCH_SPEED:2.4,GROUND_ACCEL:45,GROUND_FRICTION_DECEL:54,AIR_CONTROL:.45,STANDING_HEIGHT:2.1,CROUCHED_HEIGHT:1.3,EYE_HEIGHT:1.9,CAPSULE_RADIUS:.4},wn={MAX_SHIELD:100,MAX_HEALTH:45,RECHARGE_DELAY:5,RECHARGE_DURATION:2,OVERSHIELD_MAX:300,MELEE_DAMAGE:73},Jt={MAGAZINE:36,RESERVE:108,ROUNDS_PER_BURST:3,INTRA_BURST_INTERVAL:.0375,INTER_BURST_INTERVAL:.25,BODY_DAMAGE:11.2,FALLOFF_RANGE:30,FALLOFF_BODY_DAMAGE:8.5,RELOAD_EMPTY:2.2,RELOAD_TACTICAL:1.8,SPREAD_BASE_DEG:.4,SPREAD_BLOOM_DEG:1,ZOOM_FACTOR:2},Xr={TOP_SPEED:16,SPLATTER_SPEED:7,IMPACT_DAMAGE_PER_MS:15,IMPACT_KNOCKBACK_PER_MS:.8},Ti={DEFAULT_BUDGET:256,GRAVITY_SCALES:[0,.5,1,1.5,2],ROTATION_SNAPS_DEG:[15,45,90],FORMAT_VERSION:1};function yh(i){return{position:{...i},velocity:{x:0,y:0,z:0},grounded:!1,crouched:!1,coyoteTimer:1/0}}function Fv(i,e,t){const n=Math.sin(e.yaw),r=Math.cos(e.yaw);let s=-n*e.moveZ+r*e.moveX,o=-r*e.moveZ-n*e.moveX;const a=Math.hypot(s,o);a>1e-8&&(s/=a,o/=a);const u=a>1e-8;i.crouched=e.crouch;const l=e.crouch?un.CROUCH_SPEED:un.RUN_SPEED,p=i.velocity;if(i.grounded){const d=s*l,g=o*l,x=u?un.GROUND_ACCEL:un.GROUND_FRICTION_DECEL,E=d-p.x,v=g-p.z,m=Math.hypot(E,v),A=x*t;m<=A||m<1e-8?(p.x=d,p.z=g):(p.x+=E/m*A,p.z+=v/m*A)}else if(u){const d=Math.max(Math.hypot(p.x,p.z),un.RUN_SPEED),g=un.GROUND_ACCEL*un.AIR_CONTROL;p.x+=s*g*t,p.z+=o*g*t;const x=Math.hypot(p.x,p.z);x>d&&(p.x=p.x/x*d,p.z=p.z/x*d)}const h=i.coyoteTimer<un.COYOTE_TIME&&p.y<=0;e.jump&&(i.grounded||h)&&(p.y=un.JUMP_VELOCITY,i.grounded=!1,i.coyoteTimer=1/0)}function ic(i,e,t,n={}){const r=n.gravityScale??1,s=n.groundHeight??0;Fv(i,e,t);const o=i.velocity;if(i.position.x+=o.x*t,i.position.z+=o.z*t,!i.grounded){const a=o.y<0?un.FALL_MULTIPLIER:1,u=un.GRAVITY*r*a;i.position.y+=o.y*t-.5*u*t*t,o.y-=u*t}i.position.y<=s&&o.y<=0?(i.position.y=s,o.y=0,i.grounded=!0,i.coyoteTimer=0):i.grounded&&i.position.y>s+1e-6?(i.grounded=!1,i.coyoteTimer=0):!i.grounded&&i.coyoteTimer!==1/0&&(i.coyoteTimer+=t)}function Bv(i,e){const t=Math.cos(e);return{x:-Math.sin(i)*t,y:Math.sin(e),z:-Math.cos(i)*t}}class Eh{shield=wn.MAX_SHIELD;health=wn.MAX_HEALTH;alive=!0;timeSinceDamage=1/0;onShieldBreak;get recharging(){return this.alive&&this.shield<wn.MAX_SHIELD&&this.timeSinceDamage>=wn.RECHARGE_DELAY}applyDamage(e){const t={shieldDamage:0,healthDamage:0,shieldBroke:!1,died:!1,headshotKill:!1};if(!this.alive)return t;if(this.timeSinceDamage=0,e.melee==="back")return t.shieldDamage=this.shield,t.healthDamage=this.health,this.kill(t),t;if(e.headshot&&this.shield<=0)return t.healthDamage=this.health,t.headshotKill=!0,this.kill(t),t;const n=this.shield,r=Math.min(this.shield,e.amount);this.shield-=r,t.shieldDamage=r;const s=e.amount-r;return s>0&&(t.healthDamage=Math.min(this.health,s),this.health-=t.healthDamage),n>0&&this.shield<=0&&(this.shield=0,t.shieldBroke=!0,this.onShieldBreak?.()),this.health<=0&&(this.health=0,this.kill(t)),t}tick(e){if(this.alive&&(this.timeSinceDamage+=e,this.recharging)){const t=wn.MAX_SHIELD/wn.RECHARGE_DURATION;this.shield=Math.min(wn.MAX_SHIELD,this.shield+t*e)}}applyOvershield(){this.alive&&(this.shield=wn.OVERSHIELD_MAX)}meleeFront(){return this.applyDamage({amount:wn.MELEE_DAMAGE,melee:"front"})}meleeBack(){return this.applyDamage({amount:wn.MELEE_DAMAGE,melee:"back"})}respawn(){this.shield=wn.MAX_SHIELD,this.health=wn.MAX_HEALTH,this.alive=!0,this.timeSinceDamage=1/0}kill(e){this.shield=0,this.health=0,this.alive=!1,e.died=!0}}class Vs{mag=Jt.MAGAZINE;reserve=Jt.RESERVE;zoomed=!1;clock=0;lastBurstStart=-1/0;pendingRounds=[];reloadingUntil=-1/0;get reloading(){return this.clock<this.reloadingUntil}get bursting(){return this.pendingRounds.length>0}pullTrigger(){if(this.reloading||this.bursting||this.clock-this.lastBurstStart<Jt.INTER_BURST_INTERVAL||this.mag<=0)return!1;const e=Math.min(Jt.ROUNDS_PER_BURST,this.mag);for(let t=0;t<e;t++)this.pendingRounds.push({fireAt:this.clock+t*Jt.INTRA_BURST_INTERVAL,indexInBurst:t});return this.lastBurstStart=this.clock,!0}startReload(){if(this.reloading||this.bursting||this.mag>=Jt.MAGAZINE||this.reserve<=0)return!1;const e=this.mag===0?Jt.RELOAD_EMPTY:Jt.RELOAD_TACTICAL;return this.reloadingUntil=this.clock+e,this.zoomed=!1,!0}toggleZoom(){return this.reloading?!1:(this.zoomed=!this.zoomed,!0)}onDamaged(){this.zoomed=!1}update(e){const t=this.reloading;if(this.clock+=e,t&&!this.reloading){const r=Jt.MAGAZINE-this.mag,s=Math.min(r,this.reserve);this.mag+=s,this.reserve-=s}const n=[];for(;this.pendingRounds.length>0&&this.pendingRounds[0].fireAt<=this.clock;){const r=this.pendingRounds.shift();if(this.mag<=0)continue;this.mag-=1;const s=r.indexInBurst/(Jt.ROUNDS_PER_BURST-1);n.push({indexInBurst:r.indexInBurst,spreadDeg:Jt.SPREAD_BASE_DEG+(Jt.SPREAD_BLOOM_DEG-Jt.SPREAD_BASE_DEG)*s,time:r.fireAt})}return n}}function Sh(i,e=!0){return e&&i>Jt.FALLOFF_RANGE?Jt.FALLOFF_BODY_DAMAGE:Jt.BODY_DAMAGE}function zv(i){const e=Math.max(0,i);return e>=Xr.SPLATTER_SPEED?{splatter:!0,damage:1/0,knockback:e*Xr.IMPACT_KNOCKBACK_PER_MS}:{splatter:!1,damage:e*Xr.IMPACT_DAMAGE_PER_MS,knockback:e*Xr.IMPACT_KNOCKBACK_PER_MS}}const kv=["spawn_point","weapon_spawn","vehicle_spawn","block_box","block_ramp","block_wall","block_platform","objective"];function Hv(i){return{version:Ti.FORMAT_VERSION,name:i,settings:{gravityScale:1,objectBudget:Ti.DEFAULT_BUDGET},objects:[]}}function ef(i,e){return i.objects.length>=i.settings.objectBudget?!1:(i.objects.push(e),!0)}function Vv(i,e){const t=i.objects.findIndex(n=>n.id===e);return t<0?!1:(i.objects.splice(t,1),!0)}function Gv(i,e,t){const n=i.objects.find(s=>s.id===e);if(!n)return null;const r=qv(n);return r.id=t,ef(i,r)?r:null}function Wv(i,e){const t=e*Math.PI/180;return Math.round(i/t)*t}function $v(i){return JSON.stringify({version:i.version,name:i.name,settings:{gravityScale:i.settings.gravityScale,objectBudget:i.settings.objectBudget},objects:i.objects.map(e=>({id:e.id,type:e.type,position:oa(e.position),rotation:oa(e.rotation),scale:oa(e.scale),physics:e.physics,props:{...e.props.team!==void 0&&{team:e.props.team},...e.props.respawn!==void 0&&{respawn:e.props.respawn},...e.props.respawnTime!==void 0&&{respawnTime:e.props.respawnTime},...e.props.weapon!==void 0&&{weapon:e.props.weapon},...e.props.vehicle!==void 0&&{vehicle:e.props.vehicle}}}))},null,2)}function Xv(i){const e=JSON.parse(i);if(typeof e!="object"||e===null)throw new Error("forge map: not an object");const t=e;if(t.version!==Ti.FORMAT_VERSION)throw new Error(`forge map: unsupported version ${String(t.version)}`);if(typeof t.name!="string")throw new Error("forge map: missing name");const n=t.settings;if(!n)throw new Error("forge map: missing settings");const r=n.gravityScale;if(!Ti.GRAVITY_SCALES.includes(r))throw new Error(`forge map: invalid gravityScale ${String(n.gravityScale)}`);const s=n.objectBudget;if(typeof s!="number"||s<=0)throw new Error("forge map: invalid objectBudget");if(!Array.isArray(t.objects))throw new Error("forge map: missing objects");if(t.objects.length>s)throw new Error("forge map: over budget");const o=t.objects.map((a,u)=>{const l=a;if(typeof l.id!="string")throw new Error(`forge object ${u}: missing id`);if(!kv.includes(l.type))throw new Error(`forge object ${u}: unknown type ${String(l.type)}`);if(l.physics!=="fixed"&&l.physics!=="normal")throw new Error(`forge object ${u}: invalid physics mode ${String(l.physics)}`);return{id:l.id,type:l.type,position:aa(l.position,`object ${u} position`),rotation:aa(l.rotation,`object ${u} rotation`),scale:aa(l.scale,`object ${u} scale`),physics:l.physics,props:l.props??{}}});return{version:Ti.FORMAT_VERSION,name:t.name,settings:{gravityScale:r,objectBudget:s},objects:o}}function qv(i){return{id:i.id,type:i.type,position:{...i.position},rotation:{...i.rotation},scale:{...i.scale},physics:i.physics,props:{...i.props}}}function oa(i){return{x:i.x,y:i.y,z:i.z}}function aa(i,e){const t=i;if(!t||typeof t.x!="number"||typeof t.y!="number"||typeof t.z!="number"||!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Number.isFinite(t.z))throw new Error(`forge map: invalid ${e}`);return{x:t.x,y:t.y,z:t.z}}const dr={HALF_SIZE:32,WALL_HEIGHT:7,FLOOR_COLOR:6054248,WALL_COLOR:3817287},si=7699590,Lt=5660008,Hr=9062978,Vr=4481418,jv=6976128;function Gn(i,e,t,n,r,s,o=jv){const a=Math.hypot(n,t),u=Math.atan2(t,n)*180/Math.PI;return{pos:[i,t/2,e],size:[r,.4,a+.4],rot:[u,s,0],color:o}}const Yv=[{pos:[0,2.8,0],size:[13,.6,13],color:si},{pos:[-5.5,1.25,-5.5],size:[1.2,2.5,1.2],color:Lt},{pos:[5.5,1.25,-5.5],size:[1.2,2.5,1.2],color:Lt},{pos:[-5.5,1.25,5.5],size:[1.2,2.5,1.2],color:Lt},{pos:[5.5,1.25,5.5],size:[1.2,2.5,1.2],color:Lt},Gn(0,10.2,2.8,7.6,5,0),Gn(0,-10.2,2.8,7.6,5,180),Gn(10.2,0,2.8,7.6,5,90),Gn(-10.2,0,2.8,7.6,5,270),{pos:[-6.2,3.55,0],size:[.5,.9,5],color:Lt},{pos:[6.2,3.55,0],size:[.5,.9,5],color:Lt},{pos:[0,2.2,-26],size:[18,.5,8],color:si},{pos:[0,3.7,-30.7],size:[18,3,.8],color:Hr},{pos:[-8.6,1.1,-26],size:[.8,2.2,8],color:Hr},{pos:[8.6,1.1,-26],size:[.8,2.2,8],color:Hr},Gn(-5.5,-19.4,2.2,5,4,180,Hr),Gn(5.5,-19.4,2.2,5,4,180,Hr),{pos:[0,5.4,-29],size:[10,.4,3],color:Lt},{pos:[-4.6,3.9,-29],size:[.6,2.6,3],color:Lt},{pos:[4.6,3.9,-29],size:[.6,2.6,3],color:Lt},{pos:[0,2.2,26],size:[18,.5,8],color:si},{pos:[0,3.7,30.7],size:[18,3,.8],color:Vr},{pos:[-8.6,1.1,26],size:[.8,2.2,8],color:Vr},{pos:[8.6,1.1,26],size:[.8,2.2,8],color:Vr},Gn(-5.5,19.4,2.2,5,4,0,Vr),Gn(5.5,19.4,2.2,5,4,0,Vr),{pos:[0,5.4,29],size:[10,.4,3],color:Lt},{pos:[-4.6,3.9,29],size:[.6,2.6,3],color:Lt},{pos:[4.6,3.9,29],size:[.6,2.6,3],color:Lt},{pos:[-22,3.2,0],size:[4.5,.5,20],color:si},{pos:[-22,1.5,-8],size:[1.2,3,1.2],color:Lt},{pos:[-22,1.5,0],size:[1.2,3,1.2],color:Lt},{pos:[-22,1.5,8],size:[1.2,3,1.2],color:Lt},Gn(-22,14.2,3.2,8,4,0),Gn(-22,-14.2,3.2,8,4,180),{pos:[-24.05,3.9,0],size:[.4,.9,20],color:Lt},{pos:[24,1.9,-12],size:[5.5,3.8,5.5],color:si},{pos:[20.2,.6,-9],size:[2.2,1.2,2.2],color:Lt},{pos:[21.4,1.5,-11.4],size:[2.2,1.2,2.2],color:Lt},{pos:[24,4.35,-14.45],size:[5.5,1.1,.6],color:Lt},{pos:[-12,.75,-12],size:[2.6,1.5,2.6],color:Lt},{pos:[12,.75,12],size:[2.6,1.5,2.6],color:Lt},{pos:[-13,1.1,10],size:[1,2.2,4],color:si},{pos:[13,1.1,-10],size:[1,2.2,4],color:si},{pos:[-5,.6,16],size:[3,1.2,1.6],color:Lt},{pos:[5,.6,-16],size:[3,1.2,1.6],color:Lt},{pos:[18,.9,20],size:[1.8,1.8,1.8],color:si},{pos:[-18,.9,-20],size:[1.8,1.8,1.8],color:si}],Mh=[{x:0,y:0,z:0},{x:0,y:0,z:14.5},{x:0,y:0,z:-14.5},{x:14.5,y:0,z:0},{x:-14.5,y:0,z:0},{x:0,y:2.45,z:-26},{x:0,y:2.45,z:26},{x:-12,y:0,z:-12},{x:12,y:0,z:12},{x:18,y:0,z:20},{x:-18,y:0,z:-20},{x:24,y:0,z:4},{x:20,y:0,z:-4},{x:-8,y:0,z:20},{x:8,y:0,z:-20},{x:0,y:3.1,z:0}],Bi=[{x:-4,y:4,z:-25},{x:4,y:4,z:-25},{x:-4,y:4,z:25},{x:4,y:4,z:25},{x:-26,y:2,z:-14},{x:26,y:2,z:14}],ca={x:22,y:1.5,z:8};function la(i){return i*Math.PI/180}const on={RADIUS:un.CAPSULE_RADIUS,STANDING_HEIGHT:un.STANDING_HEIGHT,CROUCHED_HEIGHT:un.CROUCHED_HEIGHT,EYE_HEIGHT:un.EYE_HEIGHT,MAX_PITCH_RAD:Math.PI/2-.01,HEAD_FRACTION:.8},Kv={ROOM_NAME:"sandbox"},Zv={RECONCILE_EPSILON:.015},xr={INPUT:"input",PING:"ping",PONG:"pong",HIT_CONFIRM:"hitConfirm",KILL_FEED:"killFeed",SHOT_FIRED:"shotFired"};function Jv(i){const e=new Map,t=l=>{let p=e.get(l);return p||(p=new Cn({color:l,roughness:.85,metalness:.1}),e.set(l,p)),p},n=dr.HALF_SIZE,r=new nt(new Ct(n*2+4,2,n*2+4),t(dr.FLOOR_COLOR));r.position.set(0,-1,0),r.receiveShadow=!0,i.add(r);const s=new Wd(n*2,16,4014924,4804441);s.position.y=.02,i.add(s);const o=t(dr.WALL_COLOR),a=new Ct(n*2,dr.WALL_HEIGHT*2,2),u=new Ct(2,dr.WALL_HEIGHT*2,n*2);for(const[l,p,h]of[[0,-n-1,a],[0,n+1,a],[-n-1,0,u],[n+1,0,u]]){const d=new nt(h,o);d.position.set(l,dr.WALL_HEIGHT,p),i.add(d)}for(const l of Yv){const p=new nt(new Ct(l.size[0],l.size[1],l.size[2]),t(l.color??7699590));p.position.set(l.pos[0],l.pos[1],l.pos[2]),l.rot&&p.rotation.set(la(l.rot[0]),la(l.rot[1]),la(l.rot[2]),"XYZ"),p.castShadow=!0,p.receiveShadow=!0,i.add(p)}return i}class Qv{scene=new Ld;camera=new Rn(75,window.innerWidth/window.innerHeight,.1,500);renderer=new A_({antialias:!0});mapRoot=new pn;entityRoot=new pn;constructor(e){this.scene.background=new ct(1317412),this.scene.fog=new _c(1317412,55,110),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.scene.add(new kd(12440556,4870234,1.25));const t=new ul(16773853,1.5);t.position.set(18,30,12),this.scene.add(t);const n=new ul(10336472,.45);n.position.set(-14,18,-20),this.scene.add(n),this.scene.add(this.mapRoot),this.scene.add(this.entityRoot),this.scene.add(this.camera),Jv(this.mapRoot),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}render(){this.renderer.render(this.scene,this.camera)}}class ex{client;room;pingMs=0;constructor(e){this.client=new Lc.Client(e)}async connect(){return this.room=await this.client.joinOrCreate(Kv.ROOM_NAME),this.room.onMessage(xr.PONG,e=>{this.pingMs=performance.now()-e}),await new Promise(e=>this.room.onStateChange.once(()=>e())),this.room}sendInput(e){this.room?.send(xr.INPUT,e)}sendPing(){this.room?.send(xr.PING,performance.now())}}class tx{constructor(e){this.dom=e,window.addEventListener("keydown",t=>{t.code==="Space"&&!this.keys.has("Space")&&(this.jumpEdge=!0),t.code==="KeyR"&&(this.reloadEdge=!0),(t.code==="KeyF"||t.code==="KeyV")&&(this.meleeEdge=!0),t.code==="KeyE"&&!this.keys.has("KeyE")&&(this.useEdge=!0),this.keys.add(t.code)}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),e.addEventListener("click",()=>e.requestPointerLock()),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("mousedown",t=>{document.pointerLockElement===e&&(t.button===0&&(this.fireHeld=!0),t.button===2&&(this.zoomEdge=!0))}),window.addEventListener("mouseup",t=>{t.button===0&&(this.fireHeld=!1)}),document.addEventListener("mousemove",t=>{document.pointerLockElement===this.dom&&(this.yaw-=t.movementX*.0022,this.pitch=Math.max(-on.MAX_PITCH_RAD,Math.min(on.MAX_PITCH_RAD,this.pitch-t.movementY*.0022)))})}dom;keys=new Set;yaw=0;pitch=0;seq=0;fireHeld=!1;jumpEdge=!1;zoomEdge=!1;reloadEdge=!1;meleeEdge=!1;useEdge=!1;collect(e){const t=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),n=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0),r={seq:++this.seq,dt:e,moveX:t,moveZ:n,yaw:this.yaw,pitch:this.pitch,jump:this.jumpEdge,crouch:this.keys.has("ControlLeft")||this.keys.has("KeyC"),fire:this.fireHeld,reload:this.reloadEdge,zoomToggle:this.zoomEdge,melee:this.meleeEdge,use:this.useEdge};return this.jumpEdge=!1,this.zoomEdge=!1,this.reloadEdge=!1,this.meleeEdge=!1,this.useEdge=!1,r}}class nx{pending=[];push(e){this.pending.push(e),this.pending.length>180&&this.pending.shift()}ack(e){for(;this.pending.length&&this.pending[0].seq<=e;)this.pending.shift()}}const ix=on.STANDING_HEIGHT*.5;class rx{predictedPosition=new H(0,4,0);authoritativePosition=new H(0,4,0);velocity=new H;grounded=!1;crouched=!1;coyoteTimer=1/0;correctionDistance=0;apply(e){const t={position:{x:this.predictedPosition.x,y:this.predictedPosition.y,z:this.predictedPosition.z},velocity:{x:this.velocity.x,y:this.velocity.y,z:this.velocity.z},grounded:this.grounded,crouched:this.crouched,coyoteTimer:this.coyoteTimer};ic(t,e,e.dt,{groundHeight:ix}),this.predictedPosition.set(t.position.x,t.position.y,t.position.z),this.velocity.set(t.velocity.x,t.velocity.y,t.velocity.z),this.grounded=t.grounded,this.crouched=t.crouched,this.coyoteTimer=t.coyoteTimer}reconcile(e){this.authoritativePosition.set(e.x,e.y,e.z),this.correctionDistance=this.predictedPosition.distanceTo(this.authoritativePosition),this.correctionDistance>Zv.RECONCILE_EPSILON&&this.predictedPosition.lerp(this.authoritativePosition,.65)}}class sx{mesh;target=new H;constructor(e){const t=new Cn({color:9079434});e==="sphere"?this.mesh=new nt(new Tc(.55,16,16),t):e==="mediumCrate"?this.mesh=new nt(new Ct(1.5,1.5,1.5),t):this.mesh=new nt(new Ct(.9,.9,.9),t)}setTarget(e,t,n){this.target.set(e,t,n)}tick(e){this.mesh.position.lerp(this.target,e)}}class tf{mesh;targetPosition=new H;yaw=0;constructor(e){this.mesh=new nt(new yc(.35,1.2,8,14),new Cn({color:e})),this.mesh.castShadow=!0}setTarget(e,t,n,r){this.targetPosition.set(e,t,n),this.yaw=r}snap(e,t,n,r){this.mesh.position.set(e,t,n),this.mesh.rotation.y=r,this.setTarget(e,t,n,r)}tickInterpolation(e){this.mesh.position.lerp(this.targetPosition,e),this.mesh.rotation.y+=(this.yaw-this.mesh.rotation.y)*e}}const ox=7172949,ax=2829863,cx=1842721,lx=5001797;class nf{group=new pn;wheels=[];turretYawPivot=new pn;turretPitchPivot=new pn;targetPos=new H;targetQuat=new qi;targetTurretYaw=0;targetTurretPitch=0;speed=0;wheelSpin=0;constructor(){const e=new Cn({color:ox,roughness:.7,metalness:.25}),t=new Cn({color:ax,roughness:.8}),n=new Cn({color:lx,roughness:.5,metalness:.5}),r=new Cn({color:cx,roughness:.95}),s=new nt(new Ct(2.1,.7,3.9),e);s.position.y=.15,this.group.add(s);const o=new nt(new Ct(1.9,.45,1.3),e);o.position.set(0,.45,-1.35),o.rotation.x=.14,this.group.add(o);const a=new nt(new Ct(1.9,.5,.25),t);a.position.set(0,.65,-.65),this.group.add(a);const u=new Sn(.05,.05,1.15,8);for(const[v,m]of[[-.85,-.55],[.85,-.55],[-.85,.55],[.85,.55]]){const A=new nt(u,n);A.position.set(v,1.05,m),this.group.add(A)}const l=new nt(new Ct(1.85,.08,1.35),n);l.position.set(0,1.62,0),this.group.add(l);for(const v of[-.55,.55]){const m=new nt(new Ct(.55,.55,.5),t);m.position.set(v,.75,.25),this.group.add(m)}const p=new nt(new Ct(1.95,.35,1.15),t);p.position.set(0,.6,1.35),this.group.add(p);const h=new Sn(.44,.44,.36,14);h.rotateZ(Math.PI/2);for(const[v,m]of[[-1.05,-1.3],[1.05,-1.3],[-1.05,1.3],[1.05,1.3]]){const A=new nt(h,r);A.position.set(v,-.25,m);const C=new nt(new Sn(.18,.18,.38,10).rotateZ(Math.PI/2),n);A.add(C),this.wheels.push(A),this.group.add(A)}this.turretYawPivot.position.set(0,.95,1.35);const d=new nt(new Sn(.16,.22,.5,10),n);d.position.y=.2,this.turretYawPivot.add(d),this.turretPitchPivot.position.set(0,.5,0),this.turretYawPivot.add(this.turretPitchPivot);const g=new nt(new Ct(.34,.3,.8),t);this.turretPitchPivot.add(g);const x=new nt(new Sn(.075,.075,.85,10),n);x.rotation.x=Math.PI/2,x.position.set(0,0,-.75),this.turretPitchPivot.add(x);const E=new nt(new Ct(.75,.45,.06),n);E.position.set(0,.1,-.35),this.turretPitchPivot.add(E),this.group.add(this.turretYawPivot),this.group.traverse(v=>{v.castShadow=!0})}setTarget(e,t,n,r,s){this.targetPos.set(e.x,e.y,e.z),this.targetQuat.set(t.x,t.y,t.z,t.w),this.speed=n,this.targetTurretYaw=r,this.targetTurretPitch=s}snap(){this.group.position.copy(this.targetPos),this.group.quaternion.copy(this.targetQuat)}tick(e,t=.25){this.group.position.lerp(this.targetPos,t),this.group.quaternion.slerp(this.targetQuat,t),this.wheelSpin+=this.speed/.44*e;for(const s of this.wheels)s.rotation.x=this.wheelSpin;const n=new Pn().setFromQuaternion(this.group.quaternion,"YXZ").y,r=this.targetTurretYaw-n+Math.PI;this.turretYawPivot.rotation.y+=hx(r-this.turretYawPivot.rotation.y)*.3,this.turretPitchPivot.rotation.x+=(mr.clamp(-this.targetTurretPitch,-.5,.35)-this.turretPitchPivot.rotation.x)*.3}}function hx(i){return Math.atan2(Math.sin(i),Math.cos(i))}class ux{constructor(e,t,n){this.room=e,this.entityRoot=t,this.localSessionId=n}room;entityRoot;localSessionId;players=new Map;props=new Map;vehicles=new Map;bind(){const e=Lc.getStateCallbacks(this.room),t=this.room.state;e(t).players.onAdd((n,r)=>{const s=r===this.localSessionId?5614165:n.isBot?13391172:5605597,o=new tf(s);o.snap(n.position.x,n.position.y,n.position.z,n.yaw),this.players.set(r,o),r!==this.localSessionId&&this.entityRoot.add(o.mesh),e(n).onChange(()=>{o.setTarget(n.position.x,n.position.y,n.position.z,n.yaw),o.mesh.visible=n.alive!==!1})}),e(t).players.onRemove((n,r)=>{const s=this.players.get(r);s&&(this.entityRoot.remove(s.mesh),this.players.delete(r))}),e(t).props.onAdd((n,r)=>{const s=new sx(n.kind);s.mesh.position.set(n.position.x,n.position.y,n.position.z),s.setTarget(n.position.x,n.position.y,n.position.z),this.props.set(r,s),this.entityRoot.add(s.mesh),e(n).onChange(()=>s.setTarget(n.position.x,n.position.y,n.position.z))}),e(t).props.onRemove((n,r)=>{const s=this.props.get(r);s&&(this.entityRoot.remove(s.mesh),this.props.delete(r))}),e(t).vehicles.onAdd((n,r)=>{const s=new nf,o=()=>s.setTarget(n.position,{x:n.qx,y:n.qy,z:n.qz,w:n.qw},n.speed,n.turretYaw,n.turretPitch);o(),s.snap(),this.vehicles.set(r,s),this.entityRoot.add(s.group),e(n).onChange(o)}),e(t).vehicles.onRemove((n,r)=>{const s=this.vehicles.get(r);s&&(this.entityRoot.remove(s.group),this.vehicles.delete(r))})}tick(e=.2,t=1/60){for(const[n,r]of this.players)n!==this.localSessionId&&r.tickInterpolation(e);for(const n of this.props.values())n.tick(e);for(const n of this.vehicles.values())n.tick(t,e)}}const fx=on.EYE_HEIGHT-on.STANDING_HEIGHT*.5,dx=on.CROUCHED_HEIGHT*.9-on.STANDING_HEIGHT*.5;class px{constructor(e){this.camera=e}camera;horizontalFovDeg=90;update(e,t,n,r,s=1){const o=r?dx:fx;this.camera.position.set(e.x,e.y+o,e.z),this.camera.rotation.set(n,t,0,"YXZ");const a=Math.tan(this.horizontalFovDeg/2*Math.PI/180)/s,u=2*Math.atan(a/this.camera.aspect)*(180/Math.PI);Math.abs(this.camera.fov-u)>.01&&(this.camera.fov=u,this.camera.updateProjectionMatrix())}}class mx{el=document.createElement("pre");constructor(e){this.el.style.position="fixed",this.el.style.left="8px",this.el.style.top="8px",this.el.style.margin="0",this.el.style.padding="10px",this.el.style.background="rgba(0,0,0,0.6)",this.el.style.fontSize="12px",e.appendChild(this.el)}set(e){this.el.textContent=[`ping: ${e.pingMs.toFixed(1)}ms`,`predicted: ${e.predicted}`,`authoritative: ${e.authoritative}`,`correction: ${e.correctionDistance.toFixed(3)}`,`speed: ${e.speed.toFixed(2)} m/s`,`grounded: ${e.grounded}`,`crouched: ${e.crouched}`,`players: ${e.playerCount}`,`tick: ${e.tickRate}`].join(`
`)}}class gx{root=document.createElement("div");shieldFill=document.createElement("div");healthRow=document.createElement("div");ammo=document.createElement("div");reticle=document.createElement("div");hitmarker=document.createElement("div");feed=document.createElement("div");deathOverlay=document.createElement("div");score=document.createElement("div");zoomVignette=document.createElement("div");hitTimer=0;constructor(e){this.root.style.cssText="position:fixed;inset:0;pointer-events:none;font-family:monospace;color:#dfe9f5;user-select:none",e.appendChild(this.root);const t=document.createElement("div");t.style.cssText="position:absolute;top:14px;left:50%;transform:translateX(-50%);width:280px;height:12px;border:1px solid #4d6a8a;background:#101820cc;border-radius:3px;overflow:hidden",this.shieldFill.style.cssText="height:100%;width:100%;background:repeating-linear-gradient(90deg,#57b3ff 0 26px,#3d86c9 26px 28px);transition:width 80ms linear",t.appendChild(this.shieldFill),this.root.appendChild(t),this.healthRow.style.cssText="position:absolute;top:30px;left:50%;transform:translateX(-50%);display:flex;gap:3px",this.root.appendChild(this.healthRow),this.ammo.style.cssText="position:absolute;right:24px;bottom:20px;font-size:22px;text-align:right;text-shadow:0 0 4px #000",this.root.appendChild(this.ammo),this.reticle.style.cssText="position:absolute;left:50%;top:50%;width:26px;height:26px;transform:translate(-50%,-50%);border:2px solid #cfe6ffb0;border-radius:50%",this.root.appendChild(this.reticle),this.hitmarker.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:26px;font-weight:bold;opacity:0;text-shadow:0 0 4px #000",this.hitmarker.textContent="✕",this.root.appendChild(this.hitmarker),this.feed.style.cssText="position:absolute;top:14px;right:20px;font-size:13px;text-align:right;text-shadow:0 0 3px #000",this.root.appendChild(this.feed),this.score.style.cssText="position:absolute;left:20px;bottom:20px;font-size:14px;text-shadow:0 0 3px #000",this.root.appendChild(this.score),this.zoomVignette.style.cssText="position:absolute;inset:0;display:none;box-shadow:inset 0 0 180px 90px #000;";const n=document.createElement("div");n.textContent="2×",n.style.cssText="position:absolute;left:50%;top:58%;transform:translateX(-50%);font-size:16px",this.zoomVignette.appendChild(n),this.root.appendChild(this.zoomVignette),this.deathOverlay.style.cssText="position:absolute;inset:0;display:none;align-items:center;justify-content:center;background:#200a0acc;font-size:28px;letter-spacing:2px",this.root.appendChild(this.deathOverlay)}setVitals(e,t){this.shieldFill.style.width=`${Math.max(0,Math.min(100,e))}%`,this.shieldFill.style.background=e<=0?"#38221f":"repeating-linear-gradient(90deg,#57b3ff 0 26px,#3d86c9 26px 28px)";const n=Math.max(0,Math.ceil(t/45*9));this.healthRow.childElementCount!==9&&this.healthRow.replaceChildren(...Array.from({length:9},()=>{const r=document.createElement("div");return r.style.cssText="width:26px;height:4px;border-radius:2px",r})),Array.from(this.healthRow.children).forEach((r,s)=>{r.style.background=s<n?e<=0?"#ff5f4d":"#9fd08a":"#332222"})}setAmmo(e,t,n){this.ammo.innerHTML=n?'<span style="color:#ffb64d">RELOADING…</span>':`${e} <span style="opacity:.6;font-size:15px">/ ${t}</span>`}setZoom(e){this.zoomVignette.style.display=e?"block":"none",this.reticle.style.width=e?"54px":"26px",this.reticle.style.height=e?"54px":"26px"}setScore(e,t){this.score.textContent=`K ${e}  /  D ${t}`}prompt=document.createElement("div");promptAttached=!1;setPrompt(e){this.promptAttached||(this.prompt.style.cssText="position:absolute;left:50%;top:58%;transform:translateX(-50%);font-size:15px;padding:4px 10px;background:#101820cc;border:1px solid #4d6a8a;border-radius:4px",this.root.appendChild(this.prompt),this.promptAttached=!0),this.prompt.style.display=e?"block":"none",e&&(this.prompt.textContent=e)}setTurretHeat(e,t){const n=Math.round(e*100);this.ammo.innerHTML=t?'<span style="color:#ff5f4d">OVERHEATED</span>':`HEAT <span style="color:${n>70?"#ffb64d":"#8fd0ff"}">${n}%</span>`}setDead(e){e>0?(this.deathOverlay.style.display="flex",this.deathOverlay.textContent=`RESPAWN IN ${Math.ceil(e)}`):this.deathOverlay.style.display="none"}flashHit(e){const t={shield:"#8fd0ff",flesh:"#ffd27a",headshot:"#ff9d5c",kill:"#ff4d4d"};this.hitmarker.style.color=t[e],this.hitmarker.textContent=e==="kill"?"☠":"✕",this.hitTimer=e==="kill"?.6:.25}addFeedLine(e){const t=document.createElement("div");for(t.textContent=e,this.feed.prepend(t);this.feed.childElementCount>5;)this.feed.lastElementChild?.remove();setTimeout(()=>t.remove(),6e3)}tick(e){this.hitTimer>0?(this.hitTimer-=e,this.hitmarker.style.opacity=String(Math.max(0,Math.min(1,this.hitTimer*5)))):this.hitmarker.style.opacity="0"}}class _x{constructor(e){this.root=e}root;tracers=[];material=new xc({color:16771496,transparent:!0,opacity:.9});spawn(e,t){const n=new fn().setFromPoints([new H(e.x,e.y,e.z),new H(t.x,t.y,t.z)]),r=new jh(n,this.material.clone());this.root.add(r),this.tracers.push({line:r,ttl:.08})}tick(e){for(let t=this.tracers.length-1;t>=0;t--){const n=this.tracers[t];n.ttl-=e,n.line.material.opacity=Math.max(0,n.ttl/.08),n.ttl<=0&&(this.root.remove(n.line),n.line.geometry.dispose(),n.line.material.dispose(),this.tracers.splice(t,1))}}}const vx=3027768,xx=1909030,yx=4871528;class Ex{group=new pn;flash;basePos=new H(.3,-.26,-.55);bobClock=0;kick=0;flashTtl=0;constructor(e){const t=new Cn({color:vx,roughness:.55,metalness:.6}),n=new Cn({color:xx,roughness:.7,metalness:.4}),r=new Cn({color:yx,roughness:.5,metalness:.5}),s=new nt(new Ct(.075,.1,.44),t);this.group.add(s);const o=new nt(new Ct(.065,.075,.24),n);o.position.set(0,-.005,-.32),this.group.add(o);const a=new nt(new Sn(.016,.016,.24,10),n);a.rotation.x=Math.PI/2,a.position.set(0,.012,-.5),this.group.add(a);const u=new nt(new Ct(.03,.03,.3),n);u.position.set(0,.075,-.02),this.group.add(u);const l=new nt(new Sn(.026,.026,.16,12),t);l.rotation.x=Math.PI/2,l.position.set(0,.115,-.02),this.group.add(l);const p=new nt(new Sn(.02,.02,.005,12),new Cn({color:6740479,emissive:1855588,roughness:.2}));p.rotation.x=Math.PI/2,p.position.set(0,.115,.062),this.group.add(p);const h=new nt(new Ct(.05,.16,.075),r);h.position.set(0,-.12,-.06),h.rotation.x=.22,this.group.add(h);const d=new nt(new Ct(.045,.12,.06),n);d.position.set(0,-.1,.14),d.rotation.x=-.35,this.group.add(d);const g=new nt(new Ct(.06,.085,.16),t);g.position.set(0,-.01,.26),this.group.add(g),this.flash=new nt(new Mc(.055,0),new gc({color:16767370,transparent:!0,opacity:.95})),this.flash.scale.set(1,1,1.9),this.flash.position.set(0,.012,-.64),this.flash.visible=!1,this.group.add(this.flash),this.group.position.copy(this.basePos),e.add(this.group)}update(e,t){this.group.visible=!t.zoomed;const n=t.grounded?Math.min(1,t.speed/5.4):0;this.bobClock+=e*(4+t.speed*1.1);const r=Math.sin(this.bobClock)*.008*n,s=-Math.abs(Math.cos(this.bobClock))*.01*n;this.kick=Math.max(0,this.kick-e*9);const o=this.kick*.06,a=this.kick*.09,u=t.reloading?.16:0;this.group.position.set(this.basePos.x+r,this.basePos.y+s-u,this.basePos.z+o),this.group.rotation.set(a+(t.reloading?.5:0),0,t.reloading?.25:0),this.flashTtl>0&&(this.flashTtl-=e,this.flash.visible=this.flashTtl>0,this.flash.rotation.z+=e*40)}onShot(){this.kick=1,this.flashTtl=.045,this.flash.visible=!0}}const Th=[{type:"block_box",label:"Box"},{type:"block_ramp",label:"Ramp"},{type:"block_wall",label:"Wall"},{type:"block_platform",label:"Platform"},{type:"spawn_point",label:"Spawn point"},{type:"weapon_spawn",label:"Weapon spawn"},{type:"vehicle_spawn",label:"Vehicle spawn"},{type:"objective",label:"Objective"}],Sx=9,Mx=20;class Tx{constructor(e,t,n){this.scene=e,this.dom=t,this.scene.add(this.root),window.addEventListener("keydown",r=>{this.keys.add(r.code),this.active&&this.handleKey(r.code)}),window.addEventListener("keyup",r=>this.keys.delete(r.code)),t.addEventListener("mousedown",r=>{!this.active||document.pointerLockElement!==t||(r.button===0&&this.spawnAtReticle(),r.button===2&&this.toggleGrab())}),window.addEventListener("wheel",r=>{!this.active||this.heldId===null||(this.heldDistance=Math.min(24,Math.max(1.5,this.heldDistance-Math.sign(r.deltaY))))}),this.panel.style.cssText="position:fixed;left:50%;bottom:14px;transform:translateX(-50%);padding:8px 14px;display:none;background:#101820d9;border:1px solid #4d6a8a;border-radius:4px;font-family:monospace;font-size:12px;color:#cfe6ff;pointer-events:none;text-align:center;line-height:1.6",n.appendChild(this.panel)}scene;dom;active=!1;cameraPosition=new H(0,6,8);map=Hv("untitled");meshes=new Map;root=new pn;raycaster=new Qh;selectedPalette=0;heldId=null;heldDistance=6;snapIndex=1;nextId=1;idPrefix=`f${Math.random().toString(36).slice(2,7)}`;keys=new Set;panel=document.createElement("div");falling=new Map;toggle(){this.active=!this.active,this.panel.style.display=this.active?"block":"none",this.active&&this.refreshPanel(),!this.active&&this.heldId&&(this.heldId=null)}update(e,t,n,r){if(!this.active)return;const s=this.keys.has("ShiftLeft")?Mx:Sx,o=new H(-Math.sin(n)*Math.cos(r),Math.sin(r),-Math.cos(n)*Math.cos(r)),a=new H(Math.cos(n),0,-Math.sin(n)),u=new H;if(this.keys.has("KeyW")&&u.add(o),this.keys.has("KeyS")&&u.sub(o),this.keys.has("KeyD")&&u.add(a),this.keys.has("KeyA")&&u.sub(a),this.keys.has("Space")&&(u.y+=1),this.keys.has("ControlLeft")&&(u.y-=1),u.lengthSq()>0&&u.normalize().multiplyScalar(s*e),this.cameraPosition.add(u),t.position.copy(this.cameraPosition),t.rotation.set(r,n,0,"YXZ"),this.heldId){const l=this.map.objects.find(h=>h.id===this.heldId),p=this.meshes.get(this.heldId??"");if(l&&p){const h=this.cameraPosition.clone().add(o.clone().multiplyScalar(this.heldDistance));l.position={x:h.x,y:h.y,z:h.z},p.position.copy(h)}}for(const[l,p]of this.falling){const h=this.map.objects.find(v=>v.id===l),d=this.meshes.get(l);if(!h||!d||l===this.heldId)continue;const g=p+9.8*e;let x=h.position.y-g*e;const E=h.scale.y/2;x<=E?(x=E,this.falling.delete(l)):this.falling.set(l,g),h.position={...h.position,y:x},d.position.y=x}}handleKey(e){const t=/^Digit([1-8])$/.exec(e);if(t){this.selectedPalette=Number(t[1])-1,this.refreshPanel();return}switch(e){case"KeyQ":this.rotateHeld(-1);break;case"KeyZ":this.rotateHeld(1);break;case"KeyX":this.snapIndex=(this.snapIndex+1)%Ti.ROTATION_SNAPS_DEG.length,this.refreshPanel();break;case"KeyT":this.togglePhysicsMode();break;case"KeyC":this.duplicateHeld();break;case"Delete":case"Backspace":this.deleteTargeted();break;case"KeyK":this.download();break;case"KeyL":this.upload();break}}spawnAtReticle(){const e=this.currentCamera();if(!e)return;this.raycaster.setFromCamera(new lt(0,0),e);const n=this.raycaster.intersectObjects(this.scene.children,!0).find(u=>u.distance>.5&&u.distance<60),r=n?n.point:e.position.clone().add(e.getWorldDirection(new H).multiplyScalar(8)),s=Th[this.selectedPalette],o=wx(s.type),a={id:`${this.idPrefix}-${this.nextId++}`,type:s.type,position:{x:r.x,y:r.y+o.y/2,z:r.z},rotation:{x:0,y:0,z:0},scale:o,physics:s.type.startsWith("block_")?"fixed":"normal",props:s.type==="vehicle_spawn"?{vehicle:"warthog"}:s.type==="weapon_spawn"?{weapon:"battle_rifle"}:s.type==="spawn_point"?{team:"neutral"}:{}};if(!ef(this.map,a)){this.flash(`Budget cap reached (${this.map.settings.objectBudget})`);return}this.addMesh(a),this.refreshPanel()}toggleGrab(){if(this.heldId){const t=this.map.objects.find(n=>n.id===this.heldId);t?.physics==="normal"&&this.falling.set(t.id,0),this.heldId=null,this.refreshPanel();return}const e=this.objectUnderReticle();if(e){this.heldId=e.id;const t=this.currentCamera();t&&(this.heldDistance=t.position.distanceTo(new H(e.position.x,e.position.y,e.position.z))),this.falling.delete(e.id),this.refreshPanel()}}rotateHeld(e){const t=this.heldOrTargeted();if(!t)return;const n=Ti.ROTATION_SNAPS_DEG[this.snapIndex],r=n*Math.PI/180,s=Wv(t.rotation.y+e*r,n);t.rotation={...t.rotation,y:s},this.meshes.get(t.id)?.rotation.set(t.rotation.x,s,t.rotation.z)}togglePhysicsMode(){const e=this.heldOrTargeted();e&&(e.physics=e.physics==="fixed"?"normal":"fixed",this.applyPhysicsLook(e),this.refreshPanel())}duplicateHeld(){const e=this.heldOrTargeted();if(!e)return;const t=Gv(this.map,e.id,`${this.idPrefix}-${this.nextId++}`);if(!t){this.flash(`Budget cap reached (${this.map.settings.objectBudget})`);return}t.position={...t.position,x:t.position.x+1,z:t.position.z+1},this.addMesh(t),this.refreshPanel()}deleteTargeted(){const e=this.heldOrTargeted();if(!e)return;this.heldId===e.id&&(this.heldId=null),Vv(this.map,e.id);const t=this.meshes.get(e.id);t&&this.root.remove(t),this.meshes.delete(e.id),this.falling.delete(e.id),this.refreshPanel()}download(){const e=$v(this.map),t=new Blob([e],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`${this.map.name}.forge.json`,n.click(),URL.revokeObjectURL(n.href),this.flash("Map saved")}upload(){const e=document.createElement("input");e.type="file",e.accept=".json,application/json",e.onchange=async()=>{const t=e.files?.[0];if(t)try{this.loadMap(Xv(await t.text())),this.flash(`Loaded ${this.map.objects.length} objects`)}catch(n){this.flash(`Load failed: ${n.message}`)}},e.click()}loadMap(e){for(const t of this.meshes.values())this.root.remove(t);this.meshes.clear(),this.falling.clear(),this.heldId=null,this.map=e;for(const t of e.objects)this.addMesh(t);this.refreshPanel()}addMesh(e){const t=bx(e);t.position.set(e.position.x,e.position.y,e.position.z),t.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),this.root.add(t),this.meshes.set(e.id,t),this.applyPhysicsLook(e)}applyPhysicsLook(e){const t=this.meshes.get(e.id);t&&t.traverse(n=>{const r=n.material;r?.isMeshStandardMaterial&&(r.transparent=e.physics==="normal",r.opacity=e.physics==="normal"?.75:1)})}heldOrTargeted(){return this.heldId?this.map.objects.find(e=>e.id===this.heldId):this.objectUnderReticle()}objectUnderReticle(){const e=this.currentCamera();if(!e)return;this.raycaster.setFromCamera(new lt(0,0),e);const t=this.raycaster.intersectObjects(this.root.children,!0);for(const n of t){let r=n.object;for(;r&&r.parent!==this.root;)r=r.parent;if(r){for(const[s,o]of this.meshes)if(o===r)return this.map.objects.find(a=>a.id===s)}}}boundCamera=null;bindCamera(e){this.boundCamera=e}currentCamera(){return this.boundCamera}flash(e){this.refreshPanel(e)}refreshPanel(e){const t=Th[this.selectedPalette],n=Ti.ROTATION_SNAPS_DEG[this.snapIndex];this.panel.innerHTML=`<b>FORGE</b> — ${this.map.objects.length}/${this.map.settings.objectBudget} objects${e?` — <span style="color:#ffb64d">${e}</span>`:""}<br>[1-8] palette: <b>${t.label}</b> · LMB spawn · RMB grab/place · wheel push/pull · Q/Z rotate (snap ${n}°, X cycles) · T physics · C duplicate · Del delete · K save · L load · B exit`}}function wx(i){switch(i){case"block_box":return{x:2,y:1,z:2};case"block_ramp":return{x:2,y:1,z:3};case"block_wall":return{x:4,y:3,z:.3};case"block_platform":return{x:4,y:.3,z:4};case"vehicle_spawn":return{x:3,y:1.2,z:1.6};default:return{x:.6,y:.6,z:.6}}}function bx(i){const e=i.scale,t={block_box:9081760,block_ramp:8358816,block_wall:10068915,block_platform:7766159,spawn_point:6609275,weapon_spawn:5884128,vehicle_spawn:14722649,objective:15128410},n=new Cn({color:t[i.type]});if(i.type==="block_ramp"){const r=new fn,s=e.x/2,o=e.y,a=e.z/2,u=new Float32Array([-s,0,-a,s,0,-a,s,0,a,-s,0,-a,s,0,a,-s,0,a,-s,0,-a,-s,o,a,s,o,a,-s,0,-a,s,o,a,s,0,-a,-s,0,a,s,0,a,s,o,a,-s,0,a,s,o,a,-s,o,a,-s,0,-a,-s,0,a,-s,o,a,s,0,-a,s,o,a,s,0,a]);r.setAttribute("position",new kn(u,3)),r.computeVertexNormals();const l=new nt(r,n);l.position.y-=e.y/2;const p=new pn;return p.add(l),p}if(i.type==="spawn_point"){const r=new pn,s=new nt(new Sn(.5,.5,.08,20),n),o=new nt(new Ec(.18,.5,12),n.clone());return o.position.set(0,.35,-.25),o.rotation.x=-Math.PI/2,r.add(s,o),r}if(i.type==="objective"){const r=new pn,s=new nt(new Sn(.05,.05,1.6,8),n);s.position.y=.3;const o=new nt(new is(.7,.4),n.clone());return o.position.set(.35,.85,0),o.material.side=$n,r.add(s,o),r}return new nt(new Ct(e.x,e.y,e.z),n)}const vi=on.STANDING_HEIGHT*.5,Gr=on.EYE_HEIGHT-vi,wh=5,Ax=["Bot Alpha","Bot Bravo"],Rx=new H(0,-1,0);class Cx{constructor(e,t,n,r,s){this.entityRoot=e,this.mapRoot=t,this.tracers=n,this.hud=r,this.viewModel=s,this.vitals.onShieldBreak=()=>this.rifle.onDamaged(),Ax.forEach((o,a)=>{const u=Bi[(a*2+2)%Bi.length],l={name:o,move:yh({...u}),vitals:new Eh,rifle:new Vs,entity:new tf(a===0?13391172:13404228),respawnTimer:0,waypoint:null,repathTimer:0,strafeDir:1,strafeTimer:0,trigger:1+a,clock:a*1.7};e.add(l.entity.mesh),this.bots.push(l)}),this.hog.pos.set(ca.x,ca.y,ca.z),e.add(this.hogEntity.group),r.addFeedLine("Offline mode — bots active")}entityRoot;mapRoot;tracers;hud;viewModel;position=new H(0,4,0);crouched=!1;kills=0;deaths=0;seatWorld=null;player=yh({...Bi[0]});vitals=new Eh;rifle=new Vs;respawnTimer=0;spawnIndex=1;bots=[];raycaster=new Qh;hog={pos:new H,yaw:Math.PI/2,speed:0};hogEntity=new nf;driving=!1;accumulator=0;jumpQueued=!1;lastYaw=0;lastPitch=0;get zoomed(){return this.rifle.zoomed}get alive(){return this.vitals.alive}update(e,t){for(this.lastYaw=e.yaw,this.lastPitch=e.pitch,this.vitals.alive&&(e.jump&&(this.jumpQueued=!0),e.use&&this.toggleVehicle(),this.driving||(e.zoomToggle&&this.rifle.toggleZoom(),e.reload&&this.rifle.startReload(),e.fire&&(this.rifle.mag===0?this.rifle.startReload():this.rifle.pullTrigger()),e.melee&&this.tryMelee())),this.accumulator=Math.min(this.accumulator+t,.25);this.accumulator>=Ht.DT;)this.accumulator-=Ht.DT,this.stepFixed(e);this.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.crouched=this.player.crouched,this.seatWorld=this.driving?this.hog.pos.clone().add(new H(0,1.45,0)):null;const n=new qi().setFromEuler(new Pn(0,this.hog.yaw,0));this.hogEntity.setTarget(this.hog.pos,n,Math.abs(this.hog.speed),this.lastYaw,this.lastPitch),this.hogEntity.tick(t,.5);for(const r of this.bots)r.entity.mesh.visible=r.vitals.alive,r.entity.mesh.position.set(r.move.position.x,r.move.position.y,r.move.position.z);if(this.viewModel.update(t,{speed:Math.hypot(this.player.velocity.x,this.player.velocity.z),grounded:this.player.grounded,reloading:this.rifle.reloading,zoomed:this.rifle.zoomed||this.driving}),this.hud.setVitals(this.vitals.shield,this.vitals.health),this.hud.setAmmo(this.rifle.mag,this.rifle.reserve,this.rifle.reloading),this.hud.setZoom(this.rifle.zoomed&&!this.driving),this.hud.setScore(this.kills,this.deaths),this.hud.setDead(this.vitals.alive?0:this.respawnTimer),this.vitals.alive&&!this.driving){const r=this.hog.pos.distanceTo(this.position)<3.5;this.hud.setPrompt(r?"E — drive Warthog":null)}else this.hud.setPrompt(null)}stepFixed(e){this.vitals.alive?this.driving?this.stepHog(e):this.stepOnFoot(e):(this.respawnTimer-=Ht.DT,this.respawnTimer<=0&&this.respawnPlayer()),this.vitals.tick(Ht.DT);for(const t of this.rifle.update(Ht.DT))this.vitals.alive&&!this.driving&&this.firePlayerRound(t.spreadDeg);for(const t of this.bots)this.stepBot(t)}stepOnFoot(e){const t=this.surfaceUnder(this.player.position.x,this.player.position.y,this.player.position.z);this.blockWalls(this.player),ic(this.player,{...e,jump:this.jumpQueued},Ht.DT,{groundHeight:t+vi}),this.jumpQueued=!1}stepHog(e){const t=this.hog,n=mr.clamp(e.moveZ,-1,1);n>0?t.speed=Math.min(Xr.TOP_SPEED,t.speed+9*Ht.DT):n<0?t.speed=Math.max(-6,t.speed-9*Ht.DT):t.speed=mr.damp(t.speed,0,1.6,Ht.DT);const r=mr.clamp(Math.abs(t.speed)/6,0,1);t.yaw+=-e.moveX*1.7*r*Math.sign(t.speed||1)*Ht.DT;const s=new H(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),o=s.clone().multiplyScalar(t.speed*Ht.DT);if(Math.abs(t.speed)>.5){const u=s.clone().multiplyScalar(Math.sign(t.speed));this.raycaster.set(t.pos.clone().add(new H(0,.6,0)),u),this.raycaster.far=2.4+Math.abs(t.speed)*Ht.DT,this.raycaster.intersectObjects(this.mapRoot.children,!0).length>0&&(t.speed=0,o.set(0,0,0))}t.pos.add(o);const a=30;if(t.pos.x=mr.clamp(t.pos.x,-a,a),t.pos.z=mr.clamp(t.pos.z,-a,a),t.pos.y=this.surfaceUnder(t.pos.x,t.pos.y+1,t.pos.z)+.55,this.player.position.x=t.pos.x,this.player.position.y=t.pos.y+.9,this.player.position.z=t.pos.z,this.player.velocity.x=0,this.player.velocity.z=0,Math.abs(t.speed)>=2.5)for(const u of this.bots){if(!u.vitals.alive)continue;const l=u.move.position.x-t.pos.x,p=u.move.position.z-t.pos.z;if(Math.hypot(l,p)>2.4)continue;const h=zv(Math.abs(t.speed)),d=u.vitals.applyDamage({amount:h.splatter?1e5:h.damage});this.hud.flashHit(d.died?"kill":"flesh"),d.died&&this.onBotKilled(u,h.splatter?"splattered":"killed")}}toggleVehicle(){if(this.driving){this.driving=!1;const e=new H(Math.cos(this.hog.yaw),0,-Math.sin(this.hog.yaw)),t=this.hog.pos.clone().addScaledVector(e,-2.4);this.player.position.x=t.x,this.player.position.y=this.surfaceUnder(t.x,t.y+2,t.z)+vi,this.player.position.z=t.z,this.player.velocity.x=0,this.player.velocity.y=0,this.player.velocity.z=0;return}this.hog.pos.distanceTo(this.position)<3.5&&(this.driving=!0,this.hog.speed=0)}firePlayerRound(e){const t=new H(this.player.position.x,this.player.position.y+Gr,this.player.position.z),n=Bv(this.lastYaw,this.lastPitch),r=bh(new H(n.x,n.y,n.z),e);this.viewModel.onShot(),this.raycaster.set(t,r),this.raycaster.far=250;const s=this.raycaster.intersectObjects(this.mapRoot.children,!0)[0],o=s?s.distance:250;let a=null,u=o,l=0;for(const x of this.bots){if(!x.vitals.alive)continue;const E=new H(x.move.position.x,x.move.position.y,x.move.position.z),m=E.clone().sub(t).dot(r);if(m<0||m>u)continue;const A=t.clone().addScaledVector(r,m),C=A.y-E.y;Math.hypot(A.x-E.x,A.z-E.z)<on.RADIUS&&Math.abs(C)<vi+.05&&(a=x,u=m,l=A.y)}const p=t.clone().addScaledVector(r,u);if(this.tracers.spawn(t,p),!a)return;const h=a.move.position.y-vi,d=l-h>=on.STANDING_HEIGHT*on.HEAD_FRACTION,g=a.vitals.applyDamage({amount:Sh(u),headshot:d});this.hud.flashHit(g.died?"kill":d&&g.healthDamage>0?"headshot":g.healthDamage>0?"flesh":"shield"),g.died&&this.onBotKilled(a,g.headshotKill?"⌖":"✕")}tryMelee(){for(const e of this.bots){if(!e.vitals.alive)continue;const t=e.move.position.x-this.player.position.x,n=e.move.position.z-this.player.position.z;if(Math.hypot(t,n)>2)continue;const r=e.vitals.meleeFront();this.hud.flashHit(r.died?"kill":"flesh"),r.died&&this.onBotKilled(e,"✕");return}}onBotKilled(e,t){this.kills++,e.respawnTimer=wh,this.hud.addFeedLine(`You ${t} ${e.name}`)}respawnPlayer(){const e=Bi[this.spawnIndex++%Bi.length];this.player.position.x=e.x,this.player.position.y=e.y,this.player.position.z=e.z,this.player.velocity.x=0,this.player.velocity.y=0,this.player.velocity.z=0,this.vitals.respawn(),this.rifle=new Vs}stepBot(e){if(e.clock+=Ht.DT,!e.vitals.alive){if(e.respawnTimer-=Ht.DT,e.respawnTimer<=0){const p=Bi[Math.floor(Math.random()*Bi.length)];e.move.position.x=p.x,e.move.position.y=p.y,e.move.position.z=p.z,e.vitals.respawn(),e.rifle=new Vs}return}e.vitals.tick(Ht.DT),e.repathTimer-=Ht.DT,e.strafeTimer-=Ht.DT,e.trigger-=Ht.DT;const t=this.player.position,n=e.move.position,r=t.x-n.x,s=t.z-n.z,o=Math.hypot(r,s),a=this.vitals.alive&&!this.driving?o<40&&this.lineOfSight(e):!1,u={moveX:0,moveZ:0,yaw:0,jump:!1,crouch:!1};if(a)u.yaw=Math.atan2(-r,-s),e.strafeTimer<=0&&(e.strafeDir=Math.random()>.5?1:-1,e.strafeTimer=.7+Math.random()*1.1),u.moveX=e.strafeDir,o>24?u.moveZ=1:o<8&&(u.moveZ=-.7),e.trigger<=0&&e.rifle.mag>0&&(e.rifle.pullTrigger(),e.trigger=.5+Math.random()*.5),e.rifle.mag===0&&e.rifle.startReload();else{const p=e.waypoint&&Math.hypot(e.waypoint.x-n.x,e.waypoint.z-n.z)<2;(!e.waypoint||p||e.repathTimer<=0)&&(e.waypoint=Mh[Math.floor(Math.random()*Mh.length)],e.repathTimer=6+Math.random()*4),u.yaw=Math.atan2(-(e.waypoint.x-n.x),-(e.waypoint.z-n.z)),u.moveZ=1,e.rifle.mag<36&&!e.rifle.reloading&&e.rifle.startReload()}const l=this.surfaceUnder(n.x,n.y,n.z);this.blockWalls(e.move),ic(e.move,u,Ht.DT,{groundHeight:l+vi});for(const p of e.rifle.update(Ht.DT))a&&this.fireBotRound(e,p.spreadDeg)}fireBotRound(e,t){const n=new H(e.move.position.x,e.move.position.y+Gr,e.move.position.z),r=this.player.position.y+(this.vitals.shield<=0?Gr:0),s=new H(this.player.position.x,r,this.player.position.z),o=bh(s.clone().sub(n).normalize(),t+2.6);this.raycaster.set(n,o),this.raycaster.far=250;const a=this.raycaster.intersectObjects(this.mapRoot.children,!0)[0],u=a?a.distance:250,p=s.clone().sub(n).dot(o);let h=n.clone().addScaledVector(o,u);if(p>0&&p<u&&this.vitals.alive){const d=n.clone().addScaledVector(o,p),g=new H(this.player.position.x,this.player.position.y,this.player.position.z),x=Math.hypot(d.x-g.x,d.z-g.z),E=d.y-g.y;if(x<on.RADIUS&&Math.abs(E)<vi+.05){h=d;const v=g.y-vi,m=d.y-v>=on.STANDING_HEIGHT*on.HEAD_FRACTION,A=this.vitals.applyDamage({amount:Sh(p),headshot:m});this.rifle.onDamaged(),A.died&&(this.deaths++,this.respawnTimer=wh,this.hud.addFeedLine(`${e.name} ${A.headshotKill?"⌖":"✕"} You`))}}this.tracers.spawn(n,h)}lineOfSight(e){const t=new H(e.move.position.x,e.move.position.y+Gr,e.move.position.z),r=new H(this.player.position.x,this.player.position.y+Gr,this.player.position.z).clone().sub(t),s=r.length();return s<.001?!0:(r.divideScalar(s),this.raycaster.set(t,r),this.raycaster.far=s,this.raycaster.intersectObjects(this.mapRoot.children,!0).length===0)}surfaceUnder(e,t,n){this.raycaster.set(new H(e,t+.3,n),Rx),this.raycaster.far=80;const r=this.raycaster.intersectObjects(this.mapRoot.children,!0)[0];return r?r.point.y:0}blockWalls(e){const t=e.velocity.x,n=e.velocity.z,r=Math.hypot(t,n);if(r<.1)return;const s=new H(t/r,0,n/r);for(const o of[-.6,.4]){this.raycaster.set(new H(e.position.x,e.position.y+o,e.position.z),s),this.raycaster.far=on.RADIUS+r*Ht.DT+.05;const a=this.raycaster.intersectObjects(this.mapRoot.children,!0)[0];if(a&&a.face){const u=a.face.normal.clone().transformDirection(a.object.matrixWorld);if(u.y=0,u.lengthSq()<1e-6)continue;u.normalize();const l=e.velocity.x*u.x+e.velocity.z*u.z;l<0&&(e.velocity.x-=u.x*l,e.velocity.z-=u.z*l);return}}}}function bh(i,e){if(e<=0)return i;const n=e*Math.PI/180*Math.sqrt(Math.random()),r=Math.random()*Math.PI*2,s=Math.abs(i.y)>.99?new H(1,0,0):new H(0,1,0),o=new H().crossVectors(i,s).normalize(),a=new H().crossVectors(o,i);return i.clone().multiplyScalar(Math.cos(n)).addScaledVector(o,Math.sin(n)*Math.cos(r)).addScaledVector(a,Math.sin(n)*Math.sin(r)).normalize()}function Px(){const i=new URLSearchParams(location.search);if(i.get("offline")==="1")return null;const e=i.get("server");return e||(location.hostname.endsWith("github.io")?null:"ws://localhost:2567")}async function Ix(i,e){return Promise.race([i.connect(),new Promise((t,n)=>setTimeout(()=>n(new Error("connect timeout")),e))])}function Dx(i,e,t){const{app:n,scene:r,collector:s,camera:o,hud:a,tracers:u,forge:l}=i,p=new ux(t,r.entityRoot,t.sessionId);p.bind();const h=new nx,d=new rx,g=new mx(n);let x=null;const E=Lc.getStateCallbacks(t);E(t.state).players.onAdd((S,L)=>{L===t.sessionId&&(x=S,E(S).onChange(()=>{d.reconcile(S.position),h.ack(S.ackSeq),d.grounded=S.grounded,d.crouched=S.crouched,d.velocity.set(S.velocity.x,S.velocity.y,S.velocity.z);for(const D of h.pending)d.apply(D)}))});const v=S=>S.startsWith("bot-")?`Bot ${S.slice(4)[0].toUpperCase()}${S.slice(5)}`:S===t.sessionId?"You":S.slice(0,6);t.onMessage(xr.HIT_CONFIRM,S=>a.flashHit(S.kind)),t.onMessage(xr.KILL_FEED,S=>{a.addFeedLine(`${v(S.killer)} ${S.headshot?"⌖":"✕"} ${v(S.victim)}`)}),t.onMessage(xr.SHOT_FIRED,S=>{u.spawn(S.origin,S.end),S.shooter===t.sessionId&&i.viewModel.onShot()});let m=performance.now(),A=0;const C=S=>{const L=Math.min(.05,(S-m)/1e3);m=S;const D=s.collect(L),U=x?.seat??"",z=p.vehicles.get("hog-1"),b=t.state.vehicles?.get?.("hog-1");if(l.active)e.sendInput({...D,moveX:0,moveZ:0,jump:!1,fire:!1,reload:!1,zoomToggle:!1,melee:!1,use:!1}),l.update(L,r.camera,D.yaw,D.pitch);else if(U&&z){e.sendInput(D);const w={driver:[-.55,1.45,.25],passenger:[.55,1.45,.25],gunner:[0,2.1,1.35]},[F,Z,P]=w[U]??[0,1.5,0],G=z.group.localToWorld(new H(F,Z,P));r.camera.position.copy(G),r.camera.rotation.set(D.pitch,D.yaw,0,"YXZ")}else{e.sendInput(D),h.push(D),d.apply(D);const w=x?.zoomed===!0;o.update(d.predictedPosition,D.yaw,D.pitch,d.crouched,w?Jt.ZOOM_FACTOR:1)}if(p.tick(.25,L),u.tick(L),a.tick(L),i.viewModel.update(L,{speed:Math.hypot(d.velocity.x,d.velocity.z),grounded:d.grounded,reloading:x?.reloading===!0,zoomed:x?.zoomed===!0||l.active||U==="driver"||U==="gunner"}),x)if(a.setVitals(x.shield,x.health),U==="gunner"&&b?a.setTurretHeat(b.heat,b.overheated):a.setAmmo(x.mag,x.reserve,x.reloading),a.setZoom(x.zoomed&&!l.active&&!U),a.setScore(x.kills,x.deaths),a.setDead(x.alive?0:x.respawnIn),!U&&x.alive&&b&&!l.active){const w=b.position.x-d.predictedPosition.x,F=b.position.y-d.predictedPosition.y,Z=b.position.z-d.predictedPosition.z,P=Math.hypot(w,F,Z)<3.8;a.setPrompt(P?"E — board Warthog":null)}else U&&a.setPrompt(null);A+=L,A>1&&(e.sendPing(),A=0),g.set({pingMs:e.pingMs,predicted:d.predictedPosition.toArray().map(w=>w.toFixed(2)).join(", "),authoritative:d.authoritativePosition.toArray().map(w=>w.toFixed(2)).join(", "),correctionDistance:d.correctionDistance,speed:Math.hypot(d.velocity.x,d.velocity.z),grounded:d.grounded,crouched:d.crouched,playerCount:t.state.playerCount,tickRate:t.state.room.simRate}),r.render(),requestAnimationFrame(C)};requestAnimationFrame(C)}function Lx(i){const{scene:e,collector:t,camera:n,hud:r,tracers:s,forge:o,viewModel:a}=i,u=new Cx(e.entityRoot,e.mapRoot,s,r,a);window.__offline=u;let l=performance.now();const p=h=>{const d=Math.min(.05,(h-l)/1e3);l=h;const g=t.collect(d);o.active?o.update(d,e.camera,g.yaw,g.pitch):(u.update(g,d),u.seatWorld?(e.camera.position.copy(u.seatWorld),e.camera.rotation.set(g.pitch,g.yaw,0,"YXZ")):n.update(u.position,g.yaw,g.pitch,u.crouched,u.zoomed?Jt.ZOOM_FACTOR:1)),s.tick(d),r.tick(d),e.render(),requestAnimationFrame(p)};requestAnimationFrame(p)}async function Ox(){const i=document.querySelector("#app");if(!i)throw new Error("missing app root");const e=new Qv(i),t={app:i,scene:e,collector:new tx(e.renderer.domElement),camera:new px(e.camera),hud:new gx(i),tracers:new _x(e.entityRoot),forge:new Tx(e.scene,e.renderer.domElement,i),viewModel:new Ex(e.camera)};t.forge.bindCamera(e.camera),window.addEventListener("keydown",r=>{r.code==="KeyB"&&t.forge.toggle()});const n=Px();if(n)try{const r=new ex(n),s=await Ix(r,5e3);Dx(t,r,s);return}catch(r){console.warn("server unreachable, falling back to offline mode:",r)}Lx(t)}Ox().catch(i=>console.error(i));
