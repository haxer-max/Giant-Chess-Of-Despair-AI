(this["webpackJsonpgiant-chess-of-dispair-ai"]=this["webpackJsonpgiant-chess-of-dispair-ai"]||[]).push([[0],{15:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),r=s(19),o=s.n(r),n=(s(15),s(20)),c=s(21),h=s(24),u=s(23),l=(s(29),s(1)),d={1:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",2:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",3:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",4:"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",5:"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg","-1":"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg","-2":"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg","-3":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg","-4":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg","-5":"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"};function p(e){return Object(l.jsxs)("div",{className:"box",style:{backgroundColor:function(){var t=Math.floor(e.colour/15),s=e.colour%15;return(s<5||s>9)&&t<5||s>4&&s<10&&t>4?e.colour%2===1?"#eae9d2":"#4b7399":e.colour%2===1?"#eeeed2":"#769656"}(),boxShadow:function(){switch(e.w){case 1:return"inset 0px 8px 0px 0px black";case 2:return"inset 8px 0px 0px 0px black";case 3:return"inset 0px -8px 0px 0px black";case 4:return"inset -8px 0px 0px 0px black";default:return"inset 0px 0px 0px 0px black"}}()},onClick:e.onClick,children:[function(){if(e.isgreen)return Object(l.jsx)("div",{style:{position:"absolute",left:"15px",top:"15px",height:30,width:30,borderRadius:"100%",backgroundColor:"rgba(102,51,153,0.5)"}})}(),function(){if(0!==e.v)return Object(l.jsx)("img",{src:d[e.v]})}()]})}function f(e){for(var t=0,s=0;s<10;s++)for(var a=0;a<15;a++)1===e[s][a]?t+=40:2==e[s][a]||3==e[s][a]?t+=35:4==e[s][a]&&(t+=70);return 255-t}function v(e){for(var t=0,s=0;s<10;s++)for(var a=0;a<15;a++)5===e[s][a]?t+=40:6==e[s][a]||7==e[s][a]?t+=35:8==e[s][a]&&(t+=70);return 255-t}var b=function(e,t,s,a,i){var r=e+1;r<10&&(s[r][t]>0||s[r-1][t]<0||1===a[r][t]||3===a[r-1][t]||i.push(15*r+t)),(r=e-1)>-1&&(s[r][t]>0||s[r+1][t]<0||3===a[r][t]||1===a[r+1][t]||i.push(15*r+t)),(r=t+1)<15&&(s[e][r]>0||s[e][r-1]<0||2===a[e][r]||4===a[e][r-1]||i.push(15*e+r)),(r=t-1)>-1&&(s[e][r]>0||s[e][r+1]<0||4===a[e][r]||2===a[e][r+1]||i.push(15*e+r)),1+e<10&&1+t<15&&!(s[e+1][t+1]>0||s[e+1-1][t+1-1]<0)&&(1!==a[e+1][t+1]&&3!==a[e+1-1][t+1]||1!==a[e+1][t+1-1]&&3!==a[e+1-1][t+1-1])&&(1!==a[e+1][t+1]&&3!==a[e+1-1][t+1]||2!==a[e+1][t+1]&&4!==a[e+1][t+1-1])&&(1!==a[e+1][t+1-1]&&3!==a[e+1-1][t+1-1]||2!==a[e+1-1][t+1]&&4!==a[e+1-1][t+1-1])&&(2!==a[e+1][t+1]&&4!==a[e+1][t+1-1]||2!==a[e+1-1][t+1]&&4!==a[e+1-1][t+1-1])&&i.push(15*(e+1)+t+1),-1+e>-1&&-1+t>-1&&!(s[e-1][t-1]>0||s[e-1+1][t-1+1]<0)&&(3!==a[e-1][t-1]&&1!==a[e-1+1][t-1]||3!==a[e-1][t-1+1]&&1!==a[e-1+1][t-1+1])&&(3!==a[e-1][t-1]&&1!==a[e-1+1][t-1]||4!==a[e-1][t-1]&&2!==a[e-1][t-1+1])&&(3!==a[e-1][t-1+1]&&1!==a[e-1+1][t-1+1]||4!==a[e-1+1][t-1]&&2!==a[e-1+1][t-1+1])&&(4!==a[e-1][t-1]&&2!==a[e-1][t-1+1]||4!==a[e-1+1][t-1]&&2!==a[e-1+1][t-1+1])&&i.push(15*(e-1)+t-1),1+e<10&&-1+t>-1&&!(s[e+1][t-1]>0||s[e+1-1][t-1+1]<0)&&(1!==a[e+1][t-1]&&3!==a[e+1-1][t-1]||1!==a[e+1][t-1+1]&&3!==a[e+1-1][t-1+1])&&(1!==a[e+1][t-1]&&3!==a[e+1-1][t-1]||4!==a[e+1][t-1]&&2!==a[e+1][t-1+1])&&(1!==a[e+1][t-1+1]&&3!==a[e+1-1][t-1+1]||4!==a[e+1-1][t-1]&&2!==a[e+1-1][t-1+1])&&(4!==a[e+1][t-1]&&2!==a[e+1][t-1+1]||4!==a[e+1-1][t-1]&&2!==a[e+1-1][t-1+1])&&i.push(15*(e+1)+t-1),-1+e>-1&&1+t<15&&!(s[e-1][t+1]>0||s[e-1+1][t+1-1]<0)&&(3!==a[e-1][t+1]&&1!==a[e-1+1][t+1]||3!==a[e-1][t+1-1]&&1!==a[e-1+1][t+1-1])&&(3!==a[e-1][t+1]&&1!==a[e-1+1][t+1]||2!==a[e-1][t+1]&&4!==a[e-1][t+1-1])&&(3!==a[e-1][t+1-1]&&1!==a[e-1+1][t+1-1]||2!==a[e-1+1][t+1]&&4!==a[e-1+1][t+1-1])&&(2!==a[e-1][t+1]&&4!==a[e-1][t+1-1]||2!==a[e-1+1][t+1]&&4!==a[e-1+1][t+1-1])&&i.push(15*(e-1)+t+1)},j=function(e,t,s,a,i){var r=e+1;r<10&&(s[r-1][t]>0||s[r][t]<0||1===a[r][t]||3===a[r-1][t]||i.push(15*r+t)),(r=e-1)>-1&&(s[r+1][t]>0||s[r][t]<0||3===a[r][t]||1===a[r+1][t]||i.push(15*r+t)),(r=t+1)<15&&(s[e][r-1]>0||s[e][r]<0||2===a[e][r]||4===a[e][r-1]||i.push(15*e+r)),(r=t-1)>-1&&(s[e][r+1]>0||s[e][r]<0||4===a[e][r]||2===a[e][r+1]||i.push(15*e+r)),1+e<10&&1+t<15&&!(s[e+1-1][t+1-1]>0||s[e+1][t+1]<0)&&(1!==a[e+1][t+1]&&3!==a[e+1-1][t+1]||1!==a[e+1][t+1-1]&&3!==a[e+1-1][t+1-1])&&(1!==a[e+1][t+1]&&3!==a[e+1-1][t+1]||2!==a[e+1][t+1]&&4!==a[e+1][t+1-1])&&(1!==a[e+1][t+1-1]&&3!==a[e+1-1][t+1-1]||2!==a[e+1-1][t+1]&&4!==a[e+1-1][t+1-1])&&(2!==a[e+1][t+1]&&4!==a[e+1][t+1-1]||2!==a[e+1-1][t+1]&&4!==a[e+1-1][t+1-1])&&i.push(15*(e+1)+t+1),-1+e>-1&&-1+t>-1&&!(s[e-1+1][t-1+1]>0||s[e-1][t-1]<0)&&(3!==a[e-1][t-1]&&1!==a[e-1+1][t-1]||3!==a[e-1][t-1+1]&&1!==a[e-1+1][t-1+1])&&(3!==a[e-1][t-1]&&1!==a[e-1+1][t-1]||4!==a[e-1][t-1]&&2!==a[e-1][t-1+1])&&(3!==a[e-1][t-1+1]&&1!==a[e-1+1][t-1+1]||4!==a[e-1+1][t-1]&&2!==a[e-1+1][t-1+1])&&(4!==a[e-1][t-1]&&2!==a[e-1][t-1+1]||4!==a[e-1+1][t-1]&&2!==a[e-1+1][t-1+1])&&i.push(15*(e-1)+t-1),1+e<10&&-1+t>-1&&!(s[e+1-1][t-1+1]>0||s[e+1][t-1]<0)&&(1!==a[e+1][t-1]&&3!==a[e+1-1][t-1]||1!==a[e+1][t-1+1]&&3!==a[e+1-1][t-1+1])&&(1!==a[e+1][t-1]&&3!==a[e+1-1][t-1]||4!==a[e+1][t-1]&&2!==a[e+1][t-1+1])&&(1!==a[e+1][t-1+1]&&3!==a[e+1-1][t-1+1]||4!==a[e+1-1][t-1]&&2!==a[e+1-1][t-1+1])&&(4!==a[e+1][t-1]&&2!==a[e+1][t-1+1]||4!==a[e+1-1][t-1]&&2!==a[e+1-1][t-1+1])&&i.push(15*(e+1)+t-1),-1+e>-1&&1+t<15&&!(s[e-1+1][t+1-1]>0||s[e-1][t+1]<0)&&(3!==a[e-1][t+1]&&1!==a[e-1+1][t+1]||3!==a[e-1][t+1-1]&&1!==a[e-1+1][t+1-1])&&(3!==a[e-1][t+1]&&1!==a[e-1+1][t+1]||2!==a[e-1][t+1]&&4!==a[e-1][t+1-1])&&(3!==a[e-1][t+1-1]&&1!==a[e-1+1][t+1-1]||2!==a[e-1+1][t+1]&&4!==a[e-1+1][t+1-1])&&(2!==a[e-1][t+1]&&4!==a[e-1][t+1-1]||2!==a[e-1+1][t+1]&&4!==a[e-1+1][t+1-1])&&i.push(15*(e-1)+t+1)};function m(e,t,s,a,i){switch(s[e][t]){case 1:!function(e,t,s,a,i){e+2<10&&t+1<15&&(0===s[e+2][t+1]||s[e+2][t+1]<=0)&&(3===a[e][t])+a[e+1][t]%2+(1===a[e+2][t])+(4===a[e+2][t])+(2===a[e+2][t+1])<2&&i.push(15*(e+2)+t+1),e+2<10&&t-1>-1&&(0===s[e+2][t-1]||s[e+2][t-1]<=0)&&(3===a[e][t])+a[e+1][t]%2+(1===a[e+2][t])+(2===a[e+2][t])+(4===a[e+2][t-1])<2&&i.push(15*(e+2)+t-1),e-2>-1&&t+1<15&&(0===s[e-2][t+1]||s[e-2][t+1]<=0)&&(1===a[e][t])+a[e-1][t]%2+(3===a[e-2][t])+(4===a[e-2][t])+(2===a[e-2][t+1])<2&&i.push(15*(e-2)+t+1),e-2>-1&&t-1>-1&&(0===s[e-2][t-1]||s[e-2][t-1]<=0)&&(1===a[e][t])+a[e-1][t]%2+(3===a[e-2][t])+(2===a[e-2][t])+(4===a[e-2][t-1])<2&&i.push(15*(e-2)+t-1),e+1<10&&t+2<15&&(0===s[e+1][t+2]||s[e+1][t+2]<=0)&&(4===a[e][t])+(a[e][t+1]%2===0&&0!==a[e][t+1])+(2===a[e][t+2])+(3===a[e][t+2])+(1===a[e+1][t+2])<2&&i.push(15*(e+1)+t+2),e-1>-1&&t+2<15&&(0===s[e-1][t+2]||s[e-1][t+2]<=0)&&(4===a[e][t])+(a[e][t+1]%2===0&&0!==a[e][t+1])+(2===a[e][t+2])+(1===a[e][t+2])+(3===a[e-1][t+2])<2&&i.push(15*(e-1)+t+2),e+1<10&&t-2>-1&&(0===s[e+1][t-2]||s[e+1][t-2]<=0)&&(2===a[e][t])+(a[e][t-1]%2===0&&0!==a[e][t-1])+(4===a[e][t-2])+(3===a[e][t-2])+(1===a[e+1][t-2])<2&&i.push(15*(e+1)+t-2),e-1>-1&&t-2>-1&&(0===s[e-1][t-2]||s[e-1][t-2]<=0)&&(2===a[e][t])+(a[e][t-1]%2===0&&0!==a[e][t-1])+(4===a[e][t-2])+(1===a[e][t-2])+(3===a[e-1][t-2])<2&&i.push(15*(e-1)+t-2)}(e,t,s,a,i);break;case 2:!function(e,t,s,a,i){for(var r=1;r+e<10&&r+t<15&&!(s[e+r][t+r]>0||s[e+r-1][t+r-1]<0)&&(1!==a[e+r][t+r]&&3!==a[e+r-1][t+r]||1!==a[e+r][t+r-1]&&3!==a[e+r-1][t+r-1])&&(1!==a[e+r][t+r]&&3!==a[e+r-1][t+r]||2!==a[e+r][t+r]&&4!==a[e+r][t+r-1])&&(1!==a[e+r][t+r-1]&&3!==a[e+r-1][t+r-1]||2!==a[e+r-1][t+r]&&4!==a[e+r-1][t+r-1])&&(2!==a[e+r][t+r]&&4!==a[e+r][t+r-1]||2!==a[e+r-1][t+r]&&4!==a[e+r-1][t+r-1]);r++)i.push(15*(e+r)+t+r);for(var o=-1;o+e>-1&&o+t>-1&&!(s[e+o][t+o]>0||s[e+o+1][t+o+1]<0)&&(3!==a[e+o][t+o]&&1!==a[e+o+1][t+o]||3!==a[e+o][t+o+1]&&1!==a[e+o+1][t+o+1])&&(3!==a[e+o][t+o]&&1!==a[e+o+1][t+o]||4!==a[e+o][t+o]&&2!==a[e+o][t+o+1])&&(3!==a[e+o][t+o+1]&&1!==a[e+o+1][t+o+1]||4!==a[e+o+1][t+o]&&2!==a[e+o+1][t+o+1])&&(4!==a[e+o][t+o]&&2!==a[e+o][t+o+1]||4!==a[e+o+1][t+o]&&2!==a[e+o+1][t+o+1]);o--)i.push(15*(e+o)+t+o);for(var n=1;n+e<10&&-n+t>-1&&!(s[e+n][t-n]>0||s[e+n-1][t-n+1]<0)&&(1!==a[e+n][t-n]&&3!==a[e+n-1][t-n]||1!==a[e+n][t-n+1]&&3!==a[e+n-1][t-n+1])&&(1!==a[e+n][t-n]&&3!==a[e+n-1][t-n]||4!==a[e+n][t-n]&&2!==a[e+n][t-n+1])&&(1!==a[e+n][t-n+1]&&3!==a[e+n-1][t-n+1]||4!==a[e+n-1][t-n]&&2!==a[e+n-1][t-n+1])&&(4!==a[e+n][t-n]&&2!==a[e+n][t-n+1]||4!==a[e+n-1][t-n]&&2!==a[e+n-1][t-n+1]);n++)i.push(15*(e+n)+t-n);for(var c=-1;c+e>-1&&-c+t<15&&!(s[e+c][t-c]>0||s[e+c+1][t-c-1]<0)&&(3!==a[e+c][t-c]&&1!==a[e+c+1][t-c]||3!==a[e+c][t-c-1]&&1!==a[e+c+1][t-c-1])&&(3!==a[e+c][t-c]&&1!==a[e+c+1][t-c]||2!==a[e+c][t-c]&&4!==a[e+c][t-c-1])&&(3!==a[e+c][t-c-1]&&1!==a[e+c+1][t-c-1]||2!==a[e+c+1][t-c]&&4!==a[e+c+1][t-c-1])&&(2!==a[e+c][t-c]&&4!==a[e+c][t-c-1]||2!==a[e+c+1][t-c]&&4!==a[e+c+1][t-c-1]);c--)i.push(15*(e+c)+t-c)}(e,t,s,a,i);break;case 3:!function(e,t,s,a,i){for(var r=e+1;r<10&&!(s[r][t]>0||s[r-1][t]<0||1===a[r][t]||3===a[r-1][t]);r++)i.push(15*r+t);for(var o=e-1;o>-1&&!(s[o][t]>0||s[o+1][t]<0||3===a[o][t]||1===a[o+1][t]);o--)i.push(15*o+t);for(var n=t+1;n<15&&!(s[e][n]>0||s[e][n-1]<0||2===a[e][n]||4===a[e][n-1]);n++)i.push(15*e+n);for(var c=t-1;c>-1&&!(s[e][c]>0||s[e][c+1]<0||4===a[e][c]||2===a[e][c+1]);c--)i.push(15*e+c)}(e,t,s,a,i);break;case 4:case 5:b(e,t,s,a,i);break;case-1:!function(e,t,s,a,i){e+2<10&&t+1<15&&s[e+2][t+1]>=0&&(3===a[e][t])+a[e+1][t]%2+(1===a[e+2][t])+(4===a[e+2][t])+(2===a[e+2][t+1])<2&&i.push(15*(e+2)+t+1),e+2<10&&t-1>-1&&s[e+2][t-1]>=0&&(3===a[e][t])+a[e+1][t]%2+(1===a[e+2][t])+(2===a[e+2][t])+(4===a[e+2][t-1])<2&&i.push(15*(e+2)+t-1),e-2>-1&&t+1<15&&s[e-2][t+1]>=0&&(1===a[e][t])+a[e-1][t]%2+(3===a[e-2][t])+(4===a[e-2][t])+(2===a[e-2][t+1])<2&&i.push(15*(e-2)+t+1),e-2>-1&&t-1>-1&&s[e-2][t-1]>=0&&(1===a[e][t])+a[e-1][t]%2+(3===a[e-2][t])+(2===a[e-2][t])+(4===a[e-2][t-1])<2&&i.push(15*(e-2)+t-1),e+1<10&&t+2<15&&s[e+1][t+2]>=0&&(4===a[e][t])+(a[e][t+1]%2===0&&0!==a[e][t+1])+(2===a[e][t+2])+(3===a[e][t+2])+(1===a[e+1][t+2])<2&&i.push(15*(e+1)+t+2),e-1>-1&&t+2<15&&s[e-1][t+2]>=0&&(4===a[e][t])+(a[e][t+1]%2===0&&0!==a[e][t+1])+(2===a[e][t+2])+(1===a[e][t+2])+(3===a[e-1][t+2])<2&&i.push(15*(e-1)+t+2),e+1<10&&t-2>-1&&s[e+1][t-2]>=0&&(2===a[e][t])+(a[e][t-1]%2===0&&0!==a[e][t-1])+(4===a[e][t-2])+(3===a[e][t-2])+(1===a[e+1][t-2])<2&&i.push(15*(e+1)+t-2),e-1>-1&&t-2>-1&&s[e-1][t-2]>=0&&(2===a[e][t])+(a[e][t-1]%2===0&&0!==a[e][t-1])+(4===a[e][t-2])+(1===a[e][t-2])+(3===a[e-1][t-2])<2&&i.push(15*(e-1)+t-2)}(e,t,s,a,i);break;case-2:!function(e,t,s,a,i){for(var r=1;r+e<10&&r+t<15&&!(s[e+r-1][t+r-1]>0||s[e+r][t+r]<0)&&(1!==a[e+r][t+r]&&3!==a[e+r-1][t+r]||1!==a[e+r][t+r-1]&&3!==a[e+r-1][t+r-1])&&(1!==a[e+r][t+r]&&3!==a[e+r-1][t+r]||2!==a[e+r][t+r]&&4!==a[e+r][t+r-1])&&(1!==a[e+r][t+r-1]&&3!==a[e+r-1][t+r-1]||2!==a[e+r-1][t+r]&&4!==a[e+r-1][t+r-1])&&(2!==a[e+r][t+r]&&4!==a[e+r][t+r-1]||2!==a[e+r-1][t+r]&&4!==a[e+r-1][t+r-1]);r++)i.push(15*(e+r)+t+r);for(var o=-1;o+e>-1&&o+t>-1&&!(s[e+o+1][t+o+1]>0||s[e+o][t+o]<0)&&(3!==a[e+o][t+o]&&1!==a[e+o+1][t+o]||3!==a[e+o][t+o+1]&&1!==a[e+o+1][t+o+1])&&(3!==a[e+o][t+o]&&1!==a[e+o+1][t+o]||4!==a[e+o][t+o]&&2!==a[e+o][t+o+1])&&(3!==a[e+o][t+o+1]&&1!==a[e+o+1][t+o+1]||4!==a[e+o+1][t+o]&&2!==a[e+o+1][t+o+1])&&(4!==a[e+o][t+o]&&2!==a[e+o][t+o+1]||4!==a[e+o+1][t+o]&&2!==a[e+o+1][t+o+1]);o--)i.push(15*(e+o)+t+o);for(var n=1;n+e<10&&-n+t>-1&&!(s[e+n-1][t-n+1]>0||s[e+n][t-n]<0)&&(1!==a[e+n][t-n]&&3!==a[e+n-1][t-n]||1!==a[e+n][t-n+1]&&3!==a[e+n-1][t-n+1])&&(1!==a[e+n][t-n]&&3!==a[e+n-1][t-n]||4!==a[e+n][t-n]&&2!==a[e+n][t-n+1])&&(1!==a[e+n][t-n+1]&&3!==a[e+n-1][t-n+1]||4!==a[e+n-1][t-n]&&2!==a[e+n-1][t-n+1])&&(4!==a[e+n][t-n]&&2!==a[e+n][t-n+1]||4!==a[e+n-1][t-n]&&2!==a[e+n-1][t-n+1]);n++)i.push(15*(e+n)+t-n);for(var c=-1;c+e>-1&&-c+t<15&&!(s[e+c+1][t-c-1]>0||s[e+c][t-c]<0)&&(3!==a[e+c][t-c]&&1!==a[e+c+1][t-c]||3!==a[e+c][t-c-1]&&1!==a[e+c+1][t-c-1])&&(3!==a[e+c][t-c]&&1!==a[e+c+1][t-c]||2!==a[e+c][t-c]&&4!==a[e+c][t-c-1])&&(3!==a[e+c][t-c-1]&&1!==a[e+c+1][t-c-1]||2!==a[e+c+1][t-c]&&4!==a[e+c+1][t-c-1])&&(2!==a[e+c][t-c]&&4!==a[e+c][t-c-1]||2!==a[e+c+1][t-c]&&4!==a[e+c+1][t-c-1]);c--)i.push(15*(e+c)+t-c)}(e,t,s,a,i);break;case-3:!function(e,t,s,a,i){for(var r=e+1;r<10&&!(s[r][t]<0||s[r-1][t]>0||1===a[r][t]||3===a[r-1][t]);r++)i.push(15*r+t);for(var o=e-1;o>-1&&!(s[o][t]<0||s[o+1][t]>0||3===a[o][t]||1===a[o+1][t]);o--)i.push(15*o+t);for(var n=t+1;n<15&&!(s[e][n]<0||s[e][n-1]>0||2===a[e][n]||4===a[e][n-1]);n++)i.push(15*e+n);for(var c=t-1;c>-1&&!(s[e][c]<0||s[e][c+1]>0||4===a[e][c]||2===a[e][c+1]);c--)i.push(15*e+c)}(e,t,s,a,i);break;case-4:case-5:j(e,t,s,a,i)}}var x=s(7),k=s(10),O={1:30,2:32,3:31,4:500,5:22};function g(e,t){var s,a=0,i=Object(k.a)(e[1].entries());try{for(i.s();!(s=i.n()).done;){var r=Object(x.a)(s.value,2),o=(r[0],r[1]);a+=O[o]}}catch(l){i.e(l)}finally{i.f()}var n,c=Object(k.a)(e[0].entries());try{for(c.s();!(n=c.n()).done;){var h=Object(x.a)(n.value,2),u=(h[0],h[1]);a-=O[-u]}}catch(l){c.e(l)}finally{c.f()}return a}var w=function(e,t,s){var a=~~(t/150),i=t%150,r=e.board[~~(a/15)][a%15],o=e.board[~~(i/15)][i%15];e.board[~~(a/15)][a%15]=0,e.board[~~(i/15)][i%15]=r,e.pieces[s].delete(a),e.pieces[s].set(i,r),e.pieces[1^s].delete(i);var n=0;return 4===o?n=-1:-4===o||e.pieces[0].size<2?n=1:e.pieces[1].size<2&&(n=-1),{stp:r,endp:o,out:n}},C=function(e,t,s,a,i){var r=~~(t/150),o=t%150;e.board[~~(r/15)][r%15]=s,e.board[~~(o/15)][o%15]=a,e.pieces[i].set(r,s),e.pieces[i].delete(o),0!==a&&e.pieces[1^i].set(o,a)};var S=function e(t,s,a,i,r){if(0===s)return[g(t.pieces,t.board),0];var o=[];if(function(e,t,s){var a,i=Object(k.a)(t.pieces[s].entries());try{for(i.s();!(a=i.n()).done;){var r=Object(x.a)(a.value,2),o=r[0],n=(r[1],[]);m(~~(o/15),o%15,t.board,t.walls,n);for(var c=0;c<n.length;c++)e.push(150*o+n[c])}}catch(h){i.e(h)}finally{i.f()}e.sort((function(e,t){return Math.random()-.5}))}(o,t,a),a){for(var n=0,c=-1e5,h=0;h<o.length;h++){var u=w(t,o[h],a),l=u.stp,d=u.endp,p=u.out,f=void 0;if(0===p){var v=e(t,s-1,0,i,r),b=Object(x.a)(v,2);f=b[0],b[1]}else f=1e5*p;if(f>c&&(c=f,n=o[h],r<=(i=Math.max(i,f)))){C(t,o[h],l,d,a);break}C(t,o[h],l,d,a)}return[c,n]}for(var j=0,O=1e5,S=0;S<o.length;S++){var y=w(t,o[S],a),B=y.stp,N=y.endp,W=y.out,I=void 0;if(0===W){var _=e(t,s-1,1,i,r),M=Object(x.a)(_,2);I=M[0],M[1]}else I=1e5*W;if(I<O&&(O=I,j=o[S],(r=Math.min(r,I))<=i)){C(t,o[S],B,N,a);break}C(t,o[S],B,N,a)}return[O,j]};function y(e,t,s,a){for(var i={1:new Map,0:new Map},r=0;r<10;r++)for(var o=0;o<15;o++)e[r][o]>0&&i[1].set(15*r+o,e[r][o]),e[r][o]<0&&i[0].set(15*r+o,e[r][o]);var n={board:e.map((function(e){return e.slice()})),walls:t.map((function(e){return e.slice()})),pieces:i},c=(new Date).getTime(),h=S(n,4,a,-1e5,1e5),u=Object(x.a)(h,2),l=(u[0],u[1]),d=(new Date).getTime();console.log("Time Taken: ",d-c," ms"),console.log("bestmove",l),l>=0&&(e[~~(l%150/15)][l%150%15]=e[~~(~~(l/150)/15)][~~(l/150)%15],e[~~(~~(l/150)/15)][~~(l/150)%15]=0)}var B=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={BoardState:[[3,0,0,0,1,5,0,0,0,-5,-1,0,0,-5,-4],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,-3],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],[2,0,0,0,0,0,0,0,0,0,0,0,0,0,-2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[3,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[4,5,0,0,1,5,0,0,0,-5,-1,0,0,0,-3]],walls:[[2,3,1,4,0,4,3,3,0,1,0,3,4,0,3],[0,0,4,0,0,0,0,0,4,0,4,0,3,0,0],[4,3,0,3,0,4,0,0,4,0,0,0,4,0,0],[0,4,0,0,4,4,0,3,3,0,3,0,0,3,2],[0,0,0,3,2,3,0,0,4,3,0,3,2,0,0],[3,3,4,0,3,4,3,3,0,0,4,0,0,0,0],[4,0,0,0,0,0,0,0,4,4,0,3,4,3,0],[0,4,3,0,0,4,0,0,4,0,0,0,0,4,0],[3,0,0,4,3,4,0,3,3,0,0,4,0,3,0],[0,4,0,1,0,3,0,0,4,0,4,0,3,0,4]],valids:[],turn:1,rot:2,ended:0},a.selectedboxI=-1,a.selectedboxJ=-1,a.selectedPiece=0,a.counter=0,a.isWhite=void 0,a.score1=0,a.score2=0,a.AIplay=y,a.movepiece=function(e,t){if(1!==a.state.ended&&0!==a.state.turn&&(a.score1=f(a.state.BoardState),a.score2=v(a.state.BoardState),a.state.turn!=!a.isWhite))if(0===a.selectedPiece){if(0!==a.state.BoardState[e][t]&&(a.selectedboxI=e,a.selectedboxJ=t,0!==a.state.BoardState[e][t]&&(1===a.isWhite&&a.state.BoardState[e][t]>0||0===a.isWhite&&a.state.BoardState[e][t]<0))){a.selectedPiece=a.state.BoardState[e][t];var s=[];m(e,t,a.state.BoardState,a.state.walls,s),a.setState({valids:s})}}else{if(a.state.valids.includes(15*e+t)){if((1===a.isWhite&&-4===a.state.BoardState[e][t]||0===a.isWhite&&4===a.state.BoardState[e][t])&&(a.state.ended=1,console.log("winwin")),a.state.BoardState[e][t]=a.selectedPiece,a.state.BoardState[a.selectedboxI][a.selectedboxJ]=0,a.setState({valids:[]}),!a.state.ended){var i=a.isWhite?0:1;a.AIplay(a.state.BoardState,a.state.walls,a.state.rot,i),a.turn=a.isWhite,a.setState({})}}else a.setState({valids:[]});a.score1=f(a.state.BoardState),a.score2=v(a.state.BoardState),a.selectedPiece=0}},a}return Object(c.a)(s,[{key:"rotate",value:function(e,t){1!==this.state.ended&&this.state.turn!=!this.isWhite&&(!function(e,t,s,a){var i,r,o;if(a){for(r=0;r<2;r++)for(o=r;o<5-r-1;o++)i=e[r+t][o+s],e[r+t][o+s]=e[5-o-1+t][r+s],e[5-o-1+t][r+s]=e[5-r-1+t][5-o-1+s],e[5-r-1+t][5-o-1+s]=e[o+t][5-r-1+s],e[o+t][5-r-1+s]=i;for(r=t;r<t+5;r++)for(o=s;o<s+5;o++)e[r][o]>0&&(e[r][o]=(e[r][o]+2)%4+1)}else{for(r=0;r<2;r++)for(o=r;o<5-r-1;o++)i=e[r+t][o+s],e[r+t][o+s]=e[o+t][5-r-1+s],e[o+t][5-r-1+s]=e[5-r-1+t][5-o-1+s],e[5-r-1+t][5-o-1+s]=e[5-o-1+t][r+s],e[5-o-1+t][r+s]=i;for(r=t;r<t+5;r++)for(o=s;o<s+5;o++)e[r][o]>0&&(e[r][o]=e[r][o]%4+1)}}(this.state.walls,e,t,this.isWhite),function(e,t,s,a){var i,r,o;if(console.log(a),a)for(r=0;r<2;r++)for(o=r;o<5-r-1;o++)i=e[r+t][o+s],e[r+t][o+s]=e[5-o-1+t][r+s],e[5-o-1+t][r+s]=e[5-r-1+t][5-o-1+s],e[5-r-1+t][5-o-1+s]=e[o+t][5-r-1+s],e[o+t][5-r-1+s]=i;else for(r=0;r<2;r++)for(o=r;o<5-r-1;o++)i=e[r+t][o+s],e[r+t][o+s]=e[o+t][5-r-1+s],e[o+t][5-r-1+s]=e[5-r-1+t][5-o-1+s],e[5-r-1+t][5-o-1+s]=e[5-o-1+t][r+s],e[5-o-1+t][r+s]=i}(this.state.BoardState,e,t,this.isWhite),this.setState({rot:0}))}},{key:"componentDidMount",value:function(){if(this.isWhite=1,this.setState({valids:[]}),this.isWhite!==this.state.turn){var e=this.isWhite?0:1;this.AIplay(this.state.BoardState,this.state.walls,this.state.rot,e),this.turn=this.isWhite,this.setState({})}}},{key:"renbox",value:function(e,t){var s=this;return Object(l.jsx)(p,{colour:t+15*e,v:this.state.BoardState[e][t],w:this.state.walls[e][t],onClick:function(){s.movepiece(e,t)},isgreen:this.state.valids.includes(15*e+t)},t+15*e)}},{key:"render",value:function(){for(var e=this,t=[],s=0;s<10;s++){for(var a=0;a<15;a++)t.push(this.renbox(s,a));t.push(Object(l.jsx)("span",{},-s-1))}return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h2",{className:"chess",children:"Giant Chess of Despair"}),Object(l.jsx)("nav",{}),function(){if(void 0!==e.isWhite)return 1===e.isWhite?Object(l.jsx)("h2",{className:"you",children:"You are White"}):Object(l.jsx)("h2",{className:"you",children:"You are Black"})}()]}),Object(l.jsxs)("div",{className:"boardclass",children:[Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("button",{className:"rot",onClick:function(){e.rotate(0,0)},children:"Rotate"}),Object(l.jsx)("button",{className:"rot",onClick:function(){e.rotate(0,5)},children:"Rotate"}),Object(l.jsx)("button",{className:"rot",onClick:function(){e.rotate(0,10)},children:"Rotate"})]}),Object(l.jsx)("div",{children:t}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("button",{className:"rot",onClick:function(){e.rotate(5,0)},children:"Rotate"}),Object(l.jsx)("button",{className:"rot",onClick:function(){e.rotate(5,5)},children:"Rotate"}),Object(l.jsx)("button",{className:"rot",onClick:function(){e.rotate(5,10)},children:"Rotate"})]})]}),Object(l.jsx)("div",{className:"timer",children:function(){if(0===e.state.ended)return Object(l.jsx)("button",{className:"stop",children:"I wanna give up"})}()})]})}}]),s}(i.a.Component),N=(s(31),s(11));function W(){return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("img",{className:"image",src:"/Giant-Chess-Of-Despair-AI/logo.png",alt:"GCOD",width:"200",height:"200"}),Object(l.jsx)("h1",{className:"heading",children:"Giant Chess Of Despair"}),Object(l.jsx)("h2",{className:"subheading",children:"Artificial Intelligence"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsx)(N.b,{to:{pathname:"/game",state:{white:1}},children:Object(l.jsx)("button",{className:"buttonc ",type:"submit",children:"Create Game"})})})]})})}var I=s(2);var _=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(N.a,{basename:window.location.pathname||"",children:[Object(l.jsx)(I.a,{path:"/",exact:!0,component:W}),Object(l.jsx)(I.a,{path:"/game",component:B})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ef383ccc.chunk.js.map