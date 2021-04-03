/*
 * Raphael 1.4.3 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (https://www.opensource.org/licenses/mit-license.php) license.
 */
function raphael(options) {
Raphael=function(){function m(){if(m.is(arguments[0],U)){for(var a=arguments[0],b=Aa[K](m,a.splice(0,3+m.is(a[0],O))),c=b.set(),d=0,f=a[o];d<f;d++){var e=a[d]||{};nb.test(e.type)&&c[E](b[e.type]().attr(e))}return c}return Aa[K](m,arguments)}m.version="1.4.3";var V=/[, ]+/,nb=/^(circle|rect|path|ellipse|text|image)$/,p="prototype",z="hasOwnProperty",C=document,X=window,La={was:Object[p][z].call(X,"Raphael"),is:X.Raphael};function G(){}var y="appendChild",K="apply",M="concat",Ba="createTouch"in C,s=
"",P=" ",H="split",Ma="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[H](P),Ca={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},Q="join",o="length",ca=String[p].toLowerCase,w=Math,Y=w.max,$=w.min,O="number",ea="string",U="array",N="toString",aa="fill",ob=Object[p][N],D=w.pow,E="push",ga=/^(?=[\da-f]$)/,Na=/^url\(['"]?([^\)]+?)['"]?\)$/i,pb=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%))\s*\)|hs[bl]\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hs[bl]\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,
F=w.round,W="setAttribute",A=parseFloat,da=parseInt,Da=" progid:DXImageTransform.Microsoft",pa=String[p].toUpperCase,qa={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt",
"stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},Ea={along:"along",blur:O,"clip-rect":"csv",cx:O,cy:O,fill:"colour","fill-opacity":O,"font-size":O,height:O,opacity:O,path:"path",r:O,rotation:"csv",rx:O,ry:O,scale:"csv",stroke:"colour","stroke-opacity":O,"stroke-width":O,translation:"csv",width:O,x:O,y:O},I="replace";m.type=X.SVGAngle||C.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
"1.1")?"SVG":"VML";if(m.type=="VML"){var ha=C.createElement("div");ha.innerHTML="<!--[if vml]><br><br><![endif]--\>";if(ha.childNodes[o]!=2)return m.type=null;ha=null}m.svg=!(m.vml=m.type=="VML");G[p]=m[p];m._id=0;m._oid=0;m.fn={};m.is=function(a,b){b=ca.call(b);return b=="object"&&a===Object(a)||b=="undefined"&&typeof a==b||b=="null"&&a==null||ca.call(ob.call(a).slice(8,-1))==b};m.setWindow=function(a){X=a;C=X.document};function ra(a){if(m.vml){var b=/^\s+|\s+$/g;ra=T(function(d){var f;d=(d+s)[I](b,
s);try{var e=new X.ActiveXObject("htmlfile");e.write("<body>");e.close();f=e.body}catch(g){f=X.createPopup().document.body}e=f.createTextRange();try{f.style.color=d;var h=e.queryCommandValue("ForeColor");h=(h&255)<<16|h&65280|(h&16711680)>>>16;return"#"+("000000"+h[N](16)).slice(-6)}catch(i){return"none"}})}else{var c=C.createElement("i");c.title="Rapha\u00ebl Colour Picker";c.style.display="none";C.body[y](c);ra=T(function(d){c.style.color=d;return C.defaultView.getComputedStyle(c,s).getPropertyValue("color")})}return ra(a)}
function qb(){return"hsb("+[this.h,this.s,this.b]+")"}function rb(){return this.hex}m.hsb2rgb=T(function(a,b,c){if(m.is(a,"object")&&"h"in a&&"s"in a&&"b"in a){c=a.b;b=a.s;a=a.h}var d;if(c==0)return{r:0,g:0,b:0,hex:"#000"};if(a>1||b>1||c>1){a/=255;b/=255;c/=255}d=~~(a*6);a=a*6-d;var f=c*(1-b),e=c*(1-b*a),g=c*(1-b*(1-a));a=[c,e,f,f,g,c,c][d];b=[g,c,c,e,f,f,g][d];d=[f,f,g,c,c,e,f][d];a*=255;b*=255;d*=255;c={r:a,g:b,b:d,toString:rb};a=(~~a)[N](16);b=(~~b)[N](16);d=(~~d)[N](16);a=a[I](ga,"0");b=b[I](ga,
"0");d=d[I](ga,"0");c.hex="#"+a+b+d;return c},m);m.rgb2hsb=T(function(a,b,c){if(m.is(a,"object")&&"r"in a&&"g"in a&&"b"in a){c=a.b;b=a.g;a=a.r}if(m.is(a,ea)){var d=m.getRGB(a);a=d.r;b=d.g;c=d.b}if(a>1||b>1||c>1){a/=255;b/=255;c/=255}var f=Y(a,b,c),e=$(a,b,c);d=f;if(e==f)return{h:0,s:0,b:f};else{var g=f-e;e=g/f;a=a==f?(b-c)/g:b==f?2+(c-a)/g:4+(a-b)/g;a/=6;a<0&&a++;a>1&&a--}return{h:a,s:e,b:d,toString:qb}},m);var sb=/,?([achlmqrstvxz]),?/gi,sa=/\s*,\s*/,tb={hs:1,rg:1};m._path2string=function(){return this.join(",")[I](sb,
"$1")};function T(a,b,c){function d(){var f=Array[p].slice.call(arguments,0),e=f[Q]("\u25ba"),g=d.cache=d.cache||{},h=d.count=d.count||[];if(g[z](e))return c?c(g[e]):g[e];h[o]>=1000&&delete g[h.shift()];h[E](e);g[e]=a[K](b,f);return c?c(g[e]):g[e]}return d}m.getRGB=T(function(a){if(!a||(a+=s).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1};if(a=="none")return{r:-1,g:-1,b:-1,hex:"none"};!(tb[z](a.substring(0,2))||a.charAt()=="#")&&(a=ra(a));var b,c,d,f,e;if(a=a.match(pb)){if(a[2]){d=da(a[2].substring(5),
16);c=da(a[2].substring(3,5),16);b=da(a[2].substring(1,3),16)}if(a[3]){d=da((e=a[3].charAt(3))+e,16);c=da((e=a[3].charAt(2))+e,16);b=da((e=a[3].charAt(1))+e,16)}if(a[4]){a=a[4][H](sa);b=A(a[0]);c=A(a[1]);d=A(a[2]);f=A(a[3])}if(a[5]){a=a[5][H](sa);b=A(a[0])*2.55;c=A(a[1])*2.55;d=A(a[2])*2.55;f=A(a[3])}if(a[6]){a=a[6][H](sa);b=A(a[0]);c=A(a[1]);d=A(a[2]);return m.hsb2rgb(b,c,d)}if(a[7]){a=a[7][H](sa);b=A(a[0])*2.55;c=A(a[1])*2.55;d=A(a[2])*2.55;return m.hsb2rgb(b,c,d)}a={r:b,g:c,b:d};b=(~~b)[N](16);
c=(~~c)[N](16);d=(~~d)[N](16);b=b[I](ga,"0");c=c[I](ga,"0");d=d[I](ga,"0");a.hex="#"+b+c+d;isFinite(A(f))&&(a.o=f);return a}return{r:-1,g:-1,b:-1,hex:"none",error:1}},m);m.getColor=function(a){a=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||0.75};var b=this.hsb2rgb(a.h,a.s,a.b);a.h+=0.075;if(a.h>1){a.h=0;a.s-=0.2;a.s<=0&&(this.getColor.start={h:0,s:1,b:a.b})}return b.hex};m.getColor.reset=function(){delete this.start};var ub=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,
vb=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig;m.parsePathString=T(function(a){if(!a)return null;var b={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},c=[];if(m.is(a,U)&&m.is(a[0],U))c=ta(a);c[o]||(a+s)[I](ub,function(d,f,e){var g=[];d=ca.call(f);e[I](vb,function(h,i){i&&g[E](+i)});if(d=="m"&&g[o]>2){c[E]([f][M](g.splice(0,2)));d="l";f=f=="m"?"l":"L"}for(;g[o]>=b[d];){c[E]([f][M](g.splice(0,b[d])));if(!b[d])break}});c[N]=m._path2string;return c});m.findDotsAtSegment=function(a,b,c,d,f,e,g,h,i){var j=1-i,l=
D(j,3)*a+D(j,2)*3*i*c+j*3*i*i*f+D(i,3)*g;j=D(j,3)*b+D(j,2)*3*i*d+j*3*i*i*e+D(i,3)*h;var n=a+2*i*(c-a)+i*i*(f-2*c+a),r=b+2*i*(d-b)+i*i*(e-2*d+b),q=c+2*i*(f-c)+i*i*(g-2*f+c),k=d+2*i*(e-d)+i*i*(h-2*e+d);a=(1-i)*a+i*c;b=(1-i)*b+i*d;f=(1-i)*f+i*g;e=(1-i)*e+i*h;h=90-w.atan((n-q)/(r-k))*180/w.PI;(n>q||r<k)&&(h+=180);return{x:l,y:j,m:{x:n,y:r},n:{x:q,y:k},start:{x:a,y:b},end:{x:f,y:e},alpha:h}};var va=T(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=ua(a);for(var b=0,c=0,d=[],f=[],e,g=0,h=a[o];g<h;g++){e=
a[g];if(e[0]=="M"){b=e[1];c=e[2];d[E](b);f[E](c)}else{b=wb(b,c,e[1],e[2],e[3],e[4],e[5],e[6]);d=d[M](b.min.x,b.max.x);f=f[M](b.min.y,b.max.y);b=e[5];c=e[6]}}a=$[K](0,d);e=$[K](0,f);return{x:a,y:e,width:Y[K](0,d)-a,height:Y[K](0,f)-e}});function ta(a){var b=[];if(!m.is(a,U)||!m.is(a&&a[0],U))a=m.parsePathString(a);for(var c=0,d=a[o];c<d;c++){b[c]=[];for(var f=0,e=a[c][o];f<e;f++)b[c][f]=a[c][f]}b[N]=m._path2string;return b}var Oa=T(function(a){if(!m.is(a,U)||!m.is(a&&a[0],U))a=m.parsePathString(a);
var b=[],c=0,d=0,f=0,e=0,g=0;if(a[0][0]=="M"){c=a[0][1];d=a[0][2];f=c;e=d;g++;b[E](["M",c,d])}g=g;for(var h=a[o];g<h;g++){var i=b[g]=[],j=a[g];if(j[0]!=ca.call(j[0])){i[0]=ca.call(j[0]);switch(i[0]){case "a":i[1]=j[1];i[2]=j[2];i[3]=j[3];i[4]=j[4];i[5]=j[5];i[6]=+(j[6]-c).toFixed(3);i[7]=+(j[7]-d).toFixed(3);break;case "v":i[1]=+(j[1]-d).toFixed(3);break;case "m":f=j[1];e=j[2];default:for(var l=1,n=j[o];l<n;l++)i[l]=+(j[l]-(l%2?c:d)).toFixed(3)}}else{b[g]=[];if(j[0]=="m"){f=j[1]+c;e=j[2]+d}i=0;for(l=
j[o];i<l;i++)b[g][i]=j[i]}j=b[g][o];switch(b[g][0]){case "z":c=f;d=e;break;case "h":c+=+b[g][j-1];break;case "v":d+=+b[g][j-1];break;default:c+=+b[g][j-2];d+=+b[g][j-1]}}b[N]=m._path2string;return b},0,ta),ka=T(function(a){if(!m.is(a,U)||!m.is(a&&a[0],U))a=m.parsePathString(a);var b=[],c=0,d=0,f=0,e=0,g=0;if(a[0][0]=="M"){c=+a[0][1];d=+a[0][2];f=c;e=d;g++;b[0]=["M",c,d]}g=g;for(var h=a[o];g<h;g++){var i=b[g]=[],j=a[g];if(j[0]!=pa.call(j[0])){i[0]=pa.call(j[0]);switch(i[0]){case "A":i[1]=j[1];i[2]=
j[2];i[3]=j[3];i[4]=j[4];i[5]=j[5];i[6]=+(j[6]+c);i[7]=+(j[7]+d);break;case "V":i[1]=+j[1]+d;break;case "H":i[1]=+j[1]+c;break;case "M":f=+j[1]+c;e=+j[2]+d;default:for(var l=1,n=j[o];l<n;l++)i[l]=+j[l]+(l%2?c:d)}}else{l=0;for(n=j[o];l<n;l++)b[g][l]=j[l]}switch(i[0]){case "Z":c=f;d=e;break;case "H":c=i[1];break;case "V":d=i[1];break;default:c=b[g][b[g][o]-2];d=b[g][b[g][o]-1]}}b[N]=m._path2string;return b},null,ta);function wa(a,b,c,d){return[a,b,c,d,c,d]}function Pa(a,b,c,d,f,e){var g=1/3,h=2/3;return[g*
a+h*c,g*b+h*d,g*f+h*c,g*e+h*d,f,e]}function Qa(a,b,c,d,f,e,g,h,i,j){var l=w.PI,n=l*120/180,r=l/180*(+f||0),q=[],k,t=T(function(J,fa,xa){var xb=J*w.cos(xa)-fa*w.sin(xa);J=J*w.sin(xa)+fa*w.cos(xa);return{x:xb,y:J}});if(j){x=j[0];k=j[1];e=j[2];B=j[3]}else{k=t(a,b,-r);a=k.x;b=k.y;k=t(h,i,-r);h=k.x;i=k.y;w.cos(l/180*f);w.sin(l/180*f);k=(a-h)/2;x=(b-i)/2;B=k*k/(c*c)+x*x/(d*d);if(B>1){B=w.sqrt(B);c=B*c;d=B*d}B=c*c;var L=d*d;B=(e==g?-1:1)*w.sqrt(w.abs((B*L-B*x*x-L*k*k)/(B*x*x+L*k*k)));e=B*c*x/d+(a+h)/2;var B=
B*-d*k/c+(b+i)/2,x=w.asin(((b-B)/d).toFixed(7));k=w.asin(((i-B)/d).toFixed(7));x=a<e?l-x:x;k=h<e?l-k:k;x<0&&(x=l*2+x);k<0&&(k=l*2+k);if(g&&x>k)x-=l*2;if(!g&&k>x)k-=l*2}l=k-x;if(w.abs(l)>n){q=k;l=h;L=i;k=x+n*(g&&k>x?1:-1);h=e+c*w.cos(k);i=B+d*w.sin(k);q=Qa(h,i,c,d,f,0,g,l,L,[k,q,e,B])}l=k-x;f=w.cos(x);e=w.sin(x);g=w.cos(k);k=w.sin(k);l=w.tan(l/4);c=4/3*c*l;l=4/3*d*l;d=[a,b];a=[a+c*e,b-l*f];b=[h+c*k,i-l*g];h=[h,i];a[0]=2*d[0]-a[0];a[1]=2*d[1]-a[1];if(j)return[a,b,h][M](q);else{q=[a,b,h][M](q)[Q]()[H](",");
j=[];h=0;for(i=q[o];h<i;h++)j[h]=h%2?t(q[h-1],q[h],r).y:t(q[h],q[h+1],r).x;return j}}function la(a,b,c,d,f,e,g,h,i){var j=1-i;return{x:D(j,3)*a+D(j,2)*3*i*c+j*3*i*i*f+D(i,3)*g,y:D(j,3)*b+D(j,2)*3*i*d+j*3*i*i*e+D(i,3)*h}}var wb=T(function(a,b,c,d,f,e,g,h){var i=f-2*c+a-(g-2*f+c),j=2*(c-a)-2*(f-c),l=a-c,n=(-j+w.sqrt(j*j-4*i*l))/2/i;i=(-j-w.sqrt(j*j-4*i*l))/2/i;var r=[b,h],q=[a,g];w.abs(n)>1000000000000&&(n=0.5);w.abs(i)>1000000000000&&(i=0.5);if(n>0&&n<1){n=la(a,b,c,d,f,e,g,h,n);q[E](n.x);r[E](n.y)}if(i>
0&&i<1){n=la(a,b,c,d,f,e,g,h,i);q[E](n.x);r[E](n.y)}i=e-2*d+b-(h-2*e+d);j=2*(d-b)-2*(e-d);l=b-d;n=(-j+w.sqrt(j*j-4*i*l))/2/i;i=(-j-w.sqrt(j*j-4*i*l))/2/i;w.abs(n)>1000000000000&&(n=0.5);w.abs(i)>1000000000000&&(i=0.5);if(n>0&&n<1){n=la(a,b,c,d,f,e,g,h,n);q[E](n.x);r[E](n.y)}if(i>0&&i<1){n=la(a,b,c,d,f,e,g,h,i);q[E](n.x);r[E](n.y)}return{min:{x:$[K](0,q),y:$[K](0,r)},max:{x:Y[K](0,q),y:Y[K](0,r)}}}),ua=T(function(a,b){var c=ka(a),d=b&&ka(b);a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null};b={x:0,y:0,
bx:0,by:0,X:0,Y:0,qx:null,qy:null};function f(q,k){var t;if(!q)return["C",k.x,k.y,k.x,k.y,k.x,k.y];!(q[0]in{T:1,Q:1})&&(k.qx=k.qy=null);switch(q[0]){case "M":k.X=q[1];k.Y=q[2];break;case "A":q=["C"][M](Qa[K](0,[k.x,k.y][M](q.slice(1))));break;case "S":t=k.x+(k.x-(k.bx||k.x));k=k.y+(k.y-(k.by||k.y));q=["C",t,k][M](q.slice(1));break;case "T":k.qx=k.x+(k.x-(k.qx||k.x));k.qy=k.y+(k.y-(k.qy||k.y));q=["C"][M](Pa(k.x,k.y,k.qx,k.qy,q[1],q[2]));break;case "Q":k.qx=q[1];k.qy=q[2];q=["C"][M](Pa(k.x,k.y,q[1],
q[2],q[3],q[4]));break;case "L":q=["C"][M](wa(k.x,k.y,q[1],q[2]));break;case "H":q=["C"][M](wa(k.x,k.y,q[1],k.y));break;case "V":q=["C"][M](wa(k.x,k.y,k.x,q[1]));break;case "Z":q=["C"][M](wa(k.x,k.y,k.X,k.Y));break}return q}function e(q,k){if(q[k][o]>7){q[k].shift();for(var t=q[k];t[o];)q.splice(k++,0,["C"][M](t.splice(0,6)));q.splice(k,1);i=Y(c[o],d&&d[o]||0)}}function g(q,k,t,L,B){if(q&&k&&q[B][0]=="M"&&k[B][0]!="M"){k.splice(B,0,["M",L.x,L.y]);t.bx=0;t.by=0;t.x=q[B][1];t.y=q[B][2];i=Y(c[o],d&&
d[o]||0)}}for(var h=0,i=Y(c[o],d&&d[o]||0);h<i;h++){c[h]=f(c[h],a);e(c,h);d&&(d[h]=f(d[h],b));d&&e(d,h);g(c,d,a,b,h);g(d,c,b,a,h);var j=c[h],l=d&&d[h],n=j[o],r=d&&l[o];a.x=j[n-2];a.y=j[n-1];a.bx=A(j[n-4])||a.x;a.by=A(j[n-3])||a.y;b.bx=d&&(A(l[r-4])||b.x);b.by=d&&(A(l[r-3])||b.y);b.x=d&&l[r-2];b.y=d&&l[r-1]}return d?[c,d]:c},null,ta),Ra=T(function(a){for(var b=[],c=0,d=a[o];c<d;c++){var f={},e=a[c].match(/^([^:]*):?([\d\.]*)/);f.color=m.getRGB(e[1]);if(f.color.error)return null;f.color=f.color.hex;
e[2]&&(f.offset=e[2]+"%");b[E](f)}c=1;for(d=b[o]-1;c<d;c++)if(!b[c].offset){a=A(b[c-1].offset||0);e=0;for(f=c+1;f<d;f++)if(b[f].offset){e=b[f].offset;break}if(!e){e=100;f=d}e=A(e);for(e=(e-a)/(f-c+1);c<f;c++){a+=e;b[c].offset=a+"%"}}return b});function Sa(a,b,c,d){if(m.is(a,ea)||m.is(a,"object")){a=m.is(a,ea)?C.getElementById(a):a;if(a.tagName)return b==null?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:b,height:c}}else return{container:1,
x:a,y:b,width:c,height:d}}function Fa(a,b){var c=this;for(var d in b)if(b[z](d)&&!(d in a))switch(typeof b[d]){case "function":(function(f){a[d]=a===c?f:function(){return f[K](c,arguments)}})(b[d]);break;case "object":a[d]=a[d]||{};Fa.call(this,a[d],b[d]);break;default:a[d]=b[d];break}}function ia(a,b){a==b.top&&(b.top=a.prev);a==b.bottom&&(b.bottom=a.next);a.next&&(a.next.prev=a.prev);a.prev&&(a.prev.next=a.next)}function Ta(a,b){if(b.top!==a){ia(a,b);a.next=null;a.prev=b.top;b.top.next=a;b.top=
a}}function Ua(a,b){if(b.bottom!==a){ia(a,b);a.next=b.bottom;a.prev=null;b.bottom.prev=a;b.bottom=a}}function Va(a,b,c){ia(a,c);b==c.top&&(c.top=a);b.next&&(b.next.prev=a);a.next=b.next;a.prev=b;b.next=a}function Wa(a,b,c){ia(a,c);b==c.bottom&&(c.bottom=a);b.prev&&(b.prev.next=a);a.prev=b.prev;b.prev=a;a.next=b}function Xa(a){return function(){throw new Error("Rapha\u00ebl: you are calling to method \u201c"+a+"\u201d of removed object");}}var Ya=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/;if(m.svg){G[p].svgns=
"http://www.w3.org/2000/svg";G[p].xlink="http://www.w3.org/1999/xlink";F=function(a){return+a+(~~a===a)*0.5};var v=function(a,b){if(b)for(var c in b)b[z](c)&&a[W](c,b[c]+s);else{a=C.createElementNS(G[p].svgns,a);a.style.webkitTapHighlightColor="rgba(0,0,0,0)";return a}};m[N]=function(){return"Your browser supports SVG.\nYou are running Rapha\u00ebl "+this.version};var Za=function(a,b){var c=v("path");b.canvas&&b.canvas[y](c);b=new u(c,b);b.type="path";ba(b,{fill:"none",stroke:"#000",path:a});return b},
ma=function(a,b,c){var d="linear",f=0.5,e=0.5,g=a.style;b=(b+s)[I](Ya,function(l,n,r){d="radial";if(n&&r){f=A(n);e=A(r);l=(e>0.5)*2-1;D(f-0.5,2)+D(e-0.5,2)>0.25&&(e=w.sqrt(0.25-D(f-0.5,2))*l+0.5)&&e!=0.5&&(e=e.toFixed(5)-1.0E-5*l)}return s});b=b[H](/\s*\-\s*/);if(d=="linear"){var h=b.shift();h=-A(h);if(isNaN(h))return null;h=[0,0,w.cos(h*w.PI/180),w.sin(h*w.PI/180)];var i=1/(Y(w.abs(h[2]),w.abs(h[3]))||1);h[2]*=i;h[3]*=i;if(h[2]<0){h[0]=-h[2];h[2]=0}if(h[3]<0){h[1]=-h[3];h[3]=0}}b=Ra(b);if(!b)return null;
i=a.getAttribute(aa);(i=i.match(/^url\(#(.*)\)$/))&&c.defs.removeChild(C.getElementById(i[1]));i=v(d+"Gradient");i.id="r"+(m._id++)[N](36);v(i,d=="radial"?{fx:f,fy:e}:{x1:h[0],y1:h[1],x2:h[2],y2:h[3]});c.defs[y](i);c=0;for(h=b[o];c<h;c++){var j=v("stop");v(j,{offset:b[c].offset?b[c].offset:!c?"0%":"100%","stop-color":b[c].color||"#fff"});i[y](j)}v(a,{fill:"url(#"+i.id+")",opacity:1,"fill-opacity":1});g.fill=s;g.opacity=1;return g.fillOpacity=1},Ga=function(a){var b=a.getBBox();v(a.pattern,{patternTransform:m.format("translate({0},{1})",
b.x,b.y)})},ba=function(a,b){var c={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},d=a.node,f=a.attrs,e=a.rotate();function g(k,t){if(t=c[ca.call(t)]){var L=k.attrs["stroke-width"]||"1";k={round:L,square:L,butt:0}[k.attrs["stroke-linecap"]||b["stroke-linecap"]]||0;for(var B=[],x=t[o];x--;)B[x]=t[x]*L+(x%2?1:-1)*k;v(d,{"stroke-dasharray":B[Q](",")})}}b[z]("rotation")&&(e=b.rotation);var h=
(e+s)[H](V);if(h.length-1){h[1]=+h[1];h[2]=+h[2]}else h=null;A(e)&&a.rotate(0,true);for(var i in b)if(b[z](i))if(qa[z](i)){var j=b[i];f[i]=j;switch(i){case "blur":a.blur(j);break;case "rotation":a.rotate(j,true);break;case "href":case "title":case "target":var l=d.parentNode;if(ca.call(l.tagName)!="a"){var n=v("a");l.insertBefore(n,d);n[y](d);l=n}l.setAttributeNS(a.paper.xlink,i,j);break;case "cursor":d.style.cursor=j;break;case "clip-rect":l=(j+s)[H](V);if(l[o]==4){a.clip&&a.clip.parentNode.parentNode.removeChild(a.clip.parentNode);
var r=v("clipPath");n=v("rect");r.id="r"+(m._id++)[N](36);v(n,{x:l[0],y:l[1],width:l[2],height:l[3]});r[y](n);a.paper.defs[y](r);v(d,{"clip-path":"url(#"+r.id+")"});a.clip=n}if(!j){(j=C.getElementById(d.getAttribute("clip-path")[I](/(^url\(#|\)$)/g,s)))&&j.parentNode.removeChild(j);v(d,{"clip-path":s});delete a.clip}break;case "path":if(a.type=="path")v(d,{d:j?(f.path=ka(j)):"M0,0"});break;case "width":d[W](i,j);if(f.fx){i="x";j=f.x}else break;case "x":if(f.fx)j=-f.x-(f.width||0);case "rx":if(i==
"rx"&&a.type=="rect")break;case "cx":h&&(i=="x"||i=="cx")&&(h[1]+=j-f[i]);d[W](i,F(j));a.pattern&&Ga(a);break;case "height":d[W](i,j);if(f.fy){i="y";j=f.y}else break;case "y":if(f.fy)j=-f.y-(f.height||0);case "ry":if(i=="ry"&&a.type=="rect")break;case "cy":h&&(i=="y"||i=="cy")&&(h[2]+=j-f[i]);d[W](i,F(j));a.pattern&&Ga(a);break;case "r":a.type=="rect"?v(d,{rx:j,ry:j}):d[W](i,j);break;case "src":a.type=="image"&&d.setAttributeNS(a.paper.xlink,"href",j);break;case "stroke-width":d.style.strokeWidth=
j;d[W](i,j);f["stroke-dasharray"]&&g(a,f["stroke-dasharray"]);break;case "stroke-dasharray":g(a,j);break;case "translation":j=(j+s)[H](V);j[0]=+j[0]||0;j[1]=+j[1]||0;if(h){h[1]+=j[0];h[2]+=j[1]}ya.call(a,j[0],j[1]);break;case "scale":j=(j+s)[H](V);a.scale(+j[0]||1,+j[1]||+j[0]||1,isNaN(A(j[2]))?null:+j[2],isNaN(A(j[3]))?null:+j[3]);break;case aa:if(l=(j+s).match(Na)){r=v("pattern");var q=v("image");r.id="r"+(m._id++)[N](36);v(r,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});v(q,{x:0,y:0});
q.setAttributeNS(a.paper.xlink,"href",l[1]);r[y](q);j=C.createElement("img");j.style.cssText="position:absolute;left:-9999em;top-9999em";j.onload=function(){v(r,{width:this.offsetWidth,height:this.offsetHeight});v(q,{width:this.offsetWidth,height:this.offsetHeight});C.body.removeChild(this);a.paper.safari()};C.body[y](j);j.src=l[1];a.paper.defs[y](r);d.style.fill="url(#"+r.id+")";v(d,{fill:"url(#"+r.id+")"});a.pattern=r;a.pattern&&Ga(a);break}l=m.getRGB(j);if(l.error){if(({circle:1,ellipse:1}[z](a.type)||
(j+s).charAt()!="r")&&ma(d,j,a.paper)){f.gradient=j;f.fill="none";break}}else{delete b.gradient;delete f.gradient;!m.is(f.opacity,"undefined")&&m.is(b.opacity,"undefined")&&v(d,{opacity:f.opacity});!m.is(f["fill-opacity"],"undefined")&&m.is(b["fill-opacity"],"undefined")&&v(d,{"fill-opacity":f["fill-opacity"]})}l[z]("o")&&v(d,{"fill-opacity":l.o/100});case "stroke":l=m.getRGB(j);d[W](i,l.hex);i=="stroke"&&l[z]("o")&&v(d,{"stroke-opacity":l.o/100});break;case "gradient":(({circle:1,ellipse:1})[z](a.type)||
(j+s).charAt()!="r")&&ma(d,j,a.paper);break;case "opacity":case "fill-opacity":if(f.gradient){if(l=C.getElementById(d.getAttribute(aa)[I](/^url\(#|\)$/g,s))){l=l.getElementsByTagName("stop");l[l[o]-1][W]("stop-opacity",j)}break}default:i=="font-size"&&(j=da(j,10)+"px");l=i[I](/(\-.)/g,function(k){return pa.call(k.substring(1))});d.style[l]=j;d[W](i,j);break}}yb(a,b);if(h)a.rotate(h.join(P));else A(e)&&a.rotate(e,true)},$a=1.2,yb=function(a,b){if(!(a.type!="text"||!(b[z]("text")||b[z]("font")||b[z]("font-size")||
b[z]("x")||b[z]("y")))){var c=a.attrs,d=a.node,f=d.firstChild?da(C.defaultView.getComputedStyle(d.firstChild,s).getPropertyValue("font-size"),10):10;if(b[z]("text")){for(c.text=b.text;d.firstChild;)d.removeChild(d.firstChild);b=(b.text+s)[H]("\n");for(var e=0,g=b[o];e<g;e++)if(b[e]){var h=v("tspan");e&&v(h,{dy:f*$a,x:c.x});h[y](C.createTextNode(b[e]));d[y](h)}}else{b=d.getElementsByTagName("tspan");e=0;for(g=b[o];e<g;e++)e&&v(b[e],{dy:f*$a,x:c.x})}v(d,{y:c.y});a=a.getBBox();(a=c.y-(a.y+a.height/2))&&
isFinite(a)&&v(d,{y:c.y+a})}},u=function(a,b){this[0]=a;this.id=m._oid++;this.node=a;a.raphael=this;this.paper=b;this.attrs=this.attrs||{};this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!b.bottom&&(b.bottom=this);(this.prev=b.top)&&(b.top.next=this);b.top=this;this.next=null};u[p].rotate=function(a,b,c){if(this.removed)return this;if(a==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][Q](P);return this._.rt.deg}var d=this.getBBox();a=(a+s)[H](V);if(a[o]-
1){b=A(a[1]);c=A(a[2])}a=A(a[0]);if(b!=null)this._.rt.deg=a;else this._.rt.deg+=a;c==null&&(b=null);this._.rt.cx=b;this._.rt.cy=c;b=b==null?d.x+d.width/2:b;c=c==null?d.y+d.height/2:c;if(this._.rt.deg){this.transformations[0]=m.format("rotate({0} {1} {2})",this._.rt.deg,b,c);this.clip&&v(this.clip,{transform:m.format("rotate({0} {1} {2})",-this._.rt.deg,b,c)})}else{this.transformations[0]=s;this.clip&&v(this.clip,{transform:s})}v(this.node,{transform:this.transformations[Q](P)});return this};u[p].hide=
function(){!this.removed&&(this.node.style.display="none");return this};u[p].show=function(){!this.removed&&(this.node.style.display="");return this};u[p].remove=function(){if(!this.removed){ia(this,this.paper);this.node.parentNode.removeChild(this.node);for(var a in this)delete this[a];this.removed=true}};u[p].getBBox=function(){if(this.removed)return this;if(this.type=="path")return va(this.attrs.path);if(this.node.style.display=="none"){this.show();var a=true}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=
b||{}}if(this.type=="text"){b={x:b.x,y:Infinity,width:0,height:0};for(var d=0,f=this.node.getNumberOfChars();d<f;d++){var e=this.node.getExtentOfChar(d);e.y<b.y&&(b.y=e.y);e.y+e.height-b.y>b.height&&(b.height=e.y+e.height-b.y);e.x+e.width-b.x>b.width&&(b.width=e.x+e.width-b.x)}}a&&this.hide();return b};u[p].attr=function(a,b){if(this.removed)return this;if(a==null){a={};for(var c in this.attrs)if(this.attrs[z](c))a[c]=this.attrs[c];this._.rt.deg&&(a.rotation=this.rotate());(this._.sx!=1||this._.sy!=
1)&&(a.scale=this.scale());a.gradient&&a.fill=="none"&&(a.fill=a.gradient)&&delete a.gradient;return a}if(b==null&&m.is(a,ea)){if(a=="translation")return ya.call(this);if(a=="rotation")return this.rotate();if(a=="scale")return this.scale();if(a==aa&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[a]}if(b==null&&m.is(a,U)){b={};c=0;for(var d=a.length;c<d;c++)b[a[c]]=this.attr(a[c]);return b}if(b!=null){c={};c[a]=b;ba(this,c)}else a!=null&&m.is(a,"object")&&
ba(this,a);return this};u[p].toFront=function(){if(this.removed)return this;this.node.parentNode[y](this.node);var a=this.paper;a.top!=this&&Ta(this,a);return this};u[p].toBack=function(){if(this.removed)return this;if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);Ua(this,this.paper)}return this};u[p].insertAfter=function(a){if(this.removed)return this;var b=a.node;b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):
b.parentNode[y](this.node);Va(this,a,this.paper);return this};u[p].insertBefore=function(a){if(this.removed)return this;var b=a.node;b.parentNode.insertBefore(this.node,b);Wa(this,a,this.paper);return this};u[p].blur=function(a){var b=this;if(+a!==0){var c=v("filter"),d=v("feGaussianBlur");b.attrs.blur=a;c.id="r"+(m._id++)[N](36);v(d,{stdDeviation:+a||1.5});c.appendChild(d);b.paper.defs.appendChild(c);b._blur=c;v(b.node,{filter:"url(#"+c.id+")"})}else{if(b._blur){b._blur.parentNode.removeChild(b._blur);
delete b._blur;delete b.attrs.blur}b.node.removeAttribute("filter")}};var ab=function(a,b,c,d){b=F(b);c=F(c);var f=v("circle");a.canvas&&a.canvas[y](f);a=new u(f,a);a.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"};a.type="circle";v(f,a.attrs);return a},bb=function(a,b,c,d,f,e){b=F(b);c=F(c);var g=v("rect");a.canvas&&a.canvas[y](g);a=new u(g,a);a.attrs={x:b,y:c,width:d,height:f,r:e||0,rx:e||0,ry:e||0,fill:"none",stroke:"#000"};a.type="rect";v(g,a.attrs);return a},cb=function(a,b,c,d,f){b=F(b);c=F(c);
var e=v("ellipse");a.canvas&&a.canvas[y](e);a=new u(e,a);a.attrs={cx:b,cy:c,rx:d,ry:f,fill:"none",stroke:"#000"};a.type="ellipse";v(e,a.attrs);return a},db=function(a,b,c,d,f,e){var g=v("image");v(g,{x:c,y:d,width:f,height:e,preserveAspectRatio:"none"});g.setAttributeNS(a.xlink,"href",b);a.canvas&&a.canvas[y](g);a=new u(g,a);a.attrs={x:c,y:d,width:f,height:e,src:b};a.type="image";return a},eb=function(a,b,c,d){var f=v("text");v(f,{x:b,y:c,"text-anchor":"middle"});a.canvas&&a.canvas[y](f);a=new u(f,
a);a.attrs={x:b,y:c,"text-anchor":"middle",text:d,font:qa.font,stroke:"none",fill:"#000"};a.type="text";ba(a,a.attrs);return a},fb=function(a,b){this.width=a||this.width;this.height=b||this.height;this.canvas[W]("width",this.width);this.canvas[W]("height",this.height);return this},Aa=function(){var a=Sa[K](0,arguments),b=a&&a.container,c=a.x,d=a.y,f=a.width;a=a.height;if(!b)throw new Error("SVG container not found.");var e=v("svg");c=c||0;d=d||0;f=f||512;a=a||342;v(e,{xmlns:"http://www.w3.org/2000/svg",
version:1.1,width:f,height:a});if(b==1){e.style.cssText="position:absolute;left:"+c+"px;top:"+d+"px";C.body[y](e)}else b.firstChild?b.insertBefore(e,b.firstChild):b[y](e);b=new G;b.width=f;b.height=a;b.canvas=e;Fa.call(b,b,m.fn);b.clear();return b};G[p].clear=function(){for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null;(this.desc=v("desc"))[y](C.createTextNode("Created with Rapha\u00ebl"));a[y](this.desc);a[y](this.defs=v("defs"))};G[p].remove=function(){this.canvas.parentNode&&
this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=Xa(a)}}if(m.vml){var gb={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},zb=/([clmz]),?([^clmz]*)/gi,Ab=/-?[^,\s-]+/g,na=1000+P+1000,ja=10,oa={path:1,rect:1},Bb=function(a){var b=/[ahqstv]/ig,c=ka;(a+s).match(b)&&(c=ua);b=/[clmz]/g;if(c==ka&&!(a+s).match(b))return a=(a+s)[I](zb,function(i,j,l){var n=[],r=ca.call(j)=="m",q=gb[j];l[I](Ab,function(k){if(r&&n[o]==2){q+=n+gb[j=="m"?"l":"L"];n=[]}n[E](F(k*ja))});return q+n});b=c(a);
var d;a=[];for(var f=0,e=b[o];f<e;f++){c=b[f];d=ca.call(b[f][0]);d=="z"&&(d="x");for(var g=1,h=c[o];g<h;g++)d+=F(c[g]*ja)+(g!=h-1?",":s);a[E](d)}return a[Q](P)};m[N]=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl "+this.version};Za=function(a,b){var c=R("group");c.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";c.coordsize=b.coordsize;c.coordorigin=b.coordorigin;var d=R("shape"),f=d.style;f.width=
b.width+"px";f.height=b.height+"px";d.coordsize=na;d.coordorigin=b.coordorigin;c[y](d);d=new u(d,c,b);f={fill:"none",stroke:"#000"};a&&(f.path=a);d.isAbsolute=true;d.type="path";d.path=[];d.Path=s;ba(d,f);b.canvas[y](c);return d};ba=function(a,b){a.attrs=a.attrs||{};var c=a.node,d=a.attrs,f=c.style,e;e=(b.x!=d.x||b.y!=d.y||b.width!=d.width||b.height!=d.height||b.r!=d.r)&&a.type=="rect";var g=a;for(var h in b)if(b[z](h))d[h]=b[h];if(e){d.path=hb(d.x,d.y,d.width,d.height,d.r);a.X=d.x;a.Y=d.y;a.W=d.width;
a.H=d.height}b.href&&(c.href=b.href);b.title&&(c.title=b.title);b.target&&(c.target=b.target);b.cursor&&(f.cursor=b.cursor);"blur"in b&&a.blur(b.blur);if(b.path&&a.type=="path"||e)c.path=Bb(d.path);b.rotation!=null&&a.rotate(b.rotation,true);if(b.translation){e=(b.translation+s)[H](V);ya.call(a,e[0],e[1]);if(a._.rt.cx!=null){a._.rt.cx+=+e[0];a._.rt.cy+=+e[1];a.setBox(a.attrs,e[0],e[1])}}if(b.scale){e=(b.scale+s)[H](V);a.scale(+e[0]||1,+e[1]||+e[0]||1,+e[2]||null,+e[3]||null)}if("clip-rect"in b){e=
(b["clip-rect"]+s)[H](V);if(e[o]==4){e[2]=+e[2]+ +e[0];e[3]=+e[3]+ +e[1];h=c.clipRect||C.createElement("div");var i=h.style,j=c.parentNode;i.clip=m.format("rect({1}px {2}px {3}px {0}px)",e);if(!c.clipRect){i.position="absolute";i.top=0;i.left=0;i.width=a.paper.width+"px";i.height=a.paper.height+"px";j.parentNode.insertBefore(h,j);h[y](j);c.clipRect=h}}if(!b["clip-rect"])c.clipRect&&(c.clipRect.style.clip=s)}if(a.type=="image"&&b.src)c.src=b.src;if(a.type=="image"&&b.opacity){c.filterOpacity=Da+".Alpha(opacity="+
b.opacity*100+")";f.filter=(c.filterMatrix||s)+(c.filterOpacity||s)}b.font&&(f.font=b.font);b["font-family"]&&(f.fontFamily='"'+b["font-family"][H](",")[0][I](/^['"]+|['"]+$/g,s)+'"');b["font-size"]&&(f.fontSize=b["font-size"]);b["font-weight"]&&(f.fontWeight=b["font-weight"]);b["font-style"]&&(f.fontStyle=b["font-style"]);if(b.opacity!=null||b["stroke-width"]!=null||b.fill!=null||b.stroke!=null||b["stroke-width"]!=null||b["stroke-opacity"]!=null||b["fill-opacity"]!=null||b["stroke-dasharray"]!=null||
b["stroke-miterlimit"]!=null||b["stroke-linejoin"]!=null||b["stroke-linecap"]!=null){c=a.shape||c;f=c.getElementsByTagName(aa)&&c.getElementsByTagName(aa)[0];e=false;!f&&(e=f=R(aa));if("fill-opacity"in b||"opacity"in b){a=((+d["fill-opacity"]+1||2)-1)*((+d.opacity+1||2)-1)*((+m.getRGB(b.fill).o+1||2)-1);a<0&&(a=0);a>1&&(a=1);f.opacity=a}b.fill&&(f.on=true);if(f.on==null||b.fill=="none")f.on=false;if(f.on&&b.fill)if(a=b.fill.match(Na)){f.src=a[1];f.type="tile"}else{f.color=m.getRGB(b.fill).hex;f.src=
s;f.type="solid";if(m.getRGB(b.fill).error&&(g.type in{circle:1,ellipse:1}||(b.fill+s).charAt()!="r")&&ma(g,b.fill)){d.fill="none";d.gradient=b.fill}}e&&c[y](f);f=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0];e=false;!f&&(e=f=R("stroke"));if(b.stroke&&b.stroke!="none"||b["stroke-width"]||b["stroke-opacity"]!=null||b["stroke-dasharray"]||b["stroke-miterlimit"]||b["stroke-linejoin"]||b["stroke-linecap"])f.on=true;(b.stroke=="none"||f.on==null||b.stroke==0||b["stroke-width"]==
0)&&(f.on=false);a=m.getRGB(b.stroke);f.on&&b.stroke&&(f.color=a.hex);a=((+d["stroke-opacity"]+1||2)-1)*((+d.opacity+1||2)-1)*((+a.o+1||2)-1);h=(A(b["stroke-width"])||1)*0.75;a<0&&(a=0);a>1&&(a=1);b["stroke-width"]==null&&(h=d["stroke-width"]);b["stroke-width"]&&(f.weight=h);h&&h<1&&(a*=h)&&(f.weight=1);f.opacity=a;b["stroke-linejoin"]&&(f.joinstyle=b["stroke-linejoin"]||"miter");f.miterlimit=b["stroke-miterlimit"]||8;b["stroke-linecap"]&&(f.endcap=b["stroke-linecap"]=="butt"?"flat":b["stroke-linecap"]==
"square"?"square":"round");if(b["stroke-dasharray"]){a={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};f.dashstyle=a[z](b["stroke-dasharray"])?a[b["stroke-dasharray"]]:s}e&&c[y](f)}if(g.type=="text"){f=g.paper.span.style;d.font&&(f.font=d.font);d["font-family"]&&(f.fontFamily=d["font-family"]);d["font-size"]&&(f.fontSize=d["font-size"]);d["font-weight"]&&(f.fontWeight=d["font-weight"]);
d["font-style"]&&(f.fontStyle=d["font-style"]);g.node.string&&(g.paper.span.innerHTML=(g.node.string+s)[I](/</g,"&#60;")[I](/&/g,"&#38;")[I](/\n/g,"<br>"));g.W=d.w=g.paper.span.offsetWidth;g.H=d.h=g.paper.span.offsetHeight;g.X=d.x;g.Y=d.y+F(g.H/2);switch(d["text-anchor"]){case "start":g.node.style["v-text-align"]="left";g.bbx=F(g.W/2);break;case "end":g.node.style["v-text-align"]="right";g.bbx=-F(g.W/2);break;default:g.node.style["v-text-align"]="center";break}}};ma=function(a,b){a.attrs=a.attrs||
{};var c="linear",d=".5 .5";a.attrs.gradient=b;b=(b+s)[I](Ya,function(i,j,l){c="radial";if(j&&l){j=A(j);l=A(l);D(j-0.5,2)+D(l-0.5,2)>0.25&&(l=w.sqrt(0.25-D(j-0.5,2))*((l>0.5)*2-1)+0.5);d=j+P+l}return s});b=b[H](/\s*\-\s*/);if(c=="linear"){var f=b.shift();f=-A(f);if(isNaN(f))return null}var e=Ra(b);if(!e)return null;a=a.shape||a.node;b=a.getElementsByTagName(aa)[0]||R(aa);!b.parentNode&&a.appendChild(b);if(e[o]){b.on=true;b.method="none";b.color=e[0].color;b.color2=e[e[o]-1].color;a=[];for(var g=0,
h=e[o];g<h;g++)e[g].offset&&a[E](e[g].offset+P+e[g].color);b.colors&&(b.colors.value=a[o]?a[Q]():"0% "+b.color);if(c=="radial"){b.type="gradientradial";b.focus="100%";b.focussize=d;b.focusposition=d}else{b.type="gradient";b.angle=(270-f)%360}}return 1};u=function(a,b,c){this[0]=a;this.id=m._oid++;this.node=a;a.raphael=this;this.Y=this.X=0;this.attrs={};this.Group=b;this.paper=c;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};!c.bottom&&(c.bottom=this);(this.prev=c.top)&&(c.top.next=this);c.top=this;this.next=
null};u[p].rotate=function(a,b,c){if(this.removed)return this;if(a==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][Q](P);return this._.rt.deg}a=(a+s)[H](V);if(a[o]-1){b=A(a[1]);c=A(a[2])}a=A(a[0]);if(b!=null)this._.rt.deg=a;else this._.rt.deg+=a;c==null&&(b=null);this._.rt.cx=b;this._.rt.cy=c;this.setBox(this.attrs,b,c);this.Group.style.rotation=this._.rt.deg;return this};u[p].setBox=function(a,b,c){if(this.removed)return this;var d=this.Group.style,f=this.shape&&this.shape.style||
this.node.style;a=a||{};for(var e in a)if(a[z](e))this.attrs[e]=a[e];b=b||this._.rt.cx;c=c||this._.rt.cy;var g=this.attrs,h;switch(this.type){case "circle":a=g.cx-g.r;e=g.cy-g.r;h=g=g.r*2;break;case "ellipse":a=g.cx-g.rx;e=g.cy-g.ry;h=g.rx*2;g=g.ry*2;break;case "image":a=+g.x;e=+g.y;h=g.width||0;g=g.height||0;break;case "text":this.textpath.v=["m",F(g.x),", ",F(g.y-2),"l",F(g.x)+1,", ",F(g.y-2)][Q](s);a=g.x-F(this.W/2);e=g.y-this.H/2;h=this.W;g=this.H;break;case "rect":case "path":if(this.attrs.path){g=
va(this.attrs.path);a=g.x;e=g.y;h=g.width;g=g.height}else{e=a=0;h=this.paper.width;g=this.paper.height}break;default:e=a=0;h=this.paper.width;g=this.paper.height;break}b=b==null?a+h/2:b;c=c==null?e+g/2:c;b=b-this.paper.width/2;c=c-this.paper.height/2;var i;d.left!=(i=b+"px")&&(d.left=i);d.top!=(i=c+"px")&&(d.top=i);this.X=oa[z](this.type)?-b:a;this.Y=oa[z](this.type)?-c:e;this.W=h;this.H=g;if(oa[z](this.type)){f.left!=(i=-b*ja+"px")&&(f.left=i);f.top!=(i=-c*ja+"px")&&(f.top=i)}else if(this.type==
"text"){f.left!=(i=-b+"px")&&(f.left=i);f.top!=(i=-c+"px")&&(f.top=i)}else{d.width!=(i=this.paper.width+"px")&&(d.width=i);d.height!=(i=this.paper.height+"px")&&(d.height=i);f.left!=(i=a-b+"px")&&(f.left=i);f.top!=(i=e-c+"px")&&(f.top=i);f.width!=(i=h+"px")&&(f.width=i);f.height!=(i=g+"px")&&(f.height=i)}};u[p].hide=function(){!this.removed&&(this.Group.style.display="none");return this};u[p].show=function(){!this.removed&&(this.Group.style.display="block");return this};u[p].getBBox=function(){if(this.removed)return this;
if(oa[z](this.type))return va(this.attrs.path);return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};u[p].remove=function(){if(!this.removed){ia(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)delete this[a];this.removed=true}};u[p].attr=function(a,b){if(this.removed)return this;if(a==null){a={};for(var c in this.attrs)if(this.attrs[z](c))a[c]=this.attrs[c];
this._.rt.deg&&(a.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(a.scale=this.scale());a.gradient&&a.fill=="none"&&(a.fill=a.gradient)&&delete a.gradient;return a}if(b==null&&m.is(a,ea)){if(a=="translation")return ya.call(this);if(a=="rotation")return this.rotate();if(a=="scale")return this.scale();if(a==aa&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[a]}if(this.attrs&&b==null&&m.is(a,U)){var d={};c=0;for(b=a[o];c<b;c++)d[a[c]]=this.attr(a[c]);
return d}if(b!=null){d={};d[a]=b}b==null&&m.is(a,"object")&&(d=a);if(d){if(d.text&&this.type=="text")this.node.string=d.text;ba(this,d);if(d.gradient&&({circle:1,ellipse:1}[z](this.type)||(d.gradient+s).charAt()!="r"))ma(this,d.gradient);(!oa[z](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this};u[p].toFront=function(){!this.removed&&this.Group.parentNode[y](this.Group);this.paper.top!=this&&Ta(this,this.paper);return this};u[p].toBack=function(){if(this.removed)return this;if(this.Group.parentNode.firstChild!=
this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);Ua(this,this.paper)}return this};u[p].insertAfter=function(a){if(this.removed)return this;a.Group.nextSibling?a.Group.parentNode.insertBefore(this.Group,a.Group.nextSibling):a.Group.parentNode[y](this.Group);Va(this,a,this.paper);return this};u[p].insertBefore=function(a){if(this.removed)return this;a.Group.parentNode.insertBefore(this.Group,a.Group);Wa(this,a,this.paper);return this};var Cb=/ progid:\S+Blur\([^\)]+\)/g;
u[p].blur=function(a){var b=this.node.style,c=b.filter;c=c.replace(Cb,"");if(+a!==0){this.attrs.blur=a;b.filter=c+Da+".Blur(pixelradius="+(+a||1.5)+")";b.margin=Raphael.format("-{0}px 0 0 -{0}px",Math.round(+a||1.5))}else{b.filter=c;b.margin=0;delete this.attrs.blur}};ab=function(a,b,c,d){var f=R("group"),e=R("oval");f.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";f.coordsize=na;f.coordorigin=a.coordorigin;f[y](e);e=new u(e,f,a);e.type="circle";ba(e,{stroke:"#000",
fill:"none"});e.attrs.cx=b;e.attrs.cy=c;e.attrs.r=d;e.setBox({x:b-d,y:c-d,width:d*2,height:d*2});a.canvas[y](f);return e};function hb(a,b,c,d,f){return f?m.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",a+f,b,c-f*2,f,-f,d-f*2,f*2-c,f*2-d):m.format("M{0},{1}l{2},0,0,{3},{4},0z",a,b,c,d,-c)}bb=function(a,b,c,d,f,e){var g=hb(b,c,d,f,e);a=a.path(g);var h=a.attrs;a.X=h.x=b;a.Y=h.y=c;a.W=h.width=d;a.H=h.height=f;h.r=e;h.path=
g;a.type="rect";return a};cb=function(a,b,c,d,f){var e=R("group"),g=R("oval");e.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";e.coordsize=na;e.coordorigin=a.coordorigin;e[y](g);g=new u(g,e,a);g.type="ellipse";ba(g,{stroke:"#000"});g.attrs.cx=b;g.attrs.cy=c;g.attrs.rx=d;g.attrs.ry=f;g.setBox({x:b-d,y:c-f,width:d*2,height:f*2});a.canvas[y](e);return g};db=function(a,b,c,d,f,e){var g=R("group"),h=R("image");g.style.cssText="position:absolute;left:0;top:0;width:"+
a.width+"px;height:"+a.height+"px";g.coordsize=na;g.coordorigin=a.coordorigin;h.src=b;g[y](h);h=new u(h,g,a);h.type="image";h.attrs.src=b;h.attrs.x=c;h.attrs.y=d;h.attrs.w=f;h.attrs.h=e;h.setBox({x:c,y:d,width:f,height:e});a.canvas[y](g);return h};eb=function(a,b,c,d){var f=R("group"),e=R("shape"),g=e.style,h=R("path"),i=R("textpath");f.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";f.coordsize=na;f.coordorigin=a.coordorigin;h.v=m.format("m{0},{1}l{2},{1}",
F(b*10),F(c*10),F(b*10)+1);h.textpathok=true;g.width=a.width;g.height=a.height;i.string=d+s;i.on=true;e[y](i);e[y](h);f[y](e);g=new u(i,f,a);g.shape=e;g.textpath=h;g.type="text";g.attrs.text=d;g.attrs.x=b;g.attrs.y=c;g.attrs.w=1;g.attrs.h=1;ba(g,{font:qa.font,stroke:"none",fill:"#000"});g.setBox();a.canvas[y](f);return g};fb=function(a,b){var c=this.canvas.style;a==+a&&(a+="px");b==+b&&(b+="px");c.width=a;c.height=b;c.clip="rect(0 "+a+" "+b+" 0)";return this};var R;C.createStyleSheet().addRule(".rvml",
"behavior:url(#default#VML)");try{!C.namespaces.rvml&&C.namespaces.add("rvml","urn:schemas-microsoft-com:vml");R=function(a){return C.createElement("<rvml:"+a+' class="rvml">')}}catch(Kb){R=function(a){return C.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}Aa=function(){var a=Sa[K](0,arguments),b=a.container,c=a.height,d=a.width,f=a.x;a=a.y;if(!b)throw new Error("VML container not found.");var e=new G,g=e.canvas=C.createElement("div"),h=g.style;f=f||0;a=a||0;d=d||512;
c=c||342;d==+d&&(d+="px");c==+c&&(c+="px");e.width=1000;e.height=1000;e.coordsize=ja*1000+P+ja*1000;e.coordorigin="0 0";e.span=C.createElement("span");e.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";g[y](e.span);h.cssText=m.format("width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",d,c);if(b==1){C.body[y](g);h.left=f+"px";h.top=a+"px";h.position="absolute"}else b.firstChild?b.insertBefore(g,
b.firstChild):b[y](g);Fa.call(e,e,m.fn);return e};G[p].clear=function(){this.canvas.innerHTML=s;this.span=C.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas[y](this.span);this.bottom=this.top=null};G[p].remove=function(){this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=Xa(a);return true}}G[p].safari=/^Apple|^Google/.test(X.navigator.vendor)&&(!(X.navigator.userAgent.indexOf("Version/4.0")+
1)||X.navigator.platform.slice(0,2)=="iP")?function(){var a=this.rect(-99,-99,this.width+99,this.height+99);X.setTimeout(function(){a.remove()})}:function(){};function Db(){this.returnValue=false}function Eb(){return this.originalEvent.preventDefault()}function Fb(){this.cancelBubble=true}function Gb(){return this.originalEvent.stopPropagation()}var Hb=function(){if(C.addEventListener)return function(a,b,c,d){var f=Ba&&Ca[b]?Ca[b]:b;function e(g){if(Ba&&Ca[z](b))for(var h=0,i=g.targetTouches&&g.targetTouches.length;h<
i;h++)if(g.targetTouches[h].target==a){i=g;g=g.targetTouches[h];g.originalEvent=i;g.preventDefault=Eb;g.stopPropagation=Gb;break}return c.call(d,g)}a.addEventListener(f,e,false);return function(){a.removeEventListener(f,e,false);return true}};else if(C.attachEvent)return function(a,b,c,d){function f(g){g=g||X.event;g.preventDefault=g.preventDefault||Db;g.stopPropagation=g.stopPropagation||Fb;return c.call(d,g)}a.attachEvent("on"+b,f);function e(){a.detachEvent("on"+b,f);return true}return e}}();for(ha=
Ma[o];ha--;)(function(a){m[a]=u[p][a]=function(b){if(m.is(b,"function")){this.events=this.events||[];this.events.push({name:a,f:b,unbind:Hb(this.shape||this.node||C,a,b,this)})}return this};m["un"+a]=u[p]["un"+a]=function(b){for(var c=this.events,d=c[o];d--;)if(c[d].name==a&&c[d].f==b){c[d].unbind();c.splice(d,1);!c.length&&delete this.events;return this}return this}})(Ma[ha]);u[p].hover=function(a,b){return this.mouseover(a).mouseout(b)};u[p].unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};
u[p].drag=function(a,b,c){this._drag={};var d=this.mousedown(function(g){(g.originalEvent?g.originalEvent:g).preventDefault();this._drag.x=g.clientX;this._drag.y=g.clientY;this._drag.id=g.identifier;b&&b.call(this,g.clientX,g.clientY);Raphael.mousemove(f).mouseup(e)});function f(g){var h=g.clientX,i=g.clientY;if(Ba)for(var j=g.touches.length,l;j--;){l=g.touches[j];if(l.identifier==d._drag.id){h=l.clientX;i=l.clientY;(g.originalEvent?g.originalEvent:g).preventDefault();break}}else g.preventDefault();
a&&a.call(d,h-d._drag.x,i-d._drag.y,h,i)}function e(){d._drag={};Raphael.unmousemove(f).unmouseup(e);c&&c.call(d)}return this};G[p].circle=function(a,b,c){return ab(this,a||0,b||0,c||0)};G[p].rect=function(a,b,c,d,f){return bb(this,a||0,b||0,c||0,d||0,f||0)};G[p].ellipse=function(a,b,c,d){return cb(this,a||0,b||0,c||0,d||0)};G[p].path=function(a){a&&!m.is(a,ea)&&!m.is(a[0],U)&&(a+=s);return Za(m.format[K](m,arguments),this)};G[p].image=function(a,b,c,d,f){return db(this,a||"about:blank",b||0,c||0,
d||0,f||0)};G[p].text=function(a,b,c){return eb(this,a||0,b||0,c||s)};G[p].set=function(a){arguments[o]>1&&(a=Array[p].splice.call(arguments,0,arguments[o]));return new Z(a)};G[p].setSize=fb;G[p].top=G[p].bottom=null;G[p].raphael=m;function ib(){return this.x+P+this.y}u[p].resetScale=function(){if(this.removed)return this;this._.sx=1;this._.sy=1;this.attrs.scale="1 1"};u[p].scale=function(a,b,c,d){if(this.removed)return this;if(a==null&&b==null)return{x:this._.sx,y:this._.sy,toString:ib};b=b||a;!+b&&
(b=a);var f,e,g=this.attrs;if(a!=0){var h=this.getBBox(),i=h.x+h.width/2,j=h.y+h.height/2;f=a/this._.sx;e=b/this._.sy;c=+c||c==0?c:i;d=+d||d==0?d:j;h=~~(a/w.abs(a));var l=~~(b/w.abs(b)),n=this.node.style,r=c+(i-c)*f;j=d+(j-d)*e;switch(this.type){case "rect":case "image":var q=g.width*h*f,k=g.height*l*e;this.attr({height:k,r:g.r*$(h*f,l*e),width:q,x:r-q/2,y:j-k/2});break;case "circle":case "ellipse":this.attr({rx:g.rx*h*f,ry:g.ry*l*e,r:g.r*$(h*f,l*e),cx:r,cy:j});break;case "text":this.attr({x:r,y:j});
break;case "path":i=Oa(g.path);for(var t=true,L=0,B=i[o];L<B;L++){var x=i[L],J=pa.call(x[0]);if(!(J=="M"&&t)){t=false;if(J=="A"){x[i[L][o]-2]*=f;x[i[L][o]-1]*=e;x[1]*=h*f;x[2]*=l*e;x[5]=+!(h+l?!+x[5]:+x[5])}else if(J=="H"){J=1;for(var fa=x[o];J<fa;J++)x[J]*=f}else if(J=="V"){J=1;for(fa=x[o];J<fa;J++)x[J]*=e}else{J=1;for(fa=x[o];J<fa;J++)x[J]*=J%2?f:e}}}e=va(i);f=r-e.x-e.width/2;e=j-e.y-e.height/2;i[0][1]+=f;i[0][2]+=e;this.attr({path:i});break}if(this.type in{text:1,image:1}&&(h!=1||l!=1))if(this.transformations){this.transformations[2]=
"scale("[M](h,",",l,")");this.node[W]("transform",this.transformations[Q](P));f=h==-1?-g.x-(q||0):g.x;e=l==-1?-g.y-(k||0):g.y;this.attr({x:f,y:e});g.fx=h-1;g.fy=l-1}else{this.node.filterMatrix=Da+".Matrix(M11="[M](h,", M12=0, M21=0, M22=",l,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");n.filter=(this.node.filterMatrix||s)+(this.node.filterOpacity||s)}else if(this.transformations){this.transformations[2]=s;this.node[W]("transform",this.transformations[Q](P));g.fx=0;g.fy=0}else{this.node.filterMatrix=
s;n.filter=(this.node.filterMatrix||s)+(this.node.filterOpacity||s)}g.scale=[a,b,c,d][Q](P);this._.sx=a;this._.sy=b}return this};u[p].clone=function(){if(this.removed)return null;var a=this.attr();delete a.scale;delete a.translation;return this.paper[this.type]().attr(a)};var jb=T(function(a,b,c,d,f,e,g,h,i){for(var j=0,l,n=0;n<1.001;n+=0.0010){var r=m.findDotsAtSegment(a,b,c,d,f,e,g,h,n);n&&(j+=D(D(l.x-r.x,2)+D(l.y-r.y,2),0.5));if(j>=i)return r;l=r}});function Ha(a,b){return function(c,d,f){c=ua(c);
for(var e,g,h,i,j="",l={},n=0,r=0,q=c.length;r<q;r++){h=c[r];if(h[0]=="M"){e=+h[1];g=+h[2]}else{i=Ib(e,g,h[1],h[2],h[3],h[4],h[5],h[6]);if(n+i>d){if(b&&!l.start){e=jb(e,g,h[1],h[2],h[3],h[4],h[5],h[6],d-n);j+=["C",e.start.x,e.start.y,e.m.x,e.m.y,e.x,e.y];if(f)return j;l.start=j;j=["M",e.x,e.y+"C",e.n.x,e.n.y,e.end.x,e.end.y,h[5],h[6]][Q]();n+=i;e=+h[5];g=+h[6];continue}if(!a&&!b){e=jb(e,g,h[1],h[2],h[3],h[4],h[5],h[6],d-n);return{x:e.x,y:e.y,alpha:e.alpha}}}n+=i;e=+h[5];g=+h[6]}j+=h}l.end=j;e=a?n:
b?l:m.findDotsAtSegment(e,g,h[1],h[2],h[3],h[4],h[5],h[6],1);e.alpha&&(e={x:e.x,y:e.y,alpha:e.alpha});return e}}var Ib=T(function(a,b,c,d,f,e,g,h){for(var i={x:0,y:0},j=0,l=0;l<1.01;l+=0.01){var n=la(a,b,c,d,f,e,g,h,l);l&&(j+=D(D(i.x-n.x,2)+D(i.y-n.y,2),0.5));i=n}return j}),kb=Ha(1),za=Ha(),Ia=Ha(0,1);u[p].getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return kb(this.attrs.path)}};u[p].getPointAtLength=function(a){if(this.type=="path")return za(this.attrs.path,
a)};u[p].getSubpath=function(a,b){if(this.type=="path"){if(w.abs(this.getTotalLength()-b)<1.0E-6)return Ia(this.attrs.path,a).end;b=Ia(this.attrs.path,b,1);return a?Ia(b,a).end:b}};m.easing_formulas={linear:function(a){return a},"<":function(a){return D(a,3)},">":function(a){return D(a-1,3)+1},"<>":function(a){a*=2;if(a<1)return D(a,3)/2;a-=2;return(D(a,3)+2)/2},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==
0||a==1)return a;var b=0.3,c=b/4;return D(2,-10*a)*w.sin((a-c)*2*w.PI/b)+1},bounce:function(a){var b=7.5625,c=2.75;if(a<1/c)a=b*a*a;else if(a<2/c){a-=1.5/c;a=b*a*a+0.75}else if(a<2.5/c){a-=2.25/c;a=b*a*a+0.9375}else{a-=2.625/c;a=b*a*a+0.984375}return a}};var S={length:0};function lb(){var a=+new Date;for(var b in S)if(b!="length"&&S[z](b)){var c=S[b];if(c.stop||c.el.removed){delete S[b];S[o]--}else{var d=a-c.start,f=c.ms,e=c.easing,g=c.from,h=c.diff,i=c.to,j=c.t,l=c.prev||0,n=c.el,r=c.callback,q=
{},k;if(d<f){r=m.easing_formulas[e]?m.easing_formulas[e](d/f):d/f;for(var t in g)if(g[z](t)){switch(Ea[t]){case "along":k=r*f*h[t];i.back&&(k=i.len-k);e=za(i[t],k);n.translate(h.sx-h.x||0,h.sy-h.y||0);h.x=e.x;h.y=e.y;n.translate(e.x-h.sx,e.y-h.sy);i.rot&&n.rotate(h.r+e.alpha,e.x,e.y);break;case O:k=+g[t]+r*f*h[t];break;case "colour":k="rgb("+[Ja(F(g[t].r+r*f*h[t].r)),Ja(F(g[t].g+r*f*h[t].g)),Ja(F(g[t].b+r*f*h[t].b))][Q](",")+")";break;case "path":k=[];e=0;for(var L=g[t][o];e<L;e++){k[e]=[g[t][e][0]];
for(var B=1,x=g[t][e][o];B<x;B++)k[e][B]=+g[t][e][B]+r*f*h[t][e][B];k[e]=k[e][Q](P)}k=k[Q](P);break;case "csv":switch(t){case "translation":k=h[t][0]*(d-l);e=h[t][1]*(d-l);j.x+=k;j.y+=e;k=k+P+e;break;case "rotation":k=+g[t][0]+r*f*h[t][0];g[t][1]&&(k+=","+g[t][1]+","+g[t][2]);break;case "scale":k=[+g[t][0]+r*f*h[t][0],+g[t][1]+r*f*h[t][1],2 in i[t]?i[t][2]:s,3 in i[t]?i[t][3]:s][Q](P);break;case "clip-rect":k=[];for(e=4;e--;)k[e]=+g[t][e]+r*f*h[t][e];break}break}q[t]=k}n.attr(q);n._run&&n._run.call(n)}else{if(i.along){e=
za(i.along,i.len*!i.back);n.translate(h.sx-(h.x||0)+e.x-h.sx,h.sy-(h.y||0)+e.y-h.sy);i.rot&&n.rotate(h.r+e.alpha,e.x,e.y)}(j.x||j.y)&&n.translate(-j.x,-j.y);i.scale&&(i.scale+=s);n.attr(i);delete S[b];S[o]--;n.in_animation=null;m.is(r,"function")&&r.call(n)}c.prev=d}}m.svg&&n&&n.paper&&n.paper.safari();S[o]&&X.setTimeout(lb)}function Ja(a){return Y($(a,255),0)}function ya(a,b){if(a==null)return{x:this._.tx,y:this._.ty,toString:ib};this._.tx+=+a;this._.ty+=+b;switch(this.type){case "circle":case "ellipse":this.attr({cx:+a+
this.attrs.cx,cy:+b+this.attrs.cy});break;case "rect":case "image":case "text":this.attr({x:+a+this.attrs.x,y:+b+this.attrs.y});break;case "path":var c=Oa(this.attrs.path);c[0][1]+=+a;c[0][2]+=+b;this.attr({path:c});break}return this}u[p].animateWith=function(a,b,c,d,f){S[a.id]&&(b.start=S[a.id].start);return this.animate(b,c,d,f)};u[p].animateAlong=mb();u[p].animateAlongBack=mb(1);function mb(a){return function(b,c,d,f){var e={back:a};m.is(d,"function")?(f=d):(e.rot=d);b&&b.constructor==u&&(b=b.attrs.path);
b&&(e.along=b);return this.animate(e,c,f)}}u[p].onAnimation=function(a){this._run=a||0;return this};u[p].animate=function(a,b,c,d){if(m.is(c,"function")||!c)d=c||null;var f={},e={},g={};for(var h in a)if(a[z](h))if(Ea[z](h)){f[h]=this.attr(h);f[h]==null&&(f[h]=qa[h]);e[h]=a[h];switch(Ea[h]){case "along":var i=kb(a[h]),j=za(a[h],i*!!a.back),l=this.getBBox();g[h]=i/b;g.tx=l.x;g.ty=l.y;g.sx=j.x;g.sy=j.y;e.rot=a.rot;e.back=a.back;e.len=i;a.rot&&(g.r=A(this.rotate())||0);break;case O:g[h]=(e[h]-f[h])/
b;break;case "colour":f[h]=m.getRGB(f[h]);i=m.getRGB(e[h]);g[h]={r:(i.r-f[h].r)/b,g:(i.g-f[h].g)/b,b:(i.b-f[h].b)/b};break;case "path":i=ua(f[h],e[h]);f[h]=i[0];j=i[1];g[h]=[];i=0;for(l=f[h][o];i<l;i++){g[h][i]=[0];for(var n=1,r=f[h][i][o];n<r;n++)g[h][i][n]=(j[i][n]-f[h][i][n])/b}break;case "csv":j=(a[h]+s)[H](V);i=(f[h]+s)[H](V);switch(h){case "translation":f[h]=[0,0];g[h]=[j[0]/b,j[1]/b];break;case "rotation":f[h]=i[1]==j[1]&&i[2]==j[2]?i:[0,j[1],j[2]];g[h]=[(j[0]-f[h][0])/b,0,0];break;case "scale":a[h]=
j;f[h]=(f[h]+s)[H](V);g[h]=[(j[0]-f[h][0])/b,(j[1]-f[h][1])/b,0,0];break;case "clip-rect":f[h]=(f[h]+s)[H](V);g[h]=[];for(i=4;i--;)g[h][i]=(j[i]-f[h][i])/b;break}e[h]=j}}this.stop();this.in_animation=1;S[this.id]={start:a.start||+new Date,ms:b,easing:c,from:f,diff:g,to:e,el:this,callback:d,t:{x:0,y:0}};++S[o]==1&&lb();return this};u[p].stop=function(){S[this.id]&&S[o]--;delete S[this.id];return this};u[p].translate=function(a,b){return this.attr({translation:a+" "+b})};u[p][N]=function(){return"Rapha\u00ebl\u2019s object"};
m.ae=S;function Z(a){this.items=[];this[o]=0;this.type="set";if(a)for(var b=0,c=a[o];b<c;b++)if(a[b]&&(a[b].constructor==u||a[b].constructor==Z)){this[this.items[o]]=this.items[this.items[o]]=a[b];this[o]++}}Z[p][E]=function(){for(var a,b,c=0,d=arguments[o];c<d;c++)if((a=arguments[c])&&(a.constructor==u||a.constructor==Z)){b=this.items[o];this[b]=this.items[b]=a;this[o]++}return this};Z[p].pop=function(){delete this[this[o]--];return this.items.pop()};for(var Ka in u[p])if(u[p][z](Ka))Z[p][Ka]=function(a){return function(){for(var b=
0,c=this.items[o];b<c;b++)this.items[b][a][K](this.items[b],arguments);return this}}(Ka);Z[p].attr=function(a,b){if(a&&m.is(a,U)&&m.is(a[0],"object")){b=0;for(var c=a[o];b<c;b++)this.items[b].attr(a[b])}else{c=0;for(var d=this.items[o];c<d;c++)this.items[c].attr(a,b)}return this};Z[p].animate=function(a,b,c,d){(m.is(c,"function")||!c)&&(d=c||null);var f=this.items[o],e=f,g,h=this,i;d&&(i=function(){!--f&&d.call(h)});c=m.is(c,ea)?c:i;for(g=this.items[--e].animate(a,b,c,i);e--;)this.items[e].animateWith(g,
a,b,c,i);return this};Z[p].insertAfter=function(a){for(var b=this.items[o];b--;)this.items[b].insertAfter(a);return this};Z[p].getBBox=function(){for(var a=[],b=[],c=[],d=[],f=this.items[o];f--;){var e=this.items[f].getBBox();a[E](e.x);b[E](e.y);c[E](e.x+e.width);d[E](e.y+e.height)}a=$[K](0,a);b=$[K](0,b);return{x:a,y:b,width:Y[K](0,c)-a,height:Y[K](0,d)-b}};Z[p].clone=function(a){a=new Z;for(var b=0,c=this.items[o];b<c;b++)a[E](this.items[b].clone());return a};m.registerFont=function(a){if(!a.face)return a;
this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)if(a.face[z](d))b.face[d]=a.face[d];if(this.fonts[c])this.fonts[c][E](b);else this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=da(a.face["units-per-em"],10);for(var f in a.glyphs)if(a.glyphs[z](f)){c=a.glyphs[f];b.glyphs[f]={w:c.w,k:{},d:c.d&&"M"+c.d[I](/[mlcxtrv]/g,function(g){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[g]||"M"})+"z"};if(c.k)for(var e in c.k)if(c[z](e))b.glyphs[f].k[e]=c.k[e]}}return a};
G[p].getFont=function(a,b,c,d){d=d||"normal";c=c||"normal";b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400;if(m.fonts){var f=m.fonts[a];if(!f){a=new RegExp("(^|\\s)"+a[I](/[^\w\d\s+!~.:_-]/g,s)+"(\\s|$)","i");for(var e in m.fonts)if(m.fonts[z](e))if(a.test(e)){f=m.fonts[e];break}}var g;if(f){e=0;for(a=f[o];e<a;e++){g=f[e];if(g.face["font-weight"]==b&&(g.face["font-style"]==c||!g.face["font-style"])&&g.face["font-stretch"]==d)break}}return g}};G[p].print=function(a,b,c,d,f,e){e=e||"middle";
var g=this.set(),h=(c+s)[H](s),i=0;m.is(d,c)&&(d=this.getFont(d));if(d){c=(f||16)/d.face["units-per-em"];var j=d.face.bbox.split(V);f=+j[0];e=+j[1]+(e=="baseline"?j[3]-j[1]+ +d.face.descent:(j[3]-j[1])/2);j=0;for(var l=h[o];j<l;j++){var n=j&&d.glyphs[h[j-1]]||{},r=d.glyphs[h[j]];i+=j?(n.w||d.w)+(n.k&&n.k[h[j]]||0):0;r&&r.d&&g[E](this.path(r.d).attr({fill:"#000",stroke:"none",translation:[i,0]}))}g.scale(c,c,f,e).translate(a-f,b-e)}return g};var Jb=/\{(\d+)\}/g;m.format=function(a,b){var c=m.is(b,
U)?[0][M](b):arguments;a&&m.is(a,ea)&&c[o]-1&&(a=a[I](Jb,function(d,f){return c[++f]==null?s:c[f]}));return a||s};m.ninja=function(){La.was?(Raphael=La.is):delete Raphael;return m};m.el=u[p];return m}();




