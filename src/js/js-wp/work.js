window.onload = function() {
    var show = function() {
        $('.mouse').animate({
            'top': '600px'
        }, 1000).animate({
            'top': '642px'
        }, 1000);
    }
    setInterval(show, 0);
    $('.game-features').on('click', function() {
        $('.game-introduction').addClass('unchange')
        $('.game-introduction').removeClass('change')
        $('.game-features').removeClass('unchange')
        $('.game-features').addClass('change')
        $('.game-fea').removeClass('hidden')
        $('.game-in').addClass('hidden')
    })
    $('.game-introduction').on('click', function() {
        $('.game-features').removeClass('change')
        $('.game-features').addClass('unchange')
        $('.game-introduction').removeClass('unchange')
        $('.game-introduction').addClass('change')
        $('.game-in').removeClass('hidden')
        $('.game-fea').addClass('hidden')
    })
}