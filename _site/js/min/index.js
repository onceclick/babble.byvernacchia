!function(){"use strict";var a,b,c;window.onload=function(){function d(){setTimeout(function(){g.push({opacity:1,size:0,x:Math.random()*a.width+1,y:Math.random()*a.height+1}),h=2*Math.random()+1,d()},1e3*h)}function e(){for(var a=0;a<g.length;a++)g[a].size>10&&(g[a].opacity-=.01),g[a].size>20?g.splice(a,1):g[a].size+=.1}function f(){b.fillStyle="#fff",b.fillRect(0,0,a.width,a.height),b.strokeStyle="#cd4128",b.lineWidth=2;for(var c=0;c<g.length;c++)b.globalAlpha=g[c].opacity,b.beginPath(),b.arc(g[c].x,g[c].y,g[c].size,0,2*Math.PI),b.stroke(),b.globalAlpha=1}c=document.getElementById("contentBody"),a=document.getElementById("sharingIsCaring"),b=a.getContext("2d"),a.width=window.innerWidth,a.height=c.clientHeight;var g=[],h=1;d(),setInterval(function(){e(),f()},1e3/60)},window.onresize=function(){c=document.getElementById("contentBody"),a.height=c.clientHeight,a.width=window.innerWidth}}();