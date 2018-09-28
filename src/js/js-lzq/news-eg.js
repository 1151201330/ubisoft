$(function() {
    $('.platform').on('click', function() {
        $('.drop').addClass('show');
        $('.drop2').removeClass('show');
        $('.drop li').on('click', function() {
            $('.drop').removeClass('show');

        })
    })
    $('.game').on('click', function() {
        $('.drop').removeClass('show');
        $('.drop2').addClass('show');
        $('.drop2 li').on('click', function() {
            $('.drop2').removeClass('show');
        })
    })
})