/*
 js-mindmap

 Copyright (c) 2008/09/10 Kenneth Kufluk http://kenneth.kufluk.com/

 MIT (X11) license

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

*/

/*
  Things to do:
    - remove Lines - NO - they seem harmless enough!
    - add better "make active" methods
    - remove the "root node" concept.  Tie nodes to elements better, so we can check if a parent element is root

    - allow progressive exploration
      - allow easy supplying of an ajax param for loading new kids and a loader anim
    - allow easy exploration of a ul or ol to find nodes
    - limit to an area
    - allow more content (div instead of an a)
    - test multiple canvases
    - Hidden children should not be bounded
    - Layout children in circles
    - Add/Edit nodes
    - Resize event
    - incorporate widths into the forces, so left boundaries push on right boundaries


  Make demos:
    - amazon explore
    - directgov explore
    - thesaurus
    - themes

*/

(function ($) {
  'use strict';

  var TIMEOUT = 4,  // movement timeout in seconds
    CENTRE_FORCE = 3,  // strength of attraction to the centre by the active node
    Node,
    Line;

  // Define all Node related functions.
  Node = function (obj, name, parent, opts) {
    this.obj = obj;
    this.options = obj.options;

    this.name = name;
    this.href = opts.href;
    if (opts.url) {
      this.url = opts.url;
    }
    if (opts.color) {
      this.color = opts.color;
    }
    if (opts.size) {
      this.size = 'size' + opts.size;
    }
    // else { this.size = "100px"; }



    // create the element for display
    // this.el = $('<a href="' + this.href + '" style="width: ' + this.size + '; height: ' + this.size + ';"><div><span>' + this.name + '</span></div></a>').addClass('node').addClass(this.color);
    this.el = $('<a href="' + this.href + '"><div><span>' + this.name + '</span></div></a>').addClass('node').addClass(this.color).addClass(this.size);
    this.el.id = Math.random().toString(36).slice(2)
    $('body').prepend(this.el);


    if (!parent) {
      obj.activeNode = this;
      this.el.addClass('active root');
    } else {
      obj.lines[obj.lines.length] = new Line(obj, this, parent);
    }
    this.parent = parent;
    this.children = [];
    if (this.parent) {
      this.parent.children.push(this);
    }

    // animation handling
    this.moving = false;
    this.moveTimer = 0;
    this.obj.movementStopped = false;
    this.visible = true;
    this.x = 1;
    this.y = 1;
    this.dx = 0;
    this.dy = 0;
    this.hasPosition = false;

    this.content = []; // array of content elements to display onclick;

    this.el.css('position', 'absolute');

    var thisnode = this;

    this.el.click(function () {
      if (obj.activeNode) {
     //obj.activeNode.el.removeClass('active');
        if (obj.activeNode.parent) {
      //    obj.activeNode.parent.el.removeClass('activeparent');
        }
      }
      if (typeof opts.onclick === 'function') {
        opts.onclick(thisnode);
      }
      obj.activeNode = thisnode;
      //obj.activeNode.el.addClass('active');
      if (obj.activeNode.parent) {
        obj.activeNode.parent.el.addClass('activeparent');
      }
      if(options.animate_to_center) {
      obj.root.animateToStatic();
      }
      return false;
    });

  };

  // ROOT NODE ONLY:  control animation loop
  Node.prototype.animateToStatic = function () {

    clearTimeout(this.moveTimer);
    // stop the movement after a certain time
    var thisnode = this;
    this.moveTimer = setTimeout(function () {
      //stop the movement
      thisnode.obj.movementStopped = true;
    }, TIMEOUT * 1000);

    if (this.moving) {
      return;
    }
    this.moving = true;
    this.obj.movementStopped = false;
    this.animateLoop();
  };

  // ROOT NODE ONLY:  animate all nodes (calls itself recursively)
  Node.prototype.animateLoop = function () {
    var i, len, mynode = this;
    this.obj.canvas.clear();
    for (i = 0, len = this.obj.lines.length; i < len; i++) {
      this.obj.lines[i].updatePosition();
    }
    if (this.findEquilibrium() || this.obj.movementStopped) {
      this.moving = false;
      return;
    }
    setTimeout(function () {
      mynode.animateLoop();
    }, 10);
  };

  // find the right position for this node
  Node.prototype.findEquilibrium = function () {
    var i, len, stable = true;
    stable = this.display() && stable;
    for (i = 0, len = this.children.length; i < len; i++) {
      stable = this.children[i].findEquilibrium() && stable;
    }
    return stable;
  };

  //Display this node, and its children
  Node.prototype.display = function (depth) {
    var parent = this,
      stepAngle,
      angle;

    depth = depth || 0;

    if (this.visible) {
      // if: I'm not active AND my parent's not active AND my children aren't active ...
      if (this.obj.activeNode !== this && this.obj.activeNode !== this.parent && this.obj.activeNode.parent !== this) {
        // TODO hide me!
        this.el.show(); //************************CHNAGE TO hide() to only have some open
        this.visible = true; //************************CHNAGE TO false to hide links
      }
    } else {
      if (this.obj.activeNode === this || this.obj.activeNode === this.parent || this.obj.activeNode.parent === this) {
        this.el.show();
        this.visible = true;
      }
    }
    this.drawn = true;
    // am I positioned?  If not, position me.
    if (!this.hasPosition) {
      this.x = this.options.mapArea.x / 2;
      this.y = this.options.mapArea.y / 2;
      this.el.css({'left': this.x + "px", 'top': this.y + "px"});
      this.hasPosition = true;
    }
    // are my children positioned?  if not, lay out my children around me
    stepAngle = Math.PI * 2 / this.children.length;
    $.each(this.children, function (index) {
      if (!this.hasPosition) {
        if (!this.options.showProgressive || depth <= 1) {
          angle = index * stepAngle;
          this.x = (50 * Math.cos(angle)) + parent.x;
          this.y = (50 * Math.sin(angle)) + parent.y;
          this.hasPosition = true;
          this.el.css({'left': this.x + "px", 'top': this.y + "px"});
        }
      }
    });
    // update my position
    return this.updatePosition();
  };

  // updatePosition returns a boolean stating whether it's been static
  Node.prototype.updatePosition = function () {
    var forces, showx, showy;

    //apply accelerations
    forces = this.getForceVector();
    this.dx += forces.x * this.options.timeperiod;
    this.dy += forces.y * this.options.timeperiod;

    // damp the forces
    this.dx = this.dx * this.options.damping;
    this.dy = this.dy * this.options.damping;

    //ADD MINIMUM SPEEDS
    if (Math.abs(this.dx) < this.options.minSpeed) {
      this.dx = 0;
    }
    if (Math.abs(this.dy) < this.options.minSpeed) {
      this.dy = 0;
    }
    if (Math.abs(this.dx) + Math.abs(this.dy) === 0) {
      return true;
    }
    //apply velocity vector
    this.x += this.dx * this.options.timeperiod;
    this.y += this.dy * this.options.timeperiod;
    this.x = Math.min(this.options.mapArea.x, Math.max(1, this.x));
    this.y = Math.min(this.options.mapArea.y, Math.max(1, this.y));
    // display
    showx = this.x - (this.el.width() / 2);
    showy = this.y - (this.el.height() / 2) - 10;
    this.el.css({'left': showx + "px", 'top': showy + "px"});
    return false;
  };

  Node.prototype.getForceVector = function () {
    var i, x1, y1, xsign, dist, theta, f,
      xdist, rightdist, bottomdist, otherend,
      fx = 0,
      fy = 0,
      nodes = this.obj.nodes,
      lines = this.obj.lines;

    // Calculate the repulsive force from every other node
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i] === this) {
        continue;
      }
      if (!nodes[i].visible) {
        continue;
      }
      // Repulsive force (coulomb's law)
      x1 = (nodes[i].x - this.x);
      y1 = (nodes[i].y - this.y);
      //adjust for variable node size
//    var nodewidths = (($(nodes[i]).width() + this.el.width())/2);
      dist = Math.sqrt((x1 * x1) + (y1 * y1));
//      var myrepulse = this.options.repulse;
//      if (this.parent==nodes[i]) myrepulse=myrepulse*10;  //parents stand further away
      if (Math.abs(dist) < 500) {
        if (x1 === 0) {
          theta = Math.PI / 2;
          xsign = 0;
        } else {
          theta = Math.atan(y1 / x1);
          xsign = x1 / Math.abs(x1);
        }
        // force is based on radial distance
        f = (this.options.repulse * 500) / (dist * dist);
        fx += -f * Math.cos(theta) * xsign;
        fy += -f * Math.sin(theta) * xsign;
      }
    }

    // add repulsive force of the "walls"
    //left wall
    xdist = this.x + this.el.width();
    f = (this.options.wallrepulse * 500) / (xdist * xdist);
    fx += Math.min(2, f);
    //right wall
    rightdist = (this.options.mapArea.x - xdist);
    f = -(this.options.wallrepulse * 500) / (rightdist * rightdist);
    fx += Math.max(-2, f);
    //top wall
    f = (this.options.wallrepulse * 500) / (this.y * this.y);
    fy += Math.min(2, f);
    //bottom wall
    bottomdist = (this.options.mapArea.y - this.y);
    f = -(this.options.wallrepulse * 500) / (bottomdist * bottomdist);
    fy += Math.max(-2, f);

    // for each line, of which I'm a part, add an attractive force.
    for (i = 0; i < lines.length; i++) {
      otherend = null;
      if (lines[i].start === this) {
        otherend = lines[i].end;
      } else if (lines[i].end === this) {
        otherend = lines[i].start;
      } else {
        continue;
      }
      // Ignore the pull of hidden nodes
      if (!otherend.visible) {
        continue;
      }
      // Attractive force (hooke's law)
      x1 = (otherend.x - this.x);
      y1 = (otherend.y - this.y);
      dist = Math.sqrt((x1 * x1) + (y1 * y1));
      if (Math.abs(dist) > 0) {
        if (x1 === 0) {
          theta = Math.PI / 2;
          xsign = 0;
        }
        else {
          theta = Math.atan(y1 / x1);
          xsign = x1 / Math.abs(x1);
        }
        // force is based on radial distance
        f = (this.options.attract * dist) / 10000;
        fx += f * Math.cos(theta) * xsign;
        fy += f * Math.sin(theta) * xsign;
      }
    }

    // if I'm active, attract me to the centre of the area
    if (this.obj.activeNode === this) {
      // Attractive force (hooke's law)
      otherend = this.options.mapArea;
      x1 = ((otherend.x / 2) - this.options.centreOffset - this.x);
      y1 = ((otherend.y / 2) - this.y);
      dist = Math.sqrt((x1 * x1) + (y1 * y1));
      if (Math.abs(dist) > 0) {
        if (x1 === 0) {
          theta = Math.PI / 2;
          xsign = 0;
        } else {
          xsign = x1 / Math.abs(x1);
          theta = Math.atan(y1 / x1);
        }
        // force is based on radial distance
        f = (0.1 * this.options.attract * dist * CENTRE_FORCE) / 1000;
        fx += f * Math.cos(theta) * xsign;
        fy += f * Math.sin(theta) * xsign;
      }
    }

    if (Math.abs(fx) > this.options.maxForce) {
      fx = this.options.maxForce * (fx / Math.abs(fx));
    }
    if (Math.abs(fy) > this.options.maxForce) {
      fy = this.options.maxForce * (fy / Math.abs(fy));
    }
    return {
      x: fx,
      y: fy
    };
  };

  Node.prototype.removeNode = function () {
    var i,
      oldnodes = this.obj.nodes,
      oldlines = this.obj.lines;

    for (i = 0; i < this.children.length; i++) {
      this.children[i].removeNode();
    }

    this.obj.nodes = [];
    for (i = 0; i < oldnodes.length; i++) {
      if (oldnodes[i] === this) {
        continue;
      }
      this.obj.nodes.push(oldnodes[i]);
    }

    this.obj.lines = [];
    for (i = 0; i < oldlines.length; i++) {
      if (oldlines[i].start === this) {
        continue;
      } else if (oldlines[i].end === this) {
        continue;
      }
      this.obj.lines.push(oldlines[i]);
    }

    this.el.remove();
  };



  // Define all Line related functions.
  Line = function (obj, startNode, endNode) {
    this.obj = obj;
    this.options = obj.options;
    this.start = startNode;
    this.colour = "blue";
    this.size = "thick";
    this.end = endNode;
  };

  Line.prototype.updatePosition = function () {
    if (!this.options.showSublines && (!this.start.visible || !this.end.visible)) {
      return;
    }
    this.size = (this.start.visible && this.end.visible) ? "thick" : "thin";
    this.color = (this.obj.activeNode.parent === this.start || this.obj.activeNode.parent === this.end) ? "red" : "blue";
    this.strokeStyle = "#000";

    this.obj.canvas.path("M" + this.start.x + ' ' + this.start.y + "L" + this.end.x + ' ' + this.end.y).attr({'stroke': this.strokeStyle, 'opacity': 1, 'stroke-width': '2px'});
  };

  $.fn.addNode = function (parent, name, options) {
    var obj = this[0],
      node = obj.nodes[obj.nodes.length] = new Node(obj, name, parent, options);
    obj.root.animateToStatic();
    return node;
  };

  $.fn.addRootNode = function (name, opts) {
    var node = this[0].nodes[0] = new Node(this[0], name, null, opts);
    this[0].root = node;
    return node;
  };

  $.fn.removeNode = function (name) {
    return this.each(function () {
//      if (!!this.mindmapInit) return false;
      //remove a node matching the anme
//      alert(name+' removed');
    });
  };

  $.fn.mindmap = function (options) {
    // Define default settings.
    options = $.extend({
      attract: 6,
      repulse: 6,
      damping: 0.55,
      timeperiod: 10,
      wallrepulse: 0.4,
      mapArea: {
        x: -1,
        y: -1
      },
      canvasError: 'alert',
      minSpeed: 0.05,
      maxForce: 0.1,
      showSublines: false,
      updateIterationCount: 20,
      showProgressive: true,
      centreOffset: 100,
      timer: 0
    }, options);

    var $window = $(window);

    return this.each(function () {
      var mindmap = this;

      this.mindmapInit = true;
      this.nodes = [];
      this.lines = [];
      this.activeNode = null;
      this.options = options;
      this.animateToStatic = function () {
        this.root.animateToStatic();
      };
      $window.resize(function () {
        mindmap.animateToStatic();
      });

      //canvas
      if (options.mapArea.x === -1) {
        options.mapArea.x = $window.width();
      }
      if (options.mapArea.y === -1) {
        options.mapArea.y = $window.height();
      }
      //create drawing area
      this.canvas = Raphael(0, 0, options.mapArea.x, options.mapArea.y);

      // Add a class to the object, so that styles can be applied
      $(this).addClass('js-mindmap-active');

      // Add keyboard support (thanks to wadefs)
      $(this).keyup(function (event) {
        var newNode, i, activeParent = mindmap.activeNode.parent;
        switch (event.which) {
        case 33: // PgUp
        case 38: // Up, move to parent
          if (activeParent) {
            activeParent.el.click();
          }
          break;
        case 13: // Enter (change to insert a sibling)
        case 34: // PgDn
        case 40: // Down, move to first child
          if (mindmap.activeNode.children.length) {
            mindmap.activeNode.children[0].el.click();
          }
          break;
        case 37: // Left, move to previous sibling
          if (activeParent) {
            newNode = null;
            if (activeParent.children[0] === mindmap.activeNode) {
              newNode = activeParent.children[activeParent.children.length - 1];
            } else {
              for (i = 1; i < activeParent.children.length; i++) {
                if (activeParent.children[i] === mindmap.activeNode) {
                  newNode = activeParent.children[i - 1];
                }
              }
            }
            if (newNode) {
              newNode.el.click();
            }
          }
          break;
        case 39: // Right, move to next sibling
          if (activeParent) {
            newNode = null;
            if (activeParent.children[activeParent.children.length - 1] === mindmap.activeNode) {
              newNode = activeParent.children[0];
            } else {
              for (i = activeParent.children.length - 2; i >= 0; i--) {
                if (activeParent.children[i] === mindmap.activeNode) {
                  newNode = activeParent.children[i + 1];
                }
              }
            }
            if (newNode) {
              newNode.el.click();
            }
          }
          break;
        case 45: // Ins, insert a child
          break;
        case 46: // Del, delete this node
          break;
        case 27: // Esc, cancel insert
          break;
        case 83: // 'S', save
          break;
        }
        return false;
      });

    });
  };
}($));

