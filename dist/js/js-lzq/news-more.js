$(function(){$(document).on("click",function(o){o.target==$(".platform")[0]?$(".drop").toggleClass("show"):$(".drop").removeClass("show")}),$(document).on("click",function(o){o.target==$(".game")[0]?$(".drop2").toggleClass("show"):$(".drop2").removeClass("show")}),$(".drop li a").on("click",function(){$(".drop li a").removeClass("active"),$("#all").html($(this).html().toUpperCase()),$(this).addClass("active")}),$(".drop2 li a").on("click",function(){$(".drop2 li a").removeClass("active"),$("#all2").html($(this).html()),$(this).addClass("active")}),$(".btm").load("../html/foot-ha.html")});