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
$(".carousel-indicators").cssText('left','0');
})