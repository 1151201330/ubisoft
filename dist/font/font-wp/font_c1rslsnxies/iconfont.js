(function(window){var svgSprite='<svg><symbol id="icon-iconjian" viewBox="0 0 1024 1024"><path d="M903.053 570.75h-782.007c-32.391 0-58.649-26.256-58.649-58.647s26.256-58.661 58.649-58.661h782.009c32.406 0 58.649 26.27 58.649 58.661-0.001 32.393-26.245 58.647-58.649 58.647z"  ></path></symbol><symbol id="icon-jiahao" viewBox="0 0 1024 1024"><path d="M902.947 571.027h-332.293v332.346c0 32.387-26.267 58.628-58.655 58.628-32.387 0-58.654-26.241-58.654-58.628v-332.346h-332.295c-32.414 0-58.654-26.241-58.654-58.628 0-32.375 26.243-58.628 58.654-58.628h332.293v-332.346c0-32.375 26.267-58.628 58.654-58.628 32.388 0 58.655 26.254 58.655 58.628v332.347h332.293c32.414 0 58.655 26.252 58.655 58.626-0.001 32.387-26.241 58.626-58.655 58.626z"  ></path></symbol><symbol id="icon-arrow-up" viewBox="0 0 1024 1024"><path d="M512.1721736 658.25822846l-378.21230145-378.20582873c-15.88398459-15.89692997-41.66600879-15.89692997-57.55128797 0-15.89822451 15.8839846-15.89822451 41.66600879 0 57.55128793l406.98729816 406.98729816c15.88398459 15.89692997 41.66600879 15.89692997 57.55128796-3e-8l406.98600358-406.98729812c7.94846498-7.94328684 11.92399201-18.3604363 11.92399202-28.77499672s-3.97552703-20.83170989-11.92399202-28.77499665c-15.88398459-15.89692997-41.66600879-15.89692997-57.55128793-4e-8l-378.21100692 378.20582872z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)