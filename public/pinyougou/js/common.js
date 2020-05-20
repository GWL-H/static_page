window.addEventListener('load', function() {
    // 1. 获取元素
    var nav = document.querySelector('#head-nav');
    var navlis = nav.querySelectorAll('.n');
    var dropdowns = document.querySelectorAll('.dropdown-layer');

    // nav 循环 个数
    for (var i = 0; i < navlis.length; i++) {
        navlis[i].index = i;
        dropdowns[i].index = i;
        // console.logt(navlis[i].index);

        // 鼠标经过 排他 添加类 当前对应索引号dropdown[i]显示
        navlis[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < navlis.length; i++) {
                navlis[i].className = '';
            }
            this.className = 'nav-current';
            dropdowns[this.index].style.display = 'block';
        });

        // 鼠标离开 可能1.隐藏 类取消  
        navlis[i].addEventListener('mouseleave', function() {
            dropdowns[this.index].style.display = 'none';
            this.className = '';
        });
        // 2.经过dropdowns 显示 添加，
        dropdowns[i].addEventListener('mouseenter', function() {
            this.style.display = 'block';
            navlis[this.index].className = 'nav-current';
        });

        // 离开dropdowns 隐藏 类取消
        dropdowns[i].addEventListener('mouseleave', function() {
            this.style.display = 'none';
            navlis[this.index].className = '';
        });
    }

    //  menu_items 主菜单栏经过事件
    var menu_item = document.querySelector('#menu_item')
    var menu_items = document.querySelectorAll('#menu_item li');
    var cate_parts = document.querySelectorAll('.cate_part')
    for (var i = 0; i < menu_items.length; i++) {
        menu_items[i].index = i;
        menu_items[i].addEventListener('mouseover', function() {
            cate_parts[this.index].style.display = 'block';
        })
        menu_items[i].addEventListener('mouseleave', function() {
            cate_parts[this.index].style.display = 'none';
        })
        cate_parts[i].addEventListener('mouseover', function() {
            this.style.display = 'block';
        })
        cate_parts[i].addEventListener('mouseleave', function() {
            this.style.display = 'none';
        })
    }

    // 固定搜索栏显示隐藏事件
    var recommend = document.querySelector('.recommend');
    var headerFix = document.querySelector('.header-fix');
    var recommendTop = recommend.offsetTop;
    // console.log(recommend.offsetTop); recommend.offsetTop  元素对象距离页面顶部距离
    gundong()
    document.addEventListener('scroll', function() {
        // window.pageYOffset 页面卷入的距离
        // console.log(window.pageYOffset);
        gundong()
    })

    function gundong() {
        if (window.pageYOffset > recommendTop) {
            headerFix.style.display = 'block';
        } else {
            headerFix.style.display = 'none';
        }
    }
})