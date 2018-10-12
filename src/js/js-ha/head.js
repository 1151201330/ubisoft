//移动端按钮下拉框划入划出
$('.nav-right-btn').on('click', function() {
    $('.button-show').slideToggle();
});

//移动端游戏板块下拉框
$('.game-btn').on('click', function() {
    $('.game-show').css("display") === "none" ? $('.game-show').css("display", "block") : $('.game-show').css("display", "none");
});

// 搜索输入框出现消失
$('.search-action').on('click', function() {
    $('.search-show').css("display") === "none" ? $('.search-show').css("display", "block") : $('.search-show').css("display", "none");
});

//pc端二级菜单
$('.nav-list-drop').on('click', function() {
    $('.dropdown-menu').css("display") === "none" ? $('.dropdown-menu').css("display", "block") : $('.dropdown-menu').css("display", "none");
})

//ajax联合json模糊搜索
$(function() {
    $('.search-show>input').keyup(function() {
        var n = $(this).val();
        if (n != '') {
            $.ajax({
                type: "GET",
                url: "http://10.31.157.191:8080/huangan/src/php/search-ha.json",
                data: {
                    n: n
                },
                dataType: "json",
                success: function(data) {
                    $(".search-show-result").empty();
                    var str = "";
                    $.each(data, function(commendIndex, comment) {
                        if (comment['username'].indexOf(n) >= 0) {
                            $('.search-show-result').css('display', 'block');
                            str += '<li>' + comment['username'] + '</li>';
                        }
                    });
                    $(".search-show-result").append(str);
                }
            });
        } else {
            $(".search-show-result").empty();
            $('.search-show-result').css('display', 'none');
        }
    });
});

//预加载动画消失
setTimeout(function() {
    $('.loadblock').animate({ top: '-100%' }, 1000);
    $('.loadblock').animate({ display: 'none' });
}, 2300);

setTimeout(function() {
    $('body').removeClass('jzgd');
}, 3300);