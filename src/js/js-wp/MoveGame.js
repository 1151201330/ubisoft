window.onload = function() {
    // 鼠标跳动
    var show = function() {
        $('.mouse').animate({
            'top': '550px'
        }, 1000).animate({
            'top': '592px'
        }, 1000);
    }
    setInterval(show, 0);
    // 锚点过度
    $('.mouse').on('click', function() {
        $('html,body').animate({ scrollTop: $('.news-wrap').offset().top }, 500)
    });
    $('.circle-wrap').on('click', function() {
        $('html,body').animate({ scrollTop: $('.news-wrap').offset().top }, 500)
    });
    // 选项卡
    $('.game-features').on('click', function() {
        $('.game-introduction').addClass('unchange')
        $('.game-introduction').removeClass('change')
        $('.game-features').removeClass('unchange')
        $('.game-features').addClass('change')
        $('.game-fea').removeClass('hidden')
        $('.game-in').addClass('hidden')
    });
    $('.game-introduction').on('click', function() {
        $('.game-features').removeClass('change')
        $('.game-features').addClass('unchange')
        $('.game-introduction').removeClass('unchange')
        $('.game-introduction').addClass('change')
        $('.game-in').removeClass('hidden')
        $('.game-fea').addClass('hidden')
    });
    // 图片点击放大
    $('.pic-small1').on('click', function() {
        $('.all-modal').removeClass("hidden")
        $('.pic-big1').removeClass('hidden')
        $('.pic-big2').addClass('hidden')
        $('.pic-big3').addClass('hidden')
        $('.pic-big4').addClass('hidden')
        $('.pic-big5').addClass('hidden')
        $('.pic-big6').addClass('hidden')
        $('.pic-big7').addClass('hidden')
        $('.pic-big1').animate({ 'top': '0' }, 300)
        $('.all-modal').on('click', function() {
            $('.pic-big1').animate({ 'top': '-800px' }, 300)
            $('.all-modal').addClass("hidden")
        })
    });
    $('.pic-small2').on('click', function() {
        $('.all-modal').removeClass("hidden")
        $('.pic-big2').removeClass('hidden')
        $('.pic-big1').addClass('hidden')
        $('.pic-big3').addClass('hidden')
        $('.pic-big4').addClass('hidden')
        $('.pic-big5').addClass('hidden')
        $('.pic-big6').addClass('hidden')
        $('.pic-big7').addClass('hidden')
        $('.pic-big2').animate({ 'top': '0' }, 300)
        $('.pic-big2 img').on('click', function() {
            $('.pic-big2').animate({ 'top': '-800px' }, 300)
            $('.all-modal').addClass("hidden")
        })
    });
    $('.pic-small3').on('click', function() {
        $('.all-modal').removeClass("hidden")
        $('.pic-big3').removeClass('hidden')
        $('.pic-big2').addClass('hidden')
        $('.pic-big1').addClass('hidden')
        $('.pic-big4').addClass('hidden')
        $('.pic-big5').addClass('hidden')
        $('.pic-big6').addClass('hidden')
        $('.pic-big7').addClass('hidden')
        $('.pic-big3').animate({ 'top': '0' }, 300)
        $('.pic-big3 img').on('click', function() {
            $('.pic-big3').animate({ 'top': '-800px' }, 300)
            $('.all-modal').addClass("hidden")
        })
    })
    $('.pic-small4').on('click', function() {
        $('.all-modal').removeClass("hidden")
        $('.pic-big4').removeClass('hidden')
        $('.pic-big2').addClass('hidden')
        $('.pic-big1').addClass('hidden')
        $('.pic-big3').addClass('hidden')
        $('.pic-big5').addClass('hidden')
        $('.pic-big6').addClass('hidden')
        $('.pic-big7').addClass('hidden')
        $('.pic-big4').animate({ 'top': '0' }, 300)
        $('.pic-big4 img').on('click', function() {
            $('.pic-big4').animate({ 'top': '-800px' }, 300)
            $('.all-modal').addClass("hidden")
        })
    })
    $('.pic-small5').on('click', function() {
        $('.all-modal').removeClass("hidden")
        $('.pic-big5').removeClass('hidden')
        $('.pic-big1').addClass('hidden')
        $('.pic-big2').addClass('hidden')
        $('.pic-big3').addClass('hidden')
        $('.pic-big4').addClass('hidden')
        $('.pic-big6').addClass('hidden')
        $('.pic-big7').addClass('hidden')
        $('.pic-big4').animate({ 'top': '0' }, 300)
        $('.pic-big5 img').on('click', function() {
            $('.pic-big5').animate({ 'top': '-800px' }, 300)
            $('.all-modal').addClass("hidden")
        })
    })
    $('.pic-small6').on('click', function() {
        $('.all-modal').removeClass("hidden")
        $('.pic-big6').removeClass('hidden')
        $('.pic-big1').addClass('hidden')
        $('.pic-big2').addClass('hidden')
        $('.pic-big3').addClass('hidden')
        $('.pic-big4').addClass('hidden')
        $('.pic-big5').addClass('hidden')
        $('.pic-big7').addClass('hidden')
        $('.pic-big6').animate({ 'top': '0' }, 300)
        $('.pic-big6 img').on('click', function() {
            $('.pic-big6').animate({ 'top': '-800px' }, 300)
            $('.all-modal').addClass("hidden")
        })
    })
    $('.pic-small7').on('click', function() {
            $('.all-modal').removeClass("hidden")
            $('.pic-big7').removeClass('hidden')
            $('.pic-big1').addClass('hidden')
            $('.pic-big2').addClass('hidden')
            $('.pic-big3').addClass('hidden')
            $('.pic-big4').addClass('hidden')
            $('.pic-big5').addClass('hidden')
            $('.pic-big6').addClass('hidden')
            $('.pic-big7').animate({ 'top': '0' }, 300)
            $('.pic-big7 img').on('click', function() {
                $('.pic-big7').animate({ 'top': '-800px' }, 300)
                $('.all-modal').addClass("hidden")
            })
        })
        // 当小于991的选项卡
    $('.game-features2').on('click', function() {
        $('.game-features2').removeClass('unchange')
        $('.game-features2').addClass('change')
        $('.game-fea2').removeClass('hidden')
        $('.game-features2 .icon-jiahao').addClass('hidden')
        $('.game-features2 .icon-iconjian').removeClass('hidden')
        $('.change').on('click', function() {
            $('.game-features2').addClass('unchange')
            $('.game-features2').removeClass('change')
            $('.game-fea2').addClass('hidden')
            $('.game-features2 .icon-jiahao').removeClass('hidden')
            $('.game-features2 .icon-iconjian').addClass('hidden')
            cir();
        })
    });
    var cir = function() {
        $('.game-features2').on('click', function() {
            $('.game-features2').removeClass('unchange')
            $('.game-features2').addClass('change')
            $('.game-fea2').removeClass('hidden')
            $('.game-features2 .icon-jiahao').addClass('hidden')
            $('.game-features2 .icon-iconjian').removeClass('hidden')
            $('.change').on('click', function() {
                $('.game-features2').addClass('unchange')
                $('.game-features2').removeClass('change')
                $('.game-fea2').addClass('hidden')
                $('.game-features2 .icon-jiahao').removeClass('hidden')
                $('.game-features2 .icon-iconjian').addClass('hidden')
                cir();
            })
        });
    }

    $('.game-introduction2').on('click', function() {
        $('.game-introduction2').removeClass('unchange2')
        $('.game-introduction2').addClass('change2')
        $('.game-in2').removeClass('hidden')
        $('.game-introduction2 .icon-jiahao').addClass('hidden')
        $('.game-introduction2 .icon-iconjian').removeClass('hidden')
        $('.change2').on('click', function() {
            $('.game-introduction2').addClass('unchange2')
            $('.game-introduction2').removeClass('change2')
            $('.game-in2').addClass('hidden')
            $('.game-introduction2 .icon-jiahao').removeClass('hidden')
            $('.game-introduction2 .icon-iconjian').addClass('hidden')
            cir1();
        });
    });
    var cir1 = function() {
        $('.game-introduction2').on('click', function() {
            $('.game-introduction2').removeClass('unchange2')
            $('.game-introduction2').addClass('change2')
            $('.game-in2').removeClass('hidden')
            $('.game-introduction2 .icon-jiahao').addClass('hidden')
            $('.game-introduction2 .icon-iconjian').removeClass('hidden')
            $('.change2').on('click', function() {
                $('.game-introduction2').addClass('unchange2')
                $('.game-introduction2').removeClass('change2')
                $('.game-in2').addClass('hidden')
                $('.game-introduction2 .icon-jiahao').removeClass('hidden')
                $('.game-introduction2 .icon-iconjian').addClass('hidden')
                cir1();
            });
        });
    }
}