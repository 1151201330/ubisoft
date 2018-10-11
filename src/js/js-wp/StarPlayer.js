window.onload = function() {
        // 轮播
        $('.su-1').on('click', function() {
            $('.rq1').removeClass('hidden')
            $('.rq2').addClass('hidden')
        });
        $('.su-2').on('click', function() {
            $('.rq1').addClass('hidden')
            $('.rq2').removeClass('hidden')
        });