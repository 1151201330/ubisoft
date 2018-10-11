$(function() {
    // $('.top').load('http://10.31.157.13:8080/project-lzq/ubisoft/src/html/head-ha.html');
    $(document).on('click', function(ev) {
        if (ev.target == $('.platform')[0]) {
            $('.drop').addClass('show');
        } else {
            $('.drop').removeClass('show');
        }
    })

    $(document).on('click', function(ev) {
        if (ev.target == $('.game')[0]) {
            $('.drop2').addClass('show');
        } else {
            $('.drop2').removeClass('show');
        }
    })
    $('.btm').load('../html/foot-ha.html');

})