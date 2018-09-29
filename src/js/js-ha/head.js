// 搜索输入框出现消失
$('.search-action').on('click', function() {
    $('.search-show').css("display") === "none" ? $('.search-show').css("display", "block") : $('.search-show').css("display", "none");
});

//移动端按钮下拉框划入划出
$('.nav-right-btn').on('click', function() {
    $('.button-show').slideToggle();
});