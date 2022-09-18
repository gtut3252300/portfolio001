/*wow*/
var wow = new WOW({
    boxClass: 'wow', // 要套用WOW.js縮需要的動畫class(預設是wow)
    animateClass: 'animate__animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
    offset: 0, // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
    mobile: true, // 手機上是否要套用動畫 (預設是true)
    live: true, // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)

    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
});
wow.init();


$(function() {
    $(".gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });
});

$(function() {
    $('.index-banner-btn a ').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function() {

    /*banner按鈕*/
    gsap.fromTo(".js-btn li", 1, {
        scale: 1.1,
        ease: "power2",
        delay: 0.6,
        rotation: 15,
    }, {
        rotation: -15,
        repeat: -1,
        yoyoEase: true,
        yoyo: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause"
    });
    gsap.to(".style_animate", {
        scrollTrigger: {
            trigger: ".block_animate",
            start: "top",
            scrub: 1.6, //平滑度
        },
        y: 100,
    })
    gsap.to(".style_animate-top", {
        scrollTrigger: {
            trigger: ".block_animate",
            start: "top center",
            scrub: 3, //平滑度
        },
        y: -100,
    })

});



gsap.to(".index-banner-title", {
    y: 12,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});

gsap.to(".tagimg", {
    rotation: 5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
});