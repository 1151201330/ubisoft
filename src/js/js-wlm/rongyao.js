$(function() {
    //获取焦点
    var valueBak = $('.text').attr('placeholder')
    $('.text').on('focus', function() {

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


    $('.menu-toggle i').on('click', function() {
        $('.rongyao').toggleClass('menu-active')

    });
    $('.nav-btm .nav-btm-bb').on('click', function() {
        $('.nav-btm>li').eq(0).toggleClass('frot')
    })
    $('.nav-btm .nav-btm-bp').on('click', function() {
        $('.nav-btm>li').eq(1).toggleClass('frot')

    })
    var obj = {},
        middleX,
        middleY;

    var li = $('#thumbnails>ul>li>a>img'); //缩略图
    obj.middleBox = $(".primary-image"); //中等图展示区
    obj.middleImg = $('.primary-images'); //中等图片
    obj.bigImg = $('.image-ima'); //大图片
    obj.smallImg = $('.primary-images')
    uli = $('.content-wrapper>section')
    nnav = $('.ui-tabs-nav>li')
    var hh = $('.content-wrapper>.pdp-accordion-thumb');
    //console.log(hh.length)
    for (var b = 0; b < hh.length; b++) {
        //console.log($(hh[i]))
        $(hh[b]).on('click', function() {
            console.log($(this).index() / 2)
            hh.eq($(this).index() / 2).toggleClass('ui-state-active')
            uli.eq($(this).index() / 2).toggleClass('ui-accordion-content-active')
        })
    }
    for (var i = 0; i < li.length; i++) { //缩略图点击事件换相应的中图和大图
        // var _index=$('li').index(li[i])
        // console.log(_index)
        $(li[i]).on('click', function() {
            console.log($(li).index(this))
            $("#thumbnails .thumb").eq($(li).index(this)).addClass('sect').siblings().removeClass('sect');
            obj.middleImg.attr("src", "../images/image-wlm/" + ($(li).index(this) + 90) + ".jpg");
            obj.bigImg.attr('src', "../images/image-wlm/" + ($(li).index(this) + 81) + ".jpg")

        });





        obj.middleBox.on('mouseenter', function() {
            //    for (var i = 0;i<obj.s.length; i++){
            //        $(".obj.middleImg");
            //    }
            //中等展示区进去事件，显示大图 隐藏中图

            obj.bigImg.css('display', 'block');



        })

        obj.middleBox.on('mouseleave', function() {
            //中等展示区进去事件，显示中图 隐藏大图

            obj.bigImg.css('display', 'none');

        })

        obj.middleBox.on('mousemove', function(ev) {
            ev = ev || window.ev;
            //console.log(ev.clientX)

            obj.bigImg.offset({
                left: -ev.clientX + 559,
                top: -ev.clientY + 250
            });
        })
    }

    var n = 5;
    var s = 0
    var nu = 1
        //右击
    $(".jcarousel-next").on("click", function(ev) {
        ev = ev || window.event;
        if (li.length > n) {
            n++;
            $("#thumbnails ul").css({
                'left': -$(".product-image-container .thumb").width() * (n - 5) - 3 * (nu) + 'px',
            });
            nu++;
            console.log(nu)
        }
        if (li.length > s + 1) {
            s++;

            $('#thumbnails .thumb').eq(s).addClass('sect').siblings().removeClass('sect')
            obj.middleImg.attr("src", "../images/image-wlm/" + (s + 90) + ".jpg");
        }

    })

    //左击
    $(".jcarousel-prev").on("click", function(ev) {
        ev = ev || window.event;

        if (n > 5) {
            n--;
            nu--;
            console.log(nu)
            $("#thumbnails ul").css({ left: -$(".product-image-container .thumb").width() * (n - 5) - 3 * (nu) + 3 + "px" });

        }
        if (0 < s) {
            s--;

            $('#thumbnails .thumb').eq(s).addClass('sect').siblings().removeClass('sect')
            obj.middleImg.attr("src", "../images/image-wlm/" + (s + 90) + ".jpg");
        }

    });
    $('.read-more').on('click', function() {
        $(".read-more button").css('display', 'none');
        $(".product-description").addClass("opened");
    })
    for (var i = 0; i < uli.length; i++) {

        $(nnav[i]).on('click', function() {
            console.log(nnav.eq($(this).index()))
            nnav.eq($(this).index()).toggleClass('acv').siblings().removeClass('acv')
            uli.eq($(this).index()).css('display', 'block').siblings().css('display', 'none')
        })
    }


})