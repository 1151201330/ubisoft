$(function(){$("#email").blur(function(){if(/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(this.value));else{myspan.innerText="邮箱地址无效。";var e=document.createElement("br");$("#myspan").append(e),$("#email").css({"border-color":"red","background-color":"pink"})}$("#email").keyup(function(){if(/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(this.value))myspan.innerText="",$("#email").css({"border-color":"","background-color":""});else{myspan.innerText="邮箱地址无效。";var e=document.createElement("br");$("#myspan").append(e),$("#email").css({"border-color":"red","background-color":"pink"})}})}),$("#again").blur(function(){if(this.value===email.value)tagain.innerText="",$("#again").css({"border-color":"","background-color":""});else if(/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(this.value)){if(this.value!==$("#email").value){tagain.innerText="邮箱地址不一致。";e=document.createElement("br");$("#tagain").append(e),$("#again").css({"border-color":"red","background-color":"pink"})}}else{tagain.innerText="邮箱地址无效。";var e=document.createElement("br");$("#tagain").append(e),$("#again").css({"border-color":"red","background-color":"pink"})}$("#again").keyup(function(){if(this.value===email.value)tagain.innerText="",$("#again").css({"border-color":"","background-color":""});else if(/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/.test(this.value)){if(this.value!==$("#email").value){tagain.innerText="邮箱地址不一致。";e=document.createElement("br");$("#tagain").append(e),$("#again").css({"border-color":"red","background-color":"pink"})}}else{tagain.innerText="邮箱地址无效。";var e=document.createElement("br");$("#tagain").append(e),$("#again").css({"border-color":"red","background-color":"pink"})}})}),$("#pwd").keyup(function(){if(/.{8,16}/.test(this.value))checkpwd.innerText="",$("#pwd").css({"border-color":"","background-color":""});else if(""===this.value)checkpwd.innerText="需要密码";else{checkpwd.innerText="密码不可用";var e=document.createElement("br");$("#checkpwd").append(e),$("#pwd").css({"border-color":"red","background-color":"pink"})}}),$("#create").on("click",function(){if(""==$("#email").val()){myspan.innerText="需要邮箱";var e=document.createElement("br");$("#myspan").append(e),$("#email").css({"border-color":"red","background-color":"pink"})}if(""==$("#again").val()){tagain.innerText="需要邮箱";e=document.createElement("br");$("#tagain").append(e),$("#again").css({"border-color":"red","background-color":"pink"})}if(""==$("#pwd").val()){checkpwd.innerText="需要密码";e=document.createElement("br");$("#checkpwd").append(e),$("#pwd").css({"border-color":"red","background-color":"pink"})}check.checked?($(".box").css("border",""),$.ajax({type:"post",url:"../php/php-lzq/reg.php",data:{email:$("#email").val(),pwd:$("#pwd").val(),uname:$("#uname").val(),birthday:$("#year").val()+$("#month").val()+$("#day").val()},success:function(e){if("shangchen.html"==e)location.href=e,document.cookie=$("#email").val()+"="+$("#pwd").val()+"; ";else{myspan.innerText=e;var a=document.createElement("br");$("#myspan").append(a)}}})):$(".box").css("border","1px solid red")})});