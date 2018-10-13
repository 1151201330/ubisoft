$(function(){ 
    var valueBak = $('.text').attr('placeholder')
    $('.text').on('focus', function () {
      
        $("form").addClass("act");
        $('.bttn').addClass('bbn')
        if (!valueBak) {  
            $(this).attr('placeholder', $(this).attr('placeholder'));
        }
        $(this).attr("placeholder", "");
       
    }).on("blur", function() {
        $("form").removeClass("act");
        $(".bttn").removeClass("bbn");
        $(this).attr("placeholder", valueBak);
    });
    $('.menu-toggle i').on('click',function(){
        $('.shangchen').toggleClass('menu-active')
       
    }); 
    $('.nav-btm .nav-btm-bb').on('click',function(){
            $('.nav-btm>li').eq(0).toggleClass('frot')
        })
    $('.nav-btm .nav-btm-bp').on('click', function () {
        $('.nav-btm>li').eq(1).toggleClass('frot')
        
    })

<<<<<<< HEAD
})
=======
    // 检测cookie
    //如果浏览器中存在Cookie
    var arr = [],
        i;
    arr = document.cookie.split("; ");
    for (i = 0; i < arr.length; i++) {
        var temp = arr[i].split("=");
        var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;　　
        if (myReg.test(temp[1])) {
            // goto.innerText = "我的";　
            $('#goto').text("我的")
        }
    }
    $('#goto').on('click', function() {
        location.href = 'lzq-login.html'
    })





})
>>>>>>> aa907a5a4f0eed7d1e82da5cf81e752e538f8648
