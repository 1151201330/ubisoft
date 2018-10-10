//选项卡
$('.plans-tablist>li').on('click', function() {
    $('.plans-tablist>li').css('background', '#999');
    $(this).css('background', 'blue');
    $('.plans-inner>ul').css('display', 'none');
    $('.plans-inner>ul').eq($(this).index()).fadeIn();

});

//news>row和plans-content和videos-more同列高度自适应且实时监听高度
var intervalId = setInterval(function() {

    var nheight = $('.row').eq(1).height();
    $('.row img').eq(0).css('height', nheight + 'px');
    $('.row img').eq(2).css('height', nheight + 'px');

    var vheight = $('.videos-item').height();
    $('.videos-more>a').css('height', vheight + 'px')

}, 100);

//加载头部尾部

$('.head').load('http://10.31.157.191:8080/ubisoft/src/html/head-ha.html');
$('.foot').load('http://10.31.157.191:8080/ubisoft/src/html/foot-ha.html');