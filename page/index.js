$(document).ready(function() {
    /*页面初始化*/

    /*header鼠标事件*/
    $("#main li a.index").addClass("activeColor");

    /*新的banner*/
    var swiper = new Swiper('.index_banner .swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /*技术优势--鼠标效果*/
    $("div.TechnicalAdvantage .row .col-xs-6").mouseover(function(){
        $(this).addClass("movein");
    });

    $("div.TechnicalAdvantage .row .col-xs-6").mouseout(function(){
       $(this).removeClass("movein");
    });


    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        /*移动-产品--轮播*/
        var swiper = new Swiper('.productList .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
        /*pc-产品--轮播*/
        var swiper = new Swiper('.productList .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }


    /*产品--鼠标效果*/
    $("div.maxchainIntro .productList .swiper-slide").mouseover(function(){
        $(this).addClass("swiper-slide-actve");
        $(this).children("ul").children("li").children(".title_info").children("hr").addClass("active");
    });

    $("div.maxchainIntro .productList .swiper-slide").mouseout(function(){
        $(this).removeClass("swiper-slide-actve");
        $(this).children("ul").children("li").children(".title_info").children("hr").removeClass("active");
    });


    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        /*移动-企业资讯--轮播*/
        var swiper = new Swiper('.enterpriseInfo .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }else{
        /*pc-企业资讯--轮播*/
        var swiper = new Swiper('.enterpriseInfo .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }


    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        /*移动-合作伙伴--轮播*/
        var swiper = new Swiper('.cooperativePartner .swiper-container', {
            slidesPerView: 1,
            slidesPerColumn: 3,
            spaceBetween: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }else{
        /*pc-合作伙伴--轮播*/
        var swiper = new Swiper('.cooperativePartner .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 3,
            spaceBetween: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }


});

/*function*/
