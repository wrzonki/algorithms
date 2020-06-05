h1. Diffrent output based on function format o_0

```js
var x=function(){var a=arguments.callee.name;var b=btoa(window[a].toString());var d=0;for(var i=0;i<b.length;i++){d=d+b.charCodeAt(i)}
return d}

x()
```

`returns 15945`

but if you format this function, it will return output based on formating...