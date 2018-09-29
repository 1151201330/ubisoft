$(function() {
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
})