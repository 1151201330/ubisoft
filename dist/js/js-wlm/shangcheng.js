$(function(){var t=$(".text").attr("placeholder");$(".text").on("focus",function(){$("form").addClass("act"),$(".bttn").addClass("bbn"),t||$(this).attr("placeholder",$(this).attr("placeholder")),$(this).attr("placeholder","")}).on("blur",function(){$("form").removeClass("act"),$(".bttn").removeClass("bbn"),$(this).attr("placeholder",t)}),$(".menu-toggle i").on("click",function(){$(".shangchen").toggleClass("menu-active")}),$(".nav-btm .nav-btm-bb").on("click",function(){$(".nav-btm>li").eq(0).toggleClass("frot")}),$(".nav-btm .nav-btm-bp").on("click",function(){$(".nav-btm>li").eq(1).toggleClass("frot")});var o,n=[];for(n=document.cookie.split("; "),o=0;o<n.length;o++){var a=n[o].split("=");/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(a[1])&&$("#goto").text("我的")}$("#goto").on("click",function(){location.href="lzq-login.html"})});