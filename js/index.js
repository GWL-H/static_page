$(function() {
    // 菜单栏
    $(".menu_icon").click(function() {
        if ($(".menu").is(":hidden")) {
            // is(":hidden")当前元素 是否:hidden隐藏或:visible显示 是返回true 不是返回flase
            // console.log($(".menu").is(":hidden"));
            $(".menu").slideDown();
        } else {
            $(".menu").slideUp();
        }
    });
    // 导航栏点击事件
    $(".nav").find("li").eq(0).siblings("li").click(function() {
        alert('待开发');
    });
    $(".menu").find("li").eq(0).siblings("li").click(function() {
        alert('待开发');
    })

    // 图片放大
    $(".pro_pic").on({
        mouseenter: function() {
            $(this).children("img").stop().animate({
                width: "130%",
                height: "130%",
                top: "-15%",
                left: "-15%"
            }, 500)
        },
        mouseleave: function() {
            $(this).children("img").stop().animate({
                width: "100%",
                height: "100%",
                top: 0,
                left: 0
            }, 500)
        }
    })

    // 右侧导航栏
    // 1.滚动事件
    var sec01Top = $(".sec01").offset().top;
    var sec02Top = $(".sec02").offset().top;
    // var sec031Top = $(".sec03 .index_section_hd:first").offset().top;
    var sec031Top = $(".sec03 .index_section_hd").eq(0).offset().top;
    var sec032Top = $(".sec03 .index_section_hd").eq(1).offset().top;

    function setScroll(ele) {
        if ($(document).scrollTop() > sec01Top) {
            // ele.css("display", "block");
            ele.fadeIn();
        } else {
            // ele.css("display", "none");
            ele.fadeOut();
        }
    };

    setScroll($(".rightNav"));
    $(window).scroll(function() {
        setScroll($(".rightNav"));
    });
    // 2.鼠标经过离开事件
    var tempS;
    $(".rightNav").on({
        mouseenter: function() {
            tempS = setTimeout(function() {
                $(".rightNav").find("li").each(function(i) {
                    var that = $(this);
                    setTimeout(function() {
                        that.animate({
                            right: "0"
                        }, 200);
                    }, 50 * i);
                });
            }, 200);
        },
        mouseleave: function() {
            // 防止鼠标离开时 200ms后开启经过事件  同时防止不断刷 
            if (tempS) { clearTimeout(tempS); }

            $(".rightNav").find("li").each(function(i) {
                var that = $(this);
                setTimeout(function() {
                    that.animate({
                        right: "-110px"
                    }, 200);
                }, 50 * i);
            });
        }
    });
    // 3.点击跳转
    $.each($(".rightNav").find("li"), function(i, ele) {
        $(ele).click(function() {
            setTop(i);
        })
    })

    function setTop(i) {
        if (i == 0) {
            // $(document).scrollTop(0); // 直接跳到顶部
            // 是html,body做动画 不是document
            $("html,body").stop().animate({
                scrollTop: 0
            }, 500)
        } else if (i == 1) {
            $("html,body").stop().animate({
                scrollTop: sec01Top + 1
            })
        } else if (i == 2) {
            $("html,body").stop().animate({
                scrollTop: sec02Top
            })
        } else if (i == 3) {
            $("html,body").stop().animate({
                scrollTop: sec031Top
            })
        } else if (i == 4) {
            $("html,body").stop().animate({
                scrollTop: sec032Top
            })
        }
    };

    // 底部导航
    $.each($(".footer_nav").find("li"), function(i, ele) {
        $(ele).click(function() {
            setTop(i + 1);
        })
    })



})