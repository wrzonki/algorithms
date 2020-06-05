var x=function(){var a=arguments.callee.name;var b=btoa(window[a].toString());var d=0;for(var i=0;i<b.length;i++){d=d+b.charCodeAt(i)}
return d}

x()