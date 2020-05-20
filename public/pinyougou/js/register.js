window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regqq = /^[1-9]\d{4,}$/; // 10000 qq号的正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; // 昵称的正则表达式    [\u4e00-\u9fa5] 汉字 字典的第一个字到最后一个字
    var regmsg = /^\d{6}$/; // 短信验证码的正则表达式
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/; //密码的正则表达式
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel); // 手机号码
    regexp(qq, regqq); // qq号码
    regexp(nc, regnc); // 昵称
    regexp(msg, regmsg); // 短信验证
    regexp(pwd, regpwd); // 密码框

    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            var valstr = this.value.trim();
            if (valstr == '') {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_ico"></i>  请输入相应内容 ';
            } else {
                if (reg.test(this.value)) {
                    // console.log('正确的');
                    // this.nextElementSibling 下一个兄弟的元素
                    this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success_ico"></i> 恭喜您输入正确';
                } else {
                    // console.log('不正确');
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error_ico"></i> 格式不正确，请重新输入 ';
                }
            }
        }
    };

    // 确定密码表单的判断函数
    surepwd.onblur = function() {
        var valstr = this.value.trim();
        if (valstr == '') {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_ico"></i>  请输入相应内容 ';
        } else {
            if (this.value == pwd.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_ico"></i> 恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_ico"></i> 两次密码输入不一致';
            }
        }
    }

}