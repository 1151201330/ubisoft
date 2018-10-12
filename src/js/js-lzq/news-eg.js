$(function() {
    // $('.top').load('http://10.31.157.13:8080/project-lzq/ubisoft/src/html/head-ha.html');


    $(document).on('click', function(ev) {
        if (ev.target == $('.platform')[0]) {
            $('.drop').toggleClass('show');
        } else {
            $('.drop').removeClass('show');
        }
    })



    $(document).on('click', function(ev) {
        if (ev.target == $('.game')[0]) {
            $('.drop2').toggleClass('show');
        } else {
            $('.drop2').removeClass('show');
        }
    })


    $('.drop li a').on('click', function() {
        $('.drop li a').removeClass('active');
        $('#all').html($(this).html().toUpperCase());
        $(this).addClass('active');
    })
    $('.drop2 li a').on('click', function() {
        $('.drop2 li a').removeClass('active');
        $('#all2').html($(this).html());
        $(this).addClass('active');
    })


    $('.btm').load('../html/foot-ha.html');

})