// load the mindmap
$(document).ready(function() {
  // enable the mindmap in the body
  $('body').mindmap();

  // add the data to the mindmap
  var root = $('body>ul>li').get(0).mynode = $('body').addRootNode($('body>ul>li>a').text(), {
    href:'/',
    url:'/',
    size:$('body>ul>li>a').attr('size'),
    color:$('body>ul>li>a').attr('color'),
    onclick:function(node) {
      $(node.obj.activeNode.content).each(function() {
        this.hide();
      });
    }
  });

  $('body>ul>li').hide();

  var addLI = function() {
    var parentnode = $(this).parents('li').get(0);
    if (typeof(parentnode)=='undefined') parentnode=root;
      else parentnode=parentnode.mynode;
    
    this.mynode = $('body').addNode(parentnode, $('a:eq(0)',this).text(), {
      href:$('a:eq(0)',this).attr('href'),
      size:$('a:eq(0)',this).attr('size'),
      color:$('a:eq(0)',this).attr('color'),
      onclick:function(node) {
           parent.az.hold_value.clicked_node_data = node
      }
    })
        /*
           $(node.obj.activeNode.content).each(function() {
         // this.hide();
        });
        $(node.content).each(function() {
         // this.show();
        });
      }
    });
    */
  //  $(this).hide();
    $('>ul>li', this).each(addLI);
  };

  $('body>ul>li>ul').each(function() { 
    $('>li', this).each(addLI);
  });

});   
}