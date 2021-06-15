$( document ).ready(function() {

    $('body').addClass('show');

    var swiper = new Swiper('.swiper-top', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    var swiperGame = new Swiper('.swiper-game1', {
        navigation: {
            nextEl: '.swiper-game-control .next',
            prevEl: '.swiper-game-control .prev',
        },
        pagination: {
            el: '.swiper-game-control .pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
            },
        },
    });


    var swiperBlog = new Swiper('.swiper-blog', {
        navigation: {
            nextEl: '.swiper-blog-control .next',
            prevEl: '.swiper-blog-control .prev',
        },
        pagination: {
            el: '.swiper-blog-control .pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
            },
        },
    });


    var swiperBlogInner = new Swiper('.swiper-blog-inner', {
        navigation: {
            nextEl: '.blog-swipe-wrap .next',
            prevEl: '.blog-swipe-wrap .prev',
        },
        pagination: {
            el: '.swiper-blog-inner .pagination',
            type: 'fraction',
        },
    });


    $('.input-block input').focusout(function () {
        if($(this).val()!=''){
            $(this).addClass('fill')
        } else {
            $(this).removeClass('fill')
        }
    })


    $('.filter-act').click(function () {
        $('.filter').toggleClass('act');
        return false
    })

    $('.games .filter a').click(function () {

        var id = $(this).attr('data-id');

        if($('.game-tab'+id).length>0){
            swiperGame.destroy();
            $('.game-tab').removeClass('act');
            $('.game-tab'+id).addClass('act');
            $('.games .filter a').removeClass('act');
            $('.filter-act').html($(this).html())
            $('.filter').removeClass('act')
            swiperGame = new Swiper('.swiper-game'+id, {
                navigation: {
                    nextEl: '.swiper-game-control .next',
                    prevEl: '.swiper-game-control .prev',
                },
                pagination: {
                    el: '.swiper-game-control .pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<a href="#" class="' + className + '">' + (index + 1) + '</a>';
                    },
                },
            });
            $(this).addClass('act');
        }

       return false;
    });

    $('.open-menu').click(function () {
        $(this).toggleClass('act');
        return false
    })

    $(".go-to-play").click(function (){
        if($('.games').length>0){
            $('html, body').animate({
                scrollTop: $(".games").offset().top
            }, 500);
            $('.open-menu').removeClass('act');
            return false;
        }
    });

    $(".go-to-download").click(function (){
        if($('.download-free').length>0) {
            $('html, body').animate({
                scrollTop: $(".download-free").offset().top
            }, 500);
            $('.open-menu').removeClass('act');
            return false;
        }
    });
});



