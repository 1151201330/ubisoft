window.onload = function() {
    // 轮播
    $('.head').load('http://10.31.157.191:8080/ubisoft/src/html/head-ha.html');
    $('.foot').load('http://10.31.157.191:8080/ubisoft/src/html/foot-ha.html');
    $('.su-1').on('click', function() {
        $('.rq1').removeClass('hidden')
        $('.rq2').addClass('hidden')
    });
    $('.su-2').on('click', function() {
        $('.rq1').addClass('hidden')
        $('.rq2').removeClass('hidden')
    });
}