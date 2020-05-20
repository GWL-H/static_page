window.addEventListener('load', function() {
    // 放大镜效果
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        // (1). 先计算出鼠标在盒子内的坐标  this.offsetLeft 是盒子到父盒子或body的距离  e.pageX 鼠标到页面的距离
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了 （使鼠标在mask盒子中间）
        // (3) 我们mask 移动的距离  mask.offsetWidth 盒子宽度  
        // - mask.offsetWidth / 2 因为盒子需要向左和向上移盒子高度一半才能时鼠标在盒子中间， 
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2; // maskX  maskY mask盒子距离img图片盒子的距离
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离 preview_img.offsetWidth - mask.offsetWidth  因为是正方形 所以宽高一样
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px'; // 记得加 px
        mask.style.top = maskY + 'px';

        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离 
        // 按等比例进行运算的：  遮挡移动距离/遮挡最大距离 = 大图移动距离 / 大图最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth; // 大图宽度 - 框的宽度 = 大图最大移动距离 
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px'; // 由于不是框在移动 而是图片在移动 所以是 负的 -px
        bigIMg.style.top = -bigY + 'px';
    })


    // 商品选项
    var chooseColors = document.querySelectorAll('.choose_color a');
    var chooseVersions = document.querySelectorAll('.choose_version a');
    var chooseRls = document.querySelectorAll('.choose_rl a');
    var chooseTypes = document.querySelectorAll('.choose_type a');
    var chooseTaozs = document.querySelectorAll('.choose_taoz a');

    function Choose(name) {
        for (var i = 0; i < name.length; i++) {
            name[i].addEventListener('click', function() {
                for (var i = 0; i < name.length; i++) {
                    name[i].className = '';
                }
                this.className = 'current';
            })
        }
    };
    Choose(chooseColors);
    Choose(chooseVersions);
    Choose(chooseRls);
    Choose(chooseTypes);
    Choose(chooseTaozs);

    // 购物车+-
    var add = document.querySelector('.add');
    var reduce = document.querySelector('.reduce');
    var inputc = document.querySelector('.choose_amount input');

    var val = inputc.value;
    add.addEventListener('click', function() {
        if (val > 0) {
            reduce.style.cursor = 'pointer'
        } else if (val < 0) {
            return;
        }
        val++;
        inputc.value = val;
    });
    reduce.addEventListener('click', function() {
        if (val == 1) {
            reduce.style.cursor = 'not-allowed'
            return;
        } else if (val < 1) {
            reduce.style.cursor = 'not-allowed'
            return;
        }
        val--;
        inputc.value = val;
    });
    inputc.addEventListener('change', function() {
        val = inputc.value;
        if (val > 99) {
            inputc.value = 99;
        } else if (val > 1) {
            inputc.value = val;
        } else {
            inputc.value = 1;
        }
    });

    // tab栏切换
    // 辅
    var tablistlis = document.querySelectorAll('.tab_list li');
    var tabconuls = document.querySelectorAll('.tab_con>ul');

    for (var i = 0; i < tablistlis.length; i++) {
        tablistlis[i].setAttribute('index', i);
        tablistlis[i].addEventListener('click', function() {
            for (var i = 0; i < tablistlis.length; i++) {
                tablistlis[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('index')
            for (var i = 0; i < tabconuls.length; i++) {
                tabconuls[i].style.display = 'none';
            }
            tabconuls[index].style.display = 'block';
        })
    }
    // 主
    var lis = document.querySelectorAll('.deatail_tab_2 .deatail_tab_list li')
    var items = document.querySelectorAll('.deatail_tab_con .item')

    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('index');
            for (i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            items[index].style.display = 'block';
        })
    }

    // 点击全部商品分类，显示菜单栏
    var navsy = document.querySelector('#everingsy');
    var navcd = document.querySelector('#everingcd');
    var cate_parts = document.querySelectorAll('.cate_part')

    navsy.addEventListener('mouseenter', function() {
        navcd.style.display = 'block';
    });
    navsy.addEventListener('mouseleave', function() {
        navcd.style.display = 'none';
    });
    navcd.addEventListener('mouseenter', function() {
        navcd.style.display = 'block';
    })
    navcd.addEventListener('mouseleave', function() {
        navcd.style.display = 'none';
    })
    for (var i = 0; i < cate_parts.length; i++) {
        cate_parts[i].addEventListener('mouseover', function() {
            navcd.style.display = 'block';
            this.style.display = 'block';
        })
        cate_parts[i].addEventListener('mouseleave', function() {
            this.style.display = 'none';
            navcd.style.display = 'none';
        })
    }